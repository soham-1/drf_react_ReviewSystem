from ast import List
from django.shortcuts import render

# from rest_framework.generics import ListView
from rest_framework import viewsets, generics

from .models import Candidate
from .serializers import CandidateSerializer
# Create your views here.

class ListCandidate(viewsets.ReadOnlyModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer

# retrieve, create, update
class CandidateApi(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer