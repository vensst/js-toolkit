# 指南

## 介绍

[@vensst/js-toolkit](https://github.com/vensst/js-toolkit) 是 JavaScript 工具库，整合了前端一些常用的 js 函数。

## 安装

### 使用npm

```shell
npm install @vensst/js-toolkit -S
```

```js
// 全部引用
import jsToolkit from "@vensst/js-toolkit"
// 不含第三方依赖的引用方式
import jsToolkit from "@vensst/js-toolkit/lib/index.js"

jsToolkit.random(1, 100)

// 按需引用
import {random} from "@vensst/js-toolkit"

random(1, 100)
```

### 使用script

```html

<script src="https://unpkg.com/@vensst/js-toolkit"></script>
<script>
  jsToolkit.random(1, 100)
</script>
```


