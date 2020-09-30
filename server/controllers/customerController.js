const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Customer } = require('../models/customer');

//getting all data from db
// => localhost:3000/Customers/fetch
router.get('/fetch', (req, res) => { //using request and response to get data 
    Customer.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Customers :' + JSON.stringify(err, undefined, 2)); }
    });
});

//getting a single record db
// => localhost:3000/customer/id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Customer.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Customer :' + JSON.stringify(err, undefined, 2)); }
    });
});

// => localhost:3000/customer/create
router.post('/create', (req, res) => {
    const emp = new Customer(req.body);
    emp.save((err, doc) => {
        if (!err) {res.send(doc); }
        else { console.log('Error in Customer Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

//updating a record 
// => localhost:3000/customer/id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    const emp = {
        name: req.body.name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        lastContact: req.body.lastContact,
        customerLifetimeValue: req.body.customerLifetimeValue,
    };

    Customer.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Customer Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

//deleting a record 
// => localhost:3000/customer/id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Customer.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Customer Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;