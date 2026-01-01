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

/**
 * 滚动视图监听类 - 监听滚动并同步导航状态
 */
class ScrollView {
  constructor(options = {}) {
    const {
      dataList = [],
      attrName = '',
      elAttrName = 'data-name',
      offsetTop = 0,
      callback = () => {},
      container = window
    } = options;

    this.dataList = dataList;
    this.attrName = attrName;
    this.elAttrName = elAttrName;
    this.offsetTop = offsetTop;
    this.callback = callback;
    this.container = container;

    this.elements = [];
    this.activeIndex = -1;
    this.ticking = false;

    this._init();
  }

  /* =============== 初始化 =============== */

  _init() {
    this._cacheElements();
    this._bind();
    this._sync();
  }

  _cacheElements() {
    this.elements = this.dataList
        .map(item => {
          const value = this.attrName ? item[this.attrName] : item;
          return document.querySelector(`[${this.elAttrName}="${value}"]`);
        })
        .filter(Boolean);
  }

  /* =============== 滚动监听 =============== */

  _bind() {
    const target = this.container === window
        ? window
        : this.container;

    target.addEventListener('scroll', this._onScroll, { passive: true });
  }

  _onScroll = () => {
    if (this.ticking) return;

    this.ticking = true;
    requestAnimationFrame(() => {
      this._sync();
      this.ticking = false;
    });
  };

  /* =============== 核心逻辑（不可能跳） =============== */

  _sync() {
    const scrollTop = this._getScrollTop();
    let index = 0;

    for (let i = 0; i < this.elements.length; i++) {
      const elTop = this.elements[i].offsetTop;
      if (scrollTop + this.offsetTop >= elTop) {
        index = i;
      } else {
        break;
      }
    }

    if (index !== this.activeIndex) {
      this.activeIndex = index;
      this.callback({
        index,
        currentEl: this.elements[index],
        data: this.dataList[index]
      });
    }
  }

  _getScrollTop() {
    if (this.container === window) {
      return window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
    }
    return this.container.scrollTop;
  }

  /* =============== 点击导航 =============== */

  /**
   * 滚动到指定索引位置
   * @param {number} index - 目标元素索引
   * @param {boolean} [smooth=true] - 是否平滑滚动，默认为 true
   * @returns {void}
   */
  scrollTo(index, smooth = true) {
    const el = this.elements[index];
    if (!el) return;

    const top = el.offsetTop - this.offsetTop;
    const target = this.container === window ? window : this.container;

    target.scrollTo({
      top,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  destroy() {
    const target = this.container === window
        ? window
        : this.container;

    target.removeEventListener('scroll', this._onScroll);
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
 * @param {Window|Element|string} [options.container=window] - 容器元素，默认为window
 * @returns {ScrollView} 返回 ScrollView 实例对象
 * @version 1.1.0-beta.11
 */
export const initScrollView = function (options = {}) {
  return new ScrollView(options);
};
