from django.urls import path

from .api_views import (
    # api_list_wines,
    api_show_wine,
    # api_list_orders,
    # api_show_order,
)


urlpatterns = [

    # # list of wines from a specific winery
    # path("wineries/<int:pk1>/wines/", api_list_wines, name="api_list_wines"),

    # detail of specific wine from a specific winery
    path("wineries/<int:pk1>/wines/<int:pk2>/", 
    api_show_wine , name="api_show_wine"),

    # # list of orders
    # path("orders/", 
    # api_list_orders , name="api_list_orders"),

    # # detail of specific order
    # path("orders/<int:pk>/", 
    # api_show_order , name="api_show_order"),
]