---
title: 微前端-qiankun
icon: circle-info
---



### 概念
### 使用框架：qiankun
#### 介绍：
qiankun 是一个基于 [single-spa](https://github.com/CanopyTax/single-spa) 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。
qiankun官网：[Go](https://qiankun.umijs.org/zh/guide)
当使用 iframe 整合系统时，假设我们有系统 A, 当我们想把系统 B 引入 A 系统时，只需要 B 系统提供一个 url 给 A 系统引用即可，这里我们把 A 系统叫做父应用，把 B 系统叫做子应用。同样的，微前端也延续了这个概念，微前端在使用起来基本和使用 iframe 一样平滑。
#### 结构：
**分为：主应用(父)，微应用(子)**
图1：
![](https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249035-f60fe1b4-bb59-4e06-9755-392e566ed6ff.png#averageHue=%23f4f4f3&clientId=u09428f8a-5088-4&from=paste&id=ud08fd224&originHeight=291&originWidth=575&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u3eec842b-34c3-403d-b67a-7bee2424857&title=)
#### 使用案例：
##### 目标：
点击one按钮，切换到one微应用
点击two按钮，切换到two微应用
并且每个微应用都可以跳转自己的路由
![](https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249366-03eed114-13fa-4725-9193-8219f13d76fa.png#averageHue=%23fefdfd&clientId=u09428f8a-5088-4&from=paste&id=u6864b1cb&originHeight=514&originWidth=1582&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=uc052db31-6323-479b-ba31-dc9f2984ebc&title=)
![](https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249222-5741310e-e339-40d6-a454-c129b9f8c391.png#averageHue=%23faf7f6&clientId=u09428f8a-5088-4&from=paste&id=u17c9da71&originHeight=516&originWidth=1606&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u6dcc233f-e759-43ff-afb6-612bd2d825d&title=)
步骤：

1. 创建主应用项目
2. 创建微应用项目
3. 将微应用挂到主应用项目中
##### 1. 在主应用中安装qiankun框架
```
$ yarn add qiankun # 或者 npm i qiankun -S


1
```
##### 2. 在 主应用 中注册微应用
main.js：
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: "vueChildOne",
    props: { age: 10 }, //给子应用传数据
    entry: "//localhost:3001", //默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据
    container: "#child-one-content", //挂载到主应用的哪个元素下
    activeRule: "/child-one", //当我劫持到路由地址为//child-one时，我就把http://localhost:3001这个应用挂载到#child-one-content的元素下
  },
  {
    name: 'vueChildTwo',
    entry: '//localhost:3002',
    // entry: { scripts: ['//http://192.168.2.120:3001/main.js'] },
    container: '#child-two-content',
    activeRule: '/child-two',
  },
]);

// start(); // 启动qiankun，这里不在一开始的时候使用

createApp(App).use(ElementPlus).use(router).mount('#app-base')


```
App.vue
```
<template>
  <div>
    <div class="bens">
      <el-button type="primary" @click="$router.push('/child-one')">childOne</el-button>
      <el-button type="primary" @click="$router.push('/child-two')">childTwo</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.bens {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15px;
  left: 0;
  z-index: 9999999;
}
#app-base {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



```
index.html：
```
// 将id：app 改为 app-base  自定义就行，只要与main.js对应起来，切不与微应用重复
<div id="app-base"></div>
```
router.js
```
import { createRouter, createWebHistory } from "vue-router";

// 2. 配置路由
const routes = [
    {
        path: '/child-one',
        component: () => import('@/views/childOne/index.vue'),
    },
    {
        path: '/child-two',
        component: () => import('@/views/childTwo/index.vue'),
    },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 3导出路由   然后去 main.ts 注册 router.ts
export default router


```
childOne/index.vue
```
<template>
  <h2>我是 主应用 one</h2>
  <div id="child-one-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "childOne",
  components: {},
  mounted() {
    // 启动微应用
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style>
</style>

```
childTwo/index.vue
```
<template>
  <h2>我是 主应用 two</h2>
  <div id="child-two-content"></div>
</template>

<script>
import { start } from "qiankun";
export default {
  name: "childTwo",
  components: {},
  mounted() {
    // 启动微应用
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style>
</style>



```
##### 4. 微应用配置child-one
src下创建public-path.js
```
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

```
main.js
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './public-path' // 引入public-path.js

// createApp(App).mount('#app')

let instance = null;
function render(props = {}) {
  if (instance) return;
  const { container } = props;
  console.log(container);
  instance = createApp(App)
    .use(router)
    .mount(container ? container.querySelector("#app-child-one") : "#app-child-one");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  //可选链操作符
  instance.$destroy?.();
  instance = null;
}

```
index.html
```
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app-child-one"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```
vue.config.js
```
module.exports = {
    lintOnSave: false,
    devServer: {
        port: "3001",
        headers: {
            "Access-Control-Allow-Origin": "*", //所有人都可以访问我的服务器
        },
    },
    configureWebpack: {
        output: {
            // library: `${name}-[name]`,
            library: `vueChildOne`,
            libraryTarget: "umd", // 把微应用打包成 umd 库格式
            // jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};


```
router.js
```
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 2. 配置路由
const routes = [
    {
        path: '/',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/about',
        component: () => import('@/views/about/index.vue'),
    },

];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
    history: createWebHashHistory('/child-one'),
    routes,
});

// 3导出路由   然后去 main.ts 注册 router.ts
export default router

```
##### 5. 微应用配置child-two
与child-two同理，只要把对应的" child-one " 换成" child-two "即可
##### demo代码地址
[码云地址](https://gitee.com/Divenl/micro-front-end-qiankun)

转载自[微前端-qiankun_qiankun微前端-CSDN博客](https://blog.csdn.net/weixin_43193877/article/details/125717755)
