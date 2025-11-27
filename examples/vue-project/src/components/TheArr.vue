<!--
 * @Name: TheArr.vue
 * @Description:
 * @Date: 2025-11-03 10:17:17
 * @Author: huyafei
 * @LastEditors: huyafei
 * @LastEditTime: 2025-11-03 10:17:17
-->
<script setup lang="ts">
import {
  arrayToTree,
  countInArray,
  find,
  findIndex,
  findNodePath,
  forEach,
  groupByAttr,
  groupBySize,
  intersect,
  intersectInMatrix,
  join,
  map,
  max,
  min,
  sort,
  tagDuplicates,
  toArray,
  treeToArray,
  union,
  unique
} from "@vensst/js-toolkit"

interface IArr {
  id: number;
  name: string;
  age?: number;
}


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
const arr5 = [123, "abc", {name: "张三"}, ["李四"], null, undefined]
const myMap = new Map()
myMap.set('name', '张三')
myMap.set([1, 2], true)
arr5.push(myMap)

const mySet = new Set()
mySet.add('abc')
mySet.add(myMap)
arr5.push(mySet)
const obj = {
  name: '张三'
}

{
  console.log("--find--", find(arr1, (item) => item.name === "b"), find(arr5, item => item === "abc"), find(arr5, item => item === "zhangsan"));
  console.log("--findIndex--", findIndex(arr1, (item) => item.name === "b"), findIndex(arr5, item => item === "abc"), findIndex(arr5, item => item === "zhangsan"));
}

{
  // const getVal = function (v){
  //  return new Promise((resolve, reject) => {
  //    setTimeout(() => {
  //      resolve(v)
  //    }, Math.random() * 1000)
  //  })
  // };
  // forEach(arr1, async (item, index)=>{
  //   const a = await getVal(index);
  //   console.log(1,index,a)
  // });
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
    console.log('forEach', item, index, a, this)
  }, obj);
  // 对比原生forEach
  // arr1.forEach(async (item, index)=>{
  //   const a = await getVal2(index);
  //   console.log(3,index,a)
  // });
}
{
  const _arr1 = map(arr1, function (item, index) {
    console.log('--map--callback--', index, this)
    return {id: item.id}
  }, obj)
  console.log('--map--', _arr1)
}

console.log(
    "--join--",
    join([]),
    join(arr1, "*", "id"),
    join([1, 2, 3, 4, 5], "-")
);
{
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
  console.log('--sort--', sort(arr), sort(arr, 2), sort(arr, 3), sort(arr2, function (a, b) {
    return a.age - b.age
  }))
}


console.log("--unique--", unique([1, 2, 3, 4, 3, 'a', 'a', 'b']), unique(arr1), unique(arr1, 'name'));

{
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
  console.log('--union--', union(arr1, arr2), union(arr3, arr4), union(arr3, arr4, 'id'))
  console.log('--intersect--', intersect(arr1, arr2), intersect(arr3, arr4), intersect(arr3, arr4, 'id'))
}

{
  console.log('--intersectInMatrix--', intersectInMatrix(arr), intersectInMatrix(arr, 'id'))
}
{
  const arr1 = [1, 2, 3, 2, 3, 4]
  const arr2 = [
    {id: 1},
    {id: 2},
    {id: 3, name: 'a'},
    {id: 3},
    {id: 3},

  ];
  console.log('--countInArray--',
      countInArray(arr1, 2),
      countInArray(arr1, item => item === 2),
      countInArray(arr2, item => item.id === 3),
  )
}

{

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
  console.log('--tagDuplicates--', tagDuplicates(arr7, 'nodeStr', 'axh'))

}

{
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
  console.log('--groupByAttr--', groupByAttr(arr8, 'nodeStr'))
  console.log('--groupBySize--', groupBySize(arr8, 4))
}
const fun = function (a, b) {
  console.log('--toArray--', toArray(arguments))
}
fun(1, 2)

{

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
  console.log("--arrayToTree--", tree);
}
{

  // 示例树形结构数组
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
}
{
  // 示例树形结构数组
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

  console.log('--findNodePath--', findNodePath(tree, 'name', '节点2.1'))

}
{
  const arr = [9, 3, 25, 64, 2, 3, 45, 7]
  console.log('max', max(arr), max(arr1, 'id'))
  console.log('min', min(arr), min(arr1, 'id'))
}

</script>

<template>

</template>

<style scoped>

</style>
