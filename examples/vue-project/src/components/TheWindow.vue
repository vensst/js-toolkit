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
import {enterFullscreen, exitFullscreen, initDataView, isFullScreen, resizeFontSize} from "@vensst/js-toolkit";


onMounted(() => {
  console.log('--resizeFontSize--', resizeFontSize(16, 0))

  const myDataView = initDataView(document.getElementById('app-main') as HTMLElement, {
    width: 1920, // 设计稿宽度
    height: 1080, // 设计稿高度
    // mode: "scaleToFill",
    mode: "aspectFit",
  })
  window.onresize = function () {
    console.log('--resizeFontSize--', resizeFontSize())
    myDataView.resize()
  }
  console.log(isFullScreen())
  const btnEl1 = document.getElementById('btn1') as HTMLElement
  btnEl1.onclick = function () {
    enterFullscreen(document.getElementById('body') as Element).then(() => {
      console.log('进入全屏-成功',)
    }).catch(() => {
      console.log('进入全屏-失败')
    })
  }
  const btnEl2 = document.getElementById('btn2') as HTMLElement
  btnEl2.onclick = function () {
    exitFullscreen().then(() => {
      console.log('退出全屏-成功')
    }).catch(() => {
      console.log('退出全屏-失败')
    })
  }
})
</script>

<template>
  <div id="app-main">
    <div class="top">
      <div>
        头部
      </div>

      <div>
        <button id="btn1">进入全屏</button>
        <button id="btn2">退出全屏</button>
      </div>
    </div>
    <div class="left">
      左侧
    </div>
    <div class="right">
      右侧

      <div id="wz" class="wz" style="width: 200px;height: 300px;overflow:hidden;position: absolute;bottom: 0">
        徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”，还记得初相识时你那拘谨的样子，话不是很多只是坐在那里听我不停地说着各种不着边际的话。可能因为紧张我也不知道自己想要表达什么？只知道乱七八糟的在说，而你只是静静地听着，偶尔插一两句。想想自己也不知道一个慢热甚至在不熟的人面前不苟言笑的我那天怎么会那么多话？后来才知道那就是你给的莫名的熟悉感和包容吧！
      </div>
    </div>
  </div>
</template>

<style scoped>
#app-main {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.top {
  height: 50px;
  width: 100%;
  background-color: #f00;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.left {
  background-color: #1e6acb;
  position: absolute;
  left: 0;
  top: 50px;
  width: 200px;
  height: calc(100% - 50px);
}

.right {
  background-color: #f0bd14;
  position: absolute;
  left: 200px;
  top: 50px;
  width: calc(100% - 200px);
  height: calc(100% - 50px);
}
</style>
