# Http

## request

- 说明：

  简易封装XMLHttpRequest请求，

- 参数：

  - {Object} config 配置参数，参考[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Glossary/XMLHttpRequest)
  - {string} config.url - 请求地址
  - {string} [config.method='GET'] - 请求方式 (GET, POST, PUT, DELETE, PATCH)
  - {Object} [config.headers] - 请求头设置
  - {Object} [config.params] - GET请求参数
  - {Object} [config.data] - POST/PUT/DELETE等请求的数据
  - {string} [config.responseType='json'] - 响应类型 ('json', 'xml', 'text')
  - {boolean} [config.async=true] - 是否异步
  - {number} [config.timeout=15000] - 超时时间(毫秒)
  - {Object} [config.auth] - 认证信息
  - {string} [config.auth.username] - 用户名
  - {string} [config.auth.password] - 密码
  - {Object} [config.cancelToken] - 取消请求的令牌对象

- 返回值：

  {Promise\<any\>} 返回 Promise 对象

- 示例：

```js
import {request} from "@vensst/js-toolkit";

export default {
  data: {
    cancelToken: ''
  },
  methods: {
    addUser() {
      // 方式一
      request({
        method: 'post',
        url: 'http://localhost:5001/api/user/add',
        data: {
          nickname: 'evan123',
          account: '1509909527',
          password: 123456
        },
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // 方式二
      request.post('http://localhost:5001/api/user/add', {
        nickname: 'evan123',
        account: '1509909527',
        password: 123456
      }, {
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    },
    delUser() {
      request.delete('http://localhost:5001/api/user/delete/2').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

      request.delete('http://localhost:5001/api/user/delete', {data: {ids: 3}}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    putUser() {
      // 方式一
      request({
        method: 'put',
        url: 'http://localhost:5001/api/user/update',
        data: {
          id: 5,
          nickname: 'evan12345',
          account: '1509909528',
          password: 123456
        },
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // 方式二
      request.put('http://localhost:5001/api/user/update', {
        id: 6,
        nickname: 'evan123456',
        account: '1509909527',
        password: 123456
      }, {
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    getUser() {
      this.cancelToken = new request.CancelToken();
      // 方式一
      request({
        url: 'http://localhost:5001/api/user/detail',
        method: 'get',
        params: {
          id: 5,
        },
        cancelToken: this.cancelToken
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // 方式二
      request.get('http://localhost:5001/api/user/list?page=1&pageSize=10', {
        cancelToken: this.cancelToken
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    // 取消请求
    cancelRequest() {
      this.cancelToken && this.cancelToken.cancel("请求取消")
    }
  }
}
```

## requestFetch

- 说明：

  简易封装fetch请求

- 参数：

  - {Object} config - 配置，参考[fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch)
  - {string} config.url - 请求地址
  - {string} [config.method='GET'] - 请求方式 (GET, POST, PUT, DELETE, PATCH)
  - {string} [config.responseType='json'] - 响应类型 ('json', 'text', 'blob')
  - {Object} [config.headers] - 请求头设置
  - {Object} [config.params] - GET请求参数
  - {Object} [config.data] - POST/PUT/DELETE等请求的数据
  - {string} [config.credentials] - 凭证设置 ('include', 'same-origin', 'omit')
  - {Object} [config.body] - 请求主体信息
  - {string} [config.mode] - 请求模式 ('cors', 'no-cors', 'same-origin')
  - {string} [config.redirect] - 重定向模式 ('follow', 'error', 'manual')
  - {string} [config.cache] - 缓存模式 ('default', 'reload', 'no-cache')
  - {number} [config.timeout=15000] - 超时时间(毫秒)
  - {Object} [config.cancelToken] - 取消请求的令牌对象

- 返回值：

  {Promise\<any\>} 返回 Promise 对象

- 示例：

```js
import {requestFetch} from "@vensst/js-toolkit";

export default {
  data: {
    cancelToken: ''
  },
  methods: {
    addUser2() {
      // 方式一
      requestFetch({
        method: 'post',
        url: 'http://localhost:5001/api/user/add',
        data: {
          nickname: 'evan123',
          account: '1509909527',
          password: 123456
        },
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // 方式二
      requestFetch.post('http://localhost:5001/api/user/add', {
        nickname: 'evan123',
        account: '1509909527',
        password: 123456
      }, {
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    },
    delUser2() {
      requestFetch.delete('http://localhost:5001/api/user/delete/2').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

      requestFetch.delete('http://localhost:5001/api/user/delete', {data: {ids: 3}}).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    putUser2() {
      // 方式一
      requestFetch({
        method: 'put',
        url: 'http://localhost:5001/api/user/update',
        data: {
          id: 5,
          nickname: 'evan12345',
          account: '1509909528',
          password: 123456
        },
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
      // 方式二
      requestFetch.put('http://localhost:5001/api/user/update', {
        id: 6,
        nickname: 'evan123456',
        account: '1509909527',
        password: 123456
      }, {
        headers: {
          'Authorization': 'Bearer token123'
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    getUser2() {
      this.cancelToken = new requestFetch.CancelToken();
      requestFetch({
        url: 'http://localhost:5001/api/user/detail',
        method: 'get',
        params: {
          id: 5,
        },
        cancelToken: this.cancelToken
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      // 方式二
      requestFetch.get('http://localhost:5001/api/user/list?page=1&pageSize=10', {
        cancelToken: this.cancelToken
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    cancelRequest() {
      this.cancelToken && this.cancelToken.cancel("请求取消")
    }
  }
}
```
