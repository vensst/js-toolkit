# 图片

## scaleImg

- 说明：

  获取图片缩放比例和缩放后宽高

- 参数：

  - {number} imgWidth  图片宽度
  - {number} imgHeight 图片高度
  - {number} containerWidth 容器宽度
  - {number} containerHeight 容器高度

- 添加版本：1.1.0-beta.11

- 返回值：

  {Object} 缩放后图片宽、高、缩放比例 {width: number, scale: number, height: number}

- 示例：

```js
jsToolkit.scaleImg(500, 300, 600, 400)
// {height: 360, scale: 1.2, width: 600}
```

## imgLoadAll

- 说明：

  图片加载

- 参数：

  - {string[]} arr 图片地址数组
  - {Function} callback  回调函数

- 添加版本：1.1.0-beta.11

- 返回值：

  {Promise} Promise对象

- 示例：

```js
 const arr = [
    '//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    '//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
  ]
  jsToolkit.imgLoadAll(arr, function () {
    console.log("--imgLoadAll--", "加载完成")
  })
```
## arrayBufferToBase64

- 说明：

  图片arrayBuffer转base64

- 参数：

  - {Uint8Array} buffer 格式为 responseType:arraybuffer 的返回值

- 添加版本：1.1.0-beta.11

- 返回值：

  {Object} 返回图片的base64和base64Url

