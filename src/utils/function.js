// 函数防抖
export function debounce(fn, delay = 500) {
  let timer;
  return function() {
    let args=arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args);
    }, delay);
  };
}
// 函数节流
export function throttle(fn, delay = 500) {
  let timer = null;
  let firstTime = true;
  return function(...args) {
    if (firstTime) {
      // 第一次加载
      fn.apply(this, args);
      firstTime = false;
      return;
    }
    if (timer) {
      // 定时器正在执行中，跳过
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      // clearTimeout(timer)
      timer = null;
    }, delay);
  };
}


