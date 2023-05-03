from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
from .managers import KBTUserManager


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = KBTUserManager()

    def __str__(self):
        return self.first_name + " " + self.last_name
