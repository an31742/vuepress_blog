---
title: 什么是Pinia
icon: circle-info
---


## 什么是Pinia
Pinia本质上依然是一个`状态管理的库`，它允许你`跨组件/页面`进行状态共享
## Pinia和Vuex的区别？

- 与Vuex相比，Pinia提供了一个`更简单的API`，具有`更少的规范`，提供了`Composition-API风格的API`。
- 最重要的是，在与`TypeScript`一起使用时`具有可靠的类型推断支持`
## 和Vuex相比，Pinia有什么优势？

- mutations不再存在，只有state，gettes，actions。
- 更友好的TypeScript支持。
- 不再有modules的嵌套结构，每个store都是独立的，互不影响。
- 没有命名空间模块。
- 无需动态添加 Store，默认情况下它们都是动态的。
- 不再需要注入、导入函数、调用函数。
- 支持插件来扩展自身功能。
- 支持服务端渲染（SSR）。
## 如何使用Pinia？
下载
```
yarn add pinia
或者
npm install pinia
```
挂载
```
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'

import router from './router'

const app = createApp(App)
const pinia=createPinia()
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

```
### 定义store

- 多个模块互相调用
- getter是相当于计算属性可以直接调用有缓存
- 还可以使用action是异步方法
- 可以使用this
```typescript
    import { defineStore } from "pinia";
import  {useLoginStore}  from../index
    export const mainStore = defineStore('main', {
        state: () => {
            return {
                name: '礼拜',
                age: 18,
                count:90
            }
        },
        getters: {
            myCount(state) {
                return state.age + 1
            },
            changeName(state) {
                return state.name = '白居易'
            },
        },
        actions: {
                /**
             * 通过外界传来的 name，赋值给store中的name
             * 其中的this 也是 store 实例
             * @param name 
             */
                setName(name: string){
                    this.name = name;
                },
                setAge(p: string){
                    this.age = p;
                    this.listTest =useLoginStore().list;
                }
        }
    })
```
### 变成响应式第一种方法 使用store
```javascript
<template>

  {{ store.count }}
  <el-button @click="handlerAdd">点击</el-button>


</template>

  <script setup>
  import { mainStore } from "../../store";
const store = mainStore();
 const { name, age, myCount, changeName} =store


const handlerAdd = () => {
    

     store.count++  //只有这样使用就可以直接修改数据
}
  <script/>


```
### 变成响应式第二种方法使用storeToRefs

- 可以更改响应式
- 也可以使用$patch
- 还可以使用actio方法

```javascript
<template>
{{count}}
  {{name}}
 {{ age }}
 <el-button @click="handlerAdd">点击</el-button>


</template>

 <script setup>
 import { mainStore } from "../../store";
  import {storeToRefs} from 'pinia'


  const store = mainStore();
  const { name, age, myCount, changeName} =storeToRefs(store)
 //使用这种解构赋值不可以在下面方法直接修改数据
const { name, age, myCount, changeName} =store


const handlerAdd = () => {
   // store.age++  //只有这样使用就可以直接修改数据
  //store.$patch({
   //count: 88,
 //  age: 10,
//    name: "白00易",
//  });
   store.setAge(66)
 store.setName('LIBAI')
  

}
 <script/>


```
### 变成响应式第三种方法

- 可以使用toRefs
```javascript
<template>

  {{ age }}
  <el-button @click="handlerAdd">点击</el-button>


</template>

  <script setup>
  import { toRefs } from "vue";
  import { mainStore } from "../../store";

 

const store = mainStore();
const { name, age, myCount, changeName} =toRefs(store)
  //使用这种解构赋值不可以在下面方法直接修改数据
 const { name, age, myCount, changeName} =store


const handlerAdd = () => {
  store.age++  //只有这样使用就可以直接修改数据
}
  <script/>


```
