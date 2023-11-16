/*
 * @Author: yfhu
 * @Date: 2023-10-26 18:26:16
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-16 14:22:34
 * @Description:
 */
export * from "./utils/number.js";
export * from "./utils/string.js";
export * from "./utils/arr.js";
export * from "./utils/obj.js";
export * from "./utils/date.js";
export * from "./utils/function.js";
export * from "./utils/dom.js";
export * from "./utils/inspect.js";
export * from "./utils/math.js";
export * from "./utils/storage.js";
export * from "./utils/url.js";
export * from "./utils/file.js";
export * from "./utils/img.js";
export * from "./utils/http.js";
export * from "./utils/scroll.js";
export * from "./utils/window.js";
export * from "./utils/other.js";

const Utils = {};

// require.context(检索目录, 是否检索子目录, 检索规则) 读取当前目录下的所有js文件
const modulesFiles = require.context("./utils", false, /\.js$/);
modulesFiles.keys().forEach((modulePath) => {
  Object.assign(Utils, modulesFiles(modulePath));
});
export default Utils;
