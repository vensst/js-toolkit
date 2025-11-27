/*
 * @Author: yfhu
 * @Date: 2023-10-26 18:26:16
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-16 14:22:34
 * @Description:
 */
import * as number from "./number.js";
import * as string from "./string.js";
import * as arr from "./arr.js";
import * as obj from "./obj.js";
import * as date from "./date.js";
import * as func from "./function.js";
import * as dom from "./dom.js";
import * as inspect from "./inspect.js";
import * as math from "./math.js";
import * as storage from "./storage.js";
import * as url from "./url.js";
import * as file from "./file.js";
import * as img from "./img.js";
import * as http from "./http.js";
import * as scroll from "./scroll.js";
import * as window from "./window.js";
import * as other from "./other.js";

const JsToolkit = {
  ...number,
  ...string,
  ...arr,
  ...obj,
  ...date,
  ...func,
  ...dom,
  ...inspect,
  ...math,
  ...storage,
  ...url,
  ...file,
  ...img,
  ...http,
  ...scroll,
  ...window,
  ...other
};

export * from "./number.js";
export * from "./string.js";
export * from "./arr.js";
export * from "./obj.js";
export * from "./date.js";
export * from "./function.js";
export * from "./dom.js";
export * from "./inspect.js";
export * from "./math.js";
export * from "./storage.js";
export * from "./url.js";
export * from "./file.js";
export * from "./img.js";
export * from "./http.js";
export * from "./scroll.js";
export * from "./window.js";
export * from "./other.js";

export default JsToolkit;
