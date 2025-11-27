// other.d.ts

/**
 * 深度克隆对象或数组
 * @param data - 需要克隆的数据
 * @returns 克隆后的数据副本
 */
export function deepClone<T>(data: T): T;

/**
 * 生成十六进制随机颜色值
 * @returns 随机颜色值，格式为 #xxxxxx
 */
export function getRandomColor(): string;

/**
 * 动态加载 JavaScript 脚本文件
 * @param src - 脚本地址
 * @param isAsync - 是否异步加载
 * @returns 脚本加载完成的 Promise
 */
export function addScript(src: string, isAsync?: boolean): Promise<void>;

/**
 * 简单 base64 编码（支持中文）
 * @param str - 需要编码的字符串
 * @returns 编码后的 base64 字符串
 */
export function btoa(str: string): string;

/**
 * 简单 base64 解码（支持中文）
 * @param str - 通过 btoa 编码后的字符串
 * @returns 解码后的字符串
 */
export function atob(str: string): string;

/**
 * Base64 编码函数
 * @param data - 需要编码的数据
 * @returns Base64 编码后的字符串
 */
export function base64_encode(data: string): string;

/**
 * Base64 解码函数
 * @param data - 需要解码的数据
 * @returns 解码后的字符串
 */
export function base64_decode(data: string): string;

/**
 * UTF-8 编码
 * @param string - 需要编码的字符串
 * @returns UTF-8 编码后的字符串
 */
export function utf8_encode(string: string): string;

/**
 * utf8 解码
 * @param utftext - 需要解码的数据
 * @returns 解码后的字符串
 */
export function utf8_decode(utftext: string): string;

/**
 * 加载音频文件
 * @param src - 音频地址
 * @param callback - 音频元数据加载完成后的回调函数
 * @returns Audio 元素实例
 */
export function loadAudio(src: string, callback?: () => void): HTMLAudioElement;

/**
 * 将 DOM 元素转换为 HTML 字符串
 * @param htmlDOM - DOM 元素
 * @returns HTML 字符串
 */
export function domToString(htmlDOM: Element): string;

/**
 * 将 HTML 字符串转换为 DOM 元素
 * @param htmlString - HTML 字符串
 * @returns DOM 元素
 */
export function stringToDom(htmlString: string): Element;

/**
 * 在光标位置插入字符
 * @param dom - 输入框元素
 * @param val - 要插入的值
 */
export function setCursorPosition(dom: HTMLTextAreaElement | HTMLInputElement, val: string): void;

/**
 * 在光标当前位置插入字符
 * @param dom - 输入框元素
 * @param val - 要插入的值
 */
export function insertAtCursor(dom: HTMLTextAreaElement | HTMLInputElement, val: string): void;

/**
 * 转义HTML特殊字符，防止XSS攻击
 * @param str - HTML字符串
 * @returns 转义后的字符串
 */
export function escapeHTML(str?: string): string;

/**
 * 解转义HTML特殊字符，将HTML实体转换回原始字符
 * @param str - 需要解转义的HTML字符串
 * @returns 解转义后的原始字符串
 */
export function unescapeHTML(str?: string): string;

/**
 * 比较两个版本号
 * @param version1 - 版本号1
 * @param version2 - 版本号2
 * @returns 比较结果: 1 表示 version1 > version2, -1 表示 version1 < version2, 0 表示相等
 */
export function compareVersion(version1: string, version2: string): number;

/**
 * 复制文本到剪贴板
 * @param text - 要复制的文本
 * @returns 复制操作是否成功
 */
export function copyToClipboard(text: string): Promise<boolean>;

/**
 * 等待指定时间
 * @param delay - 等待时间（毫秒）
 * @returns Promise，在指定时间后 resolve
 */
export function wait(delay?: number): Promise<void>;

/**
 * 监听一个或多个元素的尺寸变化
 * @param elements - 需要监听的单个元素或元素数组
 * @param callback - 尺寸变化时调用的回调函数，接收 ResizeObserverEntry 数组作为参数
 * @returns 停止监听的函数，可选择性地停止部分元素的监听
 */
export declare const resizeObserver: (
  elements: HTMLElement | HTMLElement[] | NodeList,
  callback: (entries: ResizeObserverEntry[]) => void
) => (elementsToStop?: HTMLElement | HTMLElement[] | null) => void;

/**
 * WebSocketUtil 类用于封装 WebSocket 连接逻辑，包括自动重连、心跳机制等功能。
 */
export class WebSocketUtil {
  static DEFAULT_PING_MESSAGE: string;
  static DEFAULT_RECONNECT_INTERVAL: number;
  static DEFAULT_MAX_RECONNECT_ATTEMPTS: number;
  static DEFAULT_HEARTBEAT_INTERVAL: number;
  static HEARTBEAT_RESPONSE_TYPE: string;

  url: string;
  socket: WebSocket | null;
  connectState: number;

  constructor(url: string, options?: {
    isReconnect?: boolean;
    reconnectInterval?: number;
    maxReconnectAttempts?: number;
    isHeartbeat?: boolean;
    heartbeatInterval?: number;
    pingMessage?: string | object | any[];
  });

  connect(): void;
  send(data: string | Buffer | ArrayBuffer | Blob | ArrayBufferView | object | any[]): void;
  close(): void;
  setMessageHandler(callback: (data: any) => void): void;
}
