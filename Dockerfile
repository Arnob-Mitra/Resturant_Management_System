FROM node:buster

WORKDIR /app

COPY package*.json ./

RUN npm install -g serve

COPY ./src /app/
COPY ./public /app/

EXPOSE $PORT