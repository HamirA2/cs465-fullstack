const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome response must include HTML status code and JSON message to the requesting client
const tripslist = async(req, res) => {
    const q = await Model.find({}).exec();  // No filter returns all records
    console.log(q);                         // Show results of query in the console

    // If not data returned from database
    if (!q) {
        return res.status(404).json(err);   // Return 404 error
    }
    // Else return trip list
    else {
        return res.status(201).json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome response must include HTML status code and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model.find({'code' : req.params.tripCode }).exec();  // Return single record

    // Show results of query
    console.log(q);

    // If not data returned from database
    if (!q) {
        return res.status(404).json(err);   // Return 404 error
    }
    // Else return trip list
    else {
        return res.status(200).json(q);
    }
};

// POST: /trips - Adds a new trip
// Regardless of outcome, response must include HTML status code and JSON message to the requesting client
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip ({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    // Database returns no data
    if (!q) {
        return res.status(400).json(err);
    }
    // Return new trip
    else {
        return res.status(201).json(q);
    }

        console.log(q);
}

module.exports = {
    tripslist,
    tripsFindByCode,
    tripsAddTrip
};