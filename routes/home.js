////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const {homeR} = require("../controllers/home")

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// test route
router.get("/", homeR)

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router; 