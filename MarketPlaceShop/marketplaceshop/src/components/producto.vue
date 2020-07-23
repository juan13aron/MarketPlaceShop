<template>
    <div>
        <div class="slider4">
            <h2>{{productos.nombre}}</h2>
        </div>
        <div class="view-element">
            
        </div>
    </div>   
</template>
<script>
import axios from 'axios'
import Global from '../Global'
export default {
    name:'Producto',
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