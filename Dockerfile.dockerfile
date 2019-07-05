FROM node
MAINTAINER Julio Silva
COPY . /var/www
WORKDIR  /var/www
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --prod
ENTRYPOINT npm start
EXPOSE 3000