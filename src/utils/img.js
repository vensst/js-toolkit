/**
 * 获取图片缩放比例和缩放后宽高
 * @param imgWidth 图片宽度
 * @param imgHeight 图片高度
 * @param containerWidth 容器宽度
 * @param containerHeight 容器高度
 * @returns {{width: number, scale: number, height: number}} 缩放后图片宽、高、缩放比例
 */
export const scaleImg = function (imgWidth, imgHeight, containerWidth, containerHeight) {
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
  let  scale = imgWidth/imgHeight
  return { width: imgWidth, height: imgHeight,scale };
}
/*图片加载*/
export const imgLoadAll = function (arr, callback) {
  var arrImg = [];
  for (var i = 0; i < arr.length; i++) {
    var img = new Image();
    img.src = arr[i];
    img.onload = function () {
      arrImg.push(this);
      if (arrImg.length == arr.length) {
        callback && callback();
      }
    }
  }
}
