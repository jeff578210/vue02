<script setup>
  import Header from "./components/header.vue";
  import Index from './components/index.vue';
  import Carousel from './components/Carousel.vue';

  
</script>

<template>
  <div>
    <Header/>
    <Carousel/>
    <Index/>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
