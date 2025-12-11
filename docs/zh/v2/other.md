# Other

## deepClone

- 说明：

  深克隆

- 参数：

  - {*} data - 要克隆的数据

- 返回值：

  {*} 克隆后的数据副本

- 示例：

```js
let arr = [null, undefined, true, new Date(), function () {
}, 1, "aa", [], {}]
deepClone(arr)
// [null, undefined, true, Wed Jun 22 2022 13:53:02 GMT+0800 (中国标准时间), ƒ, 1, 'aa', [], {}]
```

## getRandomColor

- 说明：

  获取十六进制随机颜色

- 返回值：

  {string} 颜色值

- 示例：

```js
 getRandomColor() // #2a260b
```

## addScript

- 说明：

  动态加载脚本文件

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} src - 脚本地址
  - {boolean} [isAsync=true] - 是否异步加载

- 返回值：

  {Promise\<void\>} 脚本加载完成的 Promise

- 示例：

```js
addScript("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js")
```

## btoa

- 说明：

  简单base64编码

- 参数：

  - {string} str - 需要编码的字符串

- 返回值：

  {string} 返回编码后的字符串

- 示例：

```js
btoa('www.baidu.com?a=1&b=2') // d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI=
```

## atob

- 说明：

  简单base64解码

- 参数：

  - {string} str - 通过btoa编码后的字符串

- 返回值：

  {string} 解码后的字符串

- 示例：

```js
atob('d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI')
// www.baidu.com?a=1&b=2
```

## base64_encode

- 说明：

  Base64 编码

- 参数：

  - {string} data - 需要编码的数据

- 返回值：

  {string} 编码后的字符串

## base64_decode

- 说明：

  base64 解码

- 参数：

  - {string} data - 需要解码的数据

- 返回值：

  {string} 解码后的字符串

## utf8_encode

- 说明：

  utf8 编码码

- 参数：

  - {string} data - 需要编码的数据

- 返回值：

  {string}

## utf8_decode

- 说明：

  utf8 解码

- 参数：

  - {string} data - 需要解码的数据

- 返回值：

  {string}

## loadAudio

- 说明：

  音频加载

- 参数：

  - {string} src - 音频地址
  - {Function} [callback] - 音频元数据加载完成后的回调函数

- 返回值：

  {HTMLAudioElement} Audio 元素实例

## domToString

- 说明：

  将 DOM 元素转换为 HTML 字符串

- 参数：

  - {Element} htmlDOM - DOM 元素

- 返回值：

  {string}

## stringToDom

- 说明：

  将 HTML 字符串转换为 DOM 元素

- 参数：

  - {string} htmlString - HTML 字符串

- 返回值：

  {Element}

## setCursorPosition

- 说明：

  在光标位置插入字符

- 参数：

  - {HTMLTextAreaElement|HTMLInputElement} dom - 输入框元素
  - {string} val - 要插入的值

## insertAtCursor

- 说明：

  光标所在位置插入字符

- 参数：

  - {HTMLTextAreaElement|HTMLInputElement} dom - 输入框元素
  - {string} val - 要插入的值

## escapeHTML

- 说明：

  转义HTML特殊字符，防止XSS攻击 将 \<、\> 和 & 转换为对应的HTML实体

- 参数：

  - {string} [str=''] - HTML字符串

## unescapeHTML

- 说明：

  解转义HTML特殊字符，将HTML实体转换回原始字符,将 &amp;, &lt;, &gt;, &quot;, &#x39; 转换回对应的原始字符

- 参数：

  - {string} [str=''] - 需要解转义的HTML字符串

## compareVersion

- 说明：

  版本对比

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} version1 - 版本号
  - {string} version2 - 版本号

- 返回值：

  {number} 1: version1 > version2, -1: version1 < version2, 0: version1 = version2

## copyToClipboard

- 说明：

  复制文本到剪贴板

- 参数：

  - {string} text - 要复制的文本

- 返回值：

  {Promise\<boolean\>} 复制操作是否成功

- 示例：

```js
 copyToClipboard("复制的文本")
````

## wait

- 说明：

  等待指定时间

- 参数：

  - {number} [delay=2000] - 等待时间（毫秒）

- 返回值：

  {Promise\<void\>} Promise，在指定时间后 resolve

- 示例：

```js
wait().then(() => {
  console.log('等待结束');
});
````

## resizeObserver

- 说明：

  监听一个或多个元素的尺寸变化

- 参数：

  - {HTMLElement|HTMLElement[]|NodeList} elements - 需要监听的单个元素或元素数组
  - {Function} callback - 尺寸变化时调用的回调函数，接收 ResizeObserverEntry 数组作为参数

- 返回值：

  {Function} 停止监听的函数，可选择性地停止部分元素的监听

- 示例：

```js
// 监听元素
const stopObserving = resizeObserver(divEls, function (entries) {
  console.log('元素大小变化1', entries);
})
// 停止监听
stopObserving()
````

## WebSocketUtil

- 说明：

  WebSocketUtil 类用于封装 WebSocket 连接逻辑，包括自动重连、心跳机制等功能。

- 添加版本：2.0.0

- 参数：

  - {string} url - WebSocket 服务器地址
  - {Object} options - 配置选项
  - {boolean} [options.isReconnect=true] - 是否自动重连
  - {number} [options.reconnectInterval=3000] - 重连间隔时间（毫秒）
  - {number} [options.maxReconnectAttempts=5] - 最大重连次数,-1表示无限重连
  - {boolean} [options.isHeartbeat=false] - 是否启用心跳机制
  - {number} [options.heartbeatInterval=30000] - 心跳间隔时间（毫秒）
  - {string} [options.pingMessage="{ type: 'ping' }"] - 心跳消息

- 示例：

```js
export default {
  name: "WebSocketDemo1",
  data() {
    return {
      wsUrl: "ws://localhost:5003",
      msg: "",
      websocket: null,
    };
  },
  //方法
  methods: {
    onConnect() {
      if (this.websocket) {
        // 设置消息处理函数
        this.websocket.setMessageHandler(this.onMessage);
        this.websocket.connect();
      }
    },
    onMessage(msg) {
      console.log("onMessage -->", msg);
    },
    onSend() {
      this.websocket?.send(this.msg);
    },
    onClose() {
      this.websocket?.close();
    },
    getSocket() {
      console.log(this.websocket, this.websocket?.socket);
    },
  },
  created() {
    this.websocket = new WebSocketUtil(this.wsUrl, {isHeartbeat: true});
  },
  beforeDestroy() {
    this.onClose();
  },
};
```
