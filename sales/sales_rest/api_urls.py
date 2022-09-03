from django.urls import path

from .api_views import (
    api_list_wines,
    api_show_wine,
    api_list_orders,
    api_show_order,
    api_list_shopping_items,
)


urlpatterns = [

    # list of wines from a specific winery
    path("wineries/<int:pk1>/wines/", api_list_wines, name="api_list_wines"),

    # detail of specific wine from a specific winery
    path("wineries/<int:pk1>/wines/<int:pk2>/", 
    api_show_wine , name="api_show_wine"),

    # list of orders
    path("orders/", 
    api_list_orders , name="api_list_orders"),

    # detail of specific order
    path("orders/<int:pk>/", 
    api_show_order , name="api_show_order"),

    # list of shopping items from orders of specific winery
    path("wineries/<int:pk1>/shoppingitems/", 
    api_list_shopping_items , name="api_list_shopping_items"),
    
]

