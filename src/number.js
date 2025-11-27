import {isNumeric, isString} from "./inspect.js";
'use strict';

/**
 * 根据区间获取随机数
 * @param {(number|string)} [min=0] - 最小值（包含）
 * @param {(number|string)} [max=1] - 最大值（不包含）
 * @param {boolean} [floating=true] - 是否返回浮点数
 * @returns {number|undefined} 随机数，参数无效时返回undefined
 * @version 1.1.0-beta.11
 */
export const random = function (min = 0, max = 1, floating = true) {
  if (!isNumeric(min) || !isNumeric(max)) {
    console.warn('min、max期望是Number类型或String类型的数字');
    return undefined;
  }

  min = Number(min);
  max = Number(max);

  if (isNaN(min) || isNaN(max)) {
    console.warn('min、max转换为数字后为NaN');
    return undefined;
  }

  const r = min + Math.random() * (max - min);
  return floating ? r : Math.floor(r);
};

/**
 * 判断数字是否在区间内
 * @param {number} num - 要判断的数字
 * @param {number} min - 最小值（不包含）
 * @param {number} max - 最大值（不包含）
 * @returns {boolean} 是否在区间内
 * @version 1.1.0-beta.11
 */
export const inRange = function (num, min, max) {
  return num > min && num < max;
};

/**
 * 将数字转成中文大写
 * @param {number|string} num - 要转换的数字
 * @returns {string|undefined} 中文大写表示，参数无效时返回undefined
 * @example
 * toChinese(123); // "一百二十三"
 * toChinese(10.5); // "一十点五"
 */
export const toChinese = function (num) {
  if (!/^\d*(\.\d*)?$/.test(num)) {
    console.warn("num期望是Number类型或String类型的数字");
    return undefined;
  }

  const chineseNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const unit = ["", "十", "百", "仟", "萬", "億", "点", ""];
  const parts = ("" + num).replace(/(^0*)/g, "").split(".");
  let result = "";
  let position = 0;

  // 处理整数部分
  if (parts[0]) {
    for (let i = parts[0].length - 1; i >= 0; i--) {
      switch (position) {
        case 0:
          result = unit[7] + result;
          break;
        case 4:
          if (!new RegExp("0{4}\\d{" + (parts[0].length - i - 1) + "}$").test(parts[0]))
            result = unit[4] + result;
          break;
        case 8:
          result = unit[5] + result;
          unit[7] = unit[5];
          position = 0;
          break;
      }

      if (position % 4 === 2 && parts[0].charAt(i + 2) !== '0' && parts[0].charAt(i + 1) === '0')
        result = chineseNum[0] + result;

      if (parts[0].charAt(i) !== '0')
        result = chineseNum[parts[0].charAt(i)] + unit[position % 4] + result;

      position++;
    }
  } else {
    result = chineseNum[0]; // 整数部分为0时显示"零"
  }

  // 处理小数部分
  if (parts.length > 1 && parts[1]) {
    result += unit[6]; // 添加"点"
    for (let i = 0; i < parts[1].length; i++) {
      result += chineseNum[parts[1].charAt(i)];
    }
  }

  // 特殊处理
  if (result === "一十") result = "十";
  if (result.startsWith("一") && result.length === 2 && !result.includes("点"))
    result = result.replace("一", "");

  return result;
};


/**
 * 将数字金额转为中文大写金额
 * @param {number|string} num - 要转换的金额
 * @returns {string} 中文大写金额表示
 * @version 1.1.0-beta.11
 * @example
 * toCny(123.45); // "壹佰贰拾叁元肆角伍分"
 * toCny(1000); // "壹仟元整"
 */

export const toCny = function (num) {
  // 类型检查和基础合法性过滤
  if (typeof num !== "string" && typeof num !== "number") {
    console.warn("num期望是Number类型或String类型的数字");
    return undefined;
  }

  let strNum = String(num);

  // 清洗数据中的干扰符号
  strNum = strNum.replace(/[, ¥]/g, "").trim();

  // 更加严格的数字格式校验
  if (!/^-?\d+(\.\d+)?$/.test(strNum)) {
    console.warn("num期望是合法的数字格式");
    return "";
  }

  const parts = strNum.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] || "";
  console.log(integerPart, decimalPart)
  // 超长限制
  if (integerPart.length > 10) {
    return "";
  }

  const chineseNumMap = {
    '0': '零',
    '1': '壹',
    '2': '贰',
    '3': '叁',
    '4': '肆',
    '5': '伍',
    '6': '陆',
    '7': '柒',
    '8': '捌',
    '9': '玖'
  };

  const units = ["元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾"];
  let resultArray = [];

  if(integerPart!=='0'){
    // 整数部分转换
    for (let i = 0; i < integerPart.length; i++) {
      const digit = integerPart[i];
      const posFromRight = integerPart.length - i - 1;
      let char = chineseNumMap[digit];

      if (posFromRight < units.length && digit !== '0') {
        char += units[posFromRight];
      }

      resultArray.push(char);
    }
  }


  // 合并连续零并插入单位
  let resultStr = resultArray.join("");
  resultStr = resultStr.replace(/零{2,}/g, "零");

  // 特殊单位替换
  resultStr = resultStr.replace("零亿", "亿")
      .replace("亿万", "亿")
      .replace("零万", "万")
      .replace("零元", "元")
      .replace(/零角|零分/g, "");

  // 小数部分处理
  if (decimalPart.length > 0) {
    const validDecimals = decimalPart.substring(0, 2);
    for (let i = 0; i < validDecimals.length; i++) {
      const digit = validDecimals[i];
      let char = chineseNumMap[digit];
      if (i === 0 && digit !== '0') char += "角";
      if (i === 1 && digit !== '0') char += "分";
      resultStr += char;
    }
  }

  // 结尾补整
  if (resultStr.endsWith("元")) {
    resultStr += "整";
  }

  return resultStr;
};


/**
 * 将数字千分位分割
 * @param {number|string} num - 要格式化的数字
 * @returns {string|undefined} 千分位分割后的字符串，参数无效时返回undefined
 */
export const thousandSeparator = function (num) {
  if (!/^\d*(\.\d*)?$/.test(num)) {
    console.warn("num期望是Number类型或String类型的数字");
    return undefined;
  }

  if (!num) return "0";

  const numStr = num.toString();
  const [integer, decimal] = numStr.split('.');

  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
};

/**
 * 数字格式化（支持科学计数法单位）
 * @param {number} num - 要格式化的数字
 * @param {number} [digits=1] - 保留小数位数
 * @returns {string} 格式化后的字符串
 * @version 1.1.0-beta.8
 */
export const scientificFormatter = function (num, digits = 1) {
  const units = [
    {value: 1e18, symbol: "E"},
    {value: 1e15, symbol: "P"},
    {value: 1e12, symbol: "T"},
    {value: 1e9, symbol: "G"},
    {value: 1e6, symbol: "M"},
    {value: 1e3, symbol: "k"}
  ];

  const absNum = Math.abs(num);
  for (let i = 0; i < units.length; i++) {
    if (absNum >= units[i].value) {
      return (
          (num / units[i].value)
              .toFixed(digits)
              .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + units[i].symbol
      );
    }
  }

  return num.toString();
};
