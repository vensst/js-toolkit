/*
 * 查找
 * */

/**
 * 查找数组对象是否存在某元素 返回 -1或下标
 * @param arrObj {ArrayObject} 数组对象格式
 * @param attrName {String} 查找的元素属性名(key)
 * @param attrVal {Any} 查找的元素属性(key)值
 * @returns {number} -1或下标
 */
export const arrObjFindElem = function (arrObj, attrName, attrVal) {
  for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i][attrName] === attrVal) {
      return i;
    }
  }
  return -1;
};

/**
 * 数组去重（IE可能不兼容）
 * @param arr {Array} 数组
 * @returns {any[]|*[]} 去重复后数组
 */
export const arrRemoveRepet = function (arr) {
  if ( Array.hasOwnProperty('from') ){
    return Array.from(new Set(arr));
  }else {
    let r = [], NaNBol = true
    for(let i=0; i < arr.length; i++) {
      if (arr[i] !== arr[i]) {
        if (NaNBol && r.indexOf(arr[i]) === -1) {
          r.push(arr[i])
          NaNBol = false
        }
      }else{
        if(r.indexOf(arr[i]) === -1) r.push(arr[i])
      }
    }
    return r
  }

};

/*
 * @desc 数组对象去重
 * @param {ArrayObject} arrObj 数组对象
 * @param {String} name 需要去重的属性名
 * @return {ArrayObject} 去重复后数数组对象
 * */
export const arrObjRemoveRepet=function (arrObj, name) {
  let hash = {};
  return arrObj.reduce(function (item, next) {
    hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
    return item;
  }, []);
};

/*
 * @desc 合并数组，求两个数组(集合)的并集
 * @param {Array} a 数组
 * @param {Array} b 数组
 * @return {Array}
 * */
export const arrUnion =function(a, b) {
  var newArr = a.concat(b);
  return this.arrRemoveRepet(newArr);
}

/*
 * @desc 获取两个数组相同元素，求两个集合的交集
 * @param {Array} a 数组
 * @param {Array} b 数组
 * @return {Array}
 * */
export const arrIntersect=function  (a, b) {
  var _this = this;
  a = this.arrRemoveRepet(a);
  return this.map(a, function(o) {
    return _this.contains(b, o) ? o : null;
  });
}

/*
 * @desc 删除数组其中一个元素
 * @param {Array} arr 数组
 * @param {Any} ele 元素名
 * @return {Array}
 * */
export const arrRemoveEle =function(arr, ele) {
  var index = arr.indexOf(ele);
  if(index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/*
 * @desc 数组对象指定属性值返回逗号隔开字符串
 * @param {ArrayObject} arrObj 数组对象格式
 * @param {String} attrName 查找的元素属性名
 * @return {Sting} 字符串
 * */
export function getArrObjAttrValStr (arrObj,attrName) {
  let arr=[];
  arrObj.map(o=>{
    arr.push(o[attrName])
  });
  return arr.join(',')
}

/*
 * @desc 取最大值
 * @param {Array} arr 数组
 * @return any 最大值
 *
 * */
export const getMax = function (arr) {
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

/*
 * @desc 取最小值
 * @param {Array} arr 数组
 * @return any 最小值
 *
 * */
export const getMin = function (arr) {
  return Math.min.apply(null, arr);
}

/*
 * @desc 求和
 * @param {Array} arr 数组
 * @return {Number} 总和
 *
 * */
export const getSum = function (arr) {
  arr.reduce(function (prev, cur) {
    return prev + cur;
  }, 0)
};

/*
 * @desc 平均值
 * @param {Array} arr 数组
 * @return {Number} 总和
 *
 * */
export const getAverage =function(arr) {
  return this.getSum(arr)/arr.length
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

/*
 * @desc 数组检测数值出现次数
 * @param {Array} arr 数组
 * @param {Any} val 需要检测的数值
 * @return {Number} 次数
 * */
export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
/**
 * 树形数据过滤
 * @param data
 * @param keywords
 * @returns {*[]}
 */
export const filterOfTreeData = function (data=[],keywords) {
  let arr = []
  data.forEach((item)=>{
    if(item["children"]&&item["children"].length){
      let children = filterOfTreeData(item["children"])
      let obj = {
        ...item,
        children
      }
      if (children && children.length) {
        arr.push(obj)
      } else if(item.name.indexOf(keywords)>-1){
        arr.push({ ...item })
      }
    }else {
      if(item.name.indexOf(keywords)>-1){
        arr.push(item)
      }
    }
  })
  return arr
}
