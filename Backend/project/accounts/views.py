from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User
from .serializers import LoginSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import RegisterSerializer


class RegisterView(APIView):

    def post(self, request):

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    'message': 'User registered successfully'
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class LoginView(APIView):

    def post(self, request):

        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():

            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            try:
                user = User.objects.get(email=email)

            except User.DoesNotExist:
                return Response(
                    {'error': 'User not found'},
                    status=status.HTTP_404_NOT_FOUND
                )

            if not check_password(password, user.password):
                return Response(
                    {'error': 'Wrong password'},
                    status=status.HTTP_400_BAD_REQUEST
                )

            refresh = RefreshToken.for_user(user)

            return Response({
                'message': 'Login successful',
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            })

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class ProfileView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):

        user = request.user

        return Response({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phone': user.phone,
        })


class ProfileView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    # Profile dekhne ke liye
    def get(self, request):

        user = request.user

        return Response({
            'id': user.id,
            'name': user.name,
            'email': user.email,
            'phone': user.phone,
        })

    # Profile update karne ke liye
    def put(self, request):

        user = request.user

        name = request.data.get('name')
        phone = request.data.get('phone')

        if name:
            user.name = name

        if phone:
            user.phone = phone

        user.save()

        return Response({
            'message': 'Profile updated successfully',
            'name': user.name,
            'phone': user.phone,
        })

class ChangePasswordView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):

        user = request.user

        old_password = request.data.get('old_password')
        new_password = request.data.get('new_password')

        # Old password check
        if not user.check_password(old_password):
            return Response(
                {'error': 'Old password is incorrect'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # New password hash karke save
        user.set_password(new_password)
        user.save()

        return Response({
            'message': 'Password changed successfully'
        })