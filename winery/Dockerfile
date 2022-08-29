FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip 
WORKDIR /app

COPY requirements.txt requirements.txt
COPY manage.py manage.py

COPY winery winery
COPY winery_project winery_project
COPY inventory inventory
COPY common common

RUN pip install -r requirements.txt 
CMD python manage.py migrate && gunicorn winery_project.wsgi --bind 0.0.0.0:$PORT --log-file -


