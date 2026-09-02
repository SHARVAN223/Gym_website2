from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Program
from .serializers import ProgramSerializer


class ProgramView(APIView):

    def get_object(self, pk):
        try:
            return Program.objects.get(pk=pk)
        except Program.DoesNotExist:
            raise Http404

    # Saare programs dekhne ke liye
    def get(self, request, pk=None):

        if pk is not None:
            program = self.get_object(pk)
            serializer = ProgramSerializer(program)
            return Response(serializer.data)

        programs = Program.objects.all()
        serializer = ProgramSerializer(programs, many=True)
        return Response(serializer.data)

    # Naya program add karne ke liye
    def post(self, request):

        serializer = ProgramSerializer(data=request.data)

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

    # Program ko update karne ke liye (full update)
    def put(self, request, pk):

        program = self.get_object(pk)
        serializer = ProgramSerializer(program, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    # Program ko partial update karne ke liye
    def patch(self, request, pk):

        program = self.get_object(pk)
        serializer = ProgramSerializer(
            program,
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

    # Program ko delete karne ke liye
    def delete(self, request, pk):

        program = self.get_object(pk)
        program.delete()

        return Response(
            {'message': 'Program deleted successfully'},
            status=status.HTTP_200_OK
        )


    