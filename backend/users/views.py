from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerializer, LoginSerializer
from .utils import set_jwt_cookie

def register_user(Response):
    return HttpResponse("user created")

def home(Response):
    return HttpResponse("Welcome to user app home")

# Register
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

# Login
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = authenticate(
                username=serializer.validated_data['username'],
                password=serializer.validated_data['password']
            )
            if user:
                response = Response({"message": "Login successful", "role": user.role}, status=status.HTTP_200_OK)
                return set_jwt_cookie(response, user)
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Logout
class LogoutView(APIView):
    def post(self, request):
        response = Response({"message": "Logged out"}, status=status.HTTP_200_OK)
        response.delete_cookie("access_token")
        return response

# Protected Profile
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"username": request.user.username, "role": request.user.role})
