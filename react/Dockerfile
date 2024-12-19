# Stage 1: Build the React app
FROM node:20-alpine AS build 

WORKDIR /app

# install dependencies
COPY package.json package-lock.json ./
RUN npm install

# copy source code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the React app with a lightweight server, ngix
FROM nginx:alpine

# copy the build output to Nginx default HTML directory, Vite's default output directory : dist
COPY --from=build /app/dist /usr/share/nginx/html  

# expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]