/**
 * 判断是否字符串
 * @param o {any}
 * @returns {boolean}
 */
export const isString = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
};

/**
 * 判断是否数字
 * @param o {any}
 * @returns {boolean}
 */
export const isNumber = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

/**
 * 判断是否 boolean
 * @param o {any}
 * @returns {boolean}
 */
export const isBoolean = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/**
 * 判断是否函数 {any}
 * @param o
 * @returns {boolean}
 */
export const isFunction = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/**
 * 判断是否为 null
 * @param o {any}
 * @returns {boolean}
 */
export const isNull = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/**
 * 判断是否 undefined
 * @param o {any}
 * @returns {boolean}
 */
export const isUndefined = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/**
 * 判断是否对象
 * @param o {any}
 * @returns {boolean}
 */
export const isObject = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

/**
 * 判断是否数组
 * @param o {any}
 * @returns {boolean}
 */
export const isArray = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/**
 * 判断是否时间
 * @param o {any}
 * @returns {boolean}
 */
export const isDate = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/**
 * 判断是否正则
 * @param o {any}
 * @returns {boolean}
 */
export const isRegExp = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/**
 * 判断是否错误对象
 * @param o {any}
 * @returns {boolean}
 */
export const isError = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/**
 * 判断是否 Symbol 函数
 * @param o {any}
 * @returns {boolean}
 */
export const isSymbol = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/**
 * 判断是否 Promise 对象
 * @param o {any}
 * @returns {boolean}
 */
export const isPromise = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/**
 * 判断是否 Set 对象
 * @param o {any}
 * @returns {boolean}
 */
export const isSet = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

/**
 * 判断是否为 false
 * @param o {any}
 * @returns {boolean}
 */
export const isFalse = function (o) {
  if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
  return false
}

/**
 * 判断是否为 true
 * @param o {any}
 * @returns {boolean}
 */
export const isTrue = function (o) {
  return !this.isFalse(o)
}

/**
 * 判断当前环境是否为ios苹果手机
 * @returns {boolean}
 */
export const isIos = function () {
  let u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    // return "Android";
    return false
  } else if (u.indexOf('iPhone') > -1) {//苹果手机
    // return "iPhone";
    return true
  } else if (u.indexOf('iPad') > -1) {//iPad
    // return "iPad";
    return false
  } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    // return "Windows Phone";
    return false
  } else {
    return false
  }
}

/**
 * 获取当前属于哪种类型手机运行环境
 * @returns {string|boolean}
 */
export const getMobileEnv = function () {
  let u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    //安卓手机
    return "Android";
  } else if (u.indexOf("iPhone") > -1) {
    //苹果手机
    return "iPhone";
  } else if (u.indexOf("iPad") > -1) {
    //iPad
    return "iPad";
  } else if (u.indexOf('Windows Phone') > -1) {
    //winphone手机
    return "Windows Phone";
  } else {
    return false;
  }
};

/**
 * 判断当前环境是否为 PC 端
 * @returns {boolean}
 */
export const isPC = function () {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = true;
  for (let i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * 获取浏览器类型
 * @returns {string}
 */
export const getBrowserType = function () {
  let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
  let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
  let isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  let isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
  let isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) return "IE7"
    else if (fIEVersion === 8) return "IE8";
    else if (fIEVersion === 9) return "IE9";
    else if (fIEVersion === 10) return "IE10";
    else return "IE7以下"//IE版本过低
  }
  if (isIE11) return 'IE11';
  if (isEdge) return "Edge";
  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
}

/**
 * 检测密码强度
 * @param str {string}
 * @returns {number}
 */
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

/**
 * 检查手机号码，手机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，大写，小写，HTML标记格式是否正确
 * @param str {string}
 * @param type {string} 类型
 * @returns {boolean}
 */
export const verifyFormatIsCorrect = function (str, type) {
  switch (type) {
    case 'phone':   //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel':     //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card':    //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal':  //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ':      //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email':   //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money':   //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'URL':     //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    case 'IP':      //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date':    //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
    case 'number':  //数字
      return /^[0-9]$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower':   //小写
      return /^[a-z]+$/.test(str);
    case 'upper':   //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML':    //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
}

/**
 * 严格的身份证校验
 * @param sId {string}
 * @returns {boolean}
 */
export const isCardID = function (sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    alert('你输入的身份证长度或格式错误')
    return false
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
    91: "国外"
  };
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    alert('你的身份证地区非法')
    return false
  }

  // 出生日期验证
  let sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
    d = new Date(sBirthday)
  if (sBirthday !== (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
    alert('身份证上的出生日期非法')
    return false
  }

  // 身份证号码校验
  let sum = 0,
    weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
    codes = "10X98765432"
  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  let last = codes[sum % 11]; //计算出来的最后一位身份证号码
  if (sId[sId.length - 1] !== last) {
    alert('你输入的身份证号非法')
    return false
  }

  return true
}

