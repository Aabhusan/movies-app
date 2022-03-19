# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working directory be app
WORKDIR /usr/src/app

COPY . .

###  Installing dependencies

RUN npm install --silent

EXPOSE 8000

CMD ["npm","start"]