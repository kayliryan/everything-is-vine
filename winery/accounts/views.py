from django.shortcuts import render
import json 
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

# Create your views here.
@require_http_methods(["GET"])
def api_user_token(request):
    if "jwt_access_token" in request.COOKIES:
        token = request.COOKIES["jwt_access_token"]
        if token:
            return JsonResponse({"token": token})
    response = JsonResponse({"token": None})
    return response

@require_http_methods(["POST"])
def create_user(json_content):
    try:
        content = json.loads(json_content)
    except json.JSONDecodeError:
        return 400, {"message": "Bad JSON"}, None

    required_properties = [
        "username",
        "email",
        "password",
        "first_name",
        "last_name",
    ]
    missing_properties = []
    for required_property in required_properties:
        if (
            required_property not in content
            or len(content[required_property]) == 0
        ):
            missing_properties.append(required_property)
    if missing_properties:
        response_content = {
            "message": "missing properties",
            "properties": missing_properties,
        }
        return 400, response_content, None

    try:
        account = User.objects.create_user(
            username=content["username"],
            email=content["email"],
            password=content["password"],
            first_name=content["first_name"],
            last_name=content["last_name"],
        )
        return 200, account, account
    except IntegrityError as e:
        return 409, {"message": str(e)}, None
    except ValueError as e:
        return 400, {"message": str(e)}, None

# def register_form(request):
#     if request.method =='POST':
#         name = request.POST['firstname']
#         print(name)

#     return redirect('/')
