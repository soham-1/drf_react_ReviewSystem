from django.urls import path

from . import views

app_name = 'candidate_api'

urlpatterns = [
    path('candidate-list/', views.ListCandidate.as_view({'get': 'list'}), name='candidate-list'),
    path('candidate/<pk>', views.CandidateApi.as_view({'get': 'retrieve', 'post': 'create', 'patch': 'partial_update'}))
]
