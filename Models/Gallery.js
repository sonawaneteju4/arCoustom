const mongoose = require('mongoose');

const GallerySchema = mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    image:{
        data:Buffer,
        contentType: String
    },
    type :{
        type : String,
        default: "wrap"
   },
    Date :{
        type : Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('gallery', GallerySchema)
