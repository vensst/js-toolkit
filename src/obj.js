/*
* @Name: obj
* @description: obj.js
* @Date: 2023/5/30 17:54
* @Author: yf_hu
* @LastEditors: yf_hu
* @LastEditTime: 2023/5/30 17:54
* */

/**
 * 链式获取对象属性值，支持点表示法和方括号表示法
 *
 * @param {Object} obj - 要检索的对象
 * @param {string} chain - 属性链，支持点表示法(a.b.c)和方括号表示法(a[0]、a['b']、a["c"])
 * @param {*} [defaultValue=undefined] - 当属性不存在时返回的默认值
 * @returns {*} 属性值或默认值
 * @version 1.1.0-beta.11
 * @example
 * const obj = { a: { b: { c: 1 }, d: [{ e: 2 }] } };
 * chainGet(obj, 'a.b.c'); // 1
 * chainGet(obj, 'a.d[0].e'); // 2
 * chainGet(obj, 'a.f.g', 'default'); // 'default'
 */
export const chainGet = function (obj, chain, defaultValue = undefined) {
  // 处理边界情况
  if (!obj) return defaultValue;
  if (!chain) return obj;

  // 使用正则表达式解析属性链
  const regex = /\.|(?=\[)/g;
  const properties = chain.split(regex).filter(prop => prop !== '');

  let current = obj;

  for (let i = 0; i < properties.length; i++) {
    if (current === null || current === undefined) return defaultValue;

    const property = properties[i];

    try {
      if (property.startsWith('[') && property.endsWith(']')) {
        // 处理方括号表示法 [key] 或 [index]
        const key = property.slice(1, -1).replace(/['"]/g, '');
        // 如果key是数字，则转换为数字索引
        const index = isNaN(Number(key)) ? key : Number(key);
        current = current[index];
      } else {
        // 处理点表示法 key
        current = current[property];
      }
    } catch (e) {
      return defaultValue;
    }
  }

  return current !== undefined ? current : defaultValue;
}
