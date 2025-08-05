import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as i}from"./app-alAcU9M9.js";const e={},l=i(`<h3 id="_0-1-0-2-0-3-嘛-为什么" tabindex="-1"><a class="header-anchor" href="#_0-1-0-2-0-3-嘛-为什么"><span>0.1 + 0.2 === 0.3 嘛？为什么？</span></a></h3><p>JavaScirpt通过使用Number数字类型来表示数字(整数或者浮点数)，遵循IEEE754标准，通过64位来表示一个数字（1+11+52）</p><ul><li>1符号位，0表示正数，1表示负数s</li><li>11指数位（e）</li><li>52尾数，小数部分（有效数字）</li></ul><p>最大安全数：NumberMAX_SAFE_INTEGER=Math.pow(2,53)-1,</p><p>转换成整数就是16位，所以0.1===0.1,是因为通过 toPrecision(16) 去有效位之后，两者是相等的。</p><p>在两数相加是，会先转化成为二进制，0.1和0.2转化成二进制的时候尾数会发生无线循环，然后进行对阶运算，js引擎对二进制进行截断，所以造成精度丢失。</p><h5 id="精度缺失可能出现在进阶转换和对阶运算" tabindex="-1"><a class="header-anchor" href="#精度缺失可能出现在进阶转换和对阶运算"><span>精度缺失可能出现在进阶转换和对阶运算</span></a></h5><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//解决办法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">parseFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">（（</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">）.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">precision</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">（</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">））  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//0.3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从输入url到渲染出页面的整个过程" tabindex="-1"><a class="header-anchor" href="#从输入url到渲染出页面的整个过程"><span>从输入url到渲染出页面的整个过程</span></a></h3><h4 id="加载过程" tabindex="-1"><a class="header-anchor" href="#加载过程"><span>加载过程</span></a></h4><ul><li>NDS域名解析 解析域名到IP地址</li><li>浏览器根据IP地址向服雾器发送请求</li><li>服务器处理http请求并返回给浏览器</li></ul><h4 id="渲染过程" tabindex="-1"><a class="header-anchor" href="#渲染过程"><span>渲染过程</span></a></h4><ul><li>根据html生成DOM树</li><li>根据css生成cssOM</li><li>将DOM树和cssom树整合成render树</li></ul><h4 id="渲染过程2" tabindex="-1"><a class="header-anchor" href="#渲染过程2"><span>渲染过程2</span></a></h4><ul><li>根据render渲染页面</li><li>遇到script暂停渲染优先加载js代码</li></ul><h3 id="typeof一个函数返回的是什么" tabindex="-1"><a class="header-anchor" href="#typeof一个函数返回的是什么"><span>typeof一个函数返回的是什么</span></a></h3><p>typeof 一个函数返回是是function</p><h3 id="事件捕获" tabindex="-1"><a class="header-anchor" href="#事件捕获"><span>事件捕获</span></a></h3><p>由外向内</p><h3 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码"><span>http状态码</span></a></h3><ul><li>301永久重定向，从a永久跳转到b</li><li>302临时重定向</li><li>304资源未改变</li></ul><h3 id="浏览器存储" tabindex="-1"><a class="header-anchor" href="#浏览器存储"><span>浏览器存储</span></a></h3><p>cookie</p><ul><li>document.cookie修改 借用本地存储 最大4kb   请求需要发送到服务端增加请求的数据量</li><li>localStorage 最大是5m  setItem 和 getItem  永久储存</li><li>sessionStorage  最大是5M setItem 和 getItem 关闭会话就会删除</li></ul><h3 id="key的作用" tabindex="-1"><a class="header-anchor" href="#key的作用"><span>key的作用</span></a></h3><ul><li>在 Vue.js 中，key 的作用是为 Vue 的虚拟 DOM 算法提供一个唯一的标识，以便它能够跟踪每个节点的变化，并作出相应的更新。这就是 key 的主要作用。它也可以帮助 Vue 在重新排列元素时保持状态或避免重新渲染。例如，如果您渲染一个列表，并在用户点击按钮时将其重新排列，您可以使用 key 来确保 Vue 可以正确地跟踪每个元素。</li></ul><h3 id="_1-2-3-map-parseint-what-why" tabindex="-1"><a class="header-anchor" href="#_1-2-3-map-parseint-what-why"><span>[&#39;1&#39;, &#39;2&#39;, &#39;3&#39;].map(parseInt) what &amp; why ?</span></a></h3><p>第一眼看到这个题目的时候，脑海跳出的答案是 [1, 2, 3]，但是真正的答案是[1, NaN, NaN]。</p><p>首先让我们回顾一下，map函数的第一个参数callback： var new_array = arr.map(function callback(currentValue[, index[, array]]) { // Return element for new_array }[,  thisArg]) 这个callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。</p><p>而parseInt则是用来解析字符串的，使字符串成为指定基数的整数。 parseInt(string, radix) 接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。</p><p>了解这两个函数后，我们可以模拟一下运行情况</p><p>parseInt(&#39;1&#39;, 0) //radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1 parseInt(&#39;2&#39;, 1) //基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN parseInt(&#39;3&#39;, 2) //基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN map函数返回的是一个数组，所以最后结果为[1, NaN, NaN]</p><p>最后附上MDN上对于这两个函数的链接，具体参数大家可以到里面看 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt</a><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map</a></p><h3 id="nexttick的原理" tabindex="-1"><a class="header-anchor" href="#nexttick的原理"><span>$nexttick的原理</span></a></h3><ul><li>Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM。**</li></ul><h3 id="props传一个对象-emit可以改变吗" tabindex="-1"><a class="header-anchor" href="#props传一个对象-emit可以改变吗"><span>props传一个对象，$emit可以改变吗</span></a></h3><ul><li>可以的。在 Vue.js 中，父组件可以通过在子组件上定义 <code>props</code> 属性来传递数据给子组件。然后，子组件可以通过触发自定义事件来向父组件传递数据</li></ul><h3 id="var-a-1-function-tset-a-a-2-console-log-a-1" tabindex="-1"><a class="header-anchor" href="#var-a-1-function-tset-a-a-2-console-log-a-1"><span>var a=1，function tset(a){a=2} console.log(a) //1</span></a></h3><h3 id="instanceof原理" tabindex="-1"><a class="header-anchor" href="#instanceof原理"><span>instanceof原理</span></a></h3><ul><li>instanceof<code>是一种JavaScript运算符，用于检测构造函数的原型属性是否存在于某个实例对象的原型链上。 换句话说，</code>instanceof\`运算符用于检查某个对象是否是某个特定类型的实例，比如检查一个对象是否是一个数组</li></ul><h3 id="set如何修改数组和对象" tabindex="-1"><a class="header-anchor" href="#set如何修改数组和对象"><span>$set如何修改数组和对象</span></a></h3><ul><li>首先，判断在非生产环境，传入的target如果是undefined、null或是原始类型，则直接跑出错误。 其次，如果判断target如果是个数组，并且key是索引的话，那么就取当前数组长度与key这两者的最大值作为数组的新长度，然后使用数组的splice方法将传入的索引key对应的val值添加进数组。Array类型数据的变化侦测方式时说过，数组的splice方法已经被我们创建的拦截器重写了，也就是说，当使用splice方法向数组内添加元素时，该元素会自动被变成响应式的。</li><li>接下来，如果传入的target不是数组，那就当作是对象来处理。首先判断传入的key是否已经存在于target中，如果存在，表明这次操作不是新增属性，而是对已有的属性进行简单的修改值，那么就只修改属性值即可，接下来获取到traget的<strong>ob</strong>属性，我们说过，该属性是否为true标志着target是否为响应式对象，接着判断如果tragte是 Vue 实例，或者是 Vue 实例的根数据对象，则抛出警告并退出程序，接着判断如果ob属性为false，那么表明target不是一个响应式对象，那么我们只需简单给它添加上新的属性，不用将新属性转化成响应式，最后，如果target是对象，并且是响应式，那么就调用defineReactive方法将新属性值添加到target上，defineReactive方会将新属性添加完之后并将其转化成响应式，最后通知依赖更新</li></ul><p>参考文献 <a href="https://blog.csdn.net/weixin_42038290/article/details/114700728?utm_medium=distribute.pc_relevant.none-task-blog-2" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_42038290/article/details/114700728?utm_medium=distribute.pc_relevant.none-task-blog-2</a>defaultbaidujs_baidulandingword~default-12-114700728-blog-122427044.235v38pc_relevant_sort&amp;spm=1001.2101.3001.4242.7&amp;utm_relevant_index=15</p><h3 id="export和export-define的区别" tabindex="-1"><a class="header-anchor" href="#export和export-define的区别"><span>export和export define的区别</span></a></h3><ul><li>export 用于导出模块中的多个变量或函数，在导入模块时需要使用大括号括起来，并使用相同的名称来引用这些变量或函数。</li><li>export default 用于导出模块中的默认变量或函数，在导入模块时可以使用任意名称来引用这个变量或函数。</li></ul><h3 id="理解diff算法" tabindex="-1"><a class="header-anchor" href="#理解diff算法"><span>理解diff算法</span></a></h3><ul><li>diff 算法是一种用于比较两个序列的不同之处的算法。它常用于计算文件或者文本的差异，并且能够快速地找到两个序列之间的相似部分。diff 算法通常与 patch 算法配合使用，来快速地将一个序列转换为另一个序列。</li><li>diff 算法通常采用动态规划的方法来计算两个序列之间的差异。它会比较两个序列中每个元素的相似度，并且从这些相似度中找到最优的匹配方式。diff 算法通常能够计算出两个序列之间的最小编辑距离，并且能够返回一个编辑路径，指示如何将一个序列转换为另一个序列。</li><li>diff 算法的时间复杂度通常为 O(n^2)，其中 n 是两个序列的长度。它的空间复杂度也是 O(n^2)。 diff 算法的性能可能会受到序列的相似度的影响，对于非常相似的序列，diff 算法的性能可能会比较差</li></ul><h3 id="什么是单向数据流" tabindex="-1"><a class="header-anchor" href="#什么是单向数据流"><span>什么是单向数据流</span></a></h3><ul><li>所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解</li></ul><h3 id="单向数据流为什么不能改对象-数组类型的-props" tabindex="-1"><a class="header-anchor" href="#单向数据流为什么不能改对象-数组类型的-props"><span>单向数据流为什么不能改对象 / 数组类型的 props</span></a></h3><ul><li>当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然可以更改对象或数组内部的值。这是因为 JavaScript 的对象和数组是按引用传递，而对 Vue 来说，禁止这样的改动，虽然可能生效，但有很大的性能损耗，比较得不偿失。</li><li>这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。在大多数场景下，子组件应该抛出一个事件来通知父组件做出改变</li></ul><h3 id="vue中extend是做什么的" tabindex="-1"><a class="header-anchor" href="#vue中extend是做什么的"><span>vue中extend是做什么的</span></a></h3><ul><li>Vue中，extend方法用于创建一个新的Vue构造函数，它继承自当前Vue实例或组件。通过extend方法创建的新的构造函数，可以用于创建新的Vue实例或组件。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 创建Vue实例A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> A</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello, World!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 使用extend方法创建新的Vue构造函数B，继承自A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> B</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> A</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  created</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;New instance created!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  methods</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    greet</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">      console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 创建B的实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> instanceB</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> B</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 调用B的实例方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">instanceB</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">greet</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 输出：Hello, World!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当我们使用extend方法创建新的Vue构造函数时，新的构造函数会继承当前Vue实例或组件的所有选项（如data、methods、computed等）。这样，我们可以基于现有的Vue实例或组件进行扩展，添加或修改选项，从而实现代码的重用和组件的复用</li></ul><h3 id="flex等于1都有哪几个属性" tabindex="-1"><a class="header-anchor" href="#flex等于1都有哪几个属性"><span>flex等于1都有哪几个属性</span></a></h3><ul><li>flex-grow: 1;：表示弹性项目可以根据剩余空间扩展，并占据额外的空间。</li><li>flex-shrink: 1;：表示弹性项目可以根据需要缩小，以适应容器的空间限制。</li><li>flex-basis: 0%; 或 flex-basis: 0;：表示弹性项目的初始大小为零，将根据剩余空间进行分配。</li></ul><h3 id="webpack的热更新是什么及其原理" tabindex="-1"><a class="header-anchor" href="#webpack的热更新是什么及其原理"><span>Webpack的热更新是什么及其原理</span></a></h3><ul><li>Webpack的热更新（Hot Module Replacement）是指在应用程序运行过程中，当一个模块发生变化时，只更新该模块，而不重新加载整个页面或整个应用程序</li></ul><p>Webpack 将应用程序划分为多个模块，并为每个模块创建唯一的标识符。 当一个模块发生变化时，Webpack 会构建一个包含该模块变化的补丁（patch）。 Webpack 的热更新服务器（Hot Module Replacement Server）将补丁发送给浏览器端的热更新运行时（Hot Module Replacement Runtime）。 热更新运行时接收到补丁后，会通过替换或添加模块的方式，将变化应用于当前运行的应用程序。 在更新过程中，热更新运行时会保持应用程序的状态（例如表单数据、用户交互等）不变。 更新完成后，热更新运行时会通知浏览器刷新页面或应用程序的特定部分，以展示新的变化。 总结来说，Webpack 的热更新通过在构建过程中生成补丁，并将补丁应用于当前运行的应用程序，实现快速、实时地更新模块的功能。这样开发者可以保持应用程序的状态，同时提高开发效率。</p><h3 id="watch原理" tabindex="-1"><a class="header-anchor" href="#watch原理"><span>watch原理</span></a></h3><p>在初始化阶段，会为每个watch创建一个User Watcher，如果watch的immediate为true，会马上执行一次回调；创建User Watcher过程中会获取一次被监听属性的值，从而触发被监听属性的getter方法，将User Watcher添加到被监听属性的Dep实例中。 当被监听属性发生改变时，通知User Watcher更新，如果watch的sync为true，会马上执行watch的回调；否则会将User Watcher的update方法通过nextTick放到缓存队列中，在下一个的事件循环中，会重新获取被监听属性的属性值，并判断新旧值是否想等、是否设置了deep为true、被监听属性是否是对象类型，如果成立就执行回调</p><p>初始化：为 computed 属性创建 lazy watcher（此处 watcher 指双向绑定中的监听器，下同）。 首次模板渲染：渲染 watcher 检测到 computed 属性时，会调用 computed 属性的 getter 方法，而 computed 属性的 getter 方法会调用依赖属性的 getter，从而形成链式调用，同时保存引用关系用于更新。取得计算结果后 lazy watcher 会将结果缓存，并返回给渲染 watcher 进行模板渲染。 多次模板渲染：直接取 lazy watcher 中的缓存值给到渲染 watcher 进行渲染。 依赖属性更新：根据首次模板渲染阶段构建的依赖关系向上通知 lazy watcher 进行重新计算，缓存计算结果并通知渲染 watcher 重新渲染更新页面。</p><h3 id="complate原理" tabindex="-1"><a class="header-anchor" href="#complate原理"><span>complate原理</span></a></h3><p>初始化阶段调用对所有的计算属性执行defineComputed方法，对挂载到vue实例上的计算属性进行拦截，并设置对应的存取描述符 get(createComputedGetter函数)和set。当首次触发拦截器中对应的 get时会进行依赖收集，将computed watcher 与 render watcher添加到计算属性中依赖属性dep实例的订阅者列表中。当计算属性所依赖的属性发生变化时，会通知dep实例中所有的订阅者进行更新，其中包含computed watcher与render watcher，当computed watcher执行update方法时，会执行dirty变为true，使得下次访问计算属性时，需要进行重新计算。当render watcher执行update方法时，会调用对应的run方法。</p><p>watch 本质上是为每个监听属性 setter 创建了一个 watcher，当被监听的属性更新时，调用传入的回调函数。常见的配置选项有 deep 和 immediate，对应原理如下：</p><p>deep：深度监听对象，为对象的每一个属性创建一个 watcher，从而确保对象的每一个属性更新时都会触发传入的回调函数。主要原因在于对象属于引用类型，单个属性的更新并不会触发对象 setter，因此引入 deep 能够很好地解决监听对象的问题。同时也会引入判断机制，确保在多个属性更新时回调函数仅触发一次，避免性能浪费。 immediate：在初始化时直接调用回调函数，可以通过在 created 阶段手动调用回调函数实现相同的效果。</p><h3 id="vuex刷新页面数据丢失怎么解决" tabindex="-1"><a class="header-anchor" href="#vuex刷新页面数据丢失怎么解决"><span>vuex刷新页面数据丢失怎么解决</span></a></h3><p>vuex中的数据直接保存到浏览器缓存中（sessionStorage、localStorage、cookie）</p><h3 id="promise-构造函数是同步执行还是异步执行-那么-then-方法呢" tabindex="-1"><a class="header-anchor" href="#promise-构造函数是同步执行还是异步执行-那么-then-方法呢"><span>Promise 构造函数是同步执行还是异步执行，那么 then 方法呢</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  console.log(1)</span></span>
<span class="line"><span>  resolve()</span></span>
<span class="line"><span>  console.log(2)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>promise.then(() =&gt; {</span></span>
<span class="line"><span>  console.log(3)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>执行结果是：1243</span></span>
<span class="line"><span>promise构造函数是同步执行的，then方法是异步执行的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in和for-of的区别" tabindex="-1"><a class="header-anchor" href="#for-in和for-of的区别"><span>for in和for of的区别</span></a></h3><ul><li>for in常用于同步的遍历</li><li>for of常用于异步的遍历</li></ul><h3 id="this到底是什么" tabindex="-1"><a class="header-anchor" href="#this到底是什么"><span>this到底是什么</span></a></h3><ul><li>构造函数：是指以后的实例对象，不是构造函数本省；当前执行对象。执行上下文</li></ul><h3 id="vue3和vue2有什么区别" tabindex="-1"><a class="header-anchor" href="#vue3和vue2有什么区别"><span>vue3和vue2有什么区别</span></a></h3><ol><li>双向数据绑定原理不同：Vue3使用了基于Proxy的响应式系统，性能更高，同时能够直接监听数组类型的数据变化。</li><li>是否支持碎片：Vue3支持多个根节点，被称为Fragments，而Vue2只支持单一根节点。</li><li>API类型不同：Vue3引入了Composition API，以函数式编程的思想，提供了组织大型项目和代码重用的新方式。同时，Vue3仍然保留了Vue2的Options API。</li><li>定义数据变量和方法不同：Vue3引入了setup函数，有利于逻辑的封装和复用。</li><li>生命周期钩子函数：Vue2的生命周期钩子函数在Vue3中得以保持，但在新的Composition API中的命名有变更，大部分的生命周期钩子名称前面加了“on”。</li><li>更高的性能：Vue3提供了更高效的虚拟DOM和更快的页面渲染。据称，Vue3的更新性能比Vue2提高了1.3 ~ 2倍，SSR速度提高了2 ~ 3倍。</li></ol><h3 id="微信小程序和uniapp有什么区别" tabindex="-1"><a class="header-anchor" href="#微信小程序和uniapp有什么区别"><span>微信小程序和uniapp有什么区别</span></a></h3><ol><li>使用语言和开发方式：微信小程序主要使用的是WXML、WXSS和JavaScript，并且需要在微信开发工具中进行开发。而UniApp则是基于Vue.js框架的跨平台移动应用开发框架，使用的是HTML、CSS和JavaScript，以及Vue.js进行开发。</li><li>跨平台能力：微信小程序主要是为了在微信平台上使用，适用性相对较为局限。而UniApp支持一套代码发布到多个平台，包括iOS、Android、Web和各种小程序（微信/支付宝/百度/头条/QQ/360小程序）等。</li><li>扩展能力：UniApp支持原生能力扩展，可以调用原生的API，实现如访问设备传感器、使用原生地图等功能，而微信小程序也提供了丰富的API，不过更加侧重于微信内部的功能和服务。</li><li>性能和效率：微信小程序和通过UniApp开发的微信小程序，在运行效果和性能上几乎是一样的。</li></ol><h3 id="uniappp如何实现上拉加载" tabindex="-1"><a class="header-anchor" href="#uniappp如何实现上拉加载"><span>uniappp如何实现上拉加载</span></a></h3><ol><li>在pages.json配置文件中，为需要使用上拉加载更多功能的页面设置onReachBottomDistance参数，该参数表示触底事件触发时距页面底部距离。</li><li>在页面对应的js文件中，使用生命周期函数onReachBottom，该函数在页面上拉触底时被触发，你可以在这个函数中进行数据请求，获取更多的数据</li></ol><h3 id="前端打包添加前缀" tabindex="-1"><a class="header-anchor" href="#前端打包添加前缀"><span>前端打包添加前缀</span></a></h3><p>在前端项目中为资源文件（如 CSS、JS、图片等）增加前缀的需求，通常是为了支持 CDN 加速或区分环境资源路径。如果不使用 Webpack 等构建工具，可以借助 Kubernetes (K8s) 或 Jenkins 的部署能力，在部署阶段动态处理文件路径前缀。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>以下是两种方式的实现思路：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法 1：使用 Kubernetes 的 ConfigMap 或环境变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过 Kubernetes 环境变量，动态注入前缀，结合简单的脚本处理 HTML 文件中的路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现步骤：</span></span>
<span class="line"><span>	1.	设置环境变量：</span></span>
<span class="line"><span>在 Kubernetes 的 Deployment 文件中设置环境变量，定义资源的前缀路径，例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: frontend</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>        - name: frontend</span></span>
<span class="line"><span>          image: your-frontend-image</span></span>
<span class="line"><span>          env:</span></span>
<span class="line"><span>            - name: ASSET_PREFIX</span></span>
<span class="line"><span>              value: &quot;https://cdn.example.com/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	2.	脚本动态修改前缀：</span></span>
<span class="line"><span>在容器启动时，通过启动脚本动态修改 HTML 中的资源路径前缀。例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span># entrypoint.sh</span></span>
<span class="line"><span>ASSET_PREFIX=\${ASSET_PREFIX:-/}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 替换 HTML 文件中的路径</span></span>
<span class="line"><span>sed -i &quot;s|__ASSET_PREFIX__|$ASSET_PREFIX|g&quot; /usr/share/nginx/html/index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动 Nginx</span></span>
<span class="line"><span>nginx -g &quot;daemon off;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 HTML 文件中使用占位符 __ASSET_PREFIX__：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;__ASSET_PREFIX__css/style.css&quot;&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;__ASSET_PREFIX__js/app.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	3.	挂载启动脚本：</span></span>
<span class="line"><span>修改 Dockerfile，确保脚本在容器启动时运行：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FROM nginx:alpine</span></span>
<span class="line"><span>COPY entrypoint.sh /entrypoint.sh</span></span>
<span class="line"><span>RUN chmod +x /entrypoint.sh</span></span>
<span class="line"><span>CMD [&quot;/entrypoint.sh&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法 2：使用 Jenkins 动态生成路径前缀</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过 Jenkins 的构建流程，在部署前处理静态文件，动态添加前缀。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现步骤：</span></span>
<span class="line"><span>	1.	定义前缀参数：</span></span>
<span class="line"><span>在 Jenkins 中设置一个环境变量或参数，用于定义资源前缀：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>pipeline {</span></span>
<span class="line"><span>    environment {</span></span>
<span class="line"><span>        ASSET_PREFIX = &quot;https://cdn.example.com/&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	2.	脚本处理静态文件：</span></span>
<span class="line"><span>在构建阶段，通过脚本为静态文件路径增加前缀。例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ASSET_PREFIX=&quot;https://cdn.example.com/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 替换 HTML 文件中的路径</span></span>
<span class="line"><span>find ./dist -name &quot;*.html&quot; -exec sed -i &quot;s|/__ASSET_PREFIX__/|$ASSET_PREFIX|g&quot; {} \\;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	3.	部署处理后的文件：</span></span>
<span class="line"><span>将带有路径前缀的文件部署到服务器或 CDN：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stage(&#39;Deploy&#39;) {</span></span>
<span class="line"><span>    steps {</span></span>
<span class="line"><span>        sh &#39;&#39;&#39;</span></span>
<span class="line"><span>        rsync -avz ./dist/ user@server:/var/www/html/</span></span>
<span class="line"><span>        &#39;&#39;&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>	4.	HTML 文件示例：</span></span>
<span class="line"><span>在 HTML 文件中使用占位符 __ASSET_PREFIX__：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;__ASSET_PREFIX__/css/style.css&quot;&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;__ASSET_PREFIX__/js/app.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法 3：直接配置 Nginx 重写路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果不想修改静态文件内容，可以通过 Nginx 配置动态添加前缀。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Nginx 配置示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        root /usr/share/nginx/html;</span></span>
<span class="line"><span>        index index.html;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location /static/ {</span></span>
<span class="line"><span>        proxy_pass https://cdn.example.com/static/;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>静态文件路径依然保持为 /static/，但通过 proxy_pass 将其转发到 CDN 或其他资源路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法对比：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法	优点	缺点</span></span>
<span class="line"><span>K8s 环境变量注入	动态注入配置，轻量且无侵入	需要编写额外脚本处理 HTML 文件</span></span>
<span class="line"><span>Jenkins 构建处理	自动化流程集成，无需改动运行环境配置	构建时修改文件，稍增加构建时间</span></span>
<span class="line"><span>Nginx 动态重写	配置简单，无需修改文件或代码	前缀完全依赖服务器配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>推荐方案：</span></span>
<span class="line"><span>	•	如果使用 K8s，推荐环境变量结合启动脚本的方式。</span></span>
<span class="line"><span>	•	如果使用 Jenkins，推荐在构建阶段直接修改静态文件路径。</span></span>
<span class="line"><span>	•	如果资源路径较少，可以直接通过 Nginx 动态重写实现。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router守卫模式-有哪几种怎么用" tabindex="-1"><a class="header-anchor" href="#vue-router守卫模式-有哪几种怎么用"><span>vue-router守卫模式 有哪几种怎么用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>在 Vue.js 中，Vue Router 提供了多种守卫模式来控制路由访问的逻辑。守卫模式分为以下几类，每种守卫都有特定的用途和使用场景。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 全局守卫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>全局守卫作用于所有的路由，适用于需要在所有路由之间切换时执行的逻辑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分类</span></span>
<span class="line"><span>	1.	beforeEach：导航开始之前触发。</span></span>
<span class="line"><span>	2.	beforeResolve：在组件内守卫和异步组件被解析之后触发。</span></span>
<span class="line"><span>	3.	afterEach：导航完成后触发。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span>import VueRouter from &#39;vue-router&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(VueRouter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    { path: &#39;/&#39;, component: Home },</span></span>
<span class="line"><span>    { path: &#39;/login&#39;, component: Login },</span></span>
<span class="line"><span>    { path: &#39;/dashboard&#39;, component: Dashboard },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局前置守卫</span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;全局前置守卫: beforeEach&#39;);</span></span>
<span class="line"><span>  if (to.path === &#39;/dashboard&#39; &amp;&amp; !isLoggedIn()) {</span></span>
<span class="line"><span>    // 如果未登录，跳转到登录页</span></span>
<span class="line"><span>    next(&#39;/login&#39;);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    next(); // 继续导航</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局解析守卫</span></span>
<span class="line"><span>router.beforeResolve((to, from, next) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;全局解析守卫: beforeResolve&#39;);</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局后置守卫</span></span>
<span class="line"><span>router.afterEach((to, from) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;全局后置守卫: afterEach&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 路由独享守卫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由独享守卫是绑定到某个路由配置的守卫，仅作用于该路由的导航过程。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = new VueRouter({</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/dashboard&#39;,</span></span>
<span class="line"><span>      component: Dashboard,</span></span>
<span class="line"><span>      beforeEnter: (to, from, next) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;路由独享守卫: beforeEnter&#39;);</span></span>
<span class="line"><span>        if (!isLoggedIn()) {</span></span>
<span class="line"><span>          next(&#39;/login&#39;);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          next();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特点：</span></span>
<span class="line"><span>	•	仅在进入当前路由时触发。</span></span>
<span class="line"><span>	•	如果导航到别的路由，则不会调用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 组件内守卫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>组件内守卫是定义在组件中的守卫方法，主要用于处理与组件相关的路由逻辑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分类</span></span>
<span class="line"><span>	1.	beforeRouteEnter：在路由进入前触发。此守卫中无法访问组件实例（this），因为组件实例尚未创建。</span></span>
<span class="line"><span>	2.	beforeRouteUpdate：在路由更新时（当前组件复用）触发。</span></span>
<span class="line"><span>	3.	beforeRouteLeave：在导航离开当前组件时触发。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;Dashboard&#39;,</span></span>
<span class="line"><span>  beforeRouteEnter(to, from, next) {</span></span>
<span class="line"><span>    console.log(&#39;组件内守卫: beforeRouteEnter&#39;);</span></span>
<span class="line"><span>    // 无法访问 this，但可以通过 next 回调访问组件实例</span></span>
<span class="line"><span>    next(vm =&gt; {</span></span>
<span class="line"><span>      vm.fetchData();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteUpdate(to, from, next) {</span></span>
<span class="line"><span>    console.log(&#39;组件内守卫: beforeRouteUpdate&#39;);</span></span>
<span class="line"><span>    this.fetchData(); // 可以访问 this</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  beforeRouteLeave(to, from, next) {</span></span>
<span class="line"><span>    console.log(&#39;组件内守卫: beforeRouteLeave&#39;);</span></span>
<span class="line"><span>    if (this.hasUnsavedChanges) {</span></span>
<span class="line"><span>      if (confirm(&#39;你有未保存的更改，是否离开？&#39;)) {</span></span>
<span class="line"><span>        next();</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        next(false); // 取消导航</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      next();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    fetchData() {</span></span>
<span class="line"><span>      console.log(&#39;Fetching data...&#39;);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 完整的导航解析流程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue Router 的导航解析流程如下：</span></span>
<span class="line"><span>	1.	全局前置守卫（beforeEach）。</span></span>
<span class="line"><span>	2.	路由独享守卫（beforeEnter）。</span></span>
<span class="line"><span>	3.	组件内的 beforeRouteEnter。</span></span>
<span class="line"><span>	4.	解析守卫（beforeResolve）。</span></span>
<span class="line"><span>	5.	导航完成后触发全局后置守卫（afterEach）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 守卫参数详解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>每个守卫的回调函数接收以下三个参数：</span></span>
<span class="line"><span>	•	to：目标路由对象，表示即将进入的路由。</span></span>
<span class="line"><span>	•	from：当前导航离开的路由对象。</span></span>
<span class="line"><span>	•	next：用于控制导航的函数。</span></span>
<span class="line"><span>	•	next()：进行下一步导航。</span></span>
<span class="line"><span>	•	next(false)：中断导航。</span></span>
<span class="line"><span>	•	next(&#39;/path&#39;)：跳转到新的路径。</span></span>
<span class="line"><span>	•	next(error)：导航终止，并将错误传递到 router.onError。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>6. 应用场景</span></span>
<span class="line"><span>	•	全局前置守卫：用户鉴权，检查是否登录。</span></span>
<span class="line"><span>	•	路由独享守卫：处理某个路由特有的访问权限逻辑。</span></span>
<span class="line"><span>	•	组件内守卫：</span></span>
<span class="line"><span>	•	beforeRouteEnter：加载数据或初始化逻辑。</span></span>
<span class="line"><span>	•	beforeRouteUpdate：根据路由参数更新页面内容。</span></span>
<span class="line"><span>	•	beforeRouteLeave：提示用户是否保存未完成的更改。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结</span></span>
<span class="line"><span></span></span>
<span class="line"><span>守卫类型	触发时机	应用场景</span></span>
<span class="line"><span>全局前置守卫	每次导航开始前触发	用户鉴权、记录日志等全局逻辑</span></span>
<span class="line"><span>全局解析守卫	路由组件解析完成后触发	处理依赖异步解析的逻辑</span></span>
<span class="line"><span>全局后置守卫	每次导航完成后触发	全局统计、清理操作</span></span>
<span class="line"><span>路由独享守卫	进入特定路由前触发	检查特定路由访问权限</span></span>
<span class="line"><span>组件内守卫	当前组件相关的路由操作时触发	加载数据、阻止离开、组件复用等操作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router结合axios-canceltoken-取消上一个页面pending状态接口" tabindex="-1"><a class="header-anchor" href="#vue-router结合axios-canceltoken-取消上一个页面pending状态接口"><span>vue-router结合axios.cancelToken 取消上一个页面pending状态接口</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>在 Vue 项目中，当使用 vue-router 和 axios 结合时，可以通过 axios.cancelToken 实现取消上一个页面的请求，避免未完成的请求干扰当前页面逻辑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下是具体实现步骤和示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>思路</span></span>
<span class="line"><span>	1.	维护一个请求控制器：</span></span>
<span class="line"><span>	•	为每个请求创建一个 CancelToken，并在路由切换时取消未完成的请求。</span></span>
<span class="line"><span>	2.	在路由守卫中取消请求：</span></span>
<span class="line"><span>	•	通过 beforeRouteLeave 或全局 beforeEach 守卫实现请求取消。</span></span>
<span class="line"><span>	3.	清理已完成的请求：</span></span>
<span class="line"><span>	•	请求完成后，从控制器中移除对应的记录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现步骤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 创建 Axios 实例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>封装一个 Axios 实例，并支持传入 CancelToken。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import axios from &#39;axios&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const axiosInstance = axios.create({</span></span>
<span class="line"><span>  baseURL: &#39;/api&#39;, // 示例 API 基础路径</span></span>
<span class="line"><span>  timeout: 10000,  // 超时时间</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导出 Axios 实例</span></span>
<span class="line"><span>export default axiosInstance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 创建请求管理器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用一个全局对象来管理 CancelToken。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 请求管理器</span></span>
<span class="line"><span>const pendingRequests = new Map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 添加请求</span></span>
<span class="line"><span> * @param {Object} config Axios 请求配置</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function addRequest(config) {</span></span>
<span class="line"><span>  const { url, method, params, data } = config;</span></span>
<span class="line"><span>  const key = \`\${url}&amp;\${method}&amp;\${JSON.stringify(params)}&amp;\${JSON.stringify(data)}\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 如果存在未完成的请求，取消它</span></span>
<span class="line"><span>  if (pendingRequests.has(key)) {</span></span>
<span class="line"><span>    const cancel = pendingRequests.get(key);</span></span>
<span class="line"><span>    cancel(); // 取消请求</span></span>
<span class="line"><span>    pendingRequests.delete(key); // 移除记录</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 创建新的 CancelToken</span></span>
<span class="line"><span>  config.cancelToken = new axios.CancelToken((cancel) =&gt; {</span></span>
<span class="line"><span>    pendingRequests.set(key, cancel);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 移除请求</span></span>
<span class="line"><span> * @param {Object} config Axios 请求配置</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function removeRequest(config) {</span></span>
<span class="line"><span>  const { url, method, params, data } = config;</span></span>
<span class="line"><span>  const key = \`\${url}&amp;\${method}&amp;\${JSON.stringify(params)}&amp;\${JSON.stringify(data)}\`;</span></span>
<span class="line"><span>  if (pendingRequests.has(key)) {</span></span>
<span class="line"><span>    pendingRequests.delete(key);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 请求拦截器</span></span>
<span class="line"><span>axiosInstance.interceptors.request.use(</span></span>
<span class="line"><span>  (config) =&gt; {</span></span>
<span class="line"><span>    addRequest(config);</span></span>
<span class="line"><span>    return config;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; Promise.reject(error)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 响应拦截器</span></span>
<span class="line"><span>axiosInstance.interceptors.response.use(</span></span>
<span class="line"><span>  (response) =&gt; {</span></span>
<span class="line"><span>    removeRequest(response.config);</span></span>
<span class="line"><span>    return response;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  (error) =&gt; {</span></span>
<span class="line"><span>    removeRequest(error.config || {});</span></span>
<span class="line"><span>    return Promise.reject(error);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export { pendingRequests };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 路由守卫取消请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过路由守卫监听路由切换，取消所有挂起的请求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span>import VueRouter from &#39;vue-router&#39;;</span></span>
<span class="line"><span>import { pendingRequests } from &#39;./axios&#39;; // 引入请求管理器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Vue.use(VueRouter);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  { path: &#39;/&#39;, component: Home },</span></span>
<span class="line"><span>  { path: &#39;/about&#39;, component: About },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = new VueRouter({ routes });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 全局前置守卫</span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>  // 取消所有挂起的请求</span></span>
<span class="line"><span>  pendingRequests.forEach((cancel) =&gt; cancel());</span></span>
<span class="line"><span>  pendingRequests.clear();</span></span>
<span class="line"><span>  next(); // 继续导航</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default router;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 示例组件使用</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过封装的 Axios 实例发起请求，无需担心路由切换时的请求管理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;Home Page&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;fetchData&quot;&gt;Fetch Data&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import axiosInstance from &#39;@/axios&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;Home&#39;,</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    async fetchData() {</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        const response = await axiosInstance.get(&#39;/data&#39;, { params: { id: 1 } });</span></span>
<span class="line"><span>        console.log(response.data);</span></span>
<span class="line"><span>      } catch (error) {</span></span>
<span class="line"><span>        if (axios.isCancel(error)) {</span></span>
<span class="line"><span>          console.log(&#39;Request canceled:&#39;, error.message);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          console.error(&#39;Request failed:&#39;, error);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 补充说明</span></span>
<span class="line"><span>	•	自动清理：所有取消的请求都从 pendingRequests 中移除，避免内存泄漏。</span></span>
<span class="line"><span>	•	局部守卫：如果只需要取消当前组件的请求，可以在组件的 beforeRouteLeave 中调用 pendingRequests.clear()。</span></span>
<span class="line"><span>	•	错误处理：被取消的请求会抛出一个特殊的错误，可以用 axios.isCancel(error) 检测。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>扩展：优化性能</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果需要减少每次创建和管理 CancelToken 的开销，可以使用动态配置路由对应的请求。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span>  // 根据路由的元信息决定是否取消请求</span></span>
<span class="line"><span>  if (to.meta.cancelPendingRequests) {</span></span>
<span class="line"><span>    pendingRequests.forEach((cancel) =&gt; cancel());</span></span>
<span class="line"><span>    pendingRequests.clear();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  next();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这种结合 vue-router 和 axios.cancelToken 的方式可以有效提升项目的性能，防止路由切换时不必要的网络请求干扰，同时保证数据的一致性。</span></span>
<span class="line"><span>在 Vue Router 中，meta 是每个路由对象的一个自定义属性，主要用来存储开发者自定义的元信息。你可以在路由配置时定义 meta，并通过守卫、组件等访问和使用这些信息</span></span>
<span class="line"><span>requiresAuth	权限验证	用于标识路由是否需要登录</span></span>
<span class="line"><span>roles	权限角色	指定允许访问该路由的用户角色</span></span>
<span class="line"><span>title	页面标题	动态设置页面标题</span></span>
<span class="line"><span>keepAlive	缓存控制	是否需要缓存当前页面</span></span>
<span class="line"><span>breadcrumb	面包屑描述	路由在面包屑导航中的名称</span></span>
<span class="line"><span>transition	路由切换动画	指定路由切换时的动画名称</span></span>
<span class="line"><span>showSidebar	布局控制	是否显示侧边栏或其他布局元素</span></span>
<span class="line"><span>dynamicTab	动态标签页	用于实现多标签页功能</span></span>
<span class="line"><span>icon	图标	在菜单或导航中显示对应的图标</span></span>
<span class="line"><span>promise有哪些方法</span></span>
<span class="line"><span>Promise.resolve	静态方法	创建一个成功的 Promise</span></span>
<span class="line"><span>Promise.reject	静态方法	创建一个失败的 Promise</span></span>
<span class="line"><span>Promise.all	静态方法	等待所有 Promise 成功或其中一个失败</span></span>
<span class="line"><span>Promise.allSettled	静态方法	等待所有 Promise 完成（无论成功还是失败）</span></span>
<span class="line"><span>Promise.race	静态方法	返回第一个完成的 Promise（无论成功或失败）</span></span>
<span class="line"><span>Promise.any	静态方法	返回第一个成功的 Promise，若全部失败则返回 AggregateError</span></span>
<span class="line"><span>then	实例方法	处理成功和失败，返回一个新的 Promise</span></span>
<span class="line"><span>catch	实例方法	捕获失败的 Promise</span></span>
<span class="line"><span>finally	实例方法	无论成功或失败都执行的</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keep-alivve结合router-view-怎么使用都有哪些属性" tabindex="-1"><a class="header-anchor" href="#keep-alivve结合router-view-怎么使用都有哪些属性"><span>keep-alivve结合router-view 怎么使用都有哪些属性</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>在 Vue 中，&lt;keep-alive&gt; 是一个内置组件，用于缓存动态组件的状态，防止组件被重新加载。结合 router-view，可以实现路由组件的缓存，从而优化性能和用户体验。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;keep-alive&gt; 使用场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>当一个页面频繁切换或回退到之前的路由时，通过 &lt;keep-alive&gt; 缓存组件，保留其状态（如表单内容、滚动位置），避免重复加载。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;keep-alive&gt; 常用属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以下是 &lt;keep-alive&gt; 的核心属性及其用途：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>属性	类型	说明</span></span>
<span class="line"><span>include	\`string	Array\`</span></span>
<span class="line"><span>exclude	\`string	Array\`</span></span>
<span class="line"><span>max	number	缓存组件的最大数量，超出限制时会删除最久未使用的组件（LRU 机制）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用示例</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 基本用法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将路由组件使用 &lt;keep-alive&gt; 包裹，实现路由缓存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;router-view /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>改为结合 &lt;keep-alive&gt;：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;keep-alive&gt;</span></span>
<span class="line"><span>      &lt;router-view /&gt;</span></span>
<span class="line"><span>    &lt;/keep-alive&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 使用 include 和 exclude</span></span>
<span class="line"><span></span></span>
<span class="line"><span>控制哪些组件需要被缓存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;keep-alive :include=&quot;[&#39;Home&#39;, &#39;Profile&#39;]&quot; :exclude=&quot;[&#39;Login&#39;]&quot;&gt;</span></span>
<span class="line"><span>      &lt;router-view /&gt;</span></span>
<span class="line"><span>    &lt;/keep-alive&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	•	include：指定缓存的组件。</span></span>
<span class="line"><span>	•	exclude：指定不缓存的组件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：</span></span>
<span class="line"><span>	•	include 和 exclude 中的值是组件的 name 属性，需要在组件中显式定义：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;Home&#39;, // 匹配到此值才会缓存</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 配合 max 属性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>限制缓存组件的数量，当超过数量时会根据最近使用策略（LRU）移除最早的缓存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;keep-alive :max=&quot;2&quot;&gt;</span></span>
<span class="line"><span>      &lt;router-view /&gt;</span></span>
<span class="line"><span>    &lt;/keep-alive&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动态控制缓存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在某些情况下，可能需要动态控制哪些组件被缓存。例如，通过路由的 meta 属性控制缓存逻辑。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由配置：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/home&#39;,</span></span>
<span class="line"><span>    component: Home,</span></span>
<span class="line"><span>    meta: { keepAlive: true }, // 需要缓存</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/profile&#39;,</span></span>
<span class="line"><span>    component: Profile,</span></span>
<span class="line"><span>    meta: { keepAlive: true }, // 需要缓存</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/login&#39;,</span></span>
<span class="line"><span>    component: Login,</span></span>
<span class="line"><span>    meta: { keepAlive: false }, // 不需要缓存</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动态缓存实现：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;keep-alive&gt;</span></span>
<span class="line"><span>      &lt;router-view v-if=&quot;$route.meta.keepAlive&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/keep-alive&gt;</span></span>
<span class="line"><span>    &lt;router-view v-else /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结合组件的生命周期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用 &lt;keep-alive&gt; 后，组件的生命周期会变化：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>生命周期钩子	触发时机</span></span>
<span class="line"><span>activated	组件从缓存中激活时触发，用于处理缓存恢复后的逻辑</span></span>
<span class="line"><span>deactivated	组件被缓存时触发，用于暂停操作或清理定时器等资源</span></span>
<span class="line"><span>created	组件第一次加载时触发，之后即使缓存也不会再次触发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;Home&#39;,</span></span>
<span class="line"><span>  created() {</span></span>
<span class="line"><span>    console.log(&#39;created&#39;); // 仅在组件首次加载时触发</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  activated() {</span></span>
<span class="line"><span>    console.log(&#39;activated&#39;); // 从缓存中激活时触发</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  deactivated() {</span></span>
<span class="line"><span>    console.log(&#39;deactivated&#39;); // 被缓存时触发</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高级用法：动态标签页缓存</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现多标签页的缓存功能，通过动态 include 属性控制缓存的组件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;tab in tabs&quot; :key=&quot;tab.name&quot; @click=&quot;selectTab(tab.name)&quot;&gt;</span></span>
<span class="line"><span>        {{ tab.name }}</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;keep-alive :include=&quot;cachedTabs&quot;&gt;</span></span>
<span class="line"><span>      &lt;router-view /&gt;</span></span>
<span class="line"><span>    &lt;/keep-alive&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  data() {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      tabs: [</span></span>
<span class="line"><span>        { name: &#39;Home&#39;, path: &#39;/home&#39; },</span></span>
<span class="line"><span>        { name: &#39;Profile&#39;, path: &#39;/profile&#39; },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      cachedTabs: [&#39;Home&#39;, &#39;Profile&#39;], // 动态缓存的组件</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  methods: {</span></span>
<span class="line"><span>    selectTab(tabName) {</span></span>
<span class="line"><span>      this.$router.push(this.tabs.find(tab =&gt; tab.name === tabName).path);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意事项</span></span>
<span class="line"><span>	1.	组件的 name 必须显式定义：</span></span>
<span class="line"><span>	•	include 和 exclude 匹配的是组件的 name，没有定义则不会生效。</span></span>
<span class="line"><span>	2.	缓存不等于销毁：</span></span>
<span class="line"><span>	•	被缓存的组件只会触发 deactivated，不会销毁（destroyed 不触发）。</span></span>
<span class="line"><span>	3.	性能注意：</span></span>
<span class="line"><span>	•	不要缓存所有组件，尤其是复杂页面。合理使用 include 和 max。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>通过 &lt;keep-alive&gt;，可以显著提升 Vue 项目的性能，尤其是在多页面频繁切换时。结合 router-view 和动态控制，能够满足多种业务场景的缓存需求！</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断对象是否有某个属性" tabindex="-1"><a class="header-anchor" href="#判断对象是否有某个属性"><span>判断对象是否有某个属性</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>在 JavaScript 中，可以使用多种方法判断对象是否有某个属性。以下是 常见的方式及它们的特点：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 使用 in 操作符</span></span>
<span class="line"><span>	•	用于检查对象及其原型链中是否存在某个属性。</span></span>
<span class="line"><span>	•	返回值为 true 或 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { name: &#39;Alice&#39;, age: 25 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(&#39;name&#39; in obj); // true</span></span>
<span class="line"><span>console.log(&#39;toString&#39; in obj); // true (因为继承自 Object.prototype)</span></span>
<span class="line"><span>console.log(&#39;gender&#39; in obj); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 使用 hasOwnProperty 方法</span></span>
<span class="line"><span>	•	用于判断某个属性是否是对象的 自身属性（不检查原型链）。</span></span>
<span class="line"><span>	•	返回值为 true 或 false。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { name: &#39;Alice&#39;, age: 25 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(obj.hasOwnProperty(&#39;name&#39;)); // true</span></span>
<span class="line"><span>console.log(obj.hasOwnProperty(&#39;toString&#39;)); // false (继承自原型链)</span></span>
<span class="line"><span>console.log(obj.hasOwnProperty(&#39;gender&#39;)); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 使用 Object.prototype.hasOwn (ES2022+)</span></span>
<span class="line"><span>	•	类似于 hasOwnProperty，但直接作为静态方法使用，避免对空对象的错误调用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { name: &#39;Alice&#39;, age: 25 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Object.hasOwn(obj, &#39;name&#39;)); // true</span></span>
<span class="line"><span>console.log(Object.hasOwn(obj, &#39;toString&#39;)); // false</span></span>
<span class="line"><span>console.log(Object.hasOwn(obj, &#39;gender&#39;)); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 使用 undefined 判断</span></span>
<span class="line"><span>	•	可以通过检查属性值是否为 undefined 来判断是否存在。</span></span>
<span class="line"><span>	•	注意：如果属性值本身就是 undefined，这种方法会有歧义。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { name: &#39;Alice&#39;, age: 25, gender: undefined };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(obj.name !== undefined); // true</span></span>
<span class="line"><span>console.log(obj.gender !== undefined); // false</span></span>
<span class="line"><span>console.log(obj.nonExistent !== undefined); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 使用 Object.keys 或 Object.hasOwnProperty</span></span>
<span class="line"><span>	•	通过检查对象的键数组是否包含某个属性。</span></span>
<span class="line"><span>	•	仅适用于自身属性，不检查原型链。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = { name: &#39;Alice&#39;, age: 25 };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Object.keys(obj).includes(&#39;name&#39;)); // true</span></span>
<span class="line"><span>console.log(Object.keys(obj).includes(&#39;toString&#39;)); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对比不同方法的适用场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方法	是否检查原型链	是否可靠判断自身属性</span></span>
<span class="line"><span>in	✅ 是	❌ 否（包括原型链）</span></span>
<span class="line"><span>hasOwnProperty	❌ 否	✅ 是</span></span>
<span class="line"><span>Object.hasOwn (ES2022+)	❌ 否	✅ 是</span></span>
<span class="line"><span>判断是否为 undefined	❌ 否	❌ 不可靠</span></span>
<span class="line"><span>Object.keys().includes()	❌ 否	✅ 是</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最佳实践</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果需要判断一个属性是否是对象的自身属性（不检查原型链）：</span></span>
<span class="line"><span>	•	推荐使用 Object.hasOwn（现代浏览器）。</span></span>
<span class="line"><span>	•	如果需要兼容性：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const hasProperty = obj.hasOwnProperty(&#39;propertyName&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果需要检查对象及其原型链：</span></span>
<span class="line"><span>	•	使用 in 操作符即可。</span></span>
<span class="line"><span>==  ===  Object.is的区别</span></span>
<span class="line"><span></span></span>
<span class="line"><span>==, ===, 和 Object.is 是 JavaScript 中用于比较值的三种方式，它们的功能和行为各不相同。以下是它们的区别和使用场景：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. ==（宽松相等/松散相等）</span></span>
<span class="line"><span>	•	规则：只比较值，类型不同会进行隐式转换后再比较。</span></span>
<span class="line"><span>	•	特点：</span></span>
<span class="line"><span>	•	进行类型转换以尝试比较不同类型的值。</span></span>
<span class="line"><span>	•	可能导致一些不直观的结果。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(1 == &#39;1&#39;);          // true （数字和字符串进行了类型转换）</span></span>
<span class="line"><span>console.log(0 == false);        // true （\`false\` 转换为 0）</span></span>
<span class="line"><span>console.log(null == undefined); // true （它们被认为是相等的）</span></span>
<span class="line"><span>console.log([] == 0);           // true （空数组转换为 0）</span></span>
<span class="line"><span>console.log([1] == &#39;1&#39;);        // true （数组和字符串都转换为数字）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用场景：</span></span>
<span class="line"><span>	•	很少推荐使用，因为类型转换可能会导致意外结果。</span></span>
<span class="line"><span>	•	除非特别需要宽松比较，例如比较 null 和 undefined 是否等价。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. ===（严格相等）</span></span>
<span class="line"><span>	•	规则：比较值和类型，必须完全相同才返回 true。</span></span>
<span class="line"><span>	•	特点：</span></span>
<span class="line"><span>	•	不会进行类型转换。</span></span>
<span class="line"><span>	•	更加安全和直观，推荐在大多数情况下使用。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(1 === &#39;1&#39;);          // false （不同类型）</span></span>
<span class="line"><span>console.log(0 === false);        // false （不同类型）</span></span>
<span class="line"><span>console.log(null === undefined); // false （不同类型）</span></span>
<span class="line"><span>console.log([] === 0);           // false （不同类型）</span></span>
<span class="line"><span>console.log([1] === &#39;1&#39;);        // false （不同类型）</span></span>
<span class="line"><span>console.log(1 === 1);            // true （值和类型都相同）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用场景：</span></span>
<span class="line"><span>	•	推荐在大多数情况下使用 ===，因为它避免了隐式类型转换带来的潜在问题。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. Object.is</span></span>
<span class="line"><span>	•	规则：用于判断两个值是否严格相等，与 === 类似，但对 NaN 和 +0/-0 的处理有所不同。</span></span>
<span class="line"><span>	•	特点：</span></span>
<span class="line"><span>	•	NaN：Object.is(NaN, NaN) 返回 true，而 NaN === NaN 返回 false。</span></span>
<span class="line"><span>	•	+0 和 -0：Object.is(+0, -0) 返回 false，而 +0 === -0 返回 true。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>示例：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(Object.is(1, 1));            // true</span></span>
<span class="line"><span>console.log(Object.is(&#39;1&#39;, 1));          // false</span></span>
<span class="line"><span>console.log(Object.is(NaN, NaN));        // true （不同于 \`===\`）</span></span>
<span class="line"><span>console.log(Object.is(+0, -0));          // false （不同于 \`===\`）</span></span>
<span class="line"><span>console.log(Object.is(null, undefined)); // false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用场景：</span></span>
<span class="line"><span>	•	适用于需要更精确的比较场景，例如区分 +0 和 -0，或者判断 NaN 是否相等。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>总结对比</span></span>
<span class="line"><span></span></span>
<span class="line"><span>特性	== (宽松相等)	=== (严格相等)	Object.is</span></span>
<span class="line"><span>类型转换	✅ 进行类型转换	❌ 不进行类型转换	❌ 不进行类型转换</span></span>
<span class="line"><span>区分 NaN	❌ NaN == NaN 为 false	❌ NaN === NaN 为 false	✅ Object.is(NaN, NaN) 为 true</span></span>
<span class="line"><span>区分 +0 和 -0	❌ +0 == -0 为 true	❌ +0 === -0 为 true	✅ Object.is(+0, -0) 为 false</span></span>
<span class="line"><span>检查值和类型是否相同	❌ 可能隐式转换后相同	✅ 完全相同	✅ 更精确的相等判断</span></span>
<span class="line"><span></span></span>
<span class="line"><span>推荐使用场景</span></span>
<span class="line"><span>	1.	常规开发：优先使用 ===，避免类型转换带来的混淆。</span></span>
<span class="line"><span>	2.	特殊需求：</span></span>
<span class="line"><span>	•	判断 NaN 或区分 +0 和 -0 时，使用 Object.is。</span></span>
<span class="line"><span>	3.	宽松比较：</span></span>
<span class="line"><span>	•	需要比较 null 和 undefined 是否等价时，可使用 ==。例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (value == null) {</span></span>
<span class="line"><span>  // 等价于 value === null || value === undefined</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,92),p=[l];function c(d,v){return a(),n("div",null,p)}const u=s(e,[["render",c],["__file","经典问题.html.vue"]]),m=JSON.parse(`{"path":"/frontEndInterview/%E9%9D%A2%E8%AF%95/%E7%BB%8F%E5%85%B8%E9%97%AE%E9%A2%98.html","title":"2025年前端面试经典问题","lang":"zh-CN","frontmatter":{"title":"2025年前端面试经典问题","icon":"circle-info","description":"0.1 + 0.2 === 0.3 嘛？为什么？ JavaScirpt通过使用Number数字类型来表示数字(整数或者浮点数)，遵循IEEE754标准，通过64位来表示一个数字（1+11+52） 1符号位，0表示正数，1表示负数s 11指数位（e） 52尾数，小数部分（有效数字） 最大安全数：NumberMAX_SAFE_INTEGER=Math.po...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/%E9%9D%A2%E8%AF%95/%E7%BB%8F%E5%85%B8%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"2025年前端面试经典问题"}],["meta",{"property":"og:description","content":"0.1 + 0.2 === 0.3 嘛？为什么？ JavaScirpt通过使用Number数字类型来表示数字(整数或者浮点数)，遵循IEEE754标准，通过64位来表示一个数字（1+11+52） 1符号位，0表示正数，1表示负数s 11指数位（e） 52尾数，小数部分（有效数字） 最大安全数：NumberMAX_SAFE_INTEGER=Math.po..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-30T18:08:36.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2025-07-30T18:08:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2025年前端面试经典问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-30T18:08:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"0.1 + 0.2 === 0.3 嘛？为什么？","slug":"_0-1-0-2-0-3-嘛-为什么","link":"#_0-1-0-2-0-3-嘛-为什么","children":[]},{"level":3,"title":"从输入url到渲染出页面的整个过程","slug":"从输入url到渲染出页面的整个过程","link":"#从输入url到渲染出页面的整个过程","children":[]},{"level":3,"title":"typeof一个函数返回的是什么","slug":"typeof一个函数返回的是什么","link":"#typeof一个函数返回的是什么","children":[]},{"level":3,"title":"事件捕获","slug":"事件捕获","link":"#事件捕获","children":[]},{"level":3,"title":"http状态码","slug":"http状态码","link":"#http状态码","children":[]},{"level":3,"title":"浏览器存储","slug":"浏览器存储","link":"#浏览器存储","children":[]},{"level":3,"title":"key的作用","slug":"key的作用","link":"#key的作用","children":[]},{"level":3,"title":"['1', '2', '3'].map(parseInt) what & why ?","slug":"_1-2-3-map-parseint-what-why","link":"#_1-2-3-map-parseint-what-why","children":[]},{"level":3,"title":"$nexttick的原理","slug":"nexttick的原理","link":"#nexttick的原理","children":[]},{"level":3,"title":"props传一个对象，$emit可以改变吗","slug":"props传一个对象-emit可以改变吗","link":"#props传一个对象-emit可以改变吗","children":[]},{"level":3,"title":"var a=1，function tset(a){a=2} console.log(a) //1","slug":"var-a-1-function-tset-a-a-2-console-log-a-1","link":"#var-a-1-function-tset-a-a-2-console-log-a-1","children":[]},{"level":3,"title":"instanceof原理","slug":"instanceof原理","link":"#instanceof原理","children":[]},{"level":3,"title":"$set如何修改数组和对象","slug":"set如何修改数组和对象","link":"#set如何修改数组和对象","children":[]},{"level":3,"title":"export和export define的区别","slug":"export和export-define的区别","link":"#export和export-define的区别","children":[]},{"level":3,"title":"理解diff算法","slug":"理解diff算法","link":"#理解diff算法","children":[]},{"level":3,"title":"什么是单向数据流","slug":"什么是单向数据流","link":"#什么是单向数据流","children":[]},{"level":3,"title":"单向数据流为什么不能改对象 / 数组类型的 props","slug":"单向数据流为什么不能改对象-数组类型的-props","link":"#单向数据流为什么不能改对象-数组类型的-props","children":[]},{"level":3,"title":"vue中extend是做什么的","slug":"vue中extend是做什么的","link":"#vue中extend是做什么的","children":[]},{"level":3,"title":"flex等于1都有哪几个属性","slug":"flex等于1都有哪几个属性","link":"#flex等于1都有哪几个属性","children":[]},{"level":3,"title":"Webpack的热更新是什么及其原理","slug":"webpack的热更新是什么及其原理","link":"#webpack的热更新是什么及其原理","children":[]},{"level":3,"title":"watch原理","slug":"watch原理","link":"#watch原理","children":[]},{"level":3,"title":"complate原理","slug":"complate原理","link":"#complate原理","children":[]},{"level":3,"title":"vuex刷新页面数据丢失怎么解决","slug":"vuex刷新页面数据丢失怎么解决","link":"#vuex刷新页面数据丢失怎么解决","children":[]},{"level":3,"title":"Promise 构造函数是同步执行还是异步执行，那么 then 方法呢","slug":"promise-构造函数是同步执行还是异步执行-那么-then-方法呢","link":"#promise-构造函数是同步执行还是异步执行-那么-then-方法呢","children":[]},{"level":3,"title":"for in和for of的区别","slug":"for-in和for-of的区别","link":"#for-in和for-of的区别","children":[]},{"level":3,"title":"this到底是什么","slug":"this到底是什么","link":"#this到底是什么","children":[]},{"level":3,"title":"vue3和vue2有什么区别","slug":"vue3和vue2有什么区别","link":"#vue3和vue2有什么区别","children":[]},{"level":3,"title":"微信小程序和uniapp有什么区别","slug":"微信小程序和uniapp有什么区别","link":"#微信小程序和uniapp有什么区别","children":[]},{"level":3,"title":"uniappp如何实现上拉加载","slug":"uniappp如何实现上拉加载","link":"#uniappp如何实现上拉加载","children":[]},{"level":3,"title":"前端打包添加前缀","slug":"前端打包添加前缀","link":"#前端打包添加前缀","children":[]},{"level":3,"title":"vue-router守卫模式 有哪几种怎么用","slug":"vue-router守卫模式-有哪几种怎么用","link":"#vue-router守卫模式-有哪几种怎么用","children":[]},{"level":3,"title":"vue-router结合axios.cancelToken 取消上一个页面pending状态接口","slug":"vue-router结合axios-canceltoken-取消上一个页面pending状态接口","link":"#vue-router结合axios-canceltoken-取消上一个页面pending状态接口","children":[]},{"level":3,"title":"keep-alivve结合router-view  怎么使用都有哪些属性","slug":"keep-alivve结合router-view-怎么使用都有哪些属性","link":"#keep-alivve结合router-view-怎么使用都有哪些属性","children":[]},{"level":3,"title":"判断对象是否有某个属性","slug":"判断对象是否有某个属性","link":"#判断对象是否有某个属性","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1753898916000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":2}]},"readingTime":{"minutes":32.14,"words":9643},"filePathRelative":"frontEndInterview/面试/经典问题.md","localizedDate":"2024年6月23日","autoDesc":true}`);export{u as comp,m as data};
