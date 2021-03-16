const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const hotelRSRoute = require('./hotelRS.route');
const hotelRS1Route = require('./hotelRS1.route');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to the database' + err) }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/hotelRS', hotelRSRoute);
app.use('/hotelRS1', hotelRS1Route);

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});