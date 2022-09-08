from ast import List
from django.shortcuts import render

# from rest_framework.generics import ListView
from rest_framework import viewsets

from .models import Candidate
from .serializers import CandidateSerializer, CandidateListSerializer
# Create your views here.

class ListCandidate(viewsets.ReadOnlyModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateListSerializer

# retrieve, create, update
class CandidateApi(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer