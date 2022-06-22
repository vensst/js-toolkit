/**
 * 格式化日期
 * @param time {Date|string|number}  时间戳或日期对象
 * @param format {string}  格式
 * @returns {string} 格式 'Y-M-D h:m:s' (default)
 * @examples formatTime('2018-1-29', 'Y/M/D h:m:s') // -> 2018/01/29 00:00:00
 */
import {arrRemoveRepeat} from "./arr";

export const formatDate = function (time, format = 'Y-M-D h:m:s') {
  if (arguments.length === 0 || !time) {
    return null
  }
  let date;
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  const time_str = format.replace(/([YMDhmsw])+/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'w') {
      return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][value]
    }
    return value.toString().padStart(2, '0') //M、D、h、m、s不足2位补0
  })
  return time_str
}

/**
 * 根据步长获取时间间隔
 * @param step {number} 间隔 单位分钟
 * @returns {*[]} 时间间隔数组
 */
export const getTimeSlot = function (step) {   //  step = 间隔的分钟
  let date = new Date()
  date.setHours(0o0)    // 时分秒设置从零点开始
  date.setSeconds(0o0)
  date.setUTCMinutes(0o0)
  let arr = [], timeArr = [];
  let slotNum = 24 * 60 / step   // 算出多少个间隔
  for (let f = 0; f < slotNum; f++) {   //  stepM * f = 24H*60M
    // arr.push(new Date(Number(date.getTime()) + Number(step*60*1000*f)))   //  标准时间数组
    let time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f))  // 获取：零点的时间 + 每次递增的时间
    let hour = '', sec = '';
    time.getHours() < 10 ? hour = '0' + time.getHours() : hour = time.getHours()  // 获取小时
    time.getMinutes() < 10 ? sec = '0' + time.getMinutes() : sec = time.getMinutes()   // 获取分钟
    timeArr.push(hour + ':' + sec)
  }
  return timeArr
}

/**
 * 秒 转 时分秒
 * @param s {number} 秒数
 * @param format {Array} 格式 ["h", "m", "s"]
 * @returns {string}
 */
export const formatHMS = function (s, format = ["h", "m", "s"]) {
  let str = '';
  if (s > 3600) {
    str = Math.floor(s / 3600) + format[0] + Math.floor(s % 3600 / 60) + format[1] + s % 60 + format[2]
  } else if (s > 60) {
    str = Math.floor(s / 60) + format[1] + s % 60 + format[2]
  } else {
    str = s % 60 + format[2]
  }
  return str
}

/**
 * 获取指定长度的天数集合
 * @param time {Date|string} 时间
 * @param len {number} 长度
 * @param dir  方向 1: 前几天;  2: 后几天;  3:前后几天 (默认)
 * @returns {*[]|string[]}
 */
export const getDays = function (time, len, dir) {
  let tt = new Date(time),
    getDay = function (day) {
      let t = new Date(time)
      t.setDate(t.getDate() + day)
      let m = t.getMonth() + 1
      return t.getFullYear() + '-' + m + '-' + t.getDate()
    },
    arr = []
  if (dir === 1) {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i))
    }
  } else if (dir === 2) {
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i))
    }
  } else {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i))
    }
    arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate())
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i))
    }
  }
  return dir === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) :
    dir === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr
}

/**
 * 获得某月天数
 * @param year {number} 年份
 * @param month {number} 月份
 * @returns {number} 天数
 */
export const getMonthOfDays = function (year, month) {
  let day;
  if (year && month) {
    day = new Date(year, month, 0); // 0 上个月的最后一天
  } else {
    day = new Date()
  }
  return day.getDate();
};

/**
 * 获取某年天数
 * @param time {number|string|Date} 年份或new Date()格式
 * @returns {number} 天数
 */
export const getYearOfDays = function (time) {
  let firstDayYear = this.getFirstDayOfYear(time);
  let lastDayYear = this.getLastDayOfYear(time);
  let numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

/**
 * 获取指定长度的月份集合
 * @param time {Date|string|number} 时间
 * @param len {number}  长度
 * @param dir {number}  1: 前几个月;  2: 后几个月;  3:前后几个月 (默认)
 * @returns {string[]|[]|any[]|*[]}
 */
export const getMonths = function (time, len, dir = 3) {
  let yy = new Date(time).getFullYear();
  let mm = new Date(time).getMonth();

  let arr = [];
  const monthPre = function () {
    let index = mm + 1;
    for (let i = 1; i <= len; i++) {
      index--;
      if (index < 0) {
        index = 11;
        yy--;
      }
      arr.unshift(yy + '-' + (index + 1))
    }
  }
  const monthNext = function () {
    let index = mm - 1;
    for (let i = 1; i <= len; i++) {
      index++;
      if (index > 11) {
        index = 0;
        yy++;
      }
      arr.push(yy + '-' + (index + 1))
    }
  }
  dir === 1 ? monthPre() : dir === 2 ? monthNext() : (monthPre(), monthNext(), arr = arrRemoveRepeat(arr))
  return arr
}

/**
 * 获得本季度的开始月份
 * @returns {number}
 */
export const getQuarterStartMonth = function (date) {
  let nowDate = date ? new Date(date) : new Date(); //当前日期
  let nowMonth = nowDate.getMonth() + 1; //当前月

  let quarterStartMonth = 0;
  if (nowMonth < 4) {
    quarterStartMonth = 1;
  }
  if (4 <= nowMonth && nowMonth < 7) {
    quarterStartMonth = 4;
  }
  if (7 <= nowMonth && nowMonth < 10) {
    quarterStartMonth = 7;
  }
  if (nowMonth >= 10) {
    quarterStartMonth = 10;
  }
  return quarterStartMonth;
};

/**
 * 获取某个日期是当年中的第几天
 * @param time {Date|String} 时间
 * @returns {number}
 */
export const getDayOfYear = function (time) {
  let firstDayYear = this.getFirstDayOfYear(time);
  let numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

/**
 * 获取某个日期在这一年的第几周
 * @param time {Date|String} 时间
 * @returns {number}
 */
export const getDayOfYearWeek = function (time) {
  let numdays = this.getDayOfYear(time);
  return Math.ceil(numdays / 7);
}


class VenDate {
  constructor() {
    // let nowDate;
    // if (typeof date === "string") {
    //   nowDate = new Date(date.replaceAll("-","/"));
    // } else {
    //   nowDate = new Date();
    // }
    this.nowDate = new Date()
    this.year = this.nowDate.getFullYear()
    this.month = this.nowDate.getMonth()
    this.day = this.nowDate.getDate()
    this.week = this.nowDate.getDay() // 返回一周（0~6）的某一天的数字 ,星期天为 0, 星期一为 1, 以此类推
  }

  // 获得本周、上周、下周的开始日期
  getWeekStartDate(type) {
    let nowDate = this.nowDate;
    let week = this.week === 0 ? 7 : this.week;
    let timestamp, days;
    if (type === -1) {
      days = -(7 + week - 1)
    }
    if (type === 0) {
      days = -(week - 1)
    }
    if (type === 1) {
      days = 7 - week + 1
    }
    timestamp = 1000 * 60 * 60 * 24 * days
    nowDate.setTime(nowDate.getTime() + timestamp)
    return formatDate(nowDate, 'Y-M-D');
  }

  //获得本周、上周、下周的结束日期
  getWeekEndDate(type) {
    let nowDate = this.nowDate;
    let week = this.week === 0 ? 7 : this.week;
    let timestamp, days;
    if (type === -1) {
      days = -week
    }
    if (type === 0) {
      days = 7 - week
    }
    if (type === 1) {
      days = 7 - week + 7
    }
    timestamp = 1000 * 60 * 60 * 24 * days
    nowDate.setTime(nowDate.getTime() + timestamp)
    return formatDate(nowDate, 'Y-M-D');
  }

  // 获得本月的开始日期
  getMonthStartDate(y, m) {
    let year, month, monthStartDate;
    if (y && m) {
      year = y;
      month = m - 1
    } else {
      year = this.year;
      month = this.month
    }
    monthStartDate = new Date(year, month, 1);
    return formatDate(monthStartDate, 'Y-M-D');
  }

  // 获得本月的结束日期
  getMonthEndDate(y, m) {
    let year, month, monthEndDate
    if (y && m) {
      year = y;
      month = m - 1
    } else {
      year = this.year;
      month = this.month
    }
    monthEndDate = new Date(year, month, getMonthOfDays(year, month + 1));
    return formatDate(monthEndDate, 'Y-M-D');
  }

  // 获得本季度的开始日期
  getQuarterStartDate() {
    // 季度开始月份
    let quarterStartMonth = getQuarterStartMonth();
    let date = new Date(this.year, quarterStartMonth - 1, 1)
    return formatDate(date, "Y-M-D")
  }

  // 获得本季度的结束日期
  getQuarterEndDate() {
    let quarterStartMonth = getQuarterStartMonth()
    let date = new Date(this.year, quarterStartMonth + 1, getMonthOfDays(this.year, this.month + 1))
    return formatDate(date, "Y-M-D")
  }

  // 获得本年的开始日期
  getYearStartDate() {
    let currentYearFirstDate = new Date(this.year, 0, 1);
    return formatDate(currentYearFirstDate, "Y-M-D");
  }

  // 获得本年的开始日期
  getYearEndDate() {
    let currentYearFirstDate = new Date(this.year, 11, getMonthOfDays(this.year, 12));
    return formatDate(currentYearFirstDate, "Y-M-D");
  }
}

/**
 * 获得本周、上周、下周的开始日期
 * @param type type {number} -1:上周  0:本周(默认)  1:下周
 * @returns {string}
 */
export const getWeekStartDate = function (type = 0) {
  return new VenDate().getWeekStartDate(type)
};

/**
 * 获得本周、上周、下周的结束日期
 * @param type {number} -1:上周  0:本周(default)  1:下周
 */
export const getWeekEndDate = function (type = 0) {
  return new VenDate().getWeekEndDate(type)
};

/**
 * 获得本月或指定月份的开始日期
 * @param y {string|number} 年
 * @param m {string|number} 月
 * @returns {string}
 */
export const getMonthStartDate = function (y, m) {
  return new VenDate().getMonthStartDate(y, m)
};

/**
 * 获得本月或指定月份的结束日期
 * @param y {string|number} 年
 * @param m {string|number} 月
 * @returns {string}
 */
export const getMonthEndDate = function (y, m) {
  return new VenDate().getMonthEndDate(y, m)
};

/**
 * 获得本季度的开始日期
 * @returns {string}
 */
export const getQuarterStartDate = function () {
  return new VenDate().getQuarterStartDate()
};

/**
 * 获得本季度的结束日期
 * @returns {string}
 */
export const getQuarterEndDate = function () {
  return new VenDate().getQuarterEndDate()
};

/**
 * 获得本年的开始日期
 * @returns {string}
 */
export const getYearStartDate = function () {
  return new VenDate().getYearStartDate()
};

/**
 * 获得本年的结束日期
 * @returns {string}
 */
export const getYearEndDate = function () {
  return new VenDate().getYearEndDate()
};

/**
 *
 * @param year {string|number} 年份
 * @param type {number} 类型 -1：第一天,1：最后一天
 * @returns {string}
 */
export const getFirstOrLastDayOfYear = function (year, type = -1) {
  year = year || new Date().getFullYear()
  if (type === -1) {
    return year + "-01-01";
  }
  if (type === 1) {
    let endDay = this.getMonthOfDays(year, 12);
    return year + "-12-" + endDay;
  }
}

/**
 * 月份补零
 * @param month {string|number}
 * @returns {string}
 */
export const doHandleMonth = function (month) {
  let m = month;
  if (month.toString().length === 1) {
    m = "0" + month;
  }
  return m;
}

/**
 * 获取近三天、近一周、近一个月日期（包含当天）
 * @param len {number} 天数 1：当天 默认 3：近三天 7：近7天，30：近30天
 * @returns {string} 2022-02-22
 */
export function getBeforeDate(len = 1) {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1; //0-11表示1-12月
  let day = today.getDate();
  let monthTotalDay = new Date(year, month, 0).getDate();
  let d;
  if (day === monthTotalDay) {
    return year + "-" + month + "-01";
  }
  if (len === 30) {
    d = -(monthTotalDay - 1);
  } else {
    d = -(len - 1);
  }

  let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * d;
  today.setTime(targetday_milliseconds); //注意，这行是关键代码
  let tYear = today.getFullYear();
  let tMonth = today.getMonth();
  let tDay = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDay = doHandleMonth(tDay);
  return tYear + "-" + tMonth + "-" + tDay;
}

