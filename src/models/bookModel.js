const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    _id:{
        type:ObjectId,
        required:true
    },
    name: String,
    author: {
        type: ObjectId,
        ref: "Author",
        required:true
    },
    ratings: Number,
    publisher:{
        type:ObjectId,
        ref:"publisher",
        required:true
    }
    


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
