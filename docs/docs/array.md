# 数组

## find

- 说明：

  返回数组中满足提供的函数的判断条件的第一个元素的值

- 添加版本：1.1.0-beta.11

- 参数：

  - {Array} arr 数组
  - {Function} callback 回调函数
  - {number} [fromIndex=0] 从该索引处开始查找

- 返回值：

  {undefined|\*} 满足条件的元素值

- 示例：

```js
const arr = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
    age: 28,
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "c",
    age: 28,
  },
];
jsToolkit.find(arr, (item) => item.name === "a");
// {id: 1, name: 'a'}
```

## findIndex

- 说明：

  返回数组中满足提供的函数的判断条件的第一个元素的下标,未找到返回-1

- 添加版本：1.1.0-beta.11

- 参数：

  - {Array} arr 数组
  - {Function} callback 回调函数
  - {number} [fromIndex=0] 从该索引处开始查找

- 返回值：

  {number} 满足条件的元素下标或-1

- 示例：

```js
const arr = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
    age: 28,
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "c",
    age: 28,
  },
];
jsToolkit.findIndex(arr, (item) => item.name === "b");
```

## forEach

- 说明：

  自定义 forEach 函数

- 添加版本：1.1.0-beta.11

- 参数：

  - {any[]} arr 数组
  - {Function} callback 回调函数
  - {Object} [thisObj] this 指向

- 示例：

```js
let arr = [1, 2, 3];
jsToolkit.forEach(arr, (item, index) => {
  console.log("--forEach--", item, index);
});
```

## map

- 说明：

  自定义 map 函数

- 参数：

  - {any[]} arr 数组
  - {Function} callback 回调函数
  - {Object} [thisObj] this 指向

- 返回值：

  {\*[]}

- 示例：

```js
const arr1 = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "c",
    age: 28,
  },
];
const _arr1 = jsToolkit.map(arr1, (item, index) => {
  return {id: item.id, name: item.name};
});
console.log("--map--", _arr1);
```

## join

- 说明：

  对象数组中根据指定属性名以及拼接字符，返回拼接的属性名的值的字符串（普通或对象数组）

- 添加版本：1.1.0-beta.11

- 参数：

  - {Object[]|string} arr 对象数组
  - {string} char 符号
  - {string} [attrName] 属性名，该参数有值是 arr 必须是对象数组

- 返回值：

  {string} 符号拼接的字符串

- 示例：

```js
jsToolkit.join(arr1, ",", "id");
// 1,2,3,4,4,3,4
jsToolkit.join([1, 2, 3, 4, 5], "-");
// 1-2-3-4-5
```

## sort

- 说明：

  排序

- 参数：

  - {number[]} arr number 类型数组
  - {number} [type=1] 排序类型 1：从小到大 2：从大到小 3：随机

- 返回值：

  {number[]} 排序后的数组

- 示例：

```js
const _sortArrr = sort([1, 2, 3, 2, 3, 4]);
console.log(_sortArrr); // [1, 2, 2, 3, 3, 4]
```

## unique

- 说明：

  数组去重（普通数组或对象数组都可以）

- 添加版本：1.1.0-beta.11

- 参数：

  - {Array\<any\>} arr 数组
  - {string} [attrName] 指定属性名称 (如果传这个值，就是对象数组去重，arr 参数必须是对象数组)

- 返回值：

  {Array} 去重后的数组

- 示例：

```js
const arr1 = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
    age: 28,
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "c",
    age: 28,
  },
];
jsToolkit.unique([1, 2, 3, 4, 3, "a", "a", "b"]);
// [1, 2, 3, 4, 5, 6]
jsToolkit.unique(arr1);
jsToolkit.unique(arr1, "name");
```

## union

- 说明：

  求两个数组的并集（普通数组或对象数组都可以）

- 参数：

  - {any[]} arr1 数组
  - {any[]} arr2 数组
  - {string} [attrName] 指定属性名称 (如果传这个值，就是对象数组合并，arr1 和 arr2 必须是对象数组)

- 返回值：

  {any[]} 返回并集数组

- 示例：

```js
const arr1 = [1, 2, 3, 4, 3];
const arr2 = [3, 4, 5, 3, 6, 6];
const arr3 = [{id: 1}, {id: 2}, {id: 3, name: "a"}, {id: 3}];
const arr4 = [{id: 3}, {id: 4}, {id: 4}, {id: 5}];
jsttk.union(arr1, arr2);
jsttk.union(arr3, arr4);
jsttk.union(arr3, arr4, "id");
```

## intersect

- 说明：

  求两个数组的交集

- 参数：

  - {any[]} arr1 数组
  - {any[]} arr2 数组
  - {string} [attrName] 指定属性名称 (如果传这个值，就是求两个对象数组交集，arr1 和 arr2 必须是对象数组)

- 返回值：

  {any[]} 返回交集数组

- 示例：

```js
const arr1 = [1, 2, 3, 4, 3];
const arr2 = [3, 4, 5, 3, 6, 6];
const arr3 = [{id: 1}, {id: 2}, {id: 3, name: "a"}, {id: 3}];
const arr4 = [{id: 3}, {id: 4}, {id: 4}, {id: 5}];
jsToolkit.intersect(arr1, arr2);
jsToolkit.intersect(arr3, arr4);
jsToolkit.intersect(arr3, arr4, "id");
```

## intersectInMatrix

- 说明：

  在二维数组中根据指定属性名获取数组的交集

- 参数：
  - {Array\<Array\<Object\>\>} arr 数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
  - {string} [attrName] 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组
- 返回值：

  {any[]} 返回交集数组

- 示例：

```js
const arr1 = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
    age: 28,
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 4,
    name: "c",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "c",
    age: 28,
  },
];
const arr2 = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 3,
    name: "c",
  },
];
const arr3 = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
];
const arr4 = [
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
];
const arr = [arr1, arr2, arr3, arr4];
jsToolkit.intersectInMatrix(arr);
jsToolkit.intersectInMatrix(arr, "id");
```

## elCount

- 说明：

  对象数组重复数据添加标记

- 参数：

  - {any[]} arr 数组
  - {(Function|\*)} predicate 指定元素或者回调函数

- 返回值：

  {number} 返回出现次数

- 示例：

```js
const arr1 = [1, 2, 3, 2, 3, 4];
jsToolkit.elCount(arr1, 2);
jsToolkit.elCount(arr1, (item) => item === 2);
```

## duplicateDataTag

- 说明：

  对象数组重复数据添加标记

- 参数：

  - {Object[]} arr 对象数组
  - {string} attrName 指定属性名称 例如：'a'
  - {string} tagAttrName 标记属性名称 默认：'\_xh' 值从 1 开始

- 返回值：

  {Object[]} 返回新的对象数组

- 示例：

```js
const arr7 = [
  {
    nodeStr: "div",
  },
  {
    nodeStr: "span",
  },
  {
    nodeStr: "p",
  },
  {
    nodeStr: "div",
  },
  {
    nodeStr: "div",
  },
  {
    nodeStr: "p",
  },
  {
    nodeStr: "span",
  },
  {
    nodeStr: "span",
  },
];
jsToolkit.duplicateDataTag(arr7, "nodeStr", "axh");
// [
//   {nodeStr: 'div', axh: 1},
//   {nodeStr: 'span', axh: 1},
//   {nodeStr: 'p', axh: 1},
//   {nodeStr: 'div', axh: 2},
//   {nodeStr: 'div', axh: 3},
//   {nodeStr: 'p', axh: 2},
//   {nodeStr: 'span', axh: 2},
//   {nodeStr: 'span', axh: 3}
// ]
```

## groupByAttr

- 说明：

  根据指定属性对数组进行分组

- 添加版本：1.1.0-beta.11

- 参数：

  - {Object[]} arr 对象数组
  - {string} attrName 指定属性名称

- 返回值：

  {Object} 返回分组后的对象

- 示例：

```js
const arr8 = [
  {
    nodeStr: "div",
    nodeSize: 1,
  },
  {
    nodeStr: "span",
    nodeSize: 2,
  },
  {
    nodeStr: "p",
    nodeSize: 3,
  },
  {
    nodeStr: "div",
    nodeSize: 4,
  },
  {
    nodeStr: "div",
    nodeSize: 5,
  },
  {
    nodeStr: "p",
    nodeSize: 6,
  },
  {
    nodeStr: "span",
    nodeSize: 7,
  },
  {
    nodeStr: "span",
    nodeSize: 8,
  },
];
jsToolkit.groupByAttr(arr8, "nodeStr");
```

## groupBySize

- 说明：

  根据指定长度对数组进行分组

- 添加版本：

- 参数：

  - {any[]} arr 数组
  - {number} size 指定长度

- 返回值：

  {any[][]} 返回分组后的二维数组

- 示例：

```js
const arr8 = [
  {
    nodeStr: "div",
    nodeSize: 1,
  },
  {
    nodeStr: "span",
    nodeSize: 2,
  },
  {
    nodeStr: "p",
    nodeSize: 3,
  },
  {
    nodeStr: "div",
    nodeSize: 4,
  },
  {
    nodeStr: "div",
    nodeSize: 5,
  },
  {
    nodeStr: "p",
    nodeSize: 6,
  },
  {
    nodeStr: "span",
    nodeSize: 7,
  },
  {
    nodeStr: "span",
    nodeSize: 8,
  },
];
jsToolkit.groupBySize(arr8, 4);
```

## toArray

- 说明：

  将类数组转换为数组的方法

- 参数：

  - {any[]} arr 类数组

- 返回值：

  {Array} 数组

- 示例：

```js
const fun = function (a, b) {
  console.log(toArray(arguments));
};
fun(1, 2);
```

## arrayToTree

- 说明：

  一维数组转树形结构数据

- 添加版本：1.1.0-beta.16

- 参数：

  - {Array} arr 数组
  - {Object} options 配置项
  - {string} [options.id='id'] 唯一表示字段
  - {string} [options.parentId='parentId'] 父级标识字段
  - {string} [options.children='children'] 子级数据字段

- 返回值：

  {\*[]}

- 示例：

```js
const flatArray = [
  {code: 1, parentCode: null, name: "节点1"},
  {code: 2, parentCode: 1, name: "节点1.1"},
  {code: 3, parentCode: 1, name: "节点1.2"},
  {code: 4, parentCode: 2, name: "节点1.1.1"},
  {code: 5, parentCode: 2, name: "节点1.1.2"},
  {code: 6, parentCode: null, name: "节点2"},
  {code: 7, parentCode: 6, name: "节点2.1"},
  {code: 8, parentCode: 6, name: "节点2.2"},
];

const tree = jsToolkit.arrayToTree(flatArray, {
  id: "code",
  parentId: "parentCode",
  children: "sons",
});
console.log("buildTree", tree);
```

## treeToArray

- 说明：

  树形数据转一维数组

- 参数：

  - {Array} tree 树形结构数组
  - {Object} options 配置项
  - {string} [options.children='children'] 子级数据字段

- 添加版本：1.1.0-beta.16

- 返回值：

  {\*[]}

- 示例：

```js
const tree = [
  {
    id: 1,
    name: "节点1",
    children: [
      {
        id: 2,
        name: "节点1.1",
        children: [
          {id: 4, name: "节点1.1.1", children: []},
          {id: 5, name: "节点1.1.2", children: []},
        ],
      },
      {id: 3, name: "节点1.2", children: []},
    ],
  },
  {
    id: 6,
    name: "节点2",
    children: [
      {id: 7, name: "节点2.1", children: []},
      {id: 8, name: "节点2.2", children: []},
    ],
  },
];

const flatArray = treeToArray(tree);
console.log("treeToArray", flatArray);
```

## findTreePath

- 说明：

  在树形结构中查找目标节点的路径

- 参数：

  - {Array} tree 树形结构数据
  - {string} targetKey 目标键名
  - {string} targetValue 目标键值
  - {string} [childrenKey='children'] 子节点键名
  - {string} [backKey='id'] 返回值的键名

- 添加版本：@version 1.2.0

- 返回值：

  {null|*[]}

- 示例：

```js
const tree = [
  {
    id: 1,
    name: "节点1",
    children: [
      {
        id: 2,
        name: "节点1.1",
        children: [
          {id: 4, name: "节点1.1.1", children: []},
          {id: 5, name: "节点1.1.2", children: []},
        ],
      },
      {id: 3, name: "节点1.2", children: []},
    ],
  },
  {
    id: 6,
    name: "节点2",
    children: [
      {id: 7, name: "节点2.1", children: []},
      {id: 8, name: "节点2.2", children: []},
    ],
  },
];
const path = jsToolkit.findTreePath(tree, "id", 5);// [1, 2, 5]
```

## max

- 说明：

  数组最大值

- 参数：

  - {Array<number|Object>} arr 数组
  - {string} [attrName] 对象数组的属性名

- 添加版本：1.1.0-beta.16

- 返回值：

  {number|\*}

- 示例：

```js
const arr = [9, 3, 25, 64, 2, 3, 45, 7];
const arr1 = [
  {id: 1, name: "a"},
  {id: 2, name: "b"},
  {id: 3, name: "c", age: 28},
];
console.log("max", max(arr), max(arr1, "id")); // max 64 3
```

## min

- 说明：

  数组最小值

- 参数：

  - {Array<number|Object>} arr 数组
  - {string} [attrName] 对象数组的属性名

- 添加版本：1.1.0-beta.16

- 返回值：

  {number|\*}

- 示例：

```js
const arr = [9, 3, 25, 64, 2, 3, 45, 7];
const arr1 = [
  {id: 1, name: "a"},
  {id: 2, name: "b"},
  {id: 3, name: "c", age: 28},
];
console.log("min", max(arr), max(arr1, "id")); // min 2 1
```
