FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 9002

CMD ["npx", "next", "start", "-p", "9002"]
