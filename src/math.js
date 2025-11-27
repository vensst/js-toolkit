/*
 * @Author: yfhu
 * @Date: 2023-11-16 14:15:46
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-16 14:22:34
 * @Description:
 */

/**
 * 获取数字的小数位数
 * @param {number} num - 数字
 * @returns {number} 小数位数
 */
export const getDecimalLength = function (num) {
  if (Math.floor(num) === num) return 0;
  const str = num.toString();
  if (str.indexOf('.') === -1) return 0;
  return str.split('.')[1].length;
};

/**
 * 将数字转换为整数并返回倍数
 * @param {number} num - 数字
 * @returns {[number, number]} [整数, 倍数]
 */
const toInteger = function (num) {
  if (Math.floor(num) === num) return [num, 1];

  const str = num.toString().toLowerCase();
  if (str.includes('e')) {
    // 处理科学计数法
    const [mantissaStr, exponentStr] = str.split('e');
    const mantissaParts = mantissaStr.split('.');
    const integerPart = mantissaParts[0];
    const fractionalPart = mantissaParts[1] || '';
    const totalDigits = integerPart + fractionalPart;
    const shift = -(fractionalPart.length) + parseInt(exponentStr, 10);
    const multiplier = Math.pow(10, Math.max(0, -shift));
    const integer = parseInt(totalDigits, 10) * Math.pow(10, Math.max(0, shift));
    return [integer, multiplier];
  } else {
    const parts = str.split('.');
    const decimalLength = parts[1]?.length ?? 0;
    const multiplier = Math.pow(10, decimalLength);
    const integer = parseInt(parts[0] + (parts[1] || ''), 10);
    return [integer, multiplier];
  }
};

/**
 * 两个数相加
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 相加后的数字
 */
export const add = function (a, b) {
  const [intA, mulA] = toInteger(a);
  const [intB, mulB] = toInteger(b);

  const lcm = (mulA * mulB) / gcd(mulA, mulB); // 最小公倍数
  const adjustedA = intA * (lcm / mulA);
  const adjustedB = intB * (lcm / mulB);

  return (adjustedA + adjustedB) / lcm;
};

/**
 * 计算最大公约数
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/**
 * 两个数相减
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 相减后的数字
 */
export const subtract = function (a, b) {
  const [intA, mulA] = toInteger(a);
  const [intB, mulB] = toInteger(b);

  const lcm = (mulA * mulB) / gcd(mulA, mulB); // 最小公倍数
  const adjustedA = intA * (lcm / mulA);
  const adjustedB = intB * (lcm / mulB);

  return (adjustedA - adjustedB) / lcm;
};

/**
 * 两个数相乘
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 相乘后的数字
 */
export const multiply = function (a, b) {
  const decimalLenA = getDecimalLength(a);
  const decimalLenB = getDecimalLength(b);
  const totalDecimalLen = decimalLenA + decimalLenB;

  const [intA] = toInteger(a);
  const [intB] = toInteger(b);

  const result = intA * intB;
  return result / Math.pow(10, totalDecimalLen);
};

/**
 * 两个数相除
 * @param {number} a - 第一个数
 * @param {number} b - 第二个数
 * @returns {number} 相除后的数字
 */
export const divide = function (a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }

  const [intA, mulA] = toInteger(a);
  const [intB, mulB] = toInteger(b);

  const dividend = intA * mulB;
  const divisor = intB * mulA;

  return dividend / divisor;
};

/**
 * 数组求和
 * @param {number[]} arr - 数组
 * @returns {number} 和
 */
export const sum = function (arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return arr.reduce(function (prev, cur) {
    const num = parseFloat(cur);
    if (isNaN(num) || !isFinite(num)) {
      throw new Error('Array contains non-numeric values');
    }
    return add(prev, num);
  }, 0);
};

/**
 * 求数组中数值平均值
 * @param {number[]} arr - 数组
 * @returns {number} 平均值
 */
export const average = function (arr) {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  return divide(sum(arr), arr.length);
};

/**
 * 向上取整
 * @param {number} [num=0] - 数值
 * @param {number} [precision=0] - 保留小数位数
 * @returns {number} 向上取整后的数字
 */
export const ceil = function (num = 0, precision = 0) {
  if (precision === 0) return Math.ceil(num);

  const factor = Math.pow(10, precision);
  return Math.ceil(round(num * factor, 10)) / factor;
};

/**
 * 向下取整
 * @param {number} [num=0] - 数值
 * @param {number} [precision=0] - 保留小数位数
 * @returns {number} 向下取整后的数字
 */
export const floor = function (num = 0, precision = 0) {
  if (precision === 0) return Math.floor(num);

  const factor = Math.pow(10, precision);
  return Math.floor(round(num * factor, 10)) / factor;
};

/**
 * 保留小数点后几位，不考虑四舍五入
 * @param {number} [num=0] - 数值
 * @param {number} [precision=0] - 保留小数位数
 * @returns {number} 保留小数点后几位的数字
 */
export const decimal = function (num = 0, precision = 0) {
  if (precision === 0) {
    return num >= 0 ? Math.floor(num) : Math.ceil(num);
  }

  const factor = Math.pow(10, precision);
  return Math.trunc(round(num * factor, 10)) / factor;
};

/**
 * 保留小数点后几位，四舍五入
 * @param {number} [num=0] - 数值
 * @param {number} [precision=0] - 保留小数位数
 * @returns {number} 保留小数点后几位的数字
 */
export const round = function (num = 0, precision = 0) {
  const factor = Math.pow(10, precision);
  return Math.round((num + Number.EPSILON) * factor) / factor;
};
