FROM node:6 AS build-env

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app
RUN npm run build

FROM nginx:latest
COPY --from=build-env /usr/src/app/build /usr/share/nginx/html
