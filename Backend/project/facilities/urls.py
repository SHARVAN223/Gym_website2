from django.urls import path
from .views import FacilityView


urlpatterns = [
    path('', FacilityView.as_view()),
]