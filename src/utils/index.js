export * from "./string.js";
export * from "./number.js";
export * from "./arr.js";
export * from "./date.js";
export * from "./function.js";
export * from "./math.js";
export * from "./url.js";
export * from "./inspect.js";
export * from "./dom.js";
export * from "./http.js";
export * from "./file.js";
export * from "./storage.js";
export * from "./img.js"
export * from "./other.js";

/* 第三方库 */
// js-cookie
import Cookies from "js-cookie";

Cookies.setJSON = function (key, value,options={}) {
  try {
    Cookies.set(key, JSON.stringify(value), options)
  } catch (e) {
    console.log(e)
  }
}
Cookies.getJSON = function (key) {
  try {
    return JSON.parse(Cookies.get(key))
  } catch (e) {
    console.log(e)
    return null
  }
}
export {Cookies};

// dayjs
import dayjs from "dayjs";

export {dayjs};

// mathjs
import * as math from "mathjs";

export {math};

const Utils = {
  Cookies,
  dayjs,
  math,
};

const modulesFiles = require.context(".", false, /\.js$/);
modulesFiles.keys().forEach((modulePath) => {
  if (modulePath !== "./index.js") {
    Object.assign(Utils, modulesFiles(modulePath));
  }
});
export default Utils;
