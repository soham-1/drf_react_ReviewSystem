from django.urls import path

from . import views

app_name = 'candidate_api'

urlpatterns = [
    path('', views.index)
]
