
// string.d.ts

/**
 * 字符串脱敏处理
 * @param str - 需要脱敏的字符串
 * @param options - 脱敏选项
 * @returns 已脱敏字符串，如果输入为空则返回原值
 */
export function desens(str: string, options?: {
  /** 脱敏字符 */
  char?: string;
  /** 脱敏起始位置（包含） */
  startIndex?: number;
  /** 脱敏结束位置（不包含） */
  endIndex?: number;
}): string;

/**
 * 去除字符串中前后指定字符
 * @param str - 去除字符的字符串
 * @param chars - 去除的字符（默认为空格）
 * @returns 已去前后除字符的字符串
 */
export function trim(str: string, chars?: string): string;

/**
 * 去除字符串中所有指定字符
 * @param str 需要去除字符的字符串
 * @param chars 需要去除的字符（默认为空格）
 * @returns 已去除指定字符的字符串
 */
export function trimAll(str: string, chars?: string): string;

/**
 * 去除字符串中末尾空格或指定字符
 * @param str 需要去除字符的字符串
 * @param chars 需要去除的字符（默认为空格）
 * @returns 已去除末尾指定字符的字符串
 */
export function trimEnd(str: string, chars?: string): string;

/**
 * 去除字符串中开头空格或指定字符
 * @param str - 需要去除字符的字符串
 * @param chars - 需要去除的字符（默认为空格）
 * @returns 已去除开头指定字符的字符串
 */
export function trimStart(str: string, chars?: string): string;

/**
 * 将整个字符串字符转换为大写形式
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
export function toUpperCase(str: string): string;

/**
 * 将字符串首个字符转大写
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
export function toUpperCaseFirst(str: string): string;

/**
 * 将整个字符串字符转换为小写形式
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
export function toLowerCase(str: string): string;

/**
 * 将字符串首个字符转小写
 * @param str - 要转换的字符串
 * @returns 返回转换后的字符串
 */
export function toLowerCaseFirst(str: string): string;

/**
 * 生成随机验证码
 * @param length - 验证码长度
 * @param checkCode - 需要避免重复的验证码
 * @param charset 字符集
 * @returns 生成的随机验证码
 */
export function randomCode(length?: number, checkCode?: string, charset?: string): string;

/**
 * 查找子字符串在字符串中出现的次数
 * @param str - 主字符串
 * @param key - 要查找的子字符串
 * @returns 出现次数
 */
export function countInString(str: string, key: string): number;

/**
 * 在字符串开头填充指定字符，使字符串达到指定长度
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param chars - 填充字符
 * @returns 返回填充后的字符串
 */
export function padStart(str: string, length?: number, chars?: string): string;

/**
 * 在字符串结尾填充指定字符，使字符串达到指定长度
 * @param str - 要填充的字符串
 * @param length - 目标长度
 * @param chars - 填充字符
 * @returns 返回填充后的字符串
 */
export function padEnd(str: string, length?: number, chars?: string): string;

/**
 * 判断字符串是否为"数字+单位"格式
 * 支持常见的CSS单位、度量单位等，可通过自定义单位列表扩展
 * @param str - 待检测的字符串
 * @param customUnits - 自定义单位列表
 * @returns 是否为数字加单位格式
 */
export function hasUnit(str: string, customUnits?: string[]): boolean;

/**
 * 去除字符串中的单位，仅保留数字部分
 * 支持去除各种常见单位（CSS单位、度量单位等）
 * @param str - 包含单位的字符串
 * @param customUnits - 自定义单位列表
 * @returns 去除单位后的字符串（仅保留数字部分）
 */
export function removeUnit(str: string, customUnits?: string[]): string;

/**
 * 驼峰命名转短横线命名（kebab-case）
 * 将驼峰格式字符串转换为短横线分隔格式
 * @param str - 需要转换的驼峰格式字符串
 * @param separator - 分隔符，默认为短横线
 * @returns 转换后的短横线分隔字符串
 */
export function camelToKebab(str: string, separator?: string): string;

/**
 * 短横线命名转驼峰命名（camelCase）
 * 将短横线分隔格式字符串转换为驼峰格式
 * @param str - 需要转换的短横线分隔字符串
 * @returns 转换后的驼峰格式字符串
 */
export function kebabToCamel(str: string): string;
