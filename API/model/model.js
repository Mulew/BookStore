const mongoose = require('mongoose');

// Define the schema for the module
const bookSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true

        },
        publishyear:{
            type:Number,
            required:true,
        },
    },
    {
        timestamps:true
    }
);

// Create the model using the schema
const Bookmodel = mongoose.model('Books', bookSchema);

module.exports = Bookmodel;