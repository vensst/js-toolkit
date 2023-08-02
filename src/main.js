export * from "./utils/string.js";
export * from "./utils/number.js";
export * from "./utils/arr.js";
export * from "./utils/date.js";
export * from "./utils/function.js";
export * from "./utils/math.js";
export * from "./utils/url.js";
export * from "./utils/inspect.js";
export * from "./utils/dom.js";
export * from "./utils/http.js";
export * from "./utils/file.js";
export * from "./utils/storage.js";
export * from "./utils/img.js";
export * from "./utils/window.js";
export * from "./utils/scroll.js";
export * from "./utils/other.js";

/* 第三方库 */

/**
 * js-cookie 用于处理浏览器cookie
 * https://github.com/js-cookie/js-cookie
 * */
import Cookies from "js-cookie";

Cookies.setJSON = function (key, value, options = {}) {
  try {
    Cookies.set(key, JSON.stringify(value), options)
  } catch (e) {
    throw new Error(e)
  }
}
Cookies.getJSON = function (key) {
  try {
    return JSON.parse(Cookies.get(key))
  } catch (e) {
    throw new Error(e)
  }
}
export {Cookies};

/**
 * dayjs 用于处理时间
 * https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md
 */
import dayjs from "dayjs";

export {dayjs};

/**
 * mathjs 用于处理数学运算
 * https://mathjs.org/docs/index.html
 */
import * as math from "mathjs";

export {math};

/**
 * CryptoJS 用于加密解密
 * https://cryptojs.gitbook.io/docs/
 */
import CryptoJS from "crypto-js";
export {CryptoJS};

/**
 * uuid 用于生成唯一标识符
 * https://github.com/uuidjs/uuid#readme
 * @version
 */
import * as uuid from "uuid";
export {uuid};

const Utils = {
  Cookies,
  dayjs,
  math,
  CryptoJS,
  uuid
};

// require.context(检索目录, 是否检索子目录, 检索规则) 读取当前目录下的所有js文件
const modulesFiles = require.context("./utils", false, /\.js$/);
modulesFiles.keys().forEach((modulePath) => {
  Object.assign(Utils, modulesFiles(modulePath));
});
export default Utils;
