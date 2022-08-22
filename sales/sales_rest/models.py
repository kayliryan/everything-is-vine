from django.db import models
from .models import User, Wine
# Create your models here.

class Order(models.Model):
    confirmation_number = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    


class ShoppingItem(models.Model):
    user_id = models.ForeignKey(
        User,
        related_name="shopping_items",
        on_delete=models.PROTECT
    )
    order_id = models.ManyToOne(
        Order,
        related_name="shopping_items",
        on_delete=models.PROTECT
    )
    item = models.ForeignKey(
        Wine,
        related_name="shopping_items",
        on_delete=models.PROTECT
    )
    quantity = models.SmallIntegerField()
    price = models.FloatField()
    active = models.BooleanField(default=True)
    