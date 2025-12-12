# String

## desens

- 说明：

  字符串脱敏

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 需要脱敏的字符串
  - {Object} [options={}] - 脱敏选项
  - {string} [options.char="*"] - 脱敏字符
  - {number} [options.startIndex=0] - 脱敏起始位置（包含）
  - {number} [options.endIndex=str.length] - 脱敏结束位置（不包含）

- 返回值：

  {string} 已脱敏字符串

- 示例：

```js
const str = "01234567890"
desens()
desens(str, {
  char: "*",
  startIndex: 5,
  endIndex: 7,
})
desens(str, {
  char: "x",
  startIndex: 3,
  endIndex: 7,
})
```

## trim

- 说明：

  去除字符串中前后指定字符

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 去除字符的字符串
  - {string} [chars=''] - 去除的字符（默认为空格）

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
const str = " admin 1234 "
const str2 = "-admin-1234-"
trim(str)
trim(str2, '-')
trim(new Date())
```

## trimAll

- 说明：

  去除字符串中所有指定字符

- 添加版本：2.0.0

- 参数：

  - {string} str - 需要去除字符的字符串
  - {string} chars - 需要去除的字符（默认为空格）

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
const str = " admin 1234 "
const str2 = "-admin-1234-"
trimAll(str)
trimAll(str2, '-')
trimAll(new Date())
```

## trimEnd

- 说明：

  去除字符串中末尾空格或指定字符

- 添加版本：2.0.0

- 参数：

  - {string} str - 去除字符的字符串
  - {string} [chars=''] - 去除的字符（默认为空格）

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
const str = " admin 1234 "
const str2 = "-admin-1234-"
trimEnd(str)
trimEnd(str2, '-')
trimEnd(new Date())
```

## trimStart

- 说明：

  去除字符串中开头空格或指定字符

- 添加版本：2.0.0

- 参数：

  - {string} str - 去除字符的字符串
  - {string} [chars=''] - 去除的字符（默认为空格）

- 返回值：

  {string} 已去除的字符串

- 示例：

```js
const str = " admin 1234 "
const str2 = "-admin-1234-"
trimStart(str)
trimStart(str2, '-')
trimStart(new Date())
```

## toUpperCase

- 说明：

  字符串转大写

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 要转换的字符串

- 返回值：

  {string} 已转换的字符串

- 示例：

```js
const str = "footBall"
const str2 = "my name is li-lei and i am from china,i love footBall."
toUpperCase(str)
toUpperCase(str2)
```

## toUpperCaseFirst

- 说明：

  字符串首字母转大写

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 要转换的字符串

- 返回值：

  {string} 已转换的英文字符串

- 示例：

```js
const str = "footBall"
const str2 = "my name is li-lei and i am from china,i love footBall."
toUpperCaseFirst(str)
toUpperCaseFirst(str2)
```

## toLowerCase

- 说明：

  将整个字符串字符转换为小写形式

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 要转换的字符串

- 返回值：

  {string} 已转换的字符串

- 示例：

```js
const str = "FootBall"
const str2 = "MY NAME IS LI-LEI AND I AM FROM CHINA,I LOVE FootBall."
toLowerCase(str)
toLowerCase(str2)
```

## toLowerCaseFirst

- 说明：

  将字符串首个字符转小写

- 添加版本：2.0.0

- 参数：

  - {string} str - 要转换的字符串

- 返回值：

  {string} 已转换的字符串

- 示例：

```js
const str = "FootBall"
const str2 = "MY NAME IS LI-LEI AND I AM FROM CHINA,I LOVE FootBall."
toLowerCaseFirst(str)
toLowerCaseFirst(str2)
```

## randomCode

- 说明：

  生成随机验证码

- 参数：

  - {number} [length=4] - 验证码长度
  - {string} [checkCode] - 需要避免重复的验证码
  - {string} [charset='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'] 字符集

- 返回值：

  {string} 随机验证码

- 示例：

```js
randomCode()
// F1Fo
```

## countSubstring

- 说明：

  查找子字符串在字符串中出现的次数

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 主字符串
  - {string} key - 要查找的子字符串

- 返回值：  

  {number} 出现次数

- 示例：

```js
const str = " My name is Li Lei and I am from China "
countSubstring(str, 'i')
```

## padStart

- 说明：

  在字符串开头填充指定字符，使字符串达到指定长度

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 要填充的字符串
  - {number} [length=0] - 目标长度
  - {string} [chars] - 填充字符

- 返回值：

  {string} 补全后的字符串

- 示例：

```js
padStart(9, 2, '0')
// 09
```

## padEnd

- 说明：

  在字符串结尾填充指定字符，使字符串达到指定长度

- 添加版本：1.1.0-beta.11

- 参数：

  - {string} str - 要填充的字符串
  - {number} [length=0] - 目标长度
  - {string} [chars] - 填充字符

- 返回值：

  {string} 补全后的字符串

- 示例：

```js
padEnd(150, 11, '*')
```

## hasUnit

- 说明：

  判断字符串是否为"数字+单位"格式，支持常见的CSS单位、度量单位等，可通过自定义单位列表扩展

- 添加版本：1.1.0-beta.12

- 参数：

  - {string} str - 待检测的字符串
  - {Array\<string\>} [customUnits=[]] - 自定义单位列表

- 返回值：

  {boolean} 是否包含单位

- 示例：

```js
hasUnit('100px')
hasUnit('200')
hasUnit('300abc', ['abc'])
hasUnit('400abc')
hasUnit('500m²')
```

## removeUnit

- 说明：

  去除字符串中的单位，仅保留数字部分，支持去除各种常见单位（CSS单位、度量单位等）

- 添加版本：1.1.0-beta.12

- 参数：

  - {string} str - 包含单位的字符串
  - {Array\<string\>} [customUnits=[]] - 自定义单位列表

- 返回值：

  {string} 去除单位后的字符串

- 示例：

```js
removeUnit('100px')
removeUnit('200')
removeUnit('300abc', ['abc'])
removeUnit('400abc')
removeUnit('500m²')
```

## camelToKebab

- 说明：

  驼峰命名转短横线命名（kebab-case），将驼峰格式字符串转换为短横线分隔格式

- 添加版本：1.1.0-beta.13

- 参数：

  - {string} str - 需要转换的驼峰格式字符串
  - {string} [separator='-'] - 分隔符，默认为短横线

- 返回值：

  {string} 转换后的字符串

- 示例：

```js
camelToKebab()
camelToKebab('my Name')
camelToKebab('myName')
camelToKebab('__my__Name__')
camelToKebab('__my__Name__', '@')
```

## kebabToCamel

- 说明：

  短横线命名转驼峰命名（camelCase），将短横线分隔格式字符串转换为驼峰格式

- 添加版本：1.1.0-beta.13

- 参数：

  - {string} str - 字符串

- 返回值：

  {string} 转换后的字符串

- 示例：

```js
kebabToCamel()
kebabToCamel('my Name')
kebabToCamel('my-name')
kebabToCamel('__my_Name__')
```
