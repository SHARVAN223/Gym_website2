
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Trainer
from .serializers import TrainerSerializer


class TrainerView(APIView):

    # Saare trainers dekhne ke liye
    def get(self, request):

        trainers = Trainer.objects.all()

        serializer = TrainerSerializer(
            trainers,
            many=True
        )

        return Response(serializer.data)


    # Naya trainer add karne ke liye
    def post(self, request):

        serializer = TrainerSerializer(
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