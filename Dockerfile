FROM node:12

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install

COPY . ./

EXPOSE 4003

CMD [ "node", "./backend/src/index.js" ]
