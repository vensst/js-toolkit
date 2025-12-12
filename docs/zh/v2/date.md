# Date

## formatDate

- 说明：

  格式化日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 时间戳或日期对象，支持字符串、10位或13位时间戳
  - {string} [valueFormat=YYYY-MM-DD HH:mm:ss] - 格式字符串，支持：
    - YYYY: 四位年份
    - MM: 两位月份 (01-12)
    - M: 月份 (1-12)
    - DD: 两位日期 (01-31)
    - D: 日期 (1-31)
    - HH: 两位24小时制小时 (00-23)
    - H: 24小时制小时 (0-23)
    - hh: 两位12小时制小时 (01-12)
    - h: 12小时制小时 (1-12)
    - mm: 两位分钟 (00-59)
    - m: 分钟 (0-59)
    - ss: 两位秒 (00-59)
    - s: 秒 (0-59)
    - WW: 星期 (星期日-星期六)

- 返回值：

  {string} 格式化后的日期字符串

- 示例：

```js
formatDate()
formatDate(new Date(), 'YYYY/MM/DD h:mm:ss WW')
formatDate(new Date(), 'WW')
formatDate('2020-9-9', 'YYYY/MM/DD')
```

## getDateRange

- 说明：

  根据指定日期获取指定范围的日期集合

- 参数：

  - {(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳
  - {number} [len=2] - 范围长度（天数）
  - {number} [dir=-1] - 方向：-1 取基准日期之前的 [len] 天，0 取基准日期前后各 [len] 天，1 取基准日期之后的 [len] 天
  - {string} [valueFormat="YYYY-MM-DD"] - 日期格式

- 返回值：

  {string[]} 日期集合，按时间顺序排列

- 示例：

```js
getDateRange()
getDateRange('2023-1-1', 2, 0, 'YYYY/MM/DD')
getDateRange('2023-1-1', 2, 1)
```

## getDaysInMonth

- 说明：

  获取指定日期所在月份的总天数

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳

- 返回值：

  {number} 指定月份的总天数

- 示例：

```js
getDaysInMonth()
getDaysInMonth('2023-6')
```

## getDaysInYear

- 说明：

  获取指定年份的总天数

- 参数：

  - {(Date|number|string)} [year=new Date()] - 年份，可以是：
    - Date对象：将使用该日期对象的年份
    - 数字：直接作为年份使用
    - 字符串：将被解析为年份

- 返回值：

  {number} 指定年份的总天数

- 示例：

```js
getDaysInYear()
getDaysInYear(2020)
```

## getMonthsRange

- 说明：

  根据指定日期获取指定范围的日期集合

- 参数：

  - {(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳
  - {number} [length=2] - 要获取的月份数量
  - {number} [dir=-1] - 方向：-1 获取之前的月份(默认)，0 获取前后月份，1 获取之后的月份
  - {string} [valueFormat='YYYY-MM'] - 返回的日期格式

- 返回值：

  {string[]} 月份集合，按时间顺序排列

- 示例：

```js
getMonthsRange()
getMonthsRange('2023-1-1', 2, 0, 'YYYY/MM')
getMonthsRange('2023-1', 2, 1)
```

## getStartMonthOfQuarter

- 说明：

  获取指定日期所在季度的开始月份,季度划分：1-3月为Q1，4-6月为Q2，7-9月为Q3，10-12月为Q4

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {string} [valueFormat='YYYY-MM'] - 返回的日期格式

- 返回值：

  {string} 季度开始月份

- 示例：

```js
getStartMonthOfQuarter()
getStartMonthOfQuarter('2022-2')
```

## getDayOfYear

- 说明：

  获取指定日期是当年中的第几天

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳

- 返回值：

  日期在年中的天数索引

- 示例：

```js
getDayOfYear()
getDayOfYear('2022-2-1')
// 32
```

## getWeekOfYear

- 说明：

  获取指定日期在年中的周数（自然周）

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳

- 返回值：

  日期在年中的周数（1-53）

- 示例：

```js
getWeekOfYear()
getWeekOfYear('2022-2-1')
```

## getStartOfWeek

- 说明：

  根据日期获取本周、上周、下周的开始日期（周一为一周开始）

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上周 0:本周(默认)  1:下周
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 周开始日期

- 示例：

```js
getStartOfWeek()
getStartOfWeek('2022-01-01', -1)
getStartOfWeek('2022-01-01')
getStartOfWeek('2022-01-01', 1)
```

## getEndOfWeek

- 说明：

  根据日期获得本周、上周、下周的结束日期（周日为一周结束）

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上周 0:本周(默认)  1:下周
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 周结束日期（周日）

- 示例：

```js
getEndOfWeek()
getEndOfWeek('2022-01-01', -1)
getEndOfWeek('2022-01-01', 0)
getEndOfWeek('2022-01-01', 1)
```

## getStartOfMonth

- 说明：

  根据日期获得本月、上月、下月开始日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上月 0:本月(默认)  1:下月
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 月开始日期

- 示例：

```js
getStartOfMonth()
getStartOfMonth(new Date('2022-01-01'), -1)
getStartOfMonth(new Date('2022-01-01'), 0)
getStartOfMonth(new Date('2022-01-01'), 1)
```

## getEndOfMonth

- 说明：

  根据日期获得本月、上月、下月结束日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上月 0:本月(默认)  1:下月
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 日期

- 示例：

```js
getEndOfMonth()
getEndOfMonth(new Date('2022-01-01'), -1)
getEndOfMonth(new Date('2022-01-01'), 0)
getEndOfMonth(new Date('2022-01-01'), 1)
```

## getStartOfQuarter

- 说明：

  根据日期获取本季度、上季度、下季度的开始日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上季度 0:本季度(默认)  1:下季度
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 季度开始日期

- 示例：

```js
getStartOfQuarter()
getStartOfQuarter(new Date('2022-01-01'), -1)
getStartOfQuarter(new Date('2022-01-01'), 0)
getStartOfQuarter(new Date('2022-01-01'), 1)
```

## getEndOfQuarter

- 说明：

  根据日期获取本季度、上季度、下季度的结束日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上季度 0:本季度(默认)  1:下季度
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 季度结束日期

- 示例：

```js
getEndOfQuarter()
getEndOfQuarter(new Date('2022-01-01'), -1)
getEndOfQuarter(new Date('2022-01-01'), 0)
getEndOfQuarter(new Date('2022-01-01'), 1)
```

## getStartOfYear

- 说明：

  根据日期获取本年、上年、下年的开始日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上年 0:本年(默认)  1:下年
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 年开始日期

- 示例：

```js
getStartOfYear()
getStartOfYear('2022-01-01', -1)
getStartOfYear('2022-01-01', 0)
getStartOfYear('2022-01-01', 1)
```

## getEndOfYear

- 说明：

  根据日期获取本年、上年、下年的结束日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
  - {number} [type=0] 类型 -1:上年 0:本年(默认)  1:下年
  - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 年结束日期

- 示例：

```js
getEndOfYear()
getEndOfYear('2022-01-01', -1)
getEndOfYear('2022-01-01', 0)
getEndOfYear('2022-01-01', 1)
```

## getDateOffset

- 说明：

  获取指定日期的前几天日期，通过从指定日期中减去指定天数来计算目标日期

- 参数：

  - {(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳
  - {number} [len=1] - 要减去的天数，正数表示过去的日期，负数表示未来的日期
  - {string} [valueFormat="YYYY-MM-DD"] - 返回的日期格式

- 返回值：

  {string} 日期

- 示例：

```js
getDateOffset(new Date())
getDateOffset(new Date(), 3)
getDateOffset(new Date(), 7)
getDateOffset(new Date(), 30, "YYYY年MM月DD日HH时mm分ss秒")
```

## getDatesBetween

- 说明：

  获取两个日期之间的所有日期（包含起始和结束日期，返回的日期数组按时间顺序排列，从早到晚

- 参数：

  - {(Date|string|number)} [startDate=new Date()] - 开始日期，可以是日期对象、日期字符串或时间戳
  - {(Date|string|number)} [endDate=new Date()] - 结束日期，可以是日期对象、日期字符串或时间戳
  - {string} [valueFormat="YYYY-MM-DD"] - 返回的日期格式

- 返回值：

  {string[]} 日期数组

- 示例：

```js
getDatesBetween()
getDatesBetween('2022-1-1', '2022-1-5')
```

## timeAgo

- 说明：

  以前时间距离当前时间的时间差

- 参数：

  - {(Date|number)} date - 时间对象或时间戳
  - {Object} [opt] - 选项配置
    - {string} [opt.year='年前'] - 天的单位
    - {string} [opt.month='月前'] - 小时的单位
    - {string} [opt.week='周前'] - 分钟的单位
    - {string} [opt.day='天前'] - 小时的单位
    - {string} [opt.hour='小时前'] - 天的单位
    - {string} [opt.minute='分钟前'] - 秒的单位
    - {string} [opt.second='秒前'] - 秒的单位
    - {string} [opt.just='刚刚'] - 刚刚

- 返回值：

  {string} 时间差

- 示例：

```js
timeAgo()
timeAgo('2024-12-20 15:22:20')
```

## getTimeSlotByStep

- 说明：

  根据步长获取时间间隔

- 参数：

  - {number} [step=30] - 间隔 单位：分钟

- 返回值：

  {string[]} 时间间隔数组

- 示例：

```js
getTimeSlotByStep()
getTimeSlotByStep(60)
```

## sToHms

- 说明：

  秒转时分秒格式

- 参数：

  - {number} [s=0] - 秒数
  - {Array\<string\>} [valueFormat=["时", "分", "秒"]] - 格式，可以自定义例如：["h", "m", "s"]

- 返回值：

  {string} x时x分x秒

- 示例：

```js
sToHms(7200)
```
