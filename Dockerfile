# Use an official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app for production
RUN npm run build

# Install a lightweight web server (e.g., serve) to serve the built files
RUN npm install -g serve

# Set the command to serve the app on port 3000
CMD ["serve", "-s", "build"]

# Expose the port the app will run on
EXPOSE 3000
