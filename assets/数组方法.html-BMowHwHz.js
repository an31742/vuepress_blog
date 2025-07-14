import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as i}from"./app-CMxo3qvn.js";const e={},l=i(`<h1 id="常用数组方法" tabindex="-1"><a class="header-anchor" href="#常用数组方法"><span>常用数组方法</span></a></h1><h3 id="push-pop-shift-unshift" tabindex="-1"><a class="header-anchor" href="#push-pop-shift-unshift"><span>push/pop, shift/unshift</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【改变原数组,不创建新数组，有返回值】</span></span>
<span class="line"><span>push():返回操作后数组的长度</span></span>
<span class="line"><span>pop():返回被删除元素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>shift():从第一个删除，返回第一个元素；</span></span>
<span class="line"><span>unshift():从前添加一个元素，返回改变数组后的长度；</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice-splice" tabindex="-1"><a class="header-anchor" href="#slice-splice"><span>slice/splice</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【不改变原来数组，返回一个新的数组】：随意的抽取数组的项目</span></span>
<span class="line"><span>slice(2):从下标为2后全部截取出来新的数组</span></span>
<span class="line"><span>slice(2,4):包左不包右面，截取出来新数组</span></span>
<span class="line"><span>slice(-3)：从后截取三个出来</span></span>
<span class="line"><span>slice():快速复制的为一个新的数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【改变原来的数组，返回一个新的数组】：随意改变原来的数组元素，删除内部元素。</span></span>
<span class="line"><span>splice(2,0,&quot;a&quot;)：原数组增加一个元素，返回[];</span></span>
<span class="line"><span>splice(2,1):原数组删除某个元素，，返回删除的元素的数组</span></span>
<span class="line"><span>splice(2,1,&quot;a&quot;):原数组改变，将删除的元素换为后面的元素；返回删除的元素的数组；</span></span>
<span class="line"><span>arr.splice(0,arr.length):源数组被清空元素，返回新数组</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sort-reverse" tabindex="-1"><a class="header-anchor" href="#sort-reverse"><span>sort/reverse</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【对数组的引用。请注意，数组在原数组上进行排序，不生成副本】</span></span>
<span class="line"><span>arr.sort(function(a, b) {  a:后面的值、b:前面的值</span></span>
<span class="line"><span>  return 小于0; // 倒着排列，倒序  越来越小</span></span>
<span class="line"><span>  return 0;  // 原来的顺序</span></span>
<span class="line"><span>  return 大于0;  // 正序   越来越大</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>升序</span></span>
<span class="line"><span>arr.sort(function(a, b) {</span></span>
<span class="line"><span>  return a-b;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>倒序</span></span>
<span class="line"><span>arr.sort(function(a, b) {</span></span>
<span class="line"><span>  return b-a;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>随机</span></span>
<span class="line"><span>arr.sort(function(a, b) {</span></span>
<span class="line"><span>  return Math.random() &gt; .5 ? -1 : 1;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr.reverse():把原来的数组倒着排列一次，不会生成新的数组；</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map-reduce" tabindex="-1"><a class="header-anchor" href="#map-reduce"><span>map/reduce</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【原数组不动，返回一个新的数组】</span></span>
<span class="line"><span>应用：返回新数组，里面每个元素重新计算；优势就是不用forEach这么麻烦</span></span>
<span class="line"><span></span></span>
<span class="line"><span>arr.map(function(ele){</span></span>
<span class="line"><span>  return ele*ele;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>arr.map(ele=&gt;ele) 复制一个数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>reduce:每个元素执行后面的函数fn，执行函数fn的第一个值是reduce的第二个参数0；</span></span>
<span class="line"><span>var items = [10, 120, 1000];</span></span>
<span class="line"><span>var fn = function add(sumSoFar, item) { </span></span>
<span class="line"><span>    return sumSoFar + item; </span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var total = items.reduce(fn, 0);</span></span>
<span class="line"><span>console.log(total); // 1130</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter"><span>filter</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【原数组不动，返回一个新的数组】</span></span>
<span class="line"><span>应用：返回新数组，过滤一些元素；优势就是不用forEach这么麻烦</span></span>
<span class="line"><span></span></span>
<span class="line"><span>filter()实例：筛选排除掉所有的小值</span></span>
<span class="line"><span>function isBigEnough(element) {</span></span>
<span class="line"><span>   【这里只要一个ture|false】</span></span>
<span class="line"><span>    return element &gt;= 10;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);</span></span>
<span class="line"><span>console.log(filtered);//[ 12, 130, 44 ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>var arr = [1, 2, 3, 4, 5, 0];</span></span>
<span class="line"><span>var arr_1 = arr.filter(function  (ele) {</span></span>
<span class="line"><span>  return ele;【0没有返回，return 0就相当于是 return;】</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(arr_1); // [1, 2, 3, 4, 5]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3><ul><li>判断一个字符串中出现次数最多的字符，统计这个次数</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var str = &#39;asdfssaaasasasasaa&#39;;</span></span>
<span class="line"><span>var json = {};</span></span>
<span class="line"><span>for (var i = 0; i &lt; str.length; i++) {</span></span>
<span class="line"><span>    if(!json[str.charAt(i)]){</span></span>
<span class="line"><span>       json[str.charAt(i)] = 1;</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>       json[str.charAt(i)]++;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>var iMax = 0;</span></span>
<span class="line"><span>var iIndex = &#39;&#39;;</span></span>
<span class="line"><span>for(var i in json){</span></span>
<span class="line"><span>    if(json[i]&gt;iMax){</span></span>
<span class="line"><span>         iMax = json[i];</span></span>
<span class="line"><span>         iIndex = i;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}        </span></span>
<span class="line"><span>console.log(&#39;出现次数最多的是:&#39;+iIndex+&#39;出现&#39;+iMax+&#39;次&#39;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数组去重</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var arr = [2,3,4,4,5,2,3,6],</span></span>
<span class="line"><span>   arr2 = [];</span></span>
<span class="line"><span>for(var i = 0;i&lt; arr.length;i++){</span></span>
<span class="line"><span>    if(arr2.indexOf(arr[i]) &lt; 0){</span></span>
<span class="line"><span>        arr2.push(arr[i]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var arr = [2,3,4,4,5,2,3,6];</span></span>
<span class="line"><span>var arr2 = arr.filter(function(element,index,self){</span></span>
<span class="line"><span>return self.indexOf(element) === index;</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=[l];function r(d,c){return a(),n("div",null,p)}const u=s(e,[["render",r],["__file","数组方法.html.vue"]]),h=JSON.parse('{"path":"/frontEndInterview/JavaScript/%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95.html","title":"常用数组方法","lang":"zh-CN","frontmatter":{"title":"常用数组方法","icon":"circle-info","description":"常用数组方法 push/pop, shift/unshift slice/splice sort/reverse map/reduce filter 应用 判断一个字符串中出现次数最多的字符，统计这个次数 数组去重","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/JavaScript/%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"常用数组方法"}],["meta",{"property":"og:description","content":"常用数组方法 push/pop, shift/unshift slice/splice sort/reverse map/reduce filter 应用 判断一个字符串中出现次数最多的字符，统计这个次数 数组去重"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用数组方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"push/pop, shift/unshift","slug":"push-pop-shift-unshift","link":"#push-pop-shift-unshift","children":[]},{"level":3,"title":"slice/splice","slug":"slice-splice","link":"#slice-splice","children":[]},{"level":3,"title":"sort/reverse","slug":"sort-reverse","link":"#sort-reverse","children":[]},{"level":3,"title":"map/reduce","slug":"map-reduce","link":"#map-reduce","children":[]},{"level":3,"title":"filter","slug":"filter","link":"#filter","children":[]},{"level":3,"title":"应用","slug":"应用","link":"#应用","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":2.57,"words":770},"filePathRelative":"frontEndInterview/JavaScript/数组方法.md","localizedDate":"2024年6月23日","autoDesc":true}');export{u as comp,h as data};
