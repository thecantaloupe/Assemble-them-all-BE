////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const {getR, deleteR, updateR, createR} = require("../controllers/assemble")

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use(express.json());
// auth middleware - we can selectively add it to routes!
const auth = require("../utils/auth.js")
/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// Index Route - get request to /assemble
router.get("/", getR);

// destroy route - delete request to /assemble/:id
router.delete("/:id", auth, deleteR);

// update route - put request to /assemble/:id
router.put("/:id", auth , updateR)

// Create Route - post request to /assemble
router.post("/", auth, createR);

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
