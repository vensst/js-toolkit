/**
 * 查找对象数组是否存在某元素 返回 -1或下标，可使用 findIndex() 代替
 * @param {Array<Object>} arr 对象数组
 * @param {string} attrName 查找的元素属性名
 * @param {*} attrVal  查找的元素属性的值
 * @returns {number} 下标或-1
 */
const findEleOfObjArr = function (arr, attrName, attrVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][attrName] === attrVal) {
      return i;
    }
  }
  return -1;
};

/**
 * 数组去重
 * @param {Array<any>} arr 数组（普通数组或对象数组都可以）
 * @returns {Array} 去重后的数组
 */
const uniqueArr = function (arr) {
  const set = new Set(arr.map(JSON.stringify));
  return Array.from(set).map(JSON.parse);
}

/**
 * 对象数组根据指定属性名称去重
 * @param {Array<Object>} arr 对象数组
 * @param {string} attrName 需要匹配去重的对象里属性名
 * @returns {Array} 去重后的数组
 */
const uniqueObjArr = function (arr, attrName) {
  let hash = {};
  return arr.reduce(function (item, next) {
    if (!hash[next[attrName]]) {
      hash[next[attrName]] = item.push(next)
    }
    return item;
  }, []);
};

/**
 * 对象数组根据指定属性名称值返回逗号隔开字符串
 * @param {Object[]} arr 对象数组
 * @param {string} attrName 属性名
 * @param {string} sym 符号 默认 ','
 * @returns {string} 符号拼接的字符串
 */
const joinEleOfObjArr = function (arr, attrName, sym = ",") {
  let newArr = arr.map((item) => item[attrName]);
  return newArr.join(sym);
};

/**
 * 普通数组去重
 * @param {Array<string|number>} arr 普通数组
 * @returns {(string|number)[]} 去重后的数组
 */
const arrRemoveRepeat = function (arr) {
  if (Array.hasOwnProperty("from")) {
    return Array.from(new Set(arr));
  } else {
    let r = [],
      NaNBol = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i]) {
        if (NaNBol && r.indexOf(arr[i]) === -1) {
          r.push(arr[i]);
          NaNBol = false;
        }
      } else {
        if (r.indexOf(arr[i]) === -1) r.push(arr[i]);
      }
    }
    return r;
  }
};

/**
 * 判断一个元素是否在数组中
 * @param {(string|number)[]} arr 普通数组
 * @param {string|number} val 要查找的指定元素
 * @returns {boolean} 布尔值
 */
const arrContains = function (arr, val) {
  return arr.includes(val);
};

/**
 * 自定义 each 函数
 * @param {any[]} arr 数组
 * @param {Function} fn 回调函数
 */
const each = function (arr, fn) {
  fn = fn || Function;
  let a = [];
  let args = Array.prototype.slice.call(arguments, 1);
  for (let i = 0; i < arr.length; i++) {
    let res = fn.apply(arr, [arr[i], i].concat(args));
    if (res != null) a.push(res);
  }
};

/**
 * 自定义 map 函数
 * @param {any[]} arr 数组
 * @param {Function} fn 回调函数
 * @param {Object} thisObj this指向
 * @returns {*[]}
 */
const map = function (arr, fn, thisObj) {
  let scope = thisObj || window;
  let a = [];
  for (let i = 0, j = arr.length; i < j; ++i) {
    let res = fn.call(scope, arr[i], i, this);
    if (res != null) a.push(res);
  }
  return a;
};

/**
 * 排序
 * @param {number[]} arr number类型数组
 * @param {number} type 排序类型 1：从小到大 2：从大到小 3：随机，默认：1
 * @returns {number[]} 排序后的数组
 */
const sort = function (arr, type = 1) {
  return arr.sort((a, b) => {
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
 * 将类数组转换为数组的方法
 * @param {any[]} arr 类数组
 * @returns {Array} 数组
 */
const formArray = function (arr) {
  let _arr = [];
  if (Array.isArray(arr)) {
    _arr = arr;
  } else {
    _arr = Array.prototype.slice.call(arr);
  }
  return _arr;
};

/**
 * 数组合并，求两个数组(集合)的并集
 * @param {number[]} a 数组1
 * @param {number[]} b 数组2
 * @returns {number[]} 返回并集数组
 */
const arrMerge = function (a, b) {
  let newArr = a.concat(b);
  return arrRemoveRepeat(newArr);
};

/**
 * 获取两个数组相同元素，求两个数组(集合)的交集
 * @param {number[]} a 数组1
 * @param {number[]} b 数组2
 * @returns {number[]} 返回交集数组
 */
const arrIntersect = function (a, b) {
  a = arrRemoveRepeat(a);
  return map(a, function (o) {
    return arrContains(b, o) ? o : null;
  });
};

/**
 * 根据指定属性名获取两个对象数组的交集
 * @param {Object[]} arr1  数组1
 * @param {Object[]} arr2  数组2
 * @param {string} attrName  指定属性名称 例如：'a'
 * @returns {Object[]} 返回交集数组
 */
const getIntersectOfObjArr = function (arr1, arr2, attrName) {
  let arr = [];
  arr1.forEach((item) => {
    if (arr2.some((cItem) => cItem[attrName] === item[attrName])) {
      arr.push(item);
    }
  });
  return arr;
};

/**
 * 根据指定属性名获取多个对象数组的交集
 * @param {Array<Array<Object>>} arr  数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
 * @param {string} attrName  指定属性名称 例如：'a'
 * @returns {Object[]} 返回交集数组
 */
const getIntersectOfMultiObjArr = function (arr, attrName) {
  let _arr = [];
  if (arr.length === 1) {
    _arr = arr[0];
  } else {
    arr.forEach(async (item, index) => {
      if (index) {
        if (index !== arr.length - 1) {
          _arr = getIntersectOfObjArr(_arr, arr[index + 1], attrName);
        }
      } else {
        _arr = getIntersectOfObjArr(arr[index], arr[index + 1], attrName);
      }
    });
  }
  return _arr;
};

/**
 * 删除数组其中一个元素
 * @param {Array<any>} arr 数组
 * @param ele {any} 要删除的元素
 * @returns {Array<any>} 返回删除后的数组
 */
const arrRemoveEle = function (arr, ele) {
  let index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

/*
 * @desc 数组/数组对象排序
 *
 * 标准简单sort排序 arr/arrayObject.sort(sortby)  sortby必须是函数。
 * arr.sort((a,b)=>{
    return a-b
  });
 * */

/*
 * @desc 每一项是否满足条件
 * @params {Array} arr 数组
 * @return {Boolean} true of false
 * [1,2,3].every(item=>{return item>2})
 * */

/*
 * @desc 有一项满足条件
 * @param {Array} arr 数组
 * @return {Boolean} true of false
 *   [1,2,3].some(item=>{return item>2})
 * */

/**
 * 检测数组中指定元素出现的次数
 * @param {any[]} arr 数组
 * @param {any} val 元素
 * @returns {number} 返回出现次数
 */
const arrEleCount = function (arr, val) {
  return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}


/**
 * 对象数组重复数据添加标记
 * @param {Object[]} arr 对象数组
 * @param {string} attrName 指定属性名称 例如：'a'
 * @param {string} tagAttrName  标记属性名称 默认：'_xh' 值从1开始
 * @returns {Object[]} 返回新的对象数组
 */
const addTagToObjectArrayDuplicateData = function (
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
 * 树形数据过滤
 * @param data
 * @param keywords {string}
 * @returns {*[]}
 */
// export const filterOfTreeData = function (data = [], keywords) {
//   let arr = []
//   data.forEach((item) => {
//     if (item["children"]?.length) {
//       let children = filterOfTreeData(item["children"])
//       let obj = {
//         ...item,
//         children
//       }
//       if (children?.length) {
//         arr.push(obj)
//       } else if (item.name.indexOf(keywords) > -1) {
//         arr.push({...item})
//       }
//     } else {
//       if (item.name.indexOf(keywords) > -1) {
//         arr.push(item)
//       }
//     }
//   })
//   return arr
// }

export {
  findEleOfObjArr,
  uniqueArr,
  uniqueObjArr,
  joinEleOfObjArr,
  arrRemoveRepeat,
  arrContains,
  each,
  map,
  sort,
  formArray,
  arrMerge,
  arrIntersect,
  getIntersectOfObjArr,
  getIntersectOfMultiObjArr,
  arrRemoveEle,
  arrEleCount,
  addTagToObjectArrayDuplicateData
}
