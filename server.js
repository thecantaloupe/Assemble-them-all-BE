//___________________
//Dependencies
//___________________
const express = require("express") // import express
const middleware = require("./utils/middleware")

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
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})