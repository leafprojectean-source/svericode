from . import views

from django.urls import path, include
from rest_framework import routers
from api.views import UserViewSet


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', views.home, name='home'),          # root path
    path('hello/', views.hello_world, name='hello_world'),
    path('api/', include(router.urls)),
]
