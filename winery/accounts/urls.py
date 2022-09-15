from django.urls import path

from .views import api_user_token, api_list_users, api_current_user

urlpatterns = [
    path("accounts/me/token/", api_user_token, name="api_user_token"),
    path("accounts/users/", api_list_users, name="api_list_users"),
    path("accounts/user/", api_current_user, name="api_current_users"),
]
