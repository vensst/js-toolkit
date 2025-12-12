import {isArray, isNodeList, isObject} from "./inspect";

/**
 * 深度克隆对象或数组
 * @param {*} data - 需要克隆的数据
 * @returns {*} 克隆后的数据副本
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = deepClone(original);
 * console.log(cloned); // { a: 1, b: { c: 2 } }
 * console.log(original === cloned); // false
 */
export const deepClone = function (data) {
  if (data === null || typeof data !== "object") return data;
  if (data instanceof Date) return new Date(data);
  if (data instanceof RegExp) return new RegExp(data);

  // 处理 Map 和 Set 类型
  if (data instanceof Map) {
    const newMap = new Map();
    data.forEach((value, key) => {
      newMap.set(key, deepClone(value));
    });
    return newMap;
  }

  if (data instanceof Set) {
    const newSet = new Set();
    data.forEach(value => {
      newSet.add(deepClone(value));
    });
    return newSet;
  }

  let newData = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      newData[key] = deepClone(data[key]);
    }
  }
  return newData;
};


/**
 * 生成十六进制随机颜色值
 * @returns {string} 随机颜色值，格式为 #xxxxxx
 * @example
 * const color = getRandomColor();
 * console.log(color); // 例如: #a1b2c3
 */
export const getRandomColor = function () {
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
 * 动态加载 JavaScript 脚本文件
 * @param {string} src - 脚本地址
 * @param {boolean} [isAsync=true] - 是否异步加载
 * @returns {Promise<void>} 脚本加载完成的 Promise
 * @version 1.1.0-beta.11
 * @example
 * addScript('https://example.com/script.js')
 *   .then(() => console.log('脚本加载成功'))
 *   .catch(err => console.error('脚本加载失败', err));
 */
export const addScript = function (src, isAsync = true) {
  return new Promise((resolve, reject) => {
    if (isScriptAdded(src)) {
      resolve();
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = isAsync;

      script.onload = () => resolve();
      script.onerror = (error) => reject(new Error(`Failed to load script: ${src}`));

      document.head.appendChild(script);
    }
  });
};


/**
 * 简单 base64 编码（支持中文）
 * @param {string} str - 需要编码的字符串
 * @returns {string} 编码后的 base64 字符串
 * @version 1.1.0-beta.7
 * @example
 * const encoded = btoa('你好世界');
 * console.log(encoded); // 5L2g5aW95LiW55WM
 */
export const btoa = function (str) {
  return window.btoa(encodeURIComponent(str));
};

/**
 * 简单 base64 解码（支持中文）
 * @param {string} str - 通过 btoa 编码后的字符串
 * @returns {string} 解码后的字符串
 * @version 1.1.0-beta.7
 * @example
 * const decoded = atob('5L2g5aW95LiW55WM');
 * console.log(decoded); // 你好世界
 */
export const atob = function (str) {
  return decodeURIComponent(window.atob(str));
};

/**
 * Base64 编码函数
 * @param {string} data - 需要编码的数据
 * @returns {string} Base64 编码后的字符串
 */
export const base64_encode = function (data) {
  if (!data) return data;
  // 自实现 Base64 编码
  const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let o1, o2, o3, h1, h2, h3, h4, bits;
  let i = 0;
  let ac = 0;
  let enc = "";
  let tmp_arr = [];

  data = utf8_encode(data);

  do {
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join("");

  const r = data.length % 3;
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};

/**
 * Base64 解码函数
 * @param {string} data - 需要解码的数据
 * @returns {string} 解码后的字符串
 */
export const base64_decode = function (data) {
  if (!data) return data;

  // 原有的自实现解码逻辑
  let b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let o1, o2, o3, h1, h2, h3, h4, bits;
  let i = 0;
  let ac = 0;
  let dec = "";
  let tmp_arr = [];

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
 * UTF-8 编码
 * @param {string} string - 需要编码的字符串
 * @returns {string} UTF-8 编码后的字符串
 */
export const utf8_encode = function (string) {
  string = string.replace(/\r\n/g, '\n');
  let utftext = '';

  for (let n = 0; n < string.length; n++) {
    const c = string.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }
  }

  return utftext;
};

/**
 * utf8 解码
 * @param {string} utftext - 需要解码的数据
 * @returns {string}
 */
export const utf8_decode = function (utftext) {
  let string = '';
  let i = 0;
  let c = 0, c2 = 0, c3 = 0;

  while (i < utftext.length) {
    c = utftext.charCodeAt(i);

    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if ((c > 191) && (c < 224)) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }

  return string;
};
/**
 * 加载音频文件
 * @param {string} src - 音频地址
 * @param {Function} [callback] - 音频元数据加载完成后的回调函数
 * @returns {HTMLAudioElement} Audio 元素实例
 * @example
 * loadAudio('https://example.com/audio.mp3', () => {
 *   console.log('音频元数据加载完成');
 * });
 */
export const loadAudio = function (src, callback) {
  let audio = new Audio(src);
  if (callback) {
    audio.onloadedmetadata = callback;
  }
  audio.src = src;
  return audio;
};

/**
 * 将 DOM 元素转换为 HTML 字符串
 * @param {Element} htmlDOM - DOM 元素
 * @returns {string} HTML 字符串
 * @example
 * const div = document.createElement('div');
 * div.innerHTML = '<p>Hello</p>';
 * const htmlString = domToString(div);
 * console.log(htmlString); // <div><p>Hello</p></div>
 */
export const domToString = function (htmlDOM) {
  let div = document.createElement("div");
  div.appendChild(htmlDOM.cloneNode(true));
  return div.innerHTML;
};

/**
 * 将 HTML 字符串转换为 DOM 元素
 * @param {string} htmlString - HTML 字符串
 * @returns {Element} DOM 元素
 * @example
 * const dom = stringToDom('<p>Hello World</p>');
 * document.body.appendChild(dom);
 */
export const stringToDom = function (htmlString) {
  let div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.firstElementChild || div.children[0];
};

/**
 * 在光标位置插入字符
 * @param {HTMLTextAreaElement|HTMLInputElement} dom - 输入框元素
 * @param {string} val - 要插入的值
 * @example
 * setCursorPosition(document.getElementById('input'), 'Hello World',);
 */
export const setCursorPosition = function (dom, val) {
  // 参数验证
  if (!dom && !(dom instanceof HTMLTextAreaElement || dom instanceof HTMLInputElement)) {
    throw new Error('Invalid argument: dom must be a valid HTMLTextAreaElement or HTMLInputElement');
  }

  let originalCursorPosition = 0;
  if (dom.selectionStart !== undefined) {
    originalCursorPosition = dom.selectionStart;
  }

  insertAtCursor(dom, val);
  dom.focus();

  // 计算新的光标位置
  const newCursorPosition = originalCursorPosition + val.length;
  // 确保光标位置不超出文本长度范围
  const safeCursorPosition = Math.max(0, Math.min(dom.value.length, newCursorPosition));

  dom.setSelectionRange(safeCursorPosition, safeCursorPosition);
};

/**
 * 在光标当前位置插入字符
 * @param {HTMLTextAreaElement|HTMLInputElement} dom - 输入框元素
 * @param {string} val - 要插入的值
 * @example
 * insertAtCursor(document.getElementById('input'), 'Hello');
 */
export const insertAtCursor = function (dom, val) {
  if (document.selection) {
    // IE 浏览器
    dom.focus();
    const sel = document.selection.createRange();
    sel.text = val;
    sel.select();
  } else if (dom.selectionStart !== undefined) {
    // 现代浏览器
    const startPos = dom.selectionStart;
    const endPos = dom.selectionEnd;
    const restoreTop = dom.scrollTop;
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

/**
 * 转义HTML特殊字符，防止XSS攻击
 * 将 <、> 和 & 转换为对应的HTML实体
 * @param {string} [str=''] - HTML字符串
 * @returns {string} 转义后的字符串
 * @version 2.0.0
 * @example
 * const escaped = escapeHTML('<div>Hello & "World"</div>');
 * console.log(escaped); // &lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;
 */
export const escapeHTML = function (str) {
  if (str == null) return '';
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x39;'
  };

  return str.toString().replace(/[&<>'"]/g, (tag) => htmlEntities[tag] || tag);
};

/**
 * 解转义HTML特殊字符，将HTML实体转换回原始字符
 * 将 &amp;, &lt;, &gt;, &quot;, &#x39; 转换回对应的原始字符
 * @param {string} [str=''] - 需要解转义的HTML字符串
 * @returns {string} 解转义后的原始字符串
 * @version 2.1.0
 * @example
 * const unescaped = unescapeHTML('&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;');
 * console.log(unescaped); // <div>Hello & "World"</div>
 *
 * // 处理null/undefined值
 * unescapeHTML(null); // ''
 * unescapeHTML(undefined); // ''
 */
export const unescapeHTML = function (str = '') {
  if (str == null) return '';

  const htmlEntities = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x39;': "'" // 十六进制形式
  };

  return String(str).replace(/&(amp|lt|gt|quot|#39|#x39);/g, (match) => htmlEntities[match] || match);
}

/**
 * 比较两个版本号
 * @param {string} version1 - 版本号1
 * @param {string} version2 - 版本号2
 * @returns {number} 比较结果: 1 表示 version1 > version2, -1 表示 version1 < version2, 0 表示相等
 * @version 1.1.0-beta.11
 * @example
 * console.log(compareVersion('1.2.3', '1.2.2')); // 1
 * console.log(compareVersion('1.2.1', '1.2.2')); // -1
 * console.log(compareVersion('1.2.0', '1.2'));   // 0
 */
export const compareVersion = function (version1, version2) {
  const v1 = version1.split(".").map(Number);
  const v2 = version2.split(".").map(Number);

  const len = Math.max(v1.length, v2.length);

  for (let i = 0; i < len; i++) {
    const num1 = v1[i] || 0;
    const num2 = v2[i] || 0;

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} 复制操作是否成功
 * @version 1.1.0-beta.16
 * @example
 * copyToClipboard('Hello World')
 *   .then(success => {
 *     if (success) console.log('复制成功');
 *     else console.log('复制失败');
 *   });
 */
export const copyToClipboard = async function (text) {
  // 现代浏览器 Clipboard API
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Clipboard API 可能因用户拒绝或权限问题失败
      return false;
    }
  }
  // IE 浏览器
  else if (window.clipboardData && typeof window.clipboardData.setData === 'function') {
    try {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      window.clipboardData.setData("Text", text);
      return true;
    } catch (error) {
      return false;
    }
  }
  // 降级方案：使用 document.execCommand
  else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    let textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    textarea.style.left = "-9999px";
    try {
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    } catch (error) {
      // 确保在出错时也能清理 DOM 元素
      if (textarea && textarea.parentNode) {
        document.body.removeChild(textarea);
      }
      return false;
    }
  } else {
    return false;
  }
}


/**
 * 等待指定时间
 * @param {number} [delay=2000] - 等待时间（毫秒）
 * @returns {Promise<void>} Promise，在指定时间后 resolve
 * @version 1.1.0-beta.16
 * @example
 * async function example() {
 *   console.log('开始等待');
 *   await wait(1000);
 *   console.log('等待结束');
 * }
 */
export const wait = function (delay = 2000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
};


/**
 * 监听一个或多个元素的尺寸变化
 * @param {HTMLElement|HTMLElement[]|NodeList} elements - 需要监听的单个元素或元素数组
 * @param {Function} callback - 尺寸变化时调用的回调函数，接收 ResizeObserverEntry 数组作为参数
 * @returns {Function} 停止监听的函数，可选择性地停止部分元素的监听
 * @version 1.1.0-beta.16
 * @example
 * // 监听单个元素
 * const stopObserving = observeResize(element, (entries) => {
 *   console.log('Element resized', entries);
 * });
 *
 * // 监听多个元素
 * const stopObserving = observeResize([element1, element2], (entries) => {
 *   console.log('Elements resized', entries);
 * });
 *
 * // 停止所有监听
 * stopObserving();
 *
 * // 停止特定元素的监听
 * stopObserving(element1);
 */
export const resizeObserver = function (elements, callback) {
  // 标准化输入为数组
  const elementArray = isArray(elements) || isNodeList(elements) ? elements : [elements];

  // 参数验证
  elementArray.forEach((element, index) => {
    if (!element || !(element instanceof HTMLElement)) {
      throw new Error(`Invalid argument at index ${index}: element must be a valid HTMLElement`);
    }
  });

  // 检查浏览器是否支持 ResizeObserver
  if (typeof ResizeObserver === 'undefined') {
    console.warn('ResizeObserver is not supported in this browser');
    // 返回一个空的清理函数
    return () => {
    };
  }

  const resizeObserver = new ResizeObserver((entries) => {
    if (callback && typeof callback === 'function') {
      callback(entries);
    }
  });

  // 观察所有元素
  elementArray.forEach(element => resizeObserver.observe(element));

  // 返回清理函数，支持选择性停止部分元素监听
  return (elementsToStop = null) => {
    if (elementsToStop === null) {
      // 停止所有观察
      resizeObserver.disconnect();
    } else {
      // 停止特定元素的观察
      const stopArray = Array.isArray(elementsToStop) ? elementsToStop : [elementsToStop];
      stopArray.forEach(element => {
        if (element && (element instanceof HTMLElement)) {
          resizeObserver.unobserve(element);
        }
      });
    }
  };
};

/**
 * WebSocketUtil 类用于封装 WebSocket 连接逻辑，包括自动重连、心跳机制等功能。
 * @param {string} url - WebSocket 服务器地址
 * @param {Object} options - 配置选项
 * @param {boolean} [options.isReconnect=true] - 是否自动重连
 * @param {number} [options.reconnectInterval=3000] - 重连间隔时间（毫秒）
 * @param {number} [options.maxReconnectAttempts=5] - 最大重连次数,-1表示无限重连
 * @param {boolean} [options.isHeartbeat=false] - 是否启用心跳机制
 * @param {number} [options.heartbeatInterval=30000] - 心跳间隔时间（毫秒）
 * @param {string} [options.pingMessage="{ type: 'ping' }"] - 心跳消息
 */
export class WebSocketUtil {
  static DEFAULT_PING_MESSAGE = JSON.stringify({type: "ping"});
  static DEFAULT_RECONNECT_INTERVAL = 5000;
  static DEFAULT_MAX_RECONNECT_ATTEMPTS = 5;
  static DEFAULT_HEARTBEAT_INTERVAL = 30000;
  static HEARTBEAT_RESPONSE_TYPE = "tong";

  url = "";
  socket = null;
  connectState = WebSocket.CLOSED; // 0-连接中，1-已连接，2-关闭中，3-已关闭

  // Reconnect settings
  isReconnect;
  reconnectInterval;
  maxReconnectAttempts;
  #reconnectAttempts = 0;
  #reconnectTimer = null;

  // Heartbeat settings
  isHeartbeat;
  heartbeatInterval;
  #heartbeatTimer = null;

  #messageHandler = null;
  #pingMessage = WebSocketUtil.DEFAULT_PING_MESSAGE;

  constructor(url, options = {}) {
    if (!window.WebSocket) {
      throw new Error("当前环境不支持 WebSocket");
    }

    if (typeof options !== "object" || options === null) {
      throw new TypeError("options 必须为一个对象");
    }

    this.url = url;

    // Reconnect settings
    this.isReconnect = options.isReconnect ?? true;
    this.reconnectInterval =
        options.reconnectInterval || WebSocketUtil.DEFAULT_RECONNECT_INTERVAL;
    this.maxReconnectAttempts =
        options.maxReconnectAttempts ??
        WebSocketUtil.DEFAULT_MAX_RECONNECT_ATTEMPTS;

    // Heartbeat settings
    this.isHeartbeat = options.isHeartbeat ?? false;
    this.heartbeatInterval =
        options.heartbeatInterval ?? WebSocketUtil.DEFAULT_HEARTBEAT_INTERVAL; // 30秒心跳

    // Validate and ensure pingMessage is valid JSON string
    if (typeof options.pingMessage === "string") {
      this.#pingMessage = options.pingMessage;
    } else if (isObject(options.pingMessage) || isArray(options.pingMessage)) {
      this.#pingMessage = JSON.stringify(options.pingMessage);
    } else {
      this.#pingMessage = WebSocketUtil.DEFAULT_PING_MESSAGE;
    }

    // Bind event handlers once
    this.onOpen = this.#onOpen.bind(this);
    this.onMessage = this.#onMessage.bind(this);
    this.onError = this.#onError.bind(this);
    this.onClose = this.#onClose.bind(this);
  }

  /**
   * 启动心跳机制，定时发送 ping 消息
   */
  #startHeartbeat() {
    this.#clearHeartbeat();
    this.#heartbeatTimer = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send(this.#pingMessage);
      }
    }, this.heartbeatInterval);
  }

  /**
   * 清除心跳定时器
   */
  #clearHeartbeat() {
    if (this.#heartbeatTimer) {
      clearInterval(this.#heartbeatTimer);
      this.#heartbeatTimer = null;
    }
  }

  #reconnect() {
    if (this.maxReconnectAttempts === -1) {
      this.#reconnectTimer && clearTimeout(this.#reconnectTimer);
      this.#reconnectTimer = setTimeout(() => {
        if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
          this.#connect();
        }
      }, this.reconnectInterval);
    } else {
      if (this.#reconnectAttempts < this.maxReconnectAttempts) {
        this.#reconnectAttempts += 1;
        console.log(
            `将在 ${this.reconnectInterval} ms 后进行第 ${
                this.#reconnectAttempts
            } 次重连...`
        );
        this.#reconnectTimer && clearTimeout(this.#reconnectTimer);
        this.#reconnectTimer = setTimeout(() => {
          if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
            this.#connect();
          }
        }, this.reconnectInterval);
      } else {
        this.#clearReconnect();
        this.#updateConnectState(WebSocket.CLOSED);
        console.warn("达到最大重连次数，放弃连接");
      }
    }
  }

  #clearReconnect() {
    if (this.#reconnectTimer) {
      clearTimeout(this.#reconnectTimer);
      this.#reconnectAttempts = 0;
      this.#reconnectTimer = null;
    }
  }

  #updateConnectState(state) {
    this.connectState = state;
  }

  /**
   * WebSocket 连接打开时的回调函数
   */
  #onOpen() {
    console.log("WebSocket 连接已建立");
    // 1
    this.#updateConnectState(this.socket.readyState);
    // 判断是否需要开始发送心跳
    if (this.isHeartbeat) {
      this.#startHeartbeat();
    }
  }

  /**
   * WebSocket 接收到消息时的回调函数
   * @param {MessageEvent} e - 消息事件对象
   */
  #onMessage(e) {
    let data = e.data;
    try {
      data = JSON.parse(data);
    } catch (error) {
      // keep as-is if not parseable
    }
    // 处理心跳响应
    if (isObject(data) && data.type === WebSocketUtil.HEARTBEAT_RESPONSE_TYPE)
      return;

    if (this.#messageHandler && typeof this.#messageHandler === "function") {
      this.#messageHandler(data);
    }
  }

  /**
   * WebSocket 发生错误时的回调函数
   * @param {Event} e - 错误事件对象
   */
  #onError(e) {
    // 3
    // this.connectState = this.socket.readyState;
    console.error("WebSocket 错误:", e);
  }

  /**
   * WebSocket 连接关闭时的回调函数，包含自动重连逻辑
   */
  #onClose() {
    console.log("WebSocket 连接失败或关闭");
    // 清除心跳定时器
    this.#clearHeartbeat();

    /*
     * 主动关闭：
     *  按顺序执行关闭逻辑 2 -> 3
     * 被动关闭：
     *  场景1：连接成功，服务器断开连接，关闭前状态为1，
     *
     */
    // 被动关闭
    if (this.connectState === WebSocket.OPEN || this.#reconnectTimer) {
      // 自动重连
      if (this.isReconnect) {
        this.#reconnect();
      }
    } else if (this.connectState === WebSocket.CLOSING) {
      // 清除重连定时器
      this.#clearReconnect();
      this.#removeListeners();

      // 3
      this.#updateConnectState(this.socket.readyState);
      this.socket = null;
    } else {
      this.#updateConnectState(this.socket.readyState);
    }
  }

  /**
   * 移除所有事件监听器
   * @private
   */
  #removeListeners() {
    if (this.socket) {
      this.socket.removeEventListener("open", this.onOpen);
      this.socket.removeEventListener("message", this.onMessage);
      this.socket.removeEventListener("error", this.onError);
      this.socket.removeEventListener("close", this.onClose);
    }
  }

  /**
   * 建立 WebSocket 连接，并绑定事件处理函数
   */
  #connect() {
    // 移除之前的监听器以防重复绑定
    this.#removeListeners();

    try {
      this.socket = new WebSocket(this.url);
      // 0
      this.#updateConnectState(this.socket.readyState);

      this.socket.addEventListener("open", this.onOpen);
      this.socket.addEventListener("message", this.onMessage);
      this.socket.addEventListener("error", this.onError);
      this.socket.addEventListener("close", this.onClose);
    } catch (err) {
      console.error("创建 WebSocket 实例失败:", err);
    }
  }

  connect() {
    this.#clearHeartbeat();
    this.#clearReconnect();

    this.#connect();
  }

  /**
   * 发送消息到 WebSocket 服务器
   * @param {string|Buffer|ArrayBuffer|Blob|ArrayBufferView} data - 要发送的数据，可以是字符串或对象
   */
  send(data) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      if (isObject(data) || isArray(data)) {
        this.socket.send(JSON.stringify(data));
      } else {
        this.socket.send(data);
      }
    } else {
      console.warn("WebSocket 未连接或未打开");
    }
  }

  /**
   * 关闭 WebSocket 连接并清理相关资源
   */
  close() {
    if (this.socket) {
      if (this.socket.readyState === WebSocket.CLOSED) {
        console.log("WebSocket 已关闭");
        return;
      }
      this.socket.close();
      // 2
      this.#updateConnectState(this.socket.readyState);
    } else {
      console.warn("WebSocket 未连接或未打开");
    }
  }

  // 设置消息回调
  setMessageHandler(callback) {
    this.#messageHandler = callback;
  }
}
