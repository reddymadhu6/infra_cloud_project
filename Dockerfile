# Use the Node.js base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["node", "app.js"]
