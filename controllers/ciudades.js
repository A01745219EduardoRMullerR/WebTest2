const CitySchema = require("../models/ciudades")
const mongoose = require("mongoose")

exports.postAgregarCiudad = async (req,res)=>{
    const newCity = new CitySchema(req.body)
    const reqName = newCity.nombre
    newCity._id = new mongoose.Types.ObjectId()
    try{
        await CitySchema.update({"nombre": reqName}, {$inc: {"interes": 1}})
    }catch(err){
        console.log(err)
        res.send({operacion: "error"})
    }
    try{
        await newCity.save()
        console.log('newCity------------------------\n'+
            newCity
            +'\n---------------------------newCity')
        console.log("Ciudad " + reqName +  " registrada")
        res.send({operacion:"Registro nuevo"})
    }catch(err){
        console.log(err)
        res.send({operacion: "error"})
    }
}

exports.getObtenerCiudades=async (req,res)=>{
    const city = await CitySchema.find()
    console.log(city)
    res.json(city)
}

exports.postActualizarCiudades = async(req, res)=>{
    try{
        await CitySchema.findOneAndUpdate(req.body.filtro,req.body.cambio)
        console.log("Cambio realizado")
        res.json({operacion: "correcta"})
    }catch(err){
        console.log(err)
        res.json({operacion: "incorrecta"})
    }
}

exports.postBorrarCiudad = async (req, res)=>{
    await CitySchema.findByIdAndRemove(req.body)
    console.log("Ciudad eliminada")
    res.json({operacion: "correcta"})
}