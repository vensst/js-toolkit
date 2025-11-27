<!--
 * @Name: TheDate.vue
 * @Description:
 * @Date: 2025-11-03 15:05:15
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-03 15:05:15
-->
<script setup lang="ts">

import { onMounted } from "vue";
import {
  addClass,
  addStyle,
  getSiblings,
  getStyle,
  hasClass,
  insertAfter,
  insertBefore,
  queryElement,
  removeClass,
  replaceClass
} from "@vensst/js-toolkit";
type QueryElementReturnType = Element | NodeList

const initLog = function () {
  console.log('--queryElement--', queryElement("#main"), queryElement("#main span"), queryElement(".page>.s1"), queryElement(".page span"))
  console.log('--hasClass--', hasClass(queryElement("#main") as QueryElementReturnType, "page"), hasClass(queryElement(".page span") as QueryElementReturnType, "page"), hasClass(queryElement(".page span") as QueryElementReturnType, "s1"))
  console.log('--addClass--', addClass(queryElement("#main") as QueryElementReturnType, 'page--style'), addClass(queryElement(".page span") as QueryElementReturnType, 'span--style'))
  console.log('--removeClass--',removeClass(queryElement("#main") as QueryElementReturnType, 'page--style'), removeClass(queryElement(".page span") as QueryElementReturnType, 'span--style'))
  console.log('--replaceClass--',  replaceClass(queryElement("#main") as QueryElementReturnType, 'page', 'page1'), replaceClass(queryElement(".page1 span") as QueryElementReturnType, 's--style', 's--style1'))
  console.log('--getSiblings--', getSiblings(queryElement("#main") as Element), getSiblings(queryElement(".page1 span") as Element))
  console.log('--getStyle--',
      getStyle(queryElement("#main") as Element),
      getStyle(queryElement("#main") as Element,'font-size'),
      getStyle(queryElement("#main .s3") as Element),
      getStyle(queryElement("#main .s3") as Element, 'color'),
      getStyle(queryElement("#main .s3") as Element, 'font-size')
  )
  //
  console.log('--addStyle--',
      addStyle(queryElement("#main") as QueryElementReturnType, {'font-size': '18px', color: '#e4393c'}),
      addStyle(queryElement("#main span") as QueryElementReturnType,{"backgroundColor": "#000000", "color": "#fff"}),
      addStyle(queryElement("#main .s4") as QueryElementReturnType, {"backgroundColor": "#1d1fe8", "color": "#fff"})
  )
  //
  console.log('--insertAfter--', insertAfter(queryElement("#main .s1") as Element, "<div>s1之后插入div</div>"))
  console.log('--insertBefore--', insertBefore(queryElement("#main .s1") as Element, "<div>s1之前插入div</div>"))
  console.log('--insertBefore--',insertAfter(queryElement("title") as Element, `<script src="./vue.js"><\/script>`))
}


onMounted(() => {
  initLog()
})

</script>

<template>
  <div id="main" class="page" style="font-size: 16px;">
    这是一段内容 <br>
    <span id="sp" class="s1 s--style">我是span标签1</span> <br>
    <span id="sp" class="s2 s--style">我是span标签2</span> <br>
    <span class="s3 s--style" style="color: #e4393c;font-size: 18px">我是span标签3</span> <br>
    <span class="s4">我是span标签4</span><br>
    <div>我是div标签</div>
  </div>

</template>

<style scoped></style>
