FROM python:3.9.12-buster

ENV PYTHONUNBUFFERED 1

WORKDIR /code
COPY requirements.txt requirements.txt
RUN pip3 install --upgrade pip && \
    pip3 install -r requirements.txt
COPY . .
