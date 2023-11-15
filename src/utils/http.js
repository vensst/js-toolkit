/*
 * @Author: yfhu
 * @Date: 2023-11-07 09:22:11
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-13 16:28:30
 * @Description:
 */
import {objToUrlParams} from './url.js'
import {isObject} from "./inspect.js";

/**
 * 简易封装XMLHttpRequest请求
 * @param {Object} config 配置，参考[XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Glossary/XMLHttpRequest)
 * @param {string} config.url 请求地址
 * @param {string} [config.method='GET'] 请求方式
 * @param {Object} [config.headers] 请求头设置
 * @param {Object} [config.params] get请求数据
 * @param {Object} [config.data] post、put、delete请求数据
 * @param {string} [config.responseType='json'] 响应类型 json
 * @param {boolean} [config.asycn=true] 是否异步
 * @param {number} [config.timeout=15000] 超时时间
 * @param {Object} [config.auth] 权限
 * @param {string} [config.auth.username]
 * @param {string} [config.auth.password]
 * @param {CancelToken} [config.cancelToken] 取消请求
 * @returns {Promise<unknown>} 返回 Promise 对象
 */
const _ajax = function (config) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    config.method = (config.method || "get").toUpperCase()
    if (!['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(config.method)) {
      config.method = "GET"
    }

    if (config.method === 'GET') {
      const params = objToUrlParams(config.params)
      config.url = config.url + (params ? '?' + params : '')
    } else {
      if (isObject(config.data)) {
        config.data = JSON.stringify(config.data)
      }
    }

    xhr.open(config.method, config.url, config.async ?? true, config.auth?.username || '', config.auth?.password || '');

    // 设置请求头
    if (isObject(config.headers)) {
      for (let header in config.headers) {
        xhr.setRequestHeader(header, config.headers[header]);
      }
    }

    // 超时处理
    xhr.timeout = config.timeout ??= 15000

    // 取消请求
    if (config.cancelToken) {
      config.cancelToken.cancel = function (message = '请求取消') {
        xhr.abort();
        reject(new Error(message))
      }
    }

    config.responseType ??= 'json'
    /**
     * 每当readyState改变时，就会触发onreadystatechange事件
     * readyState属性存储有XMLHttpRequest的状态信息
     * 0 ：请求未初始化
     * 1 ：服务器连接已建立
     * 2 ：请求已接受
     * 3 ：请求处理中
     * 4 ：请求已完成，且相应就绪
     */
    xhr.onload = function () {
      // 请求完成。在此进行处理。
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
        switch (config.responseType) {
          case "json":
            let json = JSON.parse(xhr.responseText);
            resolve(json);
            break;
          case "xml":
            resolve(xhr.responseXML);
            break;
          default:
            resolve(xhr.responseText);
            break;
        }
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    // 处理网络错误
    xhr.onerror = function (err) {
      reject(new Error("网络错误"));
    };

    // 处理超时错误
    xhr.ontimeout = function () {
      reject(new Error("请求超时"));
    };

    // 发送请求
    xhr.send(config.method === 'GET' ? '' : config.data);
  });
}
_ajax.CancelToken = function () {
}

/**
 * 简易封装fetch请求
 * @param {string} url 请求地址
 * @param {Object} [config]  配置
 * @param {string} [config.method='GET'] 请求方式
 * @param {string} [config.responseType='json'] 响应类型 json
 * @param {Object} [config.headers] 请求头设置
 * @param {Object} [config.params] get请求数据
 * @param {Object} [config.data] post、put、delete请求数据
 * @param {string} [config.credentials] 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(同源才允许)omit都不允许
 * @param {Object} [config.body] 设置请求主体信息(只有post系列请求才可以设置,get系列请求会报错,格式有要求:json字符串,URLENCODED格式字符串,普通字符串,FormData格式对象,Buffer/bolb格式...不能是普通对象,并且要根据请求主体的数据格式,配置相关的请求头(Content-Type)
 * @param {string} [config.mode] 可以设置 cors, no-cors, same-origin
 * @param {string} [config.redirect] 可以设置 follow, error, manual
 * @param {string} [config.cache] 可以设置 default, reload, no-cache
 * @returns {Promise<unknown>} 返回 Promise 对象
 */
const _fetch = function (url, config) {
  const controller = new AbortController();
  const {signal} = controller;

  config.method = (config.method || "get").toUpperCase()
  if (!['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(config.method)) {
    config.method = "GET"
  }
  if (config.method === "GET") {
    const params = objToUrlParams(config.params)
    url = url + (params ? '?' + params : '')
  } else {
    // 优先取data值
    if (isObject(config.data)) {
      config.body = JSON.stringify(config.data)
    } else {
      if (config.data) {
        config.body = config.data
      }
    }
  }

  // 设置超时时间
  const timeout = config.timeout ?? 15000; // 默认超时时间为5秒

  let timeoutError = null;
  // 创建一个定时器，在超时时间后中断请求
  const timeoutId = setTimeout(() => {
    controller.abort();
    timeoutError = new Error("请求超时")
  }, timeout);

  config.responseType ??= 'json'
  return new Promise((resolve, reject) => {
    // 取消请求
    if (config.cancelToken) {
      config.cancelToken.cancel = (message = '请求取消') => {
        clearTimeout(timeoutId); // 清除定时器
        controller.abort(); // 中断请求
        reject(new Error(message))
      }
    }

    fetch(url, {...config, signal})
        .then((response) => {
          clearTimeout(timeoutId);
          if (response.ok) {
            switch (config.responseType) {
              case "json":
                resolve(response.json());
                break;
              case "text":
                resolve(response.text());
                break;
              case "blob":
                resolve(response.blob());
                break;
              default:
                resolve(response);
                break;
            }
          } else {
            reject(response.statusText);
          }
        })
        .catch((error) => {
          clearTimeout(timeoutId);
          reject(timeoutError || error);
        });
  });
}
_fetch.CancelToken = function () {
}
export {
  _ajax,
  _fetch
}
