<template>
    <div>
        <div class="slider5">
            <h2>Registrar Producto</h2>
        </div>
        <SliderHome></SliderHome>
        <div class="page-forms">
            <form @submit.prevent="save()" class="forms">
                <h1>Ingrese los Datos</h1>
                <div class="form-group">
                <input type="text" name="nombre" placeholder="Ingrese su Nombre" required v-model="producto.nombre"/>
                </div>
                <div class="form-group">
                <input type="text" name="categoria" placeholder="Selecione la categoria" required v-model="producto.categoria"/>
                </div>
                <div class="form-group">
                <input type="number" name="precio" placeholder="Ingrese el precio" required v-model="producto.precio"/>
                </div>
                <div class="form-group">
                <input type="number" name="unidades" placeholder="Ingrese las unidades" required v-model="producto.unidades"/>
                </div>
                <div class="form-group">
                <textarea  name="descripcion" placeholder="Ingrese la descripcion" required v-model="producto.descripcion"/>
                </div>
                <div class="form-group">
                <input type="file" id="file" ref="file" name="file0" v-on:change="filechange()" />
                </div>
                <input type="submit" value="Registrar" class="buttonreg"/>
            </form>
        </div>
    </div>    
</template>
<script>
import SliderHome from './sliderHome.vue'
import axios from 'axios'
import Global from '../Global'
import Producto from './models/Producto'
import swal from 'sweetalert'
export default {
    name:'registroProducto',
     components: {
    SliderHome,
  },
    methods:{
        save(){
           axios.post(this.url+'guardar',this.producto).then(res=>{
                console.log(res.data);
                var Productoid=res.data.message._id
                
                //Subida de archivo
                const formdata=new FormData();
                formdata.append('file0',
                this.file,
                this.file.name);
                
                axios.post(this.url+'subir-imagenproducto/'+Productoid,formdata).then(res=>{
                    if(res.data){
                         swal("Eharobuena", "Producto Registrado", "success");
                        this.$router.push('/listProducto');
                    }
                    else{
                        //Mostar error;
                        swal(
                            'Error',
                            'El producto no se ha creado correctamente',
                            'error'
                        );
                    }
                }).catch(err=>{
                    console.log(err);
                })
            }).catch(err=>{
                console.log(err);
            })
        },
        filechange(){
         this.file=this.$refs.file.files[0];
         console.log(this.file); 
        }
    },
    data(){
        return{
            url:Global.url,
            producto: new Producto('','','','','',''),
        }
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>
