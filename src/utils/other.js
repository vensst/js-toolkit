/*获取十六进制随机颜色*/
export const getRandomColor = function () {
  // let n = (Math.random() * 0xfffff * 1000000).toString(16);
  // return '#' + n.slice(0, 6);
  return '#' + (function (h) {
    return new Array(7 - h.length).join("0") + h;
  })((Math.random() * 0x1000000 << 0).toString(16));
}

/*音频加载*/
export const loadAudio = function (src, callback) {
  var audio = new Audio(src);
  audio.onloadedmetadata = callback;
  audio.src = src;
}

/*DOM转字符串*/
export const domToStirng = function (htmlDOM) {
  var div = document.createElement("div");
  div.appendChild(htmlDOM);
  return div.innerHTML
}

/*字符串转DOM*/
export const stringToDom = function (htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

/**
 * 光标所在位置插入字符，并设置光标位置
 *
 * @param {dom} 输入框
 * @param {val} 插入的值
 * @param {posLen} 光标位置处在 插入的值的哪个位置
 */
export const setCursorPosition = function (dom, val, posLen) {
  var cursorPosition = 0;
  if (dom.selectionStart) {
    cursorPosition = dom.selectionStart;
  }
  this.insertAtCursor(dom, val);
  dom.focus();
  console.log(posLen)
  dom.setSelectionRange(dom.value.length, cursorPosition + (posLen || val.length));
}

/*光标所在位置插入字符*/
export const insertAtCursor = function (dom, val) {
  if (document.selection) {
    dom.focus();
    sel = document.selection.createRange();
    sel.text = val;
    sel.select();
  } else if (dom.selectionStart || dom.selectionStart == '0') {
    let startPos = dom.selectionStart;
    let endPos = dom.selectionEnd;
    let restoreTop = dom.scrollTop;
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
}

/*
* @desc 转义`HTML
* */

export const escapeHTML = str => str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
);

/*
* @desc 返回当前的滚动位置
* @param {String} el 元素 默认window
* @return {Object} 对象  ex：{x: 0, y: 200}
* */
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

/*
* @desc 滚动到指定元素区域
* @param {String} element 元素
* */
export const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

/*
* @desc 平滑滚动至顶部
* */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
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
export const addFavorite=function (sURL, sTitle) {
  try {
    window.external.addFavorite(sURL, sTitle);
  } catch (e) {
    try {
      window.sidebar.addPanel(sTitle, sURL, "");
    } catch (e) {
      alert("加入收藏失败，请使用Ctrl+D进行添加");
    }
  }
}

/*
* @desc 动态加载脚本文件
* @param {String} src 地址
* @param {String} text
* @param {String} reload
* @param {String} charset
* */
export const appendScript=function (src, text, reload, charset) {
  var id = hash(src + text);
  if (!reload && in_array(id, evalscripts)) return;
  if (reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }

  evalscripts.push(id);
  var scriptNode = document.createElement("script");
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
      scriptNode.onload = function() {
        scriptNode.onloadDone = true;
        JSLOADED[src] = 1;
      };
      scriptNode.onreadystatechange = function() {
        if (
          (scriptNode.readyState == "loaded" ||
            scriptNode.readyState == "complete") &&
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
  } catch (e) {}
}

/*
* @desc 实现base64解码
* @param {String} data 地址
* */
export const base64_decode=function (data) {
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
    bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
    o1 = (bits >> 16) & 0xff;
    o2 = (bits >> 8) & 0xff;
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
}

/*
* @desc 实现utf8解码
* */
export const utf8_decode=function (str_data) {
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
}
/**
 * 根据窗口大小自适应字体大小 用于大屏图表中的文案 例如：标题
 * @param val {number} 字体大小
 * @param initWidth 初始宽度
 * @returns {number}
 */
export const resizeFont=function(val, initWidth = 1920){
  let nowClientWidth = document.documentElement.clientWidth;
  // 换算方法
  return val * (nowClientWidth / initWidth);
}
