# Number

## random

- 说明：

  根据区间获取随机数

- 添加版本：1.1.0-beta.11

- 参数：

  - {(number|string)} [min=0] - 最小值（包含）
  - {(number|string)} [max=1] - 最大值（不包含）
  - {boolean} [floating=true] - 是否返回浮点数

- 返回值：

  {number} 随机数

- 示例：

```js
random(0, 100)
```

## inRange

- 说明：

  判断数字是否在区间内

- 添加版本：1.1.0-beta.11

- 参数：

  - {number} num - 数字
  - {number} min - 最小值（不包含）
  - {number} max - 最大值（不包含）

- 返回值：

  {boolean} 是否在区间内

- 示例：

```js
inRange(3, 2, 4) // true
```

## toChinese

- 说明：

  将数字转成中文大写

- 参数：

  - {(number|string)} num - 数字

- 返回值：

  - {string} 中文大写

- 示例：

```js
toChinese(3141592654)
// 三十一億四仟一百五十九萬二仟六百五十四 
toChinese(31415926.54)
// 三仟一百四十一萬五仟九百二十六点五四 
toChinese('abc')
// undefined
```

## toCny

- 说明：

  将数字金额转为中文大写金额

- 添加版本：1.1.0-beta.11

- 参数：

  - {number|string} num - 要转换的金额

- 返回值：

  {string} 中文大写金额

- 示例：

```js
toCny(3141592654)
// 叁拾壹亿肆仟壹佰伍拾玖万贰仟陆佰伍拾肆元整
toCny('31415926.54321')
// 叁仟壹佰肆拾壹万伍仟玖佰贰拾陆元伍角肆分
```

## thousandSeparator

- 说明：

  将数字千分位分割

- 参数：

  - {(number|string)} num - 数字

- 返回值：

  {string} 千分位分割后的字符串

- 示例：

```js
thousandSeparator(3141592654)
// 3,141,592,654
thousandSeparator(31415926.12233655)
// 31,415,926.12233655
```

## scientificFormatter

- 说明：

  数字格式化（支持科学计数法单位）

- 参数：

  - {number} num - 要格式化的数字
  - {number} [digits=1] - 保留小数位数

- 返回值：

  {string} 格式化后的字符串

- 示例：

```js
scientificFormatter(3141592654)
// 3G
```


