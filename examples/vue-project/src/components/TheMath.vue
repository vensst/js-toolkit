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
import {add, average, ceil, decimal, divide, floor, multiply, round, subtract, sum,} from "@vensst/js-toolkit";

console.log('--add--', add('0.2', 0.1), typeof add(0.2, 0.1))
console.log('--subtract--', subtract('0.4', 0.1), typeof subtract(0.4, 0.1))
console.log('--multiply--', multiply(0.4, '0.1'), typeof multiply(0.4, 0.1))
console.log('--divide--', divide(0.4, '0.1'), typeof divide(0.4, 0.1))

console.log('--sum--', sum([8, 2, '3']), typeof sum([8, 2, 3]))
console.log('--average--', average([8, '2', 3]), typeof average([8, 2, 3]))

console.log('--ceil--', ceil(3.1415926, 3), typeof ceil(3.1415926, 3))
console.log('--floor--', floor(3.1415926, 3), typeof floor(3.1415926, 3))
console.log('--decimal--', decimal(3.1415926, 3), typeof decimal(3.1415926, 3))
console.log('--round--', round(3.1415926, 3), round(3.1415926, 2), typeof round(3.1415926))


onMounted(() => {

})
</script>

<template>
  <div>
    <img id="img" alt="" style="width: 200px;">
  </div>
</template>

<style scoped>

</style>
