/**
 * @name: url
 * @description：url.js
 * @date: 2022/5/26 18:44
 * @author: yf_hu
 */

/**
 * 正则表达式获取 url 地址栏参数
 * @param name {string} 参数名
 * @returns {string|null}
 */
export const getUrlParam = function (name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = decodeURI(window.location.search).substring(1).match(reg);
  if (r != null) return r[2];
  return null;
}

/**
 *
 * @param url {string|null} url地址
 * @returns {Object} 参数对象
 */
export const getUrlAllParams = function (url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = window.decodeURIComponent($1)
    let val = window.decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 删除 url 指定参数，返回url
 * @param url {string} url地址
 * @param name  {string} 参数名
 * @returns {string|*} 返回url
 */
/**
 *
 * @param url {string} url地址
 * @param name {string} 参数名
 * @returns {string|*} 返回url
 */
export const delParamsUrl = function (url, name) {
  let baseUrl = url.split('?')[0] + '?';
  let query = url.split('?')[1];
  if (query.indexOf(name) > -1) {
    let obj = {}
    let arr = query.split("&");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    let url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
    return url
  } else {
    return url;
  }
}
