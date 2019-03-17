FROM node:10.15.1

WORKDIR /app

ADD package.json /app/package.json
RUN npm install --registry=https://registry.npm.taobao.org

ADD . /app

CMD ["npm", "run", "start"]
