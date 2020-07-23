<template>
        <div class="table-info">
            <table id="customers">
                <tr>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Unidades</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
                <tr v-for="Producto in productos" :key="Producto.id">
                    <td ><router-link :to="'/producto/'+Producto._id" class="text-table">{{Producto.nombre}}</router-link></td>
                    <td>{{Producto.categoria}}</td>
                    <td>{{Producto.unidades}}</td>
                    <td>{{Producto.precio}}</td>
                    <td><img width="50px" :src="'http://localhost:5000/obtenerimagenproducto/'+Producto.image"/></td>
                    <td><router-link :to="'/editarproducto/'+Producto._id">Editar </router-link>
                        <a @click="deleteProducto(Producto._id)">Eliminar</a>
                    </td>
                </tr>    
            </table> 
        </div>
</template>
<script>
import axios from 'axios';
import Global from '../Global'
export default {
    name:"BuscarProducto",
    methods:{
        getProductos(busqueda1){
            axios.get(this.url+'listarproductos/'+busqueda1).then(res=>{
                    this.productos=res.data.productos;
                console.log(this.productos);
            });
        },
    },
    data(){
        return{
            productos: null,
            url: Global.url,
        };
    },
    mounted(){
        var busqueda=this.$route.params.buscar;
        this.getProductos(busqueda);
    },
};
</script>
<style >
@import '../assets/css/styles.css';
</style>