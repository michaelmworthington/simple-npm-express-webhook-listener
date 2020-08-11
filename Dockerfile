# build environment
FROM node:12.14.0-alpine
WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 2000
CMD ["node", "index.js"]

