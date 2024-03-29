/*
 * @Author: yfhu
 * @Date: 2023-10-30 13:29:06
 * @LastEditors: yfhu
 * @LastEditTime: 2023-10-30 14:09:46
 * @Description:
 */
/**
 * 深克隆
 * @param {*} data 要克隆的数据
 * @return {*} 返回克隆后的数据
 */
const deepClone = function (data) {
  if (data === null || typeof data !== "object") return data;
  if (data instanceof Date) return new Date(data);
  if (data instanceof RegExp) return new RegExp(data);

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

const isScriptAdded = function (src) {
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src === src) {
      return true;
    }
  }
  return false;
}

/**
 * 动态加载脚本文件
 * @param {string} src 地址
 * @param {Boolean} isAsync 是否异步加载
 * @version 1.1.0-beta.11
 */
const addScript = function (src, isAsync = true) {
  if (isScriptAdded(src)) return
  const script = document.createElement('script')
  script.type = 'text/JavaScript';
  script.src = src;
  script.async = isAsync;
  document.head.appendChild(script);
};

/**
 * 根据url下载
 * @param {string} url 链接地址
 * @returns {boolean} 返回是否下载成功
 * @version 1.1.0-beta.11
 */
const downloadByUrl = (url) => {
  let isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  let isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  if (isChrome || isSafari) {
    let link = document.createElement('a');
    link.href = url;
    if (link.download !== undefined) {
      link.download = url.substring(url.lastIndexOf('/') + 1, url.length);
    }
    if (document.createEvent) {
      let e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download';
  }
  window.open(url, '_self');
  return true;
}

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
 * base64 解码
 * @param {string} data 需要解码的数据
 * @returns {string} 返回解码后的数据
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
 * utf8 解码
 * @param {string} data 需要解码的数据
 * @returns {string}
 */
const utf8_decode = function (data) {
  let tmp_arr = [],
      i = 0,
      ac = 0,
      c1 = 0,
      c2 = 0,
      c3 = 0;
  data += "";
  while (i < data.length) {
    c1 = data.charCodeAt(i);
    if (c1 < 128) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 > 191 && c1 < 224) {
      c2 = data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = data.charCodeAt(i + 1);
      c3 = data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(
          ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
      i += 3;
    }
  }
  return tmp_arr.join("");
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
 * @param {string} htmlString
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
 * 版本对比
 * @param {string} version1 版本号
 * @param  {string}  version2 版本号
 * @returns {number} 1: version1 > version2, -1: version1 < version2, 0: version1 = version2
 * @version 1.1.0-beta.11
 */
const compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

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
 * 复制到剪切板
 * @param {String} text 文本
 * @returns {boolean|void}
 * @version 1.1.0-beta.16
 */
const copyToClipboard = function (text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
  } else {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      return window.clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      let textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }
}

/**
 * 等待函数
 * @param {number} [delay=2000] 等待时间
 * @returns {Promise<unknown>} Promise
 * @version 1.1.0-beta.16
 */
const wait = function (delay = 2000) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export {
  deepClone,
  getRandomColor,
  addScript,
  downloadByUrl,

  btoa,
  atob,
  base64_decode,
  utf8_decode,

  loadAudio,
  domToString,
  stringToDom,
  setCursorPosition,
  insertAtCursor,
  escapeHTML,
  compareVersion,

  copyToClipboard,
  wait
}
