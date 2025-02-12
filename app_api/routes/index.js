const express = require('express');
const router = express.Router();

// Import controllers to route
const tripsController = require('../controllers/trips');

// Define route for our trips endpoint, GET method routes tripslist
router.route('/trips')
.get(tripsController.tripslist)
.post(tripsController.tripsAddTrip);  // POST method adds a trip

// GET method routes tripsFindByCode - requires parameter
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;