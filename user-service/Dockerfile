FROM node:10.15.1

WORKDIR /app

COPY entrypoint.d /entrypoint.d

COPY package.json /app/package.json
RUN npm install --registry=https://registry.npm.taobao.org

COPY . /app
