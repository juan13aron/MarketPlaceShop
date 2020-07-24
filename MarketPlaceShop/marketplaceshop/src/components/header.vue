<template>
    <div>
        <header>
        <div class="header-area">
            <div class="logo">
                <router-link to="/home" >
                <img href="#" src="../assets/logo.png"/>
                </router-link>
            </div>
            <nav class="navegacion">
                <ul class="menu">
                    <li><router-link to="/home" active-class="active">Inicio</router-link></li>
                    <li class="sm"><a>Productos</a>
                        <ul class="submenu">
                            <li><router-link to="/registroProducto" active-class="active">Registrar</router-link></li>
                            <li><router-link to="/listProducto" active-class="active">Lista</router-link></li>
                        </ul>
                    </li>
                    <li><router-link to="/favoritos/si" active-class="active">Favoritos</router-link></li>
                    <li><a href="#">Cerrar Sesion</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </div>
</template>

<script>
export default {
    name:'headerComponent'
    
}


</script>
<style>
@import '../assets/css/styles.css';
</style>