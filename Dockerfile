FROM node:20.11.1-slim
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm install
