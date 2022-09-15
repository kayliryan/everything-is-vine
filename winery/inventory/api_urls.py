from django.urls import path
from .api_views import (
    api_list_wines,
    api_list_winery,
    api_staff_new_wine,
    api_staff_winery,
    api_staff_wine,
    api_staff_delete_wine,
    api_winery,
    api_list_all_wines,
    api_update_wine,
)


urlpatterns = [
    path("wines/", api_list_all_wines, name="api_list_all_wines"),
    path("wineries/", api_list_winery, name="api_list_wineries"),
    path("wineries/<int:pk>/wines/", api_list_wines, name="api_list_wines"),
    path("wineries/<int:pk>/", api_winery, name="api_show_winery"),
    path("wineries/<int:pk>/edit/", api_staff_winery, name="api_update_winery"),
    path("wines/new/", api_staff_new_wine, name="api_new_wine"),
    path("wines/<int:pk>/", api_staff_wine, name="api_staff_wine"),
    path("wines/update/<int:pk>/", api_update_wine, name="api_update_wine"),
    path("wines/<int:pk>/delete/", api_staff_delete_wine, name="api_staff_delete_wine"),
]
