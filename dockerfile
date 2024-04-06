# Stage 1: Build the Angular application
FROM node:18.13 as build

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the rest of the app's source code
COPY . /app

# Build the Angular app in production mode
RUN yarn build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist/pokedex/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running
CMD ["nginx", "-g", "daemon off;"]
