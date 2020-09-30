
FROM node:latest
# Create app directory
WORKDIR /server
# Install app dependencies
COPY package*.json ./
COPY . .

RUN npm install

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start"]