---
title: vue3
icon: circle-info
---

### 优化方案

- 源码
   - 源码管理  vue3整个源码是通过 monorepo的方式维护的，根据功能将不同的模块拆分到packages
   - TypeScript	 
- 性能
   - 体积优化
   - 编译优化 
   - 数据劫持优化
- 语法 API
   - 优化逻辑组织
   - 优化逻辑复用

优化方法

1. 使用Composition API： Vue 3的Composition API允许你更好地组织和复用代码，从而提高代码的可读性和维护性。使用合适的逻辑组合可以减少不必要的组件渲染和重复代码。
2. 适度使用Fragment和Teleport： Vue 3引入的Fragment和Teleport特性可以帮助你更好地控制DOM结构，避免不必要的包裹元素，从而减少渲染开销。
3. 优化模板： Vue 3中的编译优化机制可以减少模板的编译和渲染开销。使用合适的模板结构，尽量避免复杂的嵌套，有助于提高性能。
4. 使用事件侦听器的参数： Vue 3中的事件侦听器参数可以通过 $event 变量传递，避免在模板中频繁使用方法调用，减少性能开销。
5. 优化组件渲染： 使用合适的v-if和v-for条件渲染，避免频繁的组件创建和销毁。使用key属性来确保组件的正确复用。
6. 懒加载组件： 使用异步组件来延迟加载不必要的组件，从而减少初始加载时的开销。
7. 使用Memoization： 使用computed和watch等特性来避免不必要的计算和渲染。使用ref和reactive来确保仅在需要时才触发渲染。
8. 合理使用动画： 谨慎使用复杂的动画效果，尤其是在大型列表和表格中。优化动画的性能可以避免影响整体渲染性能。
9. 性能监测工具： 使用Vue Devtools等性能监测工具来分析和优化你的应用，识别性能瓶颈和问题。
10. Tree Shaking和代码拆分： 使用Webpack等工具进行Tree Shaking和代码拆分，只打包所需的代码，减少不必要的文件大小。

	
### 为什么使用proxy
Object.defineProperty只能遍历对象属性进行劫持
```javascript
function observe(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}
```

Proxy直接可以劫持整个对象，并返回一个新对象，我们可以只操作新的对象达到响应式目的 
```javascript
function reactive(obj) {
    if (typeof obj !== 'object' && obj != null) {
        return obj
    }
    // Proxy相当于在对象外层加拦截
    const observed = new Proxy(obj, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver)
            console.log(`获取${key}:${res}`)
            return res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            console.log(`设置${key}:${value}`)
            return res
        },
        deleteProperty(target, key) {
            const res = Reflect.deleteProperty(target, key)
            console.log(`删除${key}:${res}`)
            return res
        }
    })
    return observed
}
```

Proxy可以直接监听数组的变化（push、shift、splice）
Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等，这是Object.defineProperty不具备的

### v-model有哪些优化

1. 自定义模型修饰符： 在Vue 3中，你可以自定义模型修饰符，从而能够更好地适应不同的输入组件类型。Vue 2中的 v-model 仅支持 .trim 和 .number 两种默认修饰符，而Vue 3中可以自定义任意修饰符，以便在特定情况下转换数据。
2. 多个v-model修饰符： Vue 3中可以在一个 v-model 指令中同时使用多个修饰符。这使得你可以一次性对输入组件应用多个修饰符，从而更灵活地处理输入数据。
3. v-model的参数： 在Vue 3中，你可以为 v-model 提供一个参数，用于将数据绑定到组件的指定属性。这使得你可以将 v-model 绑定到自定义的属性，而不仅仅是默认的 value 属性。
4. 自定义v-model转换函数： Vue 3允许你自定义 v-model 的转换函数，从而可以在数据进入和离开组件时应用自定义的转换逻辑。
### 生命周期

1. beforeCreate: 在实例初始化之后、数据观测(initState)和 event/watcher 事件配置之前被调用。 对于此时做的事情，如注册组件使用到的store或者service等单例的全局物件。 相比Vue2没有变化。
2. created: 一个新的 Vue 实例被创建后（包括组件实例），立即调用此函数。 在这里做一下初始的数据处理、异步请求等操作，当组件完成创建时就能展示这些数据。 相比Vue2没有变化。
3. beforeMount: 在挂载之前调用，相关的render函数首次被调用,在这里可以访问根节点，在执行mounted钩子前，dom渲染成功，相对Vue2改动不明显。
4. onMounted: 在挂载后调用，也就是所有相关的DOM都已入图，有了相关的DOM环境，可以在这里执行节点的DOM操作。在这之前执行beforeUpdate。
5. beforeUpdate: 在数据更新时同时在虚拟DOM重新渲染和打补丁之前调用。我们可以在这里访问先前的状态和dom，如果我们想要在更新之前保存状态的快照，这个钩子非常有用。相比Vue2改动不明显。
6. onUpdated:在数据更新完毕后，虚拟DOM重新渲染和打补丁也完成了，DOM已经更新完毕。这个钩子函数调用时，组件DOM已经被更新，可以执行操作，触发组件动画等操作
7. beforeUnmount:在卸载组件之前调用。在这里执行清除操作，如清除定时器、解绑全局事件等。
8. onUnmounted:在卸载组件之后调用，调用时，组件的DOM结构已经被拆卸，可以释放组件用过的资源等操作。
- onActivated – 被 keep-alive 缓存的组件激活时调用。
- onDeactivated – 被 keep-alive 缓存的组件停用时调用。
- onErrorCaptured – 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播
### vue2和vue3 核心 diff 算法区别
Vue 2.x使用的是双向指针遍历的算法，也就是通过逐层比对新旧虚拟DOM树节点的方式来计算出更新需要做的最小操作集合。但这种算法的缺点是，由于遍历是从左到右、从上到下进行的，当发生节点删除或移动时，会导致其它节点位置的计算出现错误，因此会造成大量无效的重新渲染。
Vue 3.x使用了经过优化的单向遍历算法，也就是只扫描新虚拟DOM树上的节点，判断是否需要更新，跳过不需要更新的节点，进一步减少了不必要的操作。此外，在虚拟DOM创建后，Vue 3会缓存虚拟DOM节点的描述信息，以便于复用，这也会带来性能上的优势。同时，Vue 3还引入了静态提升技术，在编译时将一些静态的节点及其子节点预先处理成HTML字符串，大大提升了渲染性能

