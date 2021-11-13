///////////////////////////////////
// Dependencies
///////////////////////////////////
// dotenv to get our env variables
require("dotenv").config()
// PULL PORT variable from .env
const {PORT = 3000, MONGODB_URL} = process.env
// import express
const express = require("express")
// create app object
const app = express()
// import mongoose
const mongoose = require("mongoose")
// import middleware
const cors = require("cors"); // cors headers
const morgan = require("morgan") // logging

//////////////////////////////////
// Database Connection
//////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// Connection Events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disonnected to Mongo"))
.on("error", (error) => console.log(error))

////////////////////////////////////////////////
// Models
////////////////////////////////////////////////
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})

const Bookmark = mongoose.model("Bookmark", BookmarkSchema)

////////////////////////////////////////////////////
// Middleware
///////////////////////////////////////////////////
app.use(cors()) // prevent cors errors
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies

////////////////////////////////
// Routes and Routers
///////////////////////////////
// test route
app.get("/", (req, res) => {
    res.send("hello world")
})

// Index Route - get request to /bookmark
// get us all the bookmarks
app.get("/bookmark", async (req, res) => {
    try {
        // send all the bookmarks
        res.json(await Bookmark.find({}))
    } catch (error) {
        // send error
        res.status(400).json({error})
    }
})

// Create Route - post request to /bookmark
// create a person from JSON body
app.post("/bookmark", async (req, res) => {
    try {
        // create a new bookmark
        res.json(await Bookmark.create(req.body))
    } catch (error){
        //send error
        res.status(400).json({error})
    }
})

// update route - put request to /bookmark/:id
// update a specified person
app.put("/bookmark/:id", async (req, res) => {
    try {
        res.json(
            await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error){
        res.status(400).json({error})
    }
})

// destroy route - delete request to /bookmark/:id
// delete a specific bookmark
app.delete("/bookmark/:id", async (req, res) => {
    try {
      res.json(await Bookmark.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json({ error });
    }
  });

///////////////////////////////
//Server listener
////////////////////////////////
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})