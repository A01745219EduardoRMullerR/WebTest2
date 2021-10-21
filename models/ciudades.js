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
    interes: Number
},{collection:'Cities'})

module.exports = mongoose.model('Cities', CitySchema)