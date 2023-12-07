FROM node:21-alpine3.17 as build
WORKDIR /app
COPY package.json /app/package.json
RUN npm install 
COPY . /app
RUN npm run build
FROM nginx:1.25.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN chmod a+r /etc/nginx/nginx.conf
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]