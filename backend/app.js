'use strict'
//Cargar modulos de Node.js
var express=require("express");
var bodyparser=require("body-parser");
//Ejecutar el express servidor http
var app=express();
//Cargar archivos las rutas
var productoroutes=require('./routes/producto')
//middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//CORS para las peticiones del frontend

//Configurar cabeceras y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Añadir prefijos
app.use('/',productoroutes);
//Ruta
/*
app.get('/prueba',(req,res)=>{
    return res.status(200).send({
        mensaje:'Bienvenidos a la plataforma Market Place Shop',
    })
})*/
//Exportar los modulos
module.exports=app;