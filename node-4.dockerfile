FROM node:4
ADD ./package.json /hivejs/package.json
WORKDIR /hivejs
RUN npm install
ADD . /hivejs
RUN npm test
