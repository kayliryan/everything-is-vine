from django.urls import path

from .api_views import (
    api_show_wine
)


urlpatterns = [
    # path("wines/<int:pk>/", 
    # api_show_wine , name="api_show_wine"),
    path("wineries/<int:pk1>/wines/<int:pk2>/", 
    api_show_wine , name="api_show_wine"),
]