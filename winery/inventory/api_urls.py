from django.urls import path
from .api_views import (
    api_list_wines,
    api_list_winery,
    api_winery,
    api_list_all_wines)


urlpatterns = [
    path("wines/", api_list_all_wines, name="api_list_all_wines"),
    path("wineries/", api_list_winery, name="api_list_wineries"),
    path("wineries/<int:pk>/wines/", api_list_wines, name="api_list_wines"),
    path("wineries/<int:pk>/", api_winery, name="api_show_winery"),
]
