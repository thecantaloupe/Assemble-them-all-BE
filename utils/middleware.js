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
    , session = require("express-session")
const MongoStore = require("connect-mongo")
///////////////////////////////
// Routers
///////////////////////////////
const BookmarkRouter = require("../controllers/bookmark")
    ,UserRouter = require("../controllers/user")
    ,HomeRouter = require("../controllers/home");
// const bodyParser = require("body-parser");
//////////////////////
// Middleware Function
//////////////////////
const middleware = (app)=>{
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(
        session({
          secret: process.env.SECRET,
          store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),
          saveUninitialized: true,
          resave: false,
        })
      );
    app.use('/', HomeRouter);
    app.use('/bookmark', BookmarkRouter);
    app.use("/user", UserRouter);
}

module.exports = middleware; 
