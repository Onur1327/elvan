from django.urls import path
from .views import StoreInfoAPIView

urlpatterns = [
    path('store-info/', StoreInfoAPIView.as_view(), name='store-info'),
]
