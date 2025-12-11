// inspect.d.ts

/**
 * 获取值的类型
 * @param o - 任意类型
 * @returns 类型字符串
 */
export function getType(o: any): string;

/**
 * 类型判断
 * @param type - 类型名称
 * @param val - 待检测值
 * @returns 是否符合指定类型
 */
export function isType(type: string, val: any): boolean;

/**
 * 判断是否字符串
 * @param o - 任意类型
 * @returns 是否为字符串
 */
export function isString(o: any): o is string;

/**
 * 判断是否数字
 * @param o - 任意类型
 * @returns 是否为数字
 */
export function isNumber(o: any): o is number;

/**
 * 判断是否数字
 * @param value - 任意类型
 * @returns 是否为有效数字
 */
export function isNumeric(value: any): boolean;

/**
 * 判断是否 boolean
 * @param o - 任意类型
 * @returns 是否为布尔值
 */
export function isBoolean(o: any): o is boolean;

/**
 * 判断是否函数
 * @param o - 任意类型
 * @returns 是否为函数
 */
export function isFunction(o: any): o is Function;

/**
 * 判断是否为 null
 * @param o - 任意类型
 * @returns 是否为 null
 */
export function isNull(o: any): o is null;

/**
 * 判断是否 undefined
 * @param o - 任意类型
 * @returns 是否为 undefined
 */
export function isUndefined(o: any): o is undefined;

/**
 * 检测是否为 Blob 对象
 * @param o - 任意类型
 * @returns 是否为 Blob 对象
 */
export function isBlob(o: any): boolean;

/**
 * 判断是否对象
 * @param o - 任意类型
 * @returns 是否为对象
 */
export function isObject(o: any): o is object;

/**
 * 判断是否数组
 * @param o - 任意类型
 * @returns 是否为数组
 */
export function isArray(o: any): o is any[];

/**
 * 判断是否为 Element
 * @param o - 任意类型
 * @returns 是否为 Element
 */
export function isElement(o: any): boolean;

/**
 * 检测是否为 NodeList
 * @param o - 任意类型
 * @returns 是否为 NodeList
 */
export function isNodeList(o: any): boolean;

/**
 * 检测是否为 Node
 * @param o - 任意类型
 * @returns 是否为 Node
 */
export function isNode(o: any): boolean;

/**
 * 判断是否时间
 * @param o - 任意类型
 * @returns 是否为 Date 对象
 */
export function isDate(o: any): o is Date;

/**
 * 判断是否正则
 * @param o - 任意类型
 * @returns 是否为 RegExp 对象
 */
export function isRegExp(o: any): o is RegExp;

/**
 * 判断是否 Error 对象
 * @param o - 任意类型
 * @returns 是否为 Error 对象
 */
export function isError(o: any): o is Error;

/**
 * 判断是否 Symbol 函数
 * @param o - 任意类型
 * @returns 是否为 Symbol
 */
export function isSymbol(o: any): o is symbol;

/**
 * 判断是否 Promise 对象
 * @param o - 任意类型
 * @returns 是否为 Promise 对象
 */
export function isPromise(o: any): o is Promise<any>;

/**
 * 判断是否 Set 对象
 * @param o - 任意类型
 * @returns 是否为 Set 对象
 */
export function isSet(o: any): o is Set<any>;

/**
 * 判断是否 Map 对象
 * @param o - 任意类型
 * @returns 是否为 Map 对象
 */
export function isMap(o: any): o is Map<any, any>;

/**
 * 判断是否 WeakMap 对象
 * @param o - 任意类型
 * @returns 是否为 WeakMap 对象
 */
export function isWeakMap(o: any): o is WeakMap<object, any>;

/**
 * 判断是否 WeakSet 对象
 * @param o - 任意类型
 * @returns 是否为 WeakSet 对象
 */
export function isWeakSet(o: any): o is WeakSet<object>;

/**
 * 判断是否 ArrayBuffer 对象
 * @param o - 任意类型
 * @returns 是否为 ArrayBuffer 对象
 */
export function isArrayBuffer(o: any): o is ArrayBuffer;

/**
 * 判断是否 DataView 对象
 * @param o - 任意类型
 * @returns 是否为 DataView 对象
 */
export function isDataView(o: any): o is DataView;

/**
 * 判断是否 Int8Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Int8Array
 */
export function isInt8Array(o: any): o is Int8Array;

/**
 * 判断是否 Uint8Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Uint8Array
 */
export function isUint8Array(o: any): o is Uint8Array;

/**
 * 判断是否 Uint8ClampedArray 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Uint8ClampedArray
 */
export function isUint8ClampedArray(o: any): o is Uint8ClampedArray;

/**
 * 判断是否 Int16Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Int16Array
 */
export function isInt16Array(o: any): o is Int16Array;

/**
 * 判断是否 Uint16Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Uint16Array
 */
export function isUint16Array(o: any): o is Uint16Array;

/**
 * 判断是否 Int32Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Int32Array
 */
export function isInt32Array(o: any): o is Int32Array;

/**
 * 判断是否 Uint32Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Uint32Array
 */
export function isUint32Array(o: any): o is Uint32Array;

/**
 * 判断是否 Float32Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Float32Array
 */
export function isFloat32Array(o: any): o is Float32Array;

/**
 * 判断是否 Float64Array 类型化数组
 * @param o - 任意类型
 * @returns 是否为 Float64Array
 */
export function isFloat64Array(o: any): o is Float64Array;

/**
 * 判断是否 URL 对象
 * @param o - 任意类型
 * @returns 是否为 URL 对象
 */
export function isURL(o: any): boolean;

/**
 * 判断是否 FormData 对象
 * @param o - 任意类型
 * @returns 是否为 FormData 对象
 */
export function isFormData(o: any): boolean;

/**
 * 判断是否 File 对象
 * @param o - 任意类型
 * @returns 是否为 File 对象
 */
export function isFile(o: any): boolean;

/**
 * 判断是否为 false
 * @param v - 任意类型
 * @param isStrict - 是否严格模式
 * @returns 是否为假值
 */
export function isFalse(v: any, isStrict?: boolean): boolean;

/**
 * 判断是否为 true
 * @param o - 任意类型
 * @param isStrict - 是否严格模式
 * @returns 是否为真值
 */
export function isTrue(o: any, isStrict?: boolean): boolean;

/**
 * 严格的身份证校验
 * @param sId - 身份证号码
 * @returns 是否为有效的身份证号码
 */
export function isCardID(sId: string): boolean;

/**
 * 判断当前环境是否为移动端
 * @returns 是否为移动端
 */
export function isMobile(): boolean;

/**
 * 判断当前环境是否为ios苹果手机
 * @returns 是否为iOS设备
 */
export function isIos(): boolean;

/**
 * 判断当前环境是否为 PC 端
 * @returns 是否为PC端
 */
export function isPC(): boolean;

/**
 * 判断是否是PC浏览器
 * @returns 是否是PC浏览器
 */
export function isPcBrowser(): boolean;

/**
 * 获取当前属于哪种类型手机运行环境
 * @returns 手机运行环境类型
 */
export function getMobileEnv(): string;

/**
 * 获取浏览器类型
 * @returns 浏览器类型
 */
export function getBrowserType(): string;

/**
 * 检测密码强度
 * @param password - 需要检测的密码
 * @returns 密码强度等级(0-4)
 */
export function checkPasswordLevel(password: string): number;

/**
 * 检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确
 * @param str - 检查的字符串
 * @param type - 类型
 * @returns 是否符合指定格式
 */
export function checkFormat(str: string, type: 'phone' | 'tel' | 'card' | 'pwd' | 'postal' | 'QQ' | 'email' | 'money' | 'URL' | 'IP' | 'date' | 'number' | 'english' | 'chinese' | 'lower' | 'upper' | 'HTML'): boolean;

/**
 * 判断当前页面是否处于全屏状态
 * @returns 是否处于全屏状态
 */
export function isFullScreen(): boolean;
