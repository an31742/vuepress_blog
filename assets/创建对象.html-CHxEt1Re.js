import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-CEBb2VWP.js";const i={},l=e(`<h1 id="原型链类" tabindex="-1"><a class="header-anchor" href="#原型链类"><span>原型链类</span></a></h1><h3 id="创建对象有几种方法" tabindex="-1"><a class="header-anchor" href="#创建对象有几种方法"><span>创建对象有几种方法</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【字面量，或Object构造函数】</span></span>
<span class="line"><span>var o1 = { name: &quot;o1&quot; };</span></span>
<span class="line"><span>var o2 = new Object({ name: &#39;o2&#39; });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【构造函数】</span></span>
<span class="line"><span>function M() {</span></span>
<span class="line"><span>  this.name = &#39;o3&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var o3 = new M();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【将传入的对象进行原型对象的挂载】</span></span>
<span class="line"><span>var o4 = Object.create({ name: &quot;o4&quot; });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看类型" tabindex="-1"><a class="header-anchor" href="#查看类型"><span>查看类型</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>toString.call(App)  [object Function]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Object instanceof Function  == true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typeof(fn_1)  function</span></span>
<span class="line"><span>typeof(&quot;&quot;)    string</span></span>
<span class="line"><span>typeof(0)     number</span></span>
<span class="line"><span>typeof([])</span></span>
<span class="line"><span>typeof({})</span></span>
<span class="line"><span>typeof(new Date())    object</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prototype/__proto__</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof原理" tabindex="-1"><a class="header-anchor" href="#instanceof原理"><span>instanceof原理</span></a></h3><ul><li>就是前面的对象是否继承后面的对象的原型，哪怕是多层。</li><li>内部原理就是找对象的<strong>proto</strong>的地址和后面的对象的prototype或<strong>proto</strong>的地址是一样的。</li></ul><h3 id="call实现原理" tabindex="-1"><a class="header-anchor" href="#call实现原理"><span>call实现原理</span></a></h3><ul><li>最后效果，就是obj的属性被执行了，obj有新挂了新的FN的内部属性；</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>function FN() {</span></span>
<span class="line"><span>  this.a =1;</span></span>
<span class="line"><span>  console.log(this.b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var obj = {b:10};</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>FN.call(obj); //10</span></span>
<span class="line"><span>console.log(obj); //{a:1}</span></span>
<span class="line"><span>------------------------------------</span></span>
<span class="line"><span>【实现过程】</span></span>
<span class="line"><span>function _call(fn, obj) {</span></span>
<span class="line"><span>  【1】把obj的属性挂载到fn.prototype上面；</span></span>
<span class="line"><span>  for(var key in obj){</span></span>
<span class="line"><span>    fn.prototype[key] = obj[key];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  【2】实例化fn,会把后面的对象属性或方法用来执行</span></span>
<span class="line"><span>  var fn_obj = new fn();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  【3】只是把实例化后的对象的属性,再次挂载到obj上(这个过程这样写不对，因为fn_obj不一定是对象)</span></span>
<span class="line"><span>  for(var _key in fn_obj){</span></span>
<span class="line"><span>    obj[_key] = fn_obj[_key];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_call(FN,obj)   //10</span></span>
<span class="line"><span>console.log(obj); //{a:1}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>总的过程：obj把属性先挂到FN的this上，然后执行FN，最后把FN构造函数的内部的属性挂载到obj上，没有FN的原型对象上的属性，只是FN内的属性。</li></ul><h3 id="apply-call和bind有什么区别" tabindex="-1"><a class="header-anchor" href="#apply-call和bind有什么区别"><span>apply, call和bind有什么区别?</span></a></h3><ul><li>都是把前面的函数内对象属性复制到后面的对象上。</li><li>apply,call是直接执行函数调用，apply和call的区别是apply接受数组作为参数，而call是接受逗号分隔的无限多个参数列表；</li><li>bind是绑定，执行需要再次调用</li></ul><hr><h3 id="this到底是什么" tabindex="-1"><a class="header-anchor" href="#this到底是什么"><span>this到底是什么</span></a></h3><ul><li>构造函数：是指以后的实例对象，不是构造函数本省；当前执行对象。执行上下文；</li></ul><h3 id="new实现原理" tabindex="-1"><a class="header-anchor" href="#new实现原理"><span>new实现原理</span></a></h3><ul><li>改变this指向。</li><li>原理：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1.一个对象被创建</span></span>
<span class="line"><span>2.执行后面的构造函数，把构造函数的内部的属性挂载在当前这个对象上。其实就是改变构造函数的this指向，并执行构造函数。call</span></span>
<span class="line"><span>3.构造函数执行后会返回一个对象或者没有。如果有，那么这个对象就代替我们一开始的对象而return输出。如果没有，就return出我们创建的那个对象。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var new2 = function(Func) {</span></span>
<span class="line"><span>  1.创建个对象，把Func.prototype这个对象，作为原型对象进行挂载到新对象上的__proyo__</span></span>
<span class="line"><span>  var obj = Object.create(Func.prototype);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  2.改变Func内部属性指向到obj，这个时候其实obj就是Func的实例了。并执行函数</span></span>
<span class="line"><span>  var func_obj = Func.call(obj);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  3.判断回来的是不是对象，是就输出</span></span>
<span class="line"><span>  if (typeof func_obj == &#39;object&#39;) {</span></span>
<span class="line"><span>    return func_obj;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  4.返回我们的实例</span></span>
<span class="line"><span>  return obj;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[l];function c(t,d){return a(),s("div",null,p)}const v=n(i,[["render",c],["__file","创建对象.html.vue"]]),b=JSON.parse('{"path":"/frontEndInterview/JavaScript/%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1.html","title":"创建对象","lang":"zh-CN","frontmatter":{"title":"创建对象","icon":"circle-info","description":"原型链类 创建对象有几种方法 查看类型 instanceof原理 就是前面的对象是否继承后面的对象的原型，哪怕是多层。 内部原理就是找对象的proto的地址和后面的对象的prototype或proto的地址是一样的。 call实现原理 最后效果，就是obj的属性被执行了，obj有新挂了新的FN的内部属性； 总的过程：obj把属性先挂到FN的this上，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/JavaScript/%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"创建对象"}],["meta",{"property":"og:description","content":"原型链类 创建对象有几种方法 查看类型 instanceof原理 就是前面的对象是否继承后面的对象的原型，哪怕是多层。 内部原理就是找对象的proto的地址和后面的对象的prototype或proto的地址是一样的。 call实现原理 最后效果，就是obj的属性被执行了，obj有新挂了新的FN的内部属性； 总的过程：obj把属性先挂到FN的this上，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"创建对象有几种方法","slug":"创建对象有几种方法","link":"#创建对象有几种方法","children":[]},{"level":3,"title":"查看类型","slug":"查看类型","link":"#查看类型","children":[]},{"level":3,"title":"instanceof原理","slug":"instanceof原理","link":"#instanceof原理","children":[]},{"level":3,"title":"call实现原理","slug":"call实现原理","link":"#call实现原理","children":[]},{"level":3,"title":"apply, call和bind有什么区别?","slug":"apply-call和bind有什么区别","link":"#apply-call和bind有什么区别","children":[]},{"level":3,"title":"this到底是什么","slug":"this到底是什么","link":"#this到底是什么","children":[]},{"level":3,"title":"new实现原理","slug":"new实现原理","link":"#new实现原理","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":2.46,"words":737},"filePathRelative":"frontEndInterview/JavaScript/创建对象.md","localizedDate":"2024年6月23日","autoDesc":true}');export{v as comp,b as data};
