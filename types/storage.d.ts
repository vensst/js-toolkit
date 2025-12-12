// storage.d.ts

/**
 * Storage 处理器接口
 */
interface StorageHandler {
  /**
   * 设置存储项
   * @param key - 存储键名
   * @param val - 存储值
   */
  set(key: string, val: any): void;

  /**
   * 获取存储项
   * @param key - 存储键名
   * @returns 存储的值，如果不存在返回 null
   */
  get(key: string): any | null;

  /**
   * 移除存储项
   * @param key - 存储键名
   */
  remove(key: string): void;

  /**
   * 清空所有存储项
   */
  clear(): void;
}

/**
 * 创建 Storage 处理器
 * @param storage - Storage 实例 (localStorage 或 sessionStorage)
 * @returns StorageHandler 对象
 */
declare function createStorageHandler(storage: Storage): StorageHandler;

/**
 * Storage 方法接口
 */
interface StorageMethods {
  set: StorageHandler['set'];
  get: StorageHandler['get'];
  remove: StorageHandler['remove'];
  clear: StorageHandler['clear'];
}

/**
 * 创建 Storage 方法集合
 * @param storage - Storage 实例 (localStorage 或 sessionStorage)
 * @returns StorageMethods 对象
 */
declare function createStorageMethods(storage: Storage): StorageMethods;

/**
 * localStorage 相关方法
 */
export const setLocalStorage: StorageHandler['set'];
export const getLocalStorage: StorageHandler['get'];
export const removeLocalStorage: StorageHandler['remove'];
export const clearLocalStorage: StorageHandler['clear'];

/**
 * sessionStorage 相关方法
 */
export const setSessionStorage: StorageHandler['set'];
export const getSessionStorage: StorageHandler['get'];
export const removeSessionStorage: StorageHandler['remove'];
export const clearSessionStorage: StorageHandler['clear'];

/**
 * Cookie 配置选项
 */
export interface CookieOptions {
  /** 过期时间(秒) */
  expires?: number;
  /** 域名 */
  domain?: string;
  /** 路径 */
  path?: string;
  /** 是否仅 HTTPS 传输 */
  secure?: boolean;
  /** SameSite 策略 ('Strict' | 'Lax' | 'None') */
  sameSite?: 'Strict' | 'Lax' | 'None';
}

/**
 * 设置 cookie
 * @param name - cookie 名称
 * @param value - cookie 值
 * @param options - 配置选项
 */
export function setCookie(name: string, value: any, options?: CookieOptions): void;

/**
 * 获取 cookie
 * @param name - 存储的键名
 * @returns 返回存储的值，如果不存在返回 null
 */
export function getCookie(name: string): any | null;

/**
 * 删除 cookie
 * @param name - cookie 名称
 * @param options - 配置选项
 */
export function removeCookie(name: string, options?: CookieOptions): void;
