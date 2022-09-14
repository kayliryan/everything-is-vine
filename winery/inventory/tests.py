from django.test import TestCase, Client
from django.urls import reverse
from .models import Wine


class TestWineSlug(TestCase):
    def test_wine_title_on_save(self):
        wine = Wine()
        wine.brand = "test brand"
        wine.year = 2014
        wine.varietal = "Test varietal"
        wine.description = "Test description"
        wine.abv = 8.5
        wine.volume = 750
        wine.price = 40
        wine.quantity = 4
        wine.save()
        self.assertEquals(wine.abv, 8.5)