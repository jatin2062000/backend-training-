const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName : String,
    authorName : String,
    category : {
        type : String,
        enum : ["horror","comic","true story"]
    },
    year : Number,
    date :{
        type : Date,
        default : Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //

// Boolean, Object/json, array
