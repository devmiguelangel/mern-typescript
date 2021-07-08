FROM node:14.17.3

WORKDIR /app

COPY ./server/package.json ./server/yarn.lock ./

RUN yarn install --force && yarn cache clean --force
