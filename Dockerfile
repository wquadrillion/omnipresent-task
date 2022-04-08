FROM node:17.5-alpine3.14

WORKDIR /app
COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
