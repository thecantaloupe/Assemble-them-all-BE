<<<<<<< HEAD:controllers/bookmark.js
const { Mongoose } = require("mongoose");
const Bookmark = require("../models/bookmark");
=======
const Assemble = require("../models/assemble");
>>>>>>> a607ebb9558162b41bfe576132ecb5485312f0ac:controllers/assemble.js

const getR = async (req, res) => {
<<<<<<< HEAD:controllers/bookmark.js
  try {
    // send all the bookmarks
    res.status(200).json(await Bookmark.find({}));
  } catch (error) {
    // send error
    res.status(400).json({ message: message.error });
  }
=======
    try {
      // send all the bookmarks
      res.status(200).json(await Assemble.find({}));
    } catch (error) {
      // send error
      res.status(400).json({ message: message.error });
    }
>>>>>>> a607ebb9558162b41bfe576132ecb5485312f0ac:controllers/assemble.js
};

// destroy route
const deleteR = async (req, res) => {
<<<<<<< HEAD:controllers/bookmark.js
  try {
    res.json(await Bookmark.findByIdAndRemove(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
=======
    try {
      res.json(await Assemble.findByIdAndRemove(req.params.id));
    } catch (error) {
      console.log(error)
      res.status(400).json({ error });
    }
>>>>>>> a607ebb9558162b41bfe576132ecb5485312f0ac:controllers/assemble.js
};

// update a specified person
const updateR = async (req, res) => {
<<<<<<< HEAD:controllers/bookmark.js
  try {
    res.json(
      await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

// Create Route - post request to /bookmark
=======
    try {
      res.json(
        await Assemble.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      console.log(error)
      res.status(400).json({ error });
    }
};
  
  // Create Route - post request to /Assemble
>>>>>>> a607ebb9558162b41bfe576132ecb5485312f0ac:controllers/assemble.js
const createR = async (req, res) => {
  const book = req.body

  try {
    // create a new bookmark
    res.status(201).json(await Bookmark.create({...book, creator: req.userId}));
  } catch (error) {
    console.log(error);
    //send error
    res.status(409).json({ message: error.message });
  }
};

// example for using auth
const testR = async (req, res) => {
  //check if user is logged in, if not then send not authorized
  if (!req.userId) return res.json({ message: "Not Authorized" });
  const { id } = req.params;
  //check if id is valid 
  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with the id ${id}`);
  const test = await Bookmark.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    // to like the post, push id into like array
    test.likes.push(req.userId);
  } else {
    // remove prev like by filtering id out
    post.likes = post.like.filter((id) => id !== String(req.userId));
  }
  //update like count entry with new entry
  const updatedTest = await Bookmark.findByIdAndUpdate(
    id,
    { test },
    { new: true }
  );
  res.json(updatedTest);
};

module.exports = {
  getR: getR,
  deleteR: deleteR,
  updateR: updateR,
  createR: createR,
  testR: testR,
};
