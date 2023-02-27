<template>
  <div>
    <div class="nav d-flex flex-column justify-content-center">
      <button @click="hamburgerdiv" class="hamburger" :style="{'display':(changeHurberger?'block':'none')}"><b>{{hamburgerdiv1?'三':'X'}}</b></button>
      <div id="div1" :class="[changeHurberger?hamburgerdiv1?'d-flex flex-column HurburgerA':'d-flex flex-column show':'nav d-flex justify-content-center']"
       >
          <a :class="[btn1?'aa aa2':'aa ']" id="品牌" @click="aaclick" href="#">品牌故事</a>
          <a :class="[btn2?'aa aa2':'aa ']" id="門市" @click="aaclick" href="#">門市資訊</a>
          <a :class="[btn3?'aa aa2':'aa ']" id="最新" @click="aaclick" href="#">最新消息</a>
          <a :class="[btn4?'aa aa2':'aa ']" id="商品" @click="aaclick" href="#">商品總覽</a>
          <a :class="[btn5?'aa aa2':'aa ']" id="咖啡豆" @click="aaclick" href="#">咖啡豆介紹</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,onMounted,watchEffect} from 'vue'
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
// 點擊展開漢堡
const hamburgerdiv1 = ref(true);
const hamburgerdiv=()=>{
  hamburgerdiv1.value=!hamburgerdiv1.value;
}
// =================================================
// 點擊導覽列
const btn1 = ref(false);
const btn2 = ref(false);
const btn3 = ref(false);
const btn4 = ref(false);
const btn5 = ref(false);
const aaclick =(event)=>{
  switch (event.target.id) {
  case '品牌':
        btn1.value=true;
        btn2.value=false;
        btn3.value=false;
        btn4.value=false;
        btn5.value=false;
    break;
  case '門市':
        btn1.value=false;
        btn2.value=true;
        btn3.value=false;
        btn4.value=false;
        btn5.value=false;
    break;
  case '最新':
        btn1.value=false;
        btn2.value=false;
        btn3.value=true;
        btn4.value=false;
        btn5.value=false;
    break;
  case '商品':
        btn1.value=false;
        btn2.value=false;
        btn3.value=false;
        btn4.value=true;
        btn5.value=false;
    break;
  case '咖啡豆':
        btn1.value=false;
        btn2.value=false;
        btn3.value=false;
        btn4.value=false;
        btn5.value=true;
    break;
}
}
// =================================================
</script>

<style>
.hamburger{
  background-color: black;
  color: white;
}
/* 設定移動花費兩秒 */
#div1{
  /* height: 0;
  overflow: hidden; */
  transition: height 1s;
}
#div1.HurburgerA{
  height: 0px;
  overflow: hidden;
}
#div1.show{
  height:249px;
  overflow: hidden;
}
.aaa {
  display: flex;
  justify-content: center;
}
.nav{
  width: 100vw;
  background-color: black;
  text-align: center;
}
.navbar {
  border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  background-color: black;
  padding: 0px;
}
.col {
  text-align: center;
}
.aa {
  color: white;
  position: relative;
  height: 50px;
  padding: 10px;
  text-decoration:none;
}
.aa:hover{
  color: white;
}
.aa::before {
  position: absolute;
  content: "";
  width: 0%;
  height: 2px;
  background-color: red;
  /* background: linear-gradient(to right,rgb(255, 255, 255) 5%,rgb(0, 0, 0) 100%); */
  /* 漸層顏色 */
  bottom: 0px;
  left: 0px;
  transition: all 0.3s linear;
}
.aa:hover::before {
  width: 100%;
}
.aa::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgb(255, 0, 0,0.5);
  /* background: linear-gradient(to right,rgb(255, 255, 255) 5%,rgb(0, 0, 0) 100%); */
  /* 漸層顏色 */
  bottom: 0px;
  right: 0px;
  transition: all 0.3s linear;
  opacity: 0;
}
.aa:hover::after {
  opacity: 1;
}
.a1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.aa2::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background-color: red;
  bottom: 0px;
  left: 0px;
}
.aa2::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: rgb(255, 0, 0,0.5);
  bottom: 0px;
  right: 0px;
  opacity: 1;
}
</style>