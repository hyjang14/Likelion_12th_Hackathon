from django.db import models
from django.contrib.auth.models import AbstractUser # AbstractUser 불러오기

# 커스텀 유저
class User(AbstractUser):
    profile = models.ImageField(verbose_name='프로필', blank=True, null=True, upload_to='accounts_photo', default='accounts_photo/accounts_default.jpg')
    username = models.CharField(verbose_name='아이디', null=False, blank=False, unique=True, max_length=40)
    name = models.CharField(verbose_name='이름', max_length=40)
    nickname = models.CharField(verbose_name='닉네임', null=False, blank=False, unique=True, max_length=40)
    email = models.EmailField()
    birthdate = models.DateField(verbose_name='생년월일', blank=True, null=True)
    phone = models.CharField(verbose_name='전화번호', max_length=40)
        
    def __str__(self):
        return self.username