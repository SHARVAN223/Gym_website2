from django.urls import path
from .views import GalleryView


urlpatterns = [
    path('', GalleryView.as_view()),
    path('<int:pk>/', GalleryView.as_view()),
]