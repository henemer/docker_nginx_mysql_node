FROM node:15  
#17.6-alpine3.14


ENV DOCKERIZE_VERSION v0.6.1

RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY  . ./
#COPY --chown=node:node . .
#RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]



