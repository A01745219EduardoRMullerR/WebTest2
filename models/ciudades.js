const mongoose = require('mongoose')

const CitySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{
        type:String,
        required: true
    },
    pais:{
        type:String,
        required: true
    },
    tipo:{
        type:String,
        required:false
    },
    interes: {
        type: Number,
        default: 0,
        required: true
    }
},{collection:'Cities'})

const City = mongoose.model('Cities', CitySchema)
module.exports = City