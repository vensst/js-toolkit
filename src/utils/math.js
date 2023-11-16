/*
 * @Author: yfhu
 * @Date: 2023-11-16 14:15:46
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-16 14:22:34
 * @Description:
 */
import * as math from "mathjs";

/**
 * 两个数相加
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 * @returns {number} 相加后的数字
 */
const add = function (a, b) {
  return Number(math.format(math.add(math.bignumber(a), math.bignumber(b))));
};

/**
 * 两个数相减
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 * @returns {number} 相减后的数字
 */
const subtract = function (a, b) {
  return Number(math.format(math.subtract(math.bignumber(a), math.bignumber(b))));
};

/**
 * 两个数相乘
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 * @returns {number} 相乘后的数字
 */
const multiply = function (a, b) {
  return Number(math.format(math.multiply(math.bignumber(a), math.bignumber(b))));
};

/**
 * 两个相除
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 * @returns {number} 相除后的数字
 */
const divide = function (a, b) {
  return Number(math.format(math.divide(math.bignumber(a), math.bignumber(b))));
};

/**
 * 数组求和
 * @param {number[]} arr 数组
 * @returns {number} 和
 */
const sum = function (arr) {
  return arr.reduce(function (prev, cur) {
    return add(prev, cur);
  }, 0);
};

/**
 * 求数组中数值平均值
 * @param {number[]} arr 数组
 * @returns {number} 平均值
 */
const average = function (arr) {
  return sum(arr) / arr.length;
};

/**
 * 向上取整
 * @param {number} num 数值
 * @param {number} [precision=0] 保留小数位数
 * @returns {number} 向上取整后的数字
 */
const ceil = function (num = 0, precision = 0) {
  return Number(math.format(math.ceil(math.bignumber(num), precision)));
};

/**
 * 向下取整
 * @param {number} num 数值
 * @param {number} [precision=0] 保留小数位数
 * @returns {number} 向下取整后的数字
 */
const floor = function (num = 0, precision = 0) {
  return Number(math.format(math.floor(math.bignumber(num), precision)));
  // let multiplier = Math.pow(10, precision || 0);
  // return Math.floor(num * multiplier) / multiplier;
};

/**
 * 保留小数点后几位，不考虑四舍五入
 * @param {number} num 数值
 * @param {number} [precision=0] 保留小数位数
 * @returns {number} 保留小数点后几位的数字
 */
const decimal = function (num = 0, precision = 0) {
  const _num = num.toString();
  let _newNum = 0;
  if (_num.indexOf(".") > -1) {
    let _numArr = _num.split(".");
    if (_numArr[1].length > precision) {
      if (precision) {
        _newNum = _numArr[0] + "." + _numArr[1].substring(0, precision);
      } else {
        _newNum = _numArr[0];
      }
    } else {
      _newNum = _num;
    }
  } else _newNum = _num;
  return Number(_newNum);
};

/**
 * 保留小数点后几位，四舍五入
 * @param {number} num 数值
 * @param {number} [precision=0] 保留小数位数
 * @returns {number} 保留小数点后几位的数字
 */
const round = function (num = 0, precision = 0) {
  return math.round(num, precision)
}

export {
  add,
  subtract,
  multiply,
  divide,
  sum,
  average,
  ceil,
  floor,
  decimal,
  round
}
