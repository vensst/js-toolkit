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
  chainGet
} from "@vensst/js-toolkit";

const obj = {
  a: {
    b: [
      {
        c: 1
      }
    ],
    c: 2
  }
}
const arr = [1, 2, 'a', {a: 3}, [{a: 4}]]
console.log('--chainGet--', chainGet(obj, "a")) // {b: Array(1), c: 2}
console.log('--chainGet--', chainGet(obj, "a.b[0].c")) // 1
console.log('--chainGet--', chainGet(obj, "a.b[0].d")) // undefined
console.log('--chainGet--', chainGet(obj, "a.d.d", 0)) // 0
console.log('--chainGet--', chainGet(obj, "a['c']")) // 2
console.log('--chainGet--', chainGet(obj, "a['d']", 0)) // 0

console.log('--chainGet--', chainGet(arr[3], "a")) // 3
console.log('--chainGet--', chainGet(arr, '[3].a')) // 3
console.log('--chainGet--', chainGet(arr, '[4][0].a')) // 4
console.log('--chainGet--', chainGet(arr, '[4][0].b')) // undefined
console.log('--chainGet--', chainGet(arr, '[4][0].b', '--')) // --
console.log('--chainGet--', chainGet(arr, '[5].b', '**')) // **

var object = {'a': [{'b': {'c': 3}}]};
console.log(chainGet(object, 'a[0].b.c'))
console.log(chainGet(object, 'a.b.c', 'default'));

onMounted(()=>{})
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
