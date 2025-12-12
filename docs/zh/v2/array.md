# Array

## find

- 说明：

  查找数组中元素，返回匹配元素

- 添加版本：1.1.0-beta.11

- 参数：

  - {T[]} arr - 需要查找的数组
  - {(element: T, index: number) => boolean}} callback - 迭代调用的函数
  - {number} [fromIndex=0] - 开始查找的索引位置

- 返回值：

  {T|undefined} - 返回匹配的元素，未找到返回 undefined

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
const arr2 = [123, "abc", {name: "张三"}, ["李四"], null, undefined]
find(arr1, (item) => item.name === "b")
find(arr2, item => item === "abc")
find(arr2, item => item === "zhangsan")
```

## findIndex

- 说明：

  查找数组中元素，返回匹配元素索引

- 添加版本：1.1.0-beta.11

- 参数：

  - {T[]} arr - 需要查找得数组
  - {(element: T, index: number) => boolean} callback - 迭代调用的函数
  - {number} [fromIndex=0] - 开始查找的索引位置

- 返回值：

  {number} - 返回匹配元素的索引，未找到返回 -1

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
const arr2 = [123, "abc", {name: "张三"}, ["李四"], null, undefined]
findIndex(arr1, (item) => item.name === "b")
findIndex(arr2, item => item === "abc")
findIndex(arr2, item => item === "zhangsan")
```

## forEach

- 说明：

  自定义 forEach 函数，支持 async-await

- 添加版本：1.1.0-beta.11

- 参数：

  - {(element: T, index: number, array: T[]) => void|Promise\<void\>} callback - 迭代回调函数
  - {Object} [thisObj=undefined] - 回调函数的 this 指向
  - {Object} [thisObj] this 指向

- 返回值：

  {Promise\<void\>|void} - 如果回调函数是异步的则返回 Promise

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
const obj = {
  name: '张三'
}
const getVal3 = async function (v) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(v)
    }, Math.random() * 1000)
  })
};
const getVal2 = async function (v) {
  let a = await getVal3(v)
  return a;
};

forEach(arr1, async function (item, index) {
  const a = await getVal2(index);
  console.log('forEach', index, a, this)
}, obj);
```

## map

- 说明：

  自定义 map 函数

- 参数：

  - {T[]} arr - 需要映射的数组
  - {(element: T, index: number, array: T[]) => R} callback - 为数组中每个元素执行的回调函数
  - {Object} [thisObj] - 执行回调时用作 this 的对象

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
const obj = {
  name: '张三'
}
const _arr1 = map(arr1, function (item, index) {
  console.log('--map--callback--', index, this)
  return {id: item.id}
}, obj)
```

## join

- 说明：

  对组中元素连接成字符串

- 添加版本：1.1.0-beta.11

- 参数：

  - {T[]} arr - 数组
  - {string} [char=','] - 拼接符号
  - {string} [attrName] - 属性名，迭代数组为对象数组有效

- 返回值：

  {string} - 字符串

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
join([])
join(arr1, "*", "id")
join([1, 2, 3, 4, 5], "-")
```

## sort

- 说明：

  数组排序（支持普通数组和对象数组）

- 参数：

  - {T[]|number[]} arr - 需要排序的数组
  - {number|Function} [predicate=1] - 排序类型或自定义比较函数
    - 1: 从小到大（默认）
    - 2: 从大到小
    - 3: 随机排序
    - Function: 自定义比较函数，接收两个参数 (a, b)，返回值决定排序顺序
  - {string} [attrName] - 对象数组排序时指定的属性名

- 返回值：

  {T[]|number[]} 排序后的新数组

- 示例：

```js
const arr = [1, 2, 3, 2, 3, 4]
const arr2 = [{
  name: "张三",
  age: 18
}, {
  name: "李四",
  age: 16
}, {
  name: "王五",
  age: 20
}, {
  name: "赵六",
  age: 15
}]
sort(arr)
sort(arr, 2)
sort(arr, 3)
sort(arr2, function (a, b) {
  return a.age - b.age
})
```

## unique

- 说明：

  数组去重

- 添加版本：1.1.0-beta.11

- 参数：

  - {T[]} arr - 需要去重的数组
  - {string} [attrName] - 指定属性名称，用于对象数组去重

- 返回值：

  {T[]} 去重后的数组

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
unique([1, 2, 3, 4, 3, 'a', 'a', 'b'])
unique(arr1)
unique(arr1, 'name')
```

## union

- 说明：

  求两个数组的并集

- 参数：

  - {T[]} arr1 - 第一个数组
  - {T[]} arr2 - 第二个数组
  - {string} [attrName] - 指定属性名称（用于对象数组，根据该属性去重）

- 返回值：

  {T[]} 返回并集数组

- 示例：

```js
const arr1 = [1, 2, 3, 4, 3];
const arr2 = [3, 4, 5, 3, 6, 6];
const arr3 = [
  {id: 1},
  {id: 2},
  {id: 3, name: 'a'},
  {id: 3},

];
const arr4 = [
  {id: 3},
  {id: 4},
  {id: 4},
  {id: 5},
];
union(arr1, arr2)
union(arr3, arr4)
union(arr3, arr4, 'id')
```

## intersect

- 说明：

  求两个数组的交集

- 参数：

  - {T[]} arr1 - 第一个数组
  - {T[]} arr2 - 第二个数组
  - {string} [attrName] - 指定属性名称（用于对象数组，根据该属性求交集）

- 返回值：

  {T[]} 返回交集数组

- 示例：

```js
const arr1 = [1, 2, 3, 4, 3];
const arr2 = [3, 4, 5, 3, 6, 6];
const arr3 = [
  {id: 1},
  {id: 2},
  {id: 3, name: 'a'},
  {id: 3},

];
const arr4 = [
  {id: 3},
  {id: 4},
  {id: 4},
  {id: 5},
];
intersect(arr1, arr2)
intersect(arr3, arr4)
intersect(arr3, arr4, 'id')
```

## intersectMatrix

- 说明：

  在二维数组中根据指定属性名获取数组的交集

- 参数：
  - {T[][]} arr - 二维数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]
  - {string} [attrName] - 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组
  
- 返回值：

  {T[]} 返回交集数组

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
intersectMatrix(arr)
intersectMatrix(arr, 'id')
```

## countBy

- 说明：

  查找数组中指定元素出现的次数

- 添加版本：2.0.0

- 参数：

  - {T[]} arr - 要检测的数组
  - {T|((element: T, index: number, array: T[]) => boolean)} predicate - 要查找的元素或判断函数

- 返回值：

  {number} 返回出现次数

- 示例：

```js
const arr1 = [1, 2, 3, 2, 3, 4]
const arr2 = [
  {id: 1},
  {id: 2},
  {id: 3, name: 'a'},
  {id: 3},
  {id: 3},
];
countBy(arr1, 2)
countBy(arr1, item => item === 2)
countBy(arr2, item => item.id === 3)
```

## elCount

- 说明：

  对象数组重复数据添加标记

- 参数：

  - {any[]} arr - 数组
  - {(Function|\*)} predicate - 指定元素或者回调函数

- 返回值：

  {number} 返回出现次数

- 示例：

```js
const arr1 = [1, 2, 3, 2, 3, 4];
jsToolkit.elCount(arr1, 2);
jsToolkit.elCount(arr1, (item) => item === 2);
```

## tagDuplicates

- 说明：

  为对象数组中的重复数据添加序号标记

- 参数：

  - {T[]} arr - 需要处理的对象数组
  - {string} attrName - 用于判断重复的属性名称
  - {string} [tagAttrName="_xh"] - 用于添加序号标记的属性名称

- 返回值：

  {T[]} 返回添加了序号标记的新数组

- 示例：

```js
const arr7 = [
  {
    "nodeStr": "div"
  }, {
    "nodeStr": "span"
  }, {
    "nodeStr": "p"
  }, {
    "nodeStr": "div"
  }, {
    "nodeStr": "div"
  }, {
    "nodeStr": "p"
  }, {
    "nodeStr": "span"
  }, {
    "nodeStr": "span"
  }]
tagDuplicates(arr7, 'nodeStr', 'axh')
```

## groupByAttr

- 说明：

  根据指定属性对数组进行分组

- 添加版本：1.1.0-beta.11

- 参数：

  - {T[]} arr - 需要分组的数组
  - {string} attrName - 用于分组的属性名称

- 返回值：

  {Object\<string, T[]\>} 返回按属性值分组后的对象，键为属性值，值为具有相同属性值的元素数组

- 示例：

```js
  const arr8 = [
  {
    "nodeStr": "div",
    "nodeSize": 1
  }, {
    "nodeStr": "span",
    "nodeSize": 2
  }, {
    "nodeStr": "p",
    "nodeSize": 3
  }, {
    "nodeStr": "div",
    "nodeSize": 4
  }, {
    "nodeStr": "div",
    "nodeSize": 5
  }, {
    "nodeStr": "p",
    "nodeSize": 6
  }, {
    "nodeStr": "span",
    "nodeSize": 7
  }, {
    "nodeStr": "span",
    "nodeSize": 8
  }]
groupByAttr(arr8, 'nodeStr')
```

## groupBySize

- 说明：

  根据指定长度对数组进行分组

- 添加版本：1.1.0-beta.11

- 参数：

  - {T[]} arr - 需要分组的数组
  - {number} size - 每组的元素数量

- 返回值：

  {T[][]} 返回分组后的二维数组

- 示例：

```js
const arr8 = [
  {
    "nodeStr": "div",
    "nodeSize": 1
  }, {
    "nodeStr": "span",
    "nodeSize": 2
  }, {
    "nodeStr": "p",
    "nodeSize": 3
  }, {
    "nodeStr": "div",
    "nodeSize": 4
  }, {
    "nodeStr": "div",
    "nodeSize": 5
  }, {
    "nodeStr": "p",
    "nodeSize": 6
  }, {
    "nodeStr": "span",
    "nodeSize": 7
  }, {
    "nodeStr": "span",
    "nodeSize": 8
  }]
groupBySize(arr8, 4)
```

## toArray

- 说明：

  将类数组转换为数组的方法

- 参数：

  - {ArrayLike\<T\>} arr - 类数组对象（如 arguments、NodeList 等）

- 返回值：

  {T[]} 转换后的数组

- 示例：

```js
const fun = function (a, b) {
  console.log('--toArray--', toArray(arguments))
}
fun(1, 2)
```

## arrayToTree

- 说明：

  将一维数组转为树形结构数据

- 添加版本：1.1.0-beta.16

- 参数：

  - {T[]} arr - 包含父子关系信息的一维数组
  - {Object} [options={}] - 转换配置选项
  - {string} [options.id='id'] - 唯一标识字段名
  - {string} [options.parentId='parentId'] - 父级标识字段名
  - {string} [options.children='children'] - 子级数据字段名

- 返回值：

  {T[]} 树形结构数组

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
  {code: 8, parentCode: 6, name: "节点2.2"}
];

const tree = arrayToTree(flatArray, {id: 'code', parentId: 'parentCode', children: "sons"});
```

## treeToArray

- 说明：

  树形数据转一维数组

- 添加版本：1.1.0-beta.16

- 参数：

  - {T[]} tree - 树形结构数组
  - {Object} [options] - 转换配置选项
  - {string} [options.children='children'] - 子级数据字段名

- 返回值：

  {T[]} 扁平化后的一维数组

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
          {id: 5, name: "节点1.1.2", children: []}
        ]
      },
      {id: 3, name: "节点1.2", children: []}
    ]
  },
  {
    id: 6,
    name: "节点2",
    children: [
      {id: 7, name: "节点2.1", children: []},
      {id: 8, name: "节点2.2", children: []}
    ]
  }
];

const flatArray = treeToArray(tree);
console.log('--treeToArray--', flatArray);
```

## findNodePath

- 说明：

  在树形结构中查找目标节点的路径

- 添加版本：1.2.0

- 参数：

  - {Array} tree - 树形结构数据
  - {string} targetKey - 目标键名
  - {string} targetValue - 目标键值
  - {string} [childrenKey='children'] - 子节点键名
  - {string} [backKey='id'] - 返回值的键名


- 返回值：

  {Array\<any\>|undefined} 找到目标节点时返回路径数组，未找到时返回 null

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
          {id: 5, name: "节点1.1.2", children: []}
        ]
      },
      {id: 3, name: "节点1.2", children: []}
    ]
  },
  {
    id: 6,
    name: "节点2",
    children: [
      {id: 7, name: "节点2.1", children: []},
      {id: 8, name: "节点2.2", children: []}
    ]
  }
];

findNodePath(tree, 'name', '节点2.1')
```

## max

- 说明：

  数组最大值

- 添加版本：1.1.0-beta.16

- 参数：

  - {T[]} arr - 数字数组或对象数组
  - {string} [attrName] - 对象数组中用于比较的属性名

- 返回值：

  {number|undefined} 数组中的最大值，空数组返回 undefined

- 示例：

```js
const arr = [9, 3, 25, 64, 2, 3, 45, 7]
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
max(arr)
max(arr1, 'id')
```

## min

- 说明：

  数组最小值

- 添加版本：1.1.0-beta.16

- 参数：

  - {T[]} arr - 数组
  - {string} [attrName] - 对象数组中用于比较的属性名

- 返回值：

  {number|undefined} 数组中的最小值，空数组返回 undefined

- 示例：

```js
const arr = [9, 3, 25, 64, 2, 3, 45, 7]
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
min(arr)
min(arr1, 'id')
```
