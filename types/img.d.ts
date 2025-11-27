/**
 * 图像缩放结果类型
 */
export interface ScaleRatioResult {
  width: number;
  height: number;
  scale: number;
}

/**
 * 计算图像在容器内的缩放比例及尺寸
 * @param width - 图像原始宽度
 * @param height - 图像原始高度
 * @param containerWidth - 容器宽度
 * @param containerHeight - 容器高度
 * @returns 如果参数无效返回 undefined，否则返回缩放后的尺寸和比例
 */
export function calcScaleRatio(
  width?: number,
  height?: number,
  containerWidth?: number,
  containerHeight?: number
): ScaleRatioResult | undefined;

/**
 * 加载多个图片资源
 * @param arr - 图片URL数组
 * @returns 返回一个Promise，在所有图片加载完成后resolve
 */
export function loadImages(arr: string[]): Promise<HTMLImageElement[]>;

/**
 * 将ArrayBuffer或Uint8Array转换为图片Data URL
 * @param buffer - 要转换的数据缓冲区
 * @throws 当输入不是ArrayBuffer或Uint8Array时抛出错误
 * @returns 返回图片Data URL
 */
export function binaryToDataURL(buffer: ArrayBuffer | Uint8Array): string;

/**
 * 压缩图像资源
 * @param resource - 图像源（URL或Data URL）
 * @param quality - 压缩质量（0-1之间）
 * @returns 返回压缩后图像的Data URL
 */
export function compressImage(resource: string, quality?: number): Promise<string>;
