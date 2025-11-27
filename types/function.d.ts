/**
 * 函数防抖 - 限制函数执行频率，当调用动作过快时，只执行最后一次调用
 * @param func 需要被防抖的函数
 * @param wait 防抖延迟时间（毫秒），默认500
 * @param immediate 是否立即执行函数（true表示在延迟开始前执行），默认false
 * @returns 返回新的防抖动函数
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait?: number,
  immediate?: boolean
): DebouncedFunction<T>;

/**
 * 防抖函数返回的函数类型
 */
interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  /**
   * 取消防抖调用
   */
  cancel(): void;
}

/**
 * 函数节流 - 限制函数执行频率，确保函数在指定时间间隔内只执行一次
 * @param func 需要被节流的函数
 * @param wait 节流时间间隔（毫秒），默认500
 * @returns 返回新的节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait?: number
): ThrottledFunction<T>;

/**
 * 节流函数返回的函数类型
 */
interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  /**
   * 取消节流调用
   */
  cancel(): void;
}
