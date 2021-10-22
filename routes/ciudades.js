//Autor: Eduardo Muller
const router = require('express').Router()
const cityController = require("../controllers/ciudades")

router.post('/agregarCiudad',cityController.postAgregarCiudad)
router.get('/agregarCiudad',cityController.getObtenerCiudades)
router.post('/obtenerPais', cityController.getObtenerPais)
router.post('/actualizarCiudad',cityController.postActualizarCiudades)
router.post('/borrarCiudad',cityController.postBorrarCiudad)

module.exports = router