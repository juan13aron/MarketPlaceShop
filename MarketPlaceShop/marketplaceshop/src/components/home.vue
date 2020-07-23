<template>
  <div>
      <sliderComponent> </sliderComponent>
      <div class="categorias">
        <h1>Categorias</h1>
        <div class="container-categoria">
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 1"><br/>
              <router-link to="/#"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 2"><br/>
              <router-link to="/#"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 3"><br/>
              <router-link to="/#"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 4"><br/>
              <router-link to="/#"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 5"><br/>
              <router-link to="/#"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 6"><br/>
              <router-link to="/#"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <img src="../assets/logo.png" alt="categoria 7"><br/>
              <router-link to="/buscarProducto/Iphone"><a class="categoria-link">Ropa</a><br/></router-link>
              <div class="inline-categoria">
                <span>0</span><p>Articulos de venta</p>
              </div>
            </div>
          </div>
          <div class="item-categoria">
            <div class="box-categoria">
              <router-link to="/#"><a class="categoria-link">Ver mas...</a><br/></router-link>
            </div>
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
  mehtods:{
    buscar(buscar1){
      this.$router.push('/buscarProducto'+buscar1)
    }
  },
  data(){
    return{
      url:null,
      buscar:null,
    }
  }
}
</script>
<style>
@import '../assets/css/styles.css';
</style>