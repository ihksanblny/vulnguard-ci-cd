# Stage 1: Build
FROM node:20-alpine AS builder
# Tambahkan ini untuk update OS agar celah level sistem hilang
RUN apk update && apk upgrade && apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --no-package-lock
COPY . .
RUN npm run build

# Stage 2: Runner
FROM node:20-alpine AS runner
RUN apk update && apk upgrade # Update OS lagi di stage runner
WORKDIR /app
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
