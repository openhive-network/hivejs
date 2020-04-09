FROM node:6
ADD ./package.json /hivejs/package.json
WORKDIR /hivejs
RUN npm install
ADD . /hivejs
RUN npm test
