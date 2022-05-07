/*
 * 【日期】
 * */

/*
* @desc 格式化时间
* @param {Object|string|number} time 时间
* @param  {String} cFormat 格式
* @return {string | null} 字符串
* @examples formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
* */
export const formatTime = function (time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
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
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/*
* @desc 返回指定长度的月份集合
* @param  {Date/String} time 时间
* @param  {Number} len 长度
* @param  {Number} dir 方向：1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
* @return {Array} 数组
*
* @examples   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
* */
export const getMonths = function (time, len, dir) {
  let mm = new Date(time).getMonth(),
    yy = new Date(time).getFullYear(),
    direction = isNaN(dir) ? 3 : dir,
    index = mm;
  let cutMonth = function (index) {
    if (index <= len && index >= -len) {
      return direction === 1 ? formatPre(index).concat(cutMonth(++index)) :
        direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index))
    }
    return []
  }
  let formatNext = function (i) {
    let y = Math.floor(i / 12),
      m = i % 12
    return [yy + y + '-' + (m + 1)]
  }
  let formatPre = function (i) {
    let y = Math.ceil(i / 12),
      m = i % 12
    m = m === 0 ? 12 : m
    return [yy - y + '-' + (13 - m)]
  }
  let formatCurr = function (i) {
    let y = Math.floor(i / 12),
      yNext = Math.ceil(i / 12),
      m = i % 12,
      mNext = m === 0 ? 12 : m
    return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)]
  }
  // 数组去重
  let unique = function (arr) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr));
    } else {
      let n = {}, r = [];
      for (let i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    }
  }
  return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) {
    return new Date(t1).getTime() - new Date(t2).getTime()
  }))
}

/*
 * 返回指定长度的天数集合
 * @param  {Date/String} time 时间
 * @param  {Number} len 长度
 * @param  {Number} direction 方向：1: 前几天;  2: 后几天;  3:前后几天  默认 3
 * @return {Array} 数组
 *
 * @examples date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
* */
export const getDays = function (time, len, diretion) {
  let tt = new Date(time),
    getDay = function (day) {
      let t = new Date(time)
      t.setDate(t.getDate() + day)
      let m = t.getMonth() + 1
      return t.getFullYear() + '-' + m + '-' + t.getDate()
    },
    arr = []
  if (diretion === 1) {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i))
    }
  } else if (diretion === 2) {
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
  return diretion === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) :
    diretion === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr
}

/*
* @desc 秒转时分秒
* @param  {Number} s 秒数
* @return {String} 字符串
*
* @examples formatHMS(3610) // -> 1h0m10s
* */
export const formatHMS = function (s) {
  let str = '';
  if (s > 3600) {
    str = Math.floor(s / 3600) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's'
  } else if (s > 60) {
    str = Math.floor(s / 60) + 'm' + s % 60 + 's'
  } else {
    str = s % 60 + 's'
  }
  return str
}

/*
* @desc 获得某月的天数
* @param {String} year 年份
* @param {String} month 月份
* @return {Number} 天数
* */
export const getMonthOfDay = function (year, month) {
  let day;
  if (year && month) {
    day = new Date(year, month, 0);
  } else {
    day = new Date()
  }
  return day.getDate();
};

/*
* @desc 获取某年的第一天
* @param  {Date/String} time 时间
* @return {String}
* */
export const getFirstDayOfYear = function (time) {
  var year = new Date(time).getFullYear();
  return year + "-01-01 00:00:00";
}

/*
* @desc 获取某年最后一天
* @param  {Date/String} time 时间
* @return {String}
* */
export const getLastDayOfYear = function (time) {
  var year = new Date(time).getFullYear();
  var dateString = year + "-12-01 00:00:00";
  var endDay = this.getMonthOfDay(year, 12);
  return year + "-12-" + endDay + " 23:59:59";
}

/*
* @desc 获取某年有多少天
* @param  {Date/String} time 时间
* @return {String}
* */
export const getYearOfDay = function (time) {
  var firstDayYear = this.getFirstDayOfYear(time);
  var lastDayYear = this.getLastDayOfYear(time);
  var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

/*
* @desc 获取某个日期是当年中的第几天
* @param  {Date/String} time 时间
* @return {String}
* */
export const getDayOfYear = function (time) {
  var firstDayYear = this.getFirstDayOfYear(time);
  var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

/*
* @desc 获取某个日期在这一年的第几周
* @param  {Date/String} time 时间
* @return {String}
* */
export const getDayOfYearWeek = function (time) {
  var numdays = this.getDayOfYear(time);
  return Math.ceil(numdays / 7);
}

//获得本季度的开始月份
export const getQuarterStartMonth = function () {
  let now = new Date(); //当前日期
  let nowMonth = now.getMonth(); //当前月
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let quarterStartMonth = 0;
  if (nowMonth < 3) {
    quarterStartMonth = 0;
  }
  if (2 < nowMonth && nowMonth < 6) {
    quarterStartMonth = 3;
  }
  if (5 < nowMonth && nowMonth < 9) {
    quarterStartMonth = 6;
  }
  if (nowMonth > 8) {
    quarterStartMonth = 9;
  }
  return quarterStartMonth;
};

//获得本周的开始日期
export const getWeekStartDate = function () {
  let now = new Date(); //当前日期
  let nowDayOfWeek = now.getDay(); //今天本周的第几天
  let nowDay = now.getDate(); //当前日
  let nowMonth = now.getMonth(); //当前月
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
  return formatDate(weekStartDate);
};

//获得本周的结束日期
export const getWeekEndDate = function () {
  let now = new Date(); //当前日期
  let nowDayOfWeek = now.getDay(); //今天本周的第几天
  let nowDay = now.getDate(); //当前日
  let nowMonth = now.getMonth(); //当前月
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
  return formatDate(weekEndDate);
};

//获得本月的开始日期
export const getMonthStartDate = function () {
  let now = new Date(); //当前日期
  let nowMonth = now.getMonth(); //当前月
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let monthStartDate = new Date(nowYear, nowMonth, 1);
  return formatDate(monthStartDate);
};

//获得本月的结束日期
export const getMonthEndDate = function () {
  let now = new Date(); //当前日期
  let nowMonth = now.getMonth(); //当前月
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
  return formatDate(monthEndDate);
};

//获得本季度的开始日期
export const getQuarterStartDate = function () {
  let now = new Date(); //当前日期
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
  return formatDate(quarterStartDate);
};

//或的本季度的结束日期
export const getQuarterEndDate = function () {
  let now = new Date(); //当前日期
  let nowYear = now.getYear(); //当前年
  nowYear += nowYear < 2000 ? 1900 : 0; //
  let quarterEndMonth = getQuarterStartMonth() + 2;
  let quarterStartDate = new Date(
    nowYear,
    quarterEndMonth,
    getMonthDays(quarterEndMonth)
  );
  return formatDate(quarterStartDate);
};

//获得本年的开始日期
export const getYearStartDate = function () {
  let now = new Date(); //当前日期
  //获得当前年份4位年
  let currentYear = now.getFullYear();
  //本年第一天
  let currentYearFirstDate = new Date(currentYear, 0, 1);
  return formatDate(currentYearFirstDate);
};

//获得本年的结束日期
export const getYearEndDate = function () {
  let now = new Date(); //当前日期
  //获得当前年份4位年
  let currentYear = now.getFullYear();
  //本年最后
  let currentYearLastDate = new Date(currentYear, 11, 31);
  return formatDate(currentYearLastDate);
};

function doHandleMonth(month) {
  var m = month;
  if (month.toString().length == 1) {
    m = "0" + month;
  }
  return m;
}

/**
 * @desc 获取近三天、近一周、近一个月，日期
 * @param n
 * @returns {string}
 */
export function getBeforeDate(len) {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1; //0-11表示1-12月
  var day = today.getDate();
  var monthTotalDay = new Date(year, month, 0).getDate();
  let d;
  if (day === monthTotalDay) {
    return year + "-" + month + "-01";
  }
  if (len === 30) {
    d = -(monthTotalDay - 1);
  } else {
    d = -(len - 1);
  }

  var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * d;
  today.setTime(targetday_milliseconds); //注意，这行是关键代码
  var tYear = today.getFullYear();
  var tMonth = today.getMonth();
  var tDay = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDay = doHandleMonth(tDay);
  return tYear + "-" + tMonth + "-" + tDay;
}

/**
 * 获取时间间隔
 * @param step 间隔 单位分钟
 * @returns {*[]} 数组
 */
function getTimeSlot (step) {   //  step = 间隔的分钟
  let date = new Date()
  date.setHours(00)    // 时分秒设置从零点开始
  date.setSeconds(00)
  date.setUTCMinutes(00)
  let arr = [], timeArr = [];
  let slotNum = 24*60/step   // 算出多少个间隔
  for (let f = 0; f < slotNum; f++) {   //  stepM * f = 24H*60M
    // arr.push(new Date(Number(date.getTime()) + Number(step*60*1000*f)))   //  标准时间数组
    let time = new Date(Number(date.getTime()) + Number(step*60*1000*f))  // 获取：零点的时间 + 每次递增的时间
    let hour = '', sec = '';
    time.getHours() < 10 ? hour = '0' + time.getHours() : hour = time.getHours()  // 获取小时
    time.getMinutes() < 10 ? sec = '0' + time.getMinutes() : sec = time.getMinutes()   // 获取分钟
    timeArr.push(hour + ':' + sec)
  }
  return timeArr
}
