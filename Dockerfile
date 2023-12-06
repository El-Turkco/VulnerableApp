FROM node:18.16.1
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY  NodeXss /opt/app
COPY package.json /opt/app
RUN npm install
EXPOSE 3000
CMD [ "npm","start" ]

