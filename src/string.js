/**
 * 字符串脱敏处理
 * @param {string} str - 需要脱敏的字符串
 * @param {Object} [options={}] - 脱敏选项
 * @param {string} [options.char="*"] - 脱敏字符
 * @param {number} [options.startIndex=0] - 脱敏起始位置（包含）
 * @param {number} [options.endIndex=str.length] - 脱敏结束位置（不包含）
 * @returns {string} 已脱敏字符串，如果输入为空则返回原值
 * @version 1.1.0-beta.11
 */
export const desens = function (str, options = {}) {
  if (str == null) return str;

  str = String(str);
  const len = str.length;

  let {
    char,
    startIndex,
    endIndex,
  } = {
    char: "*",
    startIndex: 0,
    endIndex: str?.toString().length || 0,
    ...options
  }

  // 参数边界处理
  const start = Math.max(0, startIndex);
  const end = Math.min(len, endIndex);

  // 如果起始位置大于等于结束位置，则不进行脱敏
  if (start >= end) {
    return str;
  }

  const leftStr = str.substring(0, start);
  const rightStr = str.substring(end);
  const maskStr = char.repeat(end - start);

  return leftStr + maskStr + rightStr;
};

/**
 * 去除字符串中前后指定字符
 * @param {string} str - 去除字符的字符串
 * @param {string} [chars=''] - 去除的字符（默认为空格）
 * @returns {string} 已去前后除字符的字符串
 * @version 2.0.0
 */
export const trim = function (str, chars) {
  if (str == null) return str;
  str = String(str);

  // 如果未指定chars或为空字符串，则只删除前后空格
  if (chars == null) {
    return str.replace(/^\s+|\s+$/g, '');
  } else {
    // 转义特殊字符
    const escapedChars = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regExp = new RegExp(`^[${escapedChars}]+|[${escapedChars}]+$`, 'g');
    return str.replace(regExp, '');
  }
}

/**
 * 去除字符串中所有指定字符
 * @param {string} str 需要去除字符的字符串
 * @param {string} chars 需要去除的字符（默认为空格）
 * @returns {string} 已去除指定字符的字符串
 * @version 2.0.0
 */
export const trimAll = function (str, chars) {
  if (str == null) return str;
  str = String(str);

  if (chars == null) {
    return str.replace(/\s+/g, '');
  }

  // 转义特殊字符以安全地构建正则表达式
  const escapedChars = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const regExp = new RegExp(`[${escapedChars}]+`, 'g');
  return str.replace(regExp, '');
};

/**
 * 去除字符串中末尾空格或指定字符
 * @param {string} str 需要去除字符的字符串
 * @param {string} chars 需要去除的字符（默认为空格）
 * @returns {string} 已去除末尾指定字符的字符串
 * @version 2.0.0
 */
export const trimEnd = function (str, chars) {
  if (str == null) return str;
  str = String(str);

  if (chars == null) {
    return str.replace(/\s+$/, '');
  }

  // 转义特殊字符以安全地构建正则表达式
  const escapedChars = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const regExp = new RegExp(`[${escapedChars}]+$`, 'g');
  return str.replace(regExp, '');
};

/**
 * 去除字符串中开头空格或指定字符
 * @param {string} str - 需要去除字符的字符串
 * @param {string} chars - 需要去除的字符（默认为空格）
 * @returns {string} 已去除开头指定字符的字符串
 * @version 2.0.0
 */
export const trimStart = function (str, chars) {
  if (str == null) return str;
  str = String(str);

  // 如果未指定chars或为空字符串，则只删除开头空格
  if (chars == null) {
    return str.replace(/^\s+/, '');
  }

  // 转义特殊字符以安全地构建正则表达式
  const escapedChars = chars.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const regExp = new RegExp(`^[${escapedChars}]+`, 'g');
  return str.replace(regExp, '');
};

/**
 * 将整个字符串字符转换为大写形式
 * @param {string} str - 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @version 2.0.0
 */
export const toUpperCase = function (str) {
  if (str == null) return str;
  return String(str).toUpperCase();
}

/**
 * 将字符串首个字符转大写
 * @param {string} str - 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @version 2.0.0
 */
export const toUpperCaseFirst = function (str) {
  if (str == null) return str;

  str = String(str);

  return str.replace(/\b\w+\b/g, function (word) {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  });
};


/**
 * 将整个字符串字符转换为小写形式
 * @param {string} str - 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @version 2.0.0
 */
export const toLowerCase = function (str) {
  if (str == null) return str;
  return String(str).toLowerCase();
}

/**
 * 将字符串首个字符转小写
 * @param {string} str - 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @version 2.0.0
 */
export const toLowerCaseFirst = function (str) {
  if (str == null) return str;

  str = String(str);

  return str.replace(/\b\w+\b/g, function (word) {
    return word.substring(0, 1).toLowerCase() + word.substring(1);
  });
};

/**
 * 生成随机验证码
 * @param {number} [length=4] - 验证码长度
 * @param {string} [checkCode] - 需要避免重复的验证码
 * @param {string} [charset='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'] 字符集
 * @returns {string} 生成的随机验证码
 */
export const randomCode = function (length = 4, checkCode, charset) {
  // 参数验证
  if (typeof length !== 'number' || length <= 0) {
    length = 4;
  }

  // 校验字符集有效性
  if (charset == null || typeof charset !== 'string' || charset.length === 0) {
    charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  // 提取生成验证码的逻辑
  const generateCode = () => {
    let code = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset[randomIndex];
    }
    return code;
  };

  let code = generateCode();

  // 检查是否与指定验证码重复，如果重复则重新生成
  if (checkCode && checkCode === code) {
    let attempts = 0;
    const maxAttempts = 10; // 限制尝试次数

    while (checkCode === code && attempts < maxAttempts) {
      code = generateCode();
      attempts++;
    }

    // 如果超过最大尝试次数仍然相同，抛出错误
    if (checkCode === code) {
      throw new Error('无法生成不重复的验证码，请检查参数设置');
    }
  }

  return code;
};

/**
 * 查找子字符串在字符串中出现的次数
 * @param {string} str - 主字符串
 * @param {string} key - 要查找的子字符串
 * @returns {number} 出现次数
 */
export const countInString = function (str, key) {
  // 参数验证和边界检查
  if (!str || !key || typeof str !== 'string' || typeof key !== 'string') {
    return 0;
  }

  // 避免无限循环
  if (key.length === 0) {
    return 0;
  }

  let count = 0;
  let index = 0;

  while ((index = str.indexOf(key, index)) !== -1) {
    count++;
    index += key.length; // 移动到匹配项之后继续查找
  }
  return count;
};

/**
 * 在字符串开头填充指定字符，使字符串达到指定长度
 * @param {string} str - 要填充的字符串
 * @param {number} [length=0] - 目标长度
 * @param {string} [chars] - 填充字符
 * @returns {string} 返回填充后的字符串
 * @version 1.1.0-beta.11
 */
export const padStart = function (str, length = 0, chars) {
  if (str == null) return str

  // 转换为字符串
  str = String(str);

  // 确保目标长度为有效数字
  length = Math.floor(length) || 0;

  // 如果目标长度小于等于当前长度，直接返回原字符串
  if (length <= str.length) {
    return str;
  }

  return str.padStart(length, chars);
};


/**
 * 在字符串结尾填充指定字符，使字符串达到指定长度
 * @param {string} str - 要填充的字符串
 * @param {number} [length=0] - 目标长度
 * @param {string} [chars] - 填充字符
 * @returns {string} 返回填充后的字符串
 * @version 1.1.0-beta.11
 */
export const padEnd = function (str, length = 0, chars) {
  if (str == null) return str

  // 转换为字符串
  str = String(str);

  // 确保目标长度为有效数字
  length = Math.floor(length) || 0;

  // 如果目标长度小于等于当前长度，直接返回原字符串
  if (length <= str.length) {
    return str;
  }

  return str.padEnd(length, chars);
};

// 预定义默认单位
const DEFAULT_UNITS = [
  // CSS单位
  'px', 'em', 'rem', 'ex', 'ch', 'vw', 'vh', 'vmin', 'vmax', '%',
  'cm', 'mm', 'in', 'pt', 'pc',
  'deg', 'rad', 'grad', 'turn',
  's', 'ms',
  'hz', 'khz',
  // 度量单位
  'm', 'km', 'dm', 'cm', 'mm', 'μm', 'nm',
  'kg', 'g', 't', 'lb', 'oz',
  'l', 'L', 'ml',
  'km²', 'm²', 'cm²', 'mm²',
  'km³', 'm³', 'cm³', 'mm³',
  //时间单位
  'ms', 's', 'min', 'h', 'd', 'w', 'y',
  'ns', 'ps', 'fs',
  'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB',
  // 其他常见符号单位
  '$', '¥',
  'Pa', 'atm', '℃', 'A'
];
/**
 * 判断字符串是否为"数字+单位"格式
 * 支持常见的CSS单位、度量单位等，可通过自定义单位列表扩展
 * @param {string} str - 待检测的字符串
 * @param {Array<string>} [customUnits=[]] - 自定义单位列表
 * @returns {boolean} 是否为数字加单位格式
 */
export const hasUnit = function (str, customUnits = []) {
  // 处理空值和非字符串情况
  if (str == null || typeof str !== 'string') {
    return false;
  }

  // 合并默认单位和自定义单位
  const allUnits = [...new Set([...DEFAULT_UNITS, ...customUnits])];

  // 构建正则表达式
  const unitsPattern = allUnits.join('|');
  const unitPattern = new RegExp(`^-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)(${unitsPattern})$`, 'i');
  const numberPattern = /^-?(?:\d+(?:\.\d+)?|\.\d+)$/;

  return unitPattern.test(str) && !numberPattern.test(str);
};

/**
 * 去除字符串中的单位，仅保留数字部分
 * 支持去除各种常见单位（CSS单位、度量单位等）
 * @param {string} str - 包含单位的字符串
 * @param {Array<string>} [customUnits=[]] - 自定义单位列表
 * @returns {string} 去除单位后的字符串（仅保留数字部分）
 * @version 1.1.0-beta.12
 */
export const removeUnit = function (str, customUnits = []) {
  // 处理空值情况
  if (str == null || typeof str !== 'string') {
    return str;
  }

  // 如果没有单位，直接返回原字符串
  if (!hasUnit(str, customUnits)) {
    return str;
  }

  // 合并默认单位和自定义单位
  const allUnits = [...new Set([...DEFAULT_UNITS, ...customUnits])];

  // 转义特殊字符并构建正则表达式
  const escapedUnits = allUnits.map(unit =>
      unit.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );

  // 构建匹配字符串末尾单位的正则表达式
  const unitPattern = new RegExp(`(${escapedUnits.join('|')})$`, 'i');

  // 去除单位
  return str.replace(unitPattern, '');
};


/**
 * 驼峰命名转短横线命名（kebab-case）
 * 将驼峰格式字符串转换为短横线分隔格式
 * @param {string} str - 需要转换的驼峰格式字符串
 * @param {string} [separator='-'] - 分隔符，默认为短横线
 * @returns {string} 转换后的短横线分隔字符串
 * @version 1.1.0-beta.13
 */
export const camelToKebab = function (str, separator = '-') {
  if (str == null) return str;
  str = String(str);

  // 处理各种格式的字符串转换为短横线分隔格式
  return str
      // 处理驼峰命名：在小写字母和大写字母之间添加分隔符
      .replace(/([a-z])([A-Z])/g, `$1${separator}$2`)
      // 处理连续大写字母：在大写字母和小写字母之间添加分隔符
      .replace(/([A-Z])([A-Z][a-z])/g, `$1${separator}$2`)
      // 处理空格和下划线分隔符
      .replace(/[_\s]+/g, separator)
      // 移除开头的分隔符
      .replace(new RegExp(`^${separator}+`), '')
      // 移除结尾的分隔符
      .replace(new RegExp(`${separator}+$`), '')
      // 将多个连续分隔符替换为单个分隔符
      .replace(new RegExp(`${separator}+`, 'g'), separator)
      .toLowerCase();
}

/**
 * 短横线命名转驼峰命名（camelCase）
 * 将短横线分隔格式字符串转换为驼峰格式
 * @param {string} str - 需要转换的短横线分隔字符串
 * @returns {string} 转换后的驼峰格式字符串
 * @version 1.1.0-beta.13
 */
export const kebabToCamel = function (str) {
  if (str == null) return str;
  str = String(str);

  // 将各种分隔符（空格、短横线、下划线、@等特殊字符）统一替换为短横线
  // 然后将字符串按短横线分割，首字母小写，其余单词首字母大写
  return str
      // 将非字母数字字符替换为短横线
      .replace(/[^a-zA-Z0-9]/g, '-')
      // 将多个连续的短横线替换为单个短横线
      .replace(/-+/g, '-')
      // 移除开头的短横线
      .replace(/^-/, '')
      // 移除结尾的短横线
      .replace(/-$/, '')
      // 分割字符串并转换为驼峰命名
      .split('-')
      .map((word, index) => {
        if (index === 0) {
          // 第一个单词全部小写
          return word.toLowerCase();
        }
        // 其他单词首字母大写，其余小写
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
}
