from django.db import models

# Create your models here.
class Winery(models.Model):
    id = models.SmallIntegerField()
    name = models.CharField(max_length=254)
    url = models.URLField(max_length=220)
    address = models.CharField(max_length=254)
    description = models.TextField()
    owner = models.CharField(max_length=110)

class Wine(models.Model):
    id = models.SmallIntegerField()
    winery_id = models.ForeignKey(
        Winery,
        related_name="+",
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
    
    
class User(models.Model):
    id = models.SmallIntegerField()
    name = models.CharField(max_length=110)
    address = models.CharField(max_length=254)
    phone = models.CharField(max_length=9)
    email =models.CharField(max_length=110)
    winery_id = models.ForeignKey(
        Winery,
        related_name="+",
        on_delete=models.PROTECT
    )
    membership_level = models.SmallIntegerField()
    employee = models.BooleanField()
    