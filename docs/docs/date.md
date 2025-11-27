# 日期

## format

- 说明：

	格式化日期

- 参数：

  - {(Date|string|number)} [date=new Date()] 时间戳或日期对象
  - {string} [valueFormat=YYYY-MM-DD hh:mm:ss] 格式，年(YYYY) 月(MM) 日(DD) 时(hh) 分(mm) 秒(ss) 星期(WW)

- 返回值：

  {(string|null)} 格式化后的日期

- 示例：

```js
jsToolkit.format()
// 2023-08-03 10:05:18
jsToolkit.format(new Date(), 'YYYY/MM/DD hh:mm:ss WW')
// 2023/08/03 10:05:18 星期四
jsToolkit.format('2020-9-9', 'YYYY/M/D')
// 2020/9/9
```

## timeAgo

- 说明：

  以前时间距离当前时间的时间差

- 参数：

  - {(Date|string|number)} date 时间对象或时间戳
  - {Object} [opt={d: 'day', h: 'hour', m: 'minute'}] 选项配置
  - {string} [opt.d='day'] 天的单位
  - {string} [opt.h='hour'] 小时的单位
  - {string} [opt.m='minute'] 分钟的单位

- 返回值：

  {string} 时间差

- 示例：

```js
// 假设当前时间为 2023-5-18
jsToolkit.timeAgo('2023-5-17')
// 1day
```

## getTimeSlotByStep

- 说明：

	根据步长获取时间间隔

- 参数：

    - {number} [step=30] 间隔 单位：分钟

- 返回值：

  {string[]} 时间间隔数组

- 示例：

```js
jsToolkit.getTimeSlotByStep(240)
// ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
```

## sToHms

- 说明：

	秒转时分秒

- 参数：

    - {number} [s=0] 秒数
    - {Array\<string\>} format 格式 默认：["时", "分", "秒"]，可以自定义例如：["h", "m "s"]

- 返回值：

  {string} x时x分x秒

- 示例：

```js
jsToolkit.sToHms(7200)
// 2时0分0秒
```

## getDaysFromDate

- 说明：

	根据指定日期获取指定长度的天数集合

- 参数：

    - {(Date|string)} [date=new Date()] 时间
    - {number} [len=2] 长度
    - {number} [dir=-1]  方向 -1: 前几天(默认)，0:前后几天，1: 后几天
    - {string} [valueFormat="YYYY-MM-DD"] 日期格式

- 返回值：

  {string[]} 日期集合

- 示例：

```js
jsToolkit.getDaysFromDate()
// ['2023-08-01', '2023-08-02', '2023-08-03']
jsToolkit.getDaysFromDate('2023-1-1', 2, 1)
// ['2023-01-01', '2023-01-02', '2023-01-03']
jsToolkit.getDaysFromDate('2023-1-1', 2, 0, 'YYYY/MM/DD')
//['2022/12/30', '2022/12/31', '2023/01/01', '2023/01/02', '2023/01/03']
```

## getDaysInMonth

- 说明：

  获取指定日期的所在月份的总天数

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串

- 返回值：

  {number} 天数

- 示例：

```js
jsToolkit.getDaysInMonth()
// 31
jsToolkit.getDaysInMonth('2023-6')
// 30
```

## getDaysInYear

- 说明：

	获取某年天数

- 参数：

    - {(Date|String|number)} year 年份

- 返回值：

  {number} 天数

- 示例：

```js
jsToolkit.getDaysInYear()
// 365
jsToolkit.getDaysInYear(2020)
// 366
```

## getMonthsFromDate

- 说明：

	根据指定时间获取指定长度的月份集合

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [length=2] 长度
    - {number} [direction=1] -1: 前几个月(默认)，0:前后几个月，2: 后几个月
    - {string} [valueFormat='YYYY-MM'] 返回格式

- 返回值：

  {string[]} 月份集合

- 示例：

```js
jsToolkit.getMonthsFromDate()
// ['2023-06', '2023-07', '2023-08']
jsToolkit.getMonthsFromDate('2023-1-1', 2, 1)
// ['2023-01', '2023-02', '2023-03']
jsToolkit.getMonthsFromDate('2023-1-1', 2, 0, 'YYYY/MM/DD')
// ['2022/11/01', '2022/12/01', '2023/01/01', '2023/02/01', '2023/03/01']
```

## getStartMonthOfQuarter

- 说明：

	根据指定时间获得该季度的开始月份

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {string} [valueFormat='YYYY-MM'] 返回值格式

- 返回值：

  {string} 月份

- 示例：

```js
jsToolkit.getStartMonthOfQuarter()
// 2023-07 
jsToolkit.getStartMonthOfQuarter('2022-2')
// 2022-01
```

## getDayOfYear

- 说明：

	获取某个日期是当年中的第几天

- 参数：

    - {(Date|string|number)} [date=new Date()]  日期对象或日期格式字符串

- 返回值：

  {number} 返回第几天

- 示例：

```js
jsToolkit.getDayOfYear()
// 215
jsToolkit.getDayOfYear('2022-2-1')
// 32
```

## getDayOfYearWeek

- 说明：

	获取某个日期在这一年的第几周

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串

- 返回值：

  {number} 返回第几周

- 示例：

```js
jsToolkit.getWeekOfYear()
// 31
jsToolkit.getWeekOfYear('2022-2-1')
// 5
```

## getStartOfWeek

- 说明：

	根据日期获取本周、上周、下周的开始日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] 类型 -1:上周  0:本周(默认)  1:下周
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 周开始日期

- 示例：

```js
jsToolkit.getStartOfWeek()
// 2023-07-31 
jsToolkit.getStartOfWeek('2022-01-01', -1)
// 2021-12-20 
jsToolkit.getStartOfWeek('2022-01-01', 1)
// 2022-01-03
```

## getEndOfWeek

- 说明：

	根据日期获得本周、上周、下周的结束日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上周  0:本周(默认)  1:下周
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 周结束日期

- 示例：

```js
jsToolkit.getEndOfWeek()
// 2023-08-06 
jsToolkit.getEndOfWeek('2022-01-01', -1)
// 2021-12-26 
jsToolkit.getEndOfWeek('2022-01-01', 1)
// 2022-01-09
```

## getStartOfMonth

- 说明：

	根据日期获得本月、上月、下月开始日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上月  0:本月(默认)  1:下月
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 月开始日期

- 示例：

```js
jsToolkit.getStartOfMonth()
// 2023-08-01 
jsToolkit.getStartOfMonth(new Date('2022-01-01'), -1)
// 2021-12-01 
jsToolkit.getStartOfMonth(new Date('2022-01-01'), 1)
// 2022-02-01

```

## getEndOfMonth

- 说明：

	根据日期获得本月、上月、下月结束日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上月  0:本月(默认)  1:下月
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 日期

- 示例：

```js
jsToolkit.getEndOfMonth()
// 2023-08-31
jsToolkit.getEndOfMonth(new Date('2022-01-01'), -1)
// 2021-12-31
jsToolkit.getEndOfMonth(new Date('2022-01-01'), 1)
// 2022-02-28
```

## getStartOfQuarter

- 说明：

	根据日期获取本季度、上季度、下季度的开始日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 季度开始日期

- 示例：

```js
jsToolkit.getStartOfQuarter()
// 2023-07-01 
jsToolkit.getStartOfQuarter(new Date('2022-01-01'), -1)
// 2021-10-01 
jsToolkit.getStartOfQuarter(new Date('2022-01-01'), 1)
// 2022-04-01
```

## getEndOfQuarter

- 说明：

	根据日期获取本季度、上季度、下季度的结束日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 季度结束日期

- 示例：

```js
jsToolkit.getEndOfQuarter()
// 2023-07-31 
jsToolkit.getEndOfQuarter(new Date('2022-01-01'), -1)
// 2021-10-31 
jsToolkit.getEndOfQuarter(new Date('2022-01-01'), 1)
// 2022-04-30
```

## getStartOfYear

- 说明：

  根据日期获取本年、上年、下年的开始日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上年  0:本年(默认)  1:下年
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 年开始日期

- 示例：

```js
jsToolkit.getStartOfYear()
// 2023-01-01 
jsToolkit.getStartOfYear('2022-01-01')
// 2022-01-01
```

## getEndOfYear

- 说明：

  根据日期获取本年、上年、下年的结束日期

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [type=0] -1:上年  0:本年(默认)  1:下年
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 年结束日期

- 示例：

```js
jsToolkit.getEndOfYear()
// 2023-12-31 
jsToolkit.getEndOfYear('2022-01-01')
// 2022-12-31
```

## getBeforeDate

- 说明：

	获取指定日期的前几天

- 参数：

    - {(Date|string|number)} [date=new Date()] 日期对象或日期格式字符串
    - {number} [len=1] 要获取的天数长度, 1：近一天(默认) 3：近三天 7：近7天，30：近30天
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string} 日期

- 示例：

```js
// 假设当前时间为 2023-8-3
jsToolkit.getBeforeDate(new Date())
// 2023-08-02 
jsToolkit.getBeforeDate(new Date(), 3)
// 2023-07-31 
jsToolkit.getBeforeDate(new Date(), 7)
// 2023-07-27 
jsToolkit.getBeforeDate(new Date(), 30)
// 2023-07-04
```

## getDatesBetween

- 说明：

	获取两个日期之间的所有日期

- 参数：

    - {(Date|string|number)} startDate 开始日期
    - {(Date|string|number)} endDate 结束日期
    - {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式

- 返回值：

  {string[]} 日期数组

- 示例：

```js
jsToolkit.getDatesBetween('2022-1-1', '2022-1-5')
// ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05']
```

