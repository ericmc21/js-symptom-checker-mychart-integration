FROM node:18.8.0-alpine3.16
WORKDIR /app
COPY . .
RUN npm install
RUN yarn install
ENV NODE_OPTIONS=--openssl-legacy-provider
EXPOSE 8080
CMD ["yarn", "dev"]