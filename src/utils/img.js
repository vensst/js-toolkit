/**
 * 获取图片缩放比例和缩放后宽高
 * @param {number} imgWidth  图片宽度
 * @param {number} imgHeight  图片高度
 * @param {number} containerWidth 容器宽度
 * @param {number} containerHeight 容器高度
 * @returns {{width: number, scale: number, height: number}} 缩放后图片宽、高、缩放比例
 */
const scaleImg = function (
    imgWidth = 0,
    imgHeight = 0,
    containerWidth = 0,
    containerHeight = 0
) {
  if (imgWidth && imgHeight && containerWidth && containerHeight) {
    let widthRatio = containerWidth / imgWidth;
    let heightRatio = containerHeight / imgHeight;
    const scale = Math.min(widthRatio, heightRatio);
    return {
      width: imgWidth * scale,
      height: imgHeight * scale,
      scale
    }
  }

};

/**
 * 图片加载
 * @param {string[]} arr  图片地址数组
 * @param {Function} callback  回调函数
 * @returns {Promise}
 * @example imgLoadAll(['1.jpg', '2.jpg'])
 */
const imgLoadAll = function (arr, callback) {
  let arrImg = [];
  for (let i = 0; i < arr.length; i++) {
    let img = new Image();
    img.src = arr[i];
    img.onload = function () {
      arrImg.push(this);
      if (arrImg.length === arr.length) {
        callback && callback();
      }
    };
  }
};

/**
 * 图片arrayBuffer转base64
 * @param {Uint8Array} buffer 格式为 responseType:arraybuffer 的返回值
 * @returns {Object} 返回图片的base64和base64Url
 */
const arrayBufferToBase64 = function (buffer) {
  let binary = ''
  let bytes = new Uint8Array(buffer)
  let len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return {
    base64: window.btoa(binary),
    base64Url: 'data:image/png;base64,' + window.btoa(binary)
  }
}
export {
  scaleImg,
  imgLoadAll,
  arrayBufferToBase64
}
