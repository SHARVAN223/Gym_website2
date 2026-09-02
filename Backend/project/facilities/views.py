
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Facility
from .serializers import FacilitySerializer


class FacilityView(APIView):

    # Saari facilities dekhne ke liye
    def get(self, request):

        facilities = Facility.objects.all()

        serializer = FacilitySerializer(
            facilities,
            many=True
        )

        return Response(serializer.data)


    # Nayi facility add karne ke liye
    def post(self, request):

        serializer = FacilitySerializer(
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