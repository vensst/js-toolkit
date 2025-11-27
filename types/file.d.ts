// file.d.ts

/**
 * MIME类型映射表（作为补充使用）
 */
export const mimeTypeMap: Map<string, string>;

/**
 * 提取扩展名并查找 MIME
 * 根据文件名的扩展名获取对应的 MIME 类型
 * @param fileName - 文件名（例如："a.png"，"b.jpg"）
 * @returns 对应的 MIME 类型，如果未找到则返回 undefined
 */
export function getMimeType(fileName: string): string | undefined;

/**
 * 统一创建下载链接并触发下载
 * @param blob - 要下载的 Blob 对象
 * @param fileName - 下载文件的名称
 */
declare function triggerDownload(blob: Blob, fileName: string): void;

/**
 * 强制下载 URL（fetch + Blob），所有浏览器都适用
 * 通过 fetch 请求获取文件内容，然后创建 Blob 对象进行下载
 * @param url - 要下载的文件 URL
 * @param fileName - 下载文件的名称（可选）
 * @returns 下载是否成功
 */
export function forceDownloadByUrl(url: string, fileName?: string): Promise<boolean>;

/**
 * 统一入口：download(data, fileName)
 * 根据传入的数据类型自动选择合适的下载方式
 * @param data - 要下载的数据
 * @param fileName - 下载文件的名称
 * @returns 是否成功触发下载流程
 */
export function download(
  data: string | Blob | ArrayBuffer | Uint8Array | any,
  fileName: string
): Promise<boolean>;
