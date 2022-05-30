/**
 * @name: url
 * @description：url.js
 * @date: 2022/5/26 18:44
 * @author: yf_hu
 */
/*
 * @desc 正则表达式获取url地址栏参数
 * @param {String} name 参数名
 * @return {String/null} 返回 值 or null
 * */
export const getUrlParam = function (name) {
  // let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  // let r = window.location.search.substr(1).match(reg);
  // if (r != null) return unescape(r[2]);
  // return null;
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = decodeURI(window.location.search).substr(1).match(reg);
  if (r != null) return r[2];
  return null;
}

/*获取全部url参数,并转换成json对象*/
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
/*删除url指定参数，返回url*/
export const delParamsUrl = function (url, name) {
  var baseUrl = url.split('?')[0] + '?';
  var query = url.split('?')[1];
  if (query.indexOf(name) > -1) {
    var obj = {}
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    ;
    delete obj[name];
    var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
    return url
  } else {
    return url;
  }
}
