FROM node:12.22.9

COPY . /var/www/html
WORKDIR /var/www/html

CMD bash run.sh

EXPOSE 8080