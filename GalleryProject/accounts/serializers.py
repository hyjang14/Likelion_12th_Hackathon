from rest_framework import serializers
from .models import User

from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

# 회원가입
class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    password_confirm = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})
    
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'password_confirm', 'name', 'nickname', 'email', 'birthdate', 'phone', 'profile']
        extra_kwargs = {
            'password': {'write_only': True},
            'password_confirm': {'write_only': True},
        }

    # 비밀번호 유효성 검사
    def validate(self, data):
        password = data.get('password')
        password_confirm = data.get('password_confirm')

        # 비밀번호 확인 검사
        if password != password_confirm:
            raise serializers.ValidationError({'password_confirm': '비밀번호가 일치하지 않습니다.'})

        # 비밀번호 유효성 검사
        try:
            validate_password(password)
        except ValidationError as e:
            raise serializers.ValidationError({'password': e.messages})

        return data

    def create(self, validated_data):

        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            name=validated_data.get('name', ''),
            nickname=validated_data.get('nickname', ''),
            email=validated_data.get('email', ''),
            birthdate=validated_data.get('birthdate', None),
            phone=validated_data.get('phone', ''),
            profile=validated_data.get('profile', None)
        )
        return user



# 회원정보 수정
class UserUpdateSerializer(serializers.ModelSerializer):
   
   # 닉네임 중복 유효성 검사
    def validate_nickname(self, value):
        if User.objects.filter(nickname=value).exists():
            raise serializers.ValidationError("이미 존재하는 닉네임입니다.")
        return value
    
    def update(self, instance, validated_data):
        instance.profile = validated_data.get('username', instance.profile)
        instance.nickname = validated_data.get('nickname', instance.nickname)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance
    
    class Meta:
        model = User
        fields = ['id', 'profile', 'nickname', 'phone']  

# 회원정보 조회
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'nickname', 'email', 'birthdate', 'phone', 'profile']