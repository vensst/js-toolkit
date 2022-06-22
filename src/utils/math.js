import * as math from "mathjs"

/**
 * 两个数相加
 * @param a {number} 第一个数
 * @param b {number} 第二个数
 * @return {*} 相加后的数字
 */
export const add = (a, b) => {
  return math.format(math.add(math.bignumber(a), math.bignumber(b)));
}

/**
 * 两个数相减
 * @param a {number} 第一个数
 * @param b {number} 第二个数
 * @return {*} 相减后的数字
 */
export const subtract = (a, b) => {
  return math.format(math.subtract(math.bignumber(a), math.bignumber(b)));
}

/**
 * 两个数相乘
 * @param a {number} 第一个数
 * @param b {number} 第二个数
 * @return {*} 相乘后的数字
 */
export const multiply = (a, b) => {
  return math.format(math.multiply(math.bignumber(a), math.bignumber(b)));
}

/**
 * 两个相除
 * @param a {number} 第一个数
 * @param b {number} 第二个数
 * @return {*} 相除后的数字
 */
export const divide = (a, b) => {
  return math.format(math.divide(math.bignumber(a), math.bignumber(b)));
}

/**
 * 数组求和
 * @param arr {number[]}
 * @returns {number}
 */
export const sum = function (arr) {
  return arr.reduce(function (prev, cur) {
    return add(prev, cur);
  }, 0)
};

/**
 * 求数组中数值平均值
 * @param arr {number[]}
 * @returns {number}
 */
export const average = function (arr) {
  return sum(arr) / arr.length
}

/**
 * 获取数组中最大值
 * @param arr {number[]}
 * @returns {number}
 */
export const max = function (arr) {
  //1.
  // return Math.max(...arr)
  //2.
  // return Math.max.apply(this,arr)
  return Math.max.apply(null, arr);
  //3.prev:上一次的返回值 cur:当前值 curIndex:当前值索引 arr:当前数组
  // return arr.reduce((prev, cur, curIndex, arr) => {
  //   return Math.max(prev, cur);
  // }, 0)
};

/**
 * 获取数组中取最小值
 * @param arr {number[]}
 * @returns {number}
 */
export const min = function (arr) {
  return Math.min.apply(null, arr);
}

