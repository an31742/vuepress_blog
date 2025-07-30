import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-HeVUa9bp.js";const i={},l=e(`<h3 id="_10-设计模式" tabindex="-1"><a class="header-anchor" href="#_10-设计模式"><span>10.设计模式</span></a></h3><ul><li>1.单例：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var obj = {name: &#39;michaelqin&#39;, age: 30};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>2.工厂模式：就是同样形式参数返回不同的实例</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>function Person() { this.name = &#39;Person1&#39;; }</span></span>
<span class="line"><span>function Animal() { this.name = &#39;Animal1&#39;; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Factory() {}</span></span>
<span class="line"><span>Factory.prototype.getInstance = function(className) {</span></span>
<span class="line"><span>    return eval(&#39;new &#39; + className + &#39;()&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var factory = new Factory();</span></span>
<span class="line"><span>var obj1 = factory.getInstance(&#39;Person&#39;);</span></span>
<span class="line"><span>var obj2 = factory.getInstance(&#39;Animal&#39;);</span></span>
<span class="line"><span>console.log(obj1.name); // Person1</span></span>
<span class="line"><span>console.log(obj2.name); // Animal1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>3.代理：就是新建个类调用老类的接口,包一下</li><li>4.发布订阅者模式：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 发布者</span></span>
<span class="line"><span>function Publisher() {</span></span>
<span class="line"><span>        this.listeners = [];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>Publisher.prototype = {</span></span>
<span class="line"><span>    &#39;addListener&#39;: function(listener) {</span></span>
<span class="line"><span>        this.listeners.push(listener);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;removeListener&#39;: function(listener) {</span></span>
<span class="line"><span>        delete this.listeners[listener];</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &#39;notify&#39;: function(obj) {</span></span>
<span class="line"><span>        for(var i = 0; i &lt; this.listeners.length; i++) {</span></span>
<span class="line"><span>            var listener = this.listeners[i];</span></span>
<span class="line"><span>            if (typeof listener !== &#39;undefined&#39;) {</span></span>
<span class="line"><span>                listener.process(obj);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 订阅者</span></span>
<span class="line"><span>function Subscriber() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Subscriber.prototype = {</span></span>
<span class="line"><span>    &#39;process&#39;: function(obj) {</span></span>
<span class="line"><span>        console.log(obj);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};　</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>var publisher = new Publisher();</span></span>
<span class="line"><span>publisher.addListener(new Subscriber());</span></span>
<span class="line"><span>publisher.addListener(new Subscriber());</span></span>
<span class="line"><span>publisher.notify({name: &#39;michaelqin&#39;, ageo: 30}); // 发布一个对象到所有订阅者</span></span>
<span class="line"><span>publisher.notify(&#39;2 subscribers will both perform process&#39;); // 发布一个字符串到所有订阅者</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[l];function t(r,c){return a(),s("div",null,p)}const v=n(i,[["render",t],["__file","设计模式.html.vue"]]),m=JSON.parse('{"path":"/frontEndInterview/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html","title":"设计模式","lang":"zh-CN","frontmatter":{"title":"设计模式","icon":"circle-info","description":"10.设计模式 1.单例： 2.工厂模式：就是同样形式参数返回不同的实例 3.代理：就是新建个类调用老类的接口,包一下 4.发布订阅者模式：","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"设计模式"}],["meta",{"property":"og:description","content":"10.设计模式 1.单例： 2.工厂模式：就是同样形式参数返回不同的实例 3.代理：就是新建个类调用老类的接口,包一下 4.发布订阅者模式："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"10.设计模式","slug":"_10-设计模式","link":"#_10-设计模式","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":0.69,"words":206},"filePathRelative":"frontEndInterview/设计模式.md","localizedDate":"2024年6月23日","autoDesc":true}');export{v as comp,m as data};
