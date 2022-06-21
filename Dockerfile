FROM node:latest

RUN mkdir sucasa-api

ADD . /sucasa-api
WORKDIR /sucasa-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "run", "start" ]