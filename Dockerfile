FROM node:16-alpine

LABEL maintainer="Eduardo Henrique"

ARG NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN [ "$NODE_ENV" = "production" ] && npm ci --only=production || npm install
RUN npm install -g serve

# Bundle app source
COPY . .

# Build the app
RUN npm run build

EXPOSE 3000
CMD [ "serve", "-s", "build" ]
