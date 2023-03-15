/**
 * 查找dom元素
 * @param selector {string} 选择器
 * @returns {HTMLElement|NodeListOf<*>|HTMLCollectionOf<Element>|*}
 */
export const $ = function (selector) {
  let type = selector.substring(0, 1);
  if (type === "#") {
    if (document.querySelecotor) return document.querySelector(selector);
    return document.getElementById(selector.substring(1));
  } else if (type === ".") {
    if (document.querySelecotorAll) return document.querySelectorAll(selector);
    return document.getElementsByClassName(selector.substring(1));
  } else {
    return document[
      "querySelectorAll" ? "querySelectorAll" : "getElementsByTagName"
    ](selector);
  }
};

/**
 * 检测类名，校验指定元素的类名是否包含指定的类名
 * @param ele {Dom} 元素
 * @param name {string} 类名
 * @returns {RegExpMatchArray}
 */
export const hasClass = function (ele, name) {
  // return ele.classList.contains(name);
  return ele.className.match(new RegExp("(\\s|^)" + name + "(\\s|$)"));
};

/**
 * 添加类名
 * @param ele {Dom} 元素
 * @param name {string} 类名
 */
export const addClass = function (ele, name) {
  if (!hasClass(ele, name)) ele.className += " " + name;
};

/**
 * 删除类名
 * @param ele {Dom} 元素
 * @param name {string} 类名
 */
export const removeClass = function (ele, name) {
  if (hasClass(ele, name)) {
    let reg = new RegExp("(\\s|^)" + name + "(\\s|$)");
    ele.className = ele.className.replace(reg, "");
  }
};

/**
 * 替换类名
 * @param ele {Dom} 元素
 * @param newName {string} 新类名
 * @param oldName {string} 旧类名
 */
export const replaceClass = function (ele, newName, oldName) {
  removeClass(ele, oldName);
  addClass(ele, newName);
};

/**
 * 获取兄弟节点
 * @param ele {Dom} 元素
 * @returns {*[]}  兄弟节点数组
 */
export const siblings = function (ele) {
  let chid = ele.parentNode.children,
    eleMatch = [];
  for (let i = 0, len = chid.length; i < len; i++) {
    if (chid[i] !== ele) {
      eleMatch.push(chid[i]);
    }
  }
  return eleMatch;
};

/**
 * 获取行间样式属性
 * @param ele {Dom} 元素
 * @param name {string} 属性名
 * @returns {*} 属性值
 */
export const getByStyle = function (ele, name) {
  if (ele.currentStyle) {
    return ele.currentStyle[name];
  } else {
    return getComputedStyle(ele, false)[name];
  }
};

/**
 * 在指定元素之后插入新元素
 * @param el {Dom} 元素
 * @param htmlString {string} 插入元素
 */
export const elInsertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("afterend", htmlString);

/**
 * 在指定元素之前插入新元素
 * @param el {Dom} 当前元素
 * @param htmlString {string} 插入元素
 */
export const elInsertBefore = (el, htmlString) =>
  el.insertAdjacentHTML("beforebegin", htmlString);
