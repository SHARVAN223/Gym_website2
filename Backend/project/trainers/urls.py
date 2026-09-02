from django.urls import path
from .views import TrainerView


urlpatterns = [
    path('', TrainerView.as_view()),
]