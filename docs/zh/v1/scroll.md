# 滚动

::: details 点击查看综合示例代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"/>
  <style>
    /* global styles */
    :root {
      --color-black-text: #333;
      --color-white-background: #fff
    }

    * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      /*font-family: Microsoft YaHei, Arial, sans-serif;*/
      /*阻止旋转屏幕时自动调整字体大小*/
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      /* 解决IOS默认滑动很卡的情况 */
      -webkit-overflow-scrolling: touch;
    }

    html,
    body {
      /*width: 100%;*/
      /*height: 100%;*/
      margin: 0;
      padding: 0;
      /*overflow: auto;*/
    }

    body {
      font-size: 14px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      color: var(--color-black-text);
      background-color: var(--color-white-background);
      line-height: 1.15;
      padding: 20px 10%;
      position: relative;
    }

    #back {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      position: fixed;
      bottom: 10%;
      right: 20px;
      background: #000;
      color: #fff;
      cursor: pointer;
    }

    .dir {
      position: fixed;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      width: 40px;
      text-align: center;
    }

    .dir > div {
      height: 40px;
      line-height: 40px;
      cursor: pointer;
      background: #333;
      color: #fff;
    }
    .dir > div.active {
      background: #fac105;
    }
    .content div {
      height: 400px;
      border: 1px solid #181818;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
<div class="dir">
  <div data-id="a">a</div>
  <div data-id="b">b</div>
  <div data-id="c">c</div>
  <div data-id="d">d</div>
  <div data-id="e">e</div>
  <div data-id="f">f</div>
  <div data-id="g">g</div>
  <div data-id="h">h</div>
</div>
<div id="back">
  TOP
</div>
<div class="content">
  <div id="a">a</div>
  <div id="b">b</div>
  <div id="c">c</div>
  <div id="d">d</div>
  <div id="e">e</div>
  <div id="f">f</div>
  <div id="g">g</div>
  <div id="h">h</div>
</div>


<script src="https://unpkg.com/@vensst/js-toolkit"></script>
<script type="module">
  const {
    addClass,
    siblings,
    removeClass,
    getScrollPosition,
    smoothScroll,
    scrollToTop,

    ScrollView,
    initScrollView,
  }  = jsToolkit

  const els = document.querySelectorAll('.dir > div')
  els.forEach(item => {
    item.onclick = function (e) {
      const id = this.getAttribute('data-id')
      smoothScroll(`#${id}`)
    }
  })

  const btn = document.getElementById('back')
  btn.onclick = function () {
    scrollToTop()
    // scrollToTop(window,{behavior: 'instant'})
    console.log('--getScrollPosition--', getScrollPosition(),)
    // body为滚动元素
    // scrollToTop('body')
    // console.log('--getScrollPosition--', getScrollPosition('body'),)
  }

  const arr1 = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
  ]
  // const arr2 = [
  //   {
  //     name: 'a',
  //   },
  //   {
  //     name: 'b',
  //   },
  //   {
  //     name: 'c',
  //   },
  //   {
  //     name: 'd',
  //   },
  //   {
  //     name: 'e',
  //   },
  //   {
  //     name: 'f',
  //   },
  //   {
  //     name: 'g',
  //   },
  //   {
  //     name: 'h',
  //   },
  // ]
  const scrollEl = window
  // body为滚动元素
  // const scrollEl = document.querySelector('body')
  const scrollView = initScrollView({
    dataList: arr1,
    // valueKey: 'name',
    attrName:"id",
    callback: function (e) {
      const el = document.querySelector(`[data-id=${e.value}]`)
      addClass(el, 'active')
      siblings(el).forEach(item => {
        removeClass(item, 'active')
      })
    },
  })
  scrollEl.addEventListener('scroll', scrollView.handlerScroll.bind(scrollView))
</script>
</body>
</html>

```
:::

## getScrollPosition

- 说明：

  获取当前的滚动位置

- 参数：

  - {(Window|Element|string)} [el=window] 元素或选择器

- 返回值：

  {Object} 滚动位置 {x,y}

- 示例：

	参考上面的综合示例代码

## smoothScroll

- 说明：

	滚动到指定元素区域

- 参数：

  - {(Element|string)} el 元素或选择器

- 示例：

  参考上面的综合示例代码

## scrollToTop

- 说明：

  平滑滚动至顶部

- 参数：

  - {(Window|Element|string)} [el=window] 元素或选择器
  - {Object} [options={behavior: 'smooth'}] 参数

- 示例：

  参考上面的综合示例代码

## initScrollView

- 说明：

  初始化滚动监听

- 添加版本：1.1.0-beta.11

- 参数：

  - {Object} options 配置对象
  - {Array} options.dataList 数据列表
  - {string} options.valueKey valueKey 有值时，dataList为对象数组
  - {string} options.attrName 属性名
  - {Function} options.callback 回调函数

- 返回值：

  {ScrollView} 返回ScrollView实例对象

- 示例：

  参考上面的综合示例代码
