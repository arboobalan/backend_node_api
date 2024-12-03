const mongoose = require('mongoose');

const userInfo = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    email_id: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        required: true
    }
});

const userDetails = mongoose.model('userdetails', userInfo, 'userdetails');
module.exports = userDetails;