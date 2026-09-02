
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status  
from .models import MembershipPlan,UserMembership
from .serializers import MembershipPlanSerializer,UserMembershipSerializer


class MembershipPlanView(APIView):

    def get(self, request):

        plans = MembershipPlan.objects.filter(is_active=True)

        serializer = MembershipPlanSerializer(
            plans,
            many=True
        )

        return Response(serializer.data)


    def post(self, request):

        serializer = MembershipPlanSerializer(
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


class JoinMembershipView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        plan_id = request.data.get('plan')

        if not plan_id:
            return Response(
                {'error': 'Plan is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            plan = MembershipPlan.objects.get(
                id=plan_id,
                is_active=True
            )

        except MembershipPlan.DoesNotExist:
            return Response(
                {'error': 'Plan not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        # Check user already has membership request
        already_joined = UserMembership.objects.filter(
            user=request.user,
            plan=plan
        ).exists()

        if already_joined:
            return Response(
                {
                    'error': 'You have already joined this plan'
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        membership = UserMembership.objects.create(
            user=request.user,
            plan=plan
        )

        serializer = UserMembershipSerializer(membership)

        return Response(
            {
                'message': 'Membership request submitted successfully',
                'data': serializer.data
            },
            status=status.HTTP_201_CREATED
        )

class MyMembershipView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        memberships = UserMembership.objects.filter(
            user=request.user
        )

        serializer = UserMembershipSerializer(
            memberships,
            many=True
        )

        return Response(serializer.data)