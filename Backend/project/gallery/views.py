from django.http import Http404
from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Gallery
from .serializers import GallerySerializer


class GalleryView(APIView):

    def get_object(self, pk):
        try:
            return Gallery.objects.get(pk=pk)
        except Gallery.DoesNotExist:
            raise Http404

    # Saari gallery images dekhne ke liye
    def get(self, request, pk=None):

        if pk is not None:
            image = self.get_object(pk)
            serializer = GallerySerializer(image)
            return Response(serializer.data)

        images = Gallery.objects.all()
        serializer = GallerySerializer(images, many=True)
        return Response(serializer.data)

    # Nayi image upload karne ke liye
    def post(self, request):

        serializer = GallerySerializer(data=request.data)

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

    # Gallery image ko full update karne ke liye
    def put(self, request, pk):

        image = self.get_object(pk)
        serializer = GallerySerializer(image, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # Gallery image ko partial update karne ke liye
    def patch(self, request, pk):

        image = self.get_object(pk)
        serializer = GallerySerializer(
            image,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # Gallery image ko delete karne ke liye
    def delete(self, request, pk):

        image = self.get_object(pk)
        image.delete()

        return Response(
            {'message': 'Gallery image deleted successfully'},
            status=status.HTTP_200_OK
        )