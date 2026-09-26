# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Configure pnpm and install dependencies
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm && pnpm install --ignore-scripts

# Install rsync for build process
RUN apk add --no-cache rsync

# Copy source code and configuration
COPY src ./src
COPY config ./config
COPY tsconfig.json ./

# Run prisma generate
RUN pnpm prisma-generate || true

# Build the application
RUN pnpm build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Configure pnpm and install all dependencies
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN pnpm install --ignore-scripts

# Copy built application from builder
COPY --from=builder /app/dist ./dist

# Copy .env file (if exists)
COPY .env* ./

# Expose port (adjust based on your application)
EXPOSE 3000

# Start application
CMD ["pnpm", "preview"]
