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
  desens,
  trim,
  trimStart,
  trimEnd,
  trimAll,
  toUpperCase,
  toUpperCaseFirst,
  toLowerCase,
  toLowerCaseFirst,

  randomCode,
  countSubstring,
  padStart,
  padEnd,

  hasUnit,
  removeUnit,

  camelToKebab,
  kebabToCamel,
} from "@vensst/js-toolkit";


{
  const str = "01234567890"
  console.log("--desens--", desens(), desens(str, {
    char: "*",
    startIndex: 5,
    endIndex: 7,
  }), desens(str, {
    char: "x",
    startIndex: 3,
    endIndex: 7,
  }))
}
{
  const str = " admin 1234 "
  const str2 = "-admin-1234-"
  console.log("--trim     --", `[${trim(str)}]`, `[${trim(str2, '-')}]`, `[${trim(new Date())}]`)
  console.log("--trimStart--", `[${trimStart(str)}]`, `[${trimStart(str2, '-')}]`, `[${trimStart(new Date())}]`)
  console.log("--trimEnd  --", `[${trimEnd(str)}]`, `[${trimEnd(str2, '-')}]`, `[${trimEnd(new Date())}]`)
  console.log("--trimAll  --", `[${trimAll(str)}]`, `[${trimAll(str2, '-')}]`, `[${trimAll(new Date())}]`)
}
{
  const str = "footBall"
  const str2 = "my name is li-lei and i am from china,i love footBall."
  console.log("--toUpperCase     --", toUpperCase(str), toUpperCase(str2))
  console.log("--toUpperCaseFirst--", toUpperCaseFirst(str), toUpperCaseFirst(str2))

}
{
  const str = "FootBall"
  const str2 = "MY NAME IS LI-LEI AND I AM FROM CHINA,I LOVE FootBall."

  console.log("--toLowerCase     --", toLowerCase(str), toLowerCase(str2))
  console.log("--toLowerCaseFirst--", toLowerCaseFirst(str), toLowerCaseFirst(str2))
}

const str = " My name is Li Lei and I am from China "

console.log("--randomCode--", randomCode(), randomCode(6), randomCode(6, '', '123456'))
console.log("--countSubstring--", countSubstring(str, 'i'))
console.log("--padStart--", padStart(9527, 11, '*'), `[${padStart('abc', 6,)}]`, padStart('abc', 6, '01'))
console.log("--padEnd--", padEnd(150, 11, '*'), `[${padEnd('abc', 6,)}]`, padEnd('abc', 6, '01'))

console.log("--hasUnit--", hasUnit('100px'), hasUnit('200'), hasUnit('300abc', ['abc']), hasUnit('400abc'), hasUnit('500m²'))
console.log("--removeUnit--", removeUnit('100px'), removeUnit('200'), removeUnit('300abc', ['abc']), removeUnit('400abc'), removeUnit('500m²'))

console.log("--camelToKebab--", camelToKebab(), camelToKebab('my Name'), camelToKebab('myName'), camelToKebab('__my__Name__'), camelToKebab('__my__Name__', '@'))
console.log("--kebabToCamel--", kebabToCamel(), kebabToCamel('my Name'), kebabToCamel('my-name'), kebabToCamel('__my_Name__'))

onMounted(()=>{

})
</script>

<template>
  <div>
    <img id="img" alt="" style="width: 200px;">
  </div>
</template>

<style scoped>

</style>
