const {Router}=require('express');
const route = Router();
const pruebaControlador = require('../controllers/prueba.controller');

route.get('/',pruebaControlador.obtener);
route.post('/',pruebaControlador.crear);
route.put('/',pruebaControlador.actualizar);
route.delete('/',pruebaControlador.eliminar);

module.exports = route;