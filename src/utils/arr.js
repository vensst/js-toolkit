/*
  oArr：表示 Object[]类型数组 例如：[{name:"xxx"}]
  arr： 表示普通数组 例如：[1,2]
*/

/**
 * 查找对象数组是否存在某元素 返回 -1或下标，可使用 findIndex() 代替
 * @param arr {Array<Object>}
 * @param attrName {string} 查找的元素属性名
 * @param attrVal {*} 查找的元素属性的值
 * @returns {number} 1或下标
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
    hash[next[attrName]] ? '' : hash[next[attrName]] = true && item.push(next);
    return item;
  }, []);
}

/**
 * 对象数组根据指定属性名称值返回逗号隔开字符串
 * @param arr {Object[]}
 * @param attrName {string}
 * @param sym {string}  符号 默认 ','
 * @returns {string}
 */
export const findEleTurnSymDelStrByOArr = function (arr, attrName,sym=',') {
  let newArr = arr.map(item => item[attrName]);
  return newArr.join(sym)
}

/**
 * 数组去重
 * @param arr {any[]} 数组
 * @returns {any[]|*[]|*}
 */
export const arrRemoveRepeat = function (arr) {
  if (Array.hasOwnProperty('from')) {
    return Array.from(new Set(arr));
  } else {
    let r = [], NaNBol = true
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i]) {
        if (NaNBol && r.indexOf(arr[i]) === -1) {
          r.push(arr[i])
          NaNBol = false
        }
      } else {
        if (r.indexOf(arr[i]) === -1) r.push(arr[i])
      }
    }
    return r
  }
};

/**
 * 数组合并，求两个数组(集合)的并集
 * @param a {any[]}
 * @param b {any[]}
 * @returns {*[]|*}
 */
export const arrMerge = function (a, b) {
  let newArr = a.concat(b);
  return this.arrRemoveRepeat(newArr);
}

/**
 * 判断一个元素是否在数组中
 * @param arr {any[]}
 * @param val {any}
 * @returns {boolean}
 */
export const arrContains = function (arr, val) {
  return arr.includes(val) != -1 ? true : false;
}

/**
 * 获取两个数组相同元素，求两个数组(集合)的交集
 * @param a {any[]}
 * @param b {any[]}
 * @returns {*}
 */
export const arrIntersect = function (a, b) {
  let _this = this;
  a = this.arrRemoveRepeat(a);
  return this.map(a, function (o) {
    return _this.arrContains(b, o) ? o : null;
  });
}

/**
 * 删除数组其中一个元素
 * @param arr {Array<any>}
 * @param ele {number}
 * @returns {*}
 */
export const arrRemoveEle = function (arr, ele) {
  let index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/**
 * 获取数组中最大值
 * @param arr {number[]}
 * @returns {number}
 */
export const arrMax = function (arr) {
  //1.
  // return Math.max(...arr)
  //2.
  // return Math.max.apply(this,arr)
  return Math.max.apply(null, arr);
  //3.prev:上一次的返回值 cur:当前值 curIndex:当前值索引 arr:当前数组
  // return arr.reduce((prev, cur, curIndex, arr) => {
  //   return Math.max(prev, cur);
  // }, 0)
};

/**
 * 获取数组中取最小值
 * @param arr {number[]}
 * @returns {number}
 */
export const arrMin = function (arr) {
  return Math.min.apply(null, arr);
}

/**
 * 数组求和
 * @param arr {number[]}
 * @returns {number}
 */
export const arrSum = function (arr) {
  return arr.reduce(function (prev, cur) {
    return prev + cur;
  }, 0)
};

/**
 * 求数组中数值平均值
 * @param arr {number[]}
 * @returns {number}
 */
export const arrAverage = function (arr) {
  return this.arrSum(arr) / arr.length
}
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
export const arrEleCount = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * 树形数据过滤
 * @param data
 * @param keywords
 * @returns {*[]}
 */
export const filterOfTreeData = function (data = [], keywords) {
  let arr = []
  data.forEach((item) => {
    if (item["children"] && item["children"].length) {
      let children = filterOfTreeData(item["children"])
      let obj = {
        ...item,
        children
      }
      if (children && children.length) {
        arr.push(obj)
      } else if (item.name.indexOf(keywords) > -1) {
        arr.push({...item})
      }
    } else {
      if (item.name.indexOf(keywords) > -1) {
        arr.push(item)
      }
    }
  })
  return arr
}
