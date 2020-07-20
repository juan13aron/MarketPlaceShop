import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Favoritos from './components/favoritos.vue'
import InsertarProducto from './components/registroProducto.vue'
import ListaProducto from './components/listProducto.vue'
import EditarProducto from './components/editarProducto.vue'
import ErrorComponent from './components/ErrorComponent.vue'

Vue.config.productionTip = false
Vue.use(Router)
const routes=[
  {path:'/home',component:Home},
  {path:'/favoritos',component:Favoritos},
  {path:'/registroProducto',component:InsertarProducto},
  {path:'/editarproducto/:id',component:EditarProducto},
  {path:'/listProducto',component:ListaProducto},
  {path:'/',component:Home},
  {path:'*',component:ErrorComponent},
];
const router =new Router({
  routes,
  mode:'history',
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
