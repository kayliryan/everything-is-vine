from django.db import models


class WineVO(models.Model):
    winery_id = models.SmallIntegerField()
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
    import_href = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return f"Winery {self.winery_id} / Wine {self.id}"


class Order(models.Model):
    confirmation_number = models.CharField(max_length=17, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address_one = models.CharField(max_length=100)
    address_two = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    card_name = models.CharField(max_length=150)
    last_four = models.CharField(max_length=4)
    exp_date = models.CharField(max_length=5)
    discount_ten = models.BooleanField(default=False)
    account_email = models.CharField(max_length=100, null=True, blank=True)


class ShoppingItem(models.Model):
    order_id = models.ForeignKey(
        Order, related_name="shopping_items", on_delete=models.CASCADE
    )
    item = models.ForeignKey(
        WineVO, related_name="shopping_items", on_delete=models.PROTECT
    )
    quantity = models.SmallIntegerField()
    price = models.FloatField()
