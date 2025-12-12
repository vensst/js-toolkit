# 其它

## deepClone

- 说明：

	深克隆

- 参数：

	- {*} data 要克隆的数据

- 返回值：

  {*} 返回克隆后的数据

- 示例：

```js
let arr = [null, undefined, true, new Date(), function () {
}, 1, "aa", [], {}]
jsToolkit.deepClone(arr)
// [null, undefined, true, Wed Jun 22 2022 13:53:02 GMT+0800 (中国标准时间), ƒ, 1, 'aa', [], {}]
```

## getRandomColor

- 说明：

	获取十六进制随机颜色

- 返回值：

  {string} 颜色值

- 示例：

```js
 jsToolkit.getRandomColor() // #2a260b
```

## addScript

- 说明：

  动态加载脚本文件

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} src 地址
  - {Boolean} isAsync 是否异步加载

- 示例：

```js
jsToolkit.addScript("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js")
```

## downloadByUrl

- 说明：

  根据url下载

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} url 链接地址

- 示例：

```js
jsToolkit.downloadByUrl("https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js")
```

## btoa

- 说明：

	简单base64编码

- 参数：

  - {string} str 需要编码的字符串

- 返回值：

  {string} 返回编码后的字符串

- 示例：

```js
jsToolkit.btoa('www.baidu.com?a=1&b=2') // d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI=
```

## atob

- 说明：

	简单base64解码

- 参数：

  - {string} str 通过btoa编码后的字符串

- 返回值：

  {string} 解码后的字符串

- 示例：

```js
jsToolkit.atob('d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI')
// www.baidu.com?a=1&b=2
```

## base64_decode

- 说明：

  base64 解码

- 参数：

  - {string} data 需要解码的数据

- 返回值：

  {string} 返回解码后的数据

## utf8_decode

- 说明：

  utf8 解码

- 参数：

  - {string} data 需要解码的数据

- 返回值：

  {string}

## loadAudio

- 说明：

  音频加载

- 参数：

  - {string} src 音频地址
  - {Function} callback 回调函数

## domToString

- 说明：

  DOM转字符串

- 参数：

  - {Element} htmlDOM DOM

- 返回值：

  {string}

## stringToDom

- 说明：

  字符串转DOM

- 参数：

  - {string} htmlString

- 返回值：

  {Element}

## setCursorPosition

- 说明：

  光标所在位置插入字符，并设置光标位置

- 参数：

  - {Element} dom 输入框
  - {string} val 插入的值
  - {number} posLen 光标位置处在 插入的值的哪个位置

## insertAtCursor

- 说明：

  光标所在位置插入字符

- 参数：

  - {Element} dom
  - {string} val

## escapeHTML

- 说明：

  转义 HTML

- 参数：

  - {string} str

## compareVersion

- 说明：

  版本对比

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} version1 版本号
  - {string} version2 版本号

- 返回值：

  {number} 1: version1 > version2, -1: version1 < version2, 0: version1 = version2
