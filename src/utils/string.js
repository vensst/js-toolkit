/**
 * 字符串脱敏
 * @param {(string|number)} str 需要脱敏字符串
 * @param {number} [startIndex=0] 脱敏起始位置
 * @param {number} [endIndex=0] 脱敏结束位置
 * @param {string} [char="*"] 脱敏字符
 * @returns {string} 已脱敏字符串
 * @version 2.0.0-beta.1
 */
const desensitization = function (str, startIndex = 0, endIndex = 0, char = "*") {
    if (str) {
        str = str.toString();
        const len = str.length;
        const leftStr = str.substring(0, startIndex);
        const rightStr = str.substring(endIndex, len);
        let newStr = "";
        try {
            for (let i = 0; i < endIndex - startIndex; i++) {
                newStr = newStr + char;
            }
        } catch (error) {
            throw new Error(error);
        }
        newStr = leftStr + newStr + rightStr;
        return newStr;
    } else return str;
};

/**
 * 去除字符串空格
 * @param {string} str 需要去除空格的字符串
 * @param {number} [type=2] 类型 1:所有空格  2:前后空格(默认)  3:前空格 4:后空格
 * @returns {string} 已去除的字符串
 * @version 2.0.0-beta.1
 */
const trim = function (str = '', type = 2) {
    str = str.toString();
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
};

/**
 * 字符串首字母转大写
 * @param {string} str 要转换的英文字符串
 * @returns {string} 已转换的英文字符串
 * @version 1.1.0-beta.8
 */
const toUpperCaseFirst = function (str = '') {
    str = str.toString();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 字符串转大写
 * @param {string} str 要转换的字符串
 * @param {number} [type=1] 类型 1:全部大写(默认)  2:每个单词首字母大写（单词剩余部分不转） 3:每个单词首字母大写（单词剩余部分转小写）
 * @returns {string} 已转换的字符串
 * @version 2.0.0-beta.1
 */
const toUpperCase = function (str = '', type = 1) {
    str = str.toString();
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1);
            });
        case 3:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
    }

}

/**
 * 字符串转小写
 * @param {string} str 要转换的字符串
 * @param {number} [type=1] 类型 1:全部小写(默认)  2:每个单词首字母小写（剩余部分不转） 3:每个单词首字母小写（剩余部分转大写）
 * @returns {string} 已转换的字符串
 * @version 2.0.0-beta.1
 */
const toLowerCase = function (str = '', type = 1) {
    str = str.toString()
    switch (type) {
        case 1:
            return str.toLowerCase();
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1);
            });
        case 3:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
    }
}

/**
 * 过滤 html代码(把 <、> 和 & 转换)
 * @param {string} str html字符串
 * @returns {*}
 */
const filterHtmlTag = function (str) {
    str = str?.replace(/&/gi, "&amp;");
    str = str?.replace(/</gi, "&lt;");
    str = str?.replace(/>/gi, "&gt;");
    str = str?.replace(" ", " ");
    return str;
};

/**
 * 生成随机验证码
 * @param {number} [length=4] 随机验证码的长度，默认4位
 * @param {(string|number)} checkCode 当前随机码（防止重复）
 * @returns {string}
 */
const randomCode = function (length = 4, checkCode) {
    let code = "";
    const codeLength = parseInt(length);
    const charset = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    // 循环组成验证码的字符串
    for (let i = 0; i < codeLength; i++) {
        // 获取随机验证码下标
        const randomIndex = Math.floor(Math.random() * charset.length);
        // 组合成指定字符验证码
        code += charset[randomIndex];
    }
    if (checkCode && checkCode === code) {
        randomCode(length, checkCode);
    } else {
        return code;
    }
}

export {
    desensitization,
    trim,
    toUpperCaseFirst,
    toUpperCase,
    toLowerCase,
    filterHtmlTag,
    randomCode,
}
