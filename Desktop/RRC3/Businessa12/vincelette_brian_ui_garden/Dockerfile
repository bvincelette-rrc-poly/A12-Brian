# 使用官方 Node.js 镜像作为基础镜像，用于构建阶段
FROM node:16 AS build

# 设置工作目录
WORKDIR /vincelette_brian_ui_garden

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有源代码
COPY . .

# 构建生产环境
RUN npm run build

# 使用轻量级的 Nginx 镜像来托管静态文件
FROM nginx:alpine

# 将构建的文件复制到 Nginx 的默认静态文件目录
COPY --from=build /vincelette_brian_ui_garden/build /usr/share/nginx/html

# 暴露 8083 端口
EXPOSE 8083

# 修改 Nginx 配置以监听 8083 端口
RUN echo "server { listen 8083; location / { root /usr/share/nginx/html; index index.html index.htm; try_files \$uri \$uri/ /index.html; } }" > /etc/nginx/conf.d/default.conf

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]