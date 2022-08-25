from django.urls import path

from .api_views import (
    # api_list_wines,
    api_show_wine
)


urlpatterns = [
    # path("wines/<int:pk>/", 
    # api_show_wine , name="api_show_wine"),


    # list of wines from a specific winery
    # path("wineries/<int:pk1>/wines/", api_list_wines, name="api_list_wines"),

    # detail of specific wine from a specific winery
    path("wineries/<int:pk1>/wines/<int:pk2>/", 
    api_show_wine , name="api_show_wine"),]