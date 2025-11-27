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
import {debounce, queryElement, throttle} from '@vensst/js-toolkit';

let a = 0
const f_single = debounce(() => {
  a += 1;
  console.log('--debounce--', a);
}, 3000, true);

const f_scroll = throttle(() => {
  console.log('--throttle--');
}, 5000)


onMounted(() => {
  let buttonEl = queryElement('#button') as HTMLElement;
  let buttonEl2 = queryElement('#button2') as HTMLElement;
  let bodyEl = queryElement("body") as HTMLElement
  if (buttonEl) {
    buttonEl.onclick = f_single
  }
  if (buttonEl2) {
    buttonEl2.onclick = function () {
      f_single.cancel()
      f_scroll.cancel()
    }
  }

  if (bodyEl) {
    bodyEl.onscroll = f_scroll
  }


})
</script>

<template>
  <button id="button" type="button" onclick="add()">单击</button>
  <button id="button2" type="button" onclick="cancel()">取消监听</button>
  <div class="page--style">
    我是一个div
  </div>
</template>

<style scoped>
.page--style {
  width: 200px;
  height: 2000px;
  background: bisque;
}
</style>
