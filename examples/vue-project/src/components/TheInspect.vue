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
  isType,
  isString,
  isNumber,
  isNumeric,
  isBoolean,
  isFunction,
  isNull,
  isUndefined,
  isObject,
  isArray,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isPromise,
  isSet,
  isFalse,
  isTrue,
  isCardID,
  isMobile,
  isIos,
  isPC,
  isPcBrowser,
  getMobileEnv,
  getBrowserType,
  checkPasswordLevel,
  checkFormat,
} from "@vensst/js-toolkit";


console.log('--isType--', isType('Array', []), isType('Date', new Date()));
console.log('--isString--', isString('abc'), isString(11));
console.log('--isNumber--', isNumber(123),isNumber(true));
//
console.log('--isNumeric--', isNumeric(123), isNumeric('123'),isNumeric(3.5), isNumeric('123abc'));
console.log('--isBoolean--', isBoolean(true), isBoolean(false), isBoolean("true"));
console.log('--isFunction--', isFunction(function () {}),isFunction(()=>{}),isFunction(11));
console.log('--isNull--', isNull(null), isNull(undefined));
console.log('--isUndefined--', isUndefined(undefined), isUndefined('undefined'));
console.log('--isObject--', isObject({}));
console.log('--isArray--', isArray([]));
console.log('--isDate--', isDate(new Date()));
console.log('--isRegExp--', isRegExp(new RegExp()));
console.log('--isError--', isError(new Error()));
console.log('--isSymbol--', isSymbol(Symbol()));
console.log('--isPromise--', isPromise(new Promise(() => {})));
console.log('--isSet--', isSet(new Set()));
console.log('--isFalse--', isFalse(null), isFalse("undefined"), isFalse("false"));
console.log('--isTrue--', isTrue(1));
console.log('--isCardID--', isCardID('321323198910013031'));
console.log('--isMobile--', isMobile());
console.log('--isIos--', isIos());
console.log('--isPC--', isPC());
console.log('--isPcBrowser--', isPcBrowser());
console.log('--getMobileEnv--', getMobileEnv());
console.log('--getBrowserType--', getBrowserType());
console.log('--checkPasswordLevel--', checkPasswordLevel('admin123'));
console.log('--checkFormat--', checkFormat('15061750952', 'phone'));
</script>

<template>
</template>

<style scoped>

</style>
