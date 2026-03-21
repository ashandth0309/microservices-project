FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose port (change per service)
EXPOSE 3001

# Start the app
CMD ["npm", "start"]