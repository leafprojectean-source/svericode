from django.shortcuts import render
from django.http import HttpResponse

def hello(Response):
    return HttpResponse("Welcome to backend root service")