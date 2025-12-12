// arr.d.ts

import { isArray, isFunction, isNumber, isObject } from "./inspect";

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
export declare const find: <T>(
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
export declare const findIndex: <T>(
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
export declare const forEach: <T>(
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
export declare const map: <T, R>(
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
export declare const join: <T>(
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
export declare const sort: <T>(
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
export declare const unique: <T>(arr: T[], attrName?: string) => T[];

/**
 * 求两个数组的并集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param attrName - 指定属性名称（用于对象数组，根据该属性去重）
 * @returns 返回并集数组
 */
export declare const union: <T>(arr1: T[], arr2: T[], attrName?: string) => T[];

/**
 * 求两个数组的交集
 * @param arr1 - 第一个数组
 * @param arr2 - 第二个数组
 * @param attrName - 指定属性名称（用于对象数组，根据该属性求交集）
 * @returns 返回交集数组
 */
export declare const intersect: <T>(arr1: T[], arr2: T[], attrName?: string) => T[];

/**
 * 在二维数组中根据指定属性名获取数组的交集
 * @param arr - 二维数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
 * @param attrName - 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组
 * @returns 返回交集数组
 */
export declare const intersectMatrix: <T>(arr: T[][], attrName?: string) => T[];

/**
 * 查找数组中指定元素出现的次数
 * @param arr - 要检测的数组
 * @param predicate - 要查找的元素或判断函数
 * @returns 返回出现次数
 * @throws {Error} 如果第一个参数不是数组
 */
export declare const countBy: <T>(
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
export declare const tagDuplicates: <T>(
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
export declare const groupByAttr: <T>(
  arr: T[],
  attrName: string
) => Record<string, T[]>;

/**
 * 根据指定长度对数组进行分组
 * @param arr - 需要分组的数组
 * @param size - 每组的元素数量
 * @returns 返回分组后的二维数组
 */
export declare const groupBySize: <T>(arr: T[], size: number) => T[][];

/**
 * 将类数组转换为数组的方法
 * @param arr - 类数组对象（如 arguments、NodeList 等）
 * @returns 转换后的数组
 */
export declare const toArray: <T>(arr: ArrayLike<T>) => T[];

/**
 * 将一维数组转为树形结构数据
 * @param arr - 包含父子关系信息的一维数组
 * @param options - 转换配置选项
 * @returns 树形结构数组
 */
export declare const arrayToTree: <T extends Record<string, any>>(
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
export declare const treeToArray: <T extends Record<string, any>>(
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
export declare const findNodePath: <T extends Record<string, any>>(
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
export declare const max: <T>(
  arr: T[],
  attrName?: string
) => number | undefined;

/**
 * 获取数组最小值
 * @param arr - 数组
 * @param attrName - 对象数组中用于比较的属性名
 * @returns 数组中的最小值，空数组返回 undefined
 */
export declare const min: <T>(
  arr: T[],
  attrName?: string
) => number | undefined;
