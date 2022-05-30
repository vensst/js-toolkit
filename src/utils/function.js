/**
 * 函数防抖
 * @param fn
 * @param delay
 * @returns {(function(): void)|*}
 */
// export function debounce(fn, delay = 500) {
//   let timer;
//   return function () {
//     let args = arguments;
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(() => {
//       timer = null
//       fn.apply(this, args);
//     }, delay);
//   };
// }

/**
 * 函数节流
 * @param fn
 * @param delay
 * @returns {(function(...[*]): void)|*}
 */
// export function throttle(fn, delay = 500) {
//   let timer = null;
//   let firstTime = true;
//   return function (...args) {
//     if (firstTime) {
//       // 第一次加载
//       fn.apply(this, args);
//       firstTime = false;
//       return;
//     }
//     if (timer) {
//       // 定时器正在执行中，跳过
//       return;
//     }
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//       // clearTimeout(timer)
//       timer = null;
//     }, delay);
//   };
// }

/**
 * 防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate 立即执行
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 函数节流
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const throttle = (fn, t) => {
  let last;
  let timer;
  let delay = t || 500;
  return function () {
    let args = arguments;
    let now = +new Date();
    if (last && now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, delay);
    } else {
      last = now;
      fn.apply(this, args);
    }
  };
};
