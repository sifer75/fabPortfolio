ARG NODE_VERSION=22-alpine
FROM node:${NODE_VERSION} AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

FROM node:${NODE_VERSION} AS production
WORKDIR /app
COPY --from=build /app .
RUN adduser -D appuser
USER appuser
EXPOSE 80
CMD ["npm", "start"]