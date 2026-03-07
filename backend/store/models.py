from django.db import models

class StoreInfo(models.Model):
    name = models.CharField(max_length=255, default="ON9 AVM")
    address = models.TextField()
    phone = models.CharField(max_length=50)
    email = models.EmailField(blank=True, null=True)
    working_hours = models.CharField(max_length=255, blank=True, null=True, help_text="Örn: Hafta içi: 09:00 - 20:00")
    map_embed_url = models.TextField(blank=True, null=True, help_text="Google Maps'ten alınan iframe linki")

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Store Information"
