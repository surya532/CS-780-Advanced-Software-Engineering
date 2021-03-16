const express = require('express');
const hotelRS1Routes = express.Router();

let HotelRS1 = require('./hotelRS1.model');

hotelRS1Routes.route('/add').post(function (req, res) {
    let hotelRS1 = new HotelRS1(req.body);
    hotelRS1.save()
        .then(hotelRS1 => {
            res.status(200).json({ 'hotelRS1': 'success_1' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database_1");
        });
});

hotelRS1Routes.route('/').get(function (req, res) {
    HotelRS1.find(function (err, hotelRS1s) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(hotelRS1s);
        }
    });
});

// Defined edit route
hotelRS1Routes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    HotelRS1.findById(id, function (err, hotelRS1) {
        res.json(hotelRS1);
    });
});


module.exports = hotelRS1Routes;
