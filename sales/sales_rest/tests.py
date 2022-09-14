from django.test import TestCase, Client
from django.urls import reverse
from .models import WineVO


class TestWineVOViews(TestCase):
    def setUp(self):
        WineVO.objects.create(
            winery_id=1,
            brand="testING_brand",
            year=2018,
            varietal='testING_varietal',
            abv=14.0,
            volume=750,
            price=50.0,
            quantity=1000,
        )

    def test_list_accounts_GET(self):
        client = Client()
        response = client.get(reverse("api_show_wine", 
                                      kwargs={'pk1': 1, 
                                              'pk2': 1}))
        self.assertEquals(response.status_code, 200)
