FROM ubuntu:16.04

RUN apt-get -qq update
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_6.x |  bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install 

COPY . /usr/src/app

EXPOSE 3030

CMD ["npm","start"]


