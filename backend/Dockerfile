# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the src directory and .env file
COPY ./src ./src
COPY ./.env ./


# Expose the port the app runs on
EXPOSE 3001

# Command to start the app using npm
CMD ["npm", "start"]
