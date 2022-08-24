from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Winery, Wine

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


@require_http_methods(["GET", "POST"])
def api_list_wines(request):
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
                winery = Winery.objects.get(name=content["winery"])
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