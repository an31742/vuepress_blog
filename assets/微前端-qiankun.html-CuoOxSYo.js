import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as i}from"./app-1_sQ8TOy.js";const e={},l=i(`<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><h3 id="使用框架-qiankun" tabindex="-1"><a class="header-anchor" href="#使用框架-qiankun"><span>使用框架：qiankun</span></a></h3><h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍：</span></a></h4><p>qiankun 是一个基于 <a href="https://github.com/CanopyTax/single-spa" target="_blank" rel="noopener noreferrer">single-spa</a> 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。 qiankun官网：<a href="https://qiankun.umijs.org/zh/guide" target="_blank" rel="noopener noreferrer">Go</a> 当使用 iframe 整合系统时，假设我们有系统 A, 当我们想把系统 B 引入 A 系统时，只需要 B 系统提供一个 url 给 A 系统引用即可，这里我们把 A 系统叫做父应用，把 B 系统叫做子应用。同样的，微前端也延续了这个概念，微前端在使用起来基本和使用 iframe 一样平滑。</p><h4 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构：</span></a></h4><p><strong>分为：主应用(父)，微应用(子)</strong> 图1： <img src="https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249035-f60fe1b4-bb59-4e06-9755-392e566ed6ff.png#averageHue=%23f4f4f3&amp;clientId=u09428f8a-5088-4&amp;from=paste&amp;id=ud08fd224&amp;originHeight=291&amp;originWidth=575&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u3eec842b-34c3-403d-b67a-7bee2424857&amp;title=" alt="" loading="lazy"></p><h4 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例"><span>使用案例：</span></a></h4><h5 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标：</span></a></h5><p>点击one按钮，切换到one微应用 点击two按钮，切换到two微应用 并且每个微应用都可以跳转自己的路由 <img src="https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249366-03eed114-13fa-4725-9193-8219f13d76fa.png#averageHue=%23fefdfd&amp;clientId=u09428f8a-5088-4&amp;from=paste&amp;id=u6864b1cb&amp;originHeight=514&amp;originWidth=1582&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=uc052db31-6323-479b-ba31-dc9f2984ebc&amp;title=" alt="" loading="lazy"><img src="https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249222-5741310e-e339-40d6-a454-c129b9f8c391.png#averageHue=%23faf7f6&amp;clientId=u09428f8a-5088-4&amp;from=paste&amp;id=u17c9da71&amp;originHeight=516&amp;originWidth=1606&amp;originalType=url&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u6dcc233f-e759-43ff-afb6-612bd2d825d&amp;title=" alt="" loading="lazy"> 步骤：</p><ol><li>创建主应用项目</li><li>创建微应用项目</li><li>将微应用挂到主应用项目中</li></ol><h5 id="_1-在主应用中安装qiankun框架" tabindex="-1"><a class="header-anchor" href="#_1-在主应用中安装qiankun框架"><span>1. 在主应用中安装qiankun框架</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>$ yarn add qiankun # 或者 npm i qiankun -S</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-在-主应用-中注册微应用" tabindex="-1"><a class="header-anchor" href="#_2-在-主应用-中注册微应用"><span>2. 在 主应用 中注册微应用</span></a></h5><p>main.js：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>import router from &#39;./router/index&#39;</span></span>
<span class="line"><span>import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span>import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { registerMicroApps, start } from &#39;qiankun&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>registerMicroApps([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;vueChildOne&quot;,</span></span>
<span class="line"><span>    props: { age: 10 }, //给子应用传数据</span></span>
<span class="line"><span>    entry: &quot;//localhost:3001&quot;, //默认会加载这个html,解析里面的js,动态执行（子应用必须支持跨域）里面,是用fetch去请求的数据</span></span>
<span class="line"><span>    container: &quot;#child-one-content&quot;, //挂载到主应用的哪个元素下</span></span>
<span class="line"><span>    activeRule: &quot;/child-one&quot;, //当我劫持到路由地址为//child-one时，我就把http://localhost:3001这个应用挂载到#child-one-content的元素下</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &#39;vueChildTwo&#39;,</span></span>
<span class="line"><span>    entry: &#39;//localhost:3002&#39;,</span></span>
<span class="line"><span>    // entry: { scripts: [&#39;//http://192.168.2.120:3001/main.js&#39;] },</span></span>
<span class="line"><span>    container: &#39;#child-two-content&#39;,</span></span>
<span class="line"><span>    activeRule: &#39;/child-two&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// start(); // 启动qiankun，这里不在一开始的时候使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>createApp(App).use(ElementPlus).use(router).mount(&#39;#app-base&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;bens&quot;&gt;</span></span>
<span class="line"><span>      &lt;el-button type=&quot;primary&quot; @click=&quot;$router.push(&#39;/child-one&#39;)&quot;&gt;childOne&lt;/el-button&gt;</span></span>
<span class="line"><span>      &lt;el-button type=&quot;primary&quot; @click=&quot;$router.push(&#39;/child-two&#39;)&quot;&gt;childTwo&lt;/el-button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;App&quot;,</span></span>
<span class="line"><span>  components: {},</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.bens {</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  position: absolute;</span></span>
<span class="line"><span>  top: 15px;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  z-index: 9999999;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>#app-base {</span></span>
<span class="line"><span>  font-family: Avenir, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>  -webkit-font-smoothing: antialiased;</span></span>
<span class="line"><span>  -moz-osx-font-smoothing: grayscale;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  color: #2c3e50;</span></span>
<span class="line"><span>  margin-top: 60px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 将id：app 改为 app-base  自定义就行，只要与main.js对应起来，切不与微应用重复</span></span>
<span class="line"><span>&lt;div id=&quot;app-base&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>router.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import { createRouter, createWebHistory } from &quot;vue-router&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 配置路由</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path: &#39;/child-one&#39;,</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;@/views/childOne/index.vue&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path: &#39;/child-two&#39;,</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;@/views/childTwo/index.vue&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>// 1.返回一个 router 实列，为函数，里面有配置项（对象） history</span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>    history: createWebHistory(),</span></span>
<span class="line"><span>    routes,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3导出路由   然后去 main.ts 注册 router.ts</span></span>
<span class="line"><span>export default router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>childOne/index.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;我是 主应用 one&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;child-one-content&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { start } from &quot;qiankun&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;childOne&quot;,</span></span>
<span class="line"><span>  components: {},</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // 启动微应用</span></span>
<span class="line"><span>    if (!window.qiankunStarted) {</span></span>
<span class="line"><span>      window.qiankunStarted = true;</span></span>
<span class="line"><span>      start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>childTwo/index.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;h2&gt;我是 主应用 two&lt;/h2&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;child-two-content&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { start } from &quot;qiankun&quot;;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &quot;childTwo&quot;,</span></span>
<span class="line"><span>  components: {},</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // 启动微应用</span></span>
<span class="line"><span>    if (!window.qiankunStarted) {</span></span>
<span class="line"><span>      window.qiankunStarted = true;</span></span>
<span class="line"><span>      start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-微应用配置child-one" tabindex="-1"><a class="header-anchor" href="#_4-微应用配置child-one"><span>4. 微应用配置child-one</span></a></h5><p>src下创建public-path.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>if (window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>import router from &#39;./router/index&#39;</span></span>
<span class="line"><span>import &#39;./public-path&#39; // 引入public-path.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// createApp(App).mount(&#39;#app&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let instance = null;</span></span>
<span class="line"><span>function render(props = {}) {</span></span>
<span class="line"><span>  if (instance) return;</span></span>
<span class="line"><span>  const { container } = props;</span></span>
<span class="line"><span>  console.log(container);</span></span>
<span class="line"><span>  instance = createApp(App)</span></span>
<span class="line"><span>    .use(router)</span></span>
<span class="line"><span>    .mount(container ? container.querySelector(&quot;#app-child-one&quot;) : &quot;#app-child-one&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 独立运行时</span></span>
<span class="line"><span>if (!window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span>  render();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export async function bootstrap() {</span></span>
<span class="line"><span>  console.log(&quot;[vue] vue app bootstraped&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export async function mount(props) {</span></span>
<span class="line"><span>  console.log(&quot;[vue] props from main framework&quot;, props);</span></span>
<span class="line"><span>  render(props);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export async function unmount() {</span></span>
<span class="line"><span>  //可选链操作符</span></span>
<span class="line"><span>  instance.$destroy?.();</span></span>
<span class="line"><span>  instance = null;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.html</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL %&gt;favicon.ico&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;&lt;%= htmlWebpackPlugin.options.title %&gt;&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;noscript&gt;</span></span>
<span class="line"><span>      &lt;strong&gt;We&#39;re sorry but &lt;%= htmlWebpackPlugin.options.title %&gt; doesn&#39;t work properly without JavaScript enabled. Please enable it to continue.&lt;/strong&gt;</span></span>
<span class="line"><span>    &lt;/noscript&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app-child-one&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;!-- built files will be auto injected --&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue.config.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    lintOnSave: false,</span></span>
<span class="line"><span>    devServer: {</span></span>
<span class="line"><span>        port: &quot;3001&quot;,</span></span>
<span class="line"><span>        headers: {</span></span>
<span class="line"><span>            &quot;Access-Control-Allow-Origin&quot;: &quot;*&quot;, //所有人都可以访问我的服务器</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    configureWebpack: {</span></span>
<span class="line"><span>        output: {</span></span>
<span class="line"><span>            // library: \`\${name}-[name]\`,</span></span>
<span class="line"><span>            library: \`vueChildOne\`,</span></span>
<span class="line"><span>            libraryTarget: &quot;umd&quot;, // 把微应用打包成 umd 库格式</span></span>
<span class="line"><span>            // jsonpFunction: \`webpackJsonp_\${name}\`,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>router.js</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import { createRouter, createWebHashHistory, createWebHistory } from &quot;vue-router&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 配置路由</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path: &#39;/&#39;,</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;@/views/home/index.vue&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        path: &#39;/about&#39;,</span></span>
<span class="line"><span>        component: () =&gt; import(&#39;@/views/about/index.vue&#39;),</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>// 1.返回一个 router 实列，为函数，里面有配置项（对象） history</span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>    history: createWebHashHistory(&#39;/child-one&#39;),</span></span>
<span class="line"><span>    routes,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3导出路由   然后去 main.ts 注册 router.ts</span></span>
<span class="line"><span>export default router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-微应用配置child-two" tabindex="-1"><a class="header-anchor" href="#_5-微应用配置child-two"><span>5. 微应用配置child-two</span></a></h5><p>与child-two同理，只要把对应的&quot; child-one &quot; 换成&quot; child-two &quot;即可</p><h5 id="demo代码地址" tabindex="-1"><a class="header-anchor" href="#demo代码地址"><span>demo代码地址</span></a></h5><p><a href="https://gitee.com/Divenl/micro-front-end-qiankun" target="_blank" rel="noopener noreferrer">码云地址</a></p><p>转载自<a href="https://blog.csdn.net/weixin_43193877/article/details/125717755" target="_blank" rel="noopener noreferrer">微前端-qiankun_qiankun微前端-CSDN博客</a></p>`,41),p=[l];function t(d,c){return a(),s("div",null,p)}const o=n(e,[["render",t],["__file","微前端-qiankun.html.vue"]]),v=JSON.parse('{"path":"/businessProblem/%E6%96%B0%E7%9F%A5%E8%AF%86/%E5%BE%AE%E5%89%8D%E7%AB%AF-qiankun.html","title":"微前端-qiankun","lang":"zh-CN","frontmatter":{"title":"微前端-qiankun","icon":"circle-info","description":"概念 使用框架：qiankun 介绍： qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。 qiankun官网：Go 当使用 iframe 整合系统时，假设我们有系统 A, 当我们想把系统 B 引入 A 系统时，只需要 B 系统提供一个 url 给 A 系统引用即可，这里我们把...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E6%96%B0%E7%9F%A5%E8%AF%86/%E5%BE%AE%E5%89%8D%E7%AB%AF-qiankun.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"微前端-qiankun"}],["meta",{"property":"og:description","content":"概念 使用框架：qiankun 介绍： qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。 qiankun官网：Go 当使用 iframe 整合系统时，假设我们有系统 A, 当我们想把系统 B 引入 A 系统时，只需要 B 系统提供一个 url 给 A 系统引用即可，这里我们把..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249035-f60fe1b4-bb59-4e06-9755-392e566ed6ff.png#averageHue=%23f4f4f3&clientId=u09428f8a-5088-4&from=paste&id=ud08fd224&originHeight=291&originWidth=575&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u3eec842b-34c3-403d-b67a-7bee2424857&title="}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-25T10:37:49.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-25T10:37:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"微前端-qiankun\\",\\"image\\":[\\"https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249035-f60fe1b4-bb59-4e06-9755-392e566ed6ff.png#averageHue=%23f4f4f3&clientId=u09428f8a-5088-4&from=paste&id=ud08fd224&originHeight=291&originWidth=575&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u3eec842b-34c3-403d-b67a-7bee2424857&title=\\",\\"https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249366-03eed114-13fa-4725-9193-8219f13d76fa.png#averageHue=%23fefdfd&clientId=u09428f8a-5088-4&from=paste&id=u6864b1cb&originHeight=514&originWidth=1582&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=uc052db31-6323-479b-ba31-dc9f2984ebc&title=\\",\\"https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431249222-5741310e-e339-40d6-a454-c129b9f8c391.png#averageHue=%23faf7f6&clientId=u09428f8a-5088-4&from=paste&id=u17c9da71&originHeight=516&originWidth=1606&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u6dcc233f-e759-43ff-afb6-612bd2d825d&title=\\"],\\"dateModified\\":\\"2024-06-25T10:37:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"使用框架：qiankun","slug":"使用框架-qiankun","link":"#使用框架-qiankun","children":[]}],"git":{"createdTime":1719311869000,"updatedTime":1719311869000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":4.16,"words":1248},"filePathRelative":"businessProblem/新知识/微前端-qiankun.md","localizedDate":"2024年6月25日","autoDesc":true}');export{o as comp,v as data};
