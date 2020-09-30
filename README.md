# Customer [CRUD]
MEAN application create customer crud

# Installation
Please make sure to have [Docker](https://docs.docker.com/docker-for-windows/install/) already installed in your machine.<br/>
In the server directory  ``` npm install  ``` && ```docker build -t server .``` <br/>
In the client directory  ``` npm install  ``` && ```docker build -t client .``` <br/>
Run the mongdb image  ``` docker run --name mongodb -v mongodata:/data/db -d -p 27017:27017 mongo```<br/>  
Run the docker container  ```docker-compose up --build``` 

# Testing [e2e]
Tests are writing with **cypress**
In client directory ```npm run cypress:install``` &&  ```npm run cypress:open```

