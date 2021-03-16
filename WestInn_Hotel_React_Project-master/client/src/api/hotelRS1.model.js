const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotelRS1 = new Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    stay_start_date: {
        type: String
    },
    room_type: {
        type: String
    },
    stay_end_date: {
        type: String
    },
}, {
    collection: 'hotelRS1'
});

module.exports = mongoose.model('hotelRS1', HotelRS1);