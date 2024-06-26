---
title: vue3 computed不能及时更新.
icon: circle-info
---

在vue3 中computed 计算中并不会及时更新数据 ，使用ref或reactive 就可以

#### 使用reactive 
将数据通过watch获取 ，赋值给reactive定义的数据就可以了这个是官方的方法自然会**数据更新视图更新**

#### 将试图组件dom加一个 :key="updateKey"
在操作数据更新的时候使用reactive或ref定义 然后使用updateKey+=1 说白了这个方法也是使用reactive

