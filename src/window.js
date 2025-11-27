import {addStyle} from "./dom.js";

/**
 * 使元素进入全屏模式
 * @param {Element} [element=document.documentElement] - 要进入全屏的元素，默认为整个文档
 * @returns {Promise<void>} 全屏操作的 Promise
 */
export const enterFullscreen = function (element) {

  if (element == null || !(element instanceof Element)) {
    element = document.documentElement;
  }

  // 返回 Promise 以便调用者可以处理成功或失败的情况
  if (element.requestFullscreen) {
    return element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    return element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    return element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    return element.msRequestFullscreen();
  } else {
    return Promise.reject(new Error('Fullscreen API is not supported'));
  }
};

/**
 * 退出全屏模式
 * @returns {Promise<void>} 退出全屏操作的 Promise
 */
export const exitFullscreen = function () {
  // 返回 Promise 以便调用者可以处理成功或失败的情况
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    return document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    return document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    return document.msExitFullscreen();
  } else {
    return Promise.reject(new Error('Fullscreen API is not supported'));
  }
};

/**
 * 根据窗口大小自适应字体大小
 * @param {number} [fontSize=16] 初始字体大小
 * @param {number} [initWidth=1920] 初始宽度
 * @returns {number} 返回计算后字体大小
 */
export const resizeFontSize = function (fontSize, initWidth) {
  // 参数验证
  if (fontSize == null || typeof fontSize !== 'number' || fontSize <= 0) {
    fontSize = 16;
  }
  if (initWidth == null || typeof initWidth !== 'number' || initWidth <= 0) {
    initWidth = 1920;
  }

  let nowClientWidth = document.documentElement.clientWidth;

  // 容错处理：当获取不到clientWidth时使用默认值
  if (!nowClientWidth || nowClientWidth <= 0) {
    nowClientWidth = initWidth;
  }

  // 换算方法
  return fontSize * (nowClientWidth / initWidth);
};

class DataView {
  el;
  options = {
    width: 1920, // 设计稿宽度
    height: 1080, // 设计稿高度
    mode: "scaleToFill",
  }

  constructor(el, options = {}) {
    this.el = el;
    this.options = {
      ...this.options,
      ...options
    }
    addStyle(this.el, {
      position: "fixed",
      top: "0",
      left: "0",
      width: this.options.width + "px",
      height: this.options.height + "px",
      transformOrigin: "left top",
      backgroundSize: "100% 100%",
    })
    this.resize();
  }

  resize() {
    let ratioX = window.innerWidth / this.options.width;
    let ratioY = window.innerHeight / this.options.height;

    let scale = 1;
    if (this.options.mode === "scaleToFill") {
      scale = `scale(${ratioX},${ratioY})`;
    }
    if (this.options.mode === "aspectFit") {
      scale = `scale(${ratioX})`;
    }
    this.el.style.transform = scale;
  }
}

/**
 * 初始化数据可视化容器（用于数据可视化大屏）
 * @param {HTMLElement} el 元素
 * @param {Object} options 参数 {width, height,mode}
 * @param {number} options.width 标准/设计稿/实际宽度
 * @param {number} options.height 标准/设计稿/实际高度
 * @param {string} options.mode 缩放模式(scaleToFill：拉满全屏缩放(默认), aspectFit：等比缩放)
 * @returns {DataView} 返回DataView实例对象
 * @version 1.1.0-beta.8
 */
export const initDataView = function (el, options = {}) {
  if (!el) throw new Error("el is required");
  return new DataView(el, options);
}
