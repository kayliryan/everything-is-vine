from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from sales_rest.models import WineVO, Order, ShoppingItem
import json


# class WineryVOEncoder(ModelEncoder):
#     model = WineryVO
#     properties = ["id", "name", "import_href"]


class WineVOEncoder(ModelEncoder):
    model = WineVO
    properties = [
        "id",
        "brand",
        "year",
        "varietal",
        "description",
        "region",
        "abv",
        "volume",
        "city_state",
        "price",
        "picture_url",
        "quantity",
        "import_href",
    ]



class OrderEncoder(ModelEncoder):
    model = Order
    properties = ["confirmation_number", "created"]


class ShoppingItemEncoder(ModelEncoder):
    model = ShoppingItem
    properties = [
        "order_id", 
        "item",
        "quantity",
        "price",
    ]


# # Show list of wines from a specific winery
# # note: because there is no WineryVO, API endpoint
# # does not know if winery doesn't exist or if
# # if winery exists and has no wines to list
# @require_http_methods(["GET"])
# def api_list_wines(request, pk1):
#     if request.method == "GET":
#         wines = WineVO.objects.filter(winery_id=pk1)
#         if len(wines) > 0:
#             return JsonResponse(
#                 {"wines": wines},
#                 encoder=WineVOEncoder,
#                 )
#         # usually would check if WineryVO.DoesNotExist:
#         else:
#             return JsonResponse(
#                 {"message": "Winery does not exist or has no list of wines"}
#             )       

        


# Show detail of specific wine from a specific winery
@require_http_methods(["GET"])
def api_show_wine(request, pk1, pk2):
    if request.method == "GET":
        try:
            wine = WineVO.objects.filter(winery_id=pk1).get(id=pk2)
            return JsonResponse(
                wine,
                encoder=WineVOEncoder,
                safe=False,
            )
        except WineVO.DoesNotExist:
            return JsonResponse(
                {"message": "Wine does not exist for this winery"},
                status=404,
            )
    else:
        return JsonResponse(
            {"message": "ERROR"},
            status=400,
        )




class OrderEncoder(ModelEncoder):
    model = Order
    properties = ["confirmation_number", "created"]


class ShoppingItemEncoder(ModelEncoder):
    model = ShoppingItem
    properties = [
        "order_id", 
        "item",
        "quantity",
        "price",
    ]
