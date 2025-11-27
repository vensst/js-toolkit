# 文件

## getBlobType

- 说明：

	根据文件类型查询对应 blob type类型

- 参数：

    - {string} name 文件类型（例如："a.png"，"b.jpg"，或者 ".xls"）

- 返回值：

  {(string|null)} 对应 blob type类型

- 示例：

```js
jsToolkit.getBlobType(".image/png")
// "text/xml"
```

## downloadFile

- 说明：

  根据二进制数据流和文件名称（带类型名称）下载文件

- 参数：

    - {Blob} blobFile 二进制数据流
    - {string} fileName 文件名称

- 返回值：

  {boolean} 是否下载成功

- 示例：

```js
jsToolkit.downloadFile("....", "a.png")
```
