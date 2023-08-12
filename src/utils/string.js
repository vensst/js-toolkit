import {isString} from "./inspect.js";

/**
 * 字符串脱敏
 * @param {(string|number)} str 需要脱敏字符串
 * @param {number} [startIndex=0] 脱敏起始位置
 * @param {number} [endIndex=0] 脱敏结束位置
 * @param {string} [char="*"] 脱敏字符
 * @returns {string} 已脱敏字符串
 * @version 1.1.0-beta.11
 */
const desensitization = function (
    str,
    startIndex = 0,
    endIndex = 0,
    char = "*"
) {
  if (str) {
    str = str.toString();
    const len = str.length;
    const leftStr = str.substring(0, startIndex);
    const rightStr = str.substring(endIndex, len);
    let newStr = "";
    try {
      for (let i = 0; i < endIndex - startIndex; i++) {
        newStr = newStr + char;
      }
    } catch (error) {
      throw new Error(error);
    }
    newStr = leftStr + newStr + rightStr;
    return newStr;
  } else return str;
};

/**
 * 去除字符串空格
 * @param {string} str 需要去除空格的字符串
 * @param {number} [type=2] 类型 1:所有空格  2:前后空格(默认)  3:前空格 4:后空格
 * @returns {string} 已去除的字符串
 * @version 1.1.0-beta.11
 */
const trim = function (str = "", type = 2) {
  str = str.toString();
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
};

/**
 * 字符串首字母转大写
 * @param {string} str 要转换的英文字符串
 * @returns {string} 已转换的英文字符串
 * @version 1.1.0-beta.11
 */
const toUpperCaseFirst = function (str = "") {
  str = str.toString();
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 字符串转大写
 * @param {string} str 要转换的字符串
 * @param {number} [type=1] 类型 1:全部大写(默认)  2:每个单词首字母大写（单词剩余部分不转） 3:每个单词首字母大写（单词剩余部分转小写）
 * @returns {string} 已转换的字符串
 * @version 1.1.0-beta.11
 */
const toUpperCase = function (str = "", type = 1) {
  str = str.toString();
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
      });
    case 3:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
            word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
  }
};

/**
 * 字符串转小写
 * @param {string} str 要转换的字符串
 * @param {number} [type=1] 类型 1:全部小写(默认)  2:每个单词首字母小写（剩余部分不转） 3:每个单词首字母小写（剩余部分转大写）
 * @returns {string} 已转换的字符串
 * @version 1.1.0-beta.11
 */
const toLowerCase = function (str = "", type = 1) {
  str = str.toString();
  switch (type) {
    case 1:
      return str.toLowerCase();
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1);
      });
    case 3:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
            word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
  }
};

/**
 * 过滤 html代码(把 <、> 和 & 转换)
 * @param {string} str html字符串
 * @returns {*}
 * @version 1.1.0-beta.11
 */
const filterHtmlTag = function (str) {
  str = str?.replace(/&/gi, "&amp;");
  str = str?.replace(/</gi, "&lt;");
  str = str?.replace(/>/gi, "&gt;");
  str = str?.replace(" ", " ");
  return str;
};

/**
 * 生成随机验证码
 * @param {number} [length=4] 随机验证码的长度，默认4位
 * @param {(string|number)} checkCode 当前随机码（防止重复）
 * @returns {string} 随机验证码
 */
const randomCode = function (length = 4, checkCode = '') {
  let code = "";
  const codeLength = parseInt(length);
  const charset = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // 循环组成验证码的字符串
  for (let i = 0; i < codeLength; i++) {
    // 获取随机验证码下标
    const randomIndex = Math.floor(Math.random() * charset.length);
    // 组合成指定字符验证码
    code += charset[randomIndex];
  }
  if (checkCode && checkCode === code) {
    randomCode(length, checkCode);
  } else {
    return code;
  }
};

/**
 * 查找某个词或字符在字符串中出现次数
 * @param {string} str 字符串
 * @param {string} key 要查找的词或字符
 * @returns {number} 出现次数
 * @version 1.1.0-beta.11
 */
const findCharCount = function (str, key) {
  let count = 0;
  let index = str.indexOf(key);
  while (index !== -1) {
    count++;
    index = str.indexOf(key, index + 1);
  }
  return count;
};

/**
 * 字符串补全（开头）
 * @param {(string|number)} str 字符串
 * @param {number} targetLength 目标长度
 * @param {string} padString 补全字符
 * @returns {string} 补全后的字符串
 * @version 1.1.0-beta.11
 */
const padStart = function (str, targetLength, padString = '') {
  if (!isString(str)) {
    str = str.toString()
  }
  return str.padStart(targetLength || str.length, padString)
}

/**
 * 字符串补全（尾部）
 * @param {(string|number)} str 字符串
 * @param {number} targetLength 目标长度
 * @param {string} padString 补全字符
 * @returns {string} 补全后的字符串
 * @version 1.1.0-beta.11
 */
const padEnd = function (str, targetLength, padString = '') {
  if (!isString(str)) {
    str = str.toString()
  }
  return str.padEnd(targetLength || str.length, padString)
}

/**
 * 判断字符串是否包含单位
 * @param {string} str 字符串
 * @returns {boolean} 是否包含单位
 * @version 1.1.0-beta.12
 */
const hasUnit = function (str) {
  if (typeof str !== 'string') return false;
  const unitPattern = /[a-zA-Z]+$/; // 匹配以字母组成的单位
  return unitPattern.test(str);
}

/**
 * 去除字符串单位
 * @param {string} str 字符串
 * @returns {string} 去除单位后的字符串
 * @version 1.1.0-beta.12
 */
const removeUnit = function (str) {
  if (typeof str !== "string" || !hasUnit(str)) return str;
  return str.replace(/[a-zA-Z]+$/, '');
}

/**
 * 驼峰命名转短横线命名
 * @param {string} str 字符串
 * @param {string} [separator='-'] 分隔符
 * @returns {*}
 * @version 1.1.0-beta.13
 */
const camelToKebab = function (str, separator = '-') {
  if(!str) return str;
  if(typeof str !== 'string') {
    str = String(str);
  }
  return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}

/**
 * 短横线命名转驼峰命名
 * @param {string} str 字符串
 * @param {string} [separator='-'] 分隔符
 * @returns {*}
 * @version 1.1.0-beta.13
 */
const kebabToCamel = function (str,separator = '-') {
  if(!str) return str;
  if(typeof str !== 'string') {
    str = String(str);
  }
  const reg = new RegExp(`${separator}(.)`, 'g');
  return str.replace(reg, (match, p1) => p1.toUpperCase());
}

export {
  desensitization,
  trim,
  toUpperCaseFirst,
  toUpperCase,
  toLowerCase,
  filterHtmlTag,
  randomCode,
  findCharCount,
  padStart,
  padEnd,
  hasUnit,
  removeUnit,
  camelToKebab,
  kebabToCamel,
};
