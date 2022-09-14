from venv import create
from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from sales_rest.models import WineVO, Order, ShoppingItem
import json
import random
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
    properties = [
        "id", 
        "confirmation_number", 
        "created",
        "first_name",
        "last_name",
        "address_one",
        "address_two",
        "city",
        "state",
        "zip_code",
        "country",
        "card_name",
        "last_four",
        "exp_date",
        "discount_ten",
        ]
    # def get_extra_data(self, o):
    #     return {"user": o.user.id }


class ShoppingItemEncoder(ModelEncoder):
    model = ShoppingItem
    properties = [
        "order_id", 
        "item",
        "price",
        "quantity",
    ]

    def get_extra_data(self, o):
        return {"order_id": o.order_id.id,
            "item": {
            "id": o.item.id,
            "winery_id": o.item.winery_id
        }}



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



@require_http_methods(["GET", "POST"])
def api_list_orders(request):
    if request.method == "GET":
        orders = Order.objects.all()
        return JsonResponse(
            {"orders": orders},
            encoder=OrderEncoder,
            )
    else:
        # try:
        content = json.loads(request.body)
        print("***content", content)
        order = Order.objects.create(**content)
        return JsonResponse({"order": order.id})
        # except:
        #     return JsonResponse(
        #         {"message": "Order unsuccessful"},
        #         status=400, 
        #     )
    
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
    else:
        content = json.loads(request.body)
        shopping_cart_items = content["shopping_items"]
        for index in range(len(shopping_cart_items)):
            # order_id = shopping_cart_items["order_id"]
            order_id = shopping_cart_items[int(index)]["order_id"]
            order = Order.objects.get(id=order_id)
            shopping_cart_items[int(index)]["order_id"] = order
            winery = shopping_cart_items[int(index)]["item"]["winery_id"]
            wine = shopping_cart_items[int(index)]["item"]["id"]
            wine_id = WineVO.objects.filter(winery_id=winery).get(id=wine)
            shopping_cart_items[int(index)]["item"] = wine_id
            shopping_items = ShoppingItem.objects.create(**shopping_cart_items[int(index)])
        return JsonResponse(
            shopping_items,
            encoder=ShoppingItemEncoder,
            safe=False,
        )  
        # content = json.loads(request.body)
        # shopping_cart_items = content["shopping_items"]
        # print("*******CONTENT:", content)
        # print("*******SHOPPING_CART_ITEMS:", shopping_cart_items)
        # for index in range(len(shopping_cart_items)):
        #     order_id = shopping_cart_items["order_id"]
        #     # order_id = shopping_cart_items[int(index)]["order_id"]
        #     print("*******ORDER_ID:", order_id)
        #     order = Order.objects.get(id=order_id)
        #     print("*******ORDER:", order)
        #     shopping_cart_items[index]["order_id"] = order
        #     winery = shopping_cart_items[int(index)]["item"]["winery_id"]
        #     print("*******WINERY_ID:", winery)
        #     wine = shopping_cart_items[int(index)]["item"]["id"]
        #     print("*******WINERY:", wine)
        #     wine_id = WineVO.objects.filter(winery_id=winery).get(id=wine)
        #     shopping_cart_items[int(index)]["item"] = wine_id
        #     shopping_items = ShoppingItem.objects.create(**shopping_cart_items[int(index)])
        # return JsonResponse(
        #     shopping_items,
        #     encoder=ShoppingItemEncoder,
        #     safe=False,
        # )  


# POST FORMAT:
#     {
#     "shopping_items": [
#         {
#             "order_id": 2,
#             "item": {
#                 "id": 1,
#                 "winery_id": 1
#             },
#             "quantity": 2,
#             "price": 3
#         },
#         {
#             "order_id": 2,
#             "item": {
#                 "id": 2,
#                 "winery_id": 1
#             }
#             "quantity": 2,
#             "price": 3
#         }
#     ]
#     }
# Show list of shopping items from specific order 


@require_http_methods(["GET", "POST"])
def api_list_shopping_items_order(request, pk1, pk2):
    if request.method == "GET":
        shopping_items = ShoppingItem.objects.filter(item__winery_id=pk1, order_id=pk2)
        return JsonResponse(
            {"shopping_items": shopping_items},
            encoder=ShoppingItemEncoder,
        )