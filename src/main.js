/*
 * @Author: yfhu
 * @Date: 2023-10-26 18:18:46
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-15 13:05:13
 * @Description: 
 */
export * from "./index.js"
import jsToolkit from "./index.js";

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

/**
 * dayjs 用于处理时间
 * https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md
 */
import dayjs from "dayjs";

/**
 * mathjs 用于处理数学运算
 * https://mathjs.org/docs/index.html
 */
import * as math from "mathjs";

/**
 * CryptoJS 用于加密解密
 * https://cryptojs.gitbook.io/docs/
 */
import CryptoJS from "crypto-js";

/**
 * nanoid 用于生成唯一标识符
 * https://github.com/ai/nanoid/blob/HEAD/README.zh-CN.md
 * @version
 */
import * as nanoid from 'nanoid'

import packageJson from "../package.json";
const _version = packageJson.version;

export {Cookies, dayjs, math, CryptoJS, nanoid, _version};

const Utils = {
  ...jsToolkit,
  Cookies,
  dayjs,
  math,
  CryptoJS,
  nanoid,
  _version
};


// require.context(检索目录, 是否检索子目录, 检索规则) 读取当前目录下的所有js文件
// const modulesFiles = require.context("./utils", false, /\.js$/);
// modulesFiles.keys().forEach((modulePath) => {
//   Object.assign(Utils, modulesFiles(modulePath));
// });

export default Utils;
