# Stage 1 build app
FROM node:slim AS build-app

WORKDIR /usr/locals/app

# Copying source files
COPY . .

# Building app
RUN apt update && apt install -y git

# Stage 2 install runtime dependencies
FROM node:slim AS build-runtime

WORKDIR /usr/locals/app

COPY package.json yarn.lock ./

RUN apt update && apt install -y git && yarn install --production --frozen-lockfile

# Stage 3
FROM node:slim

WORKDIR /usr/locals/app

COPY --from=build-app /usr/locals/app .
COPY --from=build-runtime /usr/locals/app/node_modules ./node_modules

EXPOSE 3000

# Start the app
CMD ["node", "./bin/www"]
