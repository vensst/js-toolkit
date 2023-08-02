/**
 * 获取当前的滚动位置
 * @param {(Window|Element|string)} el 元素或选择器 默认：window
 * @returns {Object} 滚动位置 {x,y}
 */
const getScrollPosition = function (el = window) {
  if (el instanceof Window) {
    el = document.documentElement
  } else if (typeof el === "string") {
    el = document.querySelector(el)
  }
  return {
    x: el.scrollLeft || 0,
    y: el.scrollTop || 0,
  }
};

/**
 * 滚动到指定元素区域
 * @param {(Element|string)} el 元素或选择器
 */
const smoothScroll = function (el) {
  if (typeof el === "string") {
    el = document.querySelector(el)
  }
  el.scrollIntoView && el.scrollIntoView({behavior: "smooth"});
}

/**
 * 平滑滚动至顶部
 * @param {(Window|Element|string)} el 元素或选择器 默认：window
 * @param {Object} [options={behavior: 'smooth'}] 参数
 */
const scrollToTop = function (el = window, options = {behavior: 'smooth'}) {
  if (typeof el === "string") {
    el = document.querySelector(el)
  }
  el.scrollTo && el.scrollTo({
    top: 0,
    ...options
  });
};

class ScrollView {
  dataList = [] // 数据列表
  valueKey = "" // valueKey 有值时，dataList为对象数组
  attrName = "data-name" // 属性名
  callback = () => {
  }

  constructor({dataList=[], valueKey='', attrName = "data-name", callback=()=>{}}) {
    this.dataList = dataList
    this.valueKey = valueKey
    this.attrName = attrName
    this.callback = callback
  }

  handlerScroll(e) {
    for (let i = 0; i < this.dataList.length; i++) {
      let itemEl = null
      if (this.valueKey) {
        itemEl = document.querySelector(`[${this.attrName}=${this.dataList[i][this.valueKey]}]`)
      } else {
        itemEl = document.querySelector(`[${this.attrName}=${this.dataList[i]}]`)
      }
      let y = 0;
      if (e.target.documentElement) {
        y = e.target.documentElement.scrollTop
      } else y = e.target.scrollTop || 0
      if (y >= itemEl.offsetTop) {
        this.callback({
          scrollEl: e.target.documentElement || e.target,
          currentEl: itemEl,
          valueKey: this.valueKey,
          attrName: this.attrName,
          dataList: this.dataList,
          index: i,
          value: this.valueKey ? this.dataList[i][this.valueKey] : this.dataList[i]
        })
      }
    }
  }
}

/**
 * 初始化滚动监听
 * @param {Object} options 配置对象
 * @param {Array} options.dataList 数据列表
 * @param {string} options.valueKey valueKey 有值时，dataList为对象数组
 * @param {string} options.attrName 属性名
 * @param {Function} options.callback 回调函数
 * @returns {ScrollView} 返回ScrollView实例对象
 */
const initScrollView = function (options={}) {
  return new ScrollView(options);
}

export {
  getScrollPosition,
  smoothScroll,
  scrollToTop,

  ScrollView,
  initScrollView,
}
