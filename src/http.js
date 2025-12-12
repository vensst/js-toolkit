/*
 * @Author: yfhu
 * @Date: 2023-11-07 09:22:11
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-13 16:28:30
 * @Description: HTTP请求工具封装
 */
import {toUrlParams} from './url.js'
import {isObject} from "./inspect.js";

/**
 * 简易封装XMLHttpRequest请求
 * @param {Object} config - 配置参数，参考[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Glossary/XMLHttpRequest)
 * @param {string} config.url - 请求地址
 * @param {string} [config.method='GET'] -请求方式 (GET, POST, PUT, DELETE, PATCH)
 * @param {Object} [config.headers] - 请求头设置
 * @param {Object} [config.params] - GET请求参数
 * @param {Object} [config.data] - POST/PUT/DELETE等请求的数据
 * @param {string} [config.responseType='json'] - 响应类型 ('json', 'xml', 'text')
 * @param {boolean} [config.async=true] - 是否异步
 * @param {number} [config.timeout=15000] - 超时时间(毫秒)
 * @param {Object} [config.auth] - 认证信息
 * @param {string} [config.auth.username] - 用户名
 * @param {string} [config.auth.password] - 密码
 * @param {Object} [config.cancelToken] - 取消请求的令牌对象
 * @returns {Promise<any>} 返回 Promise 对象
 *
 * @example
 * // GET请求示例
 * request({
 *   url: 'https://api.example.com/users',
 *   method: 'GET',
 *   params: { page: 1, size: 10 }
 * }).then(data => console.log(data));
 *
 * // POST请求示例
 * request({
 *   url: 'https://api.example.com/users',
 *   method: 'POST',
 *   data: { name: 'John', age: 30 },
 *   headers: { 'Content-Type': 'application/json' }
 * }).then(data => console.log(data));
 *
 * // 取消请求示例
 * const cancelToken = {};
 * request({
 *   url: 'https://api.example.com/users',
 *   cancelToken: cancelToken
 * });
 * // 取消请求
 * cancelToken.cancel('用户取消了请求');
 */
export const request = function (config) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    // 处理请求方法
    const method = (config.method || "GET").toUpperCase();
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    const requestMethod = validMethods.includes(method) ? method : "GET";

    // 处理URL和参数
    let requestUrl = config.url;
    if (requestMethod === 'GET' && config.params && isObject(config.params)) {
      const params = toUrlParams(config.params);
      if (params) {
        const separator = requestUrl.includes('?') ? '&' : '?';
        requestUrl += separator + params;
      }
    }

    // 处理请求数据
    let requestData = config.data;
    if (requestMethod !== 'GET' && isObject(config.data)) {
      requestData = JSON.stringify(config.data);
    }

    // 打开请求
    const isAsync = config.async !== undefined ? config.async : true;
    const username = config.auth?.username || '';
    const password = config.auth?.password || '';
    xhr.open(requestMethod, requestUrl, isAsync, username, password);

    if (requestMethod !== 'GET') {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    }
    // 设置请求头
    if (isObject(config.headers)) {
      for (const header in config.headers) {
        if (Object.prototype.hasOwnProperty.call(config.headers, header)) {
          xhr.setRequestHeader(header, config.headers[header]);
        }
      }
    }

    // 设置超时时间
    xhr.timeout = config.timeout !== undefined ? config.timeout : 15000;

    // 设置取消令牌
    if (config.cancelToken && typeof config.cancelToken === 'object') {
      config.cancelToken.cancel = function (message = '请求取消') {
        xhr.abort();
        reject(new Error(message));
      };
    }

    // 设置响应类型
    const responseType = config.responseType || 'json';
    xhr.responseType = responseType === 'xml' ? 'document' : 'text';

    // 请求成功处理
    xhr.onload = function () {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        try {
          switch (responseType) {
            case "json":
              const jsonData = JSON.parse(xhr.responseText);
              resolve(jsonData);
              break;
            case "xml":
              resolve(xhr.responseXML);
              break;
            default:
              resolve(xhr.responseText);
              break;
          }
        } catch (error) {
          reject(new Error('解析响应数据失败: ' + error.message));
        }
      } else {
        reject(new Error(`请求失败: ${xhr.status} ${xhr.statusText}`));
      }
    };

    // 处理网络错误
    xhr.onerror = function () {
      reject(new Error("网络错误"));
    };

    // 处理超时错误
    xhr.ontimeout = function () {
      reject(new Error("请求超时"));
    };

    // 发送请求
    xhr.send(requestMethod === 'GET' ? null : requestData);
  });
};

request.get = function (url, config = {}) {
  return request({
    url: url,
    method: 'GET',
    ...config
  });
};

request.post = function (url, data = {}, config = {}) {
  return request({
    url: url,
    method: 'POST',
    data: data,
    ...config
  });
};

request.put = function (url, data = {}, config = {}) {
  return request({
    url: url,
    method: 'PUT',
    data: data,
    ...config
  });
};

request.delete = function (url, config = {}) {
  return request({
    url: url,
    method: 'DELETE',
    ...config
  });
};

/**
 * 取消令牌构造函数
 * @constructor
 */
request.CancelToken = function () {
  this.cancel = null;
};

/**
 * 简易封装fetch请求
 * @param {Object} config 配置参数
 * @param {string} config.url 请求地址
 * @param {string} [config.method='GET'] 请求方式 (GET, POST, PUT, DELETE, PATCH)
 * @param {string} [config.responseType='json'] 响应类型 ('json', 'text', 'blob')
 * @param {Object} [config.headers] 请求头设置
 * @param {Object} [config.params] GET请求参数
 * @param {Object} [config.data] POST/PUT/DELETE等请求的数据
 * @param {string} [config.credentials] 凭证设置 ('include', 'same-origin', 'omit')
 * @param {Object} [config.body] 请求主体信息
 * @param {string} [config.mode] 请求模式 ('cors', 'no-cors', 'same-origin')
 * @param {string} [config.redirect] 重定向模式 ('follow', 'error', 'manual')
 * @param {string} [config.cache] 缓存模式 ('default', 'reload', 'no-cache')
 * @param {number} [config.timeout=15000] 超时时间(毫秒)
 * @param {Object} [config.cancelToken] 取消请求的令牌对象
 * @returns {Promise<any>} 返回 Promise 对象
 */
export const requestFetch = function (config = {}) {
  const controller = new AbortController();
  const {signal} = controller;

  // 处理请求方法
  const method = (config.method || "GET").toUpperCase();
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  const requestMethod = validMethods.includes(method) ? method : "GET";

  // 处理URL和参数
  let requestUrl = config.url;
  if (requestMethod === "GET" && config.params) {
    const params = toUrlParams(config.params); // 假设此函数已定义
    requestUrl = requestUrl + (params ? '?' + params : '');
  }

  // 处理请求数据
  const fetchConfig = {...config};
  if (requestMethod !== "GET") {
    if (isObject(config.data)) { // 假设 isObject 已定义
      fetchConfig.body = JSON.stringify(config.data);
      if (!fetchConfig.headers) {
        fetchConfig.headers = {'Content-Type': 'application/json'};
      } else {
        const headers = fetchConfig.headers;
        const hasContentType = (headers instanceof Headers)
            ? headers.has('Content-Type') || headers.has('content-type')
            : Object.hasOwn(headers, 'Content-Type') || Object.hasOwn(headers, 'content-type');
        if (!hasContentType) {
          if (headers instanceof Headers) {
            headers.set('Content-Type', 'application/json');
          } else {
            headers['Content-Type'] = 'application/json';
          }
        }
      }
    } else if (config.data) {
      fetchConfig.body = config.data;
    }
  }

  // 设置超时时间
  const timeout = config.timeout !== undefined ? config.timeout : 15000;

  let timeoutError = null;
  const timeoutId = setTimeout(() => {
    controller.abort();
    timeoutError = new Error("请求超时");
  }, timeout);

  const responseType = config.responseType || 'json';

  return new Promise((resolve, reject) => {
    if (config.cancelToken) {
      config.cancelToken.cancel = (message = '请求取消') => {
        clearTimeout(timeoutId);
        controller.abort();
        reject(new Error(message));
      };
    }

    fetch(requestUrl, {...fetchConfig, method: requestMethod, signal})
        .then((response) => {
          clearTimeout(timeoutId);
          if (!response.ok) {
            return reject(new Error(`请求失败: ${response.status} ${response.statusText}`));
          }

          switch (responseType) {
            case "json":
              return response.json().then(resolve);
            case "text":
              return response.text().then(resolve);
            case "blob":
              return response.blob().then(resolve);
            default:
              resolve(response);
          }
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          if (timeoutError) {
            reject(timeoutError);
          } else if (error.name === 'AbortError') {
            reject(new Error('请求被取消'));
          } else {
            reject(error);
          }
        });
  });
};

requestFetch.get = function (url, config = {}) {
  return requestFetch({
    url: url,
    method: 'GET',
    ...config
  });
};
requestFetch.post = function (url, data = {}, config = {}) {
  return requestFetch({
    url: url,
    method: 'POST',
    data: data,
    ...config
  });
};
requestFetch.put = function (url, data = {}, config = {}) {
  return requestFetch({
    url: url,
    method: 'PUT',
    data: data,
    ...config
  });
};
requestFetch.delete = function (url, config = {}) {
  return requestFetch({
    url: url,
    method: 'DELETE',
    ...config
  });
};

/**
 * 取消令牌构造函数
 * @constructor
 */
requestFetch.CancelToken = function () {
  this.cancel = null;
};
