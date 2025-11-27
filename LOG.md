# 更新日志

## 2.0.0-beta.1 (2025-8-12)

### CI

* 构建工具修改

### Features

* 增加 ts 类型声明文件

## 1.1.1 (2023-11-16)

### Perf

* 优化 chainGet 函数

## 1.1.0-beta.17 (2023-11-16)

### Bug Fixes

* 修复max、min函数重复问题
* 修复ajax、fetch函数名未修改为_ajax、_fetch问题

### Perf

* 优化部分函数说明

### CI

* 工作流修改以及其它修改

## 1.1.0-beta.16 (2023-11-15)

### Features

* 增加copyToClipboard、wait、arrayToTree、treeToArray、max、min函数

### Refactor

* 重新封装XML、fetch请求并分别命名为_ajax、_fetch

## 1.1.0-beta.15 (2023-10-19)

### Features

* 增加isFullScreen、enterFullscreen、exitFullscreen函数

## 1.1.0-beta.14 (2023-8-31)

### Features

* 将第三方依赖 uuid 依赖改为 nanoid
* 增加不含第三方插件库，引入方式为 `import jsToolkit from @vensst/js-toolkit/lib/index.js`

## 1.1.0-beta.13 (2023-8-12)

### Bug Fixes

* 修复了对象相关函数无法按需引入问题

### Features

* 增加了camelToKebab、kebabToCamel函数
* 暴露的对象名称jstk修改为jsToolkit

## 1.1.0-beta.12 (2023-8-8)

### Features

* 增加了hasUnit、removeUnit函数

## 1.1.0-beta.11 (2023-8-2)

### Refactor

* 修改了一些函数名称
* 对一些函数重新分类
* 增加了一些新的函数和第三方库（uuid、crypto-js）
* 修改了一些问题

## 1.1.0-beta.10 (2023-6-29)

### Features

* 新增 getDatesBetween函数

### Bug Fixes

* storage下的set、get函数使用问题

## 1.1.0-beta.9 (2023-5-22)

### Bug Fixes

* uppercaseFirst、numberFormatter、timeAgo、addStyle、initDataView函数无法使用问题

## 1.1.0-beta.8 (2023-5-18)

### Features

* 新增 uppercaseFirst、numberFormatter、timeAgo、addStyle、initDataView函数

## 1.1.0-beta.7 (2023-4-12)

### Bug Fixes

* 修复防抖函数使用报错问题

### Perf

* 优化函数以及相关描述

## 1.1.0-beta.6 (2023-3-15)

### Bug Fixes

* 修复部分问题

## 1.1.0-beta.4 (2023-3-15)

### Bug Fixes

* 修复部分函数使用报错问题

## 1.1.0-beta.3 (2023-3-7)

### Bug Fixes

* 修复nuxt使用报错：self is not defined

## 1.1.0-beta.2 (2022-12-29)

### Features

* 新增 arr function - 对象数组重复数据添加标记 addTagToObjectArrayDuplicateData

## 1.1.0-beta.1 (2022-12-02)

### Bug Fixes

* arrIntersect 函数报错问题

### Features

* 新增 function - 获取两个对象数组的交集 getIntersectOfObjArr
* 新增 function - 获取多个对象数组的交集 getIntersectOfMultiObjArr  

