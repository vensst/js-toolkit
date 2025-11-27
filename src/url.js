import {isObject} from "./inspect";

/**
 * 解析 URL 并提取查询参数
 * @param {string} [url=window.location.href] - 要解析的 URL 地址，默认为当前页面 URL
 * @param {string} [key] - 可选，要获取的特定参数名，如果不提供则返回所有参数
 * @returns {Object|string|null} 如果提供了 key 则返回对应参数值，否则返回包含所有查询参数的对象
 */
export const getUrlParams = function (url, key) {
  try {
    // 如果没有提供 URL，则使用当前页面的 URL
    const targetUrl = url || window.location.href;

    // 创建 URL 对象来解析 URL
    const urlObj = new URL(targetUrl);

    // 如果提供了 key，直接返回对应参数值
    if (key) {
      return urlObj.searchParams.get(key);
    }

    // 将 URLSearchParams 转换为普通对象
    const params = {};
    for (const [paramKey, value] of urlObj.searchParams) {
      params[paramKey] = value;
    }

    return params;
  } catch (error) {
    // 如果 URL 格式不正确，返回适当的默认值
    console.warn('Invalid URL provided to getUrlParams:', url);
    return null;
  }
};

/**
 * 将对象转换为 URL 查询参数字符串
 * @param {Object} obj - 包含查询参数的键值对对象
 * @returns {string} 格式化后的 URL 查询参数字符串
 * @version 1.1.0-beta.11
 */
export const toUrlParams = function (obj) {
  if (!isObject(obj)) {
    return ''
  }
  const params = [];
  for (const [key, value] of Object.entries(obj)) {
    // 过滤掉 undefined 和 null 值
    if (value !== undefined && value !== null) {
      params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  }

  return params.join('&');
};

/**
 * 从 URL 中删除指定的查询参数
 * @param {string} url - 需要处理的 URL 地址
 * @param {string} name - 要删除的参数名
 * @returns {string} 删除指定参数后的新 URL 地址
 */
export const removeUrlParam = function (url, name) {
  try {
    // 创建 URL 对象来解析 URL
    const urlObj = new URL(url);

    // 删除指定参数
    urlObj.searchParams.delete(name);

    // 返回处理后的完整 URL
    return urlObj.toString();
  } catch (error) {
    // 如果 URL 格式不正确，返回原始 URL
    console.warn('Invalid URL provided to removeUrlParam:', url);
    return url;
  }
};
