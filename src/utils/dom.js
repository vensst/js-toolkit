/**
 * 查找dom元素
 * @param {(string|Element)} selector 选择器
 * @returns {(Element|NodeListOf<Element>|null)} 返回元素或元素集合
 */
const $ = function (selector = 'html') {
  if (!selector) return null;
  if (typeof selector === "string") {
    const nodeList = document.querySelectorAll(selector)
    return nodeList.length === 1 ? nodeList[0] : nodeList
  } else if (selector instanceof Element) {
    return selector;
  } else {
    return null;
  }
};

/**
 * 检测类名，校验指定元素的类名是否包含指定的类名
 * @param {Element} ele dom元素
 * @param {string} className 类名
 * @returns {boolean} true/false
 */
const hasClass = function (ele, className) {
  if (ele && className) {
    return ele.classList?.contains(className) || false;
  } else return false;
  // return ele.className.match(new RegExp("(\\s|^)" + name + "(\\s|$)"));
};

/**
 * 添加类名
 * @param {(Element|NodeList)} ele 元素
 * @param {string} className 类名
 */
const addClass = function (ele, className) {
  const ac = function (ele, className) {
    if (!hasClass(ele, className)) {
      ele.className += " " + className;
    }
  }
  try {
    if (ele instanceof Element) {
      ac(ele, className)
    } else if (ele instanceof NodeList) {
      ele.forEach(item => {
        ac(item, className)
      })
    }
  } catch (e) {
  }
};

/**
 * 删除类名
 * @param {(Element|NodeList)} ele 元素
 * @param {string} className 类名
 */
const removeClass = function (ele, className) {
  let reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
  const rc = function (ele, className) {
    if (hasClass(ele, className)) {
      ele.className = ele.className.replace(reg, "");
    }
  }
  try {
    if (ele instanceof Element) {
      rc(ele, className)
    } else if (ele instanceof NodeList) {
      ele.forEach(item => {
        rc(item, className)
      })
    }
  } catch (e) {
  }

};

/**
 * 替换类名
 * @param {(Element|NodeList)} ele 元素
 * @param {string} newClassName  新类名
 * @param {string} oldClassName   旧类名
 */
const replaceClass = function (ele, newClassName, oldClassName) {
  removeClass(ele, oldClassName);
  addClass(ele, newClassName);
};

/**
 * 获取兄弟节点
 * @param {Element} ele dom元素
 * @returns {*[]} 兄弟节点数组
 */
const siblings = function (ele) {
  if (!ele) return [];
  let _ele;
  if (ele instanceof Element) {
    _ele = ele
  }
  if (ele instanceof NodeList) {
    _ele = ele[0]
  }
  let child = _ele.parentNode.children,
      eleMatch = [];
  for (let i = 0, len = child.length; i < len; i++) {
    if (child[i] !== _ele) {
      eleMatch.push(child[i]);
    }
  }
  return eleMatch;
};

/**
 * 获取行间样式属性
 * @param {Element} ele 元素
 * @param {string} attrName 属性名
 * @returns {*} 属性值
 */
const getByStyle = function (ele, attrName) {
  if (ele instanceof Element) {
    if (ele.style) {
      return ele.style[attrName];
    } else {
      return getComputedStyle(ele, null)[attrName];
    }
  }
};

/**
 * 在指定元素之后插入新元素
 * @param {Element} el 元素
 * @param {string} htmlString 插入的元素
 */
const elInsertAfter = function (el, htmlString) {
  if (el && htmlString) {
    el.insertAdjacentHTML("afterend", htmlString)
  }
}

/**
 * 在指定元素之前插入新元素
 * @param {Element} el 当前元素
 * @param {string} htmlString 插入元素
 */
const elInsertBefore = function (el, htmlString) {
  if (el && htmlString) {
    el.insertAdjacentHTML("beforebegin", htmlString);
  }
}

/**
 * 元素添加style样式
 * @param {HTMLElement} el 元素
 * @param {Object} style 样式对象
 * @version 1.1.0-beta.8
 */
const addStyle = function (el, style) {
  if (el && style) {
    Object.keys(style).forEach(key => {
      el.style[key] = style[key];
    })
  }
}

export {
  $,
  hasClass,
  addClass,
  removeClass,
  replaceClass,
  siblings,
  getByStyle,
  elInsertAfter,
  elInsertBefore,
  addStyle
}

