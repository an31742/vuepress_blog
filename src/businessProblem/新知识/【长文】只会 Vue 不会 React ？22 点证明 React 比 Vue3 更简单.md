---
title: 简单入门react
icon: circle-info
---

转载自[https://juejin.cn/post/7344536653463207973](https://juejin.cn/post/7344536653463207973)

真看完本文，将打破 “React 难” 的认知。你只要会 JS 就会 React

## 开始

大家好，我是 双越老师~
现在还有大量的前端同学只会 Vue 不会 React，想学吧也不知道从何入手，也感觉自己没时间。
同时，现在已经有大量的公司招聘要求 React 技术栈，纯 Vuer 投简历时候只能躲着走，望之兴叹。
也不知道从何时开始，一直到现在，还流传着“Vue 简单，React 难”这样一个论调。
这个“难”可以理解为有难度，也可以理解为设计的难用、反人性。反正就是难。
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452106891-68bcc31e-931d-4323-940b-97db42ccdcd8.webp#averageHue=%23c0aea9&clientId=u0044065a-f65d-4&from=paste&id=u3d37f71d&originHeight=646&originWidth=2020&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=uac51fa69-dacb-4254-9112-6efc7cae44f&title=)
其实 React 并不难，尤其是 Hooks 普及以后，更加简单了，比 Vue3 还简单。
本文我对比着 Vue2 Vue3，把 React 22 个基础技能过一遍，看看 React 到底难在哪里。
你可以顺序看，遇到看不懂的就给我评论，保证给你解释清楚。
此外，我们一边学习 React 基础技能，一遍做一个 todo-list 项目，学以致用。源码在文末。
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452106968-9b9054a6-621a-486f-899f-615b7d5a2445.webp#averageHue=%23f6f6f6&clientId=u0044065a-f65d-4&from=paste&id=ud2e6896e&originHeight=490&originWidth=1642&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u337da7e3-2874-4dd4-93ea-bdab7a8c5d9&title=)
如果不满足于一个 demo ，可以来跟我一起做一个 **React Next.js Node 全栈 AIGC 项目 **[划水AI](https://link.juejin.cn?target=https%3A%2F%2Fhuashuiai.com%2F)**，仿 Notioin AI 和协同编辑**。项目介绍可以看[这里](https://juejin.cn/post/7338797433899221043)，有意私信我～

## 创建项目

先使用 [create-react-app](https://link.juejin.cn?target=https%3A%2F%2Fcreate-react-app.dev%2Fdocs%2Fgetting-started) 脚手架创建一个 React 项目，并启动项目。

```
sql

复制代码npx create-react-app react-todo-list
cd react-todo-list
npm start
```

PS：React [官网](https://link.juejin.cn?target=https%3A%2F%2Freact.dev%2F)已经不推荐使用 create-react-app 了，但这里并不影响本文的学习和使用。

## 组件

无论 Vue 还是 React ，页面都是由一个一个组件嵌套组成的，让我们先从组件开始。

### 组件定义

Vue 项目中，组件是一个 .vue 文件，包含模板、样式和脚本代码，这和 HTML 文件格式一样，所以很好理解。

```
html

复制代码<template>
    <p>hello vue</p>
</template>

<script>
export default {
    // ...
}
</script>

<style></style>
```

React 组件一般是一个 JS 文件，用一个 JS 函数定义组件。组件函数会返回一段 JSX 代码，JSX 语法和 HTML 语法很相似，也很好理解。
【实战】把你的 React src/App.js 改为如下代码：

```js


复制代码// src/App.js
function App() {
  return (
    // JSX 语法，类似于 HTML
    <div>
      <p>hello React</p>
    </div>
  )
}

export default App
```

记得当年对 React 的吐槽主要在于：在 JS 中写 HTML 会导致混乱。
因为那会儿还是 jQuery 时代，HTML 本来就是把 JS 单独分离到 script 中的，大家习惯了这样做，而且没见过 React 这种写法，接受不了。相比之下还是 Vue 写法更好接受。
但随着 React 慢慢的推广使用，近 10 年过去了，现在再也听不到这种吐槽的声音了。
而且，现在 React Vue 发展多年，我们再思考一个问题：组件是否应该是一个函数才合理呢？ 输入数据，返回 UI 。Vue 也很早就支持了函数组件。
所以，React 本质是 JS 函数，这不难吧。至于 JSX ，后面再讲。

### 组件结构

无论 Vue React 都是支持组件嵌套的，嵌套规则和格式也都是参考 HTML 语法。
对于自定义组件的 tag 名称，Vue 和 React 现在都推荐使用 PascalCase 写法，如 <PostBlogPage />，即首字母大写。
PS：Vue2 当年推荐 <post-blog-page /> 写法，Vue3 改过来了。
【实战】在你的 React 项目中新建一个 src/components 目录，然后再其中新建两个文件：

```
js

复制代码// src/components/TodoInput.js
function TodoInput() {
  return (
    <div>
      <p>todo input</p>
    </div>
  )
}
export default TodoInput
```

```
js

复制代码// src/components/TodoList.js
function TodoList() {
  return (
    <div>
      <p>todo list</p>
    </div>
  )
}
export default TodoList
```

然后把现有的 App.js 修改为如下代码：

```
js

复制代码// src/App.js
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  )
}
export default App
```

组件结构，这不难吧？和 Vue 一样。

### 组件属性

Vue 组件接收属性时，需要用 props: ['a', 'b'] 来定义各个属性的名称。即便是 Vue3 setup script 也需要一个 defineProps(['a', 'b']) 一个宏来定义。这种写法是 Vue 组件独有的，Vue 发明的。

```
js

复制代码export default {
  props: ['foo'],
  setup(props) {
    console.log(props.foo) // setup() 接收 props 作为第一个参数
  }
}
```

**而 React 组件是一个函数，它的属性就是函数的参数**，就是如此简单。
PS：对比上面 Vue 代码和下面 React 代码，你可能会疑问：同样是获取 props.foo ，为何 Vue 需要定义 props: ['foo'] 呢？
【实战】把 src/components/TodoList.js 内容改为如下代码

```
js

复制代码// src/components/TodoList.js
function TodoList(props) {
  console.log(props.foo)
  return (
    <div>
      <p>todo list</p>
    </div>
  )
}
export default TodoList
```

【实战】然后把 src/App.js 中 <TodoList/> 改为如下代码 。刷新浏览器即可看到打印结果。（PS：为何打印两次？欢迎给我评论，我来给你解释。）

```
html

复制代码<TodoList foo="hello foo" />
```

所以，React 组件属性，就是函数参数，这简单吧。

### 组件事件

Vue 组件的事件，可以不定义，直接通过 this.$emit('xxx') 触发即可。这样其实不好，

```
js

复制代码methods: {
    deleteItem(id) { this.$emit('delete', id) }
}
```

或者 Vue3 setup script 中使用 defineEmits 这个宏来定义。

```
html

复制代码<script setup>
const emit = defineEmits(['inFocus', 'submit'])
function buttonClick() { emit('submit') }
</script>
```

这两种方式：

- 不定义，你就不知道这个事件的来源，就需要去全局查找。如果名称不小心写错了，也无法提前报错提示。
- 使用 defineEmits 定义，就和上面 props 一样，又是 Vue 独有的语法。包括使用 $emit 去执行，也是 Vue 独有的。都需要你挨个学习，用的时候挨个去看文档。

**反观 React：组件事件和属性一样，还是函数的参数，执行事件就是执行一个函数，就简单的 JS 代码。**
【实战】把 src/components/TodoInput.js 代码改为

```
js

复制代码// src/components/TodoInput.js
function TodoInput(props) {
  const { addTodo } = props // 解构出事件 addTodo
  function addTodoHandler() {
    addTodo('some text') // 执行事件 addTodo ，随便传入参数
  }
  return (
    <div>
      <p onClick={addTodoHandler}>todo input</p> {/* 这里的 onClick 写法，先不要管，后面会讲 */}
    </div>
  )
}
export default TodoInput
```

【实战】并且把 src/App.js 改为如下代码。刷新浏览器，点击网页中的 todo input 文字，即可看到打印效果。

```
js

复制代码import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  function addTodo(t) {
    console.log('addTodo: ', t)
  }
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList foo="hello foo" />
    </div>
  )
}
export default App
```

所以，React 组件的事件，也是函数参数，执行就是执行 JS 函数，这简单吧。

### 子组件

你熟悉 Vue 应该知道 slot 插槽，用于定义和显示子组件的内容。
而且，Vue 文档中关于 slot 的功能非常多，例如具名插槽、作用域插槽… 说起来我自己都糊涂。
而 React 关于子组件的，只有一个 props.children —— 对，children 就是一个普通的属性，只不过你不用显示的传递过来。

```
jsx

复制代码function Layout({ children }) {
    return <div>
        <Nav />  {/* 导航栏 */}
        <div>{children}</div>  {/* 子组件 */}
    </div>
}
```

你可能会疑问，Vue slot 那么多功能，而 React 只有一个 children ，这能满足开发需求吗？
当然可以，近 10 年了，依然只有一个 children ，如果满足不了，早就扩展了。

## 模板

模板，即组件的 UI 结构。Vue 使用自己的 template 模板语法，React 使用 JSX 语法。
JSX 当年刚被 React 发明出来时，也是备受吐槽的，但也慢慢的成为了社区写 UI 的标准，很多框架支持用 JSX （包括 Vue3），babel 默认支持 JSX 编译，[TS](https://link.juejin.cn?target=https%3A%2F%2Fwww.typescriptlang.org%2Fdocs%2Fhandbook%2Fjsx.html) 也支持 JSX 语法。
JSX 现在被应用如此广泛，其实已经可以说明问题了：JSX 很好用。如果它设计复杂难度大，谁会用它呢？
PS：不要跟我说“Vue3 也可以用 JSX”这种话。我不看“也可以”，我只看它推荐用什么（即文档中大部分都用什么）。Vue 有可以用 defineComponent 定义组件，你怎么不用呢？**开发人员最怕“也可以”，也可以这样，也可以那样，那该如何选择呢？** 就像你请女朋友吃饭吃什么，她说“都行”，你就犯难了。

### 插值

普通文本的插值，Vue template 使用 {{name}} ，JSX 使用 {name} ，都很简单。

### 属性

Vue template 使用 :xxx 来区分属性值的类型，如下代码。

```
html

复制代码<p id="p1" :title="title1">hello vue</p>
```

这里的 p1 就只字符串，而 title1 就是一个 JS 变量。所以这个 :xxx 又是一个 Vue 新定义的语法规则。
而 React JSX 中，属性值如果是 JS 变量，依然用插值的语法 {name} ，没增加新规则。如下：

```
html

复制代码<p id="p1" title={title}>hello vue</p>
```

React 动态属性，依然使用 插值 语法，很简单。
PS：Vue 有 props 和 attrs （后者面试常考但工作不常用），React 没有 attrs ，也不耽误用。

### 自定义事件

往子组件中传入自定义事件，Vue template 需要使用 @xxx 写法。（子组件定义事件，上文已说）

```
html

复制代码<MyComponent @some-event="callback" />
```

而 React 依然使用 插值 语法 {xxx} ，一个规则到处用。看你 src/App.js 代码中：

```
html

复制代码<TodoInput addTodo={addTodo} />
```

### 样式

普通的 class ，Vue template 使用 class="a b" ，React JSX 使用 className="a b" 。
因为 React 完全是 JS 代码，class 是 JS 的关键字，没法直接使用，所以必须用 className 代替。
这一点不难理解。
如果是动态 class ，Vue 有多种写法（对象、数组）可以自己去看[文档](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fessentials%2Fclass-and-style.html)，这都是 Vue 独家发明。

```
html

复制代码<div :class="{ active: isActive }"></div>
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

而 React 继续以不变应万变 —— 还是使用 插值 语法 {xxx}

```
js

复制代码<div className={someClass}></div>
```

你会发现在 JSX 中，一个 {xxx} 写法，可以解决大部分问题，而在 Vue template 中需要很多规则。那个更简单呢？

### DOM 事件

Vue template 绑定 DOM 事件使用 @xxx 格式，和上文的自定义事件一样。

```
html

复制代码<button @click="greet">Greet</button>
```

React JSX 绑定 DOM 事件参考了 [HTML 事件](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Ftags%2Fref-eventattributes.html) 的语法，但加了一个规定：使用驼峰式写法。看你 src/components/TodoInput.js 的代码：

```
html

复制代码<p onClick={addTodoHandler}>todo input</p>
```

所以，JSX 中所有 onXxx 就是 DOM 事件的写法。这是 JSX 除了插值语法的第二个规则，需要记住。
PS：对于上文的“自定义事件”，Vue 理解为是“事件”，所以用 @xxx 语法；而 React 理解为是“属性”，写法和 onXxx 不一样，和属性一样。你更倾向于是哪一个？

### 条件渲染

Vue template 使用 v-if 和 v-else 等指令实现判断逻辑条件渲染，又是 Vue 独家发明。注意，其中的 awesome 是一个 JS 变量，别误看做是静态的。

```
html

复制代码<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

React JSX 依然使用 {xxx} ，只不过不是用 JS 变量，而是**使用 JS 表达式**。
我们先简单做一个 JS 的练习测试。执行如下代码，分别打印什么？

```
js

复制代码const flag1 = true
flag1 && 'hello' // 打印什么
flag1 ? 'a' : 'b' // 打印什么

const flag2 = false
flag2 && 'hello' // 打印什么
flag2 ? 'a' : 'b' // 打印什么
```

具体打印的结果，可以自己执行一下看看。如果你通过了这个小测试，那继续看代码：

```
jsx

复制代码{ flag && <SomeComponent /> }
{ flag ? <SomeCompnent/> : <OtherComponent/> }
```

如果 flag 是 true，那两个表达式返回什么？ —— 答案是返回 <SomeComponent /> 组件。
即，如果 flag 是 true 上述代码就等同于

```
html

复制代码<SomeComponent />
<SomeComponent />
```

能看懂就继续，看不懂就给我留言评论。
【实战】把你代码中 src/App.js 改为如下代码，自己改一下 list 数组的值，体验一下条件渲染。
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452106980-eef6d0e3-4a82-487a-ba60-9d3c126e7a26.webp#averageHue=%2323201f&clientId=u0044065a-f65d-4&from=paste&id=u3b3de8bc&originHeight=666&originWidth=1742&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u971794fd-622a-4976-a810-deaa1ab3cc5&title=)
所以，如果你能熟悉 JS （这是基本要求）且能理解“{xxx} 内部可使用表达式”，那 JSX 条件渲染就非常简单。

### 列表渲染

Vue template 中循环渲染使用 v-for 指令，也是 Vue 独家发明。而且使用 v-for 时有很多说明，文档写的非常多。这都是学习成本啊。

```
html

复制代码<li v-for="item in items">
  {{ item.message }}
</li>
```

而 React 还是使用 {xxx} 表达式。其中主要用到 JS 数组的 map 方法，先做一个小练习。

```
js

复制代码const arr1 = ['a', 'b', 'c']
const arr2 = arr1.map(item => {
    return item + 's'
})
console.log(arr1)
console.log(arr2)
```

执行结果可以自己亲自试试，如果这个没问题，再继续看下一段代码

```
jsx

复制代码// 已定义 arr1 = ['a', 'b', 'c']
<ul>
{
    arr1.map(item => {
        return <li>{item}</li>
    })
}
</ul>
```

那这段代码执行出来的结果，就等同于如下代码。（看懂就继续，看不懂给我留言~）

```
jsx

复制代码<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>
```

【实战】把你代码 src/components/TodoList.js 改为如下代码

```
jsx

复制代码function TodoList(props) {
  const { list = [] } = props
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  )
}
export default TodoList
```

【实战】把你代码 src/App.js 做如下修改，刷新页面可看到效果。
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452106987-33962143-f70e-4c78-8a8c-a17b9ba897c2.webp#averageHue=%2322201f&clientId=u0044065a-f65d-4&from=paste&id=uc4fd173c&originHeight=640&originWidth=1772&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u6e87049e-9c42-482b-ab10-264d53a8b5e&title=)
PS：Vue 和 React 一样，循环时都需要一个唯一的 key ，否则会有警告。
所以，如果你熟悉了 map 函数，那 JSX 列表渲染也很简单，就是 JS 代码，没有其他规则，没有那么多文档说明。

### 整体对比

JSX 语法非常简洁，记住这两条就够了：

- {xxx} 大括号里面是 JS 的变量或者表达式，可实现一切动态的功能，包括判断和循环
- onXxx 是 DOM 事件的写法

而 Vue template 定义了更多的规则，需要你多多翻阅文档，例如：

- :xxx 动态属性
- @xxx 事件
- :class 和 :style 的多种写法
- v-ifv-for 等多种指令
- 还有更多，如 v-modelslot 等...

PS：JSX 中 {x} 是动态的， "x" 是静态的，一眼识别，特清晰。而 Vue template 中 "x" 有时候是静态，有时候动态，我还得根据前面的 key 格式去判断，而且格式还那么多，就需要一定的反应时间。这是我个人的一个感觉，不知道你有没有。

## 状态和响应式

组件的状态数据管理，以及如何触发数据变化，从而触发组件更新。
Vue2 组件使用 data() 函数，Vue3 使用 ref 和 reactive ，Vue 都是响应式监听，直接修改数据即可监听到变化。
Vue2 data 比较简洁明了，我想你也比较熟悉。但 Vue3 的 ref 和 reactive 就带来很多困扰，也在社区激发一些讨论，甚至需要作者出来分析两者用哪个更好。（发现没？又是这种“也可以”的问题）
React 就一个 useState API，相比 Vue3 的设计简单很多，我们一一来看。

### 值类型

值类型，就是比较简单的 number string boolean 等类型。
Vue2 使用 data() 函数返回数据，直接通过 this.xxx 修改数据，非常简单。

```
js

复制代码export default {
    data() {
        return { name: '前端双越老师' }
    }
    method: {
        changeName() { this.name = '张三' }
    }
}
```

Vue3 处理值类型，要使用 ref ，在 JS 中修改或者使用时，要使用 .value 属性，否则无效。

```
js

复制代码const nameRef = ref('前端双越老师')

function changeName() { nameRef.value = '张三' }
```

关于 ref .value 的困扰，之前在 Vue3 社区还讨论过是否要加一些语法糖来去掉 .value 。再后来我也没详细关注，反正现在看 Vue 官网是没直接推荐什么语法糖。如果有了语法糖，也许会写起来更简单，但又会多一个 Vue 自造语法，多一点学习成本。
再看 React 如何处理值类型。React 使用 useState 定义数据和 setXxx 方法。**注意，React 修改数据不是响应式的，要通过 setXxx 来显示修改，是命令式的。** —— 想改谁，想改成啥，你直说，直接调用 setXxx 让大家都明显的看出来，高调一些 —— 这是 React 的风格。
【实战】把你代码中的 src/components/TodoInput.js 改为一下代码，在浏览器刷新测试。

```
js

复制代码// src/components/TodoInput.js

import { useState } from 'react'

function TodoInput(props) {
  const { addTodo } = props
  function addTodoHandler() { addTodo('some text') }

  const [count, setCount] = useState(0)
  function increase() {
    setCount(count + 1) //【注意】这里不能写 count++ ，必须执行 setCount 函数，并传入最新的值
  }
  return (
    <div>
      <button onClick={increase}>{count}</button>
      <p onClick={addTodoHandler}>todo input</p>
    </div>
  )
}
export default TodoInput
```

React useState 还是很好理解的，语义非常明确。对于入门者，比 Vue3 ref 要简单多了。

### （附：React 也有 ref）

上文说了 Vue3 ref 需要写 .value 比较麻烦。
其实 React 也有 ref 也需要写类似的 .current 才能获取和修改数据，这是 ref 的设计决定的写法。
（所以上文我不建议 Vue3 ref 语法糖去掉 .value，因为这会让大家忽略掉 ref 的本质）
React ref 也有类似的问题，但 React ref 主要用于获取 DOM 节点或者其他组件节点，一般不常用。
而且 React ref 不具备 setXxx 能力，无法触发组件更新，这和 state 有本质区别，不会混淆。
所以 React 对于 ref 和 state 的设计是有明显的定位区别的，两者各司其职。
PS：其实 Vue3 ref 也可以获取 DOM 节点 —— 乱了吧……

### 对象和数组

Vue2 data() 也很简单清晰，但因为内部使用 defineProperty 可能会导致如下问题（所以 Vue3 使用 Proxy 实现响应式）

- 对象层次较深时，可能会有性能问题，因为要一次性递归绑定响应式
- 修改数组只能用 API ，不能直接赋值某个 index

```
js

复制代码export default  {
    data() {
        return {
            user: { name: '双越老师' },
            city: ['北京', '深圳']
        }
    }
}
```

Vue3 刚发布的时候，推荐使用 reactive 来做对象的响应式监听，后来大家发现 ref 也可以监听对象，于是激起了很多讨论。
现在看文档 Vue3 推荐统一使用 ref ，无论是值类型、对象还是数组。当然，又得用 .value 了。
并且在文档中总结了 [reactive 的局限性](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fguide%2Fessentials%2Freactivity-fundamentals.html%23limitations-of-reactive) 。

```
js

复制代码// 来自 Vue 官网 https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity
import { ref } from 'vue'

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
```

如果你用过 Vue3 你应该体会到过这种纠结，如果你还没用过，你从这段描述应该也能感受到这种挣扎。这其实还是“也可以”的问题：用 A 也行，用 B 也行，A B 好像各有优劣，就选择困难症了……
再看 React ，很统一，无论是处理值类型，还是数组、对象，都是通过 useState 定义，都是通过 setXxx 设置新数据。没有第二个选择，没有“也可以”。
【实战】把你代码 src/App.js 改为如下代码，刷新页面，点击 todo inpupt 文字即可看到效果。

```
jsx

复制代码// src/App.js

import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [list, setList] = useState([
    { id: 1, text: 'todo 1' },
    { id: 2, text: 'todo 2' },
  ])
  function addTodo(t) {
    const newTodo = { id: list.length + 1, text: t }
    setList([...list, newTodo]) //【注意】这里不能直接修改 list 而是要调用 setList
  }
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      {list.length > 0 && <TodoList foo="hello foo" list={list} />}
    </div>
  )
}
export default App
```

唯一需要注意的是：不能直接修改 list 而是要调用 setList 函数，并传入新数据。使用 ES 结构语法 ...xxx 能非常轻松的生成新数据，例如：

- 修改数组，一般会用 setList( [...list, newItem] )
- 修改对象，一把会用 setObj( { ...obj, newItem } )

React useState 能定义并修改任何数据类型，而且没有 Vue3 refreactive “都可以”的心智负担，简单。

### 数据的复杂性

无论 Vue2 Vue3 为了实现数据响应式，它都需要把数据包裹一层，即你定义的数据并不是真正的数据。
这个在 Vue2 中并不明显，但在 Vue3 setup script 中 JS 操作较多的话，就会遇到这种问题。

```
js

复制代码const raw = {}
const proxy = reactive(raw)
console.log(proxy === raw) // false 代理对象和原始对象不是全等的
```

而且，Vue3 的 ref 和 reactive 两种响应式的类型也不一样，为此 Vue 设计了很多 [API](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2F) 来进行各种数据类型的判断和转换，例如 isRefisReactivetoReftoRawtoValue
还有，为了满足非深度监听，Vue 还设计了各种 shallowXxx
API 很多，得自己慢慢看[文档](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2F)。
反观 React 它的 state 就是你传入的数据，所见即所得，不需要任何 API 不需要任何说明。

```
js

复制代码const infoRaw = { name: '双越老师' }
const [info, setInfo] = useState(infoRaw)
console.log(info === infoRaw)  // true
```

两者相比，哪个更简单呢？

## 副作用和组件生命周期

组件生命周期，你应该非常熟悉了，Vue 最基础的知识点，也是常考面试题。
说道“副作用”，没接触过 React 的同学可能会比较陌生，我们先简单介绍一下它。放心，它很好理解，一不小心就学会了。

### （附：纯函数和副作用）

副作用，生活中最常看到的是在药品说明书中，例如某个 Z 药“副作用不详”。
副作用就是药品治疗过程中，产生了预期之外的影响。大部分是坏的，但有些也是好的，例如当年某治疗低血压的药竟意外成了男人们的福利，这也是副作用导致的。
对于编程开发中，有一种编程范式（方式）叫做函数式编程，其中有一个 **纯函数** 的概念。
意思就是：设计好输入和输出，你只管做这个计算，不要产生任何其他的影响（副作用），要纯粹。
例如，要计算 1+1=2 加法运算， 写一个纯函数就是。你看，只管计算，没做任何其他事情。

```
js

复制代码function add (a, b) { return a + b }
```

相反，你如果做运算的同时，又干了本职工作之外的事情，例如修改网页标题 —— 这你就不纯了，你脏了！

```
js

复制代码function add (a, b) {
    document.title = '加法运算' // 副作用（这样写不好）
    return a + b
}
```

React 使用函数式组件，函数接收 props 返回 JSX （这其实和 1+1 返回 2 本质是一样的） ，按理说应该也是个纯函数。
但你作为一个 UI 组件，不能光考虑一次性的输出 JSX ，你还得考虑组件完整的生命周期，如更新、销毁。而这些都可以通过副作用来实现。（副作用有些是坏的，有些是好的，这里就是好的）

```
jsx

复制代码function App(props) {
    // 组件渲染完成，如何进行 Ajax 请求？ 
    // 如何监听组件更新
    // 如何监听组件销毁

    return <p>App page</p>
}
```

你如果能看到这里，且没有疑问，那你接下来去学习 React 副作用应该毫无障碍。

### 初次渲染

Vue 对应的生命周期 beforeCreatecreatedbeforeMountMounted 大家应该都很熟悉了。
Vue3 composition API 做了一些 API 改动，如 onMounted 写法，但语义是一样的。

```
js

复制代码import { ref, onMounted } from 'vue'
const el = ref(0)
onMounted(() => { el.value = 10 })
```

React 使用 useEffect 来处理副作用，当然也包括组件初次渲染相关的。

```
js

复制代码import { useEffect } from 'react'

function App(props) {
    function fn() { console.log('发起 ajax 请求') }
    useEffect(fn)

    return <p>App page</p>
}
```

useEffect 语义就是要执行一个副作用，即组件函数执行完以后，还要做点啥？ —— 在 fn 函数定义即可。
所以，你可以不用把 useEffect 和 Vue 组件生命周期做对比，你就按照“副作用”的概念来理解它，反而更容易。
【实战】在你的 src/App.js 中增加如下代码
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452106975-4b23a21e-bd0d-49bb-878f-b5a331767b30.webp#averageHue=%23272221&clientId=u0044065a-f65d-4&from=paste&id=uaa5c05bd&originHeight=392&originWidth=1586&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u09f06e8b-e916-48a6-a668-04e3585d96c&title=)
PS：修改网页标题其实可以在 public/index.html 中修改，这里只是为了练习 useEffect

### 组件更新

Vue 组件更新的生命周期是 beforeUpdate 和 updated ，Vue3 Composition API 有写法上的改变，但语义是相同的。
React 依然使用 useEffect 副作用处理组件更新的情况。React 擅长统一和抽象概念，体现设计思维。
useEffect 其实有两个参数：

- 第一个参数是函数，即副作用要执行的具体内容，必填
- 第二个参数是依赖项数组，选填。

```
js

复制代码const [page, setPage] = useState(0)
const [keyword, setKeyword] = useState('')

useEffect(() => {
    fn(page, keyword)
}, [page, keyword])
```

如上代码，useEffect 第二个参数（依赖项）是 [page, keyword] ，那它的副作用执行时机就是两个

- 组件初次渲染完成，执行副作用
- page 或 keyword 有变化，也会执行副作用

【实战】在你的代码中新建 src/components/EffectTest.js 文件，并写入以下代码

```
js

复制代码import { useState, useEffect } from 'react'

function App(props) {
    const [page, setPage] = useState(0)
    const [keyword, setKeyword] = useState('')

    function fn(page, keyword) { console.log('发起 ajax 请求', page, keyword) }
    
    // 1. 组件渲染完成触发； 2. page 或 keyword 变化时触发
    useEffect(() => {
        fn(page, keyword)
    }, [page, keyword]) 

    return <div>
        <button onClick={() => setPage(page + 1)}>setPage</button>
        <button onClick={() => setKeyword(keyword + 'x')}>setKeyword</button>
        <p>App page</p>
    </div>
}
```

【实战】在 src/App.js 中引入 <EffectTest/> 组件，然后刷新浏览器控制台看打印效果。
PS：如果你发现初次渲染完成时，控制台打印两次 —— 你发现了一个小秘密，欢迎给我留言评论。
所以，不要把 useEffect 对比组件生命周期，用“副作用”概念去理解它。它可以在组件渲染完成后执行副作用，也可以监听某些 state 变化后执行副作用 —— 就这两条，即可为满足所有开发需求。

### 组件销毁

Vue 使用 beforeDestroy 和 Desctroyed 两个生命周期，很好理解。
React 依然使用 useEffect ，只不过需要你记住一件事儿：useEffect 函数里面，可以再 return 一个函数，用于监听组件销毁。

```
js

复制代码useEffect(() => {
    // xxx
    
    return () => { console.log('组件销毁之前，如解绑自定义事件') }
})
```

这里是唯独需要记忆的地方，当然记不住上网一查也很简单。总的来说比 Vue 查阅文档的体量要少多了。
PS：其实这里还有很多可以深挖的（并不是表面上的“组件销毁”时机），不过本文是入门教程，暂且不说了，其他机会再分享吧。

### watch computed

Vue watch 监听某个数据，React useEffct 即可实现，上文已讲。
Vue computed 计算数据，如何在 React 中实现呢？分两种情况。
第一，不用缓存计算结果（其实绝大部分情况都不用缓存，JS 计算是非常快的，很少遇到性能瓶颈），那直接写就行，没有任何障碍。

```
jsx

复制代码const [count, setCount] = useState(0)
const doubleCount = count * 2 // 直接计算，满足绝大部分情况

return <div>
    <button onClick={() => setCount(count + 1)}>increase</button>
    <span>{count}  {doubleCount}</span>
</div>
```

第二，需要缓存计算结果（少数情况），你可以使用 useMemo 做缓存。如下代码，只要 count 不变，doubleCount 就不会重新计算。这和 Vue computed 一样。
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452107355-6bbc897e-cafb-4c79-83e9-d1578944ad8e.webp#averageHue=%23653b2d&clientId=u0044065a-f65d-4&from=paste&id=ua09df895&originHeight=264&originWidth=1662&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=ud7dd87d6-3931-45d1-8b6a-fdf099385e8&title=)
虽然前端面试动不动就问性能优化，其实大部分情况下不需要做 JS 计算层面的性能优化，所以无论是 Vue computed 还是 React useMemo 都用的不多。
从使用和语义来讲，这两者都很简单，很好理解。

## 表单

Vue 使用 v-model 双向绑定表单项的值，这在用户体验方面感觉非常棒，非常方便。**单从 v-model 的开发体验上，Vue 是胜过 React 的。**

```
html

复制代码<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="请输入..." />
```

React 推荐使用**受控组件**（需要记住这个词）来处理表单项的值，其实也并不难理解。

```
jsx

复制代码const [text, setText] = useState('')
function handleChangeText(event) {
    setText(event.target.value)
}
return <div>
    <input value={text} onChange={handleChangeText}/>
</div>
```

看以上代码，一共也没几行代码，也很好理解：定义 text 然后在 input change 时 setText
其实就是自己实现了一套 Vue v-model ，功能是很相似的。
那么 React 为何要让开发者自己写呢，它内置一个 v-model 不好吗？ —— 不好。
因为 React 在设计上不是“双向绑定”，而是“单项数据流”。所以 React 要让你自己写。
这就像上文 React 修改 state 要让你显示调用 setXxx 是一个道理。
如果替用户做的过多了，看似是功能全面了，但很有可能会导致设计混乱，理解起来更费劲。
代码多写几行少写几行这都没关系，代码的可读性，设计上的统一性，这些更重要。
【实战】把你代码的 src/components/TodoInput.js 改为如下内容，浏览器刷新测试。

```
jsx

复制代码import { useState } from 'react'

function TodoInput(props) {
  const { addTodo } = props
  function addTodoHandler() {
    addTodo(text)
    setText('')
  }

  const [text, setText] = useState('')
  function handleChangeText(event) {
    setText(event.target.value)
  }
  return (
    <div>
      <input value={text} onChange={handleChangeText} /> {/* 受控组件 */}
      <button onClick={addTodoHandler}>todo input</button>
    </div>
  )
}
export default TodoInput
```

Vue v-model 和 React **受控组件**，前者更方便。但 React 受控组件也仅仅是多写几行代码，并没有其他心智负担。所以 Vue 也仅仅是在使用上更方便一点。

## 开发 todo-list 项目

有了以上的基础技能，我们就可以轻松的开发出一个 React todo-list 项目。
![](https://cdn.nlark.com/yuque/0/2024/webp/28199172/1719452107454-e71598b2-9147-4549-946b-36c541b96685.webp#averageHue=%23f6f6f6&clientId=u0044065a-f65d-4&from=paste&id=udcb867c5&originHeight=490&originWidth=1642&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u1903cf04-f8ff-451c-9594-8f586601b9e&title=)
项目源码在 [github.com/wangfupeng1…](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwangfupeng1988%2Freact-todo)

## React 很简单

总结一下本文讲的几个重要方面，React 设计的很简洁。

- React 组件就是 JS 函数，简单
- React 组件的属性，就是函数参数，简单
- React 组件的事件，也是函数参数，执行事件就是执行 JS 函数，简单
- JSX 的插值、属性、事件和样式，规则很少，更简洁
- JSX 判断和循环完全使用 JS 语法，简单
- React useState 语义明确，没有心智负担，简单
- React state 就是原始数据，没有任何包裹处理，简单
- React useEffect 涵盖所有副作用操作，API 更简洁
- React 表单受控组件比 Vue v-model 会多写几行代码，但也没有其他心智负担

你熟悉组件化开发，熟悉 JS，熟悉 Vue，你还能说出 Vue 数据响应式的原理，甚至还看过 Vue 的源码。 就这水平，学会 React 是分分钟的事情。

##

作者：前端双越老师
链接：<https://juejin.cn/post/7344536653463207973>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
