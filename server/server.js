const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const { mongoose } = require('./db.js');
const customerController = require('./controllers/customerController.js');

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200'}));

const pathDir = path.join(__dirname, '../');

app.use(express.static(pathDir + "/client/dist/client/"));

app.get("/", async (req, res) => {
    await res.sendFile(pathDir + "/client/dist/client/index.html")
});

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/customer', customerController);