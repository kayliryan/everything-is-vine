from django.contrib import admin
from .models import Wine, Winery

# Register your models here.


class WineAdmin(admin.ModelAdmin):
    pass


class WineryAdmin(admin.ModelAdmin):
    pass


admin.site.register(Wine, WineAdmin)
admin.site.register(Winery, WineryAdmin)
