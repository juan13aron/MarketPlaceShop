'use strict'
var mongoose=require('mongoose');
var app=require('./app');
var port=5000;
mongoose.connect('mongodb://localhost:27017/marketplaceshop',{useNewUrlParser:true})

.then(()=>{
    console.log('Conectado a la Base de datos guachin');
    app.listen(port,()=>{
        console.log('Servidor esta corriendo en http://localhost:'+port);
    })
})