const express = require('express');
const hotelRSRoutes = express.Router();

let HotelRS = require('./hotelRS.model');

hotelRSRoutes.route('/add').post(function (req, res) {
    let hotelRS = new HotelRS(req.body);
    hotelRS.save()
        .then(hotelRS => {
            res.status(200).json({ 'hotelRS': 'success' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

hotelRSRoutes.route('/').get(function (req, res) {
    HotelRS.find(function (err, hotelRSs) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(hotelRSs);
        }
    });
});

// Defined edit route
hotelRSRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    HotelRS.findById(id, function (err, hotelRS) {
        res.json(hotelRS);
    });
});

// hotelRSRoutes.route('/update/:id').post(function (req, res) {
//     HotelRS.findById(req.params.id, function (err, hotelRS) {
//         if (!hotelRS)
//             res.status(404).send("data is not found");
//         else {
//             hotelRS.email = req.body.email;
//             hotelRS.username = req.body.username;
//             hotelRS.password = req.body.password;
//             hotelRS.name = req.body.name;
//             hotelRS.address = req.body.address;
//             hotelRS.conf_num = req.body.conf_num;
//             hotelRS.stay_cost = req.body.stay_cost;
//             hotelRS.room_type = req.body.room_type;
//             hotelRS.checkIn_date = req.body.checkIn_date;
//             hotelRS.checkOut_date = req.body.checkOut_date;
//             hotelRS.save().then(hotelRS => {
//                 if (res.status(200)) {
//                     res.status(200).json({ 'hotelRS': 'Data Updated Successfully.' });
//                 }
//                 if (res.status(400)) {
//                     res.status(400).json({ 'hotelRS': 'Unable to Update the Data. Please try again.' });
//                 }
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });


module.exports = hotelRSRoutes;
