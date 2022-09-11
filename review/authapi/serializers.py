from django.contrib.auth import get_user_model
User = get_user_model()

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'is_employer']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data): # if password is not hashed then account is not considered active
        password = validated_data.pop('password')
        user = super().create(validated_data)
        user.set_password(password)
        user.save()
        return user