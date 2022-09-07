from django.shortcuts import render
import json 
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import User
from inventory.models import Winery
from common.json import ModelEncoder
import djwto.authentication as auth

class UserListEncoder(ModelEncoder):
    model = User
    properties = [
        "id",
        "name",
        "username",
        "password",
        "address",
        "phone",
        "email",
        "employee",
        "winery",
        ]
    def get_extra_data(self, o):
        return {"winery": o.winery_id}


@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response



@require_http_methods(["GET", "POST"])
def api_list_users(request):
    if request.method == "GET":
        users = User.objects.all()

        # users["winery"] = Winery.objects.filter(id=users.winery)

        return JsonResponse(
            {"users": users},
            encoder=UserListEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
        except json.JSONDecodeError:
            return 400, {"message": "Bad JSON"}, None

        winery = Winery.objects.get(id=content["winery"])
        content["winery"]=winery
        print("trying to print content",content)
        users = User.objects.create_user(
                username=content["username"],
                email=content["email"],
                password=content["password"],
                name=content["full_name"],
                address=content["address"],
                phone=content["phone"],
                winery=content["winery"],
            )
        return JsonResponse(
                {"users": users},
                encoder=UserListEncoder,
            )

# @require_http_methods(["GET"])
# @auth.jwt_login_required
# def api_current_user(request):
#     user_id = request.payload["user"]["id"]
#     user = User.objects.get(id=user_id)
#     return JsonResponse(
#         {
#             "id": user.id,
#             "username": user.username,
#             "email": user.email,
#         }
#     )


# @require_http_methods(["POST"])
# def create_user(json_content):
#     try:
#         content = json.loads(json_content)
#     except json.JSONDecodeError:
#         return 400, {"message": "Bad JSON"}, None

#     winery = Winery.objects.filter(id=content["winery"])
#     content["winery"]=winery
#     users = User.objects.create_user(content
#             # username=content["username"],
#             # email=content["email"],
#             # password=content["password"],
#             # name=content["full_name"],
#             # address=content["address"],
#         )
#     return JsonResponse(
#             {"users": users},
#             encoder=UserListEncoder,
#         )

# def register_form(request):
#     if request.method =='POST':
#         name = request.POST['firstname']
#         print(name)

#     return redirect('/')
