FROM node:10-alpine as build-step

WORKDIR /opt/source

COPY . .

RUN npm install

RUN npm run build --prod




FROM nginx:1.17.1-alpine
COPY --from=build-step /opt/source/dist /usr/share/nginx/html