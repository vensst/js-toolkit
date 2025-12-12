# File

## getMimeType

- 说明：

  根据文件名的扩展名获取对应的 MIME 类型

- 参数：

  - {string} fileName - 文件名（例如："a.png"，"b.jpg"）

- 返回值：

  {string|undefined} 对应的 MIME 类型，如果未找到则返回 undefined

- 示例：

```js
getMimeType()
getMimeType('a.png')
getMimeType('a.abc')
```

## download

- 说明：

  根据传入的数据类型自动选择合适的下载方式（支持多种数据类型：URL、Blob、ArrayBuffer、Uint8Array、字符串等）

- 参数：

  - {string|Blob|ArrayBuffer|Uint8Array|any} data - 要下载的数据
    - string: 如果是 URL 则强制下载，否则作为文本内容下载
    - Blob: 直接下载 Blob 对象
    - ArrayBuffer/Uint8Array: 转换为 Blob 后下载
    - 其他类型: 转换为 JSON 字符串后下载
  - {string} fileName - 下载文件的名称（包含扩展名，用于确定 MIME 类型）

- 返回值：

  {Promise\<boolean\>} 是否成功触发下载流程

- 示例：

```js
const blob = new Blob(["binary data"], {type: "application/octet-stream"});
download()
download("Hello World", "hello.txt")
download(JSON.stringify({name: "test"}), "data.json")
download('blob:https://www.dapengjiaoyu.cn/9d4e9b7d-f7bb-445c-9881-a35a7cf2dd5e', 'a.png')
download('https://m.tuniucdn.com/fb2/t1/G5/M00/44/52/Cii-s1soezyIF2UxABn76u-yKl8AAIwBgB34jAAGfwC3020871', '1.png')
download(blob, "data.bin")
download("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js")
```

## forceDownloadByUrl

- 说明：

  强制下载 URL（fetch + Blob），通过 fetch 请求获取文件内容，然后创建 Blob 对象进行下载

- 参数：

  - {string} url - 要下载的文件 URL
  - {string} [fileName] - 下载文件的名称（可选）

- 返回值：

  {Promise\<boolean\>} 下载是否成功

- 示例：

```js
forceDownloadByUrl("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js")
```
