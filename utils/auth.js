//separated for visibility
/////////////////////////////////////////
// Dependencies
/////////////////////////////////////////
require("dotenv").config(); // Load ENV Variables
const jwt = require('jsonwebtoken')

//////////////////////
// Middleware Function
//////////////////////

module.exports = async function auth (req, res, next){
    console.log("WORKED")
    try {
        const token = req.headers.authorization.split(" ")[1]
        //Google tokens are longer than 500
        const isCustomAuth = token.length < 500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, process.env.SECRET);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            // sub is Googles name for specific id 
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        // console.log("here dumdum")
        console.log(error)
    }
}