# Storage

## setLocalStorage

- 说明：

  设置 localStorage

- 参数：

  - {string} key - key值
  - {any} val - value值

- 示例：

```js
const userInfo = {id: 1, age: 18, rules: [{name: 'r1'}, {name: 'r2'}]}
setLocalStorage("name", "tom")
setLocalStorage("userInfo", userInfo)
```

## getLocalStorage

- 说明：

  获取 localStorage

- 参数：

  - {string} key - key值

- 返回值：

  {any}

- 示例：

```js
getLocalStorage("name")
```

## removeLocalStorage

- 说明：

  清除某个 localStorage

- 参数：

  - {string} key - key值

- 示例：

```js
removeLocalStorage("name")
```

## clearLocalStorage

- 说明：

  清除所有 localStorage

- 示例：

```js
clearLocalStorage()
```

## setSessionStorage

- 说明：

  设置 sessionStorage

- 参数：

  - {string} key - key值
  - {any} val - value值

- 示例：

```js
const userInfo = {id: 1, age: 18, rules: [{name: 'r1'}, {name: 'r2'}]}
setSessionStorage("name", "tom")
setSessionStorage("userInfo", userInfo)
```

## getSessionStorage

- 说明：

  获取 sessionStorage

- 参数：

  - {string} key - key值

- 返回值：

  {any} value值

- 示例：

```js
getSessionStorage("name")
```

## removeSessionStorage

- 说明：

  清除某个 sessionStorage

- 参数：

  - {string} key - key值

- 示例：

```js
removeSessionStorage("name")
```

## clearSessionStorage

- 说明：

  清除所有 sessionStorage

- 示例：

```js
clearSessionStorage()
```

## setCookie

- 说明：

  设置 cookie

- 参数：

  - {string} name - cookie 名称
  - {any} value - cookie 值
  - {Object} [options] - 配置选项
  - {number} [options.expires] - 过期时间(秒)
  - {string} [options.domain] - 域名
  - {string} [options.path] - 路径
  - {boolean} [options.secure] - 是否仅 HTTPS 传输
  - {string} [options.sameSite] - SameSite 策略 ('Strict' | 'Lax' | 'None')

- 示例：

```js
const userInfo = {id: 1, age: 18, rules: [{name: 'r1'}, {name: 'r2'}]}
setCookie("name", "tom", {
  expires: 3600,
  path: "/",
  domain: "www.baidu.com"
})
setCookie("userInfo", userInfo)
```

## getCookie

- 说明：

  获取 cookie

- 参数：

  - {string} name - 存储的键名

- 返回值：

  {any|undefined} 返回存储的值，如果不存在返回 undefined

- 示例：

```js
getCookie("name")
```

## removeCookie

- 说明：

  删除某个 cookie

- 参数：

  - {string} name - cookie 名称
  - {Object} options - 配置选项
  - {number} [options.expires] - 过期时间(秒)
  - {string} [options.domain] - 域名
  - {string} [options.path] - 路径
  - {boolean} [options.secure] - 是否仅 HTTPS 传输
  - {string} [options.sameSite] - SameSite 策略 ('Strict' | 'Lax' | 'None')

- 示例：

```js
removeCookie("name")
```

