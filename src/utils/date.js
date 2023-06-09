import dayjs from "dayjs";

/**
 * 格式化日期
 * @param {Date|string|number} time 时间戳或日期对象
 * @param {string} format 格式，年(YYYY) 月(MM) 日(DD) 时(hh) 分(mm) 秒(ss) 星期(WW), 默认: YYYY-MM-DD hh:mm:ss
 * @returns {string|null} 格式化后的日期
 * @example formatDate('2020-9-9','YYYY/M/D h:m:s WW') // -> 2020/9/9 0:0:0 星期三
 */
const formatDate = function (time = new Date(), format = "YYYY-MM-DD hh:mm:ss") {
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time);
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }

    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
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
  return format.replace(/(YYYY|MM|M|DD|D|hh|h|mm|m|ss|s|WW)+/g, (result, key) => {
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
 * 根据步长获取时间间隔
 * @param {number} step 间隔 单位：分钟
 * @returns {string[]} 时间间隔数组
 * @example getTimeSlot(30) // -> ["00:00", "00:30", "01:00", "01:30", ...]
 */
const getTimeSlot = function (step = 30) {
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
 * @param {number} s 秒数
 * @param {Array<string>} format 格式 默认：["时", "分", "秒"]，可以自定义例如：["h", "m "s"]
 * @returns {string} x时x分x秒
 */
const formatHMS = function (s = 0, format = ["时", "分", "秒"]) {
  let str = "";
  if (s > 3600) {
    str =
      Math.floor(s / 3600) +
      format[0] +
      Math.floor((s % 3600) / 60) +
      format[1] +
      (s % 60) +
      format[2];
  } else if (s > 60) {
    str = Math.floor(s / 60) + format[1] + (s % 60) + format[2];
  } else {
    str = (s % 60) + format[2];
  }
  return str;
};

/**
 * 根据指定时间获取指定长度的天数集合
 * @param {Date|string} time 时间
 * @param {number} len 长度
 * @param {number} dir  方向 1: 前几天;  2: 后几天;  3:前后几天 (默认)
 * @returns {string[]} 日期集合
 */
const getDays = function (time = new Date(), len = 2, dir = 3) {
  let tt = new Date(time),
    getDay = function (day) {
      let t = new Date(time);
      t.setDate(t.getDate() + day);
      let m = t.getMonth() + 1;
      return t.getFullYear() + "-" + m + "-" + t.getDate();
    },
    arr = [];
  if (dir === 1) {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
  } else if (dir === 2) {
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  } else {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
    arr.push(tt.getFullYear() + "-" + (tt.getMonth() + 1) + "-" + tt.getDate());
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  }
  return dir === 1
    ? arr.concat([
      tt.getFullYear() + "-" + (tt.getMonth() + 1) + "-" + tt.getDate(),
    ])
    : dir === 2
      ? [
        tt.getFullYear() + "-" + (tt.getMonth() + 1) + "-" + tt.getDate(),
      ].concat(arr)
      : arr;
};

/**
 * 获得某年某月天数
 * @param {number} year 年份
 * @param {number} month 月份
 * @returns {number} 天数
 */
const getMonthOfDays = function (year, month) {
  let day;
  if (year && month) {
    day = new Date(year, month, 0); // 0 上个月的最后一天
  } else {
    const date = new Date();
    day = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }
  return day.getDate();
};

/**
 * 获取某年天数
 * @param {number|string|Date}  time 年份或new Date()格式
 * @returns {number} 天数
 */
const getYearOfDays = function (time) {
  let firstDayYear = getFirstOrLastDayOfYear(time, -1);
  let lastDayYear = getFirstOrLastDayOfYear(time, 1);
  let numSecond =
    (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
};

/**
 * 根据指定时间获取指定长度的月份集合
 * @param {Date|string|number} time 时间
 * @param {number} len 长度
 * @param {number} dir 1: 前几个月;  2: 后几个月;  3:前后几个月 (默认)
 * @returns {string[]} 月份集合
 */
const getMonths = function (time = new Date(), len = 2, dir = 3) {
  let yy = new Date(time).getFullYear();
  let mm = new Date(time).getMonth();
  let arr = [];
  if (dir === 1) {
    for (let i = 0; i <= len; i++) {
      if (mm - i < 0) {
        arr.unshift(yy - 1 + "-" + (12 + mm - i + 1));
      } else {
        arr.unshift(yy + "-" + (mm - i + 1));
      }
    }
  } else if (dir === 2) {
    for (let i = 0; i <= len; i++) {
      if (mm + i > 11) {
        arr.push(yy + 1 + "-" + (mm + i + 1 - 12));
      } else {
        arr.push(yy + "-" + (mm + i + 1));
      }
    }
  } else {
    for (let i = 1; i <= len; i++) {
      if (mm - i < 0) {
        arr.unshift(yy - 1 + "-" + (12 + mm - i + 1));
      } else {
        arr.unshift(yy + "-" + (mm - i + 1));
      }
    }
    arr.push(yy + "-" + (mm + 1));
    for (let i = 1; i <= len; i++) {
      if (mm + i > 11) {
        arr.push(yy + 1 + "-" + (mm + i + 1 - 12));
      } else {
        arr.push(yy + "-" + (mm + i + 1));
      }
    }
  }

  return arr;
};

/**
 * 根据指定时间获得该季度的开始月份
 * @param {Date|string|number} date 时间 Date|‘2022-12-20’| 时间戳
 * @returns {number} 月份
 */
const getQuarterStartMonth = function (date = new Date()) {
  date = new Date(date);
  let month = date.getMonth();
  let quarter = Math.floor(month / 3) * 3; // 计算所在季度
  let d = new Date(date.getFullYear(), quarter, 1); // 返回开始月份
  return d.getMonth() + 1
};

/**
 * 获取某个日期是当年中的第几天
 * @param {Date|String} date  时间,默认当前时间
 * @returns {number} 天数
 */
const getDayOfYear = function (date = new Date()) {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let days = [31, new Date(year, 1, 29).getDate() === 29 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;
  for (let i = 0; i < month; i++) {
    sum += days[i];
  }
  sum += day;
  return sum;
};

/**
 * 获取某个日期在这一年的第几周
 * @param {Date|String} time 时间,默认当前时间
 * @returns {number} 周数
 */
const getDayOfYearWeek = function (time = new Date()) {
  let numdays = getDayOfYear(time);
  return Math.ceil(numdays / 7);
};

class VenDate {
  constructor() {
    // let nowDate;
    // if (typeof date === "string") {
    //   nowDate = new Date(date.replaceAll("-","/"));
    // } else {
    //   nowDate = new Date();
    // }
    this.nowDate = new Date();
    this.year = this.nowDate.getFullYear();
    this.month = this.nowDate.getMonth();
    this.day = this.nowDate.getDate();
    this.week = this.nowDate.getDay(); // 返回一周（0~6）的某一天的数字 ,星期天为 0, 星期一为 1, 以此类推
  }

  // 获得本周、上周、下周的开始日期
  getWeekStartDate(type) {
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
    return formatDate(nowDate, "YYYY-MM-DD");
  }

  //获得本周、上周、下周的结束日期
  getWeekEndDate(type) {
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
    return formatDate(nowDate, "YYYY-MM-DD");
  }

  // 获得本月的开始日期
  getMonthStartDate(y, m) {
    let year, month, monthStartDate;
    if (y && m) {
      year = y;
      month = m - 1;
    } else {
      year = this.year;
      month = this.month;
    }
    monthStartDate = new Date(year, month, 1);
    return formatDate(monthStartDate, "YYYY-MM-DD");
  }

  // 获得本月的结束日期
  getMonthEndDate(y, m) {
    let year, month, monthEndDate;
    if (y && m) {
      year = y;
      month = m - 1;
    } else {
      year = this.year;
      month = this.month;
    }
    monthEndDate = new Date(year, month, getMonthOfDays(year, month + 1));
    return formatDate(monthEndDate, "YYYY-MM-DD");
  }

  // 获得本季度的开始日期
  getQuarterStartDate() {
    // 季度开始月份
    let quarterStartMonth = getQuarterStartMonth();
    let date = new Date(this.year, quarterStartMonth - 1, 1);
    return formatDate(date, "YYYY-MM-DD");
  }

  // 获得本季度的结束日期
  getQuarterEndDate() {
    let quarterStartMonth = getQuarterStartMonth();
    let date = new Date(
      this.year,
      quarterStartMonth + 1,
      getMonthOfDays(this.year, this.month + 1)
    );
    return formatDate(date, "YYYY-MM-DD");
  }

  // 获得本年的开始日期
  getYearStartDate() {
    let currentYearFirstDate = new Date(this.year, 0, 1);
    return formatDate(currentYearFirstDate, "YYYY-MM-DD");
  }

  // 获得本年的开始日期
  getYearEndDate() {
    let currentYearFirstDate = new Date(
      this.year,
      11,
      getMonthOfDays(this.year, 12)
    );
    return formatDate(currentYearFirstDate, "YYYY-MM-DD");
  }
}

/**
 * 获得本周、上周、下周的开始日期
 * @param {number} type 类型 -1:上周  0:本周(默认)  1:下周
 * @returns {string} 日期
 */
const getWeekStartDate = function (type = 0) {
  return new VenDate().getWeekStartDate(type);
};

/**
 * 获得本周、上周、下周的结束日期
 * @param {number} type -1:上周  0:本周(default)  1:下周
 * @returns {string} 日期
 */
const getWeekEndDate = function (type = 0) {
  return new VenDate().getWeekEndDate(type);
};

/**
 * 获得本月或指定月份的开始日期
 * @param {string|number} y 年
 * @param {string|number} m 月
 * @returns {string} 日期
 */
const getMonthStartDate = function (y, m) {
  return new VenDate().getMonthStartDate(y, m);
};

/**
 * 获得本月或指定月份的结束日期
 * @param {string|number} y 年
 * @param {string|number} m 月
 * @returns {string} 日期
 */
const getMonthEndDate = function (y, m) {
  return new VenDate().getMonthEndDate(y, m);
};

/**
 * 获得本季度的开始日期
 * @returns {string} 日期
 */
const getQuarterStartDate = function () {
  return new VenDate().getQuarterStartDate();
};

/**
 * 获得本季度的结束日期
 * @returns {string} 日期
 */
const getQuarterEndDate = function () {
  return new VenDate().getQuarterEndDate();
};

/**
 * 获得本年的开始日期
 * @returns {string} 日期
 */
const getYearStartDate = function () {
  return new VenDate().getYearStartDate();
};

/**
 * 获得本年的结束日期
 * @returns {string} 日期
 */
const getYearEndDate = function () {
  return new VenDate().getYearEndDate();
};

/**
 * 获取指定年份的第一天或最后一天
 * @param {string|number} year 年份
 * @param {number} type 类型 -1：第一天,1：最后一天，默认：-1
 * @returns {string} 日期
 */
const getFirstOrLastDayOfYear = function (year, type = -1) {
  year = year || new Date().getFullYear();
  if (type === -1) {
    return year + "-01-01";
  }
  if (type === 1) {
    let endDay = getMonthOfDays(year, 12);
    return year + "-12-" + endDay;
  }
};

/**
 * 月份补零
 * @param {string|number} month 月份
 * @returns {string} 月份
 */
const doHandleMonth = function (month) {
  let m = month;
  if (month.toString().length === 1) {
    m = "0" + month;
  }
  return m;
};

/**
 * 获取近三天、近一周、近一个月日期（包含当天）
 * @param {number} len 天数, 1：当天 默认 3：近三天 7：近7天，30：近30天
 * @returns {string} 日期
 */
const getBeforeDate = function (len = 1) {
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

/**
 * 获取两个日期之间的所有日期
 * @param {*} startDate 开始日期
 * @param {*} endDate 结束日期
 * @returns {*[]} 日期数组
 * @version 1.1.0-beta.10
 */
const getDatesBetween = function (startDate, endDate) {
  let dates = []
  let currentDate = dayjs(startDate)
  let stopDate = dayjs(endDate)
  while (currentDate <= stopDate) {
    dates.push(dayjs(currentDate).format('YYYY-MM-DD'))
    currentDate = dayjs(currentDate).add(1, 'days')
  }
  return dates
}


export {
  formatDate,
  getTimeSlot,
  formatHMS,
  getDays,
  getMonthOfDays,
  getYearOfDays,
  getMonths,
  getQuarterStartMonth,
  getDayOfYear,
  getDayOfYearWeek,
  getWeekStartDate,
  getWeekEndDate,
  getMonthStartDate,
  getMonthEndDate,
  getQuarterStartDate,
  getQuarterEndDate,
  getYearStartDate,
  getYearEndDate,
  getFirstOrLastDayOfYear,
  doHandleMonth,
  getBeforeDate,
  getDatesBetween
}
