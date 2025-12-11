# 函数

## debounce

- 说明：

	函数防抖

- 参数：

    - {Function} fun 需要被防抖的函数
    - {number} [wait=500]  防抖的时间（毫秒） 
    - {boolean} [immediate=true] 是否立即执行

- 返回值：

  {Function} 返回新的 debounced（防抖动）函数

- 示例：

```html

<button onclick="debounceEvent()">防抖</button>
<script>
	const debounceEvent = jsToolkit.debounce(function () {
		console.log('防抖成功')
	}, 1000, true)
</script>
```

## throttle

- 说明：

	函数节流

- 参数：

    - {Function} fun 需要被节流的函数
    - {number} [wait=500] 节流的时间（毫秒

- 返回值：

  {Function} 返回一个新的函数

- 示例：

```html

<button onclick="throttleEvent()">节流</button>
<script>
	const throttleEvent = jsToolkit.throttle(function () {
		console.log('节流成功')
	}, 1000)
</script>
```
