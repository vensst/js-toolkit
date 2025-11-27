/**
 * 函数防抖 - 限制函数执行频率，当调用动作过快时，只执行最后一次调用
 * @param {Function} func 需要被防抖的函数
 * @param {number} [wait=500] 防抖延迟时间（毫秒）
 * @param {boolean} [immediate=false] 是否立即执行函数（true表示在延迟开始前执行）
 * @returns {Function} 返回新的防抖动函数
 *
 * @example
 * const debouncedHandler = debounce(myFunction, 300);
 * window.addEventListener('resize', debouncedHandler);
 *
 * // 取消防抖调用
 * debouncedHandler.cancel();
 */
export const debounce = function (func, wait = 500, immediate = false) {
  let timeoutId, context, args, timestamp, result;

  const later = function () {
    // 计算距离上一次触发的时间间隔
    const elapsed = +new Date() - timestamp;

    // 如果时间间隔小于等待时间且大于0，重新设置定时器
    if (elapsed < wait && elapsed > 0) {
      timeoutId = setTimeout(later, wait - elapsed);
    } else {
      timeoutId = null;
      // 如果不是立即执行模式，则执行函数
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  const debounced = function (...callArgs) {
    context = this;
    args = callArgs;
    timestamp = +new Date();

    const shouldCallNow = immediate && !timeoutId;

    // 如果没有定时器，则设置一个
    if (!timeoutId) {
      timeoutId = setTimeout(later, wait);
    }

    // 如果需要立即执行
    if (shouldCallNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  /**
   * 取消防抖调用
   */
  debounced.cancel = function () {
    clearTimeout(timeoutId);
    timeoutId = null;
    context = args = null;
  };

  return debounced;
};

/**
 * 函数节流 - 限制函数执行频率，确保函数在指定时间间隔内只执行一次
 * @param {Function} func 需要被节流的函数
 * @param {number} [wait=500] 节流时间间隔（毫秒）
 * @returns {Function} 返回新的节流函数
 *
 * @example
 * const throttledHandler = throttle(myFunction, 200);
 * window.addEventListener('scroll', throttledHandler);
 */
export const throttle = function (func, wait = 500) {
  let lastExecTime, timeoutId;

  const throttled = function (...args) {
    const now = +new Date();

    // 如果是第一次执行或者超过了等待时间
    if (lastExecTime && now - lastExecTime < wait) {
      // 清除之前的定时器，重新设置
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastExecTime = +new Date();
        func.apply(this, args);
      }, wait);
    } else {
      // 立即执行
      lastExecTime = now;
      func.apply(this, args);
    }
  };

  /**
   * 取消节流调用
   */
  throttled.cancel = function () {
    clearTimeout(timeoutId);
    timeoutId = null;
    lastExecTime = null;
  };

  return throttled;
};
