// import dayjs from "dayjs";
import {isDate} from "./inspect.js";
import {padStart} from "./string.js";

/**
 * 格式化日期
 * @param {(Date|string|number)} [date=new Date()] 时间戳或日期对象
 * @param {string} [valueFormat=YYYY-MM-DD hh:mm:ss] 格式，年(YYYY) 月(MM) 日(DD) 时(hh) 分(mm) 秒(ss) 星期(WW)
 * @returns {(string|null)} 格式化后的日期
 */
const format = function (date = new Date(), valueFormat = "YYYY-MM-DD hh:mm:ss") {
  if (!isDate(date)) {
    if (typeof date === "string") {
      if (/^[0-9]+$/.test(date)) {
        // support "1548221490638"
        date = parseInt(date);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        date = date.replace(new RegExp(/-/gm), "/");
      }
    }

    if (typeof date === "number" && date.toString().length === 10) {
      date = date * 1000;
    }
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const week = date.getDay();
  const formatObj = {
    YYYY: year,
    M: month,
    MM: month.toString().padStart(2, "0"),
    D: day,
    DD: day.toString().padStart(2, "0"),
    h: hour,
    hh: hour.toString().padStart(2, "0"),
    m: minute,
    mm: minute.toString().padStart(2, "0"),
    s: second,
    ss: second.toString().padStart(2, "0"),
    WW: week,
  };
  return valueFormat.replace(/(YYYY|MM|M|DD|D|hh|h|mm|m|ss|s|WW)+/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "WW") {
      return [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ][value];
    }
    return value
  });
};

/**
 * 如果时间是复数，则显示复数标签
 * @param {number} time
 * @param {string} label
 * @return {string}
 * @version 1.1.0-beta.8
 */
const pluralize = function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + "s";
}

/**
 * 以前时间距离当前时间的时间差
 * @param {(Date|number)} date 时间对象或时间戳
 * @param {Object} [opt={d: 'day', h: 'hour', m: 'minute'}] 选项配置
 * @param {string} [opt.d='day'] 天的单位
 * @param {string} [opt.h='hour'] 小时的单位
 * @param {string} [opt.m='minute'] 分钟的单位
 * @returns {string}
 * @version 1.1.0-beta.8
 */
const timeAgo = function (date = new Date(), opt = {d: 'day', h: 'hour', m: 'minute'}) {
  if (!isDate(date)) {
    date = new Date(date);
  }
  const between = (Date.now() - Number(date)) / 1000;
  if (between < 3600) {
    return pluralize(~~(between / 60), opt.m);
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), opt.h);
  } else {
    return pluralize(~~(between / 86400), opt.d);
  }
}

/**
 * 根据步长获取时间间隔
 * @param {number} [step=30] 间隔 单位：分钟
 * @returns {string[]} 时间间隔数组
 * @example getTimeSlot(30) // -> ["00:00", "00:30", "01:00", "01:30", ...]
 */
const getTimeSlotByStep = function (step = 30) {
  //  step = 间隔的分钟
  let date = new Date();
  date.setHours(0o0); // 时分秒设置从零点开始
  date.setSeconds(0o0);
  date.setUTCMinutes(0o0);
  let arr = [],
      timeArr = [];
  let slotNum = (24 * 60) / step; // 算出多少个间隔
  for (let f = 0; f < slotNum; f++) {
    //  stepM * f = 24H*60M
    // arr.push(new Date(Number(date.getTime()) + Number(step*60*1000*f)))   //  标准时间数组
    let time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f)); // 获取：零点的时间 + 每次递增的时间
    let hour = "",
        sec = "";
    time.getHours() < 10
        ? (hour = "0" + time.getHours())
        : (hour = time.getHours()); // 获取小时
    time.getMinutes() < 10
        ? (sec = "0" + time.getMinutes())
        : (sec = time.getMinutes()); // 获取分钟
    timeArr.push(hour + ":" + sec);
  }
  return timeArr;
};

/**
 * 秒转时分秒
 * @param {number} [s=0] 秒数
 * @param {Array<string>} [valueFormat=["时", "分", "秒"]] 格式 可以自定义例如：["h", "m "s"]
 * @returns {string} x时x分x秒
 */
const sToHms = function (s = 0, valueFormat = ["时", "分", "秒"]) {
  let str = "";
  if (s > 3600) {
    str =
        Math.floor(s / 3600) +
        valueFormat[0] +
        Math.floor((s % 3600) / 60) +
        valueFormat[1] +
        (s % 60) +
        valueFormat[2];
  } else if (s > 60) {
    str = Math.floor(s / 60) + valueFormat[1] + (s % 60) + valueFormat[2];
  } else {
    str = (s % 60) + valueFormat[2];
  }
  return str;
};

/**
 * 根据指定日期获取指定长度的天数集合
 * @param {Date|string} [date=new Date()] 时间
 * @param {number} [len=2] 长度
 * @param {number} [dir=-1]  方向 -1: 前几天(默认)，0:前后几天，1: 后几天;
 * @param {string} [valueFormat="YYYY-MM-DD"] 日期格式
 * @returns {string[]} 日期集合
 */
const getDaysFromDate = function (date = new Date(), len = 2, dir = -1, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  const date1 = new Date(date);
  const date2 = new Date(date);
  const arr = [];
  arr.push(format(date, valueFormat))
  for (let i = 1; i <= len; i++) {
    if (dir === -1) {
      arr.unshift(format(date1.setDate(date1.getDate() - 1), valueFormat));
    } else if (dir === 1) {
      arr.push(format(date2.setDate(date2.getDate() + 1), valueFormat));
    } else {
      arr.unshift(format(date1.setDate(date1.getDate() - 1), valueFormat));
      arr.push(format(date2.setDate(date2.getDate() + 1), valueFormat));
    }
  }
  return arr
}

/**
 * 获取指定日期的所在月份的总天数
 * @param {(Date|string)} [date=new Date()]
 * @returns {number} 天数
 */
const getDaysInMonth = function (date = new Date()) {
  if (!isDate(date)) {
    date = new Date(date)
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  return new Date(year, month, 0).getDate();
};

/**
 * 获取某年天数
 * @param {(Date|String|number)} year 年份
 * @returns {number} 天数
 */
const getDaysInYear = function (year = new Date()) {
  if (isDate(year)) {
    year = year.getFullYear()
  }
  let date = new Date(year, 0, 1);
  let endDate = new Date(year + 1, 0, 1);
  let millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endDate - date) / millisecondsPerDay);
}

// --------------------------------------------

/**
 * 根据指定时间获取指定长度的月份集合
 * @param {Date|string|number} [date=new Date()] 时间
 * @param {number} [length=2] 长度
 * @param {number} [direction=1] -1: 前几个月(默认)，0:前后几个月，2: 后几个月，
 * @param {string} [valueFormat='YYYY-MM'] 返回格式
 * @returns {string[]} 月份集合
 */
const getMonthsFromDate = function (date = new Date(), length = 2, direction = -1, valueFormat = 'YYYY-MM') {
  let months = [];
  let currentDate = new Date(date);

  if (direction === -1) {
    currentDate.setMonth(currentDate.getMonth() - length);
  } else if (direction === 1) {
    currentDate.setMonth(currentDate.getMonth());
  } else {
    let _length = length
    length = _length * 2
    currentDate.setMonth(currentDate.getMonth() - _length);
  }

  for (let i = 0; i <= length; i++) {
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    months.push(format(new Date(year + '-' + (month < 10 ? '0' : '') + month), valueFormat));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
}

/**
 * 根据指定时间获得该季度的开始月份
 * @param {(Date|string|number)} [date=new Date()] 时间 Date|‘2022-12-20’| 时间戳
 * @param {string} [valueFormat='YYYY-MM'] 返回值格式
 * @returns {string} 月份
 */
const getStartMonthOfQuarter = function (date = new Date(), valueFormat = 'YYYY-MM') {
  if (!isDate(date)) {
    date = new Date(date);
  }
  let month = date.getMonth();
  let quarter = Math.floor(month / 3) * 3; // 计算所在季度
  let d = new Date(date.getFullYear(), quarter, 1); // 返回开始月份
  return format(d, valueFormat)
};

// --------------------------------------------
/**
 * 获取某个日期是当年中的第几天
 * @param {(Date|String)} [date=new Date()]  时间,默认当前时间
 * @returns {number} 返回第几天
 */
const getDayOfYear = function (date = new Date()) {
  if (!isDate(date)) {
    date = new Date(date)
  }
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

/**
 * 获取某个日期在这一年的第几周
 * @param {(Date|String)} [date=new Date()] 时间,默认当前时间
 * @returns {number} 返回第几周
 */
const getWeekOfYear = function (date = new Date()) {
  if (!isDate(date)) {
    date = new Date(date)
  }
  let days = getDayOfYear(date);
  return Math.ceil(days / 7);
};

class VenDate {
  constructor(date) {
    // let nowDate;
    // if (typeof date === "string") {
    //   nowDate = new Date(date.replaceAll("-","/"));
    // } else {
    //   nowDate = new Date();
    // }
    this.nowDate = date || new Date();
    this.year = this.nowDate.getFullYear();
    this.month = this.nowDate.getMonth();
    this.day = this.nowDate.getDate();
    this.week = this.nowDate.getDay(); // 返回一周（0~6）的某一天的数字 ,星期天为 0, 星期一为 1, 以此类推
  }

  /**
   * 根据日期获取本周、上周、下周的开始日期
   * @param {number} [type=0] 类型 -1:上周  0:本周(默认)  1:下周
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 周开始日期
   */
  getStartOfWeek(type, valueFormat = 'YYYY-MM-DD') {
    let nowDate = this.nowDate;
    let week = this.week === 0 ? 7 : this.week;
    let timestamp, days;
    if (type === -1) {
      days = -(7 + week - 1);
    }
    if (type === 0) {
      days = -(week - 1);
    }
    if (type === 1) {
      days = 7 - week + 1;
    }
    timestamp = 1000 * 60 * 60 * 24 * days;
    nowDate.setTime(nowDate.getTime() + timestamp);
    return format(nowDate, valueFormat);
  }

  /**
   * 根据日期获得本周、上周、下周的结束日期
   * @param {number} [type=0] -1:上周  0:本周(默认)  1:下周
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 周结束日期
   */
  getEndOfWeek(type, valueFormat = 'YYYY-MM-DD') {
    let nowDate = this.nowDate;
    let week = this.week === 0 ? 7 : this.week;
    let timestamp, days;
    if (type === -1) {
      days = -week;
    }
    if (type === 0) {
      days = 7 - week;
    }
    if (type === 1) {
      days = 7 - week + 7;
    }
    timestamp = 1000 * 60 * 60 * 24 * days;
    nowDate.setTime(nowDate.getTime() + timestamp);
    return format(nowDate, valueFormat);
  }

  // --------------------------------------------

  /**
   * 根据日期获得本月、上月、下月开始日期
   * @param {number} [type=0] -1:上月  0:本月(默认)  1:下月
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 月开始日期
   */
  getStartOfMonth(type, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;
    let month = this.month;
    if (type === -1) {
      if (month === 0) {
        year = year - 1;
        month = 11;
      }
    }
    if (type === 1) {
      if (month === 11) {
        year = year + 1;
        month = 0;
      } else {
        month = month + 1;
      }
    }
    return format(new Date(year, month, 1), valueFormat);
  }

  /**
   * 根据日期获得本月、上月、下月结束日期
   * @param {number} [type=0] -1:上月  0:本月(默认)  1:下月
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 月结束日期
   */
  getEndOfMonth(type, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;
    let month = this.month;
    if (type === -1) {
      if (month === 0) {
        year = year - 1;
        month = 11;
      }
    }
    if (type === 1) {
      if (month === 11) {
        year = year + 1;
        month = 0;
      } else {
        month = month + 1;
      }
    }
    return format(new Date(year, month, getDaysInMonth(`${year}-${month + 1}`)), valueFormat);
  }

  /**
   * 根据日期获取本季度、上季度、下季度的开始日期
   * @param {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 日期
   */
  getStartOfQuarter(type, valueFormat = 'YYYY-MM-DD') {
    if (type === -1) {
      this.nowDate.setMonth(this.month - 3)
    }
    if (type === 1) {
      this.nowDate.setMonth(this.month + 3)
    }
    let currentQuarterStartMonth = getStartMonthOfQuarter(this.nowDate);

    let year = new Date(currentQuarterStartMonth).getFullYear();
    let month = new Date(currentQuarterStartMonth).getMonth();
    return format(new Date(year, month, 1), valueFormat);
  }

  /**
   * 根据日期获取本季度、上季度、下季度的结束日期
   * @param {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 日期
   */
  getEndOfQuarter(type, valueFormat = 'YYYY-MM-DD') {
    if (type === -1) {
      this.nowDate.setMonth(this.month - 3)
    }
    if (type === 1) {
      this.nowDate.setMonth(this.month + 3)
    }
    let currentQuarterStartMonth = getStartMonthOfQuarter(this.nowDate);

    let year = new Date(currentQuarterStartMonth).getFullYear();
    let month = new Date(currentQuarterStartMonth).getMonth();
    return format(new Date(year, month, getDaysInMonth(currentQuarterStartMonth)), valueFormat);
  }

  /**
   * 根据日期获取本年、上年、下年的开始日期
   * @param {number} [type=0] -1:上年  0:本年(默认)  1:下年
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 日期
   */
  getStartOfYear(type, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;
    if (type === -1) {
      year = year - 1;
    }
    if (type === 1) {
      year = year + 1;
    }
    let currentYearFirstDate = new Date(year, 0, 1);
    return format(currentYearFirstDate, valueFormat);
  }

  /**
   * 根据日期获取本年、上年、下年的结束日期
   * @param {number} [type=0] -1:上年  0:本年(默认)  1:下年
   * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
   * @returns {string} 日期
   */
  getEndOfYear(type, valueFormat = 'YYYY-MM-DD') {
    let year = this.year;
    if (type === -1) {
      year = year - 1;
    }
    if (type === 1) {
      year = year + 1;
    }
    let currentYearFirstDate = new Date(
        year,
        11,
        getDaysInMonth(`${year}/12`)
    );
    return format(currentYearFirstDate, valueFormat);
  }
}

/**
 * 根据日期获取本周、上周、下周的开始日期
 * @param {(Date|String)} [date=new Date()] 日期对象或日期格式字符串
 * @param {number} [type=0] 类型 -1:上周  0:本周(默认)  1:下周
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 周开始日期
 */
const getStartOfWeek = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getStartOfWeek(type, valueFormat);
};

/**
 * 根据日期获得本周、上周、下周的结束日期
 * @param {(Date|String)} [date=new Date()] 日期对象或日期格式字符串
 * @param {number} [type=0] -1:上周  0:本周(默认)  1:下周
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 周结束日期
 */
const getEndOfWeek = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getEndOfWeek(type, valueFormat);
};

/**
 * 根据日期获得本月、上月、下月开始日期
 * @param {(Date|String)} [date=new Date()] 时间,默认当前时间
 * @param {number} [type=0] -1:上月  0:本月(默认)  1:下月
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 月开始日期
 */
const getStartOfMonth = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getStartOfMonth(type, valueFormat);
};

/**
 * 根据日期获得本月、上月、下月结束日期
 * @param {(Date|String)} [date=new Date()] 时间,默认当前时间
 * @param {number} [type=0] -1:上月  0:本月(默认)  1:下月
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 月结束日期
 */
const getEndOfMonth = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getEndOfMonth(type, valueFormat);
};

/**
 * 根据日期获取本季度、上季度、下季度的开始日期
 * @param {Date} [date=new Date()] 时间,默认当前时间
 * @param {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 日期
 */
const getStartOfQuarter = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getStartOfQuarter(type, valueFormat);
};

/**
 * 根据日期获取本季度、上季度、下季度的结束日期
 * @param {Date} [date=new Date()] 时间,默认当前时间
 * @param {number} [type=0] -1:上季度  0:本季度(默认)  1:下季度
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 日期
 */
const getEndOfQuarter = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getEndOfQuarter(type, valueFormat);
};

/**
 * 根据日期获取本年、上年、下年的开始日期
 * @param {Date} [date=new Date()] 时间,默认当前时间
 * @param {number} [type=0] -1:上年  0:本年(默认)  1:下年
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 日期
 */
const getStartOfYear = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getStartOfYear(type, valueFormat);
};

/**
 * 根据日期获取本年、上年、下年的结束日期
 * @param {Date} [date=new Date()] 时间,默认当前时间
 * @param {number} [type=0] -1:上年  0:本年(默认)  1:下年
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 日期
 */
const getEndOfYear = function (date = new Date(), type = 0, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  return new VenDate(date).getEndOfYear(type, valueFormat);
};


/**
 * 获取指定日期的前几天或者后几天
 * @param {Date} [date=new Date()] 时间,默认当前时间
 * @param {number} [len=1] 天数长度, 1：近一天(默认) 3：近三天 7：近7天，30：近30天
 * @param {string} [valueFormat="YYYY-MM-DD"] 返回的日期格式
 * @returns {string} 日期
 */
const getBeforeDate = function (date = new Date(), len = 1, valueFormat = "YYYY-MM-DD") {
  if (!isDate(date)) {
    date = new Date(date);
  }
  const oneDay = 24 * 60 * 60 * 1000;
  const targetDay = new Date(date.getTime() - oneDay * len);
  return format(targetDay, valueFormat);
}

/**
 * 获取两个日期之间的所有日期
 * @param {*} startDate 开始日期
 * @param {*} endDate 结束日期
 * @param valueFormat
 * @returns {*[]} 日期数组
 * @version 1.1.0-beta.10
 */
const getDatesBetween = function (startDate = new Date(), endDate = new Date(), valueFormat = "YYYY-MM-DD") {
  let dates = []
  let startTime, endTime;
  if (!isDate(startDate)) {
    startDate = new Date(startDate);
  }
  if (!isDate(endDate)) {
    endDate = new Date(endDate);
  }
  startTime = new Date(format(startDate, 'YYYY-MM-DD'))
  endTime = new Date(format(endDate, 'YYYY-MM-DD'))
  while (startTime <= endTime) {
    dates.push(format(startTime, valueFormat))
    startTime.setDate(startTime.getDate() + 1)
  }
  return dates
}


export {
  format,
  timeAgo,
  getTimeSlotByStep,
  sToHms,

  getDaysFromDate,
  getDaysInMonth,
  getDaysInYear,

  getMonthsFromDate,
  getStartMonthOfQuarter,
  getDayOfYear,
  getWeekOfYear,

  getStartOfWeek,
  getEndOfWeek,

  getStartOfMonth,
  getEndOfMonth,

  getStartOfQuarter,
  getEndOfQuarter,

  getStartOfYear,
  getEndOfYear,

  getBeforeDate,
  getDatesBetween
}
