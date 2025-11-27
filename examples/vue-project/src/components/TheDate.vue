<!--
 * @Name: TheDate.vue
 * @Description:
 * @Date: 2025-11-03 15:05:15
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-03 15:05:15
-->
<script setup lang="ts">
import {
  formatDate,
  getDateRange,
  getDaysInMonth,
  getDaysInYear,

  getMonthsRange,
  getStartMonthOfQuarter,
  getDayOfYear,
  getWeekOfYear,

  getStartOfWeek,
  getEndOfWeek,

  getStartOfMonth,
  getEndOfMonth,

  getStartOfQuarter,
  getEndOfQuarter,

  getStartOfYear,
  getEndOfYear,

  getDateOffset,
  getDatesBetween,
  timeAgo,
  getTimeSlotByStep,
  sToHms,
} from "@vensst/js-toolkit";

console.log('--formatDate--', formatDate(), formatDate(new Date(), 'YYYY/MM/DD h:mm:ss WW'), formatDate(new Date(), 'WW'), formatDate('2020-9-9', 'YYYY/MM/DD'))
console.log('--getDateRange--', getDateRange(), getDateRange('2023-1-1', 2, 0, 'YYYY/MM/DD'), getDateRange('2023-1-1', 2, 1))

console.log('--getDaysInMonth--', getDaysInMonth(), getDaysInMonth('2023-6'))
console.log('--getDaysInYear--', getDaysInYear(), getDaysInYear(2020))
//
console.log('--getMonthsRange--', getMonthsRange(), getMonthsRange('2023-1-1', 2, 0, 'YYYY/MM'), getMonthsRange('2023-1', 2, 1))
console.log('--getStartMonthOfQuarter--', getStartMonthOfQuarter(), getStartMonthOfQuarter('2022-2'))
//
console.log('--getDayOfYear--', getDayOfYear(), getDayOfYear('2022-2-1'))
console.log('--getWeekOfYear--', getWeekOfYear(), getWeekOfYear('2022-2-1'))
//
console.log('--getStartOfWeek--', getStartOfWeek(), getStartOfWeek('2022-01-01', -1), getStartOfWeek('2022-01-01'), getStartOfWeek('2022-01-01', 1))
console.log('--getEndOfWeek--', getEndOfWeek(), getEndOfWeek('2022-01-01', -1), getEndOfWeek('2022-01-01', 0), getEndOfWeek('2022-01-01', 1))
console.log('--getStartOfMonth--', getStartOfMonth(), getStartOfMonth(new Date('2022-01-01'), -1), getStartOfMonth(new Date('2022-01-01'), 0), getStartOfMonth(new Date('2022-01-01'), 1))
console.log('--getEndOfMonth--', getEndOfMonth(), getEndOfMonth(new Date('2022-01-01'), -1), getEndOfMonth(new Date('2022-01-01'), 0), getEndOfMonth(new Date('2022-01-01'), 1))
console.log('--getStartOfQuarter--', getStartOfQuarter(), getStartOfQuarter(new Date('2022-01-01'), -1), getStartOfQuarter(new Date('2022-01-01'), 0), getStartOfQuarter(new Date('2022-01-01'), 1))
console.log('--getEndOfQuarter--', getEndOfQuarter(), getEndOfQuarter(new Date('2022-01-01'), -1), getEndOfQuarter(new Date('2022-01-01'), 0), getEndOfQuarter(new Date('2022-01-01'), 1))
console.log('--getStartOfYear--', getStartOfYear(), getStartOfYear('2022-01-01', -1), getStartOfYear('2022-01-01', 0), getStartOfYear('2022-01-01', 1))
console.log('--getEndOfYear--', getEndOfYear(), getEndOfYear('2022-01-01', -1), getEndOfYear('2022-01-01', 0), getEndOfYear('2022-01-01',1))

console.log('--getDateOffset--', getDateOffset(new Date()), getDateOffset(new Date(), 3), getDateOffset(new Date(), 7), getDateOffset(new Date(), 30,"YYYY年MM月DD日HH时mm分ss秒"))
//
console.log('--getDatesBetween--', getDatesBetween(),getDatesBetween('2022-1-1', '2022-1-5'))
console.log('--timeAgo--', timeAgo(), timeAgo('2024-12-20 15:22:20'))
console.log('--getTimeSlotByStep--', getTimeSlotByStep(), getTimeSlotByStep(60))
console.log('--sToHms--', sToHms(), sToHms(7200), sToHms(7810, ["h", "m", "s"]))
</script>

<template>

</template>

<style scoped>

</style>
