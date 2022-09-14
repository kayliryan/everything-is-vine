# from common.json import ModelEncoder
# from sales_rest.models import WineVO, Order, ShoppingItem


# # class WineryVOEncoder(ModelEncoder):
# #     model = WineryVO
# #     properties = ["id", "name", "import_href"]


# class WineVOEncoder(ModelEncoder):
#     model = WineVO
#     properties = [
#         "id",
#         "brand",
#         "year",
#         "varietal" "description",
#         "region",
#         "abv",
#         "volume",
#         "city_state",
#         "price",
#         "picture_url",
#         "quantity",
#         "import_href",
#     ]


# class OrderEncoder(ModelEncoder):
#     model = Order
#     properties = ["confirmation_number", "created"]


# class ShoppingItemEncoder(ModelEncoder):
#     model = ShoppingItem
#     properties = [
#         "order_id",
#         "item",
#         "quantity",
#         "price",
#     ]
