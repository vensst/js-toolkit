import {isType, isString, isObject, isArray} from "./inspect.js";

class VenStorage {
  constructor() {
    this.local = window.localStorage;
    this.session = window.sessionStorage;
  }

  /*-----------------localStorage---------------------*/

  /*设置localStorage*/
  setLocal(key, val) {
    let _val = val;
    if (isObject(val) || isArray(val)) {
      _val = JSON.stringify(val);
    }
    this.local.setItem(key, _val);
  }

  /*获取localStorage*/
  getLocal(key) {
    if (key) {
      let _val = this.local.getItem(key);
      try {
        _val = JSON.parse(_val)
        return _val
      } catch (e) {
        return _val
      }
    }
    return null;
  }

  /*移除localStorage*/
  removeLocal(key) {
    this.local.removeItem(key);
  }

  /*移除所有localStorage*/
  clearLocal() {
    this.local.clear();
  }

  /*-----------------sessionStorage---------------------*/

  setSession(key, val) {
    let _val = val;
    if (isObject(val) || isArray(val)) {
      _val = JSON.stringify(val);
    }
    this.session.setItem(key, _val);

  }

  /*获取sessionStorage*/
  getSession(key) {
    if (key) {
      let _val = this.session.getItem(key);
      try {
        _val = JSON.parse(_val)
        return _val
      } catch (e) {
        return _val
      }
    }
    return null;
  }

  /*移除sessionStorage*/
  removeSession(key) {
    this.session.removeItem(key);
  }

  /*移除所有sessionStorage*/
  clearSession() {
    this.session.clear();
  }

  /*-----------------cookie---------------------*/

  /*设置 cookie */
  setCookie(name, value, {expires, domain, path}) {
    function getCookieDataStr(key, val) {
      let cookieDataStr = `${key}=${val}`;
      if (expires) {
        let date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        cookieDataStr += `;expires=${date.toUTCString()}`;
      }
      if (domain) {
        cookieDataStr += `;domain=${domain}`;
      }
      if (path) {
        cookieDataStr += `;path=${path}`;
      }
      return cookieDataStr;
    }

    let _value = value;
    if (isObject(value) || isArray(value)) {
      _value = JSON.stringify(value);
    }
    document.cookie = getCookieDataStr(name, _value);

  }

  /*获取cookie*/
  getCookie(name) {
    let cdArr = document.cookie.split("; ");
    for (let i = 0; i < cdArr.length; i++) {
      let arr = cdArr[i].split("=");
      if (arr[0] === name) {
        const val = arr[1]
        try {
          return JSON.parse(val);
        } catch (e) {
          return val;
        }
      }
    }
    return "";
  }

  /*删除cookie*/
  removeCookie(name) {
    this.setCookie(name, 1, {expires: -1});
  }
}

// localStorage -----------------
/**
 * 获取 localStorage
 * @param {string} key key值
 * @returns {any}
 */
const getLocal = function (key) {
  return new VenStorage().getLocal(key);
};

/**
 * 设置 localStorage
 * @param {string} key key值
 * @param {any} val value值
 */
const setLocal = function (key, val) {
  return new VenStorage().setLocal(key, val);
};

/**
 * 清除某个 localStorage
 * @param {string} key key值
 */
const removeLocal = function (key) {
  return new VenStorage().removeLocal(key);
};

/**
 * 清除所有 localStorage
 */
const clearLocal = function () {
  return new VenStorage().clearLocal();
};

// sessionStorage -------------
/**
 * 获取 sessionStorage
 * @param {string} key key值
 * @returns {any} value值
 */
const getSession = function (key) {
  return new VenStorage().getSession(key);
};

/**
 * 设置 sessionStorage
 * @param {string} key key值
 * @param {any} val 值
 */
const setSession = function (key, val) {
  return new VenStorage().setSession(key, val);
};

/**
 * 清除某个 sessionStorage
 * @param {string} key key值
 */
const removeSession = function (key) {
  return new VenStorage().removeSession(key);
};

/**
 * 清除所有 sessionStorage
 */
const clearSession = function () {
  return new VenStorage().clearSession();
};


/**
 * 获取cookie
 * @param {string} key key值
 * @returns {string|string} value值
 */
const getCookie = function (key) {
  return new VenStorage().getCookie(key);
};

/**
 * 设置 cookie
 * @param {string} key key值
 * @param {any} value value值
 * @param {Object} options 配置
 * @param {number} options.expires 过期时间，单位：秒
 * @param {string} options.domain 域名
 * @param {string} options.path 路径
 */
const setCookie = function (key, value, options = {}) {
  return new VenStorage().setCookie(key, value, options);
};

/**
 * 删除cookie
 * @param {string} key key值
 */
const removeCookie = function (key) {
  return new VenStorage().removeCookie(key);
};

export {
  getLocal,
  setLocal,
  removeLocal,
  clearLocal,
  getSession,
  setSession,
  removeSession,
  clearSession,
  getCookie,
  setCookie,
  removeCookie
}
