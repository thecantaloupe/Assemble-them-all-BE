///////////////////////////////
// Dependencies
///////////////////////////////
// dotenv to get our env variables
require("dotenv").config()
// PULL PORT variable from .env
const {PORT = 3000} = process.env
// import express
const express = require("express")
// import middleware
const middleware = require('./utils/middleware')

////////////////////////////////
// Application Object
////////////////////////////////
// create app object
const app = express()

////////////////////////////////
// Middleware Section
////////////////////////////////
middleware(app);

///////////////////////////////
//Server listener
////////////////////////////////
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})