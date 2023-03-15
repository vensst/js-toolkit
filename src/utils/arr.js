/*
  oArr：表示 Object[]类型数组 例如：[{name:"xxx"}]
  arr： 表示普通数组 例如：[1,2]
*/
/**
 * 查找对象数组是否存在某元素 返回 -1或下标，可使用 findIndex() 代替
 * @param arr {Array<Object>}
 * @param attrName {string} 查找的元素属性名
 * @param attrVal {*} 查找的元素属性的值
 * @returns {number} 下标或-1
 */
export const oArrFindEle = function (arr, attrName, attrVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][attrName] === attrVal) {
      return i;
    }
  }
  return -1;
};

/**
 * 对象数组去重
 * @param arr {Array<Object>}
 * @param attrName {string} 需要匹配去重的对象里属性名
 * @returns {*}
 */
export const oArrRemoveRepeat = function (arr, attrName) {
  let hash = {};
  return arr.reduce(function (item, next) {
    hash[next[attrName]]
      ? ""
      : (hash[next[attrName]] = true && item.push(next));
    return item;
  }, []);
};

/**
 * 对象数组根据指定属性名称值返回逗号隔开字符串
 * @param arr {Object[]}
 * @param attrName {string}
 * @param sym {string}  符号 默认 ','
 * @returns {string}
 */
export const findEleTurnSymDelStrByOArr = function (arr, attrName, sym = ",") {
  let newArr = arr.map((item) => item[attrName]);
  return newArr.join(sym);
};

/**
 * 普通数组去重
 * @param arr {Array<string|number>} 数组
 * @returns {any[]|*[]|*}
 */
export const arrRemoveRepeat = function (arr) {
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
 * @param arr {any[]}
 * @param val {any}
 * @returns {boolean}
 */
export const arrContains = function (arr, val) {
  return arr.includes(val);
};

/**
 * 自定义 each 函数
 * @param  {any[]}
 * @param  {Function} 回调函数
 * @return {undefined}
 */
export const each = function (arr, fn) {
  fn = fn || Function;
  let a = [];
  let args = Array.prototype.slice.call(arguments, 1);
  for (let i = 0; i < arr.length; i++) {
    let res = fn.apply(arr, [arr[i], i].concat(args));
    if (res != null) a.push(res);
  }
};

/**
 * 自定义 map
 * @param arr {any[]}
 * @param fn {Function} 回调函数
 * @param thisObj
 * @returns {*[]}
 */
export const map = function (arr, fn, thisObj) {
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
 * @param arr {number[]} 数组
 * @param type {number} 排序类型 1：从小到大 2：从大到小 3：随机
 * @returns {*}
 */
export const sort = function (arr, type = 1) {
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
 * @param arr {any[]}
 * @returns {*}
 */
export const formArray = function (arr) {
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
 * @param a {any[]}
 * @param b {any[]}
 * @returns {*[]|*}
 */
export const arrMerge = function (a, b) {
  let newArr = a.concat(b);
  return arrRemoveRepeat(newArr);
};

/**
 * 获取两个数组相同元素，求两个数组(集合)的交集
 * @param a {any[]}
 * @param b {any[]}
 * @returns {*}
 */
export const arrIntersect = function (a, b) {
  a = arrRemoveRepeat(a);
  return map(a, function (o) {
    return arrContains(b, o) ? o : null;
  });
};

/**
 * 获取两个对象数组的交集
 * @param arr1 {Object[]} 数组1
 * @param arr2 {Object[]} 数组2
 * @param attrName {string} 指定属性名称 例如：'a'
 * @return {*[]} 返回交集数组
 */
export const getIntersectOfObjArr = function (arr1, arr2, attrName) {
  let arr = [];
  arr1.forEach((item) => {
    if (arr2.some((cItem) => cItem[attrName] === item[attrName])) {
      arr.push(item);
    }
  });
  return arr;
};

/**
 * 获取多个对象数组的交集
 * @param arr {Array<Array<Object>>} 数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
 * @param attrName {string} 指定属性名称 例如：'a'
 * @return {*[]} 返回交集数组
 */
export const getIntersectOfMultiObjArr = function (arr, attrName) {
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
 * @param arr {Array<any>}
 * @param ele {any}
 * @returns {Array<any>}
 */
export const arrRemoveEle = function (arr, ele) {
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
 * 数组检测数值出现次数
 * @param arr {any[]}
 * @param val {any}
 * @returns {number}
 */
export const arrEleCount = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * 对象数组重复数据添加标记
 * @param arr {Object[]} 对象数组
 * @param attrName {string} 指定属性名称 例如：'a'
 * @param tagAttrName {string} 标记属性名称 默认：'_xh' 值从1开始
 * @returns {Object[]} 返回新的对象数组
 */
export const addTagToObjectArrayDuplicateData = function (
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
