### 
#### 安装
```
# npm
npm install js-toolkit --save

```
#### 引用
```
import * as jstk "js-toolkit"

```
### 使用
```js
jstk.randomNum(1,100)

```
### 命名注释说明
```typescript
// number 类型
let num:number = 1;
// string 类型
let str:string = "abc";
// boolean 类型
let b:boolean = true;
// any 任意类型
let a1:any = 1;
a = "abc";
a = true;
a = null;
a = undefined;
// 数组类型 - 在元素类型后面加上[]
let arrN:number[] = [1,2,3];
let arrS:string[] = ["a","b","c"];
let arrO:Object[] = ["a","b","c"];
// 数组类型 - 使用数组泛型
let _arrN:Array<number> = [1,2,3];
let _arrS:Array[string] = ["a","b","c"];
let _arrO:Array[Object] = [{a:1},{b:1},{c:1}];
```
