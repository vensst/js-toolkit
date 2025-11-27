/**
 * MIME类型映射表（作为补充使用）
 * 包含常见文件扩展名与对应MIME类型的映射关系
 * @type {Map<string, string>}
 */
export const mimeTypeMap = new Map([
  [".aac", "audio/aac"],
  [".abw", "application/x-abiword"],
  [".arc", "application/x-freearc"],
  [".avi", "video/x-msvideo"],
  [".azw", "application/vnd.amazon.ebook"],
  [".bin", "application/octet-stream"],
  [".bmp", "image/bmp"],
  [".bz", "application/x-bzip"],
  [".bz2", "application/x-bzip2"],
  [".csh", "application/x-csh"],
  [".css", "text/css"],
  [".csv", "text/csv"],
  [".doc", "application/msword"],
  [".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
  [".eot", "application/vnd.ms-fontobject"],
  [".epub", "application/epub+zip"],
  [".gif", "image/gif"],
  [".htm", "text/html"],
  [".html", "text/html"],
  [".ico", "image/vnd.microsoft.icon"],
  [".ics", "text/calendar"],
  [".jar", "application/java-archive"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript"],
  [".json", "application/json"],
  [".jsonld", "application/ld+json"],
  [".mid", "audio/midi"],
  [".midi", "audio/midi"],
  [".mjs", "text/javascript"],
  [".mp3", "audio/mpeg"],
  [".mpeg", "video/mpeg"],
  [".mpkg", "application/vnd.apple.installer+xml"],
  [".odp", "application/vnd.oasis.opendocument.presentation"],
  [".ods", "application/vnd.oasis.opendocument.spreadsheet"],
  [".odt", "application/vnd.oasis.opendocument.text"],
  [".oga", "audio/ogg"],
  [".ogv", "video/ogg"],
  [".ogx", "application/ogg"],
  [".otf", "font/otf"],
  [".png", "image/png"],
  [".pdf", "application/pdf"],
  [".ppt", "application/vnd.ms-powerpoint"],
  [".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
  [".rar", "application/x-rar-compressed"],
  [".rtf", "application/rtf"],
  [".sh", "application/x-sh"],
  [".svg", "image/svg+xml"],
  [".swf", "application/x-shockwave-flash"],
  [".tar", "application/x-tar"],
  [".tif", "image/tiff"],
  [".tiff", "image/tiff"],
  [".ttf", "font/ttf"],
  [".txt", "text/plain"],
  [".vsd", "application/vnd.visio"],
  [".wav", "audio/wav"],
  [".weba", "audio/webm"],
  [".webm", "video/webm"],
  [".webp", "image/webp"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xhtml", "application/xhtml+xml"],
  [".xls", "application/vnd.ms-excel"],
  [".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
  [".xml", "application/xml"],
  [".xul", "application/vnd.mozilla.xul+xml"],
  [".zip", "application/zip"],
  [".3gp", "video/3gpp"],
  [".3g2", "video/3gpp2"],
  [".7z", "application/x-7z-compressed"]
]);

/**
 * 提取扩展名并查找 MIME
 * 根据文件名的扩展名获取对应的 MIME 类型
 * @param {string} fileName - 文件名（例如："a.png"，"b.jpg"）
 * @returns {string|undefined} 对应的 MIME 类型，如果未找到则返回 undefined
 * @example
 * getMimeType("image.png"); // "image/png"
 * getMimeType("document.pdf"); // "application/pdf"
 * getMimeType("unknown.xyz"); // undefined
 */
export const getMimeType = (fileName) => {
  if (typeof fileName !== 'string') return undefined;
  const ext = fileName.toLowerCase().match(/\.[^.]+$/)?.[0];
  return ext ? mimeTypeMap.get(ext) : undefined;
};

/**
 * 统一创建下载链接并触发下载
 */
const triggerDownload = (blob, fileName) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * 强制下载 URL（fetch + Blob），所有浏览器都适用
 * 通过 fetch 请求获取文件内容，然后创建 Blob 对象进行下载
 * @param {string} url - 要下载的文件 URL
 * @param {string} [fileName] - 下载文件的名称（可选）
 * @returns {Promise<boolean>} 下载是否成功
 * @async
 */
export const forceDownloadByUrl = async (url, fileName) => {
  try {
    const res = await fetch(url);
    if (!res.ok) return false;

    // 尝试从 header 获取文件名
    if (!fileName) {
      const cd = res.headers.get('Content-Disposition');
      if (cd && cd.includes('filename=')) {
        fileName = cd.split('filename=')[1].replace(/"/g, '');
      }
    }

    // 从 URL fallback
    if (!fileName) {
      try {
        const { pathname } = new URL(url);
        fileName = pathname.split('/').pop() || 'download';
      } catch {
        fileName = 'download';
      }
    }

    const blob = await res.blob();
    triggerDownload(blob, fileName);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

/**
 * 统一入口：download(data, fileName)
 * 根据传入的数据类型自动选择合适的下载方式
 * 支持多种数据类型：URL、Blob、ArrayBuffer、Uint8Array、字符串等
 * @param {string|Blob|ArrayBuffer|Uint8Array|any} data - 要下载的数据
 *   - string: 如果是 URL 则强制下载，否则作为文本内容下载
 *   - Blob: 直接下载 Blob 对象
 *   - ArrayBuffer/Uint8Array: 转换为 Blob 后下载
 *   - 其他类型: 转换为 JSON 字符串后下载
 * @param {string} fileName - 下载文件的名称（包含扩展名，用于确定 MIME 类型）
 * @returns {Promise<boolean>} 是否成功触发下载流程
 * @async
 * @example
 * // 下载文本内容
 * download("Hello World", "hello.txt");
 *
 * // 下载 JSON 数据
 * download({name: "test"}, "data.json");
 *
 * // 下载 Blob 对象
 * const blob = new Blob(["binary data"], {type: "application/octet-stream"});
 * download(blob, "data.bin");
 *
 * // 通过 URL 下载远程文件
 * download("https://example.com/document.pdf", "downloaded-document.pdf");
 *
 * // 下载图片数据
 * const imageData = new Uint8Array([图片二进制数据]);
 * download(imageData, "image.png");
 */

export const download = async (data, fileName) => {
  if (!data) return false;

  // 1. data 是 URL → 强制下载
  if (typeof data === 'string' && /^https?:\/\//.test(data)) {
    return await forceDownloadByUrl(data, fileName);
  }

  // 2. data 是 Blob → 直接下载
  if (data instanceof Blob) {
    triggerDownload(data, fileName);
    return true;
  }

  // 3. data 是 Uint8Array 或 ArrayBuffer
  if (data instanceof Uint8Array || data instanceof ArrayBuffer) {
    const mime = getMimeType(fileName) || '';
    const blob = new Blob([data], mime ? { type: mime } : {});
    triggerDownload(blob, fileName);
    return true;
  }

  // 4. data 是文本
  if (typeof data === 'string') {
    const mime = getMimeType(fileName) || 'text/plain';
    const blob = new Blob([data], { type: mime });
    triggerDownload(blob, fileName);
    return true;
  }

  // 5. 其他类型：转换为 JSON 文本
  const blob = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });
  triggerDownload(blob, fileName);
  return true;
};
