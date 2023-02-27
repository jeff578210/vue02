<script setup>
import {ref,onMounted,watchEffect} from 'vue'
import img1 from "../assets/2265461.jpg";
import img2 from "../assets/94718333_p0_master1200.jpg";
import img3 from "../assets/unnamed (1).jpg";
import img4 from "../assets/a1.png";
import img5 from "../assets/做蛋糕.gif";
import img6 from "../assets/a2.png";
import img7 from "../assets/泡咖啡.gif";
// 監聽螢幕寬度改變nav樣式
const change = ref(false); 
onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});
const windowWidth = ref(window.innerWidth);
watchEffect(() => {
  if (windowWidth.value < 600) {
    change.value = true;
  } else {
    change.value = false;
    
  }
});
// =================================================
</script>
<template>
<div>
  <div class="row">
    <div :class="[change?'col-12':'col-7']" style="padding: 0">
      <img :src="img4" alt="" class="imgg" />
    </div>
    <div :class="[change?'col-12':'col-5  b']">
      <div class="wordDivLeft">
        <div style="color: #c9c9c9;margin:0 0 1% 0 ;font-size: 0.8em;">發現</div>
        <div style="color: #ccaf00;margin:0 0 5% 0 ;font-size: 1.5em;">必嚐經典</div>
        <div style="font-size: 1em;">
          每日限時限量提供，遵守主廚堅持現點現烤的最高原則，
          只為了讓每一位到店的您，品嚐到如雲朵般的蓬鬆，如戀愛般的幸褔滋味。
        </div>
      </div>
    </div>
  </div>
<div class="row">
    <div v-if="change" :class="[change?'col-12':'col-7']" style="padding: 0">
      <img :src="img4" alt="" class="imgg" />
    </div>
    <div :class="[change?'col-12':'col-5  b']">
      <div class="wordDivRight">
        <div style="color: #c9c9c9;margin:0 0 1% 0 ;font-size: 0.8em;">體驗</div>
        <div style="color: #ccaf00;margin:0 0 5% 0 ;font-size: 1.5em;">精湛手藝</div>
        <div style="font-size: 1em;">
          無論是法式甜點、歐式麵包或任一款商品，皆是我們的主廚悉心打造的藝術，
          每一季不斷地讓您享受味覺體驗。
        </div>
        <button class="button1">更多商品</button>
      </div>
    </div>
    <div v-if="!change" :class="[change?'col-12':'col-7']" style="padding: 0">
      <img :src="img5" alt="" class="imgg" />
    </div>
    
    
  </div>
  <div class="row">
    <div :class="[change?'col-12':'col-7']" style="padding: 0">
      <img :src="img6" alt="" class="imgg" />
    </div>
    <div :class="[change?'col-12':'col-5  b']">
      <div class="wordDivLeft">
        <div style="color: #c9c9c9;margin:0 0 1% 0 ;font-size: 0.8em;">品味</div>
        <div style="color: #ccaf00;margin:0 0 5% 0 ;font-size: 1.5em;">飲食藝術</div>
        <div style="font-size: 1em;">
          卡啡那不僅提供COFFEE GALLERY的空間，也讓在這裡放下腳步的人擁有時間，
          可以細細雕琢與品味生活中的美好事物。
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div v-if="change" :class="[change?'col-12':'col-7']" style="padding: 0">
      <img :src="img7" alt="" class="imgg" />
    </div>
    <div :class="[change?'col-12':'col-5  b']">
      <div class="wordDivRight">
        <div style="color: #c9c9c9;margin:0 0 1% 0 ;font-size: 0.8em;">探究</div>
        <div style="color: #ccaf00;margin:0 0 5% 0 ;font-size: 1.5em;">純萃美好</div>
        <div style="font-size: 1em;">
          我們致力於提供有別於傳統咖啡館的消費體驗，注重咖啡師與顧客之間的互動，
          並提供我們心目中最完美的一杯咖啡，讓您也被咖啡文化的氛圍感動。
        </div>
        <button class="button1">更多商品</button>
      </div>
    </div>
    <div v-if="!change" :class="[change?'col-12':'col-7']" style="padding: 0">
      <img :src="img7" alt="" class="imgg" />
    </div>
    
    
  </div>
</div>
</template>



<style>
.b {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgg {
  width: 100%;
  height: auto;
  min-height: 270px;
  object-fit: cover;
}
.wordDivRight {
  padding: 10% 10% 0px 10%;
  text-align:Right;
}
.wordDivLeft {
  padding: 10% 10%;
  text-align:Left;
}
.button1{
    font-size: 10px;
    border-radius: 10px;
    padding: 9px 20px 10px 20px;
    font-weight: 400;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: white;
    max-width: 100px;
    max-height: 35px;
    align-items: center;
    margin-top: 20px;
}
</style>