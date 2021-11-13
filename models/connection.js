/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const mongoose = require("mongoose"); // import mongoose

//////////////////////////////////
// Database Connection
//////////////////////////////////
// Setup inputs for our connect function
const MONGODB_URL = process.env.MONGODB_URL
const CONFIG = {useNewUrlParser: true, useUnifiedTopology: true}

// connect
mongoose.connect(MONGODB_URL, CONFIG)

// Connection Events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disonnected to Mongo"))
.on("error", (error) => console.log(error))

////////////////////////////////////////////////////
// Export the Connection
////////////////////////////////////////////////////

module.exports = mongoose