const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', {
    name: {
        first: String,
        last: String
    },
    birthday: String,
    gender: String,
    lastContact: Date,
    customerLifetimeValue: Number
});

module.exports = {Customer: Customer};