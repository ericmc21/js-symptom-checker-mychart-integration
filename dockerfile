FROM ubuntu
WORKDIR /app
RUN apt-get -y update && apt-get -y install nginx 
RUN apt-get -y install npm
# Copy the Nginx config
COPY . .
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port for access
EXPOSE 80/tcp

# Run the Nginx server
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]


