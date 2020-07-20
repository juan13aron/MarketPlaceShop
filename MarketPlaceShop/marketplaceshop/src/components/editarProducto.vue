<template>
    <div>
        <div class="slider3">
            <h2>Editar Producto</h2>
        </div>
        <form @submit.prevent="save()" class="forms">
            <h1>Editar los Datos</h1>
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
            <div class="form-groups">
            <input type="text" name="descripcion" placeholder="Ingrese la descripcion" required v-model="producto.descripcion"/>
            </div>
            <div class="form-group">
            <input type="file" id="file" ref="file" name="file0" v-on:change="filechange()" />
            </div>
            <input type="submit" value="Editar" class="buttonreg"/>
        </form>
    </div>    
</template>
<script>
import axios from 'axios'
import Global from '../Global'
import Producto from './models/Producto'
import swal from 'sweetalert'
export default {
    name:'registroProducto',
    methods:{
        save(){
           axios.put(this.url+'editarproducto/'+this.producto._id,this.producto).then(res=>{
                console.log(res.data);
                var Productoid=res.data.message._id
                
                //Subida de archivo
                const formdata=new FormData();
                formdata.append('file0',
                this.file,
                this.file.name);
                
                axios.post(this.url+'subir-imagenproducto/'+Productoid,formdata).then(res=>{
                    if(res.data){
                         swal("Eharobuena", "Producto Editado", "success");
                        this.$router.push('/listProducto');
                    }
                    else{
                        //Mostar error;
                        swal(
                            'Error',
                            'El producto no se ha editado correctamente',
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
        },
        getProducto(id){
            axios.get(this.url+'buscarproducto/'+id).then(res=>{
                if(res.data.status=='Exito'){
                    this.producto=res.data.message;
                    console.log(this.producto);
                }
            })
        }
    },
    data(){
        return{
            url:Global.url,
            producto: new Producto('','','','','',''),
        }
    },
    mounted(){
        var productoid=this.$route.params.id;
        this.getProducto(productoid);
        console.log(productoid);
    }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>
