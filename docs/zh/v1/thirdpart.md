# 第三方库

## dayjs

- 说明：

	内部引入了dayjs，可以使用dayjs的方法，详情请查看dayjs文档[前往](https://dayjs.gitee.io/zh-CN/)

- 示例：

```js
jsToolkit.dayjs().format()
// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'
jsToolkit.dayjs().format("YYYY-MM-DD HH:mm:ss")
// '2020-04-02 08:02:17'
```

## Cookies

- 说明：

	内部引入了js-cookie（同时扩展了setJSON、getJSON方法），可以使用js-cookie的方法，详情请查看js-cookie文档[前往](https://github.com/js-cookie/js-cookie#readme)

- 示例：

```js
jsToolkit.Cookies.set("name", "张三", {expires: 1});
jsToolkit.Cookies.get("name")
// "张三"

jsToolkit.Cookies.setJSON("userInfo", {name: "张三", age: 18}, {expires: 7, path: ''})
jsToolkit.Cookies.getJSON("userInfo") // {name: "张三", age: 18}
```

## mathjs

- 说明：

	内部引入了mathjs，可以使用mathjs的方法，详情请查看mathjs文档[前往](https://mathjs.org/)

- 示例：

```js
const {math} = jsToolkit

// 加
function add(num1, num2) {
  return math.format(math.add(math.bignumber(num1), math.bignumber(num2)));
}

// 减
function subtract(num1, num2) {
  return math.format(math.subtract(math.bignumber(num1), math.bignumber(num2)));
}

// 乘
function multiply(num1, num2) {
  return math.format(math.multiply(math.bignumber(num1), math.bignumber(num2)));
}

// 除
function divide(num1, num2) {
  return math.format(math.divide(math.bignumber(num1), math.bignumber(num2)));
}

add(0.1, 0.3) // 0.4
subtract(0.3, 0.1) //0.2
multiply(2, 3) // 6
divide(8, 2) //4
```

## crypto-js

- 说明：

  内部引入了crypto-js，可以使用crypto-js的方法，详情请查看crypto-js文档[前往](https://cryptojs.gitbook.io/docs/)

- 添加版本：1.1.0-beta.11

- 示例：

```js
const {CryptoJS} = jsToolkit
// MD5 加密
let hash = CryptoJS.MD5("Message");
console.log(hash.toString());

// AES 加密
let encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
console.log(encrypted.toString());
// AES 解密
let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
console.log(decrypted.toString(CryptoJS.enc.Utf8));
```

## nanoid

- 说明：

  内部引入了nanoid，可以使用nanoid的方法，详情请查看nanoid文档[前往](https://github.com/ai/nanoid/blob/HEAD/README.zh-CN.md)

- 添加版本：1.1.0-beta.11

- 示例：

```js
const {nanoid} = jsToolkit.nanoid
console.log(nanoid())
```
