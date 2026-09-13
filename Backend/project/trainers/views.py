
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

from .models import Trainer
from .serializers import TrainerSerializer


class TrainerView(APIView):

    def get_object(self, pk):
        try:
            return Trainer.objects.get(pk=pk)
        except Trainer.DoesNotExist:
            raise Http404

    # Saare trainers dekhne ke liye
    def get(self, request, pk=None):

        if pk is not None:
            trainer = self.get_object(pk)
            serializer = TrainerSerializer(trainer)
            return Response(serializer.data)

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

    # Trainer ko update karne ke liye (full update)
    def put(self, request, pk):

        trainer = self.get_object(pk)
        serializer = TrainerSerializer(trainer, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # Trainer ko partial update karne ke liye
    def patch(self, request, pk):

        trainer = self.get_object(pk)
        serializer = TrainerSerializer(
            trainer,
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

    # Trainer ko delete karne ke liye
    def delete(self, request, pk):

        trainer = self.get_object(pk)
        trainer.delete()

        return Response(
            {'message': 'Trainer deleted successfully'},
            status=status.HTTP_200_OK
        )