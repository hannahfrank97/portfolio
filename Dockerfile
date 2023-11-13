FROM node:latest as build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files and folders to the working directory
COPY . .

# Build the app for production with minification
RUN npm run build

# Stage 2: Set up Nginx to serve the built application
FROM nginx:1.25.3-alpine as production-stage

# Copy the built app to Nginx's serve directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Override the default Nginx configuration
# This configuration ensures that SPA routing works correctly
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]