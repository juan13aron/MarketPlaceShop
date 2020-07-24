<template>
    <div class="page-producto">
        <div class="slider4">
            <h2>Detalles</h2>
        </div>
        <SliderHome></SliderHome>
        <div class="container-view">
            <div class="img-view">
                <img  :src="'http://localhost:5000/obtenerimagenproducto/'+productos.image"/>
            </div>
            <div class="details-view">
                <h1>{{productos.nombre}}</h1>
                <h2>{{productos.categoria}}</h2>
                <h3>$ {{productos.precio}}</h3>
                <div class="buy-view">
                    <h4>Unidades:{{productos.unidades}}</h4>
                    <input type="submit" value="Comprar" class="buttonbuy"/>
                </div>
            </div>
            <div class="description-view">
                <h2>Descripcion:</h2><br/>
                <p>{{productos.descripcion}}</p>
            </div>
            <div class="garantia-view">
                <h1>Garantia:</h1>
                <h2>Compra Protegida</h2>
                <p>Recibe el producto que esperabas o te devolvemos tu dinero</p>
            </div>
        </div>
    </div>   
</template>
<script>
import SliderHome from './sliderHome.vue'
import axios from 'axios'
import Global from '../Global'

export default {
    name:'Producto',
    components: {
    SliderHome,
  },
    methods:{
        getProductos(id){
            axios.get(this.url+'buscarproducto/'+id).then(res=>{
                if(res.data.status=='Exito'){
                this.productos=res.data.message;
                console.log(this.productos);
                }
            })
        },
    },
    mounted(){
        var productoid=this.$route.params.id;
        this.getProductos(productoid);
        console.log(productoid);
    },
    data(){
        return{
            productos:null,
            url:Global.url,
        };
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>