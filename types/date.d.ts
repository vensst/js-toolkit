/**
 * 格式化日期
 * @param date - 时间戳或日期对象，支持字符串、10位或13位时间戳
 * @param valueFormat - 格式字符串
 * @returns 格式化后的日期字符串，如果输入无效日期则返回 null
 */
export function formatDate(
  date?: Date | string | number,
  valueFormat?: string
): string | null;

export enum RangeDirection {
  /**
   * 前几天
   */
  PREV = -1,
  /**
   * 前后几天
   */
  CURRENT = 0,
  /**
   * 后几天
   */
  NEXT = 1,
}
/**
 * 根据指定日期获取指定范围的日期集合
 * @param date - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param len - 范围长度（天数）
 * @param dir - 方向：-1 取基准日期之前的 [len] 天，0 取基准日期前后各 [len] 天，1 取基准日期之后的 [len] 天
 * @param valueFormat - 日期格式
 * @returns 日期集合，按时间顺序排列
 */
export function getDateRange(
  date?: Date | string | number,
  len?: number,
  dir?: RangeDirection,
  valueFormat?: string
): string[];

/**
 * 获取指定日期所在月份的总天数
 * @param date - 日期对象、日期字符串或时间戳
 * @returns 指定月份的总天数（28-31之间）
 */
export function getDaysInMonth(date?: Date | string | number): number;

/**
 * 获取指定年份的总天数
 * @param year - 年份
 * @returns 指定年份的总天数（365或366天）
 */
export function getDaysInYear(year?: Date | number | string): number;

/**
 * 根据指定日期获取指定范围的日期集合
 * @param date - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param length - 要获取的月份数量
 * @param dir - 方向：-1 获取之前的月份(默认)，0 获取前后月份，1 获取之后的月份
 * @param valueFormat - 返回的日期格式
 * @returns 月份集合，按时间顺序排列
 */
export function getMonthsRange(
  date?: Date | string | number,
  length?: number,
  dir?: RangeDirection,
  valueFormat?: string
): string[];

/**
 * 获取指定日期所在季度的开始月份
 * @param date - 日期对象、日期字符串或时间戳
 * @param valueFormat - 返回的日期格式
 * @returns 季度开始月份
 */
export function getStartMonthOfQuarter(
  date?: Date | string | number,
  valueFormat?: string
): string;

/**
 * 获取指定日期是当年中的第几天
 * @param date - 日期对象、日期字符串或时间戳
 * @returns 日期在年中的天数索引（1-366）
 */
export function getDayOfYear(date?: Date | string | number): number;

/**
 * 获取指定日期在年中的周数（自然周）
 * @param date - 日期对象、日期字符串或时间戳
 * @returns 日期在年中的周数（1-53）
 */
export function getWeekOfYear(date?: Date | string | number): number;

/**
 * 根据日期获取本周、上周、下周的开始日期（周一为一周开始）
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上周  0:本周(默认)  1:下周
 * @param valueFormat - 返回的日期格式
 * @returns 周开始日期（周一）
 */
export function getStartOfWeek(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获得本周、上周、下周的结束日期（周日为一周结束）
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上周  0:本周(默认)  1:下周
 * @param valueFormat - 返回的日期格式
 * @returns 周结束日期（周日）
 */
export function getEndOfWeek(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获得本月、上月、下月开始日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上月  0:本月(默认)  1:下月
 * @param valueFormat - 返回的日期格式
 * @returns 月开始日期
 */
export function getStartOfMonth(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获得本月、上月、下月结束日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上月  0:本月(默认)  1:下月
 * @param valueFormat - 返回的日期格式
 * @returns 月结束日期
 */
export function getEndOfMonth(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本季度、上季度、下季度的开始日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
 * @param valueFormat - 返回的日期格式
 * @returns 季度开始日期
 */
export function getStartOfQuarter(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本季度、上季度、下季度的结束日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
 * @param valueFormat - 返回的日期格式
 * @returns 季度结束日期
 */
export function getEndOfQuarter(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本年、上年、下年的开始日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上年  0:本年(默认)  1:下年
 * @param valueFormat - 返回的日期格式
 * @returns 年开始日期
 */
export function getStartOfYear(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 根据日期获取本年、上年、下年的结束日期
 * @param date - 日期对象、日期字符串或时间戳
 * @param type - 类型 -1:上年  0:本年(默认)  1:下年
 * @param valueFormat - 返回的日期格式
 * @returns 年结束日期
 */
export function getEndOfYear(
  date?: Date | string | number,
  type?: RangeDirection,
  valueFormat?: string
): string;

/**
 * 获取指定日期的前几天日期
 * @param date - 基准日期，可以是日期对象、日期字符串或时间戳
 * @param len - 要减去的天数，正数表示过去的日期，负数表示未来的日期
 * @param valueFormat - 返回的日期格式
 * @returns 格式化后的日期字符串
 */
export function getDateOffset(
  date?: Date | string | number,
  len?: number,
  valueFormat?: string
): string;

/**
 * 获取两个日期之间的所有日期（包含起始和结束日期）
 * @param startDate - 开始日期，可以是日期对象、日期字符串或时间戳
 * @param endDate - 结束日期，可以是日期对象、日期字符串或时间戳
 * @param valueFormat - 返回的日期格式
 * @returns 日期字符串数组，按时间顺序排列
 */
export function getDatesBetween(
  startDate?: Date | string | number,
  endDate?: Date | string | number,
  valueFormat?: string
): string[];

/**
 * 以前时间距离当前时间的时间差
 * @param date - 时间对象或时间戳
 * @param opt - 选项配置
 * @returns 时间差
 */
export function timeAgo(
  date?: Date | number | string,
  opt?: {
    year?: string;
    month?: string;
    week?: string;
    day?: string;
    hour?: string;
    minute?: string;
    second?: string;
    just?: string;
  }
): string;

/**
 * 根据步长获取时间间隔
 * @param step - 间隔 单位：分钟
 * @returns 时间间隔数组
 */
export function getTimeSlotByStep(step?: number): string[];

/**
 * 秒转时分秒格式
 * @param s - 秒数
 * @param valueFormat - 格式，可以自定义例如：["h", "m", "s"]
 * @returns 格式化后的时间字符串
 */
export function sToHms(s?: number, valueFormat?: string[]): string;

/**
 * 日期处理类，用于计算各种日期范围
 * 提供周、月、季度、年的开始和结束日期计算功能
 */
export class VenDate {
  /**
   * 创建 VenDate 实例
   * @param date - 日期对象、日期字符串或时间戳
   */
  constructor(date?: Date | string | number);

  nowDate: Date;
  year: number;
  month: number;
  day: number;
  week: number;

  /**
   * 根据日期获取本周、上周、下周的开始日期（周一为一周开始）
   * @param type - 类型 -1:上周  0:本周(默认)  1:下周
   * @param valueFormat - 返回的日期格式
   * @returns 周开始日期（周一）
   */
  getStartOfWeek(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获得本周、上周、下周的结束日期（周日为一周结束）
   * @param type - 类型 -1:上周  0:本周(默认)  1:下周
   * @param valueFormat - 返回的日期格式
   * @returns 周结束日期（周日）
   */
  getEndOfWeek(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获得本月、上月、下月开始日期
   * @param type - 类型 -1:上月  0:本月(默认)  1:下月
   * @param valueFormat - 返回的日期格式
   * @returns 月开始日期
   */
  getStartOfMonth(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获得本月、上月、下月结束日期
   * @param type - 类型 -1:上月  0:本月(默认)  1:下月
   * @param valueFormat - 返回的日期格式
   * @returns 月结束日期
   */
  getEndOfMonth(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本季度、上季度、下季度的开始日期
   * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
   * @param valueFormat - 返回的日期格式
   * @returns 季度开始日期
   */
  getStartOfQuarter(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本季度、上季度、下季度的结束日期
   * @param type - 类型 -1:上季度  0:本季度(默认)  1:下季度
   * @param valueFormat - 返回的日期格式
   * @returns 季度结束日期
   */
  getEndOfQuarter(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本年、上年、下年的开始日期
   * @param type - 类型 -1:上年  0:本年(默认)  1:下年
   * @param valueFormat - 返回的日期格式
   * @returns 年开始日期
   */
  getStartOfYear(type?: number, valueFormat?: string): string;

  /**
   * 根据日期获取本年、上年、下年的结束日期
   * @param type - 类型 -1:上年  0:本年(默认)  1:下年
   * @param valueFormat - 返回的日期格式
   * @returns 年结束日期
   */
  getEndOfYear(type?: number, valueFormat?: string): string;
}
