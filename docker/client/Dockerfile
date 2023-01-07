FROM node:16
WORKDIR /usr/src/app

COPY --chown=node:node ./client/package.json .
COPY --chown=node:node ./client/package-lock.json .
RUN npm install
# RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY --chown=node:node ./client .
USER node
