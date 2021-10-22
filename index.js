//Autor: Eduardo Muller
const express = require("express")
const mongoose = require("mongoose")
const ciudadesRoutes = require("./routes/ciudades")
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/ciudades",ciudadesRoutes)

mongoose.connect('mongodb://user10:root@54.198.161.35:27017/base10?authSource=admin')
    .then(()=>{
        app.listen(8081,()=>console.log("Servidor en línea"))
    })
    .catch(err=>console.log(err))
