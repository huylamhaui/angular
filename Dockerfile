FROM node:10-alpine as build-step

WORKDIR /opt/source

COPY . .

RUN npm install

RUN npm run build --prod




FROM nginx:1.17.1-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=build-step /opt/source/dist .
COPY --from=build-step /opt/source/default.conf /etc/nginx/conf.d

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]