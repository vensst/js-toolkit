/**
 * ajax 请求
 * @param setting {Object} 配置
 * @private
 */
export const _ajax = function (setting) {
  //设置参数的初始值
  let opts = {
    method: (setting.method || "GET").toUpperCase(), //请求方式
    url: setting.url || "", // 请求地址
    async: setting.async || true, // 是否异步
    dataType: setting.dataType || "json", // 解析方式
    data: setting.data || "", // 参数
    success: setting.success || function () {}, // 请求成功回调
    error: setting.error || function () {}, // 请求失败回调
  };

  // 参数格式化
  function params_format(obj) {
    let str = "";
    for (let i in obj) {
      str += i + "=" + obj[i] + "&";
    }
    return str.split("").slice(0, -1).join("");
  }

  // 创建ajax对象
  let xhr = new XMLHttpRequest();

  // 连接服务器open(方法GET/POST，请求地址， 异步传输)
  if (opts.method === "GET") {
    xhr.open(
      opts.method,
      opts.url + opts.data ? "?" + params_format(opts.data) : "",
      opts.async
    );
    xhr.send();
  } else {
    xhr.open(opts.method, opts.url, opts.async);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(opts.data);
  }

  /*
   ** 每当readyState改变时，就会触发onreadystatechange事件
   ** readyState属性存储有XMLHttpRequest的状态信息
   ** 0 ：请求未初始化
   ** 1 ：服务器连接已建立
   ** 2 ：请求已接受
   ** 3 ：请求处理中
   ** 4 ：请求已完成，且相应就绪
   */
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
      switch (opts.dataType) {
        case "json":
          let json = JSON.parse(xhr.responseText);
          opts.success(json);
          break;
        case "xml":
          opts.success(xhr.responseXML);
          break;
        default:
          opts.success(xhr.responseText);
          break;
      }
    }
  };

  xhr.onerror = function (err) {
    opts.error(err);
  };
};

/**
 * 封装 fetch 请求
 * @param url {string} 请求地址
 * @param setting {Object} 配置
 * @returns {Promise<unknown>} 返回 Promise 对象
 */
export const _fetch = function (url, setting) {
  //设置参数的初始值
  let opts = {
    method: (setting.method || "GET").toUpperCase(), //请求方式
    headers: setting.headers || {}, // 请求头设置
    credentials: setting.credentials || "same-origin", // 设置cookie是否一起发送 否允许携带资源凭证 include(同源跨域都允许)same-origin(同源才允许)omit都不允许
    body: setting.body || {}, // 设置请求主体信息(只有post系列请求才可以设置,get系列请求会报错,格式有要求:json字符串,URLENCODED格式字符串,普通字符串,FormData格式对象,Buffer/bolb格式...不能是普通对象,并且要根据请求主体的数据格式,配置相关的请求头(Content-Type)
    mode: setting.mode || "no-cors", // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || "follow", // follow, error, manual
    cache: setting.cache || "default", // 设置 cache 模式 (default, reload, no-cache)
  };
  let dataType = setting.dataType || "json"; // 解析方式
  let data = setting.data || ""; // 参数

  // 参数格式化
  function params_format(obj) {
    let str = "";
    for (let i in obj) {
      str += `${i}=${obj[i]}&`;
    }
    return str.split("").slice(0, -1).join("");
  }

  if (opts.method === "GET") {
    url = url + (data ? `?${params_format(data)}` : "");
  } else {
    setting.body = data || {};
  }

  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then(async (res) => {
        let data =
          dataType === "text"
            ? await res.text()
            : dataType === "blob"
            ? await res.blob()
            : await res.json();
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
