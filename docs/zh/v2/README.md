# 指南

## 介绍

[@vensst/js-toolkit](https://github.com/vensst/js-toolkit) 是 JavaScript 工具库，整合了前端一些常用的 js 函数。

## 安装

### 使用npm

```shell
npm install @vensst/js-toolkit -S
```

```js
// 全部引用
import JsToolkit from "@vensst/js-toolkit";

JsToolkit.random(1, 100)

// 按需引用
import {random} from "@vensst/js-toolkit"

random(1, 100)
```

### 使用script

```html

<script src="https://unpkg.com/@vensst/js-toolkit"></script>
<script>
  JsToolkit.random(1, 100)
</script>
```

### 更新内容

- Array
  - 新增 countBy
  - intersectInMatrix --> intersectMatrix
  - duplicateDataTag --> tagDuplicates
  - findTreePath --> findNodePath
- Date
  - format --> formatDate
  - getDaysFromDate --> getDateRange
  - getMonthsFromDate --> getMonthsRange
  - getDayOfYearWeek --> getWeekOfYear
- DOM
  - siblings --> getSiblings
  - getByStyle --> getStyle
  - elInsertAfter --> insertAfter
  - elInsertBefore --> insertBefore
- File
  - 新增 forceDownloadByUrl
  - getBlobType --> getMimeType
  - downloadFile --> download
- Http
  - _ajax --> request
  - _fetch --> requestFetch
- Image
  - 新增 compressImage
  - scaleImg --> calcScaleRatio
  - imgLoadAll --> loadImages
  - arrayBufferToBase64 --> binaryToDataURL
- inspect
  - 新增 isBlob
  - 新增 isElement
  - 新增 isNode
  - 新增 isNodeList
  - 新增 isMap
  - 新增 isWeakMap
  - 新增 isWeakSet
  - 新增 isArrayBuffer
  - 新增 isDataView
  - 新增 isInt8Array
  - 新增 isUint8Array
  - 新增 isUint8ClampedArray
  - 新增 isInt16Array
  - 新增 isUint16Array
  - 新增 isInt32Array
  - 新增 isUint32Array
  - 新增 isFloat32Array
  - 新增 isFloat64Array
  - 新增 isURL
  - 新增 isFormData
  - 新增 isFile
  - 新增 getType
- Number
  - numberFormatter --> scientificFormatter
- Other
  - 新增 base64_encode
  - 新增 utf8_encode
  - 新增 unescapeHTML
  - 新增 copyToClipboard
  - 新增 wait
  - 新增 resizeObserver
  - 新增 WebSocketUtil
- Scroll
  - smoothScroll --> scrollIntoView
- Storage
  - setLocal --> setLocalStorage
  - getLocal --> getLocalStorage
  - removeLocal --> removeLocalStorage
  - clearLocal --> clearLocalStorage
  - setSession --> setSessionStorage
  - getSession --> getSessionStorage
  - removeSession --> removeSessionStorage
  - clearSession --> clearSessionStorage
- String
  - 新增 trimAll
  - 新增 trimEnd
  - 新增 trimStart
  - 新增 toLowerCaseFirst
  - desensitization --> desens
  - findCharCount --> countSubstring
- URL
  - delUrlParam --> removeUrlParam
  - objToUrlParams --> toUrlParams
