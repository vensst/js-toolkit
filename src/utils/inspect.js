/**
 * 类型判断
 * @param {string} type  类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol
 * @param {any} val 值
 * @return {boolean} 是否符合类型
 */
const isType = function (type, val) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
};

/**
 * 判断是否字符串
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isString = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "String";
};

/**
 * 判断是否数字
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isNumber = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Number";
};

/**
 * 判断是否数字
 * @param {*} value 任意类型
 * @returns {boolean}
 * @version 1.1.0-beta.11
 */
const isNumeric = function (value) {
  return typeof value === "number" || typeof value === "string" && !isNaN(value);
}
/**
 * 判断是否 boolean
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isBoolean = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
};

/**
 * 判断是否函数
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isFunction = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Function";
};

/**
 * 判断是否为 null
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isNull = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Null";
};

/**
 * 判断是否 undefined
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isUndefined = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Undefined";
};

/**
 * 判断是否对象
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isObject = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Object";
};

/**
 * 判断是否数组
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isArray = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Array";
};

/**
 * 判断是否时间
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isDate = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Date";
};

/**
 * 判断是否正则
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isRegExp = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "RegExp";
};

/**
 * 判断是否 Error 对象
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isError = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Error";
};

/**
 * 判断是否 Symbol 函数
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isSymbol = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Symbol";
};

/**
 * 判断是否 Promise 对象
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isPromise = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Promise";
};

/**
 * 判断是否 Set 对象
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isSet = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === "Set";
};

/**
 * 判断是否为 false
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isFalse = function (o) {
  return !o || o === "null" || o === "undefined" || o === "false" || o === "NaN";
};

/**
 * 判断是否为 true
 * @param {any} o 任意类型
 * @returns {boolean}
 */
const isTrue = function (o) {
  return !isFalse(o);
};

/**
 * 严格的身份证校验
 * @param {string} sId 身份证号码
 * @returns {boolean}
 */
const isCardID = function (sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    console.error("你输入的身份证长度或格式错误");
    return false;
  }
  //身份证城市
  let aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外",
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    console.error("你的身份证地区非法");
    return false;
  }

  // 出生日期验证
  let sBirthday = (
          sId.substr(6, 4) +
          "-" +
          Number(sId.substr(10, 2)) +
          "-" +
          Number(sId.substr(12, 2))
      ).replace(/-/g, "/"),
      d = new Date(sBirthday);
  if (
      sBirthday !==
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
  ) {
    console.error("身份证上的出生日期非法");
    return false;
  }

  // 身份证号码校验
  let sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432";
  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  let last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] !== last) {
    console.error("你输入的身份证号非法");
    return false;
  }

  return true;
};

/**
 * 判断当前环境是否为移动端
 * @returns {boolean} 是否为移动端
 */
const isMobile = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * 判断当前环境是否为ios苹果手机
 * @returns {boolean}
 */
const isIos = function () {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * 判断当前环境是否为 PC 端
 * @returns {boolean}
 */
const isPC = function () {
  return !isMobile();
};

/**
 * 判断是否是PC浏览器
 * @returns {boolean} 是否是PC浏览器
 */
const isPcBrowser = function () {
  const userAgent = navigator.userAgent;
  const mobileKeywords = [
    "Android",
    "webOS",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "IEMobile",
    "Opera Mini",
    "SymbianOS",
    "Windows Phone",];
  for (let i = 0; i < mobileKeywords.length; i++) {
    if (userAgent.indexOf(mobileKeywords[i]) !== -1) {
      return false;
    }
  }
  return true;
}

/**
 * 获取当前属于哪种类型手机运行环境
 * @returns {string} 是手机环境返回运行环境，不是手机运行环境 Unknown
 */
const getMobileEnv = function () {
  var userAgent = navigator.userAgent;
  if (/Android/i.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "ios";
  } else if (/Windows Phone|IEMobile|WPDesktop/i.test(userAgent)) {
    return "Windows Phone";
  } else if (/BlackBerry/i.test(userAgent)) {
    return "BlackBerry";
  } else {
    return "Unknown";
  }
};

/**
 * 获取浏览器类型
 * @returns {string}
 */
const getBrowserType = function () {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  let isIE =
      userAgent.indexOf("compatible") > -1 &&
      userAgent.indexOf("MSIE") > -1 &&
      !isOpera; //判断是否IE浏览器
  let isIE11 =
      userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  let isSafari =
      userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1; //判断是否Safari浏览器
  let isChrome =
      userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) return "IE7";
    else if (fIEVersion === 8) return "IE8";
    else if (fIEVersion === 9) return "IE9";
    else if (fIEVersion === 10) return "IE10";
    else return "IE7以下"; //IE版本过低
  }
  if (isIE11) return "IE11";
  if (isEdge) return "Edge";
  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
};

/**
 * 检测密码强度
 * @param {string} password 需要检测密码
 * @returns {number}
 */
const checkPasswordLevel = function (password) {
  let level = 0;
  if (password.length < 6) {
    return level;
  }
  let rules = [
    /\d/, // 包含数字
    /[a-z]/, // 包含小写字母
    /[A-Z]/, // 包含大写字母
    /[!@#$%^&*.\-_]/, // 包含特殊字符
    // /.{8,}/ // 长度至少为8位
  ];
  for (let i = 0; i < rules.length; i++) {
    if (rules[i].test(password)) {
      level++;
    }
  }

  return level;
};

/**
 * 检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确
 * @param {string} str 检查的字符串
 * @param {string} type 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english, chinese, lower, upper, HTML
 * @returns {boolean}
 */
const checkFormat = function (str, type) {
  let regExp;
  switch (type) {
    case 'phone': // 手机号码
      regExp = /^1[3456789]\d{9}$/;
      break;
    case 'tel': // 座机号码
      regExp = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
      break;
    case 'card': // 身份证
      regExp = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
      break;
    case 'pwd': // 密码
      regExp = /^[a-zA-Z\d_]{6,16}$/;
      break;
    case 'postal': // 邮政编码
      regExp = /^[1-9]\d{5}$/;
      break;
    case 'QQ': // QQ号
      regExp = /^[1-9][0-9]{4,}$/;
      break;
    case 'email': // 邮箱
      regExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      break;
    case 'money': // 金额(小数点2位)
      regExp = /^\d+(\.\d{1,2})?$/;
      break;
    case 'URL': // 网址
      regExp = /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
      break;
    case 'IP': // IP地址
      regExp = /^((\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])$/;
      break;
    case 'date': // 日期时间
      regExp = /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}:\d{2})?$/;
      break;
    case 'number': // 数字
      regExp = /^[0-9]*$/;
      break;
    case 'english': // 英文
      regExp = /^[a-zA-Z]+$/;
      break;
    case 'chinese': // 中文
      regExp = /^[\u4E00-\u9FA5]+$/;
      break;
    case 'lower': // 小写
      regExp = /^[a-z]+$/;
      break;
    case 'upper': // 大写
      regExp = /^[A-Z]+$/;
      break;
    case 'HTML': // HTML标记格式
      regExp = /<("[^"]*"|'[^']*'|[^'">])*>/;
      break;
    default:
      return false;
  }
  return regExp.test(str);
}


export {
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

}
