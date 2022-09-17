FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app
COPY requirements.txt requirements.txt
COPY manage.py manage.py

COPY common common
COPY inventory inventory
COPY accounts accounts
COPY winery_project winery_project

# COPY data.json data.json
RUN python -m pip install -r requirements.txt

# ENTRYPOINT ["./generate_data.py"]
# CMD python manage.py migrate && gunicorn winery_project.wsgi --bind 0.0.0.0:$PORT --log-file -
CMD python manage.py makemigrations && python manage.py migrate && python manage.py loaddata inventory/data.json && python manage.py runserver "0.0.0.0:$PORT"