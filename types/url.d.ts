// url.d.ts

/**
 * 解析 URL 并提取查询参数
 * @param url - 要解析的 URL 地址，默认为当前页面 URL
 * @param key - 可选，要获取的特定参数名，如果不提供则返回所有参数
 * @returns 如果提供了 key 则返回对应参数值，否则返回包含所有查询参数的对象
 */
export function getUrlParams(url?: string, key?: string): Record<string, string> | string | undefined;

/**
 * 将对象转换为 URL 查询参数字符串
 * @param obj - 包含查询参数的键值对对象
 * @returns 格式化后的 URL 查询参数字符串
 */
export function toUrlParams(obj: Record<string, any>): string;

/**
 * 从 URL 中删除指定的查询参数
 * @param url - 需要处理的 URL 地址
 * @param name - 要删除的参数名
 * @returns 删除指定参数后的新 URL 地址
 */
export function removeUrlParam(url: string, name: string): string;
