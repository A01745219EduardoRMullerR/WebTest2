const CitySchema = require("../models/ciudades")
const mongoose = require("mongoose")

exports.postAgregarCiudad = async (req,res)=>{
    const ciudades = new CitySchema(req.body)
    ciudades._id = new mongoose.Types.ObjectId()
    try{
        await ciudades.save()
        console.log(ciudades)
        console.log("Ciudad registrada")
        res.send({operacion:"correcta"})
    }catch(err){
        console.log(err)
        res.send({operacion: "incorrecta"})
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