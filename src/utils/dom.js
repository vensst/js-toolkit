export const $ = function (selector) {
  var type = selector.substring(0, 1);
  if (type === '#') {
    if (document.querySelecotor) return document.querySelector(selector)
    return document.getElementById(selector.substring(1))

  } else if (type === '.') {
    if (document.querySelecotorAll) return document.querySelectorAll(selector)
    return document.getElementsByClassName(selector.substring(1))
  } else {
    return document['querySelectorAll' ? 'querySelectorAll' : 'getElementsByTagName'](selector)
  }
}

/*
* @desc 检测类名 校验指定元素的类名
* @param {String} ele
* @param {String} name
* @return {Boolean}
* */
export const hasClass = function (ele, name) {
  // return ele.classList.contains(name);
  return ele.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
}

/*添加类名*/
export const addClass = function (ele, name) {
  if (!this.hasClass(ele, name)) ele.className += " " + name;
}

/*删除类名*/
export const removeClass = function (ele, name) {
  if (this.hasClass(ele, name)) {
    var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
    ele.className = ele.className.replace(reg, '');
  }
}

/*替换类名*/
export const replaceClass = function (ele, newName, oldName) {
  this.removeClass(ele, oldName);
  this.addClass(ele, newName);
}

/*获取兄弟节点*/
export const siblings = function (ele) {
  console.log(ele.parentNode)
  var chid = ele.parentNode.children, eleMatch = [];
  for (var i = 0, len = chid.length; i < len; i++) {
    if (chid[i] != ele) {
      eleMatch.push(chid[i]);
    }
  }
  return eleMatch;
}

/*获取行间样式属性*/
export const getByStyle = function (obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, false)[name];
  }
}

/*
* @desc 在指定元素之后插入新元素
* @param {String} el 当前元素
* @param {String} htmlString 插入元素
* */
export const elInsertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

/*
* @desc 在指定元素之前插入新元素
* @param {String} el 当前元素
* @param {String} htmlString 插入元素
* */
const elInsertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
