FROM node:16
WORKDIR /usr/src/app
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN npm install
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY ./frontend .
