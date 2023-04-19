/**
 * 字符串脱敏
 * @param {string} str 需要脱敏字符串
 * @param {number} startIndex  脱敏起始位置
 * @param {number} endIndex  脱敏结束位置
 * @returns {string} 已脱敏字符串
 */
const strHideCode = function (str, startIndex, endIndex) {
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
 * @param {string} str 需要去除空格的字符串
 * @param {number} type 类型, 1:所有空格  2:前后空格 (默认)  3:前空格 4:后空格
 * @returns {string} 已去除的字符串
 */
const strTrim = function (str, type = 2) {
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
 * @param {string} str 需要转换的英文字符串
 * @param {number} type 类型, 1:首字母大写 (默认) 2:首页母小写  3:大小写转换  4:全部大写  5:全部小写
 * @returns {string|*} 已转换的英文字符串
 */
const strEnChangeCase = function (str, type = 1) {
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
 * @param {string} str html字符串
 * @returns {*}
 */
const strFilterHtmlTag = function (str) {
  str = str?.replace(/&/gi, "&amp;");
  str = str?.replace(/</gi, "&lt;");
  str = str?.replace(/>/gi, "&gt;");
  str = str?.replace(" ", " ");
  return str;
};

/**
 * 生成随机验证码
 * @param {number} length 随机验证码的长度，默认4位
 * @param {string|number} checkCode 当前随机码（防止重复）
 * @returns {string}
 */
const randomCode = function (length = 4, checkCode) {
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
}

export {
  strHideCode,
  strTrim,
  strEnChangeCase,
  strFilterHtmlTag,
  randomCode,
}
