<template>
    <div>
        <div class="slider3">
            <h2>Lista Productos</h2>
        </div>
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
                    <td>{{Producto.nombre}}</td>
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
    </div>   
</template>
<script>
import axios from 'axios'
import Global from '../Global'
import swal from 'sweetalert'
export default {
    name:'listProducto',
    methods:{
        getProductos(){
            axios.get(this.url+'listarproductos').then(res=>{
                this.productos=res.data.productos;
                console.log(this.productos);
            })
        },
        deleteProducto(id){
            swal({
                title: "¿Esta seguro de borrar el producto?",
                text: "Esta operacion no se puede deshacer!",
                icon: "warning",
                buttons: true,
                dangerMode: true
            }).then(willDelete => {
                    if (willDelete) {
                    axios.delete(this.url + "eliminarproducto/" + id).then(res => {
                        if (res.data) {
                        swal("Producto eliminado");
                        this.$router.push("/home");
                        }
                    });
                } else {
                swal("!No la embarraste!");
                }
            });
        }
    },
    mounted(){
        this.getProductos();
    },
    data(){
        return{
            productos:null,
            url:Global.url,
        }
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>