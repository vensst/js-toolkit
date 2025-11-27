# 窗口

::: details 点击查看综合示例代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<title>重写resizeViewScale方法</title>
	<link rel="stylesheet" href="./index.css">
	<style>
    #app-main {
      height: 100%;
      width: 100%;
    }

    .top {
      height: 50px;
      width: 100%;
      background-color: #f00;
    }

    .left {
      background-color: #1e6acb;
      position: absolute;
      left: 0;
      top: 50px;
      width: 200px;
      height: calc(100% - 50px);
    }

    .right {
      background-color: #f0bd14;
      position: absolute;
      left: 200px;
      top: 50px;
      width: calc(100% - 200px);
      height: calc(100% - 50px);
    }
	</style>
</head>
<body style="position: relative">
<div id="app-main">
	<div class="top">
		头部
	</div>
	<div class="left">
		左侧
	</div>
	<div class="right">
		右侧

		<div class="wz" style="width: 200px;height: 300px;overflow:hidden;position: absolute;bottom: 0">
			徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”，还记得初相识时你那拘谨的样子，话不是很多只是坐在那里听我不停地说着各种不着边际的话。可能因为紧张我也不知道自己想要表达什么？只知道乱七八糟的在说，而你只是静静地听着，偶尔插一两句。想想自己也不知道一个慢热甚至在不熟的人面前不苟言笑的我那天怎么会那么多话？后来才知道那就是你给的莫名的熟悉感和包容吧！
		</div>
	</div>
</div>
<script src="https://unpkg.com/@vensst/js-toolkit"></script>
<script type="module">
  const {resizeFontSize,initDataView} = jsToolkit
	console.log('--resizeFontSize--', resizeFontSize())

  const myDataView = initDataView(document.getElementById('app-main'))
  window.onresize = function () {
		console.log('--resizeFontSize--', resizeFontSize())
    myDataView.resize()
  }

</script>
</body>
</html>

```
:::

## enterFullscreen

- 说明：

  进入全屏

- 添加版本：1.1.0-beta.15

- 参数：

  - {Element} [element=document.documentElement] 进入全屏的元素

- 示例：

```js
jsToolkit.enterFullscreen()
```

## exitFullscreen

- 说明：

  退出全屏

- 添加版本：1.1.0-beta.15

- 示例：

```js
jsToolkit.exitFullscreen()
```

## resizeFontSize

- 说明：

  根据窗口大小自适应字体大小

- 参数：

  - {number} [fontSize=16] 初始字体大小
  - {number} [initWidth=1920] 初始宽度

- 返回值：

  {number} 返回计算后字体大小

- 示例：

  参考上面的综合示例代码

## initDataView

- 说明：

	初始化数据可视化容器（用于数据可视化大屏）

- 添加版本：1.1.0-beta.8

- 参数：

  - {HTMLElement} el 元素
  - {string} options.id 元素id
  - {number} [options.width=1920] 标准/设计稿/实际宽度
  - {number} [options.height=1080] 标准/设计稿/实际高度
  - {string} [options.mode='scaleToFill] 缩放模式(scaleToFill：拉满全屏缩放(默认), aspectFit：等比缩放)

- 返回值：

  {DataView} 返回DataView实例对象

- 示例：

  参考上面的综合示例代码
