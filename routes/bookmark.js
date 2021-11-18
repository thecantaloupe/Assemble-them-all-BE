const Bookmark = require("../models/bookmark");


const getR = async (req, res) => {
    try {
      // send all the bookmarks
      res.status(200).json(await Bookmark.find({}));
    } catch (error) {
      // send error
      res.status(400).json({ message: message.error });
    }
};
  
  
// destroy route 
const deleteR = async (req, res) => {
    try {
      res.json(await Bookmark.findByIdAndRemove(req.params.id));
    } catch (error) {
      console.log(error)
      res.status(400).json({ error });
    }
};
  
  // update a specified person
const updateR = async (req, res) => {
    try {
      res.json(
        await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      console.log(error)
      res.status(400).json({ error });
    }
};
  
  // Create Route - post request to /bookmark
const createR = async (req, res) => {
    const post = req.body
    try {
      // create a new bookmark
      res.status(201).json(await Bookmark.create(req.body));
    } catch (error) {
      console.log(error)
      //send error
      res.status(409).json({ message: error.message });
    }
};

module.exports = {
    getR: getR,
    deleteR: deleteR,
    updateR: updateR,
    createR: createR
}