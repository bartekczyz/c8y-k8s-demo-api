FROM node:12-alpine

WORKDIR /home/node/app

COPY package.json yarn.lock ./
RUN yarn
COPY . .

CMD sh -c 'yarn start'
