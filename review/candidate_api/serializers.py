from dataclasses import field
from rest_framework import serializers

from .models import Candidate

class CandidateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        exclude = ('resume',)

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = "__all__"