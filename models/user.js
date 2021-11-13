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

// Testing discriminators 
var guestSchema = new Schema({
  date: { type: Date, default: Date.now },
});

var Guest = model('Guest', guestSchema);

//Schema for user or admin
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: Object.values(roles)},
    date: { type: Date, default: Date.now },
});

const User = model("User", userSchema)

// export the model
module.exports = {
    Guest: Guest,
    User: User
}

