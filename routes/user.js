/////////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////////
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load ENV

/////////////////////////////////////////////
// Routes
//////////////////////////////////////////////

const loginR = async (req, res) => {
    // get the data from the request body
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user)
        return res.status(404).json({ statusText: "User does not exist" });
  
      //check if password matches, async since server
      const correctPass = await bcrypt.compare(password, user.password);
      if (!correctPass)
        return res.status(400).json({ statusText: "Wrong Password" });
  
      const token = jwt.sign( { email: user.email, id: user._id }, process.env.SECRET, { expiresIn: "1h" } );
  
      res.status(200).json({ result: user, token });
    } catch (error) {
      res.status(500).json({ statusText: "Ruh Roh" });
    }
  };
  
const signupR =  async (req, res) => {
    const { email, password, confPass, firstName, lastName } = req.body;
    console.log("made it here")
    try {
        const user = await User.findOne({ email });
        console.log("made it here2")
        if (user) return res.status(400).json({ statusText: "User exists" });
        if (password !== confPass) return res.status(400).json({ statusText: "Passwords don't match" });
        const hashPass = await bcrypt.hash(password, 10); const result = await User.create({ email, password: hashPass, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" });

        res.status(200).json({ result, token });
    } catch (error) {
        console.log(error)
        res.status(500).json({ statusText: "Ruh Roh" });
    }
};
  
  //////////////////////////////////////////
  // Export the Router
  //////////////////////////////////////////
module.exports = {
    loginR: loginR,
    signupR: signupR,
}