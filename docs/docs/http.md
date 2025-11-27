# Http

## _ajax

- 说明：

  简易封装XMLHttpRequest请求，

- 参数：

  - {Object} config 配置，参考[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Glossary/XMLHttpRequest)
  - {string} config.url 请求地址
  - {string} [config.method='GET'] 请求方式
  - {Object} [config.headers] 请求头设置
  - {Object} [config.params] get请求数据
  - {Object} [config.data] post、put、delete请求数据
  - {string} [config.responseType='json'] 响应类型 json
  - {boolean} [config.asycn=true] 是否异步
  - {number} [config.timeout=15000] 超时时间
  - {Object} [config.auth] 权限
  - {string} [config.auth.username]
  - {string} [config.auth.password]
  - {CancelToken} [config.cancelToken] 取消请求

- 返回值：

  {Promise\<unknown\>} 返回 Promise 对象

- 示例：

```js
const {_ajax} = jsToolkit
// 定义取消请求
const cancelToken = new _ajax.CancelToken();
// 发送请求
bt1.onclick = function () {
  _ajax({
    url: 'http://localhost:5001/api/getUserDetail',
    method: 'post',
    data: {
      name: 'yf_hu',
      age: 18
    },
    cancelToken: cancelToken
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
// 取消请求
bt2.onclick = function () {
  cancelToken.cancel("请求取消")
}
```

## _fetch

- 说明：

  简易封装fetch请求

- 参数：

  - {string} url 请求地址
  - {Object} [config] 配置，参考[fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch)
  - {string} [config.method='GET'] 请求方式
  - {string} [config.responseType='json'] 响应类型 json
  - {Object} [config.headers] 请求头设置
  - {Object} [config.params] get请求数据
  - {Object} [config.data] post、put、delete请求数据
  - {string} [config.credentials] 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(
    同源才允许)omit都不允许
  - {Object} [config.body] 设置请求主体信息(只有post系列请求才可以设置,get系列请求会报错,格式有要求:
    json字符串,URLENCODED格式字符串,普通字符串,FormData格式对象,Buffer/bolb格式...不能是普通对象,并且要根据请求主体的数据格式,配置相关的请求头(
    Content-Type)
  - {string} [config.mode] 可以设置 cors, no-cors, same-origin
  - {string} [config.redirect] 可以设置 follow, error, manual
  - {string} [config.cache] 可以设置 default, reload, no-cache

- 返回值：

  {Promise\<unknown\>} 返回 Promise 对象

- 示例：

```js
const {_fetch} = jsToolkit
// 定义取消请求
const cancelToken = new _fetch.CancelToken();
// 发送请求
bt1.onclick = function () {
  _fetch('http://localhost:5001/api/getUserDetail', {
    method: 'post',
    data: {
      name: 'yf_hu',
      age: 18,
    },
    cancelToken: cancelToken
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}
// 取消请求
bt2.onclick = function () {
  cancelToken.cancel("请求取消")
}
```
