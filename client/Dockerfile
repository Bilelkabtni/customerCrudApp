FROM node:latest
# Create app directory
WORKDIR /client
# Install app dependencies
COPY package*.json ./
# Copy app source code
COPY . .
RUN npm install --silent

#Expose port and start application
EXPOSE 4200
CMD ["npm", "start"]
