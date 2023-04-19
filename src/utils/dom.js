/**
 * 查找dom元素
 * @param {string|Element} selector 选择器
 * @returns {Element|NodeListOf<Element>|null} 返回元素或元素集合
 */
const $ = function (selector) {
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
 * @param {string} name 类名
 * @returns {boolean} true/false
 */
const hasClass = function (ele, name) {
  if (ele && name) {
    return ele.classList?.contains(name) || false;
  } else return false;
  // return ele.className.match(new RegExp("(\\s|^)" + name + "(\\s|$)"));
};

/**
 * 添加类名
 * @param {Element|NodeList} ele 元素
 * @param {string} name 类名
 */
const addClass = function (ele, name) {
  const ac = function (ele, name) {
    if (!hasClass(ele, name)) {
      ele.className += " " + name;
    }
  }
  try {
    if (ele instanceof Element) {
      ac(ele, name)
    } else if (ele instanceof NodeList) {
      ele.forEach(item => {
        ac(item, name)
      })
    }
  } catch (e) {
  }
};

/**
 * 删除类名
 * @param {Element|NodeList} ele 元素
 * @param {string} name 类名
 */
const removeClass = function (ele, name) {
  let reg = new RegExp("(\\s|^)" + name + "(\\s|$)");
  const rc = function (ele, name) {
    if (hasClass(ele, name)) {
      ele.className = ele.className.replace(reg, "");
    }
  }
  try {
    if (ele instanceof Element) {
      rc(ele, name)
    } else if (ele instanceof NodeList) {
      ele.forEach(item => {
        rc(item, name)
      })
    }
  } catch (e) {
  }

};

/**
 * 替换类名
 * @param {Element|NodeList} ele 元素
 * @param {string} newName  新类名
 * @param {string} oldName  旧类名
 */
const replaceClass = function (ele, newName, oldName) {
  removeClass(ele, oldName);
  addClass(ele, newName);
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
  let chid = _ele.parentNode.children,
    eleMatch = [];
  for (let i = 0, len = chid.length; i < len; i++) {
    if (chid[i] !== _ele) {
      eleMatch.push(chid[i]);
    }
  }
  return eleMatch;
};

/**
 * 获取行间样式属性
 * @param {Element} ele 元素
 * @param {string} name 属性名
 * @returns {*} 属性值
 */
const getByStyle = function (ele, name) {
  if(ele instanceof Element){
    if (ele.style) {
      return ele.style[name];
    } else {
      return getComputedStyle(ele, null)[name];
    }
  }
};

/**
 * 在指定元素之后插入新元素
 * @param {Element} el 元素
 * @param {string} htmlString 插入的元素
 */
const elInsertAfter = function (el, htmlString) {
  if(el&&htmlString){
    el.insertAdjacentHTML("afterend", htmlString)
  }
}

/**
 * 在指定元素之前插入新元素
 * @param {Element} el 当前元素
 * @param {string} htmlString 插入元素
 */
const elInsertBefore = function (el, htmlString) {
  if(el&&htmlString){
    el.insertAdjacentHTML("beforebegin", htmlString);
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
  elInsertBefore
}

