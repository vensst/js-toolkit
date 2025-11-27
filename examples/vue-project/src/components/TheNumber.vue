<!--
 * @Name: TheDate.vue
 * @Description:
 * @Date: 2025-11-03 15:05:15
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-03 15:05:15
-->
<script setup lang="ts">
import {onMounted} from 'vue'
import {
  random,
  inRange,
  toChinese,
  toCny,
  thousandSeparator,
  scientificFormatter,
} from "@vensst/js-toolkit";


console.log("--random--", random(0, 2), random(0, 2,false),)
console.log("--inRange--", inRange(3, 2, 4))
console.log("--toChinese--", toChinese(3141592654),toChinese(3141592654.54),toChinese(314.54321),toChinese(0.54321))
console.log("--toCny--", toCny(3141592654),toCny('3141592654.54321'),toCny(3141592654.54321),toCny(0.54321))
console.log("--thousandSeparator--", thousandSeparator(3141592654), thousandSeparator(31415926.54321),thousandSeparator(0.54321))
console.log("--scientificFormatter--", scientificFormatter(2048 ),scientificFormatter(3141592654))

onMounted(()=>{
  const buttonEl = document.getElementById("button")
  buttonEl.onclick = function (){
    console.log('--有小数--',random(),random(0, 2))
    console.log('--无小数--',random(1, 1,false),random(0, 2,false))
    console.log('--错误--',random('z', '2',false))
  }
})
</script>

<template>
  <div>
    <button id="button">获取随机数</button>
  </div>
</template>

<style scoped>

</style>
