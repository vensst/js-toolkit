// http.d.ts
type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';
export declare type HttpMethod = Uppercase<Method> | Lowercase<Method>;


/**
 * 请求凭证策略
 */
export declare type RequestCredentials = 'include' | 'same-origin' | 'omit';

/**
 * 请求模式
 */
export declare type RequestMode = 'cors' | 'no-cors' | 'same-origin';

/**
 * 重定向策略
 */
export declare type RequestRedirect = 'follow' | 'error' | 'manual';

/**
 * 缓存策略
 */
export declare type RequestCache = 'default' | 'reload' | 'no-cache';

/**
 * 响应数据类型
 */
export declare type ResponseType = 'json' | 'xml' | 'text' | 'blob' | 'arraybuffer';

/**
 * HTTP请求配置参数
 */
export declare interface RequestConfig {
  url: string;
  method?: HttpMethod;
  headers?: Record<string, string> | Headers;
  params?: Record<string, any>; // 将会被自动编码并追加至URL query string
  data?: any; // POST/PUT/PATCH 请求体数据
  responseType?: ResponseType; // 扩展支持 arraybuffer
  timeout?: number;
  auth?: {
    username: string;
    password: string;
  };
  cancelToken?: CancelToken;
  credentials?: RequestCredentials;
  mode?: RequestMode;
  redirect?: RequestRedirect;
  cache?: RequestCache;
}

/**
 * 取消令牌
 */
export declare interface CancelToken {
  cancel(message?: string): void;
}

/**
 * 取消令牌构造函数
 */
export declare interface CancelTokenConstructor {
  new(): CancelToken;
}

// 工具类型：去除特定键后的配置对象
export declare type ConfigWithoutUrlAndMethod<T> = Omit<T, 'url' | 'method'>;
export declare type ConfigWithoutUrlMethodAndData<T> = Omit<T, 'url' | 'method' | 'data'>;

/**
 * XMLHttpRequest请求函数
 * @param config 配置参数
 */
export declare interface Request {
  <T = any>(config: RequestConfig): Promise<T>;

  get<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  post<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  put<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  delete<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  CancelToken: CancelTokenConstructor;
};

// 导出函数变量
export declare const request: Request;
/**
 * Fetch请求函数
 * @param config 配置参数
 */
export declare interface RequestFetch {
  <T = any>(config: RequestConfig): Promise<T>;

  get<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  post<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  put<T = any>(
    url: string,
    data?: any,
    config?: ConfigWithoutUrlMethodAndData<RequestConfig>
  ): Promise<T>;

  delete<T = any>(
    url: string,
    config?: ConfigWithoutUrlAndMethod<RequestConfig>
  ): Promise<T>;

  CancelToken: CancelTokenConstructor;
}

// 导出函数变量
export declare const requestFetch: RequestFetch;

