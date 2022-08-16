FROM node:16-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Copy app files
COPY . ./
# Cache and Install dependencies
RUN npm install --legacy-peer-deps 
# Copy app files
# Expose port
EXPOSE 3000
# Start the app
CMD ["npm", "start"]