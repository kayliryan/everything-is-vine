from django.test import TestCase, Client
from django.urls import reverse
from .models import WineVO


class TestWineVOViews(TestCase):
    def setUp(self):
        WineVO.objects.create(
            winery_id=1,
            brand="test_brand",
            year=2010,
            varietal="test_varietal",
            abv=8.0,
            volume=750,
            price=40.0,
            quantity=3,
        )

    def test_list_accounts_GET(self):
        client = Client()
        response = client.get(reverse("api_show_wine",
                                      kwargs={"pk1": 1, "pk2": 1}))
        self.assertEquals(response.status_code, 200)
