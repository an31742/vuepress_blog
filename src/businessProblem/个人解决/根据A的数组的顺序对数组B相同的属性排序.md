---
title: 根据A的数组的顺序对数组B相同的属性排序
icon: circle-info
---



```javascript

let a =[322,432,10,378]
let b=[
{key:10,name:"小花"},
{key:432,name:"小名"},
{key:322,name:"小李"},
{key:378,name:"小刘"}
]
//需求根据a的顺序来排序
    this.viewRightSelectData = a.filter((i) => e.includes(i.key))
      a.forEach((item, index) => {
        b.forEach((val, ind) => {
          if (item === val.key) {
            val.order = index
          }
        })
      })
     b = b.sort((a, b) => {
        return a.order - b.order
      })
```
