// window.d.ts

/**
 * 使元素进入全屏模式
 * @param element - 要进入全屏的元素，默认为整个文档
 * @returns 全屏操作的 Promise
 */
export function enterFullscreen(element?: Element): Promise<void>;

/**
 * 退出全屏模式
 * @returns 退出全屏操作的 Promise
 */
export function exitFullscreen(): Promise<void>;

/**
 * 根据窗口大小自适应字体大小
 * @param fontSize - 初始字体大小
 * @param initWidth - 初始宽度
 * @returns 返回计算后字体大小
 */
export function resizeFontSize(fontSize?: number, initWidth?: number): number;

export declare type ModeType = "scaleToFill" | "aspectFit"

/**
 * 数据可视化容器类（用于数据可视化大屏）
 */
export class DataView {
  el: HTMLElement;
  options: {
    width: number;
    height: number;
    mode: ModeType;
  };

  /**
   * 构造函数
   * @param el - 元素
   * @param options - 参数 {width, height, mode}
   */
  constructor(el: HTMLElement, options?: Partial<DataView['options']>);

  /**
   * 调整尺寸
   */
  resize(): void;
}

/**
 * 初始化数据可视化容器（用于数据可视化大屏）
 * @param el - 元素
 * @param options - 参数 {width, height, mode}
 * @returns 返回DataView实例对象
 */
export function initDataView(
  el: HTMLElement,
  options?: {
    width?: number;
    height?: number;
    mode?: ModeType;
  }
): DataView;

