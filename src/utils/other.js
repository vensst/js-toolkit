import {$, addStyle} from "./dom.js";

/**
 * 深克隆
 * @param {*} data 要克隆的数据
 * @return {*} 返回克隆后的数据
 */
const deepClone = function (data) {
  if (data === null) return data;
  if (data instanceof Date) return new Date(data);
  if (data instanceof RegExp) return new RegExp(data);
  if (typeof data !== "object") return data;
  let newData = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      newData[key] = deepClone(data[key]);
    }
  }
  return newData;
};

/**
 * 获取十六进制随机颜色
 * @returns {string} 颜色值
 */
const getRandomColor = function () {
  // let n = (Math.random() * 0xfffff * 1000000).toString(16);
  // return '#' + n.slice(0, 6);
  return (
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(((Math.random() * 0x1000000) << 0).toString(16))
  );
};

/**
 * 音频加载
 * @param {string} src 音频地址
 * @param {Function} callback 回调函数
 */
const loadAudio = function (src, callback) {
  let audio = new Audio(src);
  audio.onloadedmetadata = callback;
  audio.src = src;
};

/**
 * DOM转字符串
 * @param {Element} htmlDOM DOM
 * @returns {string}
 */
const domToString = function (htmlDOM) {
  let div = document.createElement("div");
  div.appendChild(htmlDOM);
  return div.innerHTML;
};

/**
 * 字符串转DOM
 * @param htmlString
 * @returns {Element}
 */
const stringToDom = function (htmlString) {
  let div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
};

/**
 * 光标所在位置插入字符，并设置光标位置
 * @param {Element} dom 输入框
 * @param {string} val 插入的值
 * @param {number} posLen 光标位置处在 插入的值的哪个位置
 */
const setCursorPosition = function (dom, val, posLen) {
  let cursorPosition = 0;
  if (dom.selectionStart) {
    cursorPosition = dom.selectionStart;
  }
  insertAtCursor(dom, val);
  dom.focus();
  dom.setSelectionRange(
    dom.value.length,
    cursorPosition + (posLen || val.length)
  );
};

/**
 * 光标所在位置插入字符
 * @param {Element} dom
 * @param {string} val
 */
const insertAtCursor = function (dom, val) {
  let sel;
  if (document.selection) {
    dom.focus();
    sel = document.selection.createRange();
    sel.text = val;
    sel.select();
  } else if (dom.selectionStart || dom.selectionStart == "0") {
    let startPos = dom.selectionStart;
    let endPos = dom.selectionEnd;
    let restoreTop = dom.scrollTop;
    dom.value =
      dom.value.substring(0, startPos) +
      val +
      dom.value.substring(endPos, dom.value.length);
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

/**
 * 转义 HTML
 * @param {string} str
 * @returns {*}
 */
const escapeHTML = function (str) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
}


/**
 * 获取当前的滚动位置
 * @param {string} el 元素 默认window
 * @returns {{x: (number|number), y: (number|*)}} {Object} 对象  ex：{x: 0, y: 200}
 */
const getScrollPosition = function (el = window) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop,
  }
};

/**
 * 滚动到指定元素区域
 * @param {string} element
 */
const smoothScroll = function (element) {
  return document.querySelector(element).scrollIntoView({behavior: "smooth"});
}


/**
 * 平滑滚动至顶部
 */
const scrollToTop = function () {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

/**
 * 加入收藏夹
 * @param  {string} sURL 网址
 * @param {string} sTitle 标题
 */
const addFavorite = function (sURL, sTitle) {
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

/**
 * 动态加载脚本文件
 * @param {string} src 地址
 * @param {string} text 文本
 * @param {string} reload 是否重新加载
 * @param {string} charset 编码
 */
const appendScript = function (src, text, reload, charset) {
  let id = hash(src + text);
  if (!reload && in_array(id, evalscripts)) return;
  if (reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }

  evalscripts.push(id);
  let scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  scriptNode.charset = charset
    ? charset
    : BROWSER.firefox
      ? document.characterSet
      : document.charset;
  try {
    if (src) {
      scriptNode.src = src;
      scriptNode.onloadDone = false;
      scriptNode.onload = function () {
        scriptNode.onloadDone = true;
        JSLOADED[src] = 1;
      };
      scriptNode.onreadystatechange = function () {
        if (
          (scriptNode.readyState === "loaded" ||
            scriptNode.readyState === "complete") &&
          !scriptNode.onloadDone
        ) {
          scriptNode.onloadDone = true;
          JSLOADED[src] = 1;
        }
      };
    } else if (text) {
      scriptNode.text = text;
    }
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
  } catch (e) {
  }
};

/**
 * 简单base64编码
 * @param {string} str 需要编码的字符串
 * @returns {string} 返回编码后的字符串
 * @version 1.1.0-beta.7
 */
const btoa = function (str) {
  return window.btoa(encodeURIComponent(str));
}

/**
 * 简单base64解码
 * @param {string} str 通过btoa编码后的字符串
 * @returns {string} 解码后的字符串
 * @version 1.1.0-beta.7
 */
const atob = function (str) {
  return decodeURIComponent(window.atob(str));
}


/**
 * 实现 base64 解码
 * @param data {string} 地址
 * @returns {string|*}
 */
const base64_decode = function (data) {
  let b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let o1,
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
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
    o1 = (bits >> 16) & 0xff;
    o2 = (bits >> 8) & 0xff;
    o3 = bits & 0xff;
    if (h3 === 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 === 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);
  dec = tmp_arr.join("");
  dec = utf8_decode(dec);
  return dec;
};

/**
 * 实现 utf8 解码
 * @param str_data
 * @returns {string}
 */
const utf8_decode = function (str_data) {
  let tmp_arr = [],
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
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(
        ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
      i += 3;
    }
  }
  return tmp_arr.join("");
};

/**
 * 版本对比
 * @param {string} v1 版本号
 * @param  {string}  v2 版本号
 * @returns {number}
 */
const compareVersion = function (v1, v2) {
  v1 = v1.split(".");
  v2 = v2.split(".");

  let len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }

  while (v2.length < len) {
    v2.push("0");
  }

  for (let i = 0; i < len; i++) {
    let num1 = parseInt(v1[i]);
    let num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};

/**
 * 根据窗口大小自适应字体大小
 * @param {number} val 初始字体大小 默认：16
 * @param {number} initWidth 初始宽度 默认：1920
 * @returns {number} 返回计算后字体大小
 */
const resizeFontSize = function (val = 16, initWidth = 1920) {
  let nowClientWidth = document.documentElement.clientWidth;
  // 换算方法
  return val * (nowClientWidth / initWidth);
};

/**
 * 浏览器窗口变化页面缩放（数据可视化大屏用）[建议使用 initDataView 方法 与之等同]
 * @param {Object} options 参数 {id, width, height,mode}
 * @param {string} options.id 元素id
 * @param {number} options.width 标准/设计稿/实际宽度 默认：1920
 * @param {number} options.height 标准/设计稿/实际高度  默认：1080
 * @param {string} options.mode 缩放模式(scaleToFill：拉满全屏缩放 默认, aspectFit：等比缩放)
 */
const resizeViewScale = function (options) {
  if (!options.id) return;
  let opt = {
    id: null,
    width: 1920, // 设计稿宽度
    height: 1080, // 设计稿高度
    mode: "scaleToFill",
    ...options
  };
  let ele = $(opt.id);
  if (ele instanceof HTMLElement) {
    ele.style.position = "fixed";
    ele.style.top = "0";
    ele.style.left = "0";
    ele.style.width = opt.width + "px";
    ele.style.height = opt.height + "px";


    let ratioX = window.innerWidth / opt.width;
    let ratioY = window.innerHeight / opt.height;

    let transformValue = 1;
    if (opt.mode === "scaleToFill") {
      transformValue = `scale(${ratioX},${ratioY})`;
    }
    if (opt.mode === "aspectFit") {
      transformValue = `scale(${ratioX})`;
    }
    ele.style.transform = transformValue;
    ele.style.transformOrigin = "left top";
    ele.style.backgroundSize = "100% 100%";
  }
};

class DataView {
  el;
  options = {
    width: 1920, // 设计稿宽度
    height: 1080, // 设计稿高度
    mode: "scaleToFill",
  }

  constructor(el, options) {
    this.el = el;
    this.options = {
      ...this.options,
      ...options
    }
    addStyle(this.el, {
      position: "fixed",
      top: "0",
      left: "0",
      width: this.options.width + "px",
      height: this.options.height + "px",
      transformOrigin: "left top",
      backgroundSize: "100% 100%",
    })
    this.resize();
  }

  resize() {
    let ratioX = window.innerWidth / this.options.width;
    let ratioY = window.innerHeight / this.options.height;

    let scale = 1;
    if (this.options.mode === "scaleToFill") {
      scale = `scale(${ratioX},${ratioY})`;
    }
    if (this.options.mode === "aspectFit") {
      scale = `scale(${ratioX})`;
    }
    this.el.style.transform = scale;
  }
}

/**
 * 初始化数据可视化容器（用于数据可视化大屏）
 * @param {HTMLElement} el 元素
 * @param {Object} options 参数 {width, height,mode}
 * @param {number} options.width 标准/设计稿/实际宽度 默认：1920
 * @param {number} options.height 标准/设计稿/实际高度  默认：1080
 * @param {string} options.mode 缩放模式(scaleToFill：拉满全屏缩放 默认, aspectFit：等比缩放)
 * @returns {DataView} 返回DataView实例
 * @version 1.1.0-beta.8
 */
const initDataView = function (el, options) {
  if (!el) throw new Error("el is required");
  return new DataView(el, options);
}


// const resize2 = function () {
//   var fn = function() {
//     var w = document.documentElement
//         ? document.documentElement.clientWidth
//         : document.body.clientWidth,
//       r = 1255,
//       b = Element.extend(document.body),
//       classname = b.className;
//     if (w < r) {
//       //当窗体的宽度小于1255的时候执行相应的操作
//     } else {
//       //当窗体的宽度大于1255的时候执行相应的操作
//     }
//   };
//   if (window.addEventListener) {
//     window.addEventListener("resize", function() {
//       fn();
//     });
//   } else if (window.attachEvent) {
//     window.attachEvent("onresize", function() {
//       fn();
//     });
//   }
//   fn();
// }



export {
  deepClone,
  getRandomColor,
  loadAudio,
  domToString,
  stringToDom,
  setCursorPosition,
  insertAtCursor,
  escapeHTML,
  getScrollPosition,
  smoothScroll,
  scrollToTop,
  addFavorite,
  appendScript,
  btoa,
  atob,
  base64_decode,
  utf8_decode,
  compareVersion,
  resizeFontSize,
  resizeViewScale,
  initDataView
}
