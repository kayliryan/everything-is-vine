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


class TestWinesViews(TestCase):
    def setUp(self):
        Wine.objects.create(
            brand="test_brand",
            year=2007,
            varietal="test_varietal",
            abv=8.5,
            volume=123,
            price=40,
            quantity=3,
        )

    def test_list_wines(self):
        client = Client()
        response = client.get(reverse("api_list_all_wines"))
        self.assertEquals(response.status_code, 200)
