const blobTypeList = [
  {name: ".aac", type: "audio/aac"},
  {name: ".abw", type: "application/x-abiword"},
  {name: ".arc", type: "application/x-freearc"},
  {name: ".avi", type: "video/x-msvideo"},
  {name: ".azw", type: "application/vnd.amazon.ebook"},
  {name: ".bin", type: "application/octet-stream"},
  {name: ".bmp", type: "image/bmp"},
  {name: ".bz", type: "application/x-bzip"},
  {name: ".bz2", type: "application/x-bzip2"},
  {name: ".csh", type: "application/x-csh"},
  {name: ".css", type: "text/css"},
  {name: ".csv", type: "text/csv"},
  {name: ".doc", type: "application/msword"},
  {name: ".docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
  {name: ".eot", type: "application/vnd.ms-fontobject"},
  {name: ".epub", type: "application/epub+zip"},
  {name: ".gif", type: "image/gif"},
  {name: ".htm", type: "text/html"},
  {name: ".html", type: "text/html"},
  {name: ".ico", type: "image/vnd.microsoft.icon"},
  {name: ".ics", type: "text/calendar"},
  {name: ".jar", type: "application/java-archive"},
  {name: ".jpeg", type: "image/jpeg"},
  {name: ".jpg", type: "image/jpeg"},
  {name: ".js", type: "text/javascript"},
  {name: ".json", type: "application/json"},
  {name: ".jsonld", type: "application/ld+json"},
  {name: ".mid", type: "audio/midi audio/x-midi"},
  {name: ".midi", type: "audio/midi audio/x-midi"},
  {name: ".mjs", type: "text/javascript"},
  {name: ".mp3", type: "audio/mpeg"},
  {name: ".mpeg", type: "video/mpeg"},
  {name: ".mpkg", type: "application/vnd.apple.installer+xml"},
  {name: ".odp", type: "application/vnd.oasis.opendocument.presentation"},
  {name: ".ods", type: "application/vnd.oasis.opendocument.spreadsheet"},
  {name: ".odt", type: "application/vnd.oasis.opendocument.text"},
  {name: ".oga", type: "audio/ogg"},
  {name: ".ogv", type: "video/ogg"},
  {name: ".ogx", type: "application/ogg"},
  {name: ".otf", type: "font/otf"},
  {name: ".png", type: "image/png"},
  {name: ".pdf", type: "application/pdf"},
  {name: ".ppt", type: "application/vnd.ms-powerpoint"},
  {name: ".pptx", type: "application/vnd.openxmlformats-officedocument.presentationml.presentation"},
  {name: ".rar", type: "application/x-rar-compressed"},
  {name: ".rtf", type: "application/rtf"},
  {name: ".sh", type: "application/x-sh"},
  {name: ".svg", type: "image/svg+xml"},
  {name: ".swf", type: "application/x-shockwave-flash"},
  {name: ".tar", type: "application/x-tar"},
  {name: ".tif", type: "image/tiff"},
  {name: ".tiff", type: "image/tiff"},
  {name: ".ttf", type: "font/ttf"},
  {name: ".txt", type: "text/plain"},
  {name: ".vsd", type: "application/vnd.visio"},
  {name: ".wav", type: "audio/wav"},
  {name: ".weba", type: "audio/webm"},
  {name: ".webm", type: "video/webm"},
  {name: ".webp", type: "image/webp"},
  {name: ".woff", type: "font/woff"},
  {name: ".woff2", type: "font/woff2"},
  {name: ".xhtml", type: "application/xhtml+xml"},
  {name: ".xls", type: "application/vnd.ms-excel"},
  {name: ".xlsx", type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
  {name: ".xml", type: "application/xml"},
  {name: "", type: "text/xml"},
  {name: ".xul", type: "application/vnd.mozilla.xul+xml"},
  {name: ".zip", type: "application/zip"},
  {name: ".3gp", type: "video/3gpp"},
  {name: "", type: "audio/3gpp"},
  {name: ".3g2", type: "video/3gpp2"},
  {name: "", type: "audio/3gpp2"},
  {name: ".7z", type: "application/x-7z-compressed"}
]

/**
 * 根据文件名称（有文件类型） 查询对应blob type
 * @param name 名称
 * @returns {string|*|null} blob type
 */
export const getBlobType=function (name){
  let typeArr= blobTypeList.filter(item=>name.includes(item.name))
  return typeArr.length?typeArr[0].type:null
}
/**
 * 下载文件
 * @param name 文件名称（带类型）
 * @param blobFile ｛Blob｝ blob格式
 */
export const downloadFile=function (name,blobFile){
  const link = document.createElement("a");
  let blob = new Blob([blobFile], {
    type: getBlobType(name),
  });
  let objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = `${name}`;
  link.click(); // 下载文件
  URL.revokeObjectURL(objectUrl);
}
