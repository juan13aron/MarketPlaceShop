'use strict'
var validator1=require('validator');
var Producto=require('../models/producto');
const { default: validator } = require('validator');
const producto = require('../models/producto');
var fs=require('fs');
var path=require('path');
const { exit } = require('process');
var controller={
    datosProducto:(req,res)=>{
        console.log('Cualquier cosa')
        return res.status(200).send({
            nombre:"Zapatillas Nike",
            categoria:"Ropa",
            precio:"100000",
            unidades:"50",
            descripcion:"Con el orrer todos los días."
        })
    },
    save:(req,res)=>{
        //Recoger los parametros
        var params=req.body;
        console.log(params);
        //Validar los datos 
        try{
            var validar_nombre=validator1.isEmpty(params.nombre);
            var validar_categoria=validator1.isEmpty(params.categoria);
            var validar_precio=validator1.isEmpty(params.precio);
            var validar_unidades=validator1.isEmpty(params.unidades);
            var validar_descripcion=validator1.isEmpty(params.descripcion);
            var validar_favorito=validator1.isEmpty(params.favorito);
        }
        catch(err){
            return res.status(404).send({
                message:"Escribir bien...",
            })
        }
        //Guardamos
        var producto=new Producto
        producto.nombre=params.nombre;
        producto.categoria=params.categoria;
        producto.precio=params.precio;
        producto.unidades=params.unidades;
        producto.descripcion=params.descripcion;
        producto.favorito=params.favorito;
        producto.save((err,ProductoStored)=>{
            if(err || !ProductoStored){
                return res.status(404).send({
                    status:'error',
                    message:"No se puede realizar la siguiente accion",
                })
            }
            //Devolvemos el valor
            return res.status(200).send({
                status:'Operacion Exitosa',
                message:ProductoStored,
            })
        })
    },
    get_producto:(req,res)=>{
        var query=Producto.find({});
        var variable=req.params.parametro;
        if(variable || !variable==undefined){
            query.limit(2);
        }
        console.log(variable);
        query.sort('categoria').exec((err,productos)=>{
            if(err){
                return res.status(404).send({
                    status:'Error',
                    message:"Error",
                })
            }
            return res.status(200).send({
                status:'Operacion Exitosa',
                productos,
            })
        })
    },
    get_productobyid:(req,res)=>{
        var id=req.params.id;
        if(!id || id==null){
            return res.status(404).send({
                status:'Error',
                message:"No hay id",
            })
        }
        //Buscar el id
        Producto.findById(id,(err,Producto)=>{
            if(err){
                return res.status(404).send({
                    status:'Error',
                    message:"No se pudo procesar",
                })
            }
            if(!Producto){
                return res.status(404).send({
                    status:'error',
                    message:"No existe el producto, ingrese una id valida",
                })
            }
            return res.status(200).send({
                status:'Exito',
                message:Producto,
            })
        })
    },
    update:(req,res)=>{
        //RECOGER EL ID QUE VAMOS A USAR
        var id=req.params.id;//Para recoger la url 
        //Recogemos los datos que lleguen
        var parametros=req.body;//Para recoger del body
        try{
            var validar_nombre=parametros.nombre;
            var validar_categoria=parametros.categoria;
            var validar_precio=parametros.precio;
            var validar_unidades=parametros.unidades;
            var validar_descripcion=parametros.descripcion;
            var validar_favorito=parametros.favorito;
        }catch (error){
            return res.status(404).send({
                status:"error",
                message:"LLene todos los datos"
            })
        }
        //Validar
        if(validar_categoria && validar_precio && validar_nombre && validar_unidades && validar_descripcion && validar_favorito){
            producto.findOneAndUpdate({_id:id},parametros,{new:true},(err,ProductoActualizado)=>{
                if(err){
                    return res.status(500).send({
                        status:"error",
                        message:"Error, no se pudo actualizar"
                    })
                }
                if(!ProductoActualizado){
                    return res.status(500).send({
                    status:"error",
                    message:"Id erroneo, verifique"
                 })
                }
                else{
                    return res.status(200).send({
                    status:"Exito",
                    message:ProductoActualizado,
                    })
                }
            })
        }
        else{ //Mensaje de error
            return res.status(500).send({
                status:"error",
                message:"Validacion no es correcta"
            })
        }
    },
    delete:(req,res)=>{
        //Recogemos el id
        var id=req.params.cosa;
        //find and delete
        Producto.findOneAndDelete({_id:id},(err,ProductoRemove)=>{
            if(err){
                return res.status(500).send({
                status:'error',
                message:"Error al procesar",
                })
            }
            if(!ProductoRemove){
                return res.status(500).send({
                    status:'error',
                    message:"Id equivocado",
                    })
            }
            return res.status(200).send({
                status:'Exito, producto eliminado',
                message:ProductoRemove,
            })
        })
    },
    search:(req,res)=>{
	    var buscar=req.params.parametro;
	    Producto.find({"$or":[
	        {"nombre":{"$regex":buscar,"$options":"i"}},
	        {"categoria":{"$regex":buscar,"$options":"i"}},
            ]})
        .exec((err, productos)=>{
	        if(err){
	            return res.status(500).send({
                    status:"error",
                    message:"error en la peticion",
                })
            }
            else if(!productos){
                return res.status(404).send({
                    status:"error",
                    message:"No se encontro nada con los criterios",
                })
            }
            return res.status(200).send({
                status:"Exito mi mono",
                productos,
            })
        })
    },
    searchfav:(req,res)=>{
	    var buscar=req.params.parametro;
	    Producto.find({"$or":[
	        {"favorito":{"$regex":buscar,"$options":"i"}},
            ]})
        .exec((err, productos)=>{
	        if(err){
	            return res.status(500).send({
                    status:"error",
                    message:"error en la peticion",
                })
            }
            else if(!productos){
                return res.status(404).send({
                    status:"error",
                    message:"No se encontro nada con los criterios",
                })
            }
            return res.status(200).send({
                status:"Exito mi mono",
                productos,
            })
        })
    },
    upload:(req,res)=>{
        //coger el archivo de la peticion
        var file_name='Imagen no subida';
        if(!req.files){
            return res.status(404).send({
                status:'Error',
                message:file_name,
            })
        }
        //Coger el nombre y la extension
        var file_path=req.files.file0.path;
        var file_split=file_path.split('\\');//En el servidor / porque el servidor es linux
        //Comprobamos la extension
        var file_name=file_split[2];
        var file_extension=file_name.split('.')[1];
        if(file_extension != 'png' && file_extension != 'jpg' && file_extension ){
            //Borrar el archivo
            fs.unlink(file_path,(err)=>{
                return res.status(404).send({
                    status:'Error',
                    message:"La extension de la imagen no es valida",
                })
            });
        }
        else{
            var id=req.params.id;
            console.log(file_name);
            Producto.findOneAndUpdate({_id:id},{image:file_name},
                {new:true},(err,ArticleUpdate)=>{
                    if(err || !ArticleUpdate){
                        return res.status(404).send({
                            status:'Error',
                            message:"Error al guardar la imagen del articulo",
                        })
                    }
                    return res.status(200).send({
                        status:'success',
                        ArticleUpdate,
                    })
            })
        }
    },
    obtener_imagen:(req,res)=>{
        var file=req.params.nombreimagen;
        var file_path='./upload/producto/'+file;
        fs.exists(file_path,(exist)=>{
            if(exist){
                return res.sendFile(path.resolve(file_path));
            }
            else{
                return res.status(404).send({
                    status:'Error',
                    message:"La imagen no existe",
                })
            }
        })
    }
};
module.exports=controller;