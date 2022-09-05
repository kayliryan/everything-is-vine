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
        "winery_id",
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
    properties = ["id", "confirmation_number", "created"]


class ShoppingItemEncoder(ModelEncoder):
    model = ShoppingItem
    properties = [
        "order_id", 
        "item",
    ]

    def get_extra_data(self, o):
        return {"order_id": o.order_id.id }

    encoders = {
        "item": WineVOEncoder(),
    }


# Show list of wines from a specific winery
# note: because there is no WineryVO, API endpoint
# does not know if winery doesn't exist or if
# if winery exists and has no wines to list
@require_http_methods(["GET"])
def api_list_wines(request, pk1):
    if request.method == "GET":
        wines = WineVO.objects.filter(winery_id=pk1)
        if len(wines) > 0:
            return JsonResponse(
                {"wines": wines},
                encoder=WineVOEncoder,
                )
        # usually would check if WineryVO.DoesNotExist:
        else:
            return JsonResponse(
                {"message": "Winery does not exist or has no list of wines"}
            )       

        


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



# Show list of orders
@require_http_methods(["GET", "POST"])
def api_list_orders(request):
    if request.method == "GET":
        orders = Order.objects.all()
        return JsonResponse(
            {"orders": orders},
            encoder=OrderEncoder,
            )
    else:
        try:
            content = json.loads(request.body)

            orders = Order.objects.create(**content)
            return JsonResponse(
                orders,
                encoder=OrderEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Order unsuccessful"},
                status=400, 
            )

    



# Show detail of specific order
@require_http_methods(["GET"])
def api_show_order(request, pk):
    if request.method == "GET":
        try:
            order = Order.objects.get(id=pk)
            return JsonResponse(
                order,
                encoder=OrderEncoder,
                safe=False,
            )
        except Order.DoesNotExist:
            return JsonResponse(
                {"message": "Order does not exist"},
                status=404,
            )
    else:
        return JsonResponse(
            {"message": "ERROR"},
            status=400,
        )



# Show list of shopping items from orders of specific winery
@require_http_methods(["GET", "POST"])
def api_list_shopping_items(request, pk1):
    if request.method == "GET":
        shopping_items = ShoppingItem.objects.filter(item__winery_id=pk1).all()
        return JsonResponse(
            {"shopping_items": shopping_items},
            encoder=ShoppingItemEncoder,
        )
    # else:

    #     content = json.loads(request.body)
    #     shopping_cart_items = content["shopping_items"]
    #     print("*******CONTENT:", content)
    #     print("*******SHOPPING_CART_ITEMS:", shopping_cart_items)

    #     # shopping_items = ShoppingItem.objects.create(**content)



    #     for index in range(len(shopping_cart_items)):
    #         order_id = shopping_cart_items[int(index)]["order_id"]
    #         print("*******ORDER_ID:", order_id)
    #         order = Order.objects.get(id=order_id)
    #         print("*******ORDER:", order)

    #         winery_id = shopping_cart_items[int(index)]["item"]["winery_id"]
    #         print("*******WINERY_ID:", winery_id)
    #         winery = WineVO.objects.get(id=winery_id)
    #         print("*******WINERY:", winery)
    #         shopping_cart_items[index]["winery_id"] = winery

    #         item_id = shopping_cart_items[int(index)]["item"]["id"]
    #         print("*******ITEM_ID:", item_id)
    #         item = ShoppingItem.objects.get(id=item_id)
    #         print("*******ITEM:", item)

    #         shopping_items = ShoppingItem.objects.create(**shopping_cart_items[int(index)]["item"])

    #     return JsonResponse(
    #         shopping_items,
    #         encoder=ShoppingItemEncoder,
    #         safe=False,
        )








    # else:
    #     content = json.loads(request.body)
    #     # print("*******CONTENT:", content)

 
    #     order_id = content["order_id"]
    #     # print("*******ORDER_ID:", order_id)
    #     order = Order.objects.get(id=order_id)
    #     # print("*******ORDER:", order)
    #     content["order_id"] = order   

    #     winery = content["item"]["winery_id"]
    #     # print("*******WINERY:", winery)
    #     winery_id = WineVO.objects.get(winery_id=winery)
    #     # print("*******WINERY_ID:", winery)
    #     content["item"] = winery_id     

    #     shopping_items = ShoppingItem.objects.create(**content)
    #     return JsonResponse(
    #         shopping_items,
    #         encoder=ShoppingItemEncoder,
    #         safe=False,
    #     )











# Show list of shopping items from specific order 
@require_http_methods(["GET", "POST"])
def api_list_shopping_items_order(request, pk1, pk2):
    if request.method == "GET":
        shopping_items = ShoppingItem.objects.filter(item__winery_id=pk1, order_id=pk2)
        return JsonResponse(
            {"shopping_items": shopping_items},
            encoder=ShoppingItemEncoder,
        )



