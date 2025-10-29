FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files (if you have them)
COPY package*.json ./

# Install dependencies
RUN npm install express axios

# Copy the rest of the app
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
