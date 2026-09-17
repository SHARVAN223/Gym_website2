from django.test import TestCase

from .models import User
from .serializers import RegisterSerializer


class RegisterSerializerTests(TestCase):
    def test_duplicate_phone_number_is_rejected(self):
        User.objects.create_user(
            email="existing@example.com",
            password="testpass123",
            name="Existing User",
            phone="9876543210",
        )

        serializer = RegisterSerializer(data={
            "name": "New User",
            "email": "new@example.com",
            "phone": "9876543210",
            "password": "newpass123",
        })

        self.assertFalse(serializer.is_valid())
        self.assertIn("phone", serializer.errors)
        self.assertIn("already registered", serializer.errors["phone"][0].lower())
