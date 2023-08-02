/**
 * 函数防抖
 * @param {Function} fun 需要被防抖的函数
 * @param {number} [wait=500]  防抖的时间（毫秒） 默认：500
 * @param {boolean} [immediate=true]  是否立即执行 默认：true
 * @returns {Function} 返回新的 debounced（防抖动）函数
 */
const debounce = function (fun, wait = 500, immediate = true) {
  let timeout, args, context, timestamp, result;
  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = fun.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  const debounced = function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = fun.apply(context, args);
      context = args = null;
    }

    return result;
  };
  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };
  return debounced;
};

/**
 * 函数节流
 * @param {Function} fun 需要被节流的函数
 * @param {number} [wait=500] 节流的时间（毫秒） 默认：500
 * @returns {Function} 返回一个新的函数
 */
const throttle = function (fun, wait = 500) {
  let last, timer;
  return function () {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < wait) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fun.apply(this, args);
      }, wait);
    } else {
      last = now;
      fun.apply(this, args);
    }
  };
};

export {
  debounce,
  throttle
};
