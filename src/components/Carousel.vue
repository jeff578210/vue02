<template>
  <div>
    <swiper
    :loop="true"
    :speed="300"
    :pagination="{
      clickable:true,
    }"
    :modules="modules"

    >
    <swiper-slide v-for="val,index in data1" :key="index">
      <img :src="val" alt="" class="imgWidth"> 
    </swiper-slide> 
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import img1 from "../assets/咖啡廳1.jpg";
import img2 from "../assets/咖啡廳2.jpg";
import img3 from "../assets/咖啡廳3.jpg";
import { Swiper,SwiperSlide } from "swiper/vue";
import { Autoplay,Pagination } from "swiper";
import 'swiper/css'
import 'swiper/css/pagination'
const modules = [Pagination];
const data1 = ref({ img1, img2, img3 });
</script> 
<style >
.imgWidth {
  display: block;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
}
.swiper-pagination-bullet-active {
  background-color: #ffffff;
}
</style>