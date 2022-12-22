FROM node:current-alpine

# Working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY --chown=node:node . .

# node user
USER node

EXPOSE 8080

CMD [ "node", "server.js" ]
