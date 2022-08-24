from django.urls import path

from .api_views import (api_list_wines)

urlpatterns = [
    path("wines/", api_list_wines, name="api_list_wines"),
    # path("techs/", api_list_technicians, name="api_list_technicians"),
    # path("appts/<int:pk>/", api_appointment_details, name="api_show_appt"),
    # path("byvin/<str:vin>/", api_list_appointments_by_vin, name="api_list_apptbyvin"),
    # path("techs/<int:pk>/", api_technician_details, name="api_show_tech"),
]
