---
title: js数组及对象数组取交集，并集，补集的方法H
icon: circle-info
---


### 数组
```
复制代码var a=[1,3,5,7];
var b=[2,6,7,8];
// 交集
a.filter(item=>b.includes(item));
// 并集  new Set去重
[...new Set(a.concat(b))]
// 补集
a.filter(item=>!b.includes(item));
```
### 多数组
```
复制代码//商详选取规格经常用到
intersect(...a) {
      // 交集 new Set去重 
      if (a.length == 1) return a;
      if (a.length == 2) {
        return [...new Set(a[0].filter(x => a[1].includes(x)))];
      }
      for (let i = 0; i < a.length - 2; i++) {
        //let set1, set2, set3;
        let newSet;
        // set1 = new Set(a[i]);
        // set2 = new Set(a[i + 1]);
        // set3 = new Set(a[i + 2]);
        newSet = a[i].filter(x => a[i + 1].includes(x));
        return [...new Set([...newSet].filter(x => a[i + 2].includes(x)))];
      }
    },
```
### 对象数组

```
复制代码var a=[
    {id:'001',name:'product01'},
    {id:'002',name:'product02'},
    {id:'003',name:'product03'},
    {id:'004',name:'product04'},
    {id:'005',name:'product05'}
    ];
var b=[
    {id:'003',name:'product03'},
    {id:'006',name:'product06'},
    {id:'007',name:'product07'},
    {id:'008',name:'product08'},

];
var obj={};
var arr=a.concat(b);
// 交集：定义一个对象，通过其属性值是否出现多次判断交集
arr.reduce(function(pre,cur){
    obj.hasOwnProperty(cur.id)?pre.push(cur):obj[cur.id]=true;
    return pre;
},[]);
// 并集：每次遍历将还未出现的项进行收集
arr.reduce(function(pre,cur){
    if(!obj.hasOwnProperty(cur.id)){
        pre.push(cur);
    }
    obj[cur.id]=true;
    return pre;
},[])

//补集:a中每一项都不在b中
//A是S的一个子集，由S中所有不属于A的元素组成的集合，叫做子集A在S中的绝对补集。
//购物车一组商品，选中和未选中分为两组,拆单用
let test=a.reduce(function(pre,cur){
    if(b.every(item=>item.id!==cur.id)){
        pre.push({
             name:cur.name
        })
    }
    return pre;
},[])
```
