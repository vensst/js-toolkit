# Function

## debounce

- 说明：

  防抖

- 参数：

  - {Function} func - 需要被防抖的函数
  - {number} [wait=500] - 防抖延迟时间（毫秒）
  - {boolean} [immediate=false] - 是否立即执行函数（true表示在延迟开始前执行）

- 返回值：

  {Function} 返回新的防抖动函数

- 示例：

```html

<button onclick="debounceEvent()">防抖</button>
<script>
  const debounceEvent = JsToolkit.debounce(function () {
    console.log('防抖成功')
  }, 1000, true)
</script>
```

## throttle

- 说明：

  节流

- 参数：

  - {Function} func - 需要被节流的函数
  - {number} [wait=500] - 节流时间间隔（毫秒）

- 返回值：

  {Function} 返回新的节流函数

- 示例：

```html

<button onclick="throttleEvent()">节流</button>
<script>
  const throttleEvent = JsToolkit.throttle(function () {
    console.log('节流成功')
  }, 1000)
</script>
```
