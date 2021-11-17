////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const {getR, deleteR, updateR, createR} = require("../routes/bookmark")

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
// Index Route - get request to /bookmark
router.get("/", getR);

// destroy route - delete request to /bookmark/:id
router.delete("/:id",  deleteR);

// update route - put request to /bookmark/:id
router.put("/:id",  updateR)

// Create Route - post request to /bookmark
router.post("/",  createR);

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
