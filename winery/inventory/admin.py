from django.contrib import admin
from .models import Wine, Winery, User
# Register your models here.
class WineAdmin(admin.ModelAdmin):
    pass

class WineryAdmin(admin.ModelAdmin):
    pass

class UserAdmin(admin.ModelAdmin):
    pass

admin.site.register(Wine, WineAdmin)
admin.site.register(Winery, WineryAdmin)
admin.site.register(User, UserAdmin)