<template>
  <div>
    <swiper
    :loop="true"
    :pagination="{
      clickable:true,
    }"
    :navigation="!changeHurberger"
    :modules="modules"
    >
    <swiper-slide v-for="val,index in data1" :key="index" >
      <img :src="val" alt="" :class="[changeHurberger?'imgWidth1':'imgWidth']"> 
    </swiper-slide> 
    </swiper>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, onUnmounted,watchEffect } from "vue";
import img1 from "../assets/咖啡廳1.jpg";
import img2 from "../assets/咖啡廳2.jpg";
import img3 from "../assets/咖啡廳3.jpg";
import { Swiper,SwiperSlide } from "swiper/vue";
import { Autoplay,Pagination,Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [Pagination,Navigation];
const data1 = ref({ img1, img2, img3 });
// 監聽螢幕寬度改變nav樣式
const changeHurberger = ref(false); 
onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});
const windowWidth = ref(window.innerWidth);
watchEffect(() => {
  if (windowWidth.value < 600) {
    changeHurberger.value = true;
  } else {
    changeHurberger.value = false;
    
  }
});
// =================================================
</script> 
<style >
.imgWidth {
  display: block;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
}
.imgWidth1 {
  display: block;
  width: 100vw;
  height: 50vh;
  object-fit: cover;
}
.swiper-pagination-bullet-active {
  background-color: #ffffff;
}
.swiper-button-prev {
    color: rgb(255, 255, 255); 
    --swiper-navigation-size: 20px
}

.swiper-button-next {
    color: #ffffff; 
    --swiper-navigation-size: 20px
}
</style>