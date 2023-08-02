/**
 * 获取当前url地址栏指定参数
 * @param {string} name 参数名
 * @returns {(string|null)} 参数值
 */
const getUrlParam = function (name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = decodeURI(window.location.search).substring(1).match(reg);
  if (r != null) return r[2];
  return null;
};

/**
 * 获取指定url地址上所有参数
 * @param {string|null} url url地址
 * @returns {Object} 参数对象
 */
const getUrlParams = function (url) {
  url = url == null ? window.location.href : url;
  const search = url.substring(url.lastIndexOf("?") + 1);
  const obj = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name = window.decodeURIComponent($1);
    let val = window.decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
};

/**
 * 删除指定url地址上指定参数
 * @param {string} url url地址
 * @param {string} name 参数名
 * @returns {string|*} 返回新的url地址
 */
const delUrlParam = function (url, name) {
  let baseUrl = url.split("?")[0] + "?";
  let query = url.split("?")[1];
  if (query.indexOf(name) > -1) {
    let obj = {};
    let arr = query.split("&");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    return baseUrl +
        JSON.stringify(obj)
            .replace(/[\"\{\}]/g, "")
            .replace(/\:/g, "=")
            .replace(/\,/g, "&");
  } else {
    return url;
  }
};

/**
 * 对象转url参数
 * @param {Object} obj 参数对象
 * @returns {string} url参数
 * @version 1.1.0-beta.11
 */
const objToUrlParams = function (obj) {
  let str = '';
  for (let key in obj) {
    str += `${key}=${obj[key]}&`
  }
  return str.slice(0, -1)
}

export {
  getUrlParam,
  getUrlParams,
  delUrlParam,
  objToUrlParams
}
