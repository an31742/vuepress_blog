---
title: vue3实现按钮级权限
icon: circle-info
---

#### 思路

- 先设计一个可维护的权限数据 (数据来源：1、可单独的功能点后端返回  2、可后端单独维护一个数据表 3、前端维护一个)  
- 在路由前置守卫获取路由要进入的功能页 （数据有对应维护的功能页确定页面级）
- 写一个自定义指令做出判断维护的页面和做出的权限是否一致一致展示对应的按钮不一致就展示

#### 代码

- Vue3使用pinia作为公共状态管理仓库 
**维护两个字段 一个是权限的数据 第二个是获取到的路由**

```js
  import { defineStore } from "pinia"
import { getAuthButtonListApi } from "@/service/model/login"

interface UserStore {
  authButtonList: any
  routerName: string
}

export const useCounter = defineStore("user", {
  state: (): UserStore => ({
    authButtonList: {}, //按钮级别的权限 在登录的时候获取
    routerName: "", //按钮级别的权限就要先获取当前点击的路由 在路由前置导航获取 再路由前置导航获取对应的页面名称的时候 不能直接定义在路由里面需要再前置导航定义
  }),
  getters: {
    // 按钮权限列表
    authButtonListGet: (state) => state.authButtonList,
    routerNameGet: (state) => state.routerName,
  },
  actions: {
    // Get AuthButtonList
    async getAuthButtonList() {
      const { data } = await getAuthButtonListApi()
    //   data里面是一个对象 对象的键是页面地址的名称对应到页面级 里面的值是按钮的权限
    //   data={
    //     authButton: ["add", "batchAdd", "export", "batchDelete", "status"],
    //     useProTable: ["add", "batchAdd", "export", "batchDelete", "status"],
    //       authTable: ["add", "edit"],
    //   }
      this.authButtonList = data
    },
    // Set RouteName
    async setRouterName(name: string) {
      this.routerName = name
    },
  },
  //增加本地持久化
  persist: {
    key: "user",
    storage: localStorage,
  },
})
```

- 写一个自定义指令方法

```js
/**
 * v-auth
 *  前端页面自定义指令是写死的  通过返回的按钮级权限来判断是否展示 
 * 按钮权限指令
 */
import { useCounter } from "@/store/module/user"
import type { Directive, DirectiveBinding } from "vue"

const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const authStore = useCounter() //获取公共数据
    const currentPageRoles = authStore.authButtonListGet[authStore.routerName] ?? [] //返回的按钮级权限里面对应的菜单是否有值
    if (value instanceof Array && value.length) {
        //如果使用自定指令是数组的话就判断返回的权限值是否对应的上 
      const hasPermission = value.every((item) => currentPageRoles.includes(item))
      if (!hasPermission) el.remove()
    } else {
      if (!currentPageRoles.includes(value)) el.remove()
    }
  },
}

export default auth
```

- 使用

```js
//在操作按钮设置 v-auth="edit" 返回值来控制展示有edit就正常展示 返回值没有delete就不会正常展示
 {
    key: "operations",
    title: "Operations",
    cellRenderer: () => (
      <>
        <ElButton size="small" v-auth="edit">
          Edit
        </ElButton>
        <ElButton size="small" type="danger" v-auth="delete">
          Delete
        </ElButton>
      </>
    ),
    width: 150,
    align: "center",
  }
```