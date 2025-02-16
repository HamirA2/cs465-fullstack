const mongoose = require('mongoose');
const User = require('../models/user');

const register = async(req, res) => {
    // Message validates all parameters are present
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({"message": "All fields required"});
    }

    const user = new User (
        {
            name: req.body.name,        // Set username
            email: req.body.email,      // Set email
            password: ''                // Start with empty password
        }
    );
    user.setPassword(req.body.password); // Set user password
    const q = await user.save();

    // No data returned from database
    if (!q) {
        return res.status(400).json(err);
    }
    else {
        // Return new user token
        const token = user.generateJWT();
        return res.status(200).json(token);
    }
};

module.exports = {
    register
};