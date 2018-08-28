FROM node:alpine

LABEL image="imove-api"

# Create work directory
WORKDIR /usr/src/app

# Install other dependencies for building npm packages via apk
RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*

# Install runtime dependencies
RUN npm install yarn -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

# Build the js dist version of the api
RUN yarn build

# Build and run the app
CMD yarn start
