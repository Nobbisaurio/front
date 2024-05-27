FROM node:18-alpine as DEPS
WORKDIR /usr/app
COPY package*.json ./
RUN npm install

FROM node:18-alpine as BUILDER
WORKDIR /usr/app
COPY package*.json ./
COPY --from=DEPS /usr/app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine as RUNNER
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=BUILDER /usr/app/dist/front /usr/share/nginx/html
EXPOSE 4300