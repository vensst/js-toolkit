/**
 * 字符串脱敏，指定脱敏位置
 * @param str {String} str 未脱敏字符串
 * @param startLoc {Number} startLoc 脱敏起始位置
 * @param endLoc {Number} endLoc 脱敏结束位置
 * @returns {string} 已脱敏字符串
 */
export const strHideCodeIndex = function (str, startLoc, endLoc) {
  if (str) {
    let len = str.length;
    let leftStr = str.substring(0, startLoc);
    let rightStr = str.substring(endLoc, len);
    let str = '';
    let i = 0;
    try {
      for (i = 0; i < endLoc - startLoc; i++) {
        str = str + '*';
      }
    } catch (error) {
      throw new Error(error)
    }
    str = leftStr + str + rightStr;
    return str;
  } else return ""
};
/**
 *  字符串脱敏，
 * @param str
 * @param frontLen
 * @param endLen
 * @returns {string}
 */
// export const strHideCode = function (str, frontLen, endLen) {
//   let len = str.length - frontLen - endLen;
//   let star = '';
//   for (let i = 0; i < len; i++) {
//     star += '*';
//   }
//   return str.substring(0, frontLen) + star + str.substring(str.length - endLen);
// }
/**
 * 字符串去除空格
 * @param str {String} 需要去除空格的字符串
 * @param type {Number} 类型(默认值:1), 1:所有空格  2:前后空格  3:前空格 4:后空格
 * @returns {*} 已去除的字符串
 */
export const trim = function (str, type = 2) {
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

/*
* @desc 英文字母大小写转换
* @param {String} str 需要转换的英文字符串
* @param {Number} type 类型(默认值:1):
*         1:首字母大写  2:首页母小写  3:大小写转换  4:全部大写  5:全部小写
* @return {String} 已转换的英文字符串
* */
export const changeCase = function (str, type = 1) {
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase()
        }
      }).join('');
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}

/*
* @desc 检测密码强度
* @param {String} str 密码
* @return {Number} Lv 密码级别
* */
export const checkPwdLv = function (str) {
  let Lv = 0;
  if (str.length < 6) {
    return Lv
  }
  if (/[0-9]/.test(str)) {
    Lv++
  }
  if (/[a-z]/.test(str)) {
    Lv++
  }
  if (/[A-Z]/.test(str)) {
    Lv++
  }
  if (/[\.|-|_]/.test(str)) {
    Lv++
  }
  return Lv;
};

/*
* @desc 过滤html代码(把<>转换)
* @param {String} str 密码
* @return {String} str
* */

export const filterTag=function  (str) {
  str = str.replace(/&/ig, "&amp;");
  str = str.replace(/</ig, "&lt;");
  str = str.replace(/>/ig, "&gt;");
  str = str.replace(" ", " ");
  return str;
}
/*
* 生成随机码
* */
export function createCode(length, checkCode) {
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
    "Z"
  ];
  // 循环组成验证码的字符串
  for (let i = 0; i < codeLength; i++) {
    // 获取随机验证码下标
    const charNum = Math.floor(Math.random() * 62);
    // 组合成指定字符验证码
    code += codeChars[charNum];
  }
  if (checkCode && checkCode === code) {
    createCode(length, checkCode);
  } else {
    return code;
  }
}
// 字符串加密
export function compileStr(code) {
  if (code === "") {
    return code;
  }
  let c = String.fromCharCode(code.charCodeAt(0) + code.length);
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return escape(c);
}

// 字符串进行解密
export function uncompileStr(code) {
  if (code === "") {
    return code;
  }
  code = unescape(code);
  let c = String.fromCharCode(code.charCodeAt(0) - code.length);
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }
  return c;
}
