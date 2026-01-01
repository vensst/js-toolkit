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


/**
 * 滚动位置对象
 */
export interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * 滚动选项接口
 */
export interface ScrollOptions {
  /**
   * 滚动行为，可选值有"auto"、"smooth"和"instant"
   * @default 'smooth'
   */
  behavior?: 'auto' | 'smooth' | 'instant';
  /**
   * 目标垂直位置，默认为0（顶部）
   * @default 0
   */
  top?: number;
  /**
   * 目标水平位置，默认为0（左侧）
   * @default 0
   */
  left?: number;
}

/**
 * ScrollView 配置选项接口
 */
export interface ScrollViewOptions {
  /**
   * 数据列表
   * @default []
   */
  dataList?: any[];
  /**
   * 当dataList为对象数组时，指定用于匹配元素的属性名
   * @default ''
   */
  attrName?: string;
  /**
   * 用于匹配元素的属性名
   * @default 'data-name'
   */
  elAttrName?: string;
  /**
   * 自定义偏移量
   * @default 0
   */
  offsetTop?: number;
  /**
   * 回调函数
   * @default () => {}
   */
  callback?: (params: {
    index: number;
    currentEl: Element | null;
    data: any;
  }) => void;
  /**
   * 滚动容器
   * @default window
   */
  container?: Window | Element;
}

/**
 * ScrollView 类接口
 */
export interface ScrollView {
  /**
   * 数据列表
   */
  dataList: any[];
  /**
   * 属性名
   */
  attrName: string;
  /**
   * 元素属性名
   */
  elAttrName: string;
  /**
   * 偏移量
   */
  offsetTop: number;
  /**
   * 回调函数
   */
  callback: (params: {
    index: number;
    currentEl: Element | null;
    data: any;
  }) => void;
  /**
   * 滚动容器
   */
  container: Window | Element;
  /**
   * 缓存的元素列表
   */
  elements: Element[];
  /**
   * 当前激活的索引
   */
  activeIndex: number;
  /**
   * 是否正在处理滚动
   */
  ticking: boolean;

  /**
   * 滚动到指定索引的元素
   * @param index - 要滚动到的元素索引
   * @param smooth - 是否平滑滚动
   */
  scrollTo(index: number, smooth?: boolean): void;

  /**
   * 销毁 ScrollView 实例
   */
  destroy(): void;
}

/**
 * 获取当前的滚动位置
 * @param el - 元素或选择器
 * @returns 滚动位置对象
 */
export declare const getScrollPosition: (el: Element | string) => ScrollPosition;

/**
 * 滚动父元素将指定元素滚动到用户可视区域
 * @param el - 元素或选择器
 * @param options - 滚动选项
 */
export declare const scrollIntoView: (el: Element | string, options?: ScrollOptions) => void;

/**
 * 滚动至顶部
 * @param el - 元素或选择器，默认为window
 * @param options - 滚动选项
 */
export declare const scrollToTop: (el?: Window | Element | string, options?: ScrollOptions) => void;

/**
 * 初始化滚动监听
 * @param options - 配置对象
 * @returns 返回ScrollView实例对象
 */
export declare const initScrollView: (options?: ScrollViewOptions) => ScrollView;
