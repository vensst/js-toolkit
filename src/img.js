/**
 * 计算图像在容器内的缩放比例及尺寸
 * @param {number} [width=0] - 图像原始宽度
 * @param {number} [height=0] - 图像原始高度
 * @param {number} [containerWidth=0] - 容器宽度
 * @param {number} [containerHeight=0] - 容器高度
 * @returns {undefined|{width: number, height: number, scale: number}} 如果参数无效返回 undefined，否则返回缩放后的尺寸和比例
 */

export const calcScaleRatio = (width = 0, height = 0, containerWidth = 0, containerHeight = 0) => {
  if ([width, height, containerWidth, containerHeight].some(v => typeof v !== 'number' || v <= 0)) {
    return undefined;
  }
  const scale = Math.min(containerWidth / width, containerHeight / height);
  return {width: width * scale, height: height * scale, scale};
};

/**
 * 加载多个图片资源
 * @param {string[]} arr - 图片URL数组
 * @returns {Promise<Image[]>} 返回一个Promise，在所有图片加载完成后resolve
 */
export const loadImages = (arr) => {
  return new Promise((resolve, reject) => {
    if (!arr.length) {
      return resolve([]);
    }
    const arrImg = new Array(arr.length);
    let loadedCount = 0;
    let hasError = false;

    arr.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (hasError) return;
        arrImg[index] = img;
        if (++loadedCount === arr.length) {
          resolve(arrImg);
        }
      };
      img.onerror = () => {
        if (hasError) return;
        hasError = true;
        reject(new Error(`Failed to load image: ${src}`));
      };
    });
  });
};


const detectMimeType = (bytes) => {
  if (bytes.length < 4) return null;
  const signatures = {
    'image/jpeg': [0xFF, 0xD8, 0xFF],
    'image/png': [0x89, 0x50, 0x4E, 0x47],
    'image/gif': [0x47, 0x49, 0x46],
    'image/webp': [0x52, 0x49, 0x46, 0x46, 0x57, 0x45, 0x42, 0x50, 8]
  };
  for (const [type, sig] of Object.entries(signatures)) {
    if (sig.every((v, i) => bytes[i] === v || i === 8)) return type;
  }
  return null;
};
/**
 * 将ArrayBuffer或Uint8Array转换为图片Data URL
 * @param {ArrayBuffer|Uint8Array} buffer - 要转换的数据缓冲区
 * @throws {Error} 当输入不是ArrayBuffer或Uint8Array时抛出错误
 * @returns {string} 返回图片Data URL
 */
export const binaryToDataURL = (buffer) => {
  if (!(buffer instanceof ArrayBuffer || buffer instanceof Uint8Array)) {
    throw new Error('Buffer must be an ArrayBuffer or Uint8Array');
  }
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  const binary = Array.from(bytes).map(b => String.fromCharCode(b)).join('');
  const base64 = window.btoa(binary);
  const mimeType = detectMimeType(bytes) || 'image/png';
  return `data:${mimeType};base64,${base64}`;
};


/**
 * 压缩图像资源
 * @param {string} resource - 图像源（URL或Data URL）
 * @param {number} [quality=0.8] - 压缩质量（0-1之间）
 * @returns {Promise<string>} 返回压缩后图像的Data URL
 */
export const compressImage = (resource, quality = 0.8) => new Promise((resolve) => {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
    resolve(canvas.toDataURL('image/jpeg', quality));
  };
  img.src = resource;
});
