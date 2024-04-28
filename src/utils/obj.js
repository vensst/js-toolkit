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
 * @param {*} [defaultValue=undefined] 默认值
 * @returns {*}
 * @version 1.1.0-beta.11
 */
const chainGet = function (obj, chain, defaultValue = undefined) {
  if (!obj) return defaultValue;
  if (!chain) return obj;
  const properties = chain.split('.');
  let current = obj;
  for (let i = 0; i < properties.length; i++) {
    if (!current) return defaultValue;
    // a[0] a['b']
    // 正则匹配取值方式是否为[]取值方式
    const reg = /\[(.*)\]/;
    const itemProperty = properties[i]
    if (reg.test(itemProperty)) {
      // current = eval(`current.${itemProperty}`);
      const charIndex = itemProperty.indexOf("[")

      try {
        if (charIndex === 0) {
          const matchValue = itemProperty.match(reg)
          // 处理兼容 a['b'] 或 a["b"]
          const key = matchValue[1].replace(/['"]/g, '')
          current = current[key]
        } else {
          const itemPropertyLeft = itemProperty.substring(0, charIndex)
          const itemPropertyRight = itemProperty.substring(charIndex)
          const matchValue = itemPropertyRight.match(reg)
          // 处理兼容 a['b'] 或 a["b"]
          const key = matchValue[1].replace(/['"]/g, '')
          current = current[itemPropertyLeft][key]
        }
      } catch (e) {
        current = defaultValue
      }

    } else current = current[itemProperty];
  }
  return current || defaultValue;
}

export {
  chainGet
}
