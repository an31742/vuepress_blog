import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-BjgZRqXW.js";const i={},l=e(`<h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty"><span>Object.defineProperty</span></a></h3><ul><li>Object.defineProperty(obj, prop, descriptor)用来给对象定义属性</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【数据属性】</span></span>
<span class="line"><span>数据属性有4个描述内部属性的特性</span></span>
<span class="line"><span>Configurable:是否可以删除、能否修改属性的特性。</span></span>
<span class="line"><span>Enumerable：是否可枚举；即是否通过for-in循环或Object.keys()返回属性</span></span>
<span class="line"><span>Writable：能否修改属性的值</span></span>
<span class="line"><span>Value:该属性对应的值</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【访问器属性】</span></span>
<span class="line"><span>Configurable：同上</span></span>
<span class="line"><span>Enumerable：同上</span></span>
<span class="line"><span>Set:一个给属性提供 setter 的方法(给对象属性设置值时调用的函数)，如果没有 setter 则为 undefined。</span></span>
<span class="line"><span>Get:一个给属性提供 getter 的方法(访问对象属性时调用的函数,返回值就是当前属性的值)，</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建/修改/获取属性的方法</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【Object.defineProperty()】</span></span>
<span class="line"><span>方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 函数执行完后返回这个对象。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var obj = new Object();</span></span>
<span class="line"><span>Object.defineProperty(obj, &#39;name&#39;, {</span></span>
<span class="line"><span>    configurable: false,</span></span>
<span class="line"><span>    enumerable: true,</span></span>
<span class="line"><span>    writable: true,</span></span>
<span class="line"><span>    value: &#39;张三&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Object.defineProperties()】</span></span>
<span class="line"><span>方法直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var obj = new Object();</span></span>
<span class="line"><span>Object.defineProperties(obj, {</span></span>
<span class="line"><span>    name: {</span></span>
<span class="line"><span>        value: &#39;张三&#39;,</span></span>
<span class="line"><span>        configurable: false,</span></span>
<span class="line"><span>        writable: true,</span></span>
<span class="line"><span>        enumerable: true</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    age: {</span></span>
<span class="line"><span>        value: 18,</span></span>
<span class="line"><span>        configurable: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Object.getOwnPropertyDescriptor()】</span></span>
<span class="line"><span>该方法返回指定对象上一个自有属性对应的属性描述符。</span></span>
<span class="line"><span>var obj = new Object();</span></span>
<span class="line"><span>Object.defineProperty(obj, &#39;name&#39;, {</span></span>
<span class="line"><span>  configurable: false, // 不可修改数据属性</span></span>
<span class="line"><span>  enumerable: true,</span></span>
<span class="line"><span>  writable: true,</span></span>
<span class="line"><span>  value: &#39;张三&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(obj.name) //张三</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var desc = Object.getOwnPropertyDescriptor(obj, &#39;name&#39;);</span></span>
<span class="line"><span>// 修改</span></span>
<span class="line"><span>desc.enumerable=false;</span></span>
<span class="line"><span>console.log(desc);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>var desc_1 = Object.getOwnPropertyDescriptor(obj, &#39;name&#39;);</span></span>
<span class="line"><span>console.log(desc_1); // 再次获取，打印没有修改</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>【Object. getOwnPropertyDescriptors()】</span></span>
<span class="line"><span>所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。</span></span>
<span class="line"><span>var person = {</span></span>
<span class="line"><span>    name: &#39;张三&#39;,</span></span>
<span class="line"><span>    age: 18</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var desc = Object.getOwnPropertyDescriptors(person);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>各种场景下,数据属性的的扩展示例讲解</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【configrubale】如果设置configrubale属性为false，则不可使用delete操作符(在严格模式下抛出错误), 不能再次修改所有内部属性值</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var person = {};</span></span>
<span class="line"><span>Object.defineProperty(person, &#39;name&#39;, {</span></span>
<span class="line"><span>    configurable: false,</span></span>
<span class="line"><span>    value: &#39;John&#39;</span></span>
<span class="line"><span>}) ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 严格模式下抛出错误</span></span>
<span class="line"><span>delete person.name   </span></span>
<span class="line"><span>// &#39;John&#39;  没有删除</span></span>
<span class="line"><span>console.log(person.name) </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object.defineProperty(person, &#39;name&#39;, {</span></span>
<span class="line"><span>    configurable: true  //报错</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【访问器属性】</span></span>
<span class="line"><span>设置属性，注意需要外面来个变量来设置 obj属性被设置后的值，用于obj.a获取的时候返回；</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var obj = {};</span></span>
<span class="line"><span>var aValue; </span></span>
<span class="line"><span>Object.defineProperty(obj, &#39;a&#39;, {</span></span>
<span class="line"><span>  configurable: true,</span></span>
<span class="line"><span>  enumerable: true,</span></span>
<span class="line"><span>  get: function() {</span></span>
<span class="line"><span>    console.log(&quot;a被获取了&quot;)</span></span>
<span class="line"><span>    return aValue;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set: function(newValue) {</span></span>
<span class="line"><span>    console.log(&quot;a被设置了&quot;)</span></span>
<span class="line"><span>    aValue = newValue;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>obj.a //获取</span></span>
<span class="line"><span>obj.a=1 //设置</span></span>
<span class="line"><span>console.log(obj.a);  //获取</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="var-a-1-为什么不可以被删除-a-1可以被删除" tabindex="-1"><a class="header-anchor" href="#var-a-1-为什么不可以被删除-a-1可以被删除"><span>var a=1 为什么不可以被删除？ a=1可以被删除？</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【全局定义变量】</span></span>
<span class="line"><span>var a = 1; // a属于window, 相当于window.a</span></span>
<span class="line"><span>var d = Object.getOwnPropertyDescriptor(window, &#39;a&#39;);</span></span>
<span class="line"><span>// {</span></span>
<span class="line"><span>//     configurable: false,</span></span>
<span class="line"><span>//     value: 1,</span></span>
<span class="line"><span>//     writable: true,</span></span>
<span class="line"><span>//     enumerable: true</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>a = 1; //a相当于window的一个属性, window.a</span></span>
<span class="line"><span>var d = Object.getOwnPropertyDescriptor(window, &#39;a&#39;);</span></span>
<span class="line"><span>// {</span></span>
<span class="line"><span>//     configurable: true,   // 此时configurable属性值为true</span></span>
<span class="line"><span>//     value: 1,</span></span>
<span class="line"><span>//     writable: true,</span></span>
<span class="line"><span>//     enumerable: true</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span>注意：只有使用var, let等操作符才是定义变量，而不使用var，直接a=1;,这样a的含义为window的一个属性，并不是我们所说的变量的概念。使用 var定义的任何变量，其configurable属性值都为false,定义对象也是一样</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var b = {</span></span>
<span class="line"><span>    name: &#39;bbb&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var d = Object.getOwnPropertyDescriptor(window, &#39;b&#39;);</span></span>
<span class="line"><span>console.log(d)</span></span>
<span class="line"><span>// {</span></span>
<span class="line"><span>//     configurable: false</span></span>
<span class="line"><span>//     value: 1,</span></span>
<span class="line"><span>//     writable: true,</span></span>
<span class="line"><span>//     enumerable: true</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var b = {</span></span>
<span class="line"><span>    name: &#39;bbb&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var d = Object.getOwnPropertyDescriptor(b, &#39;name&#39;);</span></span>
<span class="line"><span>console.log(d)</span></span>
<span class="line"><span>// {</span></span>
<span class="line"><span>//     configurable: true</span></span>
<span class="line"><span>//     writable: true,</span></span>
<span class="line"><span>//     enumerable: true</span></span>
<span class="line"><span>//     value: &#39;bbb&#39;</span></span>
<span class="line"><span>// }</span></span>
<span class="line"><span>使用字面量定义的对象,该对象内部的属性的数据描述符configurable属性都为true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【Writable】当writable为false(并且configrubale为true),[[value]]可以通过defineeProperty修改, 但不能直接赋值修改</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="简单的数据双向绑定" tabindex="-1"><a class="header-anchor" href="#简单的数据双向绑定"><span>简单的数据双向绑定</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span> &lt;div class=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;p&gt;</span></span>
<span class="line"><span>      input1=&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; id=&quot;input1&quot;&gt;</span></span>
<span class="line"><span>    &lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;</span></span>
<span class="line"><span>      input2=&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; id=&quot;input2&quot;&gt;</span></span>
<span class="line"><span>    &lt;/p&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      我每次比input2的值加1=&gt;</span></span>
<span class="line"><span>      &lt;span id=&quot;span&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var DOM_1 = document.getElementById(&#39;input1&#39;);</span></span>
<span class="line"><span>var DOM_2 = document.getElementById(&#39;input2&#39;);</span></span>
<span class="line"><span>var oSpan = document.getElementById(&#39;span&#39;);</span></span>
<span class="line"><span>var obj = {};</span></span>
<span class="line"><span>Object.defineProperties(obj, {</span></span>
<span class="line"><span>  val1: {</span></span>
<span class="line"><span>    configurable: true,</span></span>
<span class="line"><span>    get: function() {</span></span>
<span class="line"><span>      DOM_1.value = 0;</span></span>
<span class="line"><span>      DOM_2.value = 0;</span></span>
<span class="line"><span>      oSpan.innerHTML = 0;</span></span>
<span class="line"><span>      return 0</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set: function(newValue) {</span></span>
<span class="line"><span>      【核心】在这，就是被设置的时候，通知所有相关的DOM进行数据更改；</span></span>
<span class="line"><span>      DOM_2.value = newValue;</span></span>
<span class="line"><span>      oSpan.innerHTML = Number(newValue) ? Number(newValue) : 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  val2: {</span></span>
<span class="line"><span>    configurable: true,</span></span>
<span class="line"><span>    get: function() {</span></span>
<span class="line"><span>      DOM_1.value = 0;</span></span>
<span class="line"><span>      DOM_2.value = 0;</span></span>
<span class="line"><span>      oSpan.innerHTML = 0;</span></span>
<span class="line"><span>      return 0</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set: function(newValue) {</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      DOM_1.value = newValue;</span></span>
<span class="line"><span>      oSpan.innerHTML = Number(newValue) + 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>DOM_1.value = obj.val1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DOM_1.addEventListener(&#39;keyup&#39;, function() {</span></span>
<span class="line"><span>  obj.val1 = DOM_1.value;</span></span>
<span class="line"><span>}, false)</span></span>
<span class="line"><span>DOM_2.addEventListener(&#39;keyup&#39;, function() {</span></span>
<span class="line"><span>  obj.val2 = DOM_2.value;</span></span>
<span class="line"><span>}, false)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例-propertyisenumerable-key" tabindex="-1"><a class="header-anchor" href="#实例-propertyisenumerable-key"><span>实例.propertyIsEnumerable(&quot;key&quot;)</span></a></h3><ul><li>用来检测实例化对象上的某一属性是否可遍历，也就是能不能用for..in、forEach/map/filter循环来取到.</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var obj = new Object();</span></span>
<span class="line"><span>Object.defineProperty(obj, &#39;name&#39;, {</span></span>
<span class="line"><span>  configurable: false,</span></span>
<span class="line"><span>  enumerable: false,</span></span>
<span class="line"><span>  writable: true,</span></span>
<span class="line"><span>  value: &#39;张三&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>obj.propertyIsEnumerable(&quot;name&quot;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例-hasownproperty-key" tabindex="-1"><a class="header-anchor" href="#实例-hasownproperty-key"><span>实例.hasOwnProperty(&quot;key&quot;)</span></a></h3><ul><li>用于检查某一属性是不是挂载于实例化的对象上，来自父亲继承的属性为false；</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>function FN (argument) {</span></span>
<span class="line"><span>  this.a = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>FN.prototype={</span></span>
<span class="line"><span>  b:1</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var fn = new FN();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(fn.hasOwnProperty(&quot;a&quot;)); //ture</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[l];function d(r,c){return a(),s("div",null,p)}const u=n(i,[["render",d],["__file","Object-defineProperty.html.vue"]]),b=JSON.parse('{"path":"/frontEndInterview/vue/Object-defineProperty.html","title":"Object.defineProperty","lang":"zh-CN","frontmatter":{"title":"Object.defineProperty","icon":"circle-info","description":"Object.defineProperty Object.defineProperty(obj, prop, descriptor)用来给对象定义属性 创建/修改/获取属性的方法 各种场景下,数据属性的的扩展示例讲解 var a=1 为什么不可以被删除？ a=1可以被删除？ 简单的数据双向绑定 实例.propertyIsEnumerable(\\"key\\"...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/vue/Object-defineProperty.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"Object.defineProperty"}],["meta",{"property":"og:description","content":"Object.defineProperty Object.defineProperty(obj, prop, descriptor)用来给对象定义属性 创建/修改/获取属性的方法 各种场景下,数据属性的的扩展示例讲解 var a=1 为什么不可以被删除？ a=1可以被删除？ 简单的数据双向绑定 实例.propertyIsEnumerable(\\"key\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Object.defineProperty\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"Object.defineProperty","slug":"object-defineproperty","link":"#object-defineproperty","children":[]},{"level":3,"title":"var a=1 为什么不可以被删除？ a=1可以被删除？","slug":"var-a-1-为什么不可以被删除-a-1可以被删除","link":"#var-a-1-为什么不可以被删除-a-1可以被删除","children":[]},{"level":3,"title":"简单的数据双向绑定","slug":"简单的数据双向绑定","link":"#简单的数据双向绑定","children":[]},{"level":3,"title":"实例.propertyIsEnumerable(\\"key\\")","slug":"实例-propertyisenumerable-key","link":"#实例-propertyisenumerable-key","children":[]},{"level":3,"title":"实例.hasOwnProperty(\\"key\\")","slug":"实例-hasownproperty-key","link":"#实例-hasownproperty-key","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":3.84,"words":1153},"filePathRelative":"frontEndInterview/vue/Object-defineProperty.md","localizedDate":"2024年6月23日","autoDesc":true}');export{u as comp,b as data};
