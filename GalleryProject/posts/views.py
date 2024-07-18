from .models import Post, Analysis
from .serializers import PostSerializer, AnalysisSerializer
from rest_framework.viewsets import ModelViewSet 
from rest_framework.generics import ListAPIView
import re

# AI
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import openai
from django.conf import settings

class PostViewSet(ModelViewSet): 
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        serializer.save(writer = self.request.user)

class AnalysisListView(ListAPIView):
    queryset = Analysis.objects.all()
    serializer_class = AnalysisSerializer


# AI 감정분석
openai.api_key = settings.OPENAI_API_KEY

class AnalyzePostView(APIView):

    def get(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
        
        model = "gpt-4-turbo"

        # 프롬프트
        query = (
            "이 글을 심리 분석하고, 필수로 각 감정 (행복, 슬픔, 분노, 불안)을 퍼센트로 도출해줘. "
            "감정 전부를 합쳐서 100%일 필요는 없어 분석 마지막에 %를 정리해줘"
            "예를 들어: 행복 70%, 슬픔 10%, 분노 3%, 불안 40%"
        )
        
        # 메시지 설정하기
        messages = [
            {"role": "system", "content": "You are a helpful assistant"},
            {"role": "user", "content": post.content},
            {"role": "user", "content": query}
        ]
        
        try:
            # API 호출
            response = openai.ChatCompletion.create(
                model=model,
                messages=messages,
                temperature=0.8
            )

            # 응답 출력
            answer = response['choices'][0]['message']['content']
            # 분석 결과에서 퍼센트를 추출
            analysis_result = self.extract_emotions(answer)

            # 데이터베이스에 저장
            analysis_record = Analysis.objects.create(
                post=post,
                analysis=answer,
                happiness=analysis_result.get('happiness', 0.0),
                sadness=analysis_result.get('sadness', 0.0),
                anger=analysis_result.get('anger', 0.0),
                anxiety=analysis_result.get('anxiety', 0.0)
            )

            return Response({'post': PostSerializer(post).data, 'analysis': AnalysisSerializer(analysis_record).data}, status=status.HTTP_200_OK)
        
        except openai.error.OpenAIError as e:
            # OpenAI API 오류 처리
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def extract_emotions(self, text):
        emotions = {
            'happiness': 0.0,
            'sadness': 0.0,
            'anger': 0.0,
            'anxiety': 0.0
        }
        patterns = {
            'happiness': re.compile(r'행복\s*[:：]?\s*(\d+(\.\d+)?)%'),
            'sadness': re.compile(r'슬픔\s*[:：]?\s*(\d+(\.\d+)?)%'),
            'anger': re.compile(r'분노\s*[:：]?\s*(\d+(\.\d+)?)%'),
            'anxiety': re.compile(r'불안\s*[:：]?\s*(\d+(\.\d+)?)%')
        }
        for emotion, pattern in patterns.items():
            match = pattern.search(text)
            if match:
                try:
                    emotions[emotion] = float(match.group(1))
                except ValueError:
                    # 매칭되었으나 변환에 실패한 경우 디폴트 값 사용
                    emotions[emotion] = 0.0
        return emotions