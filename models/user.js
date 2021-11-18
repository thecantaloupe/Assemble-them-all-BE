// import the connected mongoose object
const mongoose = require("./connection")


/////////////////////////////////////////
// Our Model
/////////////////////////////////////////
const roles = {
    USER: "user",
    ADMIN: "admin",
};

const {Schema, model} = mongoose

//Schema for user or admin
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: Object.values(roles)},
    date: { type: Date, default: Date.now },
});

const User = model("User", userSchema)

// export the model
module.exports = {
    User: User
}

