# dom

## $

- 说明：

	查找dom元素

- 参数：

    - {(string|Element)} selector 选择器

- 返回值：

  {(Element|NodeListOf\<Element\>|null)} 返回元素或元素集合

- 示例：

```js
jsToolkit.$("#id")
jsToolkit.$(".class")
jsToolkit.$("div")
```

## hasClass

- 说明：

	检测类名，校验指定元素的类名是否包含指定的类名

- 参数：

    - {Element} ele dom元素
    - {string} className 类名

- 返回值：

  {boolean} true/false

- 示例：

```html

<div id="e" class="a b"></div>
<script>
	jsToolkit.hasClass(jsToolkit.$("#e"), 'a')
  // true
</script>
```

## addClass

- 说明：

	添加类名

- 参数：

    - {(Element|NodeList)} ele 元素
    - {string} className 类名

- 示例：

```html
<div id="e" class="a b"></div>
<script>
	jsToolkit.addClass(jsToolkit.$("#e"), "c")
</script>
```

## removeClass

- 说明：

	删除类名

- 参数：

    - {(Element|NodeList)} ele 元素
    - {string} className 类名

- 示例：

```html

<div id="e" class="a b c"></div>
<script>
	jsToolkit.removeClass(jsToolkit.$("#e"), "c")
</script>
```

## replaceClass

- 说明：

	替换类名

- 参数：

    - {(Element|NodeList)} ele 元素
    - {string} newClassName 新类名
    - {string} oldClassName 旧类名

- 示例：

```html

<div id="e" class="a b c"></div>
<script>
	jsToolkit.replaceClass(jsToolkit.$("#e"), "c", "d")
</script>
```

## siblings

- 说明：

	获取兄弟节点

- 参数：

    - {Element} ele dom元素

- 返回值：

  {*[]} 兄弟节点数组

- 示例：

```js
jsToolkit.siblings(jsToolkit.$("#e"))
```

## getByStyle

- 说明：

	获取行间样式属性

- 参数：

    - {Element} ele 元素
    - {string} attrName 属性名

- 返回值：

  {*} 属性值

- 示例：

```html

<div id="e" style="color:red;"></div>
<script>
	jsToolkit.getByStyle(jsToolkit.$("#e"), "color")
	// "red"
</script>
```

## elInsertAfter

- 说明：

	在指定元素之后插入新元素

- 参数：

    - {Element} el 元素
    - {string} htmlString 插入元素

- 示例：

```js
jsToolkit.elInsertAfter(jsToolkit.$("#e"), "<div>123</div>")
```

## elInsertBefore

- 说明：

	在指定元素之前插入新元素

- 参数：

    - {Element} el 当前元素
    - {string} htmlString 插入元素

- 示例：

```js
jsToolkit.elInsertBefore(jsToolkit.$("#e"), "<div>123</div>")
```

## addStyle

- 说明：

	元素添加style样式

- 添加版本：1.1.0-beta.8

- 参数：

    - {HTMLElement} el 元素
    - {Object} style 样式对象

- 返回值：

  {}

- 示例：

```js
jsToolkit.addStyle(jsToolkit.$("#e"), {
  color: "red",
  fontSize: "12px"
})
```
