const directives={
  drag: {
    // 指令的定义
    mounted(el) {
      let agent = window.navigator.userAgent.toLowerCase(),
        start,
        move,
        end;
      //判断当前是移动端还是PC，移动端监听touch，PC监听mouse
      if (
        [
          "android",
          "iphone",
          "symbianos",
          "windows phone",
          "ipad",
          "ipod"
        ].some(i => agent.indexOf(i) > 0)
      ) {
        start = "touchstart";
        move = "touchmove";
        end = "touchend";
      } else {
        start = "mousedown";
        move = "mousemove";
        end = "mouseup";
      }
      //添加事件开始监听
      el.addEventListener(start, e => {
        //读取事件开始时，触摸或鼠标按下的坐标，以及容器当前所在位置，并声明两个函数对象，供后面添加和取消监听用
        let cur = e.touches
          ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
          : { x: e.clientX, y: e.clientY },
          x = el.offsetLeft,
          y = el.offsetTop;
        let { clientWidth, clientHeight } = el;
        let { innerWidth, innerHeight } = e.view;
        let maxW = innerWidth - clientWidth;
        let maxH = innerHeight - clientHeight;
        let prevent = function(e) {
          e.preventDefault();
        };
        let moveFun = function(e) {
          let touch, sl, st;
          if (e.touches) {
            touch = e.touches[0];
          } else {
            touch = e;
          }
          sl = touch.clientX - cur.x + x;
          st = touch.clientY - cur.y + y;

          if (sl < 0) {
            sl = 0;
          } else if (sl > maxW) {
            sl = maxW;
          }

          if (st < 0) {
            st = 0;
          } else if (st >= maxH) {
            st = maxH;
          }
          el.style.left = sl + "px";
          el.style.top = st + "px";
          //阻止移动端屏幕移动
          window.addEventListener("touchmove", prevent, { passive: false });
        };
        //声明一个移除处理函数对象
        let endFun = function() {
          el.removeEventListener(move, moveFun);
          el.removeEventListener(move, endFun);
          window.removeEventListener("touchmove", prevent);
        };
        //监听move并修改位置
        el.addEventListener(move, moveFun);
        //监听到事件结束时，移除start以外的监听
        el.addEventListener(end, endFun);
      });
    }
  }
}
export {directives};
