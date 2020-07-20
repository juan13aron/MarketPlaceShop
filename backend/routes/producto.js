'use strict'
var express=require('express');
var PersonaController=require('../controllers/producto');
var multipart=require('connect-multiparty');
var md_upload=multipart({uploadDir:'./upload/producto'});
var router=express.Router();
//Funciones de las Rutas
router.get('/pruebaxd/',PersonaController.datosProducto);
router.post('/guardar',PersonaController.save);
router.get('/listarproductos/:parametro?',PersonaController.get_producto);
router.get('/buscarproducto/:id',PersonaController.get_productobyid);//listar
router.put('/editarproducto/:id',PersonaController.update)
router.delete('/eliminarproducto/:cosa',PersonaController.delete);
router.get('/buscarproductos/:parametro',PersonaController.search);//buscador
router.get('/obtenerimagenproducto/:nombreimagen',PersonaController.obtener_imagen);
router.post('/subir-imagenproducto/:id', md_upload,PersonaController.upload);

module.exports=router;