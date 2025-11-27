// math.d.ts

/**
 * 获取数字的小数位数
 * @param num - 数字
 * @returns 小数位数
 */
export declare const getDecimalLength: (num: number) => number;

/**
 * 两个数相加
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相加后的数字
 */
export declare const add: (a: number, b: number) => number;

/**
 * 两个数相减
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相减后的数字
 */
export declare const subtract: (a: number, b: number) => number;

/**
 * 两个数相乘
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相乘后的数字
 */
export declare const multiply: (a: number, b: number) => number;

/**
 * 两个数相除
 * @param a - 第一个数
 * @param b - 第二个数
 * @returns 相除后的数字
 */
export declare const divide: (a: number, b: number) => number;

/**
 * 数组求和
 * @param arr - 数组
 * @returns 和
 */
export declare const sum: (arr: number[]) => number;

/**
 * 求数组中数值平均值
 * @param arr - 数组
 * @returns 平均值
 */
export declare const average: (arr: number[]) => number;

/**
 * 向上取整
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 向上取整后的数字
 */
export declare const ceil: (num?: number, precision?: number) => number;

/**
 * 向下取整
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 向下取整后的数字
 */
export declare const floor: (num?: number, precision?: number) => number;

/**
 * 保留小数点后几位，不考虑四舍五入
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 保留小数点后几位的数字
 */
export declare const decimal: (num?: number, precision?: number) => number;

/**
 * 保留小数点后几位，四舍五入
 * @param num - 数值，默认为0
 * @param precision - 保留小数位数，默认为0
 * @returns 保留小数点后几位的数字
 */
export declare const round: (num?: number, precision?: number) => number;
