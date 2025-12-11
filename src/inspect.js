const validTypesSet = new Set([
  "String", "Number", "Boolean", "Object", "Array", "Function", "Date",
  "RegExp", "Error", "Symbol", "Promise", "Set", "Null", "Undefined",
  "Blob", "Map", "WeakMap", "WeakSet", "ArrayBuffer", "DataView",
  "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array",
  "Uint16Array", "Int32Array", "Uint32Array", "Float32Array",
  "Float64Array", "URL", "FormData", "File"
]);

/**
 * 获取值的类型
 * @param {any} o - 任意类型
 * @returns {string}
 */
export const getType = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1);
};

/**
 * 类型判断
 * @param {string} type - 类型  "String", "Number", "Boolean", "Object", "Array", "Function", "Date", "RegExp", "Error", "Symbol", "Promise", "Set", "Null", "Undefined", "Blob
 * @param {any} val 值
 * @return {boolean} 是否符合类型
 */
export const isType = function (type, val) {
  if (!validTypesSet.has(type)) {
    throw new Error(`Invalid type: ${type}`);
  }
  if (type === "Blob" && typeof Blob !== "undefined") {
    return val instanceof Blob;
  }
  return getType(val) === type;
};

/**
 * 判断是否字符串
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isString = function (o) {
  return getType(o) === "String";
};

/**
 * 判断是否数字
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isNumber = function (o) {
  return getType(o) === "Number";
};

/**
 * 判断是否数字
 * @param {*} value - 任意类型
 * @returns {boolean}
 * @version 1.1.0-beta.11
 */
export const isNumeric = function (value) {
  if (value == null) {
    return false;
  }
  if (typeof value === 'number') {
    return isFinite(value);
  }
  if (typeof value === 'string') {
    const num = Number(value);
    return !isNaN(num) && isFinite(num) && value.trim() !== '';
  }
  return false;
};

/**
 * 判断是否 boolean
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isBoolean = function (o) {
  return getType(o) === "Boolean";
};

/**
 * 判断是否函数
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isFunction = function (o) {
  return getType(o) === "Function";
};

/**
 * 判断是否为 null
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isNull = function (o) {
  return getType(o) === "Null";
};

/**
 * 判断是否 undefined
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isUndefined = function (o) {
  return getType(o) === "Undefined";
};

/**
 * 检测是否为 Blob 对象
 * @param o - 任意类型
 * @return {boolean}
 */
export const isBlob = function (o) {
  return getType(o) === "Blob" || (typeof Blob !== "undefined" && o instanceof Blob);
};

/**
 * 判断是否对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isObject = function (o) {
  return getType(o) === "Object";
};

/**
 * 判断是否数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isArray = function (o) {
  return getType(o) === "Array";
};

/**
 * 判断是否为 Element
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isElement = function (o) {
  return getType(o) === "Element";
};

/**
 * 检测是否为 NodeList
 * @param o - 任意类型
 * @returns {boolean}
 */
export const isNodeList = function (o) {
  return getType(o) === "NodeList";
};

/**
 * 判断是否时间
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isDate = function (o) {
  return getType(o) === "Date";
};

/**
 * 判断是否正则
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isRegExp = function (o) {
  return getType(o) === "RegExp";
};

/**
 * 判断是否 Error 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isError = function (o) {
  return getType(o) === "Error";
};

/**
 * 判断是否 Symbol 函数
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isSymbol = function (o) {
  return getType(o) === "Symbol";
};

/**
 * 判断是否 Promise 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isPromise = function (o) {
  return getType(o) === "Promise";
};

/**
 * 判断是否 Set 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isSet = function (o) {
  return getType(o) === "Set";
};
/**
 * 判断是否 Map 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isMap = function (o) {
  return getType(o) === "Map";
};

/**
 * 判断是否 WeakMap 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isWeakMap = function (o) {
  return getType(o) === "WeakMap";
};

/**
 * 判断是否 WeakSet 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isWeakSet = function (o) {
  return getType(o) === "WeakSet";
};

/**
 * 判断是否 ArrayBuffer 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isArrayBuffer = function (o) {
  return getType(o) === "ArrayBuffer";
};

/**
 * 判断是否 DataView 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isDataView = function (o) {
  return getType(o) === "DataView";
};

/**
 * 判断是否 Int8Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isInt8Array = function (o) {
  return getType(o) === "Int8Array";
};

/**
 * 判断是否 Uint8Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isUint8Array = function (o) {
  return getType(o) === "Uint8Array";
};

/**
 * 判断是否 Uint8ClampedArray 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isUint8ClampedArray = function (o) {
  return getType(o) === "Uint8ClampedArray";
};

/**
 * 判断是否 Int16Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isInt16Array = function (o) {
  return getType(o) === "Int16Array";
};

/**
 * 判断是否 Uint16Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isUint16Array = function (o) {
  return getType(o) === "Uint16Array";
};

/**
 * 判断是否 Int32Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isInt32Array = function (o) {
  return getType(o) === "Int32Array";
};

/**
 * 判断是否 Uint32Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isUint32Array = function (o) {
  return getType(o) === "Uint32Array";
};

/**
 * 判断是否 Float32Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isFloat32Array = function (o) {
  return getType(o) === "Float32Array";
};

/**
 * 判断是否 Float64Array 类型化数组
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isFloat64Array = function (o) {
  return getType(o) === "Float64Array";
};

/**
 * 判断是否 URL 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isURL = function (o) {
  return getType(o) === "URL" || (typeof URL !== "undefined" && o instanceof URL);
};

/**
 * 判断是否 FormData 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isFormData = function (o) {
  return getType(o) === "FormData" || (typeof FormData !== "undefined" && o instanceof FormData);
};

/**
 * 判断是否 File 对象
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isFile = function (o) {
  return getType(o) === "File" || (typeof File !== "undefined" && o instanceof File);
};

/**
 * 判断是否为 false
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isFalse = function (o) {
  return !o || o === "null" || o === "undefined" || o === "false" || o === "NaN";
};

/**
 * 判断是否为 true
 * @param {any} o - 任意类型
 * @returns {boolean}
 */
export const isTrue = function (o) {
  return !isFalse(o);
};


// 身份证地区映射表提前声明
const ID_CARD_REGION_MAP = {
  11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
  21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
  33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东",
  41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西",
  46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南",
  54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏",
  65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
};

/**
 * 严格的身份证校验
 * @param {string} sId - 身份证号码
 * @returns {boolean}
 */
export const isCardID = function (sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    throw new Error("你输入的身份证长度或格式错误");
  }

  const regionCode = parseInt(sId.substr(0, 2));
  if (!ID_CARD_REGION_MAP[regionCode]) {
    throw new Error("你的身份证地区非法");
  }

  const year = parseInt(sId.substr(6, 4), 10);
  const month = parseInt(sId.substr(10, 2), 10);
  const day = parseInt(sId.substr(12, 2), 10);

  const birthDate = new Date(year, month - 1, day);
  if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() + 1 !== month ||
      birthDate.getDate() !== day
  ) {
    throw new Error("身份证上的出生日期非法");
  }

  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const codes = "10X98765432";

  let sum = 0;
  for (let i = 0; i < sId.length - 1; i++) {
    sum += parseInt(sId[i], 10) * weights[i];
  }

  const lastChar = codes[sum % 11];
  if (sId[sId.length - 1].toUpperCase() !== lastChar) {
    throw new Error("你输入的身份证号非法");
  }

  return true;
};

const mobileKeywords = ["Android", "webOS", "iPhone", "iPad", "iPod", "BlackBerry", "IEMobile", "Opera Mini"];

/**
 * 判断当前环境是否为移动端
 * @returns {boolean} 是否为移动端
 */
export const isMobile = function () {
  return mobileKeywords.some(keyword => navigator.userAgent.includes(keyword));
};

/**
 * 判断当前环境是否为ios苹果手机
 * @returns {boolean}
 */
export const isIos = function () {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

/**
 * 判断当前环境是否为 PC 端
 * @returns {boolean}
 */
export const isPC = function () {
  return !isMobile();
};

/**
 * 判断是否是PC浏览器
 * @returns {boolean} 是否是PC浏览器
 */
export const isPcBrowser = function () {
  const userAgent = navigator.userAgent;
  for (let i = 0; i < mobileKeywords.length; i++) {
    if (userAgent.indexOf(mobileKeywords[i]) !== -1) {
      return false;
    }
  }
  return true;
};

/**
 * 获取当前属于哪种类型手机运行环境
 * @returns {string} 是手机环境返回运行环境，不是手机运行环境 Unknown
 */
export const getMobileEnv = function () {
  let userAgent = navigator.userAgent;
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
export const getBrowserType = function () {
  let userAgent = navigator.userAgent;
  let isOpera = userAgent.indexOf("Opera") > -1;
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
  let isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  let isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
  let isFF = userAgent.indexOf("Firefox") > -1;
  let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1;
  let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;

  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) return "IE7";
    else if (fIEVersion === 8) return "IE8";
    else if (fIEVersion === 9) return "IE9";
    else if (fIEVersion === 10) return "IE10";
    else return "IE7以下";
  }
  if (isIE11) return "IE11";
  if (isEdge) return "Edge";
  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
};

const passwordRules = [
  /\d/, // 包含数字
  /[a-z]/, // 包含小写字母
  /[A-Z]/, // 包含大写字母
  /[!@#$%^&*.\-_]/ // 包含特殊字符
];
/**
 * 检测密码强度
 * @param {string} - password 需要检测密码
 * @returns {number}
 */
export const checkPasswordLevel = function (password) {
  let level = 0;
  if (password.length < 6) {
    return level;
  }
  for (let i = 0; i < passwordRules.length; i++) {
    if (passwordRules[i].test(password)) {
      level++;
    }
  }
  return level;
};

const regExpMap = {
  phone: /^1[3456789]\d{9}$/,
  tel: /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/,
  card: /(^\d{15}$)|(^\d{17}(\d|X|x)$)/,
  pwd: /^[a-zA-Z\d_]{6,16}$/,
  postal: /^[1-9]\d{5}$/,
  QQ: /^[1-9][0-9]{4,}$/,
  email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  money: /^\d+(\.\d{1,2})?$/,
  URL: /^((https?|ftp|file):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
  IP: /^((\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])$/,
  date: /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}:\d{2})?$/,
  number: /^[0-9]*$/,
  english: /^[a-zA-Z]+$/,
  chinese: /^[\u4E00-\u9FA5]+$/,
  lower: /^[a-z]+$/,
  upper: /^[A-Z]+$/,
  HTML: /<("[^"]*"|'[^']*'|[^'">])*>/
};
/**
 * 检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确
 * @param {string} str - 检查的字符串
 * @param {string} type - 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english, chinese, lower, upper, HTML
 * @returns {boolean}
 */
export const checkFormat = function (str, type) {
  if (typeof str !== 'string') return false;
  const regExp = regExpMap[type];
  if (!regExp) {
    return false;
  }
  return regExp.test(str);
};

/**
 * 判断当前页面是否处于全屏状态
 * @returns {boolean} 是否处于全屏状态
 * @version 1.1.0-beta.15
 */
export const isFullScreen = function () {
  return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
};
