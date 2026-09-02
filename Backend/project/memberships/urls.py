from django.urls import path
from .views import MembershipPlanView,JoinMembershipView,MyMembershipView


urlpatterns = [
    path('', MembershipPlanView.as_view()),
    path('join/', JoinMembershipView.as_view()),
    path('my/', MyMembershipView.as_view()),
]