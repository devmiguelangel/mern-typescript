FROM node:14.17.3

# ENV NODE_ENV=development

WORKDIR /app

COPY ./client/package.json ./client/yarn.lock ./

RUN yarn install --force && yarn cache clean --force
