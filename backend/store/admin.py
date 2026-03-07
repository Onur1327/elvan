from django.contrib import admin
from .models import StoreInfo


@admin.register(StoreInfo)
class StoreInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email')

    def has_add_permission(self, request):
        # Sadece 1 adet mağaza bilgisi olabilir
        if StoreInfo.objects.count() >= 1:
            return False
        return super().has_add_permission(request)
