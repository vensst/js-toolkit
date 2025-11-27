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
  addClass,
  getSiblings,
  initScrollView,
  queryElement,
  removeClass,
  scrollIntoView,
  scrollToTop,
} from "@vensst/js-toolkit";


onMounted(() => {

  // 点击目录滚动到对应位置
  const els = queryElement('.dir > div') as NodeListOf<HTMLElement>
  els.forEach(item => {
    item.onclick = function (e) {
      const id = item.getAttribute('data-id')
      scrollIntoView(`#${id}`)
    }
  })

  const btn = queryElement('#back') as HTMLElement
  btn.onclick = function () {
    scrollToTop()
    // scrollToTop(window,{behavior: 'instant'})
    // console.log('--getScrollPosition--', getScrollPosition(),)
    // body为滚动元素
    // scrollToTop('body')
    // console.log('--getScrollPosition--', getScrollPosition('body'),)
  }

  const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',]
  const scrollEl = window
  const scrollView = initScrollView({
    dataList: arr1,
    // attrName: 'name',
    elAttrName: "id",
    offsetTop: 100,
    callback: function (e) {
      const el = queryElement(`[data-id=${e.value}]`) as HTMLElement
      addClass(el, 'active')
      const els = getSiblings(el) || []
      if (els.length > 0) {
        els.forEach(item => {
          removeClass(item, 'active')
        })
      }

    },
  })
  const onScroll = scrollView.handlerScroll.bind(scrollView)
  // onScroll({target:scrollEl})
  scrollEl.addEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="dir">
    <div data-id="a">a</div>
    <div data-id="b">b</div>
    <div data-id="c">c</div>
    <div data-id="d">d</div>
    <div data-id="e">e</div>
    <div data-id="f">f</div>
    <div data-id="g">g</div>
    <div data-id="h">h</div>
  </div>
  <div id="back">
    TOP
  </div>
  <div class="content">
    <div id="a">a</div>
    <div id="b">b</div>
    <div id="c">c</div>
    <div id="d">d</div>
    <div id="e">e</div>
    <div id="f">f</div>
    <div id="g">g</div>
    <div id="h">h</div>
  </div>
</template>

<style scoped>
#back {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  position: fixed;
  bottom: 10%;
  right: 20px;
  background: #000;
  color: #fff;
  cursor: pointer;
}

.dir {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 40px;
  text-align: center;
}

.dir > div {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background: #333;
  color: #fff;
}

.dir > div.active {
  background: #fac105;
}

.content div {
  height: 400px;
  border: 1px solid #181818;
  margin-bottom: 20px;
}
</style>
