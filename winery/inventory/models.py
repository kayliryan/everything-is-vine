from django.db import models

# Create your models here.
class Winery(models.Model):
    name = models.CharField(max_length=254)
    url = models.URLField(max_length=220, null=True)
    address = models.CharField(max_length=254)
    description = models.TextField()
    owner = models.CharField(max_length=110, null=True)

class Wine(models.Model):
    winery_id = models.ForeignKey(
        Winery,
        related_name="wines",
        on_delete=models.PROTECT
    ) 
    brand = models.CharField(max_length=110)
    year = models.SmallIntegerField()
    varietal = models.CharField(max_length=110)
    description = models.TextField(null=True)
    region = models.CharField(max_length=110, null=True)
    abv = models.FloatField()
    volume = models.SmallIntegerField()
    city_state = models.CharField(max_length=110, null=True)
    price = models.FloatField()
    picture_url = models.URLField(max_length=220, null=True)
    quantity = models.SmallIntegerField()
    
    