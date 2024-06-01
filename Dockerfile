# pull official base image
FROM python:3.11.4-slim-buster

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY . .
RUN python -m pip install -r requirements.txt

EXPOSE 8000
CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "djangok8s.wsgi"]