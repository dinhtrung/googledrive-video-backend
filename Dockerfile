FROM node:alpine

# Create app directory
WORKDIR /srv/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available ([email protected]+)
COPY package.json ./

# RUN npm install
# If you are building your code for production
RUN npm install --only=production

# Bundle app source
COPY app.js ./

EXPOSE 80
CMD [ "npm", "start" ]
