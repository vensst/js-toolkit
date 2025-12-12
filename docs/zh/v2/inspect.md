# Validate

## isType

- 说明：

  类型判断

- 参数：

  - {string} type - 类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol...
  - {any} val 值

- 返回值：

  {boolean} 是否符合类型

- 示例：

```js
isType("String", "123")
// true
```

## isString

- 说明：

  判断是否字符串

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isString('123')
// true
isString(123)
// false

```

## isNumber

- 说明：

  判断是否数字

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isNumber(123)
// true
isNumber("123")
// false
```

## isNumeric

- 说明：

  判断是否数字

- 添加版本：1.1.0-beta.11

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isNumeric(123) // true
isNumeric("123") // true
isNumeric("abc") // false
```

## isBoolean

- 说明：

  判断是否 boolean

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isBoolean(true)
// true
isBoolean(123)
// false
```

## isFunction

- 说明：

  判断是否函数

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isFunction(() => {
})
// true
```

## isNull

- 说明：

  判断是否为 null

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isNull(null)
// true
```

## isUndefined

- 说明：

  判断是否 undefined

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isUndefined(undefined)
// true
```

## isBlob

- 说明：

  检测是否为 Blob 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isBlob(new Blob())
// true
```

## isObject

- 说明：

  判断是否对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isObject({})
//  rue
```

## isArray

- 说明：

  判断是否数组

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isArray([])
// true
```

## isElement

- 说明：

  判断是否为 Element

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isElement(document.getElementById("app"))
```

## isNode

- 说明：

  判断是否为 Node 节点

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isNode(document.querySelectorAll(".d")[0])
```

## isNodeList

- 说明：

  判断是否为 NodeList 列表

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isNodeList(document.querySelectorAll(".d"))
```

## isDate

- 说明：

  判断是否时间

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isDate(new Date())
// true
```

## isRegExp

- 说明：

  判断是否正则

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isRegExp(/\d+/)
// true
```

## isError

- 说明：

  判断是否错误对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isError(new Error())
// true
```

## isSymbol

- 说明：

  判断是否 Symbol 函数

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isSymbol(Symbol())
// true
```

## isPromise

- 说明：

  判断是否 Promise 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isPromise(Promise.resolve())
// true
```

## isSet

- 说明：

  判断是否 Set 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

- 示例：

```js
isSet(new Set())
// true
```

## isMap

- 说明：

  判断是否 Map 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isWeakMap

- 说明：

  判断是否 WeakMap 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isWeakSet

- 说明：

  判断是否 WeakSet 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isArrayBuffer

- 说明：

  判断是否 ArrayBuffer 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isDataView

- 说明：

  判断是否 DataView 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isInt8Array

- 说明：

  判断是否 Int8Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isUint8Array

- 说明：

  判断是否 Uint8Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isUint8ClampedArray

- 说明：

  判断是否 Uint8ClampedArray 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isInt16Array

- 说明：

  判断是否 Int16Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isUint16Array

- 说明：

  判断是否 Uint16Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isInt32Array

- 说明：

  判断是否 Int32Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isUint32Array

- 说明：

  判断是否 Uint32Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isFloat32Array

- 说明：

  判断是否 Float32Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isFloat64Array

- 说明：

  判断是否 Float64Array 对象

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isURL

- 说明：

  判断是否为 URL 对

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isFormData

- 说明：

  判断是否为 FormData

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isFile

- 说明：

  判断是否为 File

- 参数：

  - {any} o - 任意类型

- 返回值：

  {boolean}

## isFalse

- 说明：

  判断是否为 false

- 参数：

  - {any} o - 任意类型
  - {boolean} [isStrict=false] - 是否严格模式

- 返回值：

  {boolean}

- 示例：

```js
isFalse("") // true
isFalse(false) // true
isFalse(0) // true
isFalse(null) // true
isFalse(undefined) // true
isFalse("false") // false
isFalse("0") // false
isFalse("null") // false
isFalse("undefined") // false
isFalse("false", true) // true
isFalse("0", true) // true
isFalse("null", true) // true
isFalse("undefined", true) // true
```

## isTrue

- 说明：

  判断是否为 true

- 参数：

  - {any} o - 任意类型
  - {boolean} [isStrict=false] - 是否严格模式

- 返回值：

  {boolean}

## isCardID

- 说明：

  严格的身份证校验

- 参数：

  - {string} sId - 身份证号码

- 返回值：

  {boolean}

- 示例：

```js
isCardID("350524199010109876")
// false
```

## isMobile

- 说明：

  判断当前环境是否为移动端

- 添加版本：1.1.0-beta.11

- 返回值：

  {boolean} 是否为移动端

- 示例：

```js
isMobile()
```

## isIos

- 说明：

  判断当前环境是否为ios苹果手机

- 返回值：

  {boolean}

- 示例：

```js
isIos()
```

## isPC

- 说明：

  判断当前环境是否为 PC 端

- 返回值：

  {boolean}

- 示例：

```js
isPC()
```

## isPcBrowser

- 说明：

  判断是否是PC浏览器

- 返回值：

  {boolean} 是否是PC浏览器

- 示例：

```js
isPcBrowser()
// true
```

## getMobileEnv

- 说明：

  获取当前属于哪种类型手机运行环境

- 返回值：

  {string} 是手机环境返回运行环境，不是手机运行环境返回Unknown

- 示例：

```js
getMobileEnv()
```

## getBrowserType

- 说明：

  获取浏览器类型

- 返回值：

  {string}

- 示例：

```js
getBrowserType()
```

## checkPasswordLevel

- 说明：

  检测密码强度

- 参数：

  - {string} password - 需要检测密码

- 返回值：

  {number} 级别 0-4

- 示例：

```js
checkPasswordLevel("123456")
// 2
```

## checkFormat

- 说明：

  检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确

- 参数：

  - {string} str - 检查的字符串
  - {string} type - 检查的类型 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english,
    chinese, lower, upper, HTML

- 返回值：

  {boolean}

- 示例：

```js
checkFormat("15061709876", "phone")
// true
checkFormat("025-1234567", "tel")
// true
// ...
```

## isFullScreen

- 说明：

  判断是否是全屏

- 添加版本：1.1.0-beta.15

- 返回值：

  {Element|*}

- 示例：

```js
isFullScreen()
```
