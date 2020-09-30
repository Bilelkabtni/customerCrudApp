const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//require statement for CORS
const cors = require('cors');

// required files inclusion, db and employee controller
const { mongoose } = require('./db.js');
const customerController = require('./controllers/customerController.js');

//calling the express service
const app = express();
//configuring express middleware to pass data
app.use(bodyParser.json());

//pass to allow request from any port number / domain defined
app.use(cors({ origin: 'http://localhost:4200'}));

const pathDir = path.join(__dirname, '../');

app.use(express.static(pathDir + "/client/dist/client/"));

app.get("/", async (req, res) => {
    await res.sendFile(pathDir + "/client/dist/client/index.html")
});

//configuring & calling the port to serve the app on 
app.listen(3000, () => console.log('Server started at port : 3000'));

//adding the employeeController for use (routing)
app.use('/customer', customerController);