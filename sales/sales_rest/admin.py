from django.contrib import admin
from .models import Order, ShoppingItem

# Register your models here.
class OrderAdmin(admin.ModelAdmin):
    pass

class ShoppingItemAdmin(admin.ModelAdmin):
    pass

admin.site.register(Order, OrderAdmin)
admin.site.register(ShoppingItem, ShoppingItemAdmin)

