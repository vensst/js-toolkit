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
// export * from "./img.js"
export * from "./other.js";

/* 第三方库 */
// js-cookie
import * as Cookies from "js-cookie";
export { Cookies };

// dayjs
import dayjs from "dayjs";
export { dayjs };

// mathjs
import * as math from "mathjs";
export { math };

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
