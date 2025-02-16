const express = require('express');
const router = express.Router();

// Import controllers to route
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router.route('/register').post(authController.register);
//router.route('/login').post(authController.login);

// Define route for our trips endpoint, GET method routes tripslist
router.route('/trips')
.get(tripsController.tripslist)
.post(tripsController.tripsAddTrip);  // POST method adds a trip

// GET method routes tripsFindByCode - requires parameter
// PUT method routes tripsUpdateTrip - requires parameter
router.route('/trips/:tripCode')
.get(tripsController.tripsFindByCode)
.put(tripsController.tripsUpdateTrip);

module.exports = router;