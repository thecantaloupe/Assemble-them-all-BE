///////////////////////////////
// Dependencies
///////////////////////////////
// import express
const express = require("express")
// import middleware
const cors = require("cors"); // cors headers
const morgan = require("morgan") // logging

///////////////////////////////
// Routers
///////////////////////////////
const HomeRouter = require("../controllers/home")
const BookmarkRouter = require("../controllers/bookmark")

//////////////////////
// Middleware Function
//////////////////////
const middleware = (app)=>{
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use('/', HomeRouter);
    app.use('/bookmark', BookmarkRouter);
}

module.exports = middleware; 
