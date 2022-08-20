from django.db import models
from .models import User, Wine
# Create your models here.

class Order(models.Model):
    id = models.SmallIntegerField()
    confirmation_number = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    # item = not sure about OtM in excalidraw


class ShoppingItem(models.Model):
    user_id = models.ForeignKey(
        User,
        related_name="+",
        on_delete=models.PROTECT
    )
    order_id = models.ForeignKey(
        Order,
        related_name="+",
        on_delete=models.PROTECT
    )
    item = models.ForeignKey(
        Wine,
        related_name="+",
        on_delete=models.PROTECT
    )
    quantity = models.SmallIntegerField()
    price = models.FloatField()
    active = models.BooleanField(default=True)
    