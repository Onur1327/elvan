from rest_framework.views import APIView
from rest_framework.response import Response
from .models import StoreInfo
from .serializers import StoreInfoSerializer

class StoreInfoAPIView(APIView):
    def get(self, request):
        info = StoreInfo.objects.first()
        if not info:
            return Response({
                "name": "ON9 AVM",
                "address": "Mağaza Adresi Girilmedi",
                "phone": "+90 000 000 00 00",
                "email": "info@magaza.com",
                "working_hours": "-",
                "map_embed_url": ""
            })
        serializer = StoreInfoSerializer(info)
        return Response(serializer.data)
