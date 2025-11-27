
// 原有按需导出保持不变
export * from './arr'
export * from './date'
export * from './dom'
export * from './file'
export * from './function'
export * from './http'
export * from './img'
export * from './inspect'
export * from './math'
export * from './number'
export * from './obj'
export * from './other'
export * from './scroll'
export * from './storage'
export * from './string'
export * from './url'
export * from './window'

// 添加默认导出 - 将所有模块聚合为一个对象
import * as arr from './arr'
import * as date from './date'
import * as dom from './dom'
import * as file from './file'
import * as func from './function'
import * as http from './http'
import * as img from './img'
import * as inspect from './inspect'
import * as math from './math'
import * as number from './number'
import * as obj from './obj'
import * as other from './other'
import * as scroll from './scroll'
import * as storage from './storage'
import * as string from './string'
import * as url from './url'
import * as window from './window'

const JsToolkit = {
  ...arr,
  ...date,
  ...dom,
  ...file,
  ...func,
  ...http,
  ...img,
  ...inspect,
  ...math,
  ...number,
  ...obj,
  ...other,
  ...scroll,
  ...storage,
  ...string,
  ...url,
  ...window
}

export default JsToolkit
