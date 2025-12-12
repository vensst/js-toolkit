# 检测

## isType

- 说明：

	类型判断

- 参数：

    - {string} type 类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol
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

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isString('123')
// true
jsToolkit.isString(123)
// false

```

## isNumber

- 说明：

	判断是否数字

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isNumber(123)
// true
jsToolkit.isNumber("123")
// false
```

## isNumeric

- 说明：

	判断是否数字

- 添加版本：1.1.0-beta.11

- 参数：

  - {*} value 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isNumeric(123) // true
jsToolkit.isNumeric("123") // true
jsToolkit.isNumeric("abc") // false
```


## isBoolean

- 说明：

	判断是否 boolean

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isBoolean(true)
// true
jsToolkit.isBoolean(123)
// false
```

## isFunction

- 说明：

	判断是否函数

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isFunction(() => {
})
// true
```

## isNull

- 说明：

	判断是否为 null

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isNull(null)
// true
```

## isUndefined

- 说明：

	判断是否 undefined

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isUndefined(undefined)
// true
```

## isObject

- 说明：

	判断是否对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isObject({})
//  rue
```

## isArray

- 说明：

	判断是否数组

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isArray([])
// true
```

## isDate

- 说明：

	判断是否时间

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isDate(new Date())
// true
```

## isRegExp

- 说明：

	判断是否正则

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isRegExp(/\d+/)
// true
```

## isError

- 说明：

	判断是否错误对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isError(new Error())
// true
```

## isSymbol

- 说明：

	判断是否 Symbol 函数

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isSymbol(Symbol())
// true
```

## isPromise

- 说明：

	判断是否 Promise 对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isPromise(Promise.resolve())
// true
```

## isSet

- 说明：

	判断是否 Set 对象

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isSet(new Set())
// true
```

## isFalse

- 说明：

	判断是否为 false

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isFalse(false)
// true
jsToolkit.isFalse("false")
// true
jsToolkit.isFalse("null")
// true
jsToolkit.isFalse("undefined")
// true
jsToolkit.isFalse("NaN")
// true
```

## isTrue

- 说明：

	判断是否为 true

- 参数：

    - {any} o 任意类型

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isTrue(true)
// true
```

## isCardID

- 说明：

  严格的身份证校验

- 参数：

  - {string} sId 身份证号码

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isCardID("350524199010109876")
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
jsToolkit.isMobile()
```

## isIos

- 说明：

	判断当前环境是否为ios苹果手机

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isIos()
```

## isPC

- 说明：

	判断当前环境是否为 PC 端

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.isPC()
```

## isPcBrowser

- 说明：

  判断是否是PC浏览器

- 返回值：

  {boolean} 是否是PC浏览器

- 示例：

```js
jsToolkit.isPcBrowser()
// true
```

## getMobileEnv

- 说明：

	获取当前属于哪种类型手机运行环境

- 返回值：

  {string} 是手机环境返回运行环境，不是手机运行环境返回Unknown

- 示例：

```js
jsToolkit.getMobileEnv()
```

## getBrowserType

- 说明：

	获取浏览器类型

- 返回值：

  {string}

- 示例：

```js
jsToolkit.getBrowserType()
```

## checkPasswordLevel

- 说明：

	检测密码强度

- 参数：

    - {string} password 需要检测密码

- 返回值：

  {number} 级别 0-4

- 示例：

```js
jsToolkit.checkPasswordLevel("123456")
// 2
```

## checkFormat

- 说明：

	检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确

- 参数：

    - {string} str 检查的字符串
    - {string} type 检查的类型 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english,
      chinese, lower, upper, HTML

- 返回值：

  {boolean}

- 示例：

```js
jsToolkit.checkFormat("15061709876", "phone")
// true
jsToolkit.checkFormat("025-1234567", "tel")
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
jsToolkit.isFullScreen()
```
