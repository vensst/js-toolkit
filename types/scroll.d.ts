// scroll.d.ts

import { isObject } from "./inspect.js";
import { queryElement } from "./dom";

/**
 * 获取当前的滚动位置
 * @param el - 元素
 * @returns 滚动位置对象
 */
export declare const getScrollPosition: (el: Element | string) => {
  x: number;
  y: number;
};

/**
 * 滚动父元素将指定元素滚动到用户可视区域
 * @param el - 元素或选择器
 * @param options - 滚动选项
 * @param options.top - 目标垂直位置，默认为0（顶部）
 * @param options.left - 目标水平位置，默认为0（左侧）
 * @param options.behavior - 滚动行为，可选值有"auto"、"smooth"和"instant"
 */
export declare const scrollIntoView: (
  el: Element | string,
  options?: {
    top?: number;
    left?: number;
    behavior?: "auto" | "smooth" | "instant";
  }
) => void;

/**
 * 滚动至顶部
 * @param el - 元素或选择器，默认为window
 * @param options - 滚动选项
 * @param options.top - 目标垂直位置，默认为0（顶部）
 * @param options.left - 目标水平位置，默认为0（左侧）
 * @param options.behavior - 滚动行为，可选值有"auto"和"smooth"
 */
export declare const scrollToTop: (
  el?: Window | Element | string,
  options?: {
    top?: number;
    left?: number;
    behavior?: "auto" | "smooth";
  }
) => void;

export interface ScrollViewOptions {
  dataList?: any[];
  attrName?: string;
  elAttrName?: string;
  callback?: (result: ScrollViewCallbackResult) => void;
  offsetTop?: number;
}

export interface ScrollViewCallbackResult {
  scrollEl: EventTarget | null;
  currentEl: Element;
  attrName: string;
  elAttrName: string;
  dataList: any[];
  index: number;
  value: any;
}

export class ScrollView {
  constructor(options?: ScrollViewOptions);

  dataList: any[];
  attrName: string;
  elAttrName: string;
  offsetTop: number;
  callback: (result: ScrollViewCallbackResult) => void;
  elementMap: Map<number, Element>;

  private _cacheElements(): void;
  private _getScrollTop(e: Event): number;
  handlerScroll(e: Event): void;
}

/**
 * 初始化滚动监听
 * @param options - 配置对象
 * @returns 返回ScrollView实例对象
 */
export declare const initScrollView: (options?: ScrollViewOptions) => ScrollView;
