/*
* @Name: obj
* @description: obj.js
* @Date: 2023/5/30 17:54
* @Author: yf_hu
* @LastEditors: yf_hu
* @LastEditTime: 2023/5/30 17:54
* */

/**
 * 链式获取对象属性
 * @param {Object} obj 检索对象
 * @param {string} chain 属性链（例如：a.b.c）
 * @param {*} defaultValue 默认值：undefined
 * @returns {*}
 * @version 1.1.0-beta.11
 */
const chainGet = function (obj, chain, defaultValue = undefined) {
  const properties = chain.split('.');
  let current = obj;
  for (let i = 0; i < properties.length; i++) {
    if (current == null) return defaultValue;
    current = current[properties[i]];
  }
  return current;
}

export {
  chainGet
}
