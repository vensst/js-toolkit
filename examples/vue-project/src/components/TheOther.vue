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
  addScript,
  atob,
  base64_decode,
  base64_encode,
  btoa,
  compareVersion,
  copyToClipboard,
  deepClone,
  domToString,
  escapeHTML,
  getRandomColor,
  insertAtCursor,
  queryElement,
  resizeObserver,
  setCursorPosition,
  stringToDom,
  unescapeHTML,
  utf8_decode,
  utf8_encode,
  wait
} from "@vensst/js-toolkit"

onMounted(() => {
  const obj = {
    name: "zs",
    id: 18,
    children: [
      {
        name: "zs",
        id: 18,
      }
    ]
  }
  console.log("--deepClone--", deepClone(obj), obj === deepClone(obj))
  console.log("--getRandomColor--", getRandomColor())
  console.log("--addScript--")
  addScript("https://cdnjs.cloudflare.com/ajax/libs/vue/2.7.16/vue.min.js").then(res => {
    console.log('脚本加载成功')
  }).catch(err => {
    console.error('脚本加载失败', err)
  })
  //
  console.log("--btoa--", btoa('www.baidu.com?a=1&b=@林叶'))
  console.log("--atob--", atob(btoa('www.baidu.com?a=1&b=@林叶')))

  console.log("--base64_encode--", base64_encode('www.baidu.com?a=1&b=@林叶'))
  console.log("--base64_decode--", base64_decode(base64_encode('www.baidu.com?a=1&b=@林叶')))

  console.log("--utf8_encode--", utf8_encode('www.baidu.com?a=1&b=@林叶'))
  console.log("--utf8_decode--", utf8_decode(utf8_encode('www.baidu.com?a=1&b=@林叶')))
  //
  //
  console.log("--loadAudio--")
  console.log("--domToString--", domToString(queryElement('#app1>.s3') as HTMLElement))
  const appEl = queryElement('#app') as HTMLElement
  if (appEl) {
    console.log("--stringToDom--", appEl.appendChild(stringToDom(`<div class="s4">abc</div>`)))
  }
  setTimeout(() => {
    console.log("--setCursorPosition--", setCursorPosition(queryElement('#app .ipt') as HTMLInputElement, '你好'))
  }, 3000)
  setTimeout(() => {
    console.log("--insertAtCursor--", insertAtCursor(queryElement('#app .ipt2') as HTMLInputElement, '你好'))
  }, 3000)

  const str = `<div class='bg' style=\"font-size:20px\">Hello & \"World\"</div>`

  console.log("--escapeHTML--", escapeHTML(str))
  console.log("--unescapeHTML--", unescapeHTML(escapeHTML(str)))

  console.log("--compareVersion--", compareVersion('1.2.3', '1.2.2') > 0 ? '新版本' : '旧版本')

  const btnEl = queryElement('#btn-copy') as HTMLElement
  btnEl.onclick = function () {
    let t = new Date().getTime()
    wait().then(() => {
      copyToClipboard("复制的文本" + t)
    });

  }
  // ------------------
  const divEls = queryElement('.divEl') as NodeList
  console.log(divEls,divEls[0] instanceof Node)
  const stopObserving = resizeObserver(divEls, function (entries) {
    console.log('元素大小变化1', entries);
  })
  const divEl1 = queryElement('.divEl1') as HTMLElement
  const stopObserving2 = resizeObserver(divEl1, function (entries) {
    console.log('元素大小变化2', entries);
  })
  const btnEl1 = queryElement('#btn1') as HTMLElement

  btnEl1.onclick = function () {
    stopObserving(divEls[0] as HTMLElement)
  }
  const btnEl2 = queryElement('#btn2') as HTMLElement
  btnEl2.onclick = function () {
    stopObserving()
    stopObserving2()
  }

})
</script>

<template>
  <div id="app1" class="page">
    这是一段内容 <br>
    <span class="s1 s--style">我是span标签</span> <br>
    <span class="s2 s--style">我是span标签2</span> <br>
    <span class="s3 s--style" style="color: #e4393c;font-size: 18px">我是span标签3</span> <br>

    <input class="ipt" type="text" value="value">
    <input class="ipt2" type="text" value="value">

    <hr>
    <button id="btn-copy">复制</button>
    <hr>
    <div class="divEl divEl1">
      盒子1
    </div>
    <div class="divEl divEl2">
      盒子2
    </div>
    <div class="divEl divEl3" style="width: 120px;height: 80px">
      盒子3
    </div>
    <button id="btn1">结束盒子1监听</button>
    <button id="btn2">全部结束</button>
  </div>
</template>

<style scoped>

</style>
