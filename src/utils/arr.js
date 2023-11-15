/*
 * @Author: yfhu
 * @Date: 2023-11-06 15:03:15
 * @LastEditors: yfhu
 * @LastEditTime: 2023-11-15 13:05:13
 * @Description:
 */
import {isArray, isString, isFunction, isObject} from "./inspect.js";

/**
 * 返回数组中满足提供的函数的判断条件的第一个元素的值
 * @param {Array} arr 数组
 * @param {Function} callback 回调函数
 * @param {number} [fromIndex=0] 从该索引处开始查找
 * @returns {undefined|*} 满足条件的元素值
 * @version 1.1.0-beta.11
 */
const find = function (arr, callback, fromIndex = 0) {
  // if(!isArray(arr)){
  //   return arr
  // }
  if (typeof callback !== "function") {
    throw new Error("find方法的第二个参数必须是函数");
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return arr[i];
    }
  }
  return undefined;
};

/**
 * 返回数组中满足提供的函数的判断条件的第一个元素的下标,未找到返回-1
 * @param {Array} arr 数组
 * @param {Function} callback 回调函数
 * @param {number} [fromIndex=0] 从该索引处开始查找
 * @returns {number} 满足条件的元素下标或-1
 * @version 1.1.0-beta.11
 */
const findIndex = function (arr, callback, fromIndex = 0) {
  if (typeof callback !== "function") {
    throw new Error("findIndex方法的第二个参数必须是函数");
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return i;
    }
  }
  return -1;
};


// 同步版本的forEach方法 ------
function forEachSync(arr, callback, thisObj) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisObj, arr[i], i, arr);
  }
}

// 异步版本的forEach方法 ------
async function forEachAsync(arr, callback, thisObj) {
  for (let i = 0; i < arr.length; i++) {
    await callback.call(thisObj, arr[i], i, arr);
  }
}

/**
 * 自定义forEach函数
 * @param {any[]} arr 数组
 * @param {Function} callback 回调函数
 * @param {Object} [thisObj] this指向
 * @version 1.1.0-beta.11
 */
const forEach = function (arr, callback, thisObj) {
  callback = callback || Function;
  // 判断是否使用async-await
  if (callback.constructor.name === "AsyncFunction") {
    return forEachAsync(arr, callback, thisObj);
  } else {
    return forEachSync(arr, callback, thisObj);
  }
};

/**
 * 自定义map函数
 * @param {any[]} arr 数组
 * @param {Function} callback 回调函数
 * @param {Object} [thisObj] this指向
 * @returns {*[]}
 */
const map = function (arr, callback, thisObj) {
  const newArr = [];
  for (let i = 0, j = arr.length; i < j; ++i) {
    let res = callback.call(thisObj, arr[i], i, this);
    if (res != null) newArr.push(res);
  }
  return newArr;
};

/**
 * 对象数组中根据指定属性名以及拼接字符，返回拼接的属性名的值的字符串（普通或对象数组）
 * @param {Object[]|string} arr 对象数组
 * @param {string} char 符号
 * @param {string} [attrName] 属性名，该参数有值是arr必须是对象数组
 * @returns {string} 符号拼接的字符串
 * @version 1.1.0-beta.11
 */
const join = function (arr, char, attrName) {
  if (typeof arr === "string") {
    return arr.split("").join(char);
  }
  return arr
      .map((item) => {
        if (attrName && typeof item === "object") {
          return item[attrName];
        } else return item;
      })
      .join(char);
};


/**
 * 排序
 * @param {number[]} arr number类型数组
 * @param {number} [type=1] 排序类型 1：从小到大 2：从大到小 3：随机
 * @returns {number[]} 排序后的数组
 */
const sort = function (arr = [], type = 1) {
  return [].concat(arr).sort((a, b) => {
    switch (type) {
      case 1:
        return a - b;
      case 2:
        return b - a;
      case 3:
        return Math.random() - 0.5;
      default:
        return arr;
    }
  });
};

/**
 * 数组去重（普通数组或对象数组都可以）
 * @param {Array<any>} arr 数组
 * @param {string} [attrName] 指定属性名称 (如果传这个值，就是对象数组去重，arr参数必须是对象数组)
 * @returns {Array} 去重后的数组
 * @version 1.1.0-beta.11
 */
const unique = function (arr, attrName) {
  if (!isArray(arr)) {
    return arr
  }
  if (attrName) {
    let hash = {};
    return arr.reduce(function (preResult, curItem) {
      if (!hash[curItem[attrName]]) {
        hash[curItem[attrName]] = preResult.push(curItem);
      }
      return preResult;
    }, []);
  } else {
    return arr.filter((item, index, self) =>
        index === self.findIndex((o) => JSON.stringify(o) === JSON.stringify(item))
    );
  }
};

/**
 * 求两个数组的并集（普通数组或对象数组都可以）
 * @param {any[]} arr1 数组
 * @param {any[]} arr2 数组
 * @param {string} [attrName] 指定属性名称 (如果传这个值，就是对象数组合并，arr1和arr2必须是对象数组)
 * @returns {any[]} 返回并集数组
 */
const union = function (arr1, arr2, attrName) {
  if (attrName) {
    return [...arr1, ...arr2].reduce((result, obj) => {
      const existingObj = result.find((item) => item[attrName] === obj[attrName]);
      if (!existingObj) {
        result.push(obj);
      }
      return result;
    }, []);
  } else {
    return unique([...arr1, ...arr2]);
  }
};

/**
 * 求两个数组的交集
 * @param {any[]} arr1 数组
 * @param {any[]} arr2 数组
 * @param {string} [attrName] 指定属性名称 (如果传这个值，就是求两个对象数组交集，arr1和arr2必须是对象数组)
 @returns {any[]} 返回交集数组
 */
const intersect = function (arr1, arr2, attrName) {
  let result = [];
  if (attrName) {
    let map = new Map();
    arr1.forEach(item => map.set(item[attrName], item));
    arr2.forEach(item => {
      if (map.has(item[attrName])) {
        result.push(item);
      }
    });
    // return arr1.filter(obj1 => arr2.some(obj2 => obj1[attrName] === obj2[attrName]));
  } else {
    result = arr1.filter(item => {
      if (isObject(item)) {
        let index = arr2.findIndex(cItem => JSON.stringify(cItem) === JSON.stringify(item))
        return index !== -1
      } else {
        return arr2.includes(item)
      }
    });
  }
  return result;
}

/**
 * 在二维数组中根据指定属性名获取数组的交集
 * @param {Array<Array<any>>} arr 二维数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
 * @param {string} [attrName] 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组
 * @returns {any[]} 返回交集数组
 */
const intersectInMatrix = function (arr, attrName) {
  let _arr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    _arr = intersect(i ? _arr : arr[i], arr[i + 1], attrName)
  }
  return _arr;
};

/**
 * 检测数组中指定元素出现的次数
 * @param {any[]} arr 数组
 * @param {(Function|*)} predicate 指定元素或者回调函数
 * @returns {number} 返回出现次数
 */
const elCount = function (arr, predicate) {
  if (!predicate) {
    return 0
  }
  return arr.reduce((preResult, curItem, currentIndex, orgArr) => {
    if (isFunction(predicate)) {
      return predicate(curItem, currentIndex, orgArr) ? preResult + 1 : preResult;
    } else {
      return curItem === predicate ? preResult + 1 : preResult;
    }
  }, 0)
};

/**
 * 对象数组重复数据添加标记
 * @param {Object[]} arr 对象数组
 * @param {string} attrName 指定属性名称 例如：'a'
 * @param {string} tagAttrName 标记属性名称 默认：'_xh' 值从1开始
 * @returns {Object[]} 返回新的对象数组
 */
const duplicateDataTag = function (
    arr,
    attrName,
    tagAttrName = "_xh"
) {
  const _arr = JSON.parse(JSON.stringify(arr));
  const onceArr = [];
  _arr.forEach((item) => {
    const i = onceArr.findIndex((cItem) => cItem[attrName] === item[attrName]);
    if (i === -1) {
      item[tagAttrName] = 1;
      onceArr.push(item);
    } else {
      item[tagAttrName] = onceArr[i][tagAttrName] + 1;
      onceArr.splice(i, 1, item);
    }
  });
  return _arr;
};

/**
 * 根据指定属性对数组进行分组
 * @param {Object[]} arr 对象数组
 * @param {string} attrName 指定属性名称
 * @returns {Object} 返回分组后的对象
 * @version 1.1.0-beta.11
 */
const groupByAttr = function (arr, attrName) {
  return arr.reduce((preResult, curItem) => {
    const key = curItem[attrName];
    if (!preResult[key]) {
      preResult[key] = [];
    }
    preResult[key].push(curItem);
    return preResult;
  }, {});
}

/**
 * 根据指定长度对数组进行分组
 * @param {any[]} arr 数组
 * @param {number} size 指定长度
 * @returns {any[][]} 返回分组后的二维数组
 * @version 1.1.0-beta.11
 */
const groupBySize = function (arr, size) {
  return arr.reduce((preResult, curItem, currentIndex) => {
    const groupIndex = Math.floor(currentIndex / size);
    if (!preResult[groupIndex]) {
      preResult[groupIndex] = [];
    }
    preResult[groupIndex].push(curItem);
    return preResult;
  }, []);
}

/**
 * 将类数组转换为数组的方法
 * @param {*} arr 类数组
 * @returns {Array} 数组
 */
const toArray = function (arr) {
  return Array.prototype.slice.call(arr);
};

/**
 * 一维数组转树形结构数据
 * @param {Array} arr 数组
 * @param {Object} options 配置项
 * @param {string} [options.id='id'] 唯一表示字段
 * @param {string} [options.parentId='parentId'] 父级标识字段
 * @param {string} [options.children='children'] 子级数据字段
 * @returns {*[]}
 * @version 1.1.0-beta.16
 */
const arrayToTree = function (arr, options = {}) {
  options = {
    ...{
      id: 'id',
      children: 'children',
      parentId: 'parentId',
    },
    ...options,
  }
  const tree = [];
  const map = {};

  // 创建映射表
  for (let i = 0; i < arr.length; i++) {
    map[arr[i][options.id]] = i;
    arr[i][options.children] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (node[options.parentId] !== null) {
      arr[map[node[options.parentId]]][options.children].push(node);
    } else {
      tree.push(node);
    }
  }
  return tree;
}

/**
 * 树形数据转一维数组
 * @param {Array} tree 树形结构数组
 * @param {Object} options 配置项
 * @param {string} [options.children='children'] 子级数据字段
 * @returns {*[]}
 * @version 1.1.0-beta.16
 */
const treeToArray = function (tree, options = {}) {
  options = {
    ...{
      children: 'children',
    },
    ...options,
  }
  const flatArray = [];

  function flatten(node) {
    flatArray.push(node);
    if (node[options.children] && node[options.children].length > 0) {
      for (let i = 0; i < node[options.children].length; i++) {
        flatten(node[options.children][i]);
      }
    }
  }

  for (let i = 0; i < tree.length; i++) {
    flatten(tree[i]);
  }

  return flatArray;
}

/**
 * 数组最大值
 * @param {Array<number|Object>} arr 数组
 * @param {string} [attrName] 对象数组的属性名
 * @returns {number|*}
 * @version 1.1.0-beta.16
 */
const max = function (arr, attrName) {
  if (!isArray(arr)) {
    return arr
  }
  let _arr
  if (attrName) {
    _arr = arr.map(item => item[attrName])
  } else {
    _arr = arr
  }
  return Math.max.apply(null, _arr)
}
/**
 * 数组最小值
 * @param {Array<number|Object>} arr 数组
 * @param {string} [attrName] 对象数组的属性名
 * @returns {number|*}
 * @version 1.1.0-beta.16
 */
const min = function (arr, attrName) {
  if (!isArray(arr)) {
    return arr
  }
  let _arr
  if (attrName) {
    _arr = arr.map(item => item[attrName])
  } else {
    _arr = arr
  }
  return Math.min.apply(null, _arr)
}

export {
  find,
  findIndex,
  forEach,
  map,
  join,
  sort,
  unique,
  union,
  intersect,
  intersectInMatrix,
  elCount,
  duplicateDataTag,
  groupByAttr,
  groupBySize,
  toArray,
  arrayToTree,
  treeToArray,
  max,
  min
};
