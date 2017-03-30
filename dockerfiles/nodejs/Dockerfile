#
# Node.js Dockerfile
#
# https://github.com/dockerfile/nodejs
#

# Pull base image.
FROM node:boron

RUN mkdir -p /var/nodejs

# Define working directory.
WORKDIR /var/nodejs

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
