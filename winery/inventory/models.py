import this
from django.db import models

# Create your models here.


class Winery(models.Model):
    name = models.CharField(max_length=254)
    url = models.URLField(max_length=220, null=True)
    address = models.CharField(max_length=254)
    description = models.TextField()
    owner = models.CharField(max_length=110, null=True)

    # For stretch goals
    # def get_api_url(self):
    #     return reverse("api_list_wineries", kwargs={"pk": self.id})

    def __str__(self):
        return self.name + "," + self.owner


class Wine(models.Model):
    winery = models.ForeignKey(
        Winery, related_name="wines", on_delete=models.CASCADE, null=True
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

    def get_api_url(self):
        return f'wineries/{self.winery_id}/wines/{self.id}/'

    def __str__(self):
        return self.brand + ", " + str(self.year) + " " + self.varietal
