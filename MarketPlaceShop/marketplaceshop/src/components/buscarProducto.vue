<template>
    <div class="page-busqueda">
         <div class="slider7">
            <h2>Busqueda</h2>
        </div>
         <SliderHome></SliderHome>
         <div class="productos-section">
            <div class="container-productos">
                <div class="item-productos" v-for="producto in productos" :key="producto.id">
                    <div class="box-productos">
                    <img  :src="'http://localhost:5000/obtenerimagenproducto/'+producto.image"/><br/>
                    <router-link :to="'/producto/'+producto._id"><a class="categoria-link">{{producto.nombre}}</a><br/></router-link>
                        <div class="inline-productos">
                            <span>{{producto.unidades}}</span><p>Unidades</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
import SliderHome from './sliderHome.vue'
import axios from 'axios';
import Global from '../Global'
export default {
    name:"BuscarProducto",
     components: {
    SliderHome,
  },
    methods: {
    getProductos(busqueda1) {
      console.log(this.url);
      axios.get(this.url + "buscarproductos/"+busqueda1).then(res => {
        this.productos = res.data.productos;
        console.log(this.productos);
      });
    },
    
  },
  
  data() {
    return {
      productos: null,
      url: Global.url,
    };
  },
  mounted() {
    var busqueda=this.$route.params.buscar;
    this.getProductos(busqueda);
  },
};
</script>
<style>
@import "../assets/css/styles.css";
</style>
