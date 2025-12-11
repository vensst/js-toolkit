# DOM

## queryElement

- 说明：

  查找dom元素

- 参数：

  - {string} [selector] - CSS选择器字符串

- 返回值：

  {Element|NodeList|undefined} 返回单个元素、元素集合（NodeList或数组）或 undefined

- 示例：

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Document</title>
  <script src="../../lib/index.umd.js"></script>
</head>
<body>
<div id="app" class="page" style="font-size: 16px;">
  这是一段内容 <br>
  <span id="sp" class="s1 s--style">我是span标签1</span> <br>
  <span id="sp" class="s2 s--style">我是span标签2</span> <br>
  <span class="s3 s--style" style="color: #e4393c;font-size: 18px">我是span标签3</span> <br>
  <span class="s4">我是span标签4</span><br>
  <div>我是div标签</div>
</div>
<script>
  const {queryElement} = JsToolkit
  queryElement()
  queryElement("#app")
  queryElement("#app span")
  queryElement(".page>.s1")
  queryElement(".page span")
</script>
</body>
</html>

```

## hasClass

- 说明：

  检测元素是否包含指定的CSS类名

- 参数：

  - {Element|NodeList|Element[]} el - DOM元素
  - {string} className - 要检测的类名

- 返回值：

  {boolean} 如果元素包含指定类名则返回true，否则返回false

- 示例：

```js
hasClass()
hasClass(queryElement("#app"), "page")
hasClass(queryElement(".page span"), "page")
hasClass(queryElement(".page span"), "s1")
```

## addClass

- 说明：

  添加类名

- 参数：

  - {Element|NodeList|Element[]} el - 元素
  - {string} className - 类名

- 示例：

```js
addClass()
addClass(queryElement("#app"), 'page--style')
addClass(queryElement(".page span"), 'span--style')
```

## removeClass

- 说明：

  删除类名

- 参数：

  - {Element|NodeList|Element[]} el - 元素
  - {string} className - 类名

- 示例：

```js
removeClass()
removeClass(queryElement("#app"), 'page--style')
removeClass(queryElement(".page span"), 'span--style')
```

## replaceClass

- 说明：

  替换元素的CSS类名(用新类名替换旧类名)

- 参数：

  - {Element|NodeList|Element[]} el - DOM元素或元素集合
  - {string} oldClassName - 旧类名
  - {string} newClassName - 新类名

- 示例：

```js
replaceClass()
replaceClass(queryElement("#app"), 'page', 'page1')
replaceClass(queryElement(".page1 span"), 's--style', 's--style1')
```

## getSiblings

- 说明：

  获取兄弟节点

- 参数：

  - {Element} el - DOM元素

- 返回值：

  {Element[]|undefined} 兄弟节点数组

- 示例：

```js
getSiblings()
getSiblings(queryElement("#app"))
getSiblings(queryElement(".page1 span"))
```

## getStyle

- 说明：

  获取元素的样式属性值

- 参数：

  - {Element} el - DOM元素
  - {string} [attrName] - CSS属性名（驼峰命名或短横线命名），例如 'backgroundColor' 或 'font-size'

- 返回值：

  {string|CSSStyleDeclaration|undefined} 如果提供了attrName，返回具体的样式值字符串；否则返回CSSStyleDeclaration对象；如果元素无效则返回undefined

- 示例：

```js
getStyle()
getStyle(queryElement("#app"))
getStyle(queryElement("#app"), 'font-size')
getStyle(queryElement("#app .s3"))
getStyle(queryElement("#app .s3"), 'color')
getStyle(queryElement("#app .s3"), 'font-size')
```

## addStyle

- 说明：

  设置元素的样式(支持为单个元素或元素集合批量设置样式)

- 添加版本：1.1.0-beta.8

- 参数：

  - {Element|NodeList|Element[]} el - DOM元素、元素集合或元素数组
  - {Object} styles - 样式对象，键为CSS属性名，值为属性值

- 返回值：

  {Element|NodeList|Element[]} 原始元素或元素集合

- 示例：

```js
addStyle()
addStyle(queryElement("#app"), {'font-size': '18px', color: '#e4393c'})
addStyle(queryElement("#app span"), {"backgroundColor": "#000000", "color": "#fff"})
addStyle(queryElement("#app .s4"), {"backgroundColor": "#1d1fe8", "color": "#fff"})
```

## insertAfter

- 说明：

  在指定元素之后插入新元素

- 参数：

  - {Element} el - 元素
  - {string} htmlString - 插入元素

- 示例：

```js
insertAfter()
insertAfter(queryElement("#app .s1"), "<div>s1之后插入div</div>")
insertAfter(queryElement("title"), `<script src="./vue.js"><\/script>`)
```

## insertBefore

- 说明：

  在指定元素之前插入新元素

- 参数：

  - {Element} el - 当前元素
  - {string} htmlString - 插入元素

- 示例：

```js
insertBefore()
insertBefore(queryElement("#app .s1"), "<div>s1之前插入div</div>")
```

