// number.d.ts
/**
 * 根据区间获取随机数
 * @param min - 最小值（包含）
 * @param max - 最大值（不包含）
 * @param floating - 是否返回浮点数
 * @returns 随机数，参数无效时返回undefined
 */
export function random(min?: number | string, max?: number | string, floating?: boolean): number | undefined;

/**
 * 判断数字是否在区间内
 * @param num - 要判断的数字
 * @param min - 最小值（不包含）
 * @param max - 最大值（不包含）
 * @returns 是否在区间内
 */
export function inRange(num: number, min: number, max: number): boolean;

/**
 * 将数字转成中文大写
 * @param num - 要转换的数字
 * @returns 中文大写表示，参数无效时返回undefined
 */
export function toChinese(num: number | string): string | undefined;

/**
 * 将数字金额转为中文大写金额
 * @param num - 要转换的金额
 * @returns 中文大写金额表示
 */
export function toCny(num: number | string): string;

/**
 * 将数字千分位分割
 * @param num - 要格式化的数字
 * @returns 千分位分割后的字符串，参数无效时返回undefined
 */
export function thousandSeparator(num: number | string): string | undefined;

/**
 * 数字格式化（支持科学计数法单位）
 * @param num - 要格式化的数字
 * @param digits - 保留小数位数
 * @returns 格式化后的字符串
 */
export function scientificFormatter(num: number, digits?: number): string;
