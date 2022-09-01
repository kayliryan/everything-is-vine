from django.contrib import admin
from .models import Order, ShoppingItem, WineVO

# Register your models here.


class OrderAdmin(admin.ModelAdmin):
    pass


class ShoppingItemAdmin(admin.ModelAdmin):
    pass


# class WineryVOAdmin(admin.ModelAdmin):
#     pass


class WineVOAdmin(admin.ModelAdmin):
    pass


admin.site.register(Order, OrderAdmin)
admin.site.register(ShoppingItem, ShoppingItemAdmin)
# admin.site.register(WineryVO, WineryVOAdmin)
admin.site.register(WineVO, WineVOAdmin)
