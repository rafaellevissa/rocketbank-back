FROM node:16

WORKDIR /api

COPY package*.json ./

RUN npm i --only=production

COPY . ./

CMD [ "node", "ace", "serve" ]

EXPOSE 3333