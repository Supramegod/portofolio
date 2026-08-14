# syntax=docker/dockerfile:1

# ---- shared base: dependencies ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- dev: Vite dev server with HMR ----
FROM node:22-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
# --host binds 0.0.0.0 so the port is reachable from outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ---- build: prebuild (sitemap) + vite build ----
FROM node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- prod: static dist served by nginx ----
FROM nginx:1.27-alpine AS prod
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
