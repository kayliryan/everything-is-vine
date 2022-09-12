from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Winery, Wine
from .acls import get_geo
import djwto.authentication as auth

class WineryEncoder(ModelEncoder):
    model = Winery
    properties = [
        "id",
        "name",
        "url",
        "address",
        "description",
        "owner",
    ]

class WineListEncoder(ModelEncoder):
    model = Wine
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
        "winery",
        ]
    encoders = {
        "winery" : WineryEncoder(),
    }

@require_http_methods(["GET"])
def api_list_winery(request):
    if request.method == "GET":
        wineries = Winery.objects.all()
        wineries = list(wineries)

        return JsonResponse(
            {"wineries": wineries},
            encoder=WineryEncoder,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_winery(request, pk):
    if request.method == "GET":
        try:
            winery = Winery.objects.get(id=pk)

            geo = get_geo(winery.address)

            return JsonResponse(
                {"winery":winery, "geo":geo},
                encoder=WineryEncoder,
                safe=False
            )
        except Winery.DoesNotExist:
            response = JsonResponse({"message": "Winery does not exist"})
            response.status_code = 404
            return response


# @auth.jwt_login_required 
# #removed so that jwt status no longer matters.
@require_http_methods(["GET", "POST"])
def api_list_wines(request, pk):
    # token_data = request.payload
    if request.method == "GET":
        wines = Wine.objects.filter(winery_id=pk)
        wines = list(wines)

        return JsonResponse(
            {"wines": wines},
            encoder=WineListEncoder,
        )
    else:
        content = json.loads(request.body)  

        try:
            if "winery" in content:
                winery = Winery.objects.get(id=pk)
                # winery = Winery.objects.get(name=content["winery"])
                content["winery"] = winery
        except Winery.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid winery name"},
                status=400,
            )

        wine = Wine.objects.create(**content)
        return JsonResponse(
            wine,
            encoder=WineListEncoder,
            safe=False,
        )
        

@require_http_methods(["GET", "POST"])
def api_list_all_wines(request):
    if request.method == "GET":
        wines = Wine.objects.all()

        return JsonResponse(
            {"wines": wines},
            encoder=WineListEncoder,
        )
    else:
        content = json.loads(request.body)  

        try:
            if "winery" in content:
                winery = Winery.objects.get(id=pk)
                # winery = Winery.objects.get(name=content["winery"])
                content["winery"] = winery
        except Winery.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid winery name"},
                status=400,
            )

        wine = Wine.objects.create(**content)
        return JsonResponse(
            wine,
            encoder=WineListEncoder,
            safe=False,
        )

#staff login req - update winery details 
@auth.jwt_login_required 
@require_http_methods(["PUT"])
def api_staff_winery(request, pk):
    if request.method == "PUT":
        content = json.loads(request.body)

        Winery.objects.filter(id=pk).update(**content)
        winery = Winery.objects.get(id=pk)
        return JsonResponse(
            winery,
            encoder=WineryEncoder,
            safe=False,
        )

#staff login req - update and delete individual wines
@auth.jwt_login_required 
@require_http_methods(["GET", "PUT"])
def api_staff_wine(request, pk):
    if request.method == "GET":
        try:
            wine = Wine.objects.filter(id=pk)
            wine = list(wine)
            return JsonResponse(
                {"wine":wine},
                encoder=WineListEncoder,
                safe=False
            )
        except Wine.DoesNotExist:
            response = JsonResponse({"message": "Wine does not exist"})
            response.status_code = 404
            return response
    elif request.method == "PUT":
        content = json.loads(request.body)

        try:
            if "winery" in content:
                winery = Winery.objects.get(id=content["winery"])
                content["winery"]=winery
        except Winery.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid winery name"},
                status=400,
            )

        Wine.objects.filter(id=pk).update(**content)
        wine = Wine.objects.get(id=pk)


        return JsonResponse(
            wine,
            encoder=WineListEncoder,
            safe=False,
        )

#staff login req - create new wine
# @auth.jwt_login_required 
@require_http_methods(["POST"])
def api_staff_new_wine(request):
    if request.method == "POST":
        content = json.loads(request.body)

        try:
            if "winery" in content:
                winery = Winery.objects.get(id=content["winery"])
                content["winery"]=winery
        except Winery.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid winery name"},
                status=400,
            )

        wine = Wine.objects.create(**content)
        return JsonResponse(
            {"wine": wine},
            encoder=WineListEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_staff_delete_wine(request, pk):
    if request.method == "DELETE":
        count, _ = Wine.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})