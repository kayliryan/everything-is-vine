from django.db import models
from inventory.models import Winery

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=110)
    address = models.CharField(max_length=254)
    phone = models.CharField(max_length=9)
    email =models.CharField(max_length=110)
    winery_id = models.ForeignKey(
        Winery,
        related_name="users",
        on_delete=models.PROTECT
    )
    membership_level = models.SmallIntegerField()
    employee = models.BooleanField()
    