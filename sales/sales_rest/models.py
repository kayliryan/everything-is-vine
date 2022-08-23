from django.db import models
from django.conf import settings

USER_MODEL = settings.AUTH_USER_MODEL
# Create your models here.


class WineryVO(models.Model):
    name = models.CharField(max_length=254)
    import_href = models.CharField(max_length=200, unique=True)


class WineVO(models.Model):
    winery_id = models.ForeignKey(
    WineryVO,
    related_name="wines",
    on_delete=models.CASCADE
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
    import_href = models.CharField(max_length=200, unique=True)


class Order(models.Model):
    confirmation_number = models.CharField(max_length=17, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    

class ShoppingItem(models.Model):
    user = models.ForeignKey(
        USER_MODEL,
        related_name="shopping_items",
        on_delete=models.CASCADE,
        null=True,
    )
    order_id = models.ForeignKey(
        Order,
        related_name="shopping_items",
        on_delete=models.CASCADE
    )
    item = models.ForeignKey(
        WineVO,
        related_name="shopping_items",
        on_delete=models.PROTECT
    )
    quantity = models.SmallIntegerField()
    price = models.FloatField()

    