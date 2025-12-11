import {isArray, isObject} from "./inspect.js";

// 抽取 localStorage/sessionStorage 通用逻辑
const createStorageHandler = (storage) => {
  return {
    set(key, val) {
      try {
        const value = (isArray(val) || isObject(val)) ? JSON.stringify(val) : val;
        storage.setItem(key, value);
      } catch (error) {
        console.error(`Failed to set ${storage.constructor.name} item:`, error);
        throw error;
      }
    },

    get(key) {

      try {
        const val = storage.getItem(key);
        return val ? JSON.parse(val) : null;
      } catch {
        return null;
      }
    },

    remove(key) {
      storage.removeItem(key);
    },

    clear() {
      storage.clear();
    }
  };
};

const createStorageMethods = (storage) => {
  const handler = createStorageHandler(storage);
  return {
    set: handler.set,
    get: handler.get,
    remove: handler.remove,
    clear: handler.clear,
  };
};

export const { set: setLocalStorage, get: getLocalStorage, remove: removeLocalStorage, clear: clearLocalStorage } = createStorageMethods(localStorage);
export const { set: setSessionStorage, get: getSessionStorage, remove: removeSessionStorage, clear: clearSessionStorage } = createStorageMethods(sessionStorage);


// cookie -------------

/**
 * 设置 cookie
 * @param {string} name - cookie 名称
 * @param {any} value - cookie 值
 * @param {Object} options - 配置选项
 * @param {number} [options.expires] - 过期时间(秒)
 * @param {string} [options.domain] - 域名
 * @param {string} [options.path] - 路径
 * @param {boolean} [options.secure] - 是否仅 HTTPS 传输
 * @param {string} [options.sameSite] - SameSite 策略 ('Strict' | 'Lax' | 'None')
 */
export const setCookie = function (name, value, options = {}) {
  if (!name) {
    throw new Error('Cookie key is required');
  }

  const {expires, domain, path = '/', secure, sameSite} = options;

  // 校验 SameSite 合法值
  if (sameSite && !['Strict', 'Lax', 'None'].includes(sameSite)) {
    throw new Error('SameSite must be one of "Strict", "Lax", or "None"');
  }

  let _value = (typeof value === 'object' && value !== null) ? JSON.stringify(value) : value;

  const encodedName = encodeURIComponent(name);
  const encodedValue = encodeURIComponent(_value);

  // 构建 cookie 字符串部分
  const parts = [`${encodedName}=${encodedValue}`];

  // 处理过期时间（包括负数，用于删除 cookie）
  if (typeof expires === 'number') {
    const expireDate = new Date(Date.now() + Math.floor(expires * 1000));
    parts.push(`expires=${expireDate.toUTCString()}`);
  }

  if (domain) parts.push(`domain=${domain}`);
  if (path) parts.push(`path=${path}`);
  if (secure) parts.push('secure');
  if (sameSite) parts.push(`samesite=${sameSite}`);

  document.cookie = parts.join('; ');
};

/**
 * 获取 cookie
 * @param {string} name - 存储的键名
 * @returns {any|undefined} 返回存储的值，如果不存在返回 undefined
 */
export const getCookie = function (name) {
  if (!name) return undefined;
  const cookieStr = document.cookie
      .split('; ')
      .find(item => decodeURIComponent(item.split('=')[0]) === name);
  if (!cookieStr) return undefined;
  const val = decodeURIComponent(cookieStr.split('=').slice(1).join('='));
  try {
    return JSON.parse(val);
  } catch {
    return val;
  }
};

/**
 * 删除 cookie
 * @param {string} name - cookie 名称
 * @param {Object} options - 配置选项
 * @param {number} [options.expires] - 过期时间(秒)
 * @param {string} [options.domain] - 域名
 * @param {string} [options.path] - 路径
 * @param {boolean} [options.secure] - 是否仅 HTTPS 传输
 * @param {string} [options.sameSite] - SameSite 策略 ('Strict' | 'Lax' | 'None')
 */
export const removeCookie = function (name, options = {}) {
  setCookie(name, '', { ...options, path: options.path || '/', expires: -1 });
};
