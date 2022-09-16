from django.urls import path
from .api_views import (
    api_list_wines,
    api_show_wine,
    api_list_orders,
    api_show_order,
    api_list_shopping_items,
    api_list_shopping_items_order,
)

urlpatterns = [
    path("wineries/<int:pk1>/wines/", api_list_wines, name="api_list_wines"),
    path("wineries/<int:pk1>/wines/<int:pk2>/",
         api_show_wine,
         name="api_show_wine"),
    path("orders/", api_list_orders, name="api_list_orders"),
    path("orders/<int:pk>/", api_show_order, name="api_show_order"),
    path(
        "wineries/<int:pk1>/shoppingitems/",
        api_list_shopping_items,
        name="api_list_shopping_items",
    ),
    path(
        "wineries/<int:pk1>/shoppingitems/<int:pk2>/",
        api_list_shopping_items_order,
        name="api_list_shopping_items_order",
    ),
]
