# Image

## calcScaleRatio

- 说明：

  计算图像在容器内的缩放比例及尺寸

- 添加版本：1.1.0-beta.11

- 参数：

  - {number} [width=0] - 图像原始宽度
  - {number} [height=0] - 图像原始高度
  - {number} [containerWidth=0] - 容器宽度
  - {number} [containerHeight=0] - 容器高度

- 返回值：

  {undefined|{width: number, height: number, scale: number}} 如果参数无效返回 undefined，否则返回缩放后的尺寸和比例

- 示例：

```js
calcScaleRatio(500, 300, 600, 400)
```

## loadImages

- 说明：

  加载多个图片资源

- 添加版本：1.1.0-beta.11

- 参数：

  - {string[]} arr - 图片URL数组

- 返回值：

  {Promise<Image[]>} 返回一个Promise，在所有图片加载完成后resolve

- 示例：

```js
const imgUrl = '//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
const arr = [imgUrl, imgUrl]
loadImages(arr).then(res => {
  console.log("--imgLoadAll--", "加载完成")
})
```
## binaryToDataURL

- 说明：

  将ArrayBuffer或Uint8Array转换为图片Data URL

- 添加版本：1.1.0-beta.11

- 参数：

  - {ArrayBuffer|Uint8Array} buffer - 要转换的数据缓冲区

- 返回值：

  {string} 返回图片Data URL

## compressImage

- 说明：

  压缩图像资源

- 添加版本：2.0.0-beta.1

- 参数：

  - {string} resource - 图像源（URL或Data URL）
  - {number} [quality=0.8] - 压缩质量（0-1之间）

- 返回值：

  {Promise\<string\>} 返回压缩后图像的Data URL
