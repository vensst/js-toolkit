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
  calcScaleRatio,
  loadImages,
  compressImage
} from "@vensst/js-toolkit";

console.log('--calcScaleRatio--', calcScaleRatio(500, 300, 600, 400))
const imgUrl = '//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
const arr = [imgUrl, imgUrl]
loadImages(arr).then((res) => {
  console.log(res)
  console.log("--imgLoadAll--", "加载完成")
})

onMounted(()=>{
  compressImage(imgUrl).then(res => {
    document.getElementById('img').src = res
    console.log('--compressImage--', res)
  })
})
</script>

<template>
<div>
  <img id="img" alt="" style="width: 200px;">
</div>
</template>

<style scoped>

</style>
