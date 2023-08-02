import {isNumeric, isString} from "./inspect.js";

/**
 * 根据区间获取随机数
 * @param {(number|string)} [min=0] 最小值（包含）
 * @param {(number|string)} [max=1] 最大值（不包含）
 * @param {boolean} [floating=true] 是否返回浮点数
 * @returns {number} 随机数
 * @version 1.1.0-beta.11
 */
const random = function (min = 0, max = 1, floating = true) {
    if (isNumeric(min) && isNumeric(max)) {
        if (isString(min)) min = Number(min)
        if (isString(max)) max = Number(max)
        const r = min + Math.random() * (max - min)
        return floating ? r : Math.floor(r);
    } else {
        console.warn('min、max期望是Number类型或String类型的数字')
    }

};

/**
 * 判断数字是否在区间内
 * @param {number} num 数字
 * @param {number} min 最小值（不包含）
 * @param {number} max 最大值（不包含）
 * @returns {boolean} 是否在区间内
 * @version 1.1.0-beta.11
 */
const inRange = function (num, min, max) {
    return num > min && num < max
}

/**
 * 将数字转成中文大写
 * @param {(number|string)} num 数字
 * @returns {string} 中文大写
 */
const toChinese = function (num) {
    if (!/^\d*(\.\d*)?$/.test(num)) {
        console.warn("num期望是Number类型或String类型的数字");
        return undefined
    }
    let AA = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    let BB = ["", "十", "百", "仟", "萬", "億", "点", ""];
    let a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (let i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0)
            re = AA[0] + re;
        if (a[0].charAt(i) !== 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }

    if (a.length > 1) {
        // 加上小数部分(如果有小数部分)
        re += BB[6];
        for (let i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];
    }
    if (re === "一十") re = "十";
    if (re.match(/^一/) && re.length === 3) re = re.replace("一", "");
    return re;
};

/**
 * 将数字金额转为中文大写金额
 * @param {(number|string)} num 数字金额
 * @returns {string} 中文大写金额
 * @version 1.1.0-beta.11
 */
const toCny = function (num) {
    if (!/^\d*(\.\d*)?$/.test(num)) {
        console.warn("num期望是Number类型或String类型的数字")
        return undefined
    }
    //判断如果传递进来的不是字符的话转换为字符
    if (typeof num == "number") {
        num = String(num);
    }

    num = num.replace(/,/g, ""); //替换tomoney()中的“,”
    num = num.replace(/ /g, ""); //替换tomoney()中的空格
    num = num.replace(/¥/g, ""); //替换掉可能出现的¥字符
    if (isNaN(num)) {
        //验证输入的字符是否为数字
        return "";
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    let part = String(num).split(".");
    let newchar = "";
    //小数点前进行转化
    for (let i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            return "";
            //若数量超过拾亿单位，提示
        }
        let tmpnewchar = "";
        let perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":
                tmpnewchar = "零" + tmpnewchar;
                break;
            case "1":
                tmpnewchar = "壹" + tmpnewchar;
                break;
            case "2":
                tmpnewchar = "贰" + tmpnewchar;
                break;
            case "3":
                tmpnewchar = "叁" + tmpnewchar;
                break;
            case "4":
                tmpnewchar = "肆" + tmpnewchar;
                break;
            case "5":
                tmpnewchar = "伍" + tmpnewchar;
                break;
            case "6":
                tmpnewchar = "陆" + tmpnewchar;
                break;
            case "7":
                tmpnewchar = "柒" + tmpnewchar;
                break;
            case "8":
                tmpnewchar = "捌" + tmpnewchar;
                break;
            case "9":
                tmpnewchar = "玖" + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + "元";
                break;
            case 1:
                if (perchar !== 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 2:
                if (perchar !== 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 3:
                if (perchar !== 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 4:
                tmpnewchar = tmpnewchar + "万";
                break;
            case 5:
                if (perchar !== 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 6:
                if (perchar !== 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 7:
                if (perchar !== 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 8:
                tmpnewchar = tmpnewchar + "亿";
                break;
            case 9:
                tmpnewchar = tmpnewchar + "拾";
                break;
        }
        newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (num.indexOf(".") !== -1) {
        if (part[1].length > 2) {
            part[1] = part[1].substr(0, 2);
        }
        for (let i = 0; i < part[1].length; i++) {
            let tmpnewchar = "";
            let perchar = part[1].charAt(i);
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            if (i === 0) tmpnewchar = tmpnewchar + "角";
            if (i === 1) tmpnewchar = tmpnewchar + "分";
            newchar = newchar + tmpnewchar;
        }
    }
    //替换所有无用汉字
    while (newchar.search("零零") !== -1) newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) === "元") {
        newchar = newchar + "整";
    }
    return newchar;
};

/**
 * 将数字千分位分割
 * @param {(number|string)} num 数字
 * @returns {string} 千分位分割后的字符串
 */
const thousandSeparator = function (num) {
    if (!/^\d*(\.\d*)?$/.test(num)) {
        console.warn("num期望是Number类型或String类型的数字")
        return undefined;
    }
    return (
        num &&
        (num.toString().indexOf(".") !== -1
            ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2) {
                return $2 + ",";
            })
            : num.toString().replace(/(\d)(?=(\d{3})+\b)/g, function ($1, $2) {
                return $2 + ",";
            }))
    );
}

/**
 * 数字格式化
 * @param {number} num 数字
 * @param {number} digits 保留小数位数
 * @returns {string} 格式化后的字符串
 * @version 1.1.0-beta.8
 */
const numberFormatter = function (num, digits) {
    const si = [
        {value: 1e18, symbol: "E"},
        {value: 1e15, symbol: "P"},
        {value: 1e12, symbol: "T"},
        {value: 1e9, symbol: "G"},
        {value: 1e6, symbol: "M"},
        {value: 1e3, symbol: "k"}
    ];
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (
                (num / si[i].value)
                    .toFixed(digits)
                    .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[i].symbol
            );
        }
    }
    return num.toString();
}


export {
    random,
    inRange,
    toChinese,
    toCny,
    thousandSeparator,
    numberFormatter,
}
