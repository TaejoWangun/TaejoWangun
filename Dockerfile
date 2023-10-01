# # Stage 1: install dependencies
# FROM node:18-alpine AS deps
# WORKDIR /app
# COPY package*.json .
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
# RUN npm install

# # Stage 2: build
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .
# CMD ["npm", "run", "build"]
# Stage 3: run
FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules
#COPY /app/package.json ./package.json
CMD ["npm", "run", "start"]