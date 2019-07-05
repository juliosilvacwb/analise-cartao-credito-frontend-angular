FROM node
MAINTAINER Julio Silva
COPY . /var/www
WORKDIR  /var/www
ENTRYPOINT npm start
EXPOSE 3000