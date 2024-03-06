from rest_framework import serializers
from .models import UserProfile
from django.core.exceptions import ValidationError
from django.core.validators import validate_email as django_validate_email

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'first_name', 'surname', 'email', 'phone_number']

    def validate_email(self, value):
        try:
            django_validate_email(value)
        except ValidationError:
            raise serializers.ValidationError("Invalid email format.")

        if UserProfile.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email address already exists.")
        
        return value

    def validate_phone_number(self, value):
        if not all(char.isdigit() or char == '+' for char in value):
            raise serializers.ValidationError("Phone number must contain only digits.")
        return value
