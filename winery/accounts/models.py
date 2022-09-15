from django.contrib.auth.models import AbstractUser
from django.db import models
from inventory.models import Winery


class User(AbstractUser):
    name = models.CharField(max_length=110)
    address = models.CharField(max_length=254)
    phone = models.CharField(max_length=10)
    email = models.EmailField(null=True, unique=True)
    winery = models.ForeignKey(
        Winery, related_name="+", on_delete=models.CASCADE, null=True
    )
    employee = models.BooleanField(default=False)
