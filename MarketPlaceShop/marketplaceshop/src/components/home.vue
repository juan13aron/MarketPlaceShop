<template>
  <div class="page-home">
      <SliderComponent> </SliderComponent>
      <form @submit.prevent="buscar">
        <div  class="buscador">
          <label for="buscar">Buscador</label><br/>
          <input type="text" placeholder="consultar" v-model="buscar1" required/><br/>
          <button type="submit" value="Buscar" >Enviar</button>
        </div>
      </form>
      <div class="categorias">
        <h1>Categorias</h1>
        <div class="container-categoria">
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/videojuegos.png" alt="categoria 1"><br/>
              <router-link to="/buscarProducto/videojuegos"><a class="categoria-link">VideoJuegos</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/moda.png" alt="categoria 2"><br/>
              <router-link to="/buscarProducto/moda"><a class="categoria-link">Moda</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/tecnologia.png" alt="categoria 3"><br/>
              <router-link to="/buscarProducto/tecnologia"><a class="categoria-link">Tecnologia</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/deporte.png" alt="categoria 4"><br/>
              <router-link to="/buscarProducto/deporte"><a class="categoria-link">Deporte</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/juguetes.png" alt="categoria 5"><br/>
              <router-link to="/buscarProducto/juguetes"><a class="categoria-link">Juguetes</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/electrodomesticos.png" alt="categoria 6"><br/>
              <router-link to="/buscarProducto/electrodomesticos"><a class="categoria-link">Electrodomesticos</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/img/categorias/accesorios.png" alt="categoria 7"><br/>
              <router-link to="/buscarProducto/accesorios"><a class="categoria-link">Accesorios</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <router-link to="/categorias"><a class="categoria-link">Ver mas...</a><br/></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-producto">
        <div class="container-contact-productos">
          <div class="descripcion-contact">
            <h1>Registra Tus Productos</h1><br/>
            <p>Aprovecha la oprotunidad, de registrar tus productos y venderlos a buen precio
              , ademas podras colocar los datos de cuantas unidades vas a vender, esperemos que
              aprovechas al maximo nuestro servicio en esta plataforma.
            </p>
           <router-link to="/registroProducto"> <button class="buttoncontact">Registrar</button></router-link>
          </div>
          <div class="image-contact">
            <img src="../assets/img/Wallpappers/Fondo2.png" alt="contact">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SliderComponent from '../components/Slider.vue'
export default {
  name:"home",
  components: {
  SliderComponent,
  },
  methods:{
    buscar(){
      console.log(this.buscar1)
      this.$router.push('/buscarProducto/'+this.buscar1)
    }
  },
  data(){
    return{
      url:null,
      buscar1:null,
      
    }
  }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>