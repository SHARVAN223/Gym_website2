from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class UserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):

        if not email:
            raise ValueError("Email is required")

        user = self.model(
            email=self.normalize_email(email),
            **extra_fields
        )

        user.set_password(password)

        user.save()

        return user


class User(AbstractBaseUser):

    name = models.CharField(max_length=100)

    email = models.EmailField(unique=True)

    phone = models.CharField(max_length=15)

    is_active = models.BooleanField(default=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['name', 'phone']

    def __str__(self):
        return self.email