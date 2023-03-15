/**
 * 字符串脱敏
 * @param str {string}  需要脱敏字符串
 * @param startIndex {number}  脱敏起始位置
 * @param endIndex {number}  脱敏结束位置
 * @returns {string} 已脱敏字符串 / ''
 */

export const strHideCode = function (str, startIndex, endIndex) {
  if (str) {
    const len = str.length;
    const leftStr = str.substring(0, startIndex);
    const rightStr = str.substring(endIndex, len);
    let new_str = "";
    try {
      for (let i = 0; i < endIndex - startIndex; i++) {
        new_str = new_str + "*";
      }
    } catch (error) {
      throw new Error(error);
    }
    new_str = leftStr + new_str + rightStr;
    return new_str;
  } else return "";
};

/**
 * 字符串去除空格
 * @param str {string} 需要去除空格的字符串
 * @param type {number} 类型, 1:所有空格  2:前后空格 (默认)  3:前空格 4:后空格
 * @returns {*} 已去除的字符串
 */
export const strTrim = function (str, type = 2) {
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
 * 英文字母大小写转换
 * @param str {string}  需要转换的英文字符串
 * @param type {number} 类型, 1:首字母大写 (默认) 2:首页母小写  3:大小写转换  4:全部大写  5:全部小写
 * @returns {string|*}  已转换的英文字符串
 */
export const strEnChangeCase = function (str, type = 1) {
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
        );
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return (
          word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
        );
      });
    case 3:
      return str
        .split("")
        .map(function (word) {
          if (/[a-z]/.test(word)) {
            return word.toUpperCase();
          } else {
            return word.toLowerCase();
          }
        })
        .join("");
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
};

/**
 * 过滤 html代码(把 <、> 和 & 转换)
 * @param str {string}
 * @returns {*}
 */
export const strFilterHtmlTag = function (str) {
  str = str?.replace(/&/gi, "&amp;");
  str = str?.replace(/</gi, "&lt;");
  str = str?.replace(/>/gi, "&gt;");
  str = str?.replace(" ", " ");
  return str;
};

/**
 * 生成随机码（创建随机验证码）
 * @param length {number} 随机码长度
 * @param checkCode {string|number} 当前随机码（防止重复）
 * @returns {string}
 */
export function createCode(length = 4, checkCode) {
  let code = "";
  const codeLength = parseInt(length);
  const codeChars = [
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
    const charNum = Math.floor(Math.random() * codeChars.length);
    // 组合成指定字符验证码
    code += codeChars[charNum];
  }
  if (checkCode && checkCode === code) {
    createCode(length, checkCode);
  } else {
    return code;
  }
}
