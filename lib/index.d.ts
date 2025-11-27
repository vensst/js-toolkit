// inspect.d.ts
declare const getType: (o: any) => string;

declare const isType: (type: string, val: any) => boolean;

declare const isString: (o: any) => boolean;
declare const isNumber: (o: any) => boolean;
declare const isNumeric: (value: any) => boolean;
declare const isBoolean: (o: any) => boolean;
declare const isFunction: (o: any) => boolean;
declare const isNull: (o: any) => boolean;
declare const isUndefined: (o: any) => boolean;
declare const isBlob: (o: any) => boolean;
declare const isObject: (o: any) => boolean;
declare const isArray: (o: any) => boolean;
declare const isElement: (o: any) => boolean;
declare const isNodeList: (o: any) => boolean;
declare const isDate: (o: any) => boolean;
declare const isRegExp: (o: any) => boolean;
declare const isError: (o: any) => boolean;
declare const isSymbol: (o: any) => boolean;
declare const isPromise: (o: any) => boolean;
declare const isSet: (o: any) => boolean;
declare const isMap: (o: any) => boolean;
declare const isWeakMap: (o: any) => boolean;
declare const isWeakSet: (o: any) => boolean;
declare const isArrayBuffer: (o: any) => boolean;
declare const isDataView: (o: any) => boolean;
declare const isInt8Array: (o: any) => boolean;
declare const isUint8Array: (o: any) => boolean;
declare const isUint8ClampedArray: (o: any) => boolean;
declare const isInt16Array: (o: any) => boolean;
declare const isUint16Array: (o: any) => boolean;
declare const isInt32Array: (o: any) => boolean;
declare const isUint32Array: (o: any) => boolean;
declare const isFloat32Array: (o: any) => boolean;
declare const isFloat64Array: (o: any) => boolean;
declare const isURL: (o: any) => boolean;
declare const isFormData: (o: any) => boolean;
declare const isFile: (o: any) => boolean;

declare const isFalse: (o: any) => boolean;
declare const isTrue: (o: any) => boolean;

declare const isCardID: (sId: string) => boolean;

declare const isMobile: () => boolean;
declare const isIos: () => boolean;
declare const isPC: () => boolean;
declare const isPcBrowser: () => boolean;
declare const getMobileEnv: () => string;
declare const getBrowserType: () => string;

declare const checkPasswordLevel: (password: string) => number;

declare const checkFormat: (str: string, type: string) => boolean;

declare const isFullScreen: () => boolean;

// 类型常量定义
declare const validTypesSet: Set<string>;

// 密码规则正则表达式
declare const passwordRules: RegExp[];

// 正则表达式映射
declare const regExpMap: {
  phone: RegExp;
  tel: RegExp;
  card: RegExp;
  pwd: RegExp;
  postal: RegExp;
  QQ: RegExp;
  email: RegExp;
  money: RegExp;
  URL: RegExp;
  IP: RegExp;
  date: RegExp;
  number: RegExp;
  english: RegExp;
  chinese: RegExp;
  lower: RegExp;
  upper: RegExp;
  HTML: RegExp;
};

// arr.d.ts



/**
 * 稳定序列化：对对象的键按字母序排序后再序列化，避免因键顺序导致的不同结果。
 * 只用于比较/判重场景（性能适中），遇到循环引用时会回退到 JSON.stringify 的异常处理结果。
 * @param value - 要序列化的值
 * @returns 序列化字符串
 */
declare function stableStringify(value: any): string;

/**
 * 查找数组中元素，返回匹配元素
 * @param arr - 需要查找的数组
 * @param callback - 迭代调用的函数
 * @param fromIndex - 开始查找的索引位置
 * @returns 返回匹配的元素，未找到返回 undefined
 * @throws {Error} 如果 arr 不是数组或 callback 不是函数
 */
declare const find: <T>(
  arr: T[],
  callback: (element: T, index: number) => boolean,
  fromIndex?: number
) => T | undefined;

/**
 * 查找数组中元素，返回匹配元素索引
 * @param arr - 需要查找得数组
 * @param callback - 迭代调用的函数
 * @param fromIndex - 开始查找的索引位置
 * @returns 返回匹配元素的索引，未找到返回 -1
 * @throws {Error} 如果 arr 不是数组或 callback 不是函数
 */
declare const findIndex: <T>(
  arr: T[],
  callback: (element: T, index: number) => boolean,
  fromIndex?: number
) => number;

/**
 * 自定义 forEach 函数，支持 async-await
 * @param arr - 需要遍历的数组
 * @param callback - 迭代回调函数
 * @param thisObj - 回调函数的 this 指向
 * @returns 如果回调函数是异步的则返回 Promise
 * @throws {Error} 如果第一个参数不是数组
 */
declare const forEach: <T>(
  arr: T[],
  callback: (element: T, index: number, array: T[]) => void | Promise<void>,
  thisObj?: any
) => void | Promise<void>;

/**
 * 自定义 map 函数
 * @param arr - 需要映射的数组
 * @param callback - 为数组中每个元素执行的回调函数
 * @param thisObj - 执行回调时用作 this 的对象
 * @returns 由回调函数返回值组成的新数组
 * @throws {Error} 如果第一个参数不是数组或 callback 不是函数
 */
declare const map: <T, R>(
  arr: T[],
  callback: (element: T, index: number, array: T[]) => R,
  thisObj?: any
) => R[];

/**
 * 对组中元素连接成字符串
 * @param arr - 数组
 * @param char - 拼接符号
 * @param attrName - 属性名，迭代数组为对象数组有效
 * @returns 字符串
 */
declare const join: <T>(
  arr: T[],
  char?: string,
  attrName?: string
) => string;

/**
 * 数组排序（支持普通数组和对象数组）
 * @param arr - 需要排序的数组
 * @param predicate - 排序类型或自定义比较函数
 *   - 1: 从小到大（默认）
 *   - 2: 从大到小
 *   - 3: 随机排序
 *   - Function: 自定义比较函数，接收两个参数 (a, b)，返回值决定排序顺序
 * @param attrName - 对象数组排序时指定的属性名
 * @returns 排序后的新数组
 * @throws {Error} 如果第一个参数不是数组
 */
declare const sort: <T>(
  arr?: T[] | number[],
  predicate?: number | ((a: T, b: T) => number),
  attrName?: string
) => T[] | number[];

/**
 * 数组去重
 * @param arr - 需要去重的数组
 * @param attrName - 指定属性名称，用于对象数组去重
 * @returns 去重后的数组
 */
declare const unique: <T>(arr: T[], attrName?: string) => T[];

/**
 * 求两个数组的并集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param attrName - 指定属性名称（用于对象数组，根据该属性去重）
 * @returns 返回并集数组
 */
declare const union: <T>(arr1: T[], arr2: T[], attrName?: string) => T[];

/**
 * 求两个数组的交集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param attrName - 指定属性名称（用于对象数组，根据该属性求交集）
 * @returns 返回交集数组
 */
declare const intersect: <T>(arr1: T[], arr2: T[], attrName?: string) => T[];

/**
 * 在二维数组中根据指定属性名获取数组的交集
 * @param arr - 二维数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
 * @param attrName - 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组
 * @returns 返回交集数组
 */
declare const intersectInMatrix: <T>(arr: T[][], attrName?: string) => T[];

/**
 * 查找数组中指定元素出现的次数
 * @param arr - 要检测的数组
 * @param predicate - 要查找的元素或判断函数
 * @returns 返回出现次数
 * @throws {Error} 如果第一个参数不是数组
 */
declare const countInArray: <T>(
  arr: T[],
  predicate: T | ((element: T, index: number, array: T[]) => boolean)
) => number;

/**
 * 为对象数组中的重复数据添加序号标记
 * @param arr - 需要处理的对象数组
 * @param attrName - 用于判断重复的属性名称
 * @param tagAttrName - 用于添加序号标记的属性名称
 * @returns 返回添加了序号标记的新数组（深拷贝）
 */
declare const tagDuplicates: <T>(
  arr: T[],
  attrName: string,
  tagAttrName?: string
) => T[];

/**
 * 根据指定属性对数组进行分组
 * @param arr - 需要分组的数组
 * @param attrName - 用于分组的属性名称
 * @returns 返回按属性值分组后的对象，键为属性值，值为具有相同属性值的元素数组
 */
declare const groupByAttr: <T>(
  arr: T[],
  attrName: string
) => Record<string, T[]>;

/**
 * 根据指定长度对数组进行分组
 * @param arr - 需要分组的数组
 * @param size - 每组的元素数量
 * @returns 返回分组后的二维数组
 */
declare const groupBySize: <T>(arr: T[], size: number) => T[][];

/**
 * 将类数组转换为数组的方法
 * @param arr - 类数组对象（如 arguments、NodeList 等）
 * @returns 转换后的数组
 */
declare const toArray: <T>(arr: ArrayLike<T>) => T[];

/**
 * 将一维数组转为树形结构数据
 * @param arr - 包含父子关系信息的一维数组
 * @param options - 转换配置选项
 * @returns 树形结构数组
 */
declare const arrayToTree: <T extends Record<string, any>>(
  arr: T[],
  options?: {
    id?: string;
    parentId?: string;
    children?: string;
  }
) => T[];

/**
 * 树形数据转一维数组
 * @param tree - 树形结构数组
 * @param options - 转换配置选项
 * @returns 扁平化后的一维数组
 */
declare const treeToArray: <T extends Record<string, any>>(
  tree: T[],
  options?: {
    children?: string;
  }
) => T[];

/**
 * 在树形结构中查找目标节点的路径
 * @param treeArr - 树形结构数据数组
 * @param targetKey - 目标节点的键名
 * @param targetValue - 目标节点的键值
 * @param childrenKey - 子节点集合的键名
 * @param backKey - 路径中返回值的键名
 * @returns 找到目标节点时返回路径数组，未找到时返回 undefined
 */
declare const findNodePath: <T extends Record<string, any>>(
  treeArr: T[],
  targetKey: string,
  targetValue: any,
  childrenKey?: string,
  backKey?: string
) => any[] | undefined;

/**
 * 数组最大值
 * @param arr - 数字数组或对象数组
 * @param attrName - 对象数组中用于比较的属性名
 * @returns 数组中的最大值，空数组返回 undefined
 */
declare const max: <T>(
  arr: T[],
  attrName?: string
) => number | undefined;

/**
 * 获取数组最小值
 * @param arr - 数组
 * @param attrName - 对象数组中用于比较的属性名
 * @returns 数组中的最小值，空数组返回 undefined
 */
declare const min: <T>(
  arr: T[],
  attrName?: string
) => number | undefined;

/**
 * 格式化日期
 * @param date - 时间戳或日期对象，支持字符串、10位或13位时间戳
 * @param valueFormat - 格式字符串
 * @returns 格式化后的日期字符串，如果输入无效日期则返回 null
 */
declare function formatDate(
  date?: Date | string | number,
  valueFormat?: string
): string | null;

declare enum RangeDirection {
  /**
   * 前几天
   */
  PREV = -1,
  /**
   * 前后几天
   */
  CURRENT = 0,
  /**
   * 后几天
   */
  NEXT = 1,
}
/**
 * 根据指定日期获取指定范围的日期集合
 * @param date - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param len - 范围长度（天数）
 * @param dir - 方向：-1 取基准日期之前的 [len] 天，0 取基准日期前后各 [len] 天，1 取基准日期之后的 [len] 天
 * @param valueFormat - 日期格式
 * @returns 日期集合，按时间顺序排列
 */
declare function getDateRange(
  date?: Date | string | number,
  len?: number,
  dir?: RangeDirection,
  valueFormat?: string
): string[];

/**
 * 获取指定日期所在月份的总天数
 * @param date - 日期对象、日期字符串或时间戳
 * @returns 指定月份的总天数（28-31之间）
 */
declare function getDaysInMonth(date?: Date | string | number): number;

/**
 * 获取指定年份的总天数
 * @param year - 年份
 * @returns 指定年份的总天数（365或366天）
 */
declare function getDaysInYear(year?: Date | number | string): number;

/**
 * 根据指定日期获取指定范围的日期集合
 * @param date - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param length - 要获取的月份数量
 * @param dir - 方向：-1 获取之前的月份(默认)，0 获取前后月份，1 获取之后的月份
 * @param valueFormat - 返回的日期格式
 * @returns 月份集合，按时间顺序排列
 */
declare function getMonthsRange(
  date?: Date | string | number,
  length?: number,
  dir?: RangeDirection,
  valueFormat?: string
): string[];

/**
 * 获取指定日期所在季度的开始月份
 * @param date - 日期对象、日期字符串或时间戳
 * @param valueFormat - 返回的日期格式
 * @returns 季度开始月份
 */
declare function getStartMonthOfQuarter(
  date?: Date | string | number,
  valueFormat?: string
): string;

/**
 * 获取指定日期是当年中的第几天
 * @param date - 日期对象、日期字符串或时间戳
 * @returns 日期在年中的天数索引（1-366）
 */
declare function getDayOfYear(date?: Date | string | number): number;

/**
 * 获取指定日期在年中的周数（自然周）
 * @param date - 日期对象、日期字符串或时间戳
 * @returns 日期在年中的周数（1-53）
 */
declare function getWeekOfYear(date?: Date | string | number): number;

/**
 * 根据日期获取本周、上周、下周的开始日期（周一为一周开始）
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上周  0:本周(默认)  1:下周
 * @param valueFormat - 返回的日期格式
 * @returns 周开始日期（周一）
 */
declare function getStartOfWeek(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获得本周、上周、下周的结束日期（周日为一周结束）
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上周  0:本周(默认)  1:下周
 * @param valueFormat - 返回的日期格式
 * @returns 周结束日期（周日）
 */
declare function getEndOfWeek(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获得本月、上月、下月开始日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上月  0:本月(默认)  1:下月
 * @param valueFormat - 返回的日期格式
 * @returns 月开始日期
 */
declare function getStartOfMonth(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获得本月、上月、下月结束日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上月  0:本月(默认)  1:下月
 * @param valueFormat - 返回的日期格式
 * @returns 月结束日期
 */
declare function getEndOfMonth(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本季度、上季度、下季度的开始日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
 * @param valueFormat - 返回的日期格式
 * @returns 季度开始日期
 */
declare function getStartOfQuarter(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本季度、上季度、下季度的结束日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
 * @param valueFormat - 返回的日期格式
 * @returns 季度结束日期
 */
declare function getEndOfQuarter(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本年、上年、下年的开始日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上年  0:本年(默认)  1:下年
 * @param valueFormat - 返回的日期格式
 * @returns 年开始日期
 */
declare function getStartOfYear(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本年、上年、下年的结束日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上年  0:本年(默认)  1:下年
 * @param valueFormat - 返回的日期格式
 * @returns 年结束日期
 */
declare function getEndOfYear(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 获取指定日期的前几天日期
 * @param date - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param len - 要减去的天数，正数表示过去的日期，负数表示未来的日期
 * @param valueFormat - 返回的日期格式
 * @returns 格式化后的日期字符串
 */
declare function getDateOffset(
  date?: Date | string | number,
  len?: number,
  valueFormat?: string
): string;

/**
 * 获取两个日期之间的所有日期（包含起始和结束日期）
 * @param startDate - 开始日期，可以是日期对象、日期字符串或时间戳
 * @param endDate - 结束日期，可以是日期对象、日期字符串或时间戳
 * @param valueFormat - 返回的日期格式
 * @returns 日期字符串数组，按时间顺序排列
 */
declare function getDatesBetween(
  startDate?: Date | string | number,
  endDate?: Date | string | number,
  valueFormat?: string
): string[];

/**
 * 以前时间距离当前时间的时间差
 * @param date - 时间对象或时间戳
 * @param opt - 选项配置
 * @returns 时间差
 */
declare function timeAgo(
  date?: Date | number | string,
  opt?: {
    year?: string;
    month?: string;
    week?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    just?: string;
  }
): string;

/**
 * 根据步长获取时间间隔
 * @param step - 间隔 单位：分钟
 * @returns 时间间隔数组
 */
declare function getTimeSlotByStep(step?: number): string[];

/**
 * 秒转时分秒格式
 * @param s - 秒数
 * @param valueFormat - 格式，可以自定义例如：["h", "m", "s"]
 * @returns 格式化后的时间字符串
 */
declare function sToHms(s?: number, valueFormat?: string[]): string;

/**
 * 日期处理类，用于计算各种日期范围
 * 提供周、月、季度、年的开始和结束日期计算功能
 */
declare class VenDate {
  /**
   * 创建 VenDate 实例
   * @param date - 日期对象、日期字符串或时间戳
   */
  constructor(date?: Date | string | number);

  nowDate: Date;
  year: number;
  month: number;
  day: number;
  week: number;

  /**
   * 根据日期获取本周、上周、下周的开始日期（周一为一周开始）
   * @param type - 类型 -1:上周  0:本周(默认)  1:下周
   * @param valueFormat - 返回的日期格式
   * @returns 周开始日期（周一）
   */
  getStartOfWeek(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获得本周、上周、下周的结束日期（周日为一周结束）
   * @param type - 类型 -1:上周  0:本周(默认)  1:下周
   * @param valueFormat - 返回的日期格式
   * @returns 周结束日期（周日）
   */
  getEndOfWeek(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获得本月、上月、下月开始日期
   * @param type - 类型 -1:上月  0:本月(默认)  1:下月
   * @param valueFormat - 返回的日期格式
   * @returns 月开始日期
   */
  getStartOfMonth(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获得本月、上月、下月结束日期
   * @param type - 类型 -1:上月  0:本月(默认)  1:下月
   * @param valueFormat - 返回的日期格式
   * @returns 月结束日期
   */
  getEndOfMonth(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本季度、上季度、下季度的开始日期
   * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
   * @param valueFormat - 返回的日期格式
   * @returns 季度开始日期
   */
  getStartOfQuarter(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本季度、上季度、下季度的结束日期
   * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
   * @param valueFormat - 返回的日期格式
   * @returns 季度结束日期
   */
  getEndOfQuarter(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本年、上年、下年的开始日期
   * @param type - 类型 -1:上年  0:本年(默认)  1:下年
   * @param valueFormat - 返回的日期格式
   * @returns 年开始日期
   */
  getStartOfYear(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本年、上年、下年的结束日期
   * @param type - 类型 -1:上年  0:本年(默认)  1:下年
   * @param valueFormat - 返回的日期格式
   * @returns 年结束日期
   */
  getEndOfYear(type?: number, valueFormat?: string): string;
}

// dom.d.ts
declare function queryElement(selector: string): Element | NodeList | undefined;

declare function hasClass(el: Element | NodeList | Element[], className: string): boolean;

declare function addClass(el: Element | NodeList | Element[], className: string): Element | NodeList | Element[];

declare function removeClass(el: Element | NodeList | Element[], className: string): Element | NodeList | Element[];

declare function replaceClass(
  el: Element | NodeList | Element[],
  oldClassName: string,
  newClassName: string
): Element | NodeList | Element[];

declare function getSiblings(el: Element): Element[] | undefined;

declare function getStyle(el: Element): CSSStyleDeclaration;
declare function getStyle(el: Element, attrName: string): string | undefined;
declare function getStyle(el: Element, attrName?: string): CSSStyleDeclaration | string | undefined;

declare function addStyle(
  el: Element | NodeList | Element[],
  styles: Record<string, string | number>
): Element | NodeList | Element[];

declare function insertAfter(el: Element, htmlString: string): void;

declare function insertBefore(el: Element, htmlString: string): void;

// file.d.ts

/**
 * MIME类型映射表（作为补充使用）
 */
declare const mimeTypeMap: Map<string, string>;

/**
 * 提取扩展名并查找 MIME
 * 根据文件名的扩展名获取对应的 MIME 类型
 * @param fileName - 文件名（例如："a.png"，"b.jpg"）
 * @returns 对应的 MIME 类型，如果未找到则返回 undefined
 */
declare function getMimeType(fileName: string): string | undefined;

/**
 * 统一创建下载链接并触发下载
 * @param blob - 要下载的 Blob 对象
 * @param fileName - 下载文件的名称
 */
declare function triggerDownload(blob: Blob, fileName: string): void;

/**
 * 强制下载 URL（fetch + Blob），所有浏览器都适用
 * 通过 fetch 请求获取文件内容，然后创建 Blob 对象进行下载
 * @param url - 要下载的文件 URL
 * @param fileName - 下载文件的名称（可选）
 * @returns 下载是否成功
 */
declare function forceDownloadByUrl(url: string, fileName?: string): Promise<boolean>;

/**
 * 统一入口：download(data, fileName)
 * 根据传入的数据类型自动选择合适的下载方式
 * @param data - 要下载的数据
 * @param fileName - 下载文件的名称
 * @returns 是否成功触发下载流程
 */
declare function download(
  data: string | Blob | ArrayBuffer | Uint8Array | any,
  fileName: string
): Promise<boolean>;

/**
 * 函数防抖 - 限制函数执行频率，当调用动作过快时，只执行最后一次调用
 * @param func 需要被防抖的函数
 * @param wait 防抖延迟时间（毫秒），默认500
 * @param immediate 是否立即执行函数（true表示在延迟开始前执行），默认false
 * @returns 返回新的防抖动函数
 */
declare function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait?: number,
  immediate?: boolean
): DebouncedFunction<T>;

/**
 * 防抖函数返回的函数类型
 */
interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  /**
   * 取消防抖调用
   */
  cancel(): void;
}

/**
 * 函数节流 - 限制函数执行频率，确保函数在指定时间间隔内只执行一次
 * @param func 需要被节流的函数
 * @param wait 节流时间间隔（毫秒），默认500
 * @returns 返回新的节流函数
 */
declare function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait?: number
): ThrottledFunction<T>;

/**
 * 节流函数返回的函数类型
 */
interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  /**
   * 取消节流调用
   */
  cancel(): void;
}

// http.d.ts
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';
declare type HttpMethod = Uppercase<Method> | Lowercase<Method>;


/**
 * 请求凭证策略
 */
declare type RequestCredentials = 'include' | 'same-origin' | 'omit';

/**
 * 请求模式
 */
declare type RequestMode = 'cors' | 'no-cors' | 'same-origin';

/**
 * 重定向策略
 */
declare type RequestRedirect = 'follow' | 'error' | 'manual';

/**
 * 缓存策略
 */
declare type RequestCache = 'default' | 'reload' | 'no-cache';

/**
 * 响应数据类型
 */
declare type ResponseType = 'json' | 'xml' | 'text' | 'blob' | 'arraybuffer';

/**
 * HTTP请求配置参数
 */
declare interface RequestConfig {
  url: string;
  method?: HttpMethod;
  headers?: Record<string, string> | Headers;
  params?: Record<string, any>; // 将会被自动编码并追加至URL query string
  data?: any; // POST/PUT/PATCH 请求体数据
  responseType?: ResponseType; // 扩展支持 arraybuffer
  timeout?: number;
  auth?: {
    username: string;
    password: string;
  };
  cancelToken?: CancelToken;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  cache?: RequestCache;
}

/**
 * 取消令牌
 */
declare interface CancelToken {
  cancel(message?: string): void;
}

/**
 * 取消令牌构造函数
 */
declare interface CancelTokenConstructor {
  new(): CancelToken;
}

// 工具类型：去除特定键后的配置对象
declare type ConfigWithoutUrlAndMethod<T> = Omit<T, 'url' | 'method'>;
declare type ConfigWithoutUrlMethodAndData<T> = Omit<T, 'url' | 'method' | 'data'>;

/**
 * XMLHttpRequest请求函数
 * @param config 配置参数
 */
declare interface Request {
  <T = any>(config: RequestConfig): Promise<T>;

  get<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  post<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  put<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  delete<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  CancelToken: CancelTokenConstructor;
}

// 导出函数变量
declare const request: Request;
/**
 * Fetch请求函数
 * @param config 配置参数
 */
declare interface RequestFetch {
  <T = any>(config: RequestConfig): Promise<T>;

  get<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  post<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  put<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  delete<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  CancelToken: CancelTokenConstructor;
}

// 导出函数变量
declare const requestFetch: RequestFetch;

/**
 * 图像缩放结果类型
 */
interface ScaleRatioResult {
  width: number;
  height: number;
  scale: number;
}

/**
 * 计算图像在容器内的缩放比例及尺寸
 * @param width - 图像原始宽度
 * @param height - 图像原始高度
 * @param containerWidth - 容器宽度
 * @param containerHeight - 容器高度
 * @returns 如果参数无效返回 undefined，否则返回缩放后的尺寸和比例
 */
declare function calcScaleRatio(
  width?: number,
  height?: number,
  containerWidth?: number,
  containerHeight?: number
): ScaleRatioResult | undefined;

/**
 * 加载多个图片资源
 * @param arr - 图片URL数组
 * @returns 返回一个Promise，在所有图片加载完成后resolve
 */
declare function loadImages(arr: string[]): Promise<HTMLImageElement[]>;

/**
 * 将ArrayBuffer或Uint8Array转换为图片Data URL
 * @param buffer - 要转换的数据缓冲区
 * @throws 当输入不是ArrayBuffer或Uint8Array时抛出错误
 * @returns 返回图片Data URL
 */
declare function binaryToDataURL(buffer: ArrayBuffer | Uint8Array): string;

/**
 * 压缩图像资源
 * @param resource - 图像源（URL或Data URL）
 * @param quality - 压缩质量（0-1之间）
 * @returns 返回压缩后图像的Data URL
 */
declare function compressImage(resource: string, quality?: number): Promise<string>;

// math.d.ts

/**
 * 获取数字的小数位数
 * @param num - 数字
 * @returns 小数位数
 */
declare const getDecimalLength: (num: number) => number;

/**
 * 两个数相加
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相加后的数字
 */
declare const add: (a: number, b: number) => number;

/**
 * 两个数相减
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相减后的数字
 */
declare const subtract: (a: number, b: number) => number;

/**
 * 两个数相乘
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相乘后的数字
 */
declare const multiply: (a: number, b: number) => number;

/**
 * 两个数相除
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相除后的数字
 */
declare const divide: (a: number, b: number) => number;

/**
 * 数组求和
 * @param arr - 数组
 * @returns 和
 */
declare const sum: (arr: number[]) => number;

/**
 * 求数组中数值平均值
 * @param arr - 数组
 * @returns 平均值
 */
declare const average: (arr: number[]) => number;

/**
 * 向上取整
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 向上取整后的数字
 */
declare const ceil: (num?: number, precision?: number) => number;

/**
 * 向下取整
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 向下取整后的数字
 */
declare const floor: (num?: number, precision?: number) => number;

/**
 * 保留小数点后几位，不考虑四舍五入
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 保留小数点后几位的数字
 */
declare const decimal: (num?: number, precision?: number) => number;

/**
 * 保留小数点后几位，四舍五入
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 保留小数点后几位的数字
 */
declare const round: (num?: number, precision?: number) => number;

// number.d.ts
/**
 * 根据区间获取随机数
 * @param min - 最小值（包含）
 * @param max - 最大值（不包含）
 * @param floating - 是否返回浮点数
 * @returns 随机数，参数无效时返回undefined
 */
declare function random(min?: number | string, max?: number | string, floating?: boolean): number | undefined;

/**
 * 判断数字是否在区间内
 * @param num - 要判断的数字
 * @param min - 最小值（不包含）
 * @param max - 最大值（不包含）
 * @returns 是否在区间内
 */
declare function inRange(num: number, min: number, max: number): boolean;

/**
 * 将数字转成中文大写
 * @param num - 要转换的数字
 * @returns 中文大写表示，参数无效时返回undefined
 */
declare function toChinese(num: number | string): string | undefined;

/**
 * 将数字金额转为中文大写金额
 * @param num - 要转换的金额
 * @returns 中文大写金额表示
 */
declare function toCny(num: number | string): string;

/**
 * 将数字千分位分割
 * @param num - 要格式化的数字
 * @returns 千分位分割后的字符串，参数无效时返回undefined
 */
declare function thousandSeparator(num: number | string): string | undefined;

/**
 * 数字格式化（支持科学计数法单位）
 * @param num - 要格式化的数字
 * @param digits - 保留小数位数
 * @returns 格式化后的字符串
 */
declare function scientificFormatter(num: number, digits?: number): string;

// obj.d.ts

/**
 * 链式获取对象属性值，支持点表示法和方括号表示法
 *
 * @param obj - 要检索的对象
 * @param chain - 属性链，支持点表示法(a.b.c)和方括号表示法(a[0]、a['b']、a["c"])
 * @param defaultValue - 当属性不存在时返回的默认值
 * @returns 属性值或默认值
 */
declare function chainGet<T = any>(
  obj: Record<string, any>,
  chain: string,
  defaultValue?: T
): T;

// other.d.ts

/**
 * 深度克隆对象或数组
 * @param data - 需要克隆的数据
 * @returns 克隆后的数据副本
 */
declare function deepClone<T>(data: T): T;

/**
 * 生成十六进制随机颜色值
 * @returns 随机颜色值，格式为 #xxxxxx
 */
declare function getRandomColor(): string;

/**
 * 动态加载 JavaScript 脚本文件
 * @param src - 脚本地址
 * @param isAsync - 是否异步加载
 * @returns 脚本加载完成的 Promise
 */
declare function addScript(src: string, isAsync?: boolean): Promise<void>;

/**
 * 简单 base64 编码（支持中文）
 * @param str - 需要编码的字符串
 * @returns 编码后的 base64 字符串
 */
declare function btoa(str: string): string;

/**
 * 简单 base64 解码（支持中文）
 * @param str - 通过 btoa 编码后的字符串
 * @returns 解码后的字符串
 */
declare function atob(str: string): string;

/**
 * Base64 编码函数
 * @param data - 需要编码的数据
 * @returns Base64 编码后的字符串
 */
declare function base64_encode(data: string): string;

/**
 * Base64 解码函数
 * @param data - 需要解码的数据
 * @returns 解码后的字符串
 */
declare function base64_decode(data: string): string;

/**
 * UTF-8 编码
 * @param string - 需要编码的字符串
 * @returns UTF-8 编码后的字符串
 */
declare function utf8_encode(string: string): string;

/**
 * utf8 解码
 * @param utftext - 需要解码的数据
 * @returns 解码后的字符串
 */
declare function utf8_decode(utftext: string): string;

/**
 * 加载音频文件
 * @param src - 音频地址
 * @param callback - 音频元数据加载完成后的回调函数
 * @returns Audio 元素实例
 */
declare function loadAudio(src: string, callback?: () => void): HTMLAudioElement;

/**
 * 将 DOM 元素转换为 HTML 字符串
 * @param htmlDOM - DOM 元素
 * @returns HTML 字符串
 */
declare function domToString(htmlDOM: Element): string;

/**
 * 将 HTML 字符串转换为 DOM 元素
 * @param htmlString - HTML 字符串
 * @returns DOM 元素
 */
declare function stringToDom(htmlString: string): Element;

/**
 * 在光标位置插入字符
 * @param dom - 输入框元素
 * @param val - 要插入的值
 */
declare function setCursorPosition(dom: HTMLTextAreaElement | HTMLInputElement, val: string): void;

/**
 * 在光标当前位置插入字符
 * @param dom - 输入框元素
 * @param val - 要插入的值
 */
declare function insertAtCursor(dom: HTMLTextAreaElement | HTMLInputElement, val: string): void;

/**
 * 转义HTML特殊字符，防止XSS攻击
 * @param str - HTML字符串
 * @returns 转义后的字符串
 */
declare function escapeHTML(str?: string): string;

/**
 * 解转义HTML特殊字符，将HTML实体转换回原始字符
 * @param str - 需要解转义的HTML字符串
 * @returns 解转义后的原始字符串
 */
declare function unescapeHTML(str?: string): string;

/**
 * 比较两个版本号
 * @param version1 - 版本号1
 * @param version2 - 版本号2
 * @returns 比较结果: 1 表示 version1 > version2, -1 表示 version1 < version2, 0 表示相等
 */
declare function compareVersion(version1: string, version2: string): number;

/**
 * 复制文本到剪贴板
 * @param text - 要复制的文本
 * @returns 复制操作是否成功
 */
declare function copyToClipboard(text: string): Promise<boolean>;

/**
 * 等待指定时间
 * @param delay - 等待时间（毫秒）
 * @returns Promise，在指定时间后 resolve
 */
declare function wait(delay?: number): Promise<void>;

/**
 * 监听一个或多个元素的尺寸变化
 * @param elements - 需要监听的单个元素或元素数组
 * @param callback - 尺寸变化时调用的回调函数，接收 ResizeObserverEntry 数组作为参数
 * @returns 停止监听的函数，可选择性地停止部分元素的监听
 */
declare const resizeObserver: (
  elements: HTMLElement | HTMLElement[] | NodeList,
  callback: (entries: ResizeObserverEntry[]) => void
) => (elementsToStop?: HTMLElement | HTMLElement[] | null) => void;

/**
 * WebSocketUtil 类用于封装 WebSocket 连接逻辑，包括自动重连、心跳机制等功能。
 */
declare class WebSocketUtil {
  static DEFAULT_PING_MESSAGE: string;
  static DEFAULT_RECONNECT_INTERVAL: number;
  static DEFAULT_MAX_RECONNECT_ATTEMPTS: number;
  static DEFAULT_HEARTBEAT_INTERVAL: number;
  static HEARTBEAT_RESPONSE_TYPE: string;

  url: string;
  socket: WebSocket | null;
  connectState: number;

  constructor(url: string, options?: {
    isReconnect?: boolean;
    reconnectInterval?: number;
    maxReconnectAttempts?: number;
    isHeartbeat?: boolean;
    heartbeatInterval?: number;
    pingMessage?: string | object | any[];
  });

  connect(): void;
  send(data: string | Buffer | ArrayBuffer | Blob | ArrayBufferView | object | any[]): void;
  close(): void;
  setMessageHandler(callback: (data: any) => void): void;
}

// scroll.d.ts



/**
 * 获取当前的滚动位置
 * @param el - 元素
 * @returns 滚动位置对象
 */
declare const getScrollPosition: (el: Element | string) => {
  x: number;
  y: number;
};

/**
 * 滚动父元素将指定元素滚动到用户可视区域
 * @param el - 元素或选择器
 * @param options - 滚动选项
 * @param options.top - 目标垂直位置，默认为0（顶部）
 * @param options.left - 目标水平位置，默认为0（左侧）
 * @param options.behavior - 滚动行为，可选值有"auto"、"smooth"和"instant"
 */
declare const scrollIntoView: (
  el: Element | string,
  options?: {
    top?: number;
    left?: number;
    behavior?: "auto" | "smooth" | "instant";
  }
) => void;

/**
 * 滚动至顶部
 * @param el - 元素或选择器，默认为window
 * @param options - 滚动选项
 * @param options.top - 目标垂直位置，默认为0（顶部）
 * @param options.left - 目标水平位置，默认为0（左侧）
 * @param options.behavior - 滚动行为，可选值有"auto"和"smooth"
 */
declare const scrollToTop: (
  el?: Window | Element | string,
  options?: {
    top?: number;
    left?: number;
    behavior?: "auto" | "smooth";
  }
) => void;

interface ScrollViewOptions {
  dataList?: any[];
  attrName?: string;
  elAttrName?: string;
  callback?: (result: ScrollViewCallbackResult) => void;
  offsetTop?: number;
}

interface ScrollViewCallbackResult {
  scrollEl: EventTarget | null;
  currentEl: Element;
  attrName: string;
  elAttrName: string;
  dataList: any[];
  index: number;
  value: any;
}

declare class ScrollView {
  constructor(options?: ScrollViewOptions);

  dataList: any[];
  attrName: string;
  elAttrName: string;
  offsetTop: number;
  callback: (result: ScrollViewCallbackResult) => void;
  elementMap: Map<number, Element>;

  private _cacheElements(): void;
  private _getScrollTop(e: Event): number;
  handlerScroll(e: Event): void;
}

/**
 * 初始化滚动监听
 * @param options - 配置对象
 * @returns 返回ScrollView实例对象
 */
declare const initScrollView: (options?: ScrollViewOptions) => ScrollView;

// storage.d.ts

/**
 * Storage 处理器接口
 */
interface StorageHandler {
  /**
   * 设置存储项
   * @param key - 存储键名
   * @param val - 存储值
   */
  set(key: string, val: any): void;

  /**
   * 获取存储项
   * @param key - 存储键名
   * @returns 存储的值，如果不存在返回 null
   */
  get(key: string): any | null;

  /**
   * 移除存储项
   * @param key - 存储键名
   */
  remove(key: string): void;

  /**
   * 清空所有存储项
   */
  clear(): void;
}

/**
 * 创建 Storage 处理器
 * @param storage - Storage 实例 (localStorage 或 sessionStorage)
 * @returns StorageHandler 对象
 */
declare function createStorageHandler(storage: Storage): StorageHandler;

/**
 * Storage 方法接口
 */
interface StorageMethods {
  set: StorageHandler['set'];
  get: StorageHandler['get'];
  remove: StorageHandler['remove'];
  clear: StorageHandler['clear'];
}

/**
 * 创建 Storage 方法集合
 * @param storage - Storage 实例 (localStorage 或 sessionStorage)
 * @returns StorageMethods 对象
 */
declare function createStorageMethods(storage: Storage): StorageMethods;

/**
 * localStorage 相关方法
 */
declare const setLocalStorage: StorageHandler['set'];
declare const getLocalStorage: StorageHandler['get'];
declare const removeLocalStorage: StorageHandler['remove'];
declare const clearLocalStorage: StorageHandler['clear'];

/**
 * sessionStorage 相关方法
 */
declare const setSessionStorage: StorageHandler['set'];
declare const getSessionStorage: StorageHandler['get'];
declare const removeSessionStorage: StorageHandler['remove'];
declare const clearSessionStorage: StorageHandler['clear'];

/**
 * Cookie 配置选项
 */
interface CookieOptions {
  /** 过期时间(秒) */
  expires?: number;
  /** 域名 */
  domain?: string;
  /** 路径 */
  path?: string;
  /** 是否仅 HTTPS 传输 */
  secure?: boolean;
  /** SameSite 策略 ('Strict' | 'Lax' | 'None') */
  sameSite?: 'Strict' | 'Lax' | 'None';
}

/**
 * 设置 cookie
 * @param name - cookie 名称
 * @param value - cookie 值
 * @param options - 配置选项
 */
declare function setCookie(name: string, value: any, options?: CookieOptions): void;

/**
 * 获取 cookie
 * @param name - 存储的键名
 * @returns 返回存储的值，如果不存在返回 null
 */
declare function getCookie(name: string): any | null;

/**
 * 删除 cookie
 * @param name - cookie 名称
 * @param options - 配置选项
 */
declare function removeCookie(name: string, options?: CookieOptions): void;

// string.d.ts

/**
 * 字符串脱敏处理
 * @param str - 需要脱敏的字符串
 * @param options - 脱敏选项
 * @returns 已脱敏字符串，如果输入为空则返回原值
 */
declare function desens(str: string, options?: {
  /** 脱敏字符 */
  char?: string;
  /** 脱敏起始位置（包含） */
  startIndex?: number;
  /** 脱敏结束位置（不包含） */
  endIndex?: number;
}): string;

/**
 * 去除字符串中前后指定字符
 * @param str - 去除字符的字符串
 * @param chars - 去除的字符（默认为空格）
 * @returns 已去前后除字符的字符串
 */
declare function trim(str: string, chars?: string): string;

/**
 * 去除字符串中所有指定字符
 * @param str 需要去除字符的字符串
 * @param chars 需要去除的字符（默认为空格）
 * @returns 已去除指定字符的字符串
 */
declare function trimAll(str: string, chars?: string): string;

/**
 * 去除字符串中末尾空格或指定字符
 * @param str 需要去除字符的字符串
 * @param chars 需要去除的字符（默认为空格）
 * @returns 已去除末尾指定字符的字符串
 */
declare function trimEnd(str: string, chars?: string): string;

/**
 * 去除字符串中开头空格或指定字符
 * @param str - 需要去除字符的字符串
 * @param chars - 需要去除的字符（默认为空格）
 * @returns 已去除开头指定字符的字符串
 */
declare function trimStart(str: string, chars?: string): string;

/**
 * 将整个字符串字符转换为大写形式
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
declare function toUpperCase(str: string): string;

/**
 * 将字符串首个字符转大写
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
declare function toUpperCaseFirst(str: string): string;

/**
 * 将整个字符串字符转换为小写形式
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
declare function toLowerCase(str: string): string;

/**
 * 将字符串首个字符转小写
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
declare function toLowerCaseFirst(str: string): string;

/**
 * 生成随机验证码
 * @param length - 验证码长度
 * @param checkCode - 需要避免重复的验证码
 * @param charset 字符集
 * @returns 生成的随机验证码
 */
declare function randomCode(length?: number, checkCode?: string, charset?: string): string;

/**
 * 查找子字符串在字符串中出现的次数
 * @param str - 主字符串
 * @param key - 要查找的子字符串
 * @returns 出现次数
 */
declare function countInString(str: string, key: string): number;

/**
 * 在字符串开头填充指定字符，使字符串达到指定长度
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param chars - 填充字符
 * @returns 返回填充后的字符串
 */
declare function padStart(str: string, length?: number, chars?: string): string;

/**
 * 在字符串结尾填充指定字符，使字符串达到指定长度
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param chars - 填充字符
 * @returns 返回填充后的字符串
 */
declare function padEnd(str: string, length?: number, chars?: string): string;

/**
 * 判断字符串是否为"数字+单位"格式
 * 支持常见的CSS单位、度量单位等，可通过自定义单位列表扩展
 * @param str - 待检测的字符串
 * @param customUnits - 自定义单位列表
 * @returns 是否为数字加单位格式
 */
declare function hasUnit(str: string, customUnits?: string[]): boolean;

/**
 * 去除字符串中的单位，仅保留数字部分
 * 支持去除各种常见单位（CSS单位、度量单位等）
 * @param str - 包含单位的字符串
 * @param customUnits - 自定义单位列表
 * @returns 去除单位后的字符串（仅保留数字部分）
 */
declare function removeUnit(str: string, customUnits?: string[]): string;

/**
 * 驼峰命名转短横线命名（kebab-case）
 * 将驼峰格式字符串转换为短横线分隔格式
 * @param str - 需要转换的驼峰格式字符串
 * @param separator - 分隔符，默认为短横线
 * @returns 转换后的短横线分隔字符串
 */
declare function camelToKebab(str: string, separator?: string): string;

/**
 * 短横线命名转驼峰命名（camelCase）
 * 将短横线分隔格式字符串转换为驼峰格式
 * @param str - 需要转换的短横线分隔字符串
 * @returns 转换后的驼峰格式字符串
 */
declare function kebabToCamel(str: string): string;

// url.d.ts

/**
 * 解析 URL 并提取查询参数
 * @param url - 要解析的 URL 地址，默认为当前页面 URL
 * @param key - 可选，要获取的特定参数名，如果不提供则返回所有参数
 * @returns 如果提供了 key 则返回对应参数值，否则返回包含所有查询参数的对象
 */
declare function getUrlParams(url?: string, key?: string): Record<string, string> | string | null;

/**
 * 将对象转换为 URL 查询参数字符串
 * @param obj - 包含查询参数的键值对对象
 * @returns 格式化后的 URL 查询参数字符串
 */
declare function toUrlParams(obj: Record<string, any>): string;

/**
 * 从 URL 中删除指定的查询参数
 * @param url - 需要处理的 URL 地址
 * @param name - 要删除的参数名
 * @returns 删除指定参数后的新 URL 地址
 */
declare function removeUrlParam(url: string, name: string): string;

// window.d.ts

/**
 * 使元素进入全屏模式
 * @param element - 要进入全屏的元素，默认为整个文档
 * @returns 全屏操作的 Promise
 */
declare function enterFullscreen(element?: Element): Promise<void>;

/**
 * 退出全屏模式
 * @returns 退出全屏操作的 Promise
 */
declare function exitFullscreen(): Promise<void>;

/**
 * 根据窗口大小自适应字体大小
 * @param fontSize - 初始字体大小
 * @param initWidth - 初始宽度
 * @returns 返回计算后字体大小
 */
declare function resizeFontSize(fontSize?: number, initWidth?: number): number;

declare type ModeType = "scaleToFill" | "aspectFit"

/**
 * 数据可视化容器类（用于数据可视化大屏）
 */
declare class DataView {
  el: HTMLElement;
  options: {
    width: number;
    height: number;
    mode: ModeType;
  };

  /**
   * 构造函数
   * @param el - 元素
   * @param options - 参数 {width, height, mode}
   */
  constructor(el: HTMLElement, options?: Partial<DataView['options']>);

  /**
   * 调整尺寸
   */
  resize(): void;
}

/**
 * 初始化数据可视化容器（用于数据可视化大屏）
 * @param el - 元素
 * @param options - 参数 {width, height, mode}
 * @returns 返回DataView实例对象
 */
declare function initDataView(
  el: HTMLElement,
  options?: {
    width?: number;
    height?: number;
    mode?: ModeType;
  }
): DataView;

declare const JsToolkit = {
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

export { DataView, RangeDirection, ScrollView, VenDate, WebSocketUtil, add, addClass, addScript, addStyle, arrayToTree, atob, average, base64_decode, base64_encode, binaryToDataURL, btoa, calcScaleRatio, camelToKebab, ceil, chainGet, checkFormat, checkPasswordLevel, clearLocalStorage, clearSessionStorage, compareVersion, compressImage, copyToClipboard, countInArray, countInString, createStorageHandler, createStorageMethods, debounce, decimal, deepClone, JsToolkit as default, desens, divide, domToString, download, enterFullscreen, escapeHTML, exitFullscreen, find, findIndex, findNodePath, floor, forEach, forceDownloadByUrl, formatDate, getBrowserType, getCookie, getDateOffset, getDateRange, getDatesBetween, getDayOfYear, getDaysInMonth, getDaysInYear, getDecimalLength, getEndOfMonth, getEndOfQuarter, getEndOfWeek, getEndOfYear, getLocalStorage, getMimeType, getMobileEnv, getMonthsRange, getRandomColor, getScrollPosition, getSessionStorage, getSiblings, getStartMonthOfQuarter, getStartOfMonth, getStartOfQuarter, getStartOfWeek, getStartOfYear, getStyle, getTimeSlotByStep, getType, getUrlParams, getWeekOfYear, groupByAttr, groupBySize, hasClass, hasUnit, inRange, initDataView, initScrollView, insertAfter, insertAtCursor, insertBefore, intersect, intersectInMatrix, isArray, isArrayBuffer, isBlob, isBoolean, isCardID, isDataView, isDate, isElement, isError, isFalse, isFile, isFloat32Array, isFloat64Array, isFormData, isFullScreen, isFunction, isInt16Array, isInt32Array, isInt8Array, isIos, isMap, isMobile, isNodeList, isNull, isNumber, isNumeric, isObject, isPC, isPcBrowser, isPromise, isRegExp, isSet, isString, isSymbol, isTrue, isType, isURL, isUint16Array, isUint32Array, isUint8Array, isUint8ClampedArray, isUndefined, isWeakMap, isWeakSet, join, kebabToCamel, loadAudio, loadImages, map, max, mimeTypeMap, min, multiply, padEnd, padStart, passwordRules, queryElement, random, randomCode, regExpMap, removeClass, removeCookie, removeLocalStorage, removeSessionStorage, removeUnit, removeUrlParam, replaceClass, request, requestFetch, resizeFontSize, resizeObserver, round, sToHms, scientificFormatter, scrollIntoView, scrollToTop, setCookie, setCursorPosition, setLocalStorage, setSessionStorage, sort, stableStringify, stringToDom, subtract, sum, tagDuplicates, thousandSeparator, throttle, timeAgo, toArray, toChinese, toCny, toLowerCase, toLowerCaseFirst, toUpperCase, toUpperCaseFirst, toUrlParams, treeToArray, triggerDownload, trim, trimAll, trimEnd, trimStart, unescapeHTML, union, unique, utf8_decode, utf8_encode, validTypesSet, wait };
export type { CancelToken, CancelTokenConstructor, ConfigWithoutUrlAndMethod, ConfigWithoutUrlMethodAndData, CookieOptions, DebouncedFunction, HttpMethod, Method, ModeType, Request, RequestCache, RequestConfig, RequestCredentials, RequestFetch, RequestMode, RequestRedirect, ResponseType, ScaleRatioResult, ScrollViewCallbackResult, ScrollViewOptions, StorageHandler, StorageMethods, ThrottledFunction };
