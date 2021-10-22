const CitySchema = require("../models/ciudades")
const mongoose = require("mongoose")

exports.postAgregarCiudad = async (req,res)=>{
    const newCity = new CitySchema(req.body)
    const reqName = newCity.nombre
    newCity._id = new mongoose.Types.ObjectId()
    try{
        const interest = CitySchema.find({"nombre": reqName})
        console.log(interest)
        CitySchema.findOneAndUpdate({"nombre": reqName}, {"interes": +1})
        console.log("Ciudad " + reqName +  " no resistrada" + '\nRegistro ya encontrado')
        res.send({operacion:"Registro ya encontrado"})

    }catch(err){
        await newCity.save()
        //console.log(newCity)
        console.log("Ciudad " + reqName +  " registrada")
        res.send({operacion:"Registro nuevo"})
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