FROM node:17.4

WORKDIR /frontend

COPY yarn.lock yarn.lock
COPY package.json package.json
RUN npm install yarn
RUN yarn install
COPY . .
RUN yarn build
