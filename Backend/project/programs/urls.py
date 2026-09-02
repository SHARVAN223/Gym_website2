from django.urls import path
from .views import ProgramView


urlpatterns = [
    path('', ProgramView.as_view()),
    path('<int:pk>/', ProgramView.as_view()),
]