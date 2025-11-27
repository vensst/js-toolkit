// inspect.d.ts
export declare const getType: (o: any) => string;

export declare const isType: (type: string, val: any) => boolean;

export declare const isString: (o: any) => boolean;
export declare const isNumber: (o: any) => boolean;
export declare const isNumeric: (value: any) => boolean;
export declare const isBoolean: (o: any) => boolean;
export declare const isFunction: (o: any) => boolean;
export declare const isNull: (o: any) => boolean;
export declare const isUndefined: (o: any) => boolean;
export declare const isBlob: (o: any) => boolean;
export declare const isObject: (o: any) => boolean;
export declare const isArray: (o: any) => boolean;
export declare const isElement: (o: any) => boolean;
export declare const isNodeList: (o: any) => boolean;
export declare const isDate: (o: any) => boolean;
export declare const isRegExp: (o: any) => boolean;
export declare const isError: (o: any) => boolean;
export declare const isSymbol: (o: any) => boolean;
export declare const isPromise: (o: any) => boolean;
export declare const isSet: (o: any) => boolean;
export declare const isMap: (o: any) => boolean;
export declare const isWeakMap: (o: any) => boolean;
export declare const isWeakSet: (o: any) => boolean;
export declare const isArrayBuffer: (o: any) => boolean;
export declare const isDataView: (o: any) => boolean;
export declare const isInt8Array: (o: any) => boolean;
export declare const isUint8Array: (o: any) => boolean;
export declare const isUint8ClampedArray: (o: any) => boolean;
export declare const isInt16Array: (o: any) => boolean;
export declare const isUint16Array: (o: any) => boolean;
export declare const isInt32Array: (o: any) => boolean;
export declare const isUint32Array: (o: any) => boolean;
export declare const isFloat32Array: (o: any) => boolean;
export declare const isFloat64Array: (o: any) => boolean;
export declare const isURL: (o: any) => boolean;
export declare const isFormData: (o: any) => boolean;
export declare const isFile: (o: any) => boolean;

export declare const isFalse: (o: any) => boolean;
export declare const isTrue: (o: any) => boolean;

export declare const isCardID: (sId: string) => boolean;

export declare const isMobile: () => boolean;
export declare const isIos: () => boolean;
export declare const isPC: () => boolean;
export declare const isPcBrowser: () => boolean;
export declare const getMobileEnv: () => string;
export declare const getBrowserType: () => string;

export declare const checkPasswordLevel: (password: string) => number;

export declare const checkFormat: (str: string, type: string) => boolean;

export declare const isFullScreen: () => boolean;

// 类型常量定义
export declare const validTypesSet: Set<string>;

// 密码规则正则表达式
export declare const passwordRules: RegExp[];

// 正则表达式映射
export declare const regExpMap: {
  phone: RegExp;
  tel: RegExp;
  card: RegExp;
  pwd: RegExp;
  postal: RegExp;
  QQ: RegExp;
  email: RegExp;
  money: RegExp;
  URL: RegExp;
  IP: RegExp;
  date: RegExp;
  number: RegExp;
  english: RegExp;
  chinese: RegExp;
  lower: RegExp;
  upper: RegExp;
  HTML: RegExp;
};
