import {isObject} from "./inspect";

/**
 * 查找DOM元素
 * 根据选择器查找DOM元素，对ID选择器进行优化处理
 * @param {string} [selector] - CSS选择器字符串
 * @returns {Element|NodeList|undefined} 返回单个元素、元素集合（NodeList或数组）或 undefined
 * @example
 * queryElement('#myId') // 返回ID为myId的元素
 * queryElement('.myClass') // 返回类名为myClass的元素集合（NodeList 或单个 Element）
 * queryElement('div:first-child') // 返回选择器匹配的元素集合
 */
export const queryElement = function (selector) {
  if (selector == null || typeof selector !== "string") {
    return undefined
  }

  selector = selector.trim();

  // 简单 ID 选择器优化（避免复杂选择器被误判）
  if (/^#[a-zA-Z_][\w\-]*$/.test(selector)) {
    return document.getElementById(selector.slice(1));
  }

  const nodeList = document.querySelectorAll(selector);
  if (!nodeList || nodeList.length === 0) return undefined;
  return nodeList.length === 1 ? nodeList[0] : nodeList;
};

/**
 * 检测元素是否包含指定的CSS类名
 * @param {Element|NodeList|Element[]} el - DOM元素
 * @param {string} className - 要检测的类名
 * @returns {boolean} 如果元素包含指定类名则返回true，否则返回false
 */
export const hasClass = function (el, className) {
  if (typeof className !== 'string' || className === '') {
    return false;
  }

  if (el instanceof Element) {
    return el.classList.contains(className);
  } else if (el instanceof NodeList || Array.isArray(el)) {
    for (const item of el) {
      if (item instanceof Element && item.classList.contains(className)) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
};

/**
 * 添加类名
 * @param {Element|NodeList|Element[]} el - 元素
 * @param {string} className - 类名
 * @returns {Element|NodeList|Element[]} 原始元素或元素集合
 */
export const addClass = function (el, className) {
  if (typeof className !== 'string' || className === '') {
    return el
  }

  if (el == null) {
    return el;
  }

  if (el instanceof Element) {
    el.classList.add(className);
  } else if (el instanceof NodeList || Array.isArray(el)) {
    for (const item of el) {
      if (item instanceof Element) {
        item.classList.add(className);
      }
    }
    return el;
  }
  return el;

};

/**
 * 删除类名
 * @param {Element|NodeList|Element[]} el - 元素
 * @param {string} className - 类名
 * @returns {Element|NodeList|Element[]} 原始元素或元素集合
 */
export const removeClass = function (el, className) {
  if (typeof className !== 'string' || className === '') {
    return el;
  }

  if (el instanceof Element) {
    el.classList.remove(className);
  } else if (el instanceof NodeList || Array.isArray(el)) {
    for (const item of el) {
      if (item instanceof Element) {
        item.classList.remove(className);
      }
    }
  }
  return el;
};

/**
 * 替换元素的CSS类名
 * 用新类名替换旧类名
 * @param {Element|NodeList|Element[]} el - DOM元素或元素集合
 * @param {string} oldClassName - 旧类名
 * @param {string} newClassName - 新类名
 * @returns {Element|NodeList|Element[]} 原始元素或元素集合
 * @example
 * replaceClass(document.body, 'newClass', 'oldClass')
 * replaceClass(document.querySelectorAll('div'), 'active', 'inactive')
 */
export const replaceClass = function (el, oldClassName, newClassName) {
  if (!(el instanceof Element) && !(el instanceof NodeList) && !Array.isArray(el)) {
    return el;
  }

  if (typeof oldClassName !== 'string' || oldClassName === '') {
    return el;
  }

  if (typeof newClassName !== 'string' || newClassName === '') {
    return el;
  }

  if (el instanceof Element) {

    if (el.classList.contains(oldClassName)) {
      el.classList.remove(oldClassName);
      el.classList.add(newClassName);
    }

  } else if (el instanceof NodeList || Array.isArray(el)) {
    for (const item of el) {
      if (item instanceof Element) {
        if (item.classList.contains(oldClassName)) {
          item.classList.remove(oldClassName);
          item.classList.add(newClassName);
        }
      }
    }
  }
  return el;
};

/**
 * 获取元素的兄弟节点
 * 返回指定元素的所有兄弟节点（不包括元素本身）
 * @param {Element} el - DOM元素
 * @returns {Element[]|undefined} 兄弟节点数组
 * @example
 * const siblings = getSiblings(document.querySelector('li.active'))
 */
export const getSiblings = function (el) {
  if (!(el instanceof Element)) {
    return undefined;
  }

  if (!el.parentNode) {
    return undefined;
  }

  const siblings = Array.from(el.parentNode.children).filter(child => child !== el);

  return siblings.length > 0 ? siblings : undefined;
};


/**
 * 获取元素的样式属性值
 * 优先返回内联样式，其次返回计算样式
 * @param {Element} el - DOM元素
 * @param {string} [attrName] - CSS属性名（驼峰命名或短横线命名），例如 'backgroundColor' 或 'font-size'
 * @returns {string|CSSStyleDeclaration|undefined} 如果提供了attrName，返回具体的样式值字符串；否则返回CSSStyleDeclaration对象；如果元素无效则返回undefined
 * @example
 * getStyle(document.body, 'backgroundColor') // 返回背景色
 * getStyle(document.body, 'font-size') // 返回字体大小
 * getStyle(document.body) // 返回所有的样式声明对象
 */
export const getStyle = function (el, attrName) {
  if (!(el instanceof Element)) {
    return undefined;
  }

  try {
    // 如果没有指定属性名，直接返回style对象或计算样式
    if (typeof attrName !== 'string') {
      console.dir(el)
      console.log(el.style)
      return el.style || getComputedStyle(el, null);
    }

    // 优先返回内联样式
    if (el.style && el.style[attrName] !== undefined && el.style[attrName] !== '') {
      return el.style[attrName];
    }

    // 返回计算样式
    const computed = getComputedStyle(el, null);
    if (computed) {
      // 支持驼峰命名和短横线命名
      return computed[attrName] || computed.getPropertyValue(attrName) || undefined;
    }

    return undefined;
  } catch (error) {
    console.warn(`Failed to get computed style for property '${attrName}':`, error);
    return undefined;
  }
};

/**
 * 设置元素的样式
 * 支持为单个元素或元素集合批量设置样式
 * @param {Element|NodeList|Element[]} el - DOM元素、元素集合或元素数组
 * @param {Object} styles - 样式对象，键为CSS属性名，值为属性值
 * @returns {Element|NodeList|Element[]} 原始元素或元素集合
 * @example
 * addStyle(document.body, { backgroundColor: 'red', fontSize: '16px' })
 * addStyle(document.querySelectorAll('p'), { color: 'blue' })
 */
export const addStyle = function (el, styles = {}) {
  if (!(el instanceof Element) && !(el instanceof NodeList) && !Array.isArray(el)) {
    return el;
  }

  if (!isObject(styles)) {
    throw new TypeError('The second argument of addStyle function must be an object');
  }

  if (Object.keys(styles).length === 0) return el;

  const styleEntries = Object.entries(styles).map(([key, value]) => [
    key.replace(/([A-Z])/g, '-$1').toLowerCase(),
    value
  ]);

  const apply = (element) => {
    if (!(element instanceof Element)) return;
    for (const [property, value] of styleEntries) {
      try {
        element.style.setProperty(property, value);
      } catch (err) {
        console.warn(`Failed to set style property ${property}:`, err);
      }
    }
  };

  if (el instanceof Element) {
    apply(el);
  } else if (el instanceof NodeList || Array.isArray(el)) {
    for (const item of el) {
      if (item instanceof Element) {
        apply(item);
      }
    }
  }

  return el;
};


/**
 * 在指定元素之后插入新元素
 * @param {Element} el - 参考元素
 * @param {string} htmlString - 插入的HTML字符串
 * @returns {undefined}
 */
export const insertAfter = function (el, htmlString) {
  if (!(el instanceof Element) || typeof htmlString !== 'string') return;

  try {
    el.insertAdjacentHTML('afterend', htmlString);
  } catch (error) {
    console.error('Failed to insert HTML:', error);
  }
};

/**
 * 在指定元素之前插入新元素
 * @param {Element} el - 参考元素
 * @param {string} htmlString - 插入的HTML字符串
 * @returns {undefined}
 */
export const insertBefore = function (el, htmlString) {
  if (!(el instanceof Element) || typeof htmlString !== 'string') return;

  try {
    el.insertAdjacentHTML('beforebegin', htmlString);
  } catch (error) {
    console.error('Failed to insert HTML:', error);
  }
};
