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

// export function debounce(func, wait, immdeidate){
//   var timeout, result;
//
//   var debounced = function(){
//     //改变执行函数内部this的指向
//     var context = this;
//     var args = arguments
//     if(timeout) {
//       clearTimeout(timeout)
//     }
//
//     if(immdeidate){
//       let callNow = !timeout;
//       timeout = setTimeout(()=>{
//         timeout = null;
//       }, wait);
//
//       //立即执行
//       if(callNow) {
//         result =  func.apply(context,args)
//       }
//
//     } else {
//       timeout = setTimeout(function(){
//         func.apply(context,args)
//       }, wait);
//     }
//     return result
//
//   };
//   debounced.cancel = function(){
//     clearTimeout(timeout)
//     timeout = null
//   }
//
//   return debounced;
// }

/**
 * 函数防抖
 * @param {Function} fun 需要被防抖的函数
 * @param {number} wait  防抖的时间（毫秒） 默认：500
 * @param {boolean} immediate  是否立即执行 默认：true
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

// export function throttle(func, wait,options){
//   // trailing最后一次应该触发（默认触发）
//   //leading 延迟执行
//   let args, context, previous = 0,timeout = null;
//   let later = function(){
//     previous = options.leading === false ? 0 : Date.now();
//     func.apply(context, args)
//   }
//   let throttled = function (){
//     args = arguments;
//     context = this;
//     let now = Date.now(); //现在时间
//
//     if(!previous && options.leading === false){
//       previous = now
//     }
//     let remaning = wait - (now-previous);
//
//     if(remaning <= 0) { //第一次
//       if(timeout){}
//       clearTimeout(timeout)
//       timeout = null
//       func.apply(this, args)
//       previous = now
//     } else if(!timeout && options.trailing !== false) {
//       timeout = setTimeout(later, remaning)
//     }
//   }
//   return throttled
// }

/**
 * 函数节流
 * @param {Function} fun 需要被节流的函数
 * @param {number} wait 节流的时间（毫秒） 默认：500
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
