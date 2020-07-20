<template>
<div>
    <HeaderComponent>
    </HeaderComponent>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
</div>
</template>

<script>
import HeaderComponent from './components/header.vue'
import FooterComponent from './components/footer.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>
