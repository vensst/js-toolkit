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
export * from "./utils/img.js"
export * from "./utils/other.js";

/* 第三方库 */
// js-cookie -------
import Cookies from "js-cookie";

Cookies.setJSON = function (key, value, options = {}) {
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

// dayjs -------
import dayjs from "dayjs";

export {dayjs};

// mathjs -------
import * as math from "mathjs";

export {math};

const Utils = {
    Cookies,
    dayjs,
    math,
};
// require.context(检索目录, 是否检索子目录, 检索规则) 读取当前目录下的所有js文件
const modulesFiles = require.context("./utils", false, /\.js$/);
modulesFiles.keys().forEach((modulePath) => {
    Object.assign(Utils, modulesFiles(modulePath));
});
export default Utils;
