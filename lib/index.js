(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_jtk"] = factory();
	else
		root["_jtk"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ dom_$),
  "addClass": () => (/* reexport */ addClass),
  "addFavorite": () => (/* reexport */ addFavorite),
  "ajax": () => (/* reexport */ ajax),
  "appendScript": () => (/* reexport */ appendScript),
  "arrAverage": () => (/* reexport */ arrAverage),
  "arrContains": () => (/* reexport */ arrContains),
  "arrEleCount": () => (/* reexport */ arrEleCount),
  "arrIntersect": () => (/* reexport */ arrIntersect),
  "arrMax": () => (/* reexport */ arrMax),
  "arrMerge": () => (/* reexport */ arrMerge),
  "arrMin": () => (/* reexport */ arrMin),
  "arrRemoveEle": () => (/* reexport */ arrRemoveEle),
  "arrRemoveRepeat": () => (/* reexport */ arrRemoveRepeat),
  "arrSum": () => (/* reexport */ arrSum),
  "base64_decode": () => (/* reexport */ base64_decode),
  "changeToChinese": () => (/* reexport */ changeToChinese),
  "checkPwdLv": () => (/* reexport */ checkPwdLv),
  "clearLocal": () => (/* reexport */ clearLocal),
  "clearSession": () => (/* reexport */ clearSession),
  "createCode": () => (/* reexport */ createCode),
  "domToStirng": () => (/* reexport */ domToStirng),
  "downloadFile": () => (/* reexport */ downloadFile),
  "elInsertAfter": () => (/* reexport */ elInsertAfter),
  "escapeHTML": () => (/* reexport */ escapeHTML),
  "fetch": () => (/* reexport */ fetch),
  "filterOfTreeData": () => (/* reexport */ filterOfTreeData),
  "findEleTurnSymDelStrByOArr": () => (/* reexport */ findEleTurnSymDelStrByOArr),
  "formatDate": () => (/* reexport */ formatDate),
  "formatHMS": () => (/* reexport */ formatHMS),
  "getBeforeDate": () => (/* reexport */ getBeforeDate),
  "getBlobType": () => (/* reexport */ getBlobType),
  "getBrowserType": () => (/* reexport */ getBrowserType),
  "getByStyle": () => (/* reexport */ getByStyle),
  "getCookie": () => (/* reexport */ getCookie),
  "getDayOfYear": () => (/* reexport */ getDayOfYear),
  "getDayOfYearWeek": () => (/* reexport */ getDayOfYearWeek),
  "getDays": () => (/* reexport */ getDays),
  "getFirstDayOfYear": () => (/* reexport */ getFirstDayOfYear),
  "getLastDayOfYear": () => (/* reexport */ getLastDayOfYear),
  "getLocal": () => (/* reexport */ getLocal),
  "getMobileEnv": () => (/* reexport */ getMobileEnv),
  "getMonthEndDate": () => (/* reexport */ getMonthEndDate),
  "getMonthOfDay": () => (/* reexport */ getMonthOfDay),
  "getMonthStartDate": () => (/* reexport */ getMonthStartDate),
  "getMonths": () => (/* reexport */ getMonths),
  "getQuarterEndDate": () => (/* reexport */ getQuarterEndDate),
  "getQuarterStartDate": () => (/* reexport */ getQuarterStartDate),
  "getQuarterStartMonth": () => (/* reexport */ getQuarterStartMonth),
  "getRandomColor": () => (/* reexport */ getRandomColor),
  "getScrollPosition": () => (/* reexport */ getScrollPosition),
  "getSession": () => (/* reexport */ getSession),
  "getTimeSlot": () => (/* reexport */ getTimeSlot),
  "getWeekEndDate": () => (/* reexport */ getWeekEndDate),
  "getWeekStartDate": () => (/* reexport */ getWeekStartDate),
  "getYearEndDate": () => (/* reexport */ getYearEndDate),
  "getYearOfDay": () => (/* reexport */ getYearOfDay),
  "getYearStartDate": () => (/* reexport */ getYearStartDate),
  "hasClass": () => (/* reexport */ hasClass),
  "insertAtCursor": () => (/* reexport */ insertAtCursor),
  "isArray": () => (/* reexport */ isArray),
  "isBoolean": () => (/* reexport */ isBoolean),
  "isCardID": () => (/* reexport */ isCardID),
  "isDate": () => (/* reexport */ isDate),
  "isError": () => (/* reexport */ isError),
  "isFalse": () => (/* reexport */ isFalse),
  "isFunction": () => (/* reexport */ isFunction),
  "isIos": () => (/* reexport */ isIos),
  "isNull": () => (/* reexport */ isNull),
  "isNumber": () => (/* reexport */ isNumber),
  "isObject": () => (/* reexport */ isObject),
  "isPC": () => (/* reexport */ isPC),
  "isPromise": () => (/* reexport */ isPromise),
  "isRegExp": () => (/* reexport */ isRegExp),
  "isSet": () => (/* reexport */ isSet),
  "isString": () => (/* reexport */ isString),
  "isSymbol": () => (/* reexport */ isSymbol),
  "isTrue": () => (/* reexport */ isTrue),
  "isUndefined": () => (/* reexport */ isUndefined),
  "loadAudio": () => (/* reexport */ loadAudio),
  "numberToChinese": () => (/* reexport */ numberToChinese),
  "oArrFindEle": () => (/* reexport */ oArrFindEle),
  "oArrRemoveRepeat": () => (/* reexport */ oArrRemoveRepeat),
  "randomNum": () => (/* reexport */ randomNum),
  "removeClass": () => (/* reexport */ removeClass),
  "removeCookie": () => (/* reexport */ removeCookie),
  "removeLocal": () => (/* reexport */ removeLocal),
  "removeSession": () => (/* reexport */ removeSession),
  "replaceClass": () => (/* reexport */ replaceClass),
  "resizeFont": () => (/* reexport */ resizeFont),
  "scrollToTop": () => (/* reexport */ scrollToTop),
  "setCookie": () => (/* reexport */ setCookie),
  "setCursorPosition": () => (/* reexport */ setCursorPosition),
  "setLocal": () => (/* reexport */ setLocal),
  "setSession": () => (/* reexport */ setSession),
  "siblings": () => (/* reexport */ siblings),
  "smoothScroll": () => (/* reexport */ smoothScroll),
  "strEnChangeCase": () => (/* reexport */ strEnChangeCase),
  "strFilterHtmlTag": () => (/* reexport */ strFilterHtmlTag),
  "strHideCode": () => (/* reexport */ strHideCode),
  "strTrim": () => (/* reexport */ strTrim),
  "stringToDom": () => (/* reexport */ stringToDom),
  "thousandSeparator": () => (/* reexport */ thousandSeparator),
  "utf8_decode": () => (/* reexport */ utf8_decode),
  "verifyFormatIsCorrect": () => (/* reexport */ verifyFormatIsCorrect)
});

;// CONCATENATED MODULE: ./src/utils/string.js
/**
 * 字符串脱敏
 * @param str {string} str 需要脱敏字符串
 * @param startLoc {number} startLoc 脱敏起始位置
 * @param endLoc {number} endLoc 脱敏结束位置
 * @returns {string} 已脱敏字符串 / ''
 */
var strHideCode = function strHideCode(str, startLoc, endLoc) {
  if (str) {
    var len = str.length;
    var leftStr = str.substring(0, startLoc);
    var rightStr = str.substring(endLoc, len);
    var new_str = '';

    try {
      for (var i = 0; i < endLoc - startLoc; i++) {
        new_str = new_str + '*';
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
 * @param type {number} 类型, 1:所有空格  2:前后空格 (default)  3:前空格 4:后空格
 * @returns {*} 已去除的字符串
 */

var strTrim = function strTrim(str) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

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
 * @param type {number} 类型, 1:首字母大写 (default) 2:首页母小写  3:大小写转换  4:全部大写  5:全部小写
 * @returns {string|*}  已转换的英文字符串
 */

var strEnChangeCase = function strEnChangeCase(str) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

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
          return word.toLowerCase();
        }
      }).join('');

    case 4:
      return str.toUpperCase();

    case 5:
      return str.toLowerCase();

    default:
      return str;
  }
};
/**
 * 过滤 html代码(把 <> 转换)
 * @param str {string}
 * @returns {*}
 */

var strFilterHtmlTag = function strFilterHtmlTag(str) {
  str = str.replace(/&/ig, "&amp;");
  str = str.replace(/</ig, "&lt;");
  str = str.replace(/>/ig, "&gt;");
  str = str.replace(" ", " ");
  return str;
};
/**
 * 生成随机码（创建随机验证码）
 * @param length 随机码长度
 * @param checkCode {string|number} 当前随机码（防止重复）
 * @returns {string}
 */

function createCode(length, checkCode) {
  var code = "";
  var codeLength = parseInt(length);
  var codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 循环组成验证码的字符串

  for (var i = 0; i < codeLength; i++) {
    // 获取随机验证码下标
    var charNum = Math.floor(Math.random() * codeChars.length); // 组合成指定字符验证码

    code += codeChars[charNum];
  }

  if (checkCode && checkCode === code) {
    createCode(length, checkCode);
  } else {
    return code;
  }
}
;// CONCATENATED MODULE: ./src/utils/number.js
/**
 * 根据区间，获取随机整数(包含最大值)
 * @param min {number} min 最小值 default 0
 * @param max {number} max 最大值 default 1
 * @returns {number}
 */
var randomNum = function randomNum() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var random = Math.floor(min + Math.random() * (max + 1 - min));
  return random;
};
/**
 * 将阿拉伯数字翻译成中文的大写数字
 * @param num
 * @returns {string}
 */

var numberToChinese = function numberToChinese(num) {
  var AA = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  var BB = ["", "十", "百", "仟", "萬", "億", "点", ""];
  var a = ("" + num).replace(/(^0*)/g, "").split("."),
      k = 0,
      re = "";

  for (var _i = a[0].length - 1; _i >= 0; _i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;

      case 4:
        if (!new RegExp("0{4}//d{" + (a[0].length - _i - 1) + "}$").test(a[0])) re = BB[4] + re;
        break;

      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }

    if (k % 4 === 2 && a[0].charAt(_i + 2) !== 0 && a[0].charAt(_i + 1) === 0) re = AA[0] + re;
    if (a[0].charAt(_i) !== 0) re = AA[a[0].charAt(_i)] + BB[k % 4] + re;
    k++;
  }

  if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
      re += BB[6];

      for (var i = 0; i < a[1].length; i++) {
        re += AA[a[1].charAt(i)];
      }
    }

  if (re == '一十') re = "十";
  if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
  return re;
};
/**
 * 将数字转换为大写金额
 * @param Num
 * @returns {string}
 */

var changeToChinese = function changeToChinese(Num) {
  //判断如果传递进来的不是字符的话转换为字符
  if (typeof Num == "number") {
    Num = String(Num);
  }

  Num = Num.replace(/,/g, ""); //替换tomoney()中的“,”

  Num = Num.replace(/ /g, ""); //替换tomoney()中的空格

  Num = Num.replace(/￥/g, ""); //替换掉可能出现的￥字符

  if (isNaN(Num)) {
    //验证输入的字符是否为数字
    return "";
  } //字符处理完毕后开始转换，采用前后两部分分别转换


  var part = String(Num).split(".");
  var newchar = ""; //小数点前进行转化

  for (var i = part[0].length - 1; i >= 0; i--) {
    if (part[0].length > 10) {
      return ""; //若数量超过拾亿单位，提示
    }

    var tmpnewchar = "";
    var perchar = part[0].charAt(i);

    switch (perchar) {
      case "0":
        tmpnewchar = "零" + tmpnewchar;
        break;

      case "1":
        tmpnewchar = "壹" + tmpnewchar;
        break;

      case "2":
        tmpnewchar = "贰" + tmpnewchar;
        break;

      case "3":
        tmpnewchar = "叁" + tmpnewchar;
        break;

      case "4":
        tmpnewchar = "肆" + tmpnewchar;
        break;

      case "5":
        tmpnewchar = "伍" + tmpnewchar;
        break;

      case "6":
        tmpnewchar = "陆" + tmpnewchar;
        break;

      case "7":
        tmpnewchar = "柒" + tmpnewchar;
        break;

      case "8":
        tmpnewchar = "捌" + tmpnewchar;
        break;

      case "9":
        tmpnewchar = "玖" + tmpnewchar;
        break;
    }

    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + "元";
        break;

      case 1:
        if (perchar !== 0) tmpnewchar = tmpnewchar + "拾";
        break;

      case 2:
        if (perchar !== 0) tmpnewchar = tmpnewchar + "佰";
        break;

      case 3:
        if (perchar !== 0) tmpnewchar = tmpnewchar + "仟";
        break;

      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;

      case 5:
        if (perchar !== 0) tmpnewchar = tmpnewchar + "拾";
        break;

      case 6:
        if (perchar !== 0) tmpnewchar = tmpnewchar + "佰";
        break;

      case 7:
        if (perchar !== 0) tmpnewchar = tmpnewchar + "仟";
        break;

      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;

      case 9:
        tmpnewchar = tmpnewchar + "拾";
        break;
    }

    newchar = tmpnewchar + newchar;
  } //小数点之后进行转化


  if (Num.indexOf(".") !== -1) {
    if (part[1].length > 2) {
      part[1] = part[1].substr(0, 2);
    }

    for (var _i2 = 0; _i2 < part[1].length; _i2++) {
      var _tmpnewchar = "";

      var _perchar = part[1].charAt(_i2);

      switch (_perchar) {
        case "0":
          _tmpnewchar = "零" + _tmpnewchar;
          break;

        case "1":
          _tmpnewchar = "壹" + _tmpnewchar;
          break;

        case "2":
          _tmpnewchar = "贰" + _tmpnewchar;
          break;

        case "3":
          _tmpnewchar = "叁" + _tmpnewchar;
          break;

        case "4":
          _tmpnewchar = "肆" + _tmpnewchar;
          break;

        case "5":
          _tmpnewchar = "伍" + _tmpnewchar;
          break;

        case "6":
          _tmpnewchar = "陆" + _tmpnewchar;
          break;

        case "7":
          _tmpnewchar = "柒" + _tmpnewchar;
          break;

        case "8":
          _tmpnewchar = "捌" + _tmpnewchar;
          break;

        case "9":
          _tmpnewchar = "玖" + _tmpnewchar;
          break;
      }

      if (_i2 === 0) _tmpnewchar = _tmpnewchar + "角";
      if (_i2 === 1) _tmpnewchar = _tmpnewchar + "分";
      newchar = newchar + _tmpnewchar;
    }
  } //替换所有无用汉字


  while (newchar.search("零零") != -1) {
    newchar = newchar.replace("零零", "零");
  }

  newchar = newchar.replace("零亿", "亿");
  newchar = newchar.replace("亿万", "亿");
  newchar = newchar.replace("零万", "万");
  newchar = newchar.replace("零元", "元");
  newchar = newchar.replace("零角", "");
  newchar = newchar.replace("零分", "");

  if (newchar.charAt(newchar.length - 1) == "元") {
    newchar = newchar + "整";
  }

  return newchar;
};
/**
 * @desc 数字千分位分割
 * @param num
 * @returns {*|string}
 */

function thousandSeparator(num) {
  return num && (num.toString().indexOf('.') !== -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
    return $2 + ",";
  }) : num.toString().replace(/(\d)(?=(\d{3})+\b)/g, function ($1, $2) {
    return $2 + ",";
  }));
}
;// CONCATENATED MODULE: ./src/utils/arr.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
  oArr：表示 Object[]类型数组 例如：[{name:"xxx"}]
  arr： 表示普通数组 例如：[1,2]
*/

/**
 * 查找对象数组是否存在某元素 返回 -1或下标，可使用 findIndex() 代替
 * @param arr {Array<Object>}
 * @param attrName {string} 查找的元素属性名
 * @param attrVal {*} 查找的元素属性的值
 * @returns {number} 1或下标
 */
var oArrFindEle = function oArrFindEle(arr, attrName, attrVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][attrName] === attrVal) {
      return i;
    }
  }

  return -1;
};
/**
 * 对象数组去重
 * @param arr {Array<Object>}
 * @param attrName {string} 需要匹配去重的对象里属性名
 * @returns {*}
 */

var oArrRemoveRepeat = function oArrRemoveRepeat(arr, attrName) {
  var hash = {};
  return arr.reduce(function (item, next) {
    hash[next[attrName]] ? '' : hash[next[attrName]] =  true && item.push(next);
    return item;
  }, []);
};
/**
 * 对象数组根据指定属性名称值返回逗号隔开字符串
 * @param arr {Object[]}
 * @param attrName {string}
 * @param sym {string}  符号 默认 ','
 * @returns {string}
 */

var findEleTurnSymDelStrByOArr = function findEleTurnSymDelStrByOArr(arr, attrName) {
  var sym = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
  var newArr = arr.map(function (item) {
    return item[attrName];
  });
  return newArr.join(sym);
};
/**
 * 数组去重
 * @param arr {any[]} 数组
 * @returns {any[]|*[]|*}
 */

var arrRemoveRepeat = function arrRemoveRepeat(arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    var r = [],
        NaNBol = true;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i]) {
        if (NaNBol && r.indexOf(arr[i]) === -1) {
          r.push(arr[i]);
          NaNBol = false;
        }
      } else {
        if (r.indexOf(arr[i]) === -1) r.push(arr[i]);
      }
    }

    return r;
  }
};
/**
 * 数组合并，求两个数组(集合)的并集
 * @param a {any[]}
 * @param b {any[]}
 * @returns {*[]|*}
 */

var arrMerge = function arrMerge(a, b) {
  var newArr = a.concat(b);
  return this.arrRemoveRepeat(newArr);
};
/**
 * 判断一个元素是否在数组中
 * @param arr {any[]}
 * @param val {any}
 * @returns {boolean}
 */

var arrContains = function arrContains(arr, val) {
  return arr.includes(val) != -1 ? true : false;
};
/**
 * 获取两个数组相同元素，求两个数组(集合)的交集
 * @param a {any[]}
 * @param b {any[]}
 * @returns {*}
 */

var arrIntersect = function arrIntersect(a, b) {
  var _this = this;

  a = this.arrRemoveRepeat(a);
  return this.map(a, function (o) {
    return _this.arrContains(b, o) ? o : null;
  });
};
/**
 * 删除数组其中一个元素
 * @param arr {Array<any>}
 * @param ele {number}
 * @returns {*}
 */

var arrRemoveEle = function arrRemoveEle(arr, ele) {
  var index = arr.indexOf(ele);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
};
/**
 * 获取数组中最大值
 * @param arr {number[]}
 * @returns {number}
 */

var arrMax = function arrMax(arr) {
  //1.
  // return Math.max(...arr)
  //2.
  // return Math.max.apply(this,arr)
  return Math.max.apply(null, arr); //3.prev:上一次的返回值 cur:当前值 curIndex:当前值索引 arr:当前数组
  // return arr.reduce((prev, cur, curIndex, arr) => {
  //   return Math.max(prev, cur);
  // }, 0)
};
/**
 * 获取数组中取最小值
 * @param arr {number[]}
 * @returns {number}
 */

var arrMin = function arrMin(arr) {
  return Math.min.apply(null, arr);
};
/**
 * 数组求和
 * @param arr {number[]}
 * @returns {number}
 */

var arrSum = function arrSum(arr) {
  return arr.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);
};
/**
 * 求数组中数值平均值
 * @param arr {number[]}
 * @returns {number}
 */

var arrAverage = function arrAverage(arr) {
  return this.arrSum(arr) / arr.length;
};
/*
 * @desc 数组/数组对象排序
 *
 * 标准简单sort排序 arr/arrayObject.sort(sortby)  sortby必须是函数。
 * arr.sort((a,b)=>{
    return a-b
  });
 * */

/*
 * @desc 每一项是否满足条件
 * @params {Array} arr 数组
 * @return {Boolean} true of false
 * [1,2,3].every(item=>{return item>2})
 * */

/*
 * @desc 有一项满足条件
 * @param {Array} arr 数组
 * @return {Boolean} true of false
 *   [1,2,3].some(item=>{return item>2})
 * */

/**
 * 数组检测数值出现次数
 * @param arr {any[]}
 * @param val {any}
 * @returns {number}
 */

var arrEleCount = function arrEleCount(arr, val) {
  return arr.reduce(function (a, v) {
    return v === val ? a + 1 : a;
  }, 0);
};
/**
 * 树形数据过滤
 * @param data
 * @param keywords
 * @returns {*[]}
 */

var filterOfTreeData = function filterOfTreeData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keywords = arguments.length > 1 ? arguments[1] : undefined;
  var arr = [];
  data.forEach(function (item) {
    if (item["children"] && item["children"].length) {
      var children = filterOfTreeData(item["children"]);

      var obj = _objectSpread(_objectSpread({}, item), {}, {
        children: children
      });

      if (children && children.length) {
        arr.push(obj);
      } else if (item.name.indexOf(keywords) > -1) {
        arr.push(_objectSpread({}, item));
      }
    } else {
      if (item.name.indexOf(keywords) > -1) {
        arr.push(item);
      }
    }
  });
  return arr;
};
;// CONCATENATED MODULE: ./src/utils/date.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * 格式化日期
 * @param time {Date|string|number}  时间
 * @param format {string}  格式
 * @returns {string} 格式 'Y-M-D h:m:s' (default)
 * @examples formatTime('2018-1-29', 'Y/M/D h:m:s') // -> 2018/01/29 00:00:00
 */
var formatDate = function formatDate(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Y-M-D h:m:s';

  if (arguments.length === 0 || !time) {
    return null;
  }

  var date;

  if (_typeof(time) === 'object') {
    date = time;
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/');
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }

    date = new Date(time);
  }

  var formatObj = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  };
  var time_str = format.replace(/([YMDhmsw])+/g, function (result, key) {
    var value = formatObj[key]; // Note: getDay() returns 0 on Sunday

    if (key === 'w') {
      return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][value];
    }

    return value.toString().padStart(2, '0'); //M、D、h、m、s不足2位补0
  });
  return time_str;
};
/**
 * 获取时间间隔
 * @param step 间隔 单位分钟
 * @returns {*[]} 数组
 */

var getTimeSlot = function getTimeSlot(step) {
  //  step = 间隔的分钟
  var date = new Date();
  date.setHours(0); // 时分秒设置从零点开始

  date.setSeconds(0);
  date.setUTCMinutes(0);
  var arr = [],
      timeArr = [];
  var slotNum = 24 * 60 / step; // 算出多少个间隔

  for (var f = 0; f < slotNum; f++) {
    //  stepM * f = 24H*60M
    // arr.push(new Date(Number(date.getTime()) + Number(step*60*1000*f)))   //  标准时间数组
    var time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f)); // 获取：零点的时间 + 每次递增的时间

    var hour = '',
        sec = '';
    time.getHours() < 10 ? hour = '0' + time.getHours() : hour = time.getHours(); // 获取小时

    time.getMinutes() < 10 ? sec = '0' + time.getMinutes() : sec = time.getMinutes(); // 获取分钟

    timeArr.push(hour + ':' + sec);
  }

  return timeArr;
};
/**
 * 秒 转 时分秒
 * @param s {number} 秒数
 * @returns {string}
 * @examples formatHMS(3610) // -> 1h0m10s
 */

var formatHMS = function formatHMS(s) {
  var str = '';

  if (s > 3600) {
    str = Math.floor(s / 3600) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's';
  } else if (s > 60) {
    str = Math.floor(s / 60) + 'm' + s % 60 + 's';
  } else {
    str = s % 60 + 's';
  }

  return str;
};
/**
 * 返回指定长度的天数集合
 * @param time {Date|string} 时间
 * @param len {number} 长度
 * @param dir  向：1: 前几天;  2: 后几天;  3:前后几天 (default)
 * @returns {*[]|string[]}
 */

var getDays = function getDays(time, len, dir) {
  var tt = new Date(time),
      getDay = function getDay(day) {
    var t = new Date(time);
    t.setDate(t.getDate() + day);
    var m = t.getMonth() + 1;
    return t.getFullYear() + '-' + m + '-' + t.getDate();
  },
      arr = [];

  if (dir === 1) {
    for (var i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
  } else if (dir === 2) {
    for (var _i = 1; _i <= len; _i++) {
      arr.push(getDay(_i));
    }
  } else {
    for (var _i2 = 1; _i2 <= len; _i2++) {
      arr.unshift(getDay(-_i2));
    }

    arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate());

    for (var _i3 = 1; _i3 <= len; _i3++) {
      arr.push(getDay(_i3));
    }
  }

  return dir === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) : dir === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr;
};
/**
 * 获得某月的天数
 * @param year {number} 年份
 * @param month {number} 月份
 * @returns {number} 天数
 */

var getMonthOfDay = function getMonthOfDay(year, month) {
  var day;

  if (year && month) {
    day = new Date(year, month, 0); // 0 上个月的最后一天
  } else {
    day = new Date();
  }

  return day.getDate();
};
/**
 * 获取某年有多少天
 * @param time {Date|String} 时间
 * @returns {number}
 */

var getYearOfDay = function getYearOfDay(time) {
  var firstDayYear = this.getFirstDayOfYear(time);
  var lastDayYear = this.getLastDayOfYear(time);
  var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
};
/**
 * 返回指定长度的月份集合
 * @param time {Date|string|number} 时间
 * @param len {number}  长度
 * @param dir {number}  1: 前几个月;  2: 后几个月;  3:前后几个月 (default)
 * @returns {string[]|[]|any[]|*[]}
 * @examples   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
 */

var getMonths = function getMonths(time, len, dir) {
  var mm = new Date(time).getMonth(),
      yy = new Date(time).getFullYear(),
      direction = isNaN(dir) ? 3 : dir,
      index = mm;

  var cutMonth = function cutMonth(index) {
    if (index <= len && index >= -len) {
      return direction === 1 ? formatPre(index).concat(cutMonth(++index)) : direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index));
    }

    return [];
  };

  var formatNext = function formatNext(i) {
    var y = Math.floor(i / 12),
        m = i % 12;
    return [yy + y + '-' + (m + 1)];
  };

  var formatPre = function formatPre(i) {
    var y = Math.ceil(i / 12),
        m = i % 12;
    m = m === 0 ? 12 : m;
    return [yy - y + '-' + (13 - m)];
  };

  var formatCurr = function formatCurr(i) {
    var y = Math.floor(i / 12),
        yNext = Math.ceil(i / 12),
        m = i % 12,
        mNext = m === 0 ? 12 : m;
    return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)];
  }; // 数组去重


  var unique = function unique(arr) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr));
    } else {
      var n = {},
          r = [];

      for (var i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }

      return r;
    }
  };

  return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) {
    return new Date(t1).getTime() - new Date(t2).getTime();
  }));
};
/**
 * 获得本季度的开始月份
 * @returns {number}
 */

var getQuarterStartMonth = function getQuarterStartMonth() {
  var nowDate = new Date(); //当前日期

  var nowMonth = nowDate.getMonth(); //当前月

  var quarterStartMonth = 0;

  if (nowMonth < 3) {
    quarterStartMonth = 0;
  }

  if (2 < nowMonth && nowMonth < 6) {
    quarterStartMonth = 3;
  }

  if (5 < nowMonth && nowMonth < 9) {
    quarterStartMonth = 6;
  }

  if (nowMonth > 8) {
    quarterStartMonth = 9;
  }

  return quarterStartMonth;
};
/**
 * 获取某个日期是当年中的第几天
 * @param time {Date|String} 时间
 * @returns {number}
 */

var getDayOfYear = function getDayOfYear(time) {
  var firstDayYear = this.getFirstDayOfYear(time);
  var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
};
/**
 * 获取某个日期在这一年的第几周
 * @param time {Date|String} 时间
 * @returns {number}
 */

var getDayOfYearWeek = function getDayOfYearWeek(time) {
  var numdays = this.getDayOfYear(time);
  return Math.ceil(numdays / 7);
};

var VenDate = /*#__PURE__*/function () {
  function VenDate() {
    _classCallCheck(this, VenDate);

    // let nowDate;
    // if (typeof date === "string") {
    //   nowDate = new Date(date.replaceAll("-","/"));
    // } else {
    //   nowDate = new Date();
    // }
    this.nowDate = new Date('2021-12');
    this.year = this.nowDate.getFullYear();
    this.month = this.nowDate.getMonth();
    this.day = this.nowDate.getDate();
    this.week = this.nowDate.getDay(); // 返回一周（0~6）的某一天的数字 ,星期天为 0, 星期一为 1, 以此类推
  } // 获得本周、上周、下周的开始日期


  _createClass(VenDate, [{
    key: "getWeekStartDate",
    value: function getWeekStartDate(type) {
      var nowDate = this.nowDate;
      var week = this.week === 0 ? 7 : this.week;
      var timestamp, days;

      if (type === -1) {
        days = -(7 + week - 1);
      }

      if (type === 0) {
        days = -(week - 1);
      }

      if (type === 1) {
        days = 7 - week + 1;
      }

      timestamp = 1000 * 60 * 60 * 24 * days;
      nowDate.setTime(nowDate.getTime() + timestamp);
      return formatDate(nowDate, 'Y-M-D');
    } //获得本周、上周、下周的结束日期

  }, {
    key: "getWeekEndDate",
    value: function getWeekEndDate(type) {
      var nowDate = this.nowDate;
      var week = this.week === 0 ? 7 : this.week;
      var timestamp, days;

      if (type === -1) {
        days = -week;
      }

      if (type === 0) {
        days = 7 - week;
      }

      if (type === 1) {
        days = 7 - week + 7;
      }

      timestamp = 1000 * 60 * 60 * 24 * days;
      nowDate.setTime(nowDate.getTime() + timestamp);
      return formatDate(nowDate, 'Y-M-D');
    } // 获得本月的开始日期

  }, {
    key: "getMonthStartDate",
    value: function getMonthStartDate(y, m) {
      var year, month, monthStartDate;

      if (y && m) {
        year = y;
        month = m - 1;
      } else {
        year = this.year;
        month = this.month;
      }

      monthStartDate = new Date(year, month, 1);
      return formatDate(monthStartDate, 'Y-M-D');
    } // 获得本月的结束日期

  }, {
    key: "getMonthEndDate",
    value: function getMonthEndDate(y, m) {
      var year, month, monthEndDate;

      if (y && m) {
        year = y;
        month = m - 1;
      } else {
        year = this.year;
        month = this.month;
      }

      monthEndDate = new Date(year, month, getMonthOfDay(year, month + 1));
      return formatDate(monthEndDate, 'Y-M-D');
    } // 获得本季度的开始日期

  }, {
    key: "getQuarterStartDate",
    value: function getQuarterStartDate() {
      // 季度开始月份
      var quarterStartMonth = getQuarterStartMonth();
      var date = new Date(this.year, quarterStartMonth, 1);
      return formatDate(date, "Y-M-D");
    } // 获得本季度的结束日期

  }, {
    key: "getQuarterEndDate",
    value: function getQuarterEndDate() {
      var quarterStartMonth = getQuarterStartMonth();
      var date = new Date(this.year, quarterStartMonth + 2, getMonthOfDay(this.year, this.month));
      return formatDate(date, "Y-M-D");
    } // 获得本年的开始日期

  }, {
    key: "getYearStartDate",
    value: function getYearStartDate() {
      var currentYearFirstDate = new Date(this.year, 0, 1);
      return formatDate(currentYearFirstDate, "Y-M-D");
    } // 获得本年的开始日期

  }, {
    key: "getYearEndDate",
    value: function getYearEndDate() {
      var currentYearFirstDate = new Date(this.year, 11, getMonthOfDay(this.year, 12));
      return formatDate(currentYearFirstDate, "Y-M-D");
    }
  }]);

  return VenDate;
}();
/**
 * 获得本周、上周、下周的开始日期
 * @param type {number} -1:上周  0:本周(default)  1:下周
 */


var getWeekStartDate = function getWeekStartDate() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new VenDate().getWeekStartDate(type);
};
/**
 * 获得本周、上周、下周的结束日期
 * @param type {number} -1:上周  0:本周(default)  1:下周
 */

var getWeekEndDate = function getWeekEndDate() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new VenDate().getWeekEndDate(type);
};
/**
 * 获得本月或指定月份的开始日期
 * @param y {string|number} 年
 * @param m {string|number} 月
 * @returns {string}
 */

var getMonthStartDate = function getMonthStartDate(y, m) {
  return new VenDate().getMonthStartDate(y, m);
};
/**
 * 获得本月或指定月份的结束日期
 * @param y {string|number} 年
 * @param m {string|number} 月
 * @returns {string}
 */

var getMonthEndDate = function getMonthEndDate(y, m) {
  return new VenDate().getMonthEndDate(y, m);
};
/**
 * 获得本季度的开始日期
 * @returns {*}
 */

var getQuarterStartDate = function getQuarterStartDate() {
  return new VenDate().getQuarterStartDate();
};
/**
 * 获得本季度的结束日期
 * @returns {string}
 */

var getQuarterEndDate = function getQuarterEndDate() {
  return new VenDate().getQuarterEndDate();
};
/**
 * 获得本年的开始日期
 * @returns {string}
 */

var getYearStartDate = function getYearStartDate() {
  return new VenDate().getYearStartDate();
};
/**
 * 获得本年的结束日期
 * @returns {string}
 */

var getYearEndDate = function getYearEndDate() {
  return new VenDate().getYearEndDate();
};
/**
 * 获取某年的第一天
 * @param time {Date|string}
 * @returns {string}
 */

var getFirstDayOfYear = function getFirstDayOfYear(time) {
  var year = new Date(time).getFullYear();
  return year + "-01-01 00:00:00";
};
/**
 * 获取某年最后一天
 * @param time {Date|String} 时间
 * @returns {string}
 */

var getLastDayOfYear = function getLastDayOfYear(time) {
  var year = new Date(time).getFullYear();
  var endDay = this.getMonthOfDay(year, 12);
  return year + "-12-" + endDay + " 23:59:59";
};
/**
 * 月份补零
 * @param month {string|number}
 * @returns {string}
 */

var doHandleMonth = function doHandleMonth(month) {
  var m = month;

  if (month.toString().length === 1) {
    m = "0" + month;
  }

  return m;
};
/**
 * 获取近三天、近一周、近一个月，日期
 * @param len {number}
 * @returns {string} 2022-02-22
 */


function getBeforeDate(len) {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1; //0-11表示1-12月

  var day = today.getDate();
  var monthTotalDay = new Date(year, month, 0).getDate();
  var d;

  if (day === monthTotalDay) {
    return year + "-" + month + "-01";
  }

  if (len === 30) {
    d = -(monthTotalDay - 1);
  } else {
    d = -(len - 1);
  }

  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * d;
  today.setTime(targetday_milliseconds); //注意，这行是关键代码

  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDay = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDay = doHandleMonth(tDay);
  return tYear + "-" + tMonth + "-" + tDay;
}
;// CONCATENATED MODULE: ./src/utils/inspect.js
/**
 * 判断是否字符串
 * @param o {any}
 * @returns {boolean}
 */
var isString = function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
};
/**
 * 判断是否数字
 * @param o {any}
 * @returns {boolean}
 */

var isNumber = function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
};
/**
 * 判断是否 boolean
 * @param o {any}
 * @returns {boolean}
 */

var isBoolean = function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
};
/**
 * 判断是否函数 {any}
 * @param o
 * @returns {boolean}
 */

var isFunction = function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
};
/**
 * 判断是否为 null
 * @param o {any}
 * @returns {boolean}
 */

var isNull = function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
};
/**
 * 判断是否 undefined
 * @param o {any}
 * @returns {boolean}
 */

var isUndefined = function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
};
/**
 * 判断是否对象
 * @param o {any}
 * @returns {boolean}
 */

var isObject = function isObject(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
};
/**
 * 判断是否数组
 * @param o {any}
 * @returns {boolean}
 */

var isArray = function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
};
/**
 * 判断是否时间
 * @param o {any}
 * @returns {boolean}
 */

var isDate = function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
};
/**
 * 判断是否正则
 * @param o {any}
 * @returns {boolean}
 */

var isRegExp = function isRegExp(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp';
};
/**
 * 判断是否错误对象
 * @param o {any}
 * @returns {boolean}
 */

var isError = function isError(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
};
/**
 * 判断是否 Symbol 函数
 * @param o {any}
 * @returns {boolean}
 */

var isSymbol = function isSymbol(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
};
/**
 * 判断是否 Promise 对象
 * @param o {any}
 * @returns {boolean}
 */

var isPromise = function isPromise(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
};
/**
 * 判断是否 Set 对象
 * @param o {any}
 * @returns {boolean}
 */

var isSet = function isSet(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
};
/**
 * 判断是否为 false
 * @param o {any}
 * @returns {boolean}
 */

var isFalse = function isFalse(o) {
  if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true;
  return false;
};
/**
 * 判断是否为 true
 * @param o {any}
 * @returns {boolean}
 */

var isTrue = function isTrue(o) {
  return !this.isFalse(o);
};
/**
 * 判断当前环境是否为ios苹果手机
 * @returns {boolean}
 */

var isIos = function isIos() {
  var u = navigator.userAgent;

  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    //安卓手机
    // return "Android";
    return false;
  } else if (u.indexOf('iPhone') > -1) {
    //苹果手机
    // return "iPhone";
    return true;
  } else if (u.indexOf('iPad') > -1) {
    //iPad
    // return "iPad";
    return false;
  } else if (u.indexOf('Windows Phone') > -1) {
    //winphone手机
    // return "Windows Phone";
    return false;
  } else {
    return false;
  }
};
/**
 * 获取当前属于哪种类型手机运行环境
 * @returns {string|boolean}
 */

var getMobileEnv = function getMobileEnv() {
  var u = navigator.userAgent;

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

var isPC = function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;

  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }

  return flag;
};
/**
 * 获取浏览器类型
 * @returns {string}
 */

var getBrowserType = function getBrowserType() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串

  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器

  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器

  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器

  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器

  var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器

  var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) return "IE7";else if (fIEVersion === 8) return "IE8";else if (fIEVersion === 9) return "IE9";else if (fIEVersion === 10) return "IE10";else return "IE7以下"; //IE版本过低
  }

  if (isIE11) return 'IE11';
  if (isEdge) return "Edge";
  if (isFF) return "FF";
  if (isOpera) return "Opera";
  if (isSafari) return "Safari";
  if (isChrome) return "Chrome";
};
/**
 * 检测密码强度
 * @param str {string}
 * @returns {number}
 */

var checkPwdLv = function checkPwdLv(str) {
  var Lv = 0;

  if (str.length < 6) {
    return Lv;
  }

  if (/[0-9]/.test(str)) {
    Lv++;
  }

  if (/[a-z]/.test(str)) {
    Lv++;
  }

  if (/[A-Z]/.test(str)) {
    Lv++;
  }

  if (/[\.|-|_]/.test(str)) {
    Lv++;
  }

  return Lv;
};
/**
 * 检查手机号码，手机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，大写，小写，HTML标记格式是否正确
 * @param str {string}
 * @param type {string} 类型
 * @returns {boolean}
 */

var verifyFormatIsCorrect = function verifyFormatIsCorrect(str, type) {
  switch (type) {
    case 'phone':
      //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);

    case 'tel':
      //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);

    case 'card':
      //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);

    case 'pwd':
      //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);

    case 'postal':
      //邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);

    case 'QQ':
      //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);

    case 'email':
      //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);

    case 'money':
      //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);

    case 'URL':
      //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);

    case 'IP':
      //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);

    case 'date':
      //日期时间
      return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);

    case 'number':
      //数字
      return /^[0-9]$/.test(str);

    case 'english':
      //英文
      return /^[a-zA-Z]+$/.test(str);

    case 'chinese':
      //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);

    case 'lower':
      //小写
      return /^[a-z]+$/.test(str);

    case 'upper':
      //大写
      return /^[A-Z]+$/.test(str);

    case 'HTML':
      //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);

    default:
      return true;
  }
};
/**
 * 严格的身份证校验
 * @param sId {string}
 * @returns {boolean}
 */

var isCardID = function isCardID(sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    alert('你输入的身份证长度或格式错误');
    return false;
  } //身份证城市


  var aCity = {
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
    alert('你的身份证地区非法');
    return false;
  } // 出生日期验证


  var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
      d = new Date(sBirthday);

  if (sBirthday !== d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) {
    alert('身份证上的出生日期非法');
    return false;
  } // 身份证号码校验


  var sum = 0,
      weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
      codes = "10X98765432";

  for (var i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }

  var last = codes[sum % 11]; //计算出来的最后一位身份证号码

  if (sId[sId.length - 1] !== last) {
    alert('你输入的身份证号非法');
    return false;
  }

  return true;
};
;// CONCATENATED MODULE: ./src/utils/dom.js
/**
 *
 * @param selector {string}
 * @returns {HTMLElement|NodeListOf<*>|HTMLCollectionOf<Element>|*}
 */
var dom_$ = function $(selector) {
  var type = selector.substring(0, 1);

  if (type === '#') {
    if (document.querySelecotor) return document.querySelector(selector);
    return document.getElementById(selector.substring(1));
  } else if (type === '.') {
    if (document.querySelecotorAll) return document.querySelectorAll(selector);
    return document.getElementsByClassName(selector.substring(1));
  } else {
    return document[ true ? 'querySelectorAll' : 0](selector);
  }
};
/**
 * 检测类名 校验指定元素的类名
 * @param ele {Dom}
 * @param name {string}
 * @returns {RegExpMatchArray}
 */

var hasClass = function hasClass(ele, name) {
  // return ele.classList.contains(name);
  return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
};
/**
 * 添加类名
 * @param ele {Dom}
 * @param name {string}
 */

var addClass = function addClass(ele, name) {
  if (!this.hasClass(ele, name)) ele.className += " " + name;
};
/**
 * 删除类名
 * @param ele {Dom}
 * @param name {string}
 */

var removeClass = function removeClass(ele, name) {
  if (this.hasClass(ele, name)) {
    var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
    ele.className = ele.className.replace(reg, '');
  }
};
/**
 * 替换类名
 * @param ele {Dom}
 * @param newName {string}
 * @param oldName {string}
 */

var replaceClass = function replaceClass(ele, newName, oldName) {
  this.removeClass(ele, oldName);
  this.addClass(ele, newName);
};
/**
 * 获取兄弟节点
 * @param ele {Dom}
 * @returns {*[]}
 */

var siblings = function siblings(ele) {
  var chid = ele.parentNode.children,
      eleMatch = [];

  for (var i = 0, len = chid.length; i < len; i++) {
    if (chid[i] !== ele) {
      eleMatch.push(chid[i]);
    }
  }

  return eleMatch;
};
/**
 * 获取行间样式属性
 * @param obj {}
 * @param name
 * @returns {*}
 */

var getByStyle = function getByStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, false)[name];
  }
};
/**
 * 在指定元素之后插入新元素
 * @param el {Dom}
 * @param htmlString {string} 插入元素
 */

var elInsertAfter = function elInsertAfter(el, htmlString) {
  return el.insertAdjacentHTML('afterend', htmlString);
};
/**
 * 在指定元素之前插入新元素
 * @param el {Dom} 当前元素
 * @param htmlString {string} 插入元素
 */

var elInsertBefore = function elInsertBefore(el, htmlString) {
  return el.insertAdjacentHTML('beforebegin', htmlString);
};
;// CONCATENATED MODULE: ./src/utils/http.js
function http_typeof(obj) { "@babel/helpers - typeof"; return http_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, http_typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == http_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * ajax 请求
 * @param setting {Object}
 */
var ajax = function ajax(setting) {
  //设置参数的初始值
  var opts = {
    method: (setting.method || "GET").toUpperCase(),
    //请求方式
    url: setting.url || "",
    // 请求地址
    async: setting.async || true,
    // 是否异步
    dataType: setting.dataType || "json",
    // 解析方式
    data: setting.data || "",
    // 参数
    success: setting.success || function () {},
    // 请求成功回调
    error: setting.error || function () {} // 请求失败回调

  }; // 参数格式化

  function params_format(obj) {
    var str = '';

    for (var i in obj) {
      str += i + '=' + obj[i] + '&';
    }

    return str.split('').slice(0, -1).join('');
  } // 创建ajax对象


  var xhr = new XMLHttpRequest(); // 连接服务器open(方法GET/POST，请求地址， 异步传输)

  if (opts.method === 'GET') {
    xhr.open(opts.method, opts.url + "?" + params_format(opts.data), opts.async);
    xhr.send();
  } else {
    xhr.open(opts.method, opts.url, opts.async);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(opts.data);
  }
  /*
  ** 每当readyState改变时，就会触发onreadystatechange事件
  ** readyState属性存储有XMLHttpRequest的状态信息
  ** 0 ：请求未初始化
  ** 1 ：服务器连接已建立
  ** 2 ：请求已接受
  ** 3 : 请求处理中
  ** 4 ：请求已完成，且相应就绪
  */


  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
      switch (opts.dataType) {
        case "json":
          var json = JSON.parse(xhr.responseText);
          opts.success(json);
          break;

        case "xml":
          opts.success(xhr.responseXML);
          break;

        default:
          opts.success(xhr.responseText);
          break;
      }
    }
  };

  xhr.onerror = function (err) {
    opts.error(err);
  };
};
/**
 * fetch 请求
 * @param url {string}
 * @param setting {Object}
 * @returns {Promise<unknown>}
 */

var fetch = function fetch(url, setting) {
  //设置参数的初始值
  var opts = {
    method: (setting.method || 'GET').toUpperCase(),
    //请求方式
    headers: setting.headers || {},
    // 请求头设置
    credentials: setting.credentials || true,
    // 设置cookie是否一起发送
    body: setting.body || {},
    mode: setting.mode || 'no-cors',
    // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || 'follow',
    // follow, error, manual
    cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)

  };
  var dataType = setting.dataType || "json",
      // 解析方式
  data = setting.data || ""; // 参数
  // 参数格式化

  function params_format(obj) {
    var str = '';

    for (var i in obj) {
      str += "".concat(i, "=").concat(obj[i], "&");
    }

    return str.split('').slice(0, -1).join('');
  }

  if (opts.method === 'GET') {
    url = url + (data ? "?".concat(params_format(data)) : '');
  } else {
    setting.body = data || {};
  }

  return new Promise(function (resolve, reject) {
    fetch(url, opts).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(dataType === 'text')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return res.text();

              case 3:
                _context.t0 = _context.sent;
                _context.next = 16;
                break;

              case 6:
                if (!(dataType === 'blob')) {
                  _context.next = 12;
                  break;
                }

                _context.next = 9;
                return res.blob();

              case 9:
                _context.t1 = _context.sent;
                _context.next = 15;
                break;

              case 12:
                _context.next = 14;
                return res.json();

              case 14:
                _context.t1 = _context.sent;

              case 15:
                _context.t0 = _context.t1;

              case 16:
                data = _context.t0;
                resolve(data);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (e) {
      reject(e);
    });
  });
};
;// CONCATENATED MODULE: ./src/utils/file.js
var blobTypeList = [{
  name: ".aac",
  type: "audio/aac"
}, {
  name: ".abw",
  type: "application/x-abiword"
}, {
  name: ".arc",
  type: "application/x-freearc"
}, {
  name: ".avi",
  type: "video/x-msvideo"
}, {
  name: ".azw",
  type: "application/vnd.amazon.ebook"
}, {
  name: ".bin",
  type: "application/octet-stream"
}, {
  name: ".bmp",
  type: "image/bmp"
}, {
  name: ".bz",
  type: "application/x-bzip"
}, {
  name: ".bz2",
  type: "application/x-bzip2"
}, {
  name: ".csh",
  type: "application/x-csh"
}, {
  name: ".css",
  type: "text/css"
}, {
  name: ".csv",
  type: "text/csv"
}, {
  name: ".doc",
  type: "application/msword"
}, {
  name: ".docx",
  type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}, {
  name: ".eot",
  type: "application/vnd.ms-fontobject"
}, {
  name: ".epub",
  type: "application/epub+zip"
}, {
  name: ".gif",
  type: "image/gif"
}, {
  name: ".htm",
  type: "text/html"
}, {
  name: ".html",
  type: "text/html"
}, {
  name: ".ico",
  type: "image/vnd.microsoft.icon"
}, {
  name: ".ics",
  type: "text/calendar"
}, {
  name: ".jar",
  type: "application/java-archive"
}, {
  name: ".jpeg",
  type: "image/jpeg"
}, {
  name: ".jpg",
  type: "image/jpeg"
}, {
  name: ".js",
  type: "text/javascript"
}, {
  name: ".json",
  type: "application/json"
}, {
  name: ".jsonld",
  type: "application/ld+json"
}, {
  name: ".mid",
  type: "audio/midi audio/x-midi"
}, {
  name: ".midi",
  type: "audio/midi audio/x-midi"
}, {
  name: ".mjs",
  type: "text/javascript"
}, {
  name: ".mp3",
  type: "audio/mpeg"
}, {
  name: ".mpeg",
  type: "video/mpeg"
}, {
  name: ".mpkg",
  type: "application/vnd.apple.installer+xml"
}, {
  name: ".odp",
  type: "application/vnd.oasis.opendocument.presentation"
}, {
  name: ".ods",
  type: "application/vnd.oasis.opendocument.spreadsheet"
}, {
  name: ".odt",
  type: "application/vnd.oasis.opendocument.text"
}, {
  name: ".oga",
  type: "audio/ogg"
}, {
  name: ".ogv",
  type: "video/ogg"
}, {
  name: ".ogx",
  type: "application/ogg"
}, {
  name: ".otf",
  type: "font/otf"
}, {
  name: ".png",
  type: "image/png"
}, {
  name: ".pdf",
  type: "application/pdf"
}, {
  name: ".ppt",
  type: "application/vnd.ms-powerpoint"
}, {
  name: ".pptx",
  type: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
}, {
  name: ".rar",
  type: "application/x-rar-compressed"
}, {
  name: ".rtf",
  type: "application/rtf"
}, {
  name: ".sh",
  type: "application/x-sh"
}, {
  name: ".svg",
  type: "image/svg+xml"
}, {
  name: ".swf",
  type: "application/x-shockwave-flash"
}, {
  name: ".tar",
  type: "application/x-tar"
}, {
  name: ".tif",
  type: "image/tiff"
}, {
  name: ".tiff",
  type: "image/tiff"
}, {
  name: ".ttf",
  type: "font/ttf"
}, {
  name: ".txt",
  type: "text/plain"
}, {
  name: ".vsd",
  type: "application/vnd.visio"
}, {
  name: ".wav",
  type: "audio/wav"
}, {
  name: ".weba",
  type: "audio/webm"
}, {
  name: ".webm",
  type: "video/webm"
}, {
  name: ".webp",
  type: "image/webp"
}, {
  name: ".woff",
  type: "font/woff"
}, {
  name: ".woff2",
  type: "font/woff2"
}, {
  name: ".xhtml",
  type: "application/xhtml+xml"
}, {
  name: ".xls",
  type: "application/vnd.ms-excel"
}, {
  name: ".xlsx",
  type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
}, {
  name: ".xml",
  type: "application/xml"
}, {
  name: "",
  type: "text/xml"
}, {
  name: ".xul",
  type: "application/vnd.mozilla.xul+xml"
}, {
  name: ".zip",
  type: "application/zip"
}, {
  name: ".3gp",
  type: "video/3gpp"
}, {
  name: "",
  type: "audio/3gpp"
}, {
  name: ".3g2",
  type: "video/3gpp2"
}, {
  name: "",
  type: "audio/3gpp2"
}, {
  name: ".7z",
  type: "application/x-7z-compressed"
}];
/**
 * 根据文件名称（有文件类型） 查询对应blob type
 * @param name {string}名称
 * @returns {string|*|null} blob type
 */

var getBlobType = function getBlobType(name) {
  var typeArr = blobTypeList.filter(function (item) {
    return name.includes(item.name);
  });
  return typeArr.length ? typeArr[0].type : null;
};
/**
 * 下载文件
 * @param name {string} 文件名称（带类型）
 * @param blobFile ｛Blob｝ blob格式
 */

var downloadFile = function downloadFile(name, blobFile) {
  var link = document.createElement("a");
  var blob = new Blob([blobFile], {
    type: getBlobType(name)
  });
  var objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = "".concat(name);
  link.click(); // 下载文件

  URL.revokeObjectURL(objectUrl);
};
;// CONCATENATED MODULE: ./src/utils/other.js
/*获取十六进制随机颜色*/
var getRandomColor = function getRandomColor() {
  // let n = (Math.random() * 0xfffff * 1000000).toString(16);
  // return '#' + n.slice(0, 6);
  return '#' + function (h) {
    return new Array(7 - h.length).join("0") + h;
  }((Math.random() * 0x1000000 << 0).toString(16));
};
/*音频加载*/

var loadAudio = function loadAudio(src, callback) {
  var audio = new Audio(src);
  audio.onloadedmetadata = callback;
  audio.src = src;
};
/*DOM转字符串*/

var domToStirng = function domToStirng(htmlDOM) {
  var div = document.createElement("div");
  div.appendChild(htmlDOM);
  return div.innerHTML;
};
/*字符串转DOM*/

var stringToDom = function stringToDom(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
};
/**
 * 光标所在位置插入字符，并设置光标位置
 *
 * @param {dom} 输入框
 * @param {val} 插入的值
 * @param {posLen} 光标位置处在 插入的值的哪个位置
 */

var setCursorPosition = function setCursorPosition(dom, val, posLen) {
  var cursorPosition = 0;

  if (dom.selectionStart) {
    cursorPosition = dom.selectionStart;
  }

  this.insertAtCursor(dom, val);
  dom.focus();
  console.log(posLen);
  dom.setSelectionRange(dom.value.length, cursorPosition + (posLen || val.length));
};
/*光标所在位置插入字符*/

var insertAtCursor = function insertAtCursor(dom, val) {
  if (document.selection) {
    dom.focus();
    sel = document.selection.createRange();
    sel.text = val;
    sel.select();
  } else if (dom.selectionStart || dom.selectionStart == '0') {
    var startPos = dom.selectionStart;
    var endPos = dom.selectionEnd;
    var restoreTop = dom.scrollTop;
    dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length);

    if (restoreTop > 0) {
      dom.scrollTop = restoreTop;
    }

    dom.focus();
    dom.selectionStart = startPos + val.length;
    dom.selectionEnd = startPos + val.length;
  } else {
    dom.value += val;
    dom.focus();
  }
};
/*
* @desc 转义`HTML
* */

var escapeHTML = function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, function (tag) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag;
  });
};
/*
* @desc 返回当前的滚动位置
* @param {String} el 元素 默认window
* @return {Object} 对象  ex：{x: 0, y: 200}
* */

var getScrollPosition = function getScrollPosition() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
};
/*
* @desc 滚动到指定元素区域
* @param {String} element 元素
* */

var smoothScroll = function smoothScroll(element) {
  return document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
};
/*
* @desc 平滑滚动至顶部
* */

var scrollToTop = function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
/*
* @desc 加入收藏夹
* @param {String} sURL 网址
* @param {String} sTitle 标题
* */

var addFavorite = function addFavorite(sURL, sTitle) {
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, "");
    } catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
  }
};
/*
* @desc 动态加载脚本文件
* @param {String} src 地址
* @param {String} text
* @param {String} reload
* @param {String} charset
* */

var appendScript = function appendScript(src, text, reload, charset) {
  var id = hash(src + text);
  if (!reload && in_array(id, evalscripts)) return;

  if (reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }

  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  scriptNode.charset = charset ? charset : BROWSER.firefox ? document.characterSet : document.charset;

  try {
    if (src) {
      scriptNode.src = src;
      scriptNode.onloadDone = false;

      scriptNode.onload = function () {
        scriptNode.onloadDone = true;
        JSLOADED[src] = 1;
      };

      scriptNode.onreadystatechange = function () {
        if ((scriptNode.readyState == "loaded" || scriptNode.readyState == "complete") && !scriptNode.onloadDone) {
          scriptNode.onloadDone = true;
          JSLOADED[src] = 1;
        }
      };
    } else if (text) {
      scriptNode.text = text;
    }

    document.getElementsByTagName("head")[0].appendChild(scriptNode);
  } catch (e) {}
};
/*
* @desc 实现base64解码
* @param {String} data 地址
* */

var base64_decode = function base64_decode(data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1,
      o2,
      o3,
      h1,
      h2,
      h3,
      h4,
      bits,
      i = 0,
      ac = 0,
      dec = "",
      tmp_arr = [];

  if (!data) {
    return data;
  }

  data += "";

  do {
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));
    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join("");
  dec = utf8_decode(dec);
  return dec;
};
/*
* @desc 实现utf8解码
* */

var utf8_decode = function utf8_decode(str_data) {
  var tmp_arr = [],
      i = 0,
      ac = 0,
      c1 = 0,
      c2 = 0,
      c3 = 0;
  str_data += "";

  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);

    if (c1 < 128) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 > 191 && c1 < 224) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      i += 2;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      i += 3;
    }
  }

  return tmp_arr.join("");
};
/**
 * 根据窗口大小自适应字体大小 用于大屏图表中的文案 例如：标题
 * @param val {number} 字体大小
 * @param initWidth 初始宽度
 * @returns {number}
 */

var resizeFont = function resizeFont(val) {
  var initWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1920;
  var nowClientWidth = document.documentElement.clientWidth; // 换算方法

  return val * (nowClientWidth / initWidth);
};
;// CONCATENATED MODULE: ./src/utils/storage.js
function storage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function storage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function storage_createClass(Constructor, protoProps, staticProps) { if (protoProps) storage_defineProperties(Constructor.prototype, protoProps); if (staticProps) storage_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var VenStorage = /*#__PURE__*/function () {
  function VenStorage() {
    storage_classCallCheck(this, VenStorage);

    this.local = window.localStorage;
    this.session = window.sessionStorage;
  }
  /*-----------------localStorage---------------------*/

  /*设置localStorage*/


  storage_createClass(VenStorage, [{
    key: "setLocal",
    value: function setLocal(key, val) {
      var setting = arguments[0];

      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          this.local.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        this.local.setItem(key, JSON.stringify(val));
      }
    }
    /*获取localStorage*/

  }, {
    key: "getLocal",
    value: function getLocal(key) {
      if (key) return JSON.parse(this.local.getItem(key));
      return null;
    }
    /*移除localStorage*/

  }, {
    key: "removeLocal",
    value: function removeLocal(key) {
      this.local.removeItem(key);
    }
    /*移除所有localStorage*/

  }, {
    key: "clearLocal",
    value: function clearLocal() {
      this.local.clear();
    }
    /*-----------------sessionStorage---------------------*/

  }, {
    key: "setSession",
    value: function setSession(key, val) {
      var setting = arguments[0];

      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          this.session.setItem(i, JSON.stringify(setting[i]));
        }
      } else {
        this.session.setItem(key, JSON.stringify(val));
      }
    }
    /*获取sessionStorage*/

  }, {
    key: "getSession",
    value: function getSession(key) {
      if (key) return JSON.parse(this.session.getItem(key));
      return null;
    }
    /*移除sessionStorage*/

  }, {
    key: "removeSession",
    value: function removeSession(key) {
      this.session.removeItem(key);
    }
    /*移除所有sessionStorage*/

  }, {
    key: "clearSession",
    value: function clearSession() {
      this.session.clear();
    }
    /*-----------------cookie---------------------*/

    /*设置 cookie */

  }, {
    key: "setCookie",
    value: function setCookie(name, value, _ref) {
      var _ref$expires = _ref.expires,
          expires = _ref$expires === void 0 ? 'Session' : _ref$expires,
          _ref$domain = _ref.domain,
          domain = _ref$domain === void 0 ? 'localhost' : _ref$domain,
          _ref$path = _ref.path,
          path = _ref$path === void 0 ? '/' : _ref$path;
      var setting = arguments[0];
      var date = new Date();
      date.setTime(date.getTime() + expires);

      if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
        for (var i in setting) {
          document.cookie = "".concat(i, "=").concat(setting[i], ";expires=").concat(date, ";domain=").concat(domain, ";path=").concat(path);
        }
      } else {
        document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(date, ";domain=").concat(domain, ";path=").concat(path);
      }
    }
    /*获取cookie*/

  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var cdArr = document.cookie.split('; ');

      for (var i = 0; i < cdArr.length; i++) {
        var arr = cdArr[i].split('=');

        if (arr[0] === name) {
          return arr[1];
        }
      }

      return '';
    }
    /*删除cookie*/

  }, {
    key: "removeCookie",
    value: function removeCookie(name) {
      this.setCookie(name, 1, {
        expires: -1 * 24 * 60 * 60 * 1000
      });
    }
  }]);

  return VenStorage;
}(); // localStorage -----------------

/**
 * 获取 localStorage
 * @param key
 * @returns {any}
 */


var getLocal = function getLocal(key) {
  return new VenStorage().getLocal(key);
};
/**
 * 设置 localStorage
 */

var setLocal = function setLocal(key, val) {
  return new VenStorage().setLocal(key, val);
};
/**
 * 清除某个 localStorage
 * @param key
 */

var removeLocal = function removeLocal(key) {
  return new VenStorage().removeLocal(key);
};
/**
 * 清除所有 localStorage
 */

var clearLocal = function clearLocal() {
  return new VenStorage().clearLocal();
}; // sessionStorage -------------

/**
 * 获取 sessionStorage
 * @param key
 * @returns {any}
 */

var getSession = function getSession(key) {
  return new VenStorage().getSession(key);
};
/**
 * 设置 sessionStorage
 */

var setSession = function setSession(key, val) {
  return new VenStorage().setSession(key, val);
};
/**
 * 清除某个 sessionStorage
 * @param key
 */

var removeSession = function removeSession(key) {
  return new VenStorage().removeSession(key);
};
/**
 * 清除所有 sessionStorage
 */

var clearSession = function clearSession() {
  return new VenStorage().clearSession();
};
/**
 *
 * @param name
 * @param value
 * @param expires
 * @param domain
 * @param path
 */

var setCookie = function setCookie(name, value, options) {
  return new VenStorage().setCookie(name, value, options);
};
/**
 * 获取 cookie
 * @param name
 * @returns {string|string}
 */

var getCookie = function getCookie(name) {
  return new VenStorage().getCookie(name);
};
/**
 * 删除 cookie
 * @param name
 */

var removeCookie = function removeCookie(name) {
  return new VenStorage().removeCookie(name);
};
;// CONCATENATED MODULE: ./src/utils/index.js









 // export * as dayjs from 'dayjs'
/******/ 	return __webpack_exports__;
/******/ })()
;
});