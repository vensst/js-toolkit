/**
 * 获取图片缩放比例和缩放后宽高
 * @param {number} imgWidth  图片宽度
 * @param {number} imgHeight  图片高度
 * @param  {number} containerWidth 容器宽度
 * @param {number} containerHeight  容器高度
 * @returns {{width: number, scale: number, height: number}} 缩放后图片宽、高、缩放比例
 */
const scaleImg = function (
  imgWidth,
  imgHeight,
  containerWidth,
  containerHeight
) {
  if (!imgWidth||!imgHeight||!containerWidth||!containerHeight) return {}
  let containerRatio = containerWidth / containerHeight;
  let imgRatio = imgWidth / imgHeight;

  if (imgRatio > containerRatio) {
    imgWidth = containerWidth;
    imgHeight = containerWidth / imgRatio;
  } else if (imgRatio < containerRatio) {
    imgHeight = containerHeight;
    imgWidth = containerHeight * imgRatio;
  } else {
    imgWidth = containerWidth;
    imgHeight = containerHeight;
  }
  let scale = imgWidth / imgHeight;
  return {
    width: imgWidth,
    height: imgHeight,
    scale
  };
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

export {
  scaleImg,
  imgLoadAll
}
