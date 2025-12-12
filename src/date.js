import {isDate} from "./inspect.js";

/**
 * 格式化日期
 * @param {(Date|string|number)} [date=new Date()] - 时间戳或日期对象，支持字符串、10位或13位时间戳
 * @param {string} [valueFormat=YYYY-MM-DD HH:mm:ss] - 格式字符串，支持：
 *   - YYYY: 四位年份
 *   - MM: 两位月份 (01-12)
 *   - M: 月份 (1-12)
 *   - DD: 两位日期 (01-31)
 *   - D: 日期 (1-31)
 *   - HH: 两位24小时制小时 (00-23)
 *   - H: 24小时制小时 (0-23)
 *   - hh: 两位12小时制小时 (01-12)
 *   - h: 12小时制小时 (1-12)
 *   - mm: 两位分钟 (00-59)
 *   - m: 分钟 (0-59)
 *   - ss: 两位秒 (00-59)
 *   - s: 秒 (0-59)
 *   - WW: 星期 (星期日-星期六)
 * @returns {string} 格式化后的日期字符串
 * @example
 * format(new Date('2023-03-15T14:30:20')) // "2023-03-15 14:30:20"
 * format(1678886400, 'YYYY/MM/DD') // "2023/03/15"
 * format('2023-03-15', 'hh:mm:ss WW') // "02:30:20 星期三"
 */
export const formatDate = function (date = new Date(), valueFormat = "YYYY-MM-DD HH:mm:ss") {
  if (!isDate(date)) {
    if (typeof date === "string") {
      if (/^[0-9]+$/.test(date)) {
        // support "1548221490638"
        date = parseInt(date, 10);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        date = date.replace(/-/g, "/"); // 替换所有-字符以提高兼容性
      }
    }

    if (typeof date === "number") {
      // 判断是否为10位时间戳
      if (Math.floor(date / 10000000000) === 0 && Math.floor(date / 1000000000) > 0) {
        date = date * 1000;
      }
    }
    date = new Date(date);

    // 检查是否为合法日期
    if (isNaN(date.getTime())) {
      return undefined;
    }
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const week = date.getDay();

  // 计算12小时制时间
  const hour12 = hour % 12 || 12;

  const monthStr = month.toString().padStart(2, "0");
  const dayStr = day.toString().padStart(2, "0");
  const hourStr = hour.toString().padStart(2, "0");
  const hour12Str = hour12.toString().padStart(2, "0");
  const minuteStr = minute.toString().padStart(2, "0");
  const secondStr = second.toString().padStart(2, "0");

  // 星期映射常量
  const WEEK_MAP = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

  const formatObj = {
    YYYY: year,
    M: month,
    MM: monthStr,
    D: day,
    DD: dayStr,
    H: hour,
    HH: hourStr,
    h: hour12,
    hh: hour12Str,
    m: minute,
    mm: minuteStr,
    s: second,
    ss: secondStr,
    WW: WEEK_MAP[week],
  };

  if (typeof valueFormat !== "string") {
    valueFormat = "YYYY-MM-DD HH:mm:ss";
  }

  return valueFormat.replace(/(YYYY|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|WW)+/g, (match, key) => {
    return formatObj[key] ?? match;
  });
};

/**
 * 根据指定日期获取指定范围的日期集合
 * @param {(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param {number} [len=2] - 范围长度（天数）
 * @param {number} [dir=-1] - 方向：-1 取基准日期之前的 [len] 天，0 取基准日期前后各 [len] 天，1 取基准日期之后的 [len] 天
 * @param {string} [valueFormat="YYYY-MM-DD"] - 日期格式
 * @returns {string[]} 日期集合，按时间顺序排列
 * @example
 * getDaysRange('2023-03-15', 2, -1) // ["2023-03-13", "2023-03-14", "2023-03-15"]
 * getDaysRange('2023-03-15', 2, 0)  // ["2023-03-13", "2023-03-14", "2023-03-15", "2023-03-16", "2023-03-17"]
 * getDaysRange('2023-03-15', 2, 1)  // ["2023-03-15", "2023-03-16", "2023-03-17"]
 * getDaysRange('2023-03-15', 0, 0)  // ["2023-03-15"]
 */
export const getDateRange = function (date = new Date(), len = 2, dir = -1, valueFormat = "YYYY-MM-DD") {
  // 参数验证和默认值处理
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证len参数
  if (typeof len !== 'number' || len < 0 || !isFinite(len)) {
    len = 2;
  }
  len = Math.floor(len); // 确保是整数
  // 验证dir参数
  if (dir !== -1 && dir !== 0 && dir !== 1) {
    dir = -1;
  }

  const result = [];
  const baseDate = new Date(date);

  if (dir === -1) {
    // 前几天：从 (date - len) 到 date
    for (let i = len; i >= 0; i--) {
      const tempDate = new Date(baseDate);
      tempDate.setDate(baseDate.getDate() - i);
      result.push(formatDate(tempDate, valueFormat));
    }
  } else if (dir === 1) {
    // 后几天：从 date 到 (date + len)
    for (let i = 0; i <= len; i++) {
      const tempDate = new Date(baseDate);
      tempDate.setDate(baseDate.getDate() + i);
      result.push(formatDate(tempDate, valueFormat));
    }
  } else {
    // 前后几天：从 (date - len) 到 (date + len)
    for (let i = -len; i <= len; i++) {
      const tempDate = new Date(baseDate);
      tempDate.setDate(baseDate.getDate() + i);
      result.push(formatDate(tempDate, valueFormat));
    }
  }
  return result;
}

/**
 * 获取指定日期所在月份的总天数
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @returns {number} 指定月份的总天数
 * @example
 * getDaysInMonth(new Date('2023-02-01')) // 28 (2023年2月有28天)
 * getDaysInMonth('2020-02-01') // 29 (2020年2月有29天，闰年)
 * getDaysInMonth(1580515200000) // 29 (2020年2月，时间戳)
 * getDaysInMonth() // 当前月份的天数
 */
export const getDaysInMonth = function (date = new Date()) {
  if (!isDate(date)) {
    date = new Date(date)
  }
  // 检查是否为合法日期
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  const year = date.getFullYear();
  const monthIndex = date.getMonth(); // getMonth() 返回 0-11
  // 通过设置日期为0来获取上个月的最后一天，即当前月的总天数
  return new Date(year, monthIndex + 1, 0).getDate();
};

/**
 * 获取指定年份的总天数
 * @param {(Date|number|string)} [year=new Date()] - 年份，可以是：
 *   - Date对象：将使用该日期对象的年份
 *   - 数字：直接作为年份使用
 *   - 字符串：将被解析为年份
 * @returns {number} 指定年份的总天数（365或366天）
 * @example
 * getDaysInYear(2020) // 366 (2020年是闰年)
 * getDaysInYear('2021') // 365 (2021年是平年)
 * getDaysInYear(new Date('2020-03-15')) // 366 (2020年是闰年)
 * getDaysInYear() // 当前年份的天数
 */
export const getDaysInYear = function (year = new Date()) {
  // 参数处理和类型转换
  let fullYear;
  if (isDate(year)) {
    fullYear = year.getFullYear();
  } else if (typeof year === 'string') {
    fullYear = parseInt(year, 10);
  } else if (typeof year === 'number') {
    fullYear = year;
  } else {
    fullYear = new Date().getFullYear();
  }

  // 验证年份是否有效
  if (isNaN(fullYear)) {
    throw new Error('Invalid year provided');
  }

  // 使用更精确的方法计算年份天数
  // 通过计算当年1月1日到下一年1月1日的毫秒差来确定天数
  const startDate = new Date(fullYear, 0, 1); // 当年1月1日
  const endDate = new Date(fullYear + 1, 0, 1); // 下一年1月1日
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  return Math.round((endDate - startDate) / millisecondsPerDay);
};

/**
 * 根据指定日期获取指定范围的日期集合
 * @param {(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param {number} [length=2] - 要获取的月份数量
 * @param {number} [dir=-1] - 方向：-1 获取之前的月份(默认)，0 获取前后月份，1 获取之后的月份
 * @param {string} [valueFormat='YYYY-MM'] - 返回的日期格式
 * @returns {string[]} 月份集合，按时间顺序排列
 * @example
 * getMonthsRange('2023-03-15', 2, -1) // ["2023-01", "2023-02", "2023-03"]
 * getMonthsRange('2023-03-15', 2, 0)  // ["2023-01", "2023-02", "2023-03", "2023-04", "2023-05"]
 * getMonthsRange('2023-03-15', 2, 1)  // ["2023-03", "2023-04", "2023-05"]
 * getMonthsRange('2023-03-15', 0, 0)  // ["2023-03"]
 */
export const getMonthsRange = function (date = new Date(), length = 2, dir = -1, valueFormat = 'YYYY-MM') {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证参数
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  if (typeof length !== 'number' || length < 0 || !isFinite(length)) {
    length = 2;
  }
  length = Math.floor(length);

  if (dir !== -1 && dir !== 0 && dir !== 1) {
    dir = -1;
  }

  const months = [];
  const baseDate = new Date(date);
  let startDate, endDate, step;

  // 根据方向确定起始日期、结束日期和步长
  if (dir === -1) {
    // 获取之前的月份
    startDate = new Date(baseDate);
    startDate.setMonth(baseDate.getMonth() - length);
    endDate = new Date(baseDate);
    step = 1;
  } else if (dir === 1) {
    // 获取之后的月份
    startDate = new Date(baseDate);
    endDate = new Date(baseDate);
    endDate.setMonth(baseDate.getMonth() + length);
    step = 1;
  } else {
    // 获取前后月份
    startDate = new Date(baseDate);
    startDate.setMonth(baseDate.getMonth() - length);
    endDate = new Date(baseDate);
    endDate.setMonth(baseDate.getMonth() + length);
    step = 1;
  }

  // 生成月份列表
  const current = new Date(startDate);
  while (current <= endDate) {
    months.push(formatDate(new Date(current.getFullYear(), current.getMonth(), 1), valueFormat));
    current.setMonth(current.getMonth() + step);
  }

  return months;
};

/**
 * 获取指定日期所在季度的开始月份
 * 季度划分：1-3月为Q1，4-6月为Q2，7-9月为Q3，10-12月为Q4
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {string} [valueFormat='YYYY-MM'] - 返回的日期格式
 * @returns {string} 季度开始月份，格式由[valueFormat](file:///Users/huyafei/workspace/my/001-github/js-toolkit/src/date.js#L81-L81)参数决定
 * @example
 * getStartMonthOfQuarter(new Date('2023-02-15')) // "2023-01" (Q1开始月份)
 * getStartMonthOfQuarter('2023-05-20', 'YYYY年MM月') // "2023年04月" (Q2开始月份)
 * getStartMonthOfQuarter(1678886400000) // "2023-01" (时间戳对应的Q1开始月份)
 */
export const getStartMonthOfQuarter = function (date = new Date(), valueFormat = 'YYYY-MM') {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 检查是否为合法日期
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  const month = date.getMonth(); // getMonth() 返回 0-11
  // 计算所在季度的起始月份索引 (0, 3, 6, 9 分别对应 Q1, Q2, Q3, Q4 的开始月份)
  const quarterStartMonthIndex = Math.floor(month / 3) * 3;

  // 创建季度开始月份的日期对象
  const quarterStartDate = new Date(date.getFullYear(), quarterStartMonthIndex, 1);

  return formatDate(quarterStartDate, valueFormat);
};

/**
 * 获取指定日期是当年中的第几天
 * 从当年1月1日0点开始计算，1月1日为第1天
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @returns {number} 日期在年中的天数索引（1-366）
 * @example
 * getDayOfYear(new Date('2023-01-01')) // 1 (一年中的第一天)
 * getDayOfYear('2023-03-01') // 60 (2023年第60天)
 * getDayOfYear(1678886400000) // 70 (时间戳对应的天数)
 * getDayOfYear() // 当天在年中的天数
 */
export const getDayOfYear = function (date = new Date()) {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 检查是否为合法日期
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  const year = date.getFullYear();
  // 创建当年1月1日的日期对象
  const startOfYear = new Date(year, 0, 1);
  // 计算毫秒差并转换为天数
  const timeDiff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;

  // 加1是因为1月1日是第1天而不是第0天
  return Math.floor(timeDiff / oneDay) + 1;
};


/**
 * 获取指定日期在年中的周数（自然周）
 * 一周从周日开始计算，1月1日所在的周为第1周
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @returns {number} 日期在年中的周数（1-53）
 * @example
 * getWeekOfYear(new Date('2023-01-01')) // 1 (2023年第1周)
 * getWeekOfYear('2023-03-01') // 10 (2023年第10周)
 * getWeekOfYear(1678886400000) // 11 (时间戳对应的周数)
 * getWeekOfYear() // 当天在年中的周数
 */
export const getWeekOfYear = function (date = new Date()) {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 检查是否为合法日期
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  // 获取日期在年中的天数
  const dayOfYear = getDayOfYear(date);

  // 获取该年1月1日是星期几 (0-6, 0表示周日)
  const janFirstDay = new Date(date.getFullYear(), 0, 1).getDay();

  // 计算周数：
  // 1. 如果1月1日是周日，则直接计算
  // 2. 如果1月1日不是周日，则需要调整计算方式
  // (dayOfYear + janFirstDay - 1) / 7 向上取整，然后加1周（因为第一周可能不满7天）
  return Math.ceil((dayOfYear + janFirstDay) / 7);
};

/**
 * 日期处理类，用于计算各种日期范围
 * 提供周、月、季度、年的开始和结束日期计算功能
 * 注意：一周从周一开始，到周日结束
 */
class VenDate {
  /**
   * 创建 VenDate 实例
   * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
   */
  constructor(date) {
    // 参数验证和类型转换
    if (!date) {
      this.nowDate = new Date();
    } else if (!isDate(date)) {
      this.nowDate = new Date(date);
    } else {
      this.nowDate = date;
    }

    // 检查是否为合法日期
    if (isNaN(this.nowDate.getTime())) {
      throw new Error('Invalid date provided');
    }

    this.year = this.nowDate.getFullYear();
    this.month = this.nowDate.getMonth();
    this.day = this.nowDate.getDate();
    this.week = this.nowDate.getDay(); // 返回一周（0~6）的某一天的数字 ,星期天为 0, 星期一为 1, 以此类推
  }

  /**
   * 根据日期获取本周、上周、下周的开始日期（周一为一周开始）
   * @param {number} [type=0] 类型 -1:上周  0:本周(默认)  1:下周
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 周开始日期（周一）
   * @example
   * new VenDate('2023-03-15').getStartOfWeek() // "2023-03-13" (本周一开始日期)
   * new VenDate('2023-03-15').getStartOfWeek(-1) // "2023-03-06" (上周一开始日期)
   * new VenDate('2023-03-15').getStartOfWeek(1) // "2023-03-20" (下周一开始日期)
   */
  getStartOfWeek(type = 0, valueFormat = 'YYYY-MM-DD') {
    const date = new Date(this.nowDate);
    // 获取当前日期是星期几 (0-6, 0表示周日)
    const dayOfWeek = date.getDay();

    // 计算周一需要减去的天数（周一为一周开始）
    // 周日(0)需要减去6天，周一(1)需要减去0天，周二(2)需要减去1天...
    const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    // 根据类型调整周数
    let weekOffset = 0;
    switch (type) {
      case -1: // 上周
        weekOffset = -7;
        break;
      case 1: // 下周
        weekOffset = 7;
        break;
      case 0: // 本周
      default:
        // 保持当前周不变
        break;
    }

    date.setDate(date.getDate() - daysToMonday + weekOffset);
    return formatDate(date, valueFormat);
  }

  /**
   * 根据日期获得本周、上周、下周的结束日期（周日为一周结束）
   * @param {number} [type=0] -1:上周  0:本周(默认)  1:下周
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 周结束日期（周日）
   * @example
   * new VenDate('2023-03-15').getEndOfWeek() // "2023-03-19" (本周日结束日期)
   * new VenDate('2023-03-15').getEndOfWeek(-1) // "2023-03-12" (上周日结束日期)
   * new VenDate('2023-03-15').getEndOfWeek(1) // "2023-03-26" (下周日结束日期)
   */
  getEndOfWeek(type = 0, valueFormat = 'YYYY-MM-DD') {
    const date = new Date(this.nowDate);
    // 获取当前日期是星期几 (0-6, 0表示周日)
    const dayOfWeek = date.getDay();

    // 计算周日需要加上或减去的天数（周日为一周结束）
    // 周一(1)需要加上6天，周二(2)需要加上5天...周日(0)需要加上0天
    const daysToSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

    // 根据类型调整周数
    let weekOffset = 0;
    switch (type) {
      case -1: // 上周
        weekOffset = -7;
        break;
      case 1: // 下周
        weekOffset = 7;
        break;
      case 0: // 本周
      default:
        // 保持当前周不变
        break;
    }

    date.setDate(date.getDate() + daysToSunday + weekOffset);
    return formatDate(date, valueFormat);
  }

  // --------------------------------------------

  /**
   * 根据日期获得本月、上月、下月开始日期
   * @param {number} [type=0] -1:上月  0:本月(默认)  1:下月
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 月开始日期
   * @example
   * new VenDate('2023-03-15').getStartOfMonth() // "2023-03-01" (本月开始日期)
   * new VenDate('2023-03-15').getStartOfMonth(-1) // "2023-02-01" (上月开始日期)
   * new VenDate('2023-03-15').getStartOfMonth(1) // "2023-04-01" (下月开始日期)
   */
  getStartOfMonth(type = 0, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;
    let month = this.month;

    switch (type) {
      case -1: // 上月
        if (month === 0) {
          year = year - 1;
          month = 11;
        } else {
          month = month - 1;
        }
        break;
      case 1: // 下月
        if (month === 11) {
          year = year + 1;
          month = 0;
        } else {
          month = month + 1;
        }
        break;
      case 0: // 本月
      default:
        // 保持当前年月不变
        break;
    }

    return formatDate(new Date(year, month, 1), valueFormat);
  }

  /**
   * 根据日期获得本月、上月、下月结束日期
   * @param {number} [type=0] -1:上月  0:本月(默认)  1:下月
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 月结束日期
   * @example
   * new VenDate('2023-03-15').getEndOfMonth() // "2023-03-31" (本月结束日期)
   * new VenDate('2023-03-15').getEndOfMonth(-1) // "2023-02-28" (上月结束日期)
   * new VenDate('2023-03-15').getEndOfMonth(1) // "2023-04-30" (下月结束日期)
   */
  getEndOfMonth(type = 0, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;
    let month = this.month;

    switch (type) {
      case -1: // 上月
        if (month === 0) {
          year = year - 1;
          month = 11;
        } else {
          month = month - 1;
        }
        break;
      case 1: // 下月
        if (month === 11) {
          year = year + 1;
          month = 0;
        } else {
          month = month + 1;
        }
        break;
      case 0: // 本月
      default:
        // 保持当前年月不变
        break;
    }

    // 获取指定月份的总天数
    const daysInMonth = getDaysInMonth(new Date(year, month, 1));
    return formatDate(new Date(year, month, daysInMonth), valueFormat);
  }

  /**
   * 根据日期获取本季度、上季度、下季度的开始日期
   * @param {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 季度开始日期
   * @example
   * new VenDate('2023-03-15').getStartOfQuarter() // "2023-01-01" (本季度开始日期)
   * new VenDate('2023-03-15').getStartOfQuarter(-1) // "2022-10-01" (上季度开始日期)
   * new VenDate('2023-03-15').getStartOfQuarter(1) // "2023-04-01" (下季度开始日期)
   */
  getStartOfQuarter(type = 0, valueFormat = 'YYYY-MM-DD') {
    // 创建一个不修改原始日期的新日期对象
    const date = new Date(this.nowDate);

    switch (type) {
      case -1: // 上季度
        date.setMonth(this.month - 3);
        break;
      case 1: // 下季度
        date.setMonth(this.month + 3);
        break;
      case 0: // 本季度
      default:
        // 保持当前日期不变
        break;
    }

    // 获取目标季度的开始月份
    const quarterStartMonth = getStartMonthOfQuarter(date);
    const year = new Date(quarterStartMonth).getFullYear();
    const month = new Date(quarterStartMonth).getMonth();

    return formatDate(new Date(year, month, 1), valueFormat);
  }

  /**
   * 根据日期获取本季度、上季度、下季度的结束日期
   * @param {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 季度结束日期
   * @example
   * new VenDate('2023-03-15').getEndOfQuarter() // "2023-03-31" (本季度结束日期)
   * new VenDate('2023-03-15').getEndOfQuarter(-1) // "2022-12-31" (上季度结束日期)
   * new VenDate('2023-03-15').getEndOfQuarter(1) // "2023-06-30" (下季度结束日期)
   */
  getEndOfQuarter(type = 0, valueFormat = 'YYYY-MM-DD') {
    // 创建一个不修改原始日期的新日期对象
    const date = new Date(this.nowDate);

    switch (type) {
      case -1: // 上季度
        date.setMonth(this.month - 3);
        break;
      case 1: // 下季度
        date.setMonth(this.month + 3);
        break;
      case 0: // 本季度
      default:
        // 保持当前日期不变
        break;
    }

    // 获取目标季度的开始月份
    const quarterStartMonth = getStartMonthOfQuarter(date);
    const year = new Date(quarterStartMonth).getFullYear();
    const month = new Date(quarterStartMonth).getMonth();

    // 计算季度结束月份（季度开始月份+2个月）
    const quarterEndMonth = month + 2;
    // 获取该月的最后一天
    const daysInMonth = getDaysInMonth(new Date(year, quarterEndMonth, 1));

    return formatDate(new Date(year, quarterEndMonth, daysInMonth), valueFormat);
  }

  /**
   * 根据日期获取本年、上年、下年的开始日期
   * @param {number} [type=0] -1:上年  0:本年(默认)  1:下年
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 年开始日期
   * @example
   * new VenDate('2023-03-15').getStartOfYear() // "2023-01-01" (本年开始日期)
   * new VenDate('2023-03-15').getStartOfYear(-1) // "2022-01-01" (上年开始日期)
   * new VenDate('2023-03-15').getStartOfYear(1) // "2024-01-01" (下年开始日期)
   */
  getStartOfYear(type = 0, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;

    switch (type) {
      case -1: // 上年
        year = year - 1;
        break;
      case 1: // 下年
        year = year + 1;
        break;
      case 0: // 本年
      default:
        // 保持当前年份不变
        break;
    }

    return formatDate(new Date(year, 0, 1), valueFormat);
  }

  /**
   * 根据日期获取本年、上年、下年的结束日期
   * @param {number} [type=0] -1:上年  0:本年(默认)  1:下年
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 年结束日期
   * @example
   * new VenDate('2023-03-15').getEndOfYear() // "2023-12-31" (本年结束日期)
   * new VenDate('2023-03-15').getEndOfYear(-1) // "2022-12-31" (上年结束日期)
   * new VenDate('2023-03-15').getEndOfYear(1) // "2024-12-31" (下年结束日期)
   */
  getEndOfYear(type = 0, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;

    switch (type) {
      case -1: // 上年
        year = year - 1;
        break;
      case 1: // 下年
        year = year + 1;
        break;
      case 0: // 本年
      default:
        // 保持当前年份不变
        break;
    }

    // 获取该年12月的总天数
    const daysInDecember = getDaysInMonth(new Date(year, 11, 1));
    return formatDate(new Date(year, 11, daysInDecember), valueFormat);
  }
}

/**
 * 根据日期获取本周、上周、下周的开始日期（周一为一周开始）
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上周  0:本周(默认)  1:下周
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 周开始日期（周一）
 * @example
 * getStartOfWeek('2023-03-15') // "2023-03-13" (本周一日期)
 * getStartOfWeek('2023-03-15', -1) // "2023-03-06" (上周一日期)
 * getStartOfWeek('2023-03-15', 1) // "2023-03-20" (下周一日期)
 * getStartOfWeek('2023-03-15', 0, 'YYYY/MM/DD') // "2023/03/13"
 */
export const getStartOfWeek = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getStartOfWeek(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate start of week: ${error.message}`);
  }
};

/**
 * 根据日期获得本周、上周、下周的结束日期（周日为一周结束）
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上周  0:本周(默认)  1:下周
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 周结束日期（周日）
 * @example
 * getEndOfWeek('2023-03-15') // "2023-03-19" (本周日日期)
 * getEndOfWeek('2023-03-15', -1) // "2023-03-12" (上周日日期)
 * getEndOfWeek('2023-03-15', 1) // "2023-03-26" (下周日日期)
 * getEndOfWeek('2023-03-15', 0, 'YYYY/MM/DD') // "2023/03/19"
 */
export const getEndOfWeek = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getEndOfWeek(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate end of week: ${error.message}`);
  }
};

/**
 * 根据日期获得本月、上月、下月开始日期
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上月  0:本月(默认)  1:下月
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 月开始日期
 * @example
 * getStartOfMonth('2023-03-15') // "2023-03-01" (本月第一天)
 * getStartOfMonth('2023-03-15', -1) // "2023-02-01" (上月第一天)
 * getStartOfMonth('2023-03-15', 1) // "2023-04-01" (下月第一天)
 * getStartOfMonth('2023-03-15', 0, 'YYYY年MM月DD日') // "2023年03月01日"
 */
export const getStartOfMonth = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getStartOfMonth(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate start of month: ${error.message}`);
  }
};

/**
 * 根据日期获得本月、上月、下月结束日期
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上月  0:本月(默认)  1:下月
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 月结束日期
 * @example
 * getEndOfMonth('2023-03-15') // "2023-03-31" (本月最后一天)
 * getEndOfMonth('2023-03-15', -1) // "2023-02-28" (上月最后一天)
 * getEndOfMonth('2023-03-15', 1) // "2023-04-30" (下月最后一天)
 * getEndOfMonth('2023-03-15', 0, 'YYYY年MM月DD日') // "2023年03月31日"
 */
export const getEndOfMonth = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getEndOfMonth(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate end of month: ${error.message}`);
  }
};

/**
 * 根据日期获取本季度、上季度、下季度的开始日期
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上季度  0:本季度(默认)  1:下季度
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 季度开始日期
 * @example
 * getStartOfQuarter('2023-03-15') // "2023-01-01" (本季度第一天)
 * getStartOfQuarter('2023-03-15', -1) // "2022-10-01" (上季度第一天)
 * getStartOfQuarter('2023-03-15', 1) // "2023-04-01" (下季度第一天)
 * getStartOfQuarter('2023-03-15', 0, 'YYYY年MM月DD日') // "2023年01月01日"
 */
export const getStartOfQuarter = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getStartOfQuarter(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate start of quarter: ${error.message}`);
  }
};

/**
 * 根据日期获取本季度、上季度、下季度的结束日期
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上季度  0:本季度(默认)  1:下季度
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 季度结束日期
 * @example
 * getEndOfQuarter('2023-03-15') // "2023-03-31" (本季度最后一天)
 * getEndOfQuarter('2023-03-15', -1) // "2022-12-31" (上季度最后一天)
 * getEndOfQuarter('2023-03-15', 1) // "2023-06-30" (下季度最后一天)
 * getEndOfQuarter('2023-03-15', 0, 'YYYY年MM月DD日') // "2023年03月31日"
 */
export const getEndOfQuarter = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getEndOfQuarter(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate end of quarter: ${error.message}`);
  }
};

/**
 * 根据日期获取本年、上年、下年的开始日期
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上年  0:本年(默认)  1:下年
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 年开始日期
 * @example
 * getStartOfYear('2023-03-15') // "2023-01-01" (本年第一天)
 * getStartOfYear('2023-03-15', -1) // "2022-01-01" (上年第一天)
 * getStartOfYear('2023-03-15', 1) // "2024-01-01" (下年第一天)
 * getStartOfYear('2023-03-15', 0, 'YYYY年MM月DD日') // "2023年01月01日"
 */
export const getStartOfYear = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getStartOfYear(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate start of year: ${error.message}`);
  }
};

/**
 * 根据日期获取本年、上年、下年的结束日期
 * @param {(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳
 * @param {number} [type=0] 类型 -1:上年  0:本年(默认)  1:下年
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 年结束日期
 * @example
 * getEndOfYear('2023-03-15') // "2023-12-31" (本年最后一天)
 * getEndOfYear('2023-03-15', -1) // "2022-12-31" (上年最后一天)
 * getEndOfYear('2023-03-15', 1) // "2024-12-31" (下年最后一天)
 * getEndOfYear('2023-03-15', 0, 'YYYY年MM月DD日') // "2023年12月31日"
 */
export const getEndOfYear = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证type参数
  if (type !== -1 && type !== 0 && type !== 1) {
    type = 0;
  }

  // 验证valueFormat参数
  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  try {
    return new VenDate(date).getEndOfYear(type, valueFormat);
  } catch (error) {
    throw new Error(`Failed to calculate end of year: ${error.message}`);
  }
};

/**
 * 获取指定日期的前几天日期
 * 通过从指定日期中减去指定天数来计算目标日期
 * @param {(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param {number} [len=1] - 要减去的天数，正数表示过去的日期，负数表示未来的日期
 * @param {string} [valueFormat="YYYY-MM-DD"] - 返回的日期格式
 * @returns {string} 格式化后的日期字符串
 * @example
 * getBeforeDate('2023-03-15', 1) // "2023-03-14" (前一天)
 * getBeforeDate('2023-03-15', 7) // "2023-03-08" (一周前)
 * getBeforeDate('2023-03-15', -1) // "2023-03-16" (后一天)
 * getBeforeDate('2023-03-15', 1, 'YYYY年MM月DD日') // "2023年03月14日"
 */
export const getDateOffset = function (date = new Date(), len = 1, valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(date)) {
    date = new Date(date);
  }

  // 验证参数
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  if (typeof len !== 'number' || !isFinite(len)) {
    len = 1;
  }

  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  // 使用 setDate 方法计算前几天，避免夏令时问题
  const targetDay = new Date(date);
  targetDay.setDate(targetDay.getDate() - len);

  const result = formatDate(targetDay, valueFormat);
  if (result === null) {
    throw new Error('Failed to format date');
  }

  return result;
}

/**
 * 获取两个日期之间的所有日期（包含起始和结束日期）
 * 返回的日期数组按时间顺序排列，从早到晚
 * @param {(Date|string|number)} [startDate=new Date()] - 开始日期，可以是日期对象、日期字符串或时间戳
 * @param {(Date|string|number)} [endDate=new Date()] - 结束日期，可以是日期对象、日期字符串或时间戳
 * @param {string} [valueFormat="YYYY-MM-DD"] - 返回的日期格式
 * @returns {string[]} 日期字符串数组，按时间顺序排列
 * @example
 * getDatesBetween('2023-03-15', '2023-03-18')
 * // ["2023-03-15", "2023-03-16", "2023-03-17", "2023-03-18"]
 *
 * getDatesBetween('2023-03-15', '2023-03-18', 'YYYY年MM月DD日')
 * // ["2023年03月15日", "2023年03月16日", "2023年03月17日", "2023年03月18日"]
 *
 * getDatesBetween('2023-03-18', '2023-03-15')
 * // ["2023-03-15", "2023-03-16", "2023-03-17", "2023-03-18"] (自动调整顺序)
 */
export const getDatesBetween = function (startDate = new Date(), endDate = new Date(), valueFormat = "YYYY-MM-DD") {
  // 参数验证和类型转换
  if (!isDate(startDate)) {
    startDate = new Date(startDate);
  }

  if (!isDate(endDate)) {
    endDate = new Date(endDate);
  }

  // 验证参数
  if (isNaN(startDate.getTime())) {
    throw new Error('Invalid start date provided');
  }

  if (isNaN(endDate.getTime())) {
    throw new Error('Invalid end date provided');
  }

  if (typeof valueFormat !== 'string') {
    valueFormat = "YYYY-MM-DD";
  }

  // 确保开始日期不晚于结束日期
  let startTime, endTime;
  if (startDate > endDate) {
    startTime = new Date(endDate);
    endTime = new Date(startDate);
  } else {
    startTime = new Date(startDate);
    endTime = new Date(endDate);
  }

  // 标准化日期时间为当天0点，避免时间部分影响比较
  const startNormalized = new Date(formatDate(startTime, 'YYYY-MM-DD'));
  const endNormalized = new Date(formatDate(endTime, 'YYYY-MM-DD'));

  // 处理 formatDate 可能返回 null 的情况
  if (startNormalized.toString() === 'Invalid Date' || endNormalized.toString() === 'Invalid Date') {
    throw new Error('Failed to normalize dates');
  }

  const dates = [];
  const currentDate = new Date(startNormalized);

  // 逐日生成日期列表
  while (currentDate <= endNormalized) {
    const formattedDate = formatDate(new Date(currentDate), valueFormat);
    if (formattedDate === null) {
      throw new Error('Failed to format date');
    }
    dates.push(formattedDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}


/**
 * 以前时间距离当前时间的时间差
 * @param {(Date|number)} date - 时间对象或时间戳
 * @param {Object} [opt] - 选项配置
 * @param {string} [opt.year='年前'] - 天的单位
 * @param {string} [opt.month='月前'] - 小时的单位
 * @param {string} [opt.week='周前'] - 分钟的单位
 * @param {string} [opt.day='天前'] - 小时的单位
 * @param {string} [opt.hour='小时前'] - 天的单位
 * @param {string} [opt.minute='分钟前'] - 秒的单位
 * @param {string} [opt.second='秒前'] - 秒的单位
 * @param {string} [opt.just='刚刚'] - 刚刚
 * @returns {string} 时间差
 * @version 1.1.0-beta.8
 */
export const timeAgo = function (date = new Date(), opt) {
  if (typeof opt !== 'object' || opt === null) {
    opt = {};
  }

  // 定义默认单位
  const defaultOpt = {
    year: '年前',
    month: '月前',
    week: '周前',
    day: '天前',
    hour: '小时前',
    minute: '分钟前',
    second: '秒前',
    just: '刚刚'
  };
  opt = Object.assign({}, defaultOpt, opt);

  if (!isDate(date)) {
    date = new Date(date);
  }

  // 检查是否是有效日期
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  const SECOND_PER_MINUTE = 60;
  const SECOND_PER_HOUR = SECOND_PER_MINUTE * 60;
  const SECOND_PER_DAY = SECOND_PER_HOUR * 24;
  const SECOND_PER_WEEK = SECOND_PER_DAY * 7;
  const SECOND_PER_MONTH = SECOND_PER_DAY * 30;
  const SECOND_PER_YEAR = SECOND_PER_MONTH * 12;

  const between = (Date.now() - Number(date)) / 1000;

  // 处理未来时间或极近时间
  if (between < 30) {
    return opt.just;
  } else if (between < SECOND_PER_MINUTE) {
    return `${Math.floor(between)}${opt.second}`;
  } else if (between < SECOND_PER_HOUR) {
    return `${Math.floor(between / SECOND_PER_MINUTE)}${opt.minute}`;
  } else if (between < SECOND_PER_DAY) {
    return `${Math.floor(between / SECOND_PER_HOUR)}${opt.hour}`;
  } else if (between < SECOND_PER_WEEK) {
    return `${Math.floor(between / SECOND_PER_DAY)}${opt.day}`;
  } else if (between < SECOND_PER_MONTH) {
    return `${Math.floor(between / SECOND_PER_WEEK)}${opt.week}`;
  } else if (between < SECOND_PER_YEAR) {
    return `${Math.floor(between / SECOND_PER_MONTH)}${opt.month}`;
  } else {
    return `${Math.floor(between / SECOND_PER_YEAR)}${opt.year}`;
  }
}

/**
 * 根据步长获取时间间隔
 * @param {number} [step=30] - 间隔 单位：分钟
 * @returns {string[]} 时间间隔数组
 * @example getTimeSlot(30) // ["00:00", "00:30", "01:00", "01:30", ...]
 */
export const getTimeSlotByStep = function (step = 30) {
  // 设置起始时间为当天零点
  let date = new Date();
  date.setHours(0, 0, 0, 0);

  const timeSlots = [];
  const slotNum = (24 * 60) / step; // 计算总间隔数

  for (let i = 0; i < slotNum; i++) {
    const time = new Date(date.getTime() + step * 60 * 1000 * i);
    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');
    timeSlots.push(`${hour}:${minute}`);
  }
  return timeSlots;
};

/**
 * 秒转时分秒格式
 * @param {number} [s=0] - 秒数
 * @param {Array<string>} [valueFormat=["时", "分", "秒"]] - 格式，可以自定义例如：["h", "m", "s"]
 * @returns {string} 格式化后的时间字符串，如 "1时30分45秒"
 * @example
 * sToHms(3661) // "1时1分1秒"
 * sToHms(3661, ["h", "m", "s"]) // "1h1m1s"
 * sToHms(59) // "59秒"
 */
export const sToHms = function (s = 0, valueFormat = ["时", "分", "秒"]) {
  // 输入验证
  if (typeof s !== 'number' || isNaN(s) || s < 0) {
    s = 0;
  }

  // 计算各时间单位
  const hours = Math.floor(s / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = Math.floor(s % 60);

  // 根据时间长度选择显示格式
  if (hours > 0) {
    return hours + valueFormat[0] + minutes + valueFormat[1] + seconds + valueFormat[2];
  } else if (minutes > 0) {
    return minutes + valueFormat[1] + seconds + valueFormat[2];
  } else {
    return seconds + valueFormat[2];
  }
};
