const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotelRS = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    username: {
        type: String
    }
}, {
    collection: 'hotelRS'
});

module.exports = mongoose.model('hotelRS', HotelRS);