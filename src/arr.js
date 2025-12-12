/*
 * @Author: yfhu
 * @Date: 2023-11-06 15:03:15
 * @LastEditors: yfhu
 * @LastEditTime: 2025-10-22
 * @Description: Array utility functions with improved validation and JSDoc
 */
import {isArray, isFunction, isNumber, isObject} from "./inspect.js";

/**
 * 稳定序列化：对对象的键按字母序排序后再序列化，避免因键顺序导致的不同结果。
 * 只用于比较/判重场景（性能适中），遇到循环引用时会回退到 JSON.stringify 的异常处理结果。
 * @param {any} value - 要序列化的值
 * @returns {string} 序列化字符串
 */
function stableStringify(value) {
  const seen = new WeakSet();

  function helper(v) {
    if (v === null || typeof v !== 'object') {
      return JSON.stringify(v);
    }
    if (seen.has(v)) {
      // 循环引用，返回 placeholder，保守处理
      return '"[Circular]"';
    }
    seen.add(v);

    if (Array.isArray(v)) {
      const parts = v.map(item => helper(item));
      return '[' + parts.join(',') + ']';
    }

    // 对象：对键排序后序列化
    const keys = Object.keys(v).sort();
    const parts = [];
    for (const k of keys) {
      parts.push(JSON.stringify(k) + ':' + helper(v[k]));
    }
    return '{' + parts.join(',') + '}';
  }

  try {
    return helper(value);
  } catch (e) {
    // 最后退化到内置方法，避免抛出
    try {
      return JSON.stringify(value);
    } catch (e2) {
      return String(value);
    }
  }
}

/**
 * 查找数组中元素，返回匹配元素
 * @template T
 * @param {T[]} arr - 需要查找的数组
 * @param {(element: T, index: number) => boolean} callback - 迭代调用的函数
 * @param {number} [fromIndex=0] - 开始查找的索引位置
 * @returns {T|undefined} - 返回匹配的元素，未找到返回 undefined
 * @throws {Error} 如果 arr 不是数组或 callback 不是函数
 * @version 1.1.0-beta.11
 */
export const find = function (arr, callback, fromIndex = 0) {
  if (arr == null) {
    return undefined
  }
  if (!isArray(arr)) {
    throw new Error("The first argument of the find function must be an array");
  }
  if (!isFunction(callback)) {
    throw new Error("The second argument of the find function must be a function");
  }
  if (!isNumber(fromIndex)) {
    fromIndex = 0;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex);
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return arr[i];
    }
  }
  return undefined;
};

/**
 * 查找数组中元素，返回匹配元素索引
 * @template T
 * @param {T[]} arr - 需要查找得数组
 * @param {(element: T, index: number) => boolean} callback - 迭代调用的函数
 * @param {number} [fromIndex=0] - 开始查找的索引位置
 * @returns {number} - 返回匹配元素的索引，未找到返回 -1
 * @throws {Error} 如果 arr 不是数组或 callback 不是函数
 * @version 1.1.0-beta.11
 */
export const findIndex = function (arr, callback, fromIndex = 0) {
  if (arr == null) {
    return -1
  }

  if (!isArray(arr)) {
    throw new Error("The first argument of the findIndex function must be an array");
  }
  if (!isFunction(callback)) {
    throw new Error("The second argument of the findIndex function must be a function");
  }
  if (!isNumber(fromIndex)) {
    fromIndex = 0;
  }
  if (fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex);
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return i;
    }
  }
  return -1;
};

/**
 * forEach 同步回调函数
 * @template T
 * @param {T[]} arr - 需要遍历的数组
 * @param {(element: T, index: number, array: T[]) => void} callback - 迭代回调函数
 * @param {Object} [thisObj] - 回调函数的 this 指向
 * @returns {void}
 */
function forEachSync(arr, callback, thisObj) {
  if (!isArray(arr)) return;

  for (let i = 0; i < arr.length; i++) {
    callback.call(thisObj, arr[i], i, arr);
  }
}

/**
 * forEach 异步回调函数
 * @template T
 * @param {T[]} arr - 需要遍历的数组
 * @param {(element: T, index: number, array: T[]) => Promise<void>} callback - 异步迭代回调函数
 * @param {Object} [thisObj] - 回调函数的 this 指向
 * @returns {Promise<void>}
 */
async function forEachAsync(arr, callback, thisObj) {
  if (!isArray(arr)) return;

  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    await callback.call(thisObj, arr[i], i, arr);
  }
}

/**
 * 自定义 forEach 函数，支持 async-await
 * @template T
 * @param {T[]} arr - 需要遍历的数组
 * @param {(element: T, index: number, array: T[]) => void|Promise<void>} callback - 迭代回调函数
 * @param {Object} [thisObj=undefined] - 回调函数的 this 指向
 * @returns {Promise<void>|void} - 如果回调函数是异步的则返回 Promise
 * @throws {Error} 如果第一个参数不是数组
 * @version 1.1.0-beta.11
 */
export const forEach = function (arr, callback, thisObj) {
  if (arr == null) {
    arr = []
  }
  if (!isArray(arr)) {
    throw new Error("The first argument of the forEach function must be an array");
  }

  // 保证 callback 为函数，否则使用空操作函数
  callback = isFunction(callback) ? callback : () => {};
  // 判断是否使用 async-await
  const ctorName = callback && callback.constructor ? callback.constructor.name : '';
  if (ctorName === "AsyncFunction") {
    return forEachAsync(arr, callback, thisObj);
  } else {
    return forEachSync(arr, callback, thisObj);
  }
};

/**
 * 自定义 map 函数
 * @template T
 * @template R
 * @param {T[]} arr - 需要映射的数组
 * @param {(element: T, index: number, array: T[]) => R} callback - 为数组中每个元素执行的回调函数
 * @param {Object} [thisObj] - 执行回调时用作 this 的对象
 * @returns {R[]} 由回调函数返回值组成的新数组
 * @throws {Error} 如果第一个参数不是数组或 callback 不是函数
 */
export const map = function (arr, callback, thisObj) {
  if (arr == null) {
    arr = []
  }
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the map function must be an array");
  }

  if (!isFunction(callback)) {
    throw new Error("The second argument of the map function must be a function");
  }

  const newArr = [];
  for (let i = 0, j = arr.length; i < j; ++i) {
    let res = callback.call(thisObj, arr[i], i, arr);
    newArr.push(res);
  }
  return newArr;
};

/**
 * 对组中元素连接成字符串
 * @template T
 * @param {T[]} arr - 数组
 * @param {string} [char=','] - 拼接符号
 * @param {string} [attrName] - 属性名，迭代数组为对象数组有效
 * @returns {string} - 字符串
 * @version 1.1.0-beta.11
 */
export const join = function (arr, char, attrName) {
  if (arr == null) {
    arr = []
  }
  if (!isArray(arr)) {
    throw new Error("The first argument of the join function must be an array");
  }
  if (typeof char !== "string" || !char) {
    char = ',';
  }
  const joinData = map(arr, (item) => {
    if (attrName && isObject(item)) {
      return item[attrName];
    } else return item;
  })
  return joinData.join(char);
};

/**
 * 数组排序（支持普通数组和对象数组）
 * @template T
 * @param {T[]|number[]} arr - 需要排序的数组
 * @param {number|Function} [predicate=1] - 排序类型或自定义比较函数
 *   - 1: 从小到大（默认）
 *   - 2: 从大到小
 *   - 3: 随机排序
 *   - Function: 自定义比较函数，接收两个参数 (a, b)，返回值决定排序顺序
 * @param {string} [attrName] - 对象数组排序时指定的属性名
 * @returns {T[]|number[]} 排序后的新数组
 * @throws {Error} 如果第一个参数不是数组
 */
export const sort = function (arr = [], predicate = 1, attrName) {
  if (arr == null) {
    arr = []
  }
  if (!isArray(arr)) {
    throw new Error("The first argument of the sort function must be an array");
  }
  // 创建数组副本以避免修改原数组
  const sortedArray = [].concat(arr);

  // 如果predicate是函数，则使用自定义比较函数
  if (typeof predicate === 'function') {
    return sortedArray.sort(predicate);
  }

  // 比较函数辅助函数
  const compareFunction = (a, b) => {
    // 如果指定了属性名，则比较对象的属性值
    const valueA = attrName ? a[attrName] : a;
    const valueB = attrName ? b[attrName] : b;

    switch (predicate) {
      case 1: // 从小到大
        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
      case 2: // 从大到小
        if (valueA > valueB) return -1;
        if (valueA < valueB) return 1;
        return 0;
      case 3: // 随机排序
        return Math.random() - 0.5;
      default:
        return 0;
    }
  };

  return sortedArray.sort(compareFunction);
};

/**
 * 数组去重
 * @template T
 * @param {T[]} arr - 需要去重的数组
 * @param {string} [attrName] - 指定属性名称，用于对象数组去重
 * @returns {T[]} 去重后的数组
 * @version 1.1.0-beta.11
 */
export const unique = function (arr, attrName) {
  if (arr == null) {
    arr = []
  }
  if (!isArray(arr)) {
    throw new Error("The first argument of the unique function must be an array");
  }

  if (attrName) {
    const seen = new Set();
    return arr.filter((item) => {
      const value = item[attrName];
      if (!seen.has(value)) {
        seen.add(value);
        return true;
      }
      return false;
    });
  } else {
    const seen = new Set();
    return arr.filter((item) => {
      if (isObject(item)) {
        // 对于对象，使用稳定序列化作为简易序列化判重（字段顺序不会影响判重）
        const serialized = stableStringify(item);
        if (!seen.has(serialized)) {
          seen.add(serialized);
          return true;
        }
        return false;
      } else {
        // 对于基本类型，直接使用 Set
        if (!seen.has(item)) {
          seen.add(item);
          return true;
        }
        return false;
      }
    });
  }
}

/**
 * 求两个数组的并集
 * @template T
 * @param {T[]} arr1 - 第一个数组
 * @param {T[]} arr2 - 第二个数组
 * @param {string} [attrName] - 指定属性名称（用于对象数组，根据该属性去重）
 * @returns {T[]} 返回并集数组
 */
export const union = function (arr1, arr2, attrName) {
  // 参数验证
  if (!isArray(arr1) || !isArray(arr2)) {
    throw new Error("The first and second parameters of the union function must be arrays");
  }

  // 合并两个数组
  const mergedArray = [...arr1, ...arr2];

  // 如果没有指定属性名，使用 unique 函数去重
  if (!attrName) {
    return unique(mergedArray);
  }

  // 如果指定了属性名，针对对象数组根据属性去重
  const seen = new Set();
  return mergedArray.filter((item) => {
    // 确保是对象且含有指定属性
    if (!isObject(item) || !(attrName in item)) {
      return true; // 非对象或不包含指定属性的元素直接保留
    }

    const value = item[attrName];
    if (!seen.has(value)) {
      seen.add(value);
      return true;
    }
    return false;
  });
};

/**
 * 求两个数组的交集
 * @template T
 * @param {T[]} arr1 - 第一个数组
 * @param {T[]} arr2 - 第二个数组
 * @param {string} [attrName] - 指定属性名称（用于对象数组，根据该属性求交集）
 * @returns {T[]} 返回交集数组
 */
export const intersect = function (arr1, arr2, attrName) {
  if (!isArray(arr1) || !isArray(arr2)) {
    throw new Error("The first and second parameters of the intersect function must be arrays");
  }

  if (attrName) {
    // 对象数组交集处理
    const arr2Values = new Set(arr2.map(item => item[attrName]));
    const result = arr1.filter(item => arr2Values.has(item[attrName]));

    // 去重
    const seen = new Set();
    return result.filter(item => {
      const value = item[attrName];
      if (!seen.has(value)) {
        seen.add(value);
        return true;
      }
      return false;
    });
  } else {
    // 普通数组交集处理
    const arr2Set = new Set(arr2);
    const result = arr1.filter(item => arr2Set.has(item));

    // 去重
    const seen = new Set();
    return result.filter(item => {
      if (isObject(item)) {
        const serialized = stableStringify(item);
        if (!seen.has(serialized)) {
          seen.add(serialized);
          return true;
        }
        return false;
      } else {
        if (!seen.has(item)) {
          seen.add(item);
          return true;
        }
        return false;
      }
    });
  }
}

/**
 * 在二维数组中根据指定属性名获取数组的交集
 * @template T
 * @param {T[][]} arr - 二维数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
 * @param {string} [attrName] - 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组
 * @returns {T[]} 返回交集数组
 */
export const intersectInMatrix = function (arr, attrName) {
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the intersectInMatrix function must be an array");
  }

  // 处理边界情况
  if (arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return [...arr[0]];
  }

  // 依次求多个数组的交集
  return arr.reduce((prev, curr) => intersect(prev, curr, attrName));
};

/**
 * 查找数组中指定元素出现的次数
 * @template T
 * @param {T[]} arr - 要检测的数组
 * @param {T|((element: T, index: number, array: T[]) => boolean)} predicate - 要查找的元素或判断函数
 * @returns {number} 返回出现次数
 * @throws {Error} 如果第一个参数不是数组
 */
export const countInArray = function (arr, predicate) {
  if (arr == null) {
    arr = []
  }

  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the countInArray function must be an array");
  }

  // only treat null or undefined as missing predicate; allow falsy values like 0 or ''
  if (predicate == null) {
    return 0;
  }

  return arr.reduce((count, current, currentIndex, orgArr) => {
    if (isFunction(predicate)) {
      return predicate(current, currentIndex, orgArr) ? count + 1 : count;
    } else {
      return current === predicate ? count + 1 : count;
    }
  }, 0);
}

/**
 * 为对象数组中的重复数据添加序号标记
 * @template T
 * @param {T[]} arr - 需要处理的对象数组
 * @param {string} attrName - 用于判断重复的属性名称
 * @param {string} [tagAttrName="_xh"] - 用于添加序号标记的属性名称
 * @returns {T[]} 返回添加了序号标记的新数组（深拷贝）
 */
export const tagDuplicates = function (
    arr,
    attrName,
    tagAttrName = "_xh"
) {
  if (arr == null) {
    arr = []
  }
  // 深拷贝原数组，避免修改原始数据
  const clonedArray = JSON.parse(JSON.stringify(arr));
  const uniqueTracker = [];

  clonedArray.forEach((item) => {
    // 查找是否已存在相同属性值的项
    const existingIndex = uniqueTracker.findIndex(
        (trackedItem) => trackedItem[attrName] === item[attrName]
    );

    if (existingIndex === -1) {
      // 第一次出现，标记为1
      item[tagAttrName] = 1;
      uniqueTracker.push(item);
    } else {
      // 已存在，序号递增
      item[tagAttrName] = uniqueTracker[existingIndex][tagAttrName] + 1;
      uniqueTracker.splice(existingIndex, 1, item);
    }
  });

  return clonedArray;
};

/**
 * 根据指定属性对数组进行分组
 * @param {T[]} arr - 需要分组的数组
 * @param {string} attrName - 用于分组的属性名称
 * @returns {Object<string, T[]>} 返回按属性值分组后的对象，键为属性值，值为具有相同属性值的元素数组
 * @version 1.1.0-beta.11
 */
export const groupByAttr = function (arr, attrName) {
  if (arr == null) {
    arr = []
  }
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the groupByAttr function must be an array");
  }

  if (typeof attrName !== 'string') {
    throw new Error("The second argument of the groupByAttr function must be a string");
  }

  return arr.reduce((preResult, curItem) => {
    // 检查元素是否为对象且包含指定属性
    if (curItem && typeof curItem === 'object' && attrName in curItem) {
      const key = curItem[attrName];
      // 将键转换为字符串以确保对象键的有效性
      const stringKey = String(key);

      if (!preResult[stringKey]) {
        preResult[stringKey] = [];
      }
      preResult[stringKey].push(curItem);
    } else {
      // 处理不存在指定属性的情况
      const undefinedKey = 'undefined';
      if (!preResult[undefinedKey]) {
        preResult[undefinedKey] = [];
      }
      preResult[undefinedKey].push(curItem);
    }
    return preResult;
  }, {});
};

/**
 * 根据指定长度对数组进行分组
 * @template T
 * @param {T[]} arr - 需要分组的数组
 * @param {number} size - 每组的元素数量
 * @returns {T[][]} 返回分组后的二维数组
 * @version 1.1.0-beta.11
 */
export const groupBySize = function (arr, size) {
  if (arr == null) {
    arr = []
  }
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the groupBySize function must be an array");
  }

  if (!Number.isInteger(size) || size <= 0) {
    throw new Error("The second argument of the groupBySize function must be a positive integer");
  }

  // 处理空数组情况
  if (arr.length === 0) {
    return [];
  }

  return arr.reduce((preResult, curItem, currentIndex) => {
    const groupIndex = Math.floor(currentIndex / size);
    if (!preResult[groupIndex]) {
      preResult[groupIndex] = [];
    }
    preResult[groupIndex].push(curItem);
    return preResult;
  }, []);
};

/**
 * 将类数组转换为数组的方法
 * @template T
 * @param {ArrayLike<T>} arr - 类数组对象（如 arguments、NodeList 等）
 * @returns {T[]} 转换后的数组
 */
export const toArray = function (arr) {
  // 参数验证
  if (arr == null) {
    throw new TypeError("Cannot convert null or undefined to array");
  }

  // 检查是否为类数组对象
  if (typeof arr !== 'object' || typeof arr.length !== 'number' || arr.length < 0) {
    throw new TypeError("Argument is not an array-like object");
  }

  // 使用 Array.from() 方法，它是最现代和可靠的方式
  if (Array.from) {
    return Array.from(arr);
  }

  // 兼容性处理：使用扩展运算符（ES6）
  if (typeof Symbol !== 'undefined' && Symbol.iterator in arr) {
    return [...arr];
  }

  // 兼容性处理：使用 Array.prototype.slice.call
  return Array.prototype.slice.call(arr);
}

/**
 * 将一维数组转为树形结构数据
 * @template T
 * @param {T[]} arr - 包含父子关系信息的一维数组
 * @param {Object} [options={}] - 转换配置选项
 * @param {string} [options.id='id'] - 唯一标识字段名
 * @param {string} [options.parentId='parentId'] - 父级标识字段名
 * @param {string} [options.children='children'] - 子级数据字段名
 * @returns {T[]} 树形结构数组
 * @version 1.1.0-beta.16
 */
export const arrayToTree = function (arr, options = {}) {
  if (arr == null) {
    arr = []
  }
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the arrayToTree function must be an array");
  }

  // 合并默认配置
  const config = {
    id: 'id',
    children: 'children',
    parentId: 'parentId',
    ...options
  };

  // 验证配置项
  if (typeof config.id !== 'string' || typeof config.parentId !== 'string' || typeof config.children !== 'string') {
    throw new Error("Options id, parentId and children must be strings");
  }

  // 处理空数组情况
  if (arr.length === 0) {
    return [];
  }

  const tree = [];
  const map = new Map(); // 使用 Map 提高性能
  const nodes = []; // 创建节点副本，避免修改原数组

  // 创建映射表和节点副本
  for (let i = 0; i < arr.length; i++) {
    // 验证数组元素
    if (!arr[i] || typeof arr[i] !== 'object') {
      throw new Error("Array elements must be objects");
    }

    // 创建节点副本
    const node = {...arr[i]};
    node[config.children] = [];
    nodes.push(node);
    map.set(node[config.id], i);
  }

  // 构建树形结构
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const parentId = node[config.parentId];

    // 如果 parentId 为 null、undefined 或空字符串，则为根节点
    if (parentId === null || parentId === undefined || parentId === '') {
      tree.push(node);
    } else {
      // 查找父节点
      const parentIndex = map.get(parentId);
      if (parentIndex !== undefined) {
        nodes[parentIndex][config.children].push(node);
      } else {
        // 如果找不到父节点，作为根节点处理
        tree.push(node);
      }
    }
  }

  return tree;
};

/**
 * 树形数据转一维数组
 * @template T
 * @param {T[]} tree - 树形结构数组
 * @param {Object} [options] - 转换配置选项
 * @param {string} [options.children='children'] - 子级数据字段名
 * @returns {T[]} 扁平化后的一维数组
 * @version 1.1.0-beta.16
 */
export const treeToArray = function (tree, options = {}) {
  if (tree == null) {
    tree = []
  }
  // 参数验证
  if (!isArray(tree)) {
    throw new Error("The first argument of the treeToArray function must be an array");
  }

  // 合并默认配置
  const config = {
    children: 'children',
    ...options
  };

  // 验证配置项
  if (typeof config.children !== 'string') {
    throw new Error("Option children must be a string");
  }

  // 处理空数组情况
  if (tree.length === 0) {
    return [];
  }

  const flatArray = [];

  // 递归扁平化函数
  function flatten(node) {
    // 验证节点是否为对象
    if (!node || typeof node !== 'object') {
      return;
    }

    // 将当前节点添加到结果数组中（创建副本避免修改原数据）
    const nodeCopy = {...node};
    flatArray.push(nodeCopy);

    // 递归处理子节点
    if (node[config.children] && isArray(node[config.children]) && node[config.children].length > 0) {
      for (let i = 0; i < node[config.children].length; i++) {
        flatten(node[config.children][i]);
      }
    }
  }

  // 遍历树形结构的每个根节点
  for (let i = 0; i < tree.length; i++) {
    flatten(tree[i]);
  }

  return flatArray;
};

/**
 * 在树形结构中查找目标节点的路径
 * @param {T[]} treeArr - 树形结构数据数组
 * @param {string} targetKey - 目标节点的键名
 * @param {any} targetValue - 目标节点的键值
 * @param {string} [childrenKey='children'] - 子节点集合的键名
 * @param {string} [backKey='id'] - 路径中返回值的键名
 * @returns {Array<any>|undefined} 找到目标节点时返回路径数组，未找到时返回 null
 * @version 2.0.0
 */
export function findNodePath(treeArr, targetKey, targetValue, childrenKey = 'children', backKey = 'id') {
  if (treeArr == null) {
    treeArr = []
  }

  // 参数验证
  if (!isArray(treeArr)) {
    throw new Error("The first argument must be an array");
  }

  if (typeof targetKey !== 'string') {
    throw new Error("The targetKey must be a string");
  }

  if (typeof childrenKey !== 'string') {
    throw new Error("The childrenKey must be a string");
  }

  if (typeof backKey !== 'string') {
    throw new Error("The backKey must be a string");
  }

  // 处理空数组情况
  if (treeArr.length === 0) {
    return undefined;
  }

  /**
   * 递归遍历树节点
   * @param {Object} node - 当前节点
   * @param {Array} path - 当前路径
   * @returns {null|Array<any>} 找到目标节点时返回路径数组，未找到时返回 null
   */
  function traverse(node, path) {
    // 验证节点是否为对象
    if (!node || typeof node !== 'object') {
      return null;
    }

    // 检查当前节点是否为目标节点
    if (node[targetKey] === targetValue) {
      // 找到目标节点，返回完整路径（包含当前节点的 backKey 值）
      return [...path, node[backKey]];
    }

    // 递归遍历子节点
    if (node[childrenKey] && isArray(node[childrenKey]) && node[childrenKey].length > 0) {
      for (const child of node[childrenKey]) {
        // 在路径中添加当前节点的 backKey 值
        const result = traverse(child, [...path, node[backKey]]);
        if (result) {
          return result;
        }
      }
    }

    return null; // 未找到目标节点
  }

  // 遍历树的每个根节点
  for (const node of treeArr) {
    const result = traverse(node, []);
    if (result) {
      return result;
    }
  }

  return undefined; // 未找到目标节点
}

/**
 * 数组最大值
 * @template T
 * @param {T[]} arr - 数字数组或对象数组
 * @param {string} [attrName] - 对象数组中用于比较的属性名
 * @returns {number|undefined} 数组中的最大值，空数组返回 undefined
 * @version 1.1.0-beta.16
 */
export const max = function (arr, attrName) {
  if (arr == null) {
    arr = []
  }
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the max function must be an array");
  }

  // 处理空数组情况
  if (arr.length === 0) {
    return undefined;
  }

  let _arr;
  if (attrName) {
    // 验证 attrName 是否为字符串
    if (typeof attrName !== 'string') {
      throw new Error("The second argument of the max function must be a string");
    }

    // 提取对象数组中指定属性的值
    _arr = arr.map(item => {
      if (item && typeof item === 'object' && attrName in item) {
        return item[attrName];
      }
      return undefined;
    });
  } else {
    _arr = arr;
  }

  // 过滤掉无效值（undefined, null 等）
  const validValues = _arr.filter(value => typeof value === 'number' && !isNaN(value));

  // 处理没有有效值的情况
  if (validValues.length === 0) {
    return undefined;
  }

  return Math.max(...validValues);
};

/**
 * 获取数组最小值
 * @template T
 * @param {T[]} arr - 数组
 * @param {string} [attrName] - 对象数组中用于比较的属性名
 * @returns {number|undefined} 数组中的最小值，空数组返回 undefined
 * @version 1.1.0-beta.16
 */
export const min = function (arr, attrName) {
  if (arr == null) {
    arr = []
  }
  // 参数验证
  if (!isArray(arr)) {
    throw new Error("The first argument of the min function must be an array");
  }

  // 处理空数组情况
  if (arr.length === 0) {
    return undefined;
  }

  let _arr;
  if (attrName) {
    // 验证 attrName 是否为字符串
    if (typeof attrName !== 'string') {
      throw new Error("The second argument of the min function must be a string");
    }

    // 提取对象数组中指定属性的值
    _arr = arr.map(item => {
      if (item && typeof item === 'object' && attrName in item) {
        return item[attrName];
      }
      return undefined;
    });
  } else {
    _arr = arr;
  }

  // 过滤掉无效值（undefined, null 等）
  const validValues = _arr.filter(value => typeof value === 'number' && !isNaN(value));

  // 处理没有有效值的情况
  if (validValues.length === 0) {
    return undefined;
  }

  return Math.min(...validValues);
};
