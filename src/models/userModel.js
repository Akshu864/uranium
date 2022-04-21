const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     // Write the schema content
// }, { timestamps: true });




const userSchema = new mongoose.Schema({
    "name": String,
    "balance": Number,
    "address": String,
    "age": Number,
    "gender": {
        type: String,
        enum: ["female", "male","other"]
    },

    "isFreeAppUser": false
}, { timestamps: true });








module.exports = mongoose.model('User', userSchema) //users
// module.exports = mongoose.model('User', userSchema) //users
