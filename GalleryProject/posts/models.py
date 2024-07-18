from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Post(models.Model) : 
    title = models.CharField(verbose_name="제목", max_length=128, null=False) # 제목 15글자 제한
    content = models.TextField(verbose_name="내용", null=False) 
    img = models.ImageField(verbose_name="사진", blank=True, upload_to='posts_photo')
    view_at = models.DateTimeField(verbose_name="관람일", auto_now_add=True)
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
    # likes = models.PositiveIntegerField(verbose_name="좋아요", default=0)
    writer = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='posts_posts')
    
    def __str__(self):
        return self.title

class Analysis(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='analysis_results')
    analysis = models.TextField(verbose_name="분석 결과")
    happiness = models.FloatField(verbose_name="행복 퍼센트", null=True, blank=True, default=0.0)
    sadness = models.FloatField(verbose_name="슬픔 퍼센트", null=True, blank=True, default=0.0)
    anger = models.FloatField(verbose_name="분노 퍼센트", null=True, blank=True, default=0.0)
    anxiety = models.FloatField(verbose_name="불안 퍼센트", null=True, blank=True, default=0.0)
    created_at = models.DateTimeField(verbose_name="작성일", auto_now_add=True)
