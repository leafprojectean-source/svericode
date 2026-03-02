from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    userid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=50, unique=True)   # ✅ unique
    email = models.EmailField(unique=True)                    # ✅ unique

    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('user', 'User'),
        ('manager', 'Manager'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')

    def __str__(self):
        return self.username
