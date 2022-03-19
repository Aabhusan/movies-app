#  Dockerfile for Node Express Backend

FROM node:10.16-alpine

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app source code
COPY . .

# Install Dependencies
RUN npm install --silent

# Exports
EXPOSE 5000

CMD ["node","index.js"]