import {isObject} from "./inspect.js";
import {queryElement} from "./dom";

/**
 * 获取当前的滚动位置
 * @param {Element|string} el - 元素
 * @returns {Object} 滚动位置对象
 */
export const getScrollPosition = function (el) {
  let element = el
  if (typeof element === 'string') {
    const _el = queryElement(element)
    if (_el) {
      if (_el instanceof NodeList) {
        element = _el[0]
      } else {
        element = _el
      }
    } else {
      element = window
    }
  }

  if (element instanceof Element) {
    return {
      x: element.scrollLeft || 0,
      y: element.scrollTop || 0,
    }
  } else {
    // 兼容 window/document 获取滚动位置
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft || 0,
      y: window.pageYOffset || document.documentElement.scrollTop || 0,
    };
  }
};

/**
 * 滚动父元素将指定元素滚动到用户可视区域
 * @param {Element|string} el - 元素或选择器
 * @param {Object} [options={behavior: 'smooth'}] - 滚动选项
 * @param {number} [options.top=0] - 目标垂直位置，默认为0（顶部）
 * @param {number} [options.left=0] - 目标水平位置，默认为0（左侧）
 * @param {string} [options.behavior='smooth'] - 滚动行为，可选值有"auto"、"smooth"和"instant"
 * @returns {void}
 */
export const scrollIntoView = function (el, options = {}) {
  let element = el;

  if (typeof element === "string") {
    const _el = queryElement(element)
    if (_el) {
      if (_el instanceof NodeList) {
        element = _el[0]
      } else {
        element = _el
      }
    } else return;
  }

  // 验证元素是否存在且为DOM元素
  if (!element || !(element instanceof Element)) {
    return;
  }
  options = {
    behavior: "smooth",
    ...(isObject(options) ? options : {})
  };

  // 检查并调用scrollIntoView方法
  if (element.scrollIntoView && typeof element.scrollIntoView === 'function') {
    element.scrollIntoView(options);
  }
}

/**
 * 滚动至顶部
 * @param {Window|Element|string} [el=window] - 元素或选择器，默认为window
 * @param {Object} [options={behavior: 'smooth'}] - 滚动选项
 * @param {number} [options.top=0] - 目标垂直位置，默认为0（顶部）
 * @param {number} [options.left=0] - 目标水平位置，默认为0（左侧）
 * @param {string} [options.behavior='smooth'] - 滚动行为，可选值有"auto"和"smooth"
 * @returns {void}
 */
export const scrollToTop = function (el = window, options = {}) {
  let element = el
  if (typeof element === 'string') {
    const _el = queryElement(element)
    if (_el) {
      if (_el instanceof NodeList) {
        element = _el[0]
      } else {
        element = _el
      }
    } else {
      element = window
    }
  }
  if (element && typeof element.scrollTo === 'function') {
    element.scrollTo({
      top: 0,
      behavior: 'smooth',
      ...(isObject(options) ? options : {})
    });
  } else {
    console.warn('Element does not support scrollTo method');
  }
};

class ScrollView {
  constructor(options = {}) {
    const {
      dataList = [],
      attrName = '',
      elAttrName = "data-name",
      callback = () => {},
      offsetTop = 0
    } = options;

    this.dataList = Array.isArray(dataList) ? dataList : [];
    this.attrName = typeof attrName === 'string' ? attrName : '';
    this.elAttrName = typeof elAttrName === 'string' ? elAttrName : 'data-name';
    this.offsetTop = Number(offsetTop) || 0;
    this.callback = typeof callback === 'function' ? callback : () => {};

    // 缓存 DOM 元素
    this.elementMap = new Map();
    this._cacheElements();
  }

  _cacheElements() {
    this.dataList.forEach((item, index) => {
      const selectorValue = this.attrName ? item[this.attrName] : item;
      if (selectorValue == null) return;

      const element = document.querySelector(`[${this.elAttrName}="${selectorValue}"]`);
      if (element) {
        this.elementMap.set(index, element);
      }
    });
  }

  /**
   * 获取滚动高度
   * @param {Event} e - 滚动事件对象
   * @returns {number}
   */
  _getScrollTop(e) {
    const target = e.target;
    if (target === document || target === document.body) {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    return target.scrollTop || 0;
  }

  /**
   * 处理滚动事件
   * @param {Event} e - 滚动事件对象
   * @returns {void}
   */
  handlerScroll(e) {
    const y = this._getScrollTop(e);
    let currentIndex = -1;
    let currentEl = null;

    for (let i = 0; i < this.dataList.length; i++) {
      const itemEl = this.elementMap.get(i);
      if (!itemEl) continue;

      if (y >= (itemEl.offsetTop - this.offsetTop)) {
        currentIndex = i;
        currentEl = itemEl;
      }
    }

    if (currentIndex !== -1 && currentEl) {
      try {
        this.callback({
          scrollEl: e.target,
          currentEl: currentEl,
          attrName: this.attrName,
          elAttrName: this.elAttrName,
          dataList: this.dataList,
          index: currentIndex,
          value: this.attrName ? this.dataList[currentIndex][this.attrName] : this.dataList[currentIndex]
        });
      } catch (err) {
        console.error('[ScrollView] Callback execution error:', err);
      }
    }
  }
}

/**
 * 初始化滚动监听
 * @param {Object} options - 配置对象
 * @param {Array} [options.dataList=[]] - 数据列表
 * @param {string} [options.attrName=''] - attrName 有值时，dataList为对象数组
 * @param {string} [options.elAttrName='data-name'] - 属性名
 * @param {Function} [options.callback=()=>{}] - 回调函数
 * @param {number} [options.offsetTop=0] - 自定义偏移量
 * @returns {ScrollView} 返回ScrollView实例对象
 * @version 1.1.0-beta.11
 */
export const initScrollView = function (options = {}) {
  return new ScrollView(options);
};
