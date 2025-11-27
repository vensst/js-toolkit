# Url

## getUrlParam

- 说明：

  获取当前url地址栏指定参数

- 参数：

  - {string} name 参数名

- 返回值：

  {(string|null)} 参数值

- 示例：

```js
// http://localhost/examples/index.html?name=张三&age=18
jsToolkit.getUrlParam('name')
// 张三
jsToolkit.getUrlParam('sex')
// null
```

## getUrlParams

- 说明：

  获取指定url地址上所有参数

- 参数：

  - {(string|null)} url url地址

- 返回值：

  {Object} 参数对象

- 示例：

```js
// http://localhost/examples/index.html?name=张三&age=18
jsToolkit.getUrlParams('name')
// {name: '张三', age: '18'}
```

## delUrlParam

- 说明：

  删除指定url地址上指定参数

- 参数：

  - {string} url url地址
  - {string} name 参数名

- 返回值：

  {(string|*)} 返回新的url地址

- 示例：

```js
jsToolkit.delUrlParam('http://localhost/examples/index.html?name=张三&age=18', 'name')
// http://localhost/examples/index.html?age=18
```

## objToUrlParams

- 说明：

  对象转url参数

- 参数：

  - {Object} obj 参数对象

- 添加版本：1.1.0-beta.11

- 返回值：

  {string} url参数

- 示例：

```js
jsToolkit.objToUrlParams({a: 1, b: 2})
// a=1&b=2
```
