# from platform import python_implementation
# from urllib.request import AbstractBasicAuthHandler


from django.test import TestCase, Client
from django.urls import reverse
from .models import User


class TestUserViews(TestCase):
    def setUp(self):
        User.objects.create(
            name="test_user",
            address="test_address",
            phone="test",
        )
        
    def test_list_accounts_GET(self):
        client = Client()
        response = client.get(reverse("api_list_users"))
        self.assertEquals(response.status_code, 200)
