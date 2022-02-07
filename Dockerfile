FROM node:17.4

WORKDIR /frontend


RUN npm install yarn
COPY . .
RUN yarn install
RUN yarn build
