'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ProductoSchema=Schema({
    nombre:String,
    categoria:String,
    precio:Number,
    unidades:Number,
    descripcion:String,
    image:String,
})
module.exports=mongoose.model('Producto',ProductoSchema);