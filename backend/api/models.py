from django.db import models

# Create your models here.

class User(models.Model):
    userid = models.AutoField(primary_key=True)
    username = models.CharField(max_length=150, unique=True)
    useremail = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # store hashed passwords!
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username
