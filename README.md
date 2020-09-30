# Customer [CRUD]
MEAN application create customer crud

# Installation
In server directory  ``` npm install  ``` && ```docker build -t server .``` 
In client directory  ``` npm install  ``` && ```docker build -t client .``` 
run the mongdb image  ``` docker run --name mongodb -v mongodata:/data/db -d -p 27017:27017 mongo```  
run the docker container  ```docker-compose up --build``` 

# Testing [e2e]
Tests are writing with **cypress**
In client directory ```npm run cypress:install``` &&  ```npm run cypress:open```

