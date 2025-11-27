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
  clearLocalStorage,
  clearSessionStorage,
  getCookie,
  getLocalStorage,
  getSessionStorage,
  removeCookie,
  removeLocalStorage,
  removeSessionStorage,
  setCookie,
  setLocalStorage,
  setSessionStorage,
} from "@vensst/js-toolkit";

const userInfo = {id: 1, age: 18, rules: [{name: 'r1'}, {name: 'r2'}]}
setLocalStorage("name", "tom")
setLocalStorage("userInfo", userInfo)
console.log('--getLocalStorage--', getLocalStorage(), getLocalStorage("name"), getLocalStorage('userInfo'), getLocalStorage("nameAbc"))
removeLocalStorage("name")
clearLocalStorage()

setSessionStorage("name", "tom")
setSessionStorage("userInfo", userInfo)
console.log('--getSessionStorage--', getSessionStorage(), getSessionStorage("name"), getSessionStorage('userInfo'), getSessionStorage("nameAbc"))
removeSessionStorage("name")
clearSessionStorage()
//
setCookie("name", "tom")
setCookie("userInfo", userInfo)
console.log('--getCookie--', getCookie(), getCookie("name"), getCookie('userInfo'), getCookie("nameAbc"))
removeCookie("name")
removeCookie("userInfo")

setCookie("name", [1, 2, 3, null, '', 'abc', function () {
}, new Date()], {
  expires: 70,
  path: '/',
  domain: 'localhost',
})
setCookie("name1", null)
console.log('--getCookie--', getCookie("name"), getCookie("name1"))

setTimeout(() => {
  removeCookie("name")
}, 3000)

onMounted(() => {

})
</script>

<template>
  <div>
  </div>
</template>

<style scoped>

</style>
