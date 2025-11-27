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
  getUrlParams,
  toUrlParams,
  removeUrlParam,
} from "@vensst/js-toolkit";


onMounted(()=>{
  console.log('--getUrlParams--', getUrlParams(),getUrlParams(window.location.href,'_ijt'),getUrlParams('http://www.baidu.com?a=1&b=2'),getUrlParams('http://www.baidu.com?a=1&b=2','name'))
  console.log('--toUrlParams--', toUrlParams({a: 1, b: 2}), toUrlParams())
  console.log('--removeUrlParam--', removeUrlParam('http://www.baidu.com?a=1&b=2', 'b'),removeUrlParam('http://www.baidu.com?a=1&b=2', 'c'))
})
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
