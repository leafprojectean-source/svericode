from django.shortcuts import render
from django.http import HttpResponse

def register_user(Response):
    return HttpResponse("user created")

def home(Response):
    return HttpResponse("Welcome to user app home")