# import django
# import os
# import sys
# import time
# import json
# import requests

# sys.path.append("")
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
# django.setup()

# # from sales_rest.models import WineVO

# def get_wines():
#     response = requests.get("http://winery-api:8000/api/inventory/")
#     content = json.loads(response.content)
#     for wine in content["wines"]:
#         WineVo.objects.update_or_create(
            
#         )