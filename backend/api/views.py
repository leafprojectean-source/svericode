from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

# Create your views here.

def hello_world(request):
    return HttpResponse("Hello World")

def home(request):
    return HttpResponse("Welcome to the backend root")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
