FROM node:14-alpine

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm ci
ENV PATH /app/node_modules/.bin:$PATH

COPY public .
COPY src .

CMD ["npm", "start"]