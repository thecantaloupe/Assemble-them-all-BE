/////////////////////////////////////////
// Dependencies
/////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
// PULL PORT variable from .env
const {PORT = 3000} = process.env
// packages
const express = require("express") // import express
    , morgan = require("morgan") //import morgan
    , cors = require("cors") // cors headers
const MongoStore = require("connect-mongo")




///////////////////////////////
// Routers
///////////////////////////////
const BookmarkRouter = require("../routes/bookmark")
    ,UserRouter = require("../routes/user")
    ,HomeRouter = require("../routes/home");
// const bodyParser = require("body-parser");
//////////////////////
// Middleware Function
//////////////////////
const middleware = (app)=>{
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json({ limit: '50mb', extended: true }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.use('/', HomeRouter);
    app.use('/bookmark', BookmarkRouter);
    app.use('/user', UserRouter);
}

module.exports = middleware; 
