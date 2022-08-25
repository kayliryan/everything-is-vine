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
                {"message": "Wine does not exist"},
                status=404,
            )
    else:
        return JsonResponse(
            {"message": "ERROR"},
            status=400,
        )

