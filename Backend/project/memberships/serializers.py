from rest_framework import serializers
from .models import MembershipPlan, UserMembership


class MembershipPlanSerializer(serializers.ModelSerializer):

    class Meta:
        model = MembershipPlan
        fields = '__all__'


class UserMembershipSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserMembership
        fields = '__all__'

        read_only_fields = [
            'user',
            'status',
            'start_date',
            'end_date',
            'created_at'
        ]