
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialView(APIView):

    # Saare testimonials dekhne ke liye
    def get(self, request):

        testimonials = Testimonial.objects.all()

        serializer = TestimonialSerializer(
            testimonials,
            many=True
        )

        return Response(serializer.data)


    # Naya testimonial add karne ke liye
    def post(self, request):

        serializer = TestimonialSerializer(
            data=request.data
        )

        if serializer.is_valid():

            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )