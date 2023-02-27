<template>
  <div class="all">
    <div class="row d-flex justify-content-center">
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="精選飲品">
        <div v-if="aa1" class="b">精選飲品</div>
        <img :src="a1" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="法式甜點">
        <div v-if="aa2" class="b">法式甜點</div>
        <img :src="a2" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="歐陸烘培">
        <div v-if="aa3" class="b">歐陸烘培</div>
        <img :src="a3" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="經典暖食">
        <div v-if="aa4" class="b">經典暖食</div>
        <img :src="a4" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="舒芙蕾">
        <div v-if="aa5" class="b">舒芙蕾</div>
        <img :src="a5" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="禮盒系列">
        <div v-if="aa6" class="b">禮盒系列</div>
        <img :src="a6" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="組合優惠">
        <div v-if="aa7" class="b">組合優惠</div>
        <img :src="a7" alt="" class="imgg" />
      </div>
      <div class="a" @mouseover="handleMouseover" @mouseleave="handleMousleave" id="品牌訂製">
        <div v-if="aa8" class="b">品牌訂製</div>
        <img :src="a8" alt="" class="imgg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import a1 from "../assets/精選飲品.png";
import a2 from "../assets/法式甜點.png";
import a3 from "../assets/歐陸烘培.png";
import a4 from "../assets/經典暖食.png";
import a5 from "../assets/舒服雷.png";
import a6 from "../assets/禮盒系列.png";
import a7 from "../assets/組合優惠.png";
import a8 from "../assets/品牌訂製.png";
const aa1 = ref(false);
const aa2 = ref(false);
const aa3 = ref(false);
const aa4 = ref(false);
const aa5 = ref(false);
const aa6 = ref(false);
const aa7 = ref(false);
const aa8 = ref(false);
const handleMouseover = (event) => {
  switch (event.target.id) {
  case '精選飲品':
        aa1.value=true;
    break;
  case '法式甜點':
        aa2.value=true;
    break;
  case '歐陸烘培':
        aa3.value=true;
    break;
  case '經典暖食':
        aa4.value=true;
    break;
  case '舒芙蕾':
        aa5.value=true;
    break;
  case '禮盒系列':
        aa6.value=true;
    break;
  case '組合優惠':
        aa7.value=true;
    break;
  case '品牌訂製':
        aa8.value=true;
    break;
}
};
const handleMousleave = () => {
    aa1.value=false
    aa2.value=false
    aa3.value=false
    aa4.value=false
    aa5.value=false
    aa6.value=false
    aa7.value=false
    aa8.value=false
};
</script>

<style>
.all {
  background-color: black;
  padding: 30px 0px 0px 0px;
}
.a {
  position: relative;
  box-sizing: border-box;
  border: 1px solid black;
  max-width: 760px;
  max-height: 200px;
  padding: 0;
  overflow: hidden;
  object-fit: cover;
  text-align: center;
  display: block;
  align-items: center;
}
.a::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0px;
  right: 0px;
  transition: all 0.3s linear;
  opacity: 0;
}
.a:hover::after {
  opacity: 1;
}
.b {
    position: absolute;
  content: "精選飲品";
  width: auto;
  height: auto;
  color: white;
  transition: all 0.3s linear;
  z-index: 999;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imgg {
  width: 100%;
  height: 100%;
}
</style>