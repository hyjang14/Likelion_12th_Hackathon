from rest_framework.serializers import ModelSerializer
from .models import Post, Analysis

class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [ 'id', 'title', 'content', 'img', 'writer', 'view_at', 'created_at']

class AnalysisSerializer(ModelSerializer):
    post = PostSerializer()

    class Meta:
        model = Analysis
        fields = ['id', 'post', 'analysis', 'happiness', 'sadness', 'anger', 'anxiety', 'created_at']