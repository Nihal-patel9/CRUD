const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Name is Required`],
        trim: true,
        maxLength:[20, `Name must be less then 20 char`],
    },
    email: {
        type: String,
        required: [true, `Email is Required`],
        unique:true,
    }
})

module.exports = mongoose.model("User", userSchema);