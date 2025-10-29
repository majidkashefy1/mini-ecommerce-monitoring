FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install express mongoose

COPY . .

EXPOSE 4000

CMD ["node", "server.js"]
