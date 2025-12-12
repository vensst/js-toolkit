# Object

## chainGet

- 说明：

  链式获取对象属性值，支持点表示法和方括号表示法

- 添加版本：1.1.0-beta.11

- 参数：

  - {Object} obj - 要检索的对象
  - {string} chain - 属性链，支持点表示法(a.b.c)和方括号表示法(a[0]、a['b']、a["c"])
  - {*} [defaultValue=undefined] - 当属性不存在时返回的默认值

- 返回值：

  {*}

- 示例：

```js
const obj = {
  a: {
    b: [
      {
        c: 1
      }
    ],
    c: 2
  }
}
const arr = [1, 2, 'a', {a: 1}, [{a: 1}]]
chainGet(obj, "a.b[0].c")
// 1
chainGet(obj, "a.b[0].d")
// undefined
chainGet(obj, "a.d.d", 0)
// 0
chainGet(obj, "a['c']")
// 2
chainGet(obj, "a['d']", 0)
// 0
chainGet(arr[3], "a")
// 1
```
