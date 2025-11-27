<!--
 * @Name: TheDate.vue
 * @Description:
 * @Date: 2025-11-03 15:05:15
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-03 15:05:15
-->
<script setup lang="ts">
import {download, getMimeType, mimeTypeMap,} from "@vensst/js-toolkit";



console.log('--mimeTypeMap--', mimeTypeMap)
console.log('--getMimeType--', getMimeType(), getMimeType('a.png'), getMimeType('a.abc'))
const blob = new Blob(["binary data"], {type: "application/octet-stream"});

console.log('--download--',
    download(),
    download("Hello World", "hello.txt"),
    download(JSON.stringify({name: "test"}), "data.json"),
    download('blob:https://www.dapengjiaoyu.cn/9d4e9b7d-f7bb-445c-9881-a35a7cf2dd5e', 'a.png'),
    download('https://m.tuniucdn.com/fb2/t1/G5/M00/44/52/Cii-s1soezyIF2UxABn76u-yKl8AAIwBgB34jAAGfwC3020871', '1.png'),
    download(blob, "data.bin"))
;
const downLoadFile = function () {
  console.log("--download--", download("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"))
}

</script>

<template>
  <button @click="downLoadFile">下载</button>
</template>

<style scoped>

</style>
