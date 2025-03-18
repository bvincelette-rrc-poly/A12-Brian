FROM node:16.20.0 AS build
WORKDIR /vincelette_brian_ui_garden_build_checks
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.25.3-alpine
COPY --from=build /vincelette_brian_ui_garden_build_checks/build /usr/share/nginx/html
EXPOSE 8018
RUN echo "server { listen 8018; location / { root /usr/share/nginx/html; index index.html index.htm; try_files \$uri \$uri/ /index.html; } }" > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]