const { Mongoose } = require("mongoose");
const Assemble = require("../models/assemble");

////////////////////////////////////////////////
// Function
////////////////////////////////////////////////
//random number min
const randomNum = (mult, min) => Math.floor(Math.random() * mult + min);

////////////////////////////////////////////////
// Controllers
////////////////////////////////////////////////

const getR = async (req, res) => {
  try {
    // send all the assembles
    res.status(200).json(await Assemble.find({}));
  } catch (error) {
    // send error
    res.status(400).json({ message: message.error });
  }
};

// destroy route
const deleteR = async (req, res) => {
  try {
    res.json(await Assemble.findByIdAndRemove(req.params.id));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

// update a specified person
const updateR = async (req, res) => {
  try {
    res.json(
      await Assemble.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

// Create Route - post request to /Assemble
const createR = async (req, res) => {
  const ass = req.body;

  const startHealth = 100;
  let attack = 0;
  let defense = 0;
  while (attack <= defense) {
    attack = randomNum(15, 15);
    defense = randomNum(8, 2);
  }
  ass.attack = attack;
  ass.defense = defense;
  ass.health = startHealth;

  try {
    // create a new assemble
    res
      .status(201)
      .json(await Assemble.create({ ...ass, creator: req.userId }));
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
  const test = await Assemble.findById(id);
  const index = post.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    // to like the post, push id into like array
    test.likes.push(req.userId);
  } else {
    // remove prev like by filtering id out
    post.likes = post.like.filter((id) => id !== String(req.userId));
  }
  //update like count entry with new entry
  const updatedTest = await Assemble.findByIdAndUpdate(
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
