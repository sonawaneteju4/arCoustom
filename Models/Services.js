const mongoose  = require("mongoose");
const { Schema } = mongoose;

const ServicesSchema = new Schema({
    id : {
        type: String,
        required: true
    },
    services : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    imgUrl : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    link1 : {
        type: String,
        required: true
    },
    link2 : {
        type: String,
        required: true
    },
    gImg1 : {
        type: String,
        required: true
    },
    gImg2 : {
        type: String,
        required: true
    },
    gImg3 : {
        type: String,
        required: true
    },
    gImg4 : {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('services', ServicesSchema)
