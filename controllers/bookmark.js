////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Bookmark = require("../models/bookmark");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use(express.json());

/////////////////////////////////////////
// Routes
/////////////////////////////////////////
// Index Route - get request to /bookmark
// get us all the bookmarks
router.get("/", async (req, res) => {
  try {
    // send all the bookmarks
    res.json(await Bookmark.find({}));
  } catch (error) {
    // send error
    res.status(400).json({ error });
  }
});
// destroy route - delete request to /bookmark/:id
// delete a specific bookmark
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json({ error });
  }
});

// update route - put request to /bookmark/:id
// update a specified person
router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Create Route - post request to /bookmark
// create a person from JSON body
router.post("/", async (req, res) => {
  try {
    // create a new bookmark
    res.json(await Bookmark.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json({ error });
  }
});

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
