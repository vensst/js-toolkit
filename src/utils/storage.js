class VenStorage {
  constructor() {
    this.local = window.localStorage;
    this.session = window.sessionStorage;
  }

  /*-----------------localStorage---------------------*/

  /*设置localStorage*/
  setLocal(key, val) {
    let setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (let i in setting) {
        this.local.setItem(i, JSON.stringify(setting[i]))
      }
    } else {
      this.local.setItem(key, JSON.stringify(val))
    }
  }

  /*获取localStorage*/
  getLocal(key) {
    if (key) return JSON.parse(this.local.getItem(key))
    return null;
  }

  /*移除localStorage*/
  removeLocal(key) {
    this.local.removeItem(key)
  }

  /*移除所有localStorage*/
  clearLocal() {
    this.local.clear()
  }

  /*-----------------sessionStorage---------------------*/

  setSession(key, val) {
    let setting = arguments[0];
    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (let i in setting) {
        this.session.setItem(i, JSON.stringify(setting[i]))
      }
    } else {
      this.session.setItem(key, JSON.stringify(val))
    }
  }

  /*获取sessionStorage*/
  getSession(key) {
    if (key) return JSON.parse(this.session.getItem(key))
    return null;
  }

  /*移除sessionStorage*/
  removeSession(key) {
    this.session.removeItem(key)
  }

  /*移除所有sessionStorage*/
  clearSession() {
    this.session.clear()
  }


  /*-----------------cookie---------------------*/

  /*设置 cookie */
  setCookie(name, value, {expires, domain, path}) {
    let setting = arguments[0];

    function getCookieDataStr(key, val) {
      let cookieDataStr = `${key}=${val}`;
      if (expires) {
        let date = new Date();
        date.setTime(date.getTime() + expires * 1000);
        cookieDataStr += `;expires=${date.toUTCString()}`
      }
      if (domain) {
        cookieDataStr += `;domain=${domain}`
      }
      if (path) {
        cookieDataStr += `;path=${path}`
      }
      return cookieDataStr
    }


    if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
      for (let i in setting) {
        document.cookie = getCookieDataStr(i, setting[i]);
      }
    } else {
      document.cookie = getCookieDataStr(name, value);
    }

  }

  /*获取cookie*/
  getCookie(name) {
    let cdArr = document.cookie.split('; ');
    for (let i = 0; i < cdArr.length; i++) {
      let arr = cdArr[i].split('=');
      if (arr[0] === name) {
        return arr[1]
      }
    }
    return '';
  }

  /*删除cookie*/
  removeCookie(name) {
    this.setCookie(name, 1, {expires: -1});
  }

}

// localStorage -----------------
/**
 * 获取 localStorage
 * @param key
 * @returns {any}
 */
export const getLocal = function (key) {
  return new VenStorage().getLocal(key)
}

/**
 * 设置 localStorage
 */
export const setLocal = function (key, val) {
  return new VenStorage().setLocal(key, val)
}

/**
 * 清除某个 localStorage
 * @param key
 */
export const removeLocal = function (key) {
  return new VenStorage().removeLocal(key)
}

/**
 * 清除所有 localStorage
 */
export const clearLocal = function () {
  return new VenStorage().clearLocal()
}

// sessionStorage -------------
/**
 * 获取 sessionStorage
 * @param key
 * @returns {any}
 */
export const getSession = function (key) {
  return new VenStorage().getSession(key)
}

/**
 * 设置 sessionStorage
 */
export const setSession = function (key, val) {
  return new VenStorage().setSession(key, val)
}

/**
 * 清除某个 sessionStorage
 * @param key
 */
export const removeSession = function (key) {
  return new VenStorage().removeSession(key)
}

/**
 * 清除所有 sessionStorage
 */
export const clearSession = function () {
  return new VenStorage().clearSession()
}

/**
 *
 * @param name
 * @param value
 * @param expires
 * @param domain
 * @param path
 */
export const setCookie = function (name, value, options = {}) {
  return new VenStorage().setCookie(name, value, options)
}

/**
 * 获取 cookie
 * @param name
 * @returns {string|string}
 */
export const getCookie = function (name) {
  return new VenStorage().getCookie(name)
}

/**
 * 删除 cookie
 * @param name
 */
export const removeCookie = function (name) {
  return new VenStorage().removeCookie(name)
}
