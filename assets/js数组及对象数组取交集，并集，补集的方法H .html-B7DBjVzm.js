import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-CEBb2VWP.js";const i={},l=e(`<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>复制代码var a=[1,3,5,7];</span></span>
<span class="line"><span>var b=[2,6,7,8];</span></span>
<span class="line"><span>// 交集</span></span>
<span class="line"><span>a.filter(item=&gt;b.includes(item));</span></span>
<span class="line"><span>// 并集  new Set去重</span></span>
<span class="line"><span>[...new Set(a.concat(b))]</span></span>
<span class="line"><span>// 补集</span></span>
<span class="line"><span>a.filter(item=&gt;!b.includes(item));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多数组" tabindex="-1"><a class="header-anchor" href="#多数组"><span>多数组</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>复制代码//商详选取规格经常用到</span></span>
<span class="line"><span>intersect(...a) {</span></span>
<span class="line"><span>      // 交集 new Set去重 </span></span>
<span class="line"><span>      if (a.length == 1) return a;</span></span>
<span class="line"><span>      if (a.length == 2) {</span></span>
<span class="line"><span>        return [...new Set(a[0].filter(x =&gt; a[1].includes(x)))];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      for (let i = 0; i &lt; a.length - 2; i++) {</span></span>
<span class="line"><span>        //let set1, set2, set3;</span></span>
<span class="line"><span>        let newSet;</span></span>
<span class="line"><span>        // set1 = new Set(a[i]);</span></span>
<span class="line"><span>        // set2 = new Set(a[i + 1]);</span></span>
<span class="line"><span>        // set3 = new Set(a[i + 2]);</span></span>
<span class="line"><span>        newSet = a[i].filter(x =&gt; a[i + 1].includes(x));</span></span>
<span class="line"><span>        return [...new Set([...newSet].filter(x =&gt; a[i + 2].includes(x)))];</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象数组" tabindex="-1"><a class="header-anchor" href="#对象数组"><span>对象数组</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>复制代码var a=[</span></span>
<span class="line"><span>    {id:&#39;001&#39;,name:&#39;product01&#39;},</span></span>
<span class="line"><span>    {id:&#39;002&#39;,name:&#39;product02&#39;},</span></span>
<span class="line"><span>    {id:&#39;003&#39;,name:&#39;product03&#39;},</span></span>
<span class="line"><span>    {id:&#39;004&#39;,name:&#39;product04&#39;},</span></span>
<span class="line"><span>    {id:&#39;005&#39;,name:&#39;product05&#39;}</span></span>
<span class="line"><span>    ];</span></span>
<span class="line"><span>var b=[</span></span>
<span class="line"><span>    {id:&#39;003&#39;,name:&#39;product03&#39;},</span></span>
<span class="line"><span>    {id:&#39;006&#39;,name:&#39;product06&#39;},</span></span>
<span class="line"><span>    {id:&#39;007&#39;,name:&#39;product07&#39;},</span></span>
<span class="line"><span>    {id:&#39;008&#39;,name:&#39;product08&#39;},</span></span>
<span class="line"><span></span></span>
<span class="line"><span>];</span></span>
<span class="line"><span>var obj={};</span></span>
<span class="line"><span>var arr=a.concat(b);</span></span>
<span class="line"><span>// 交集：定义一个对象，通过其属性值是否出现多次判断交集</span></span>
<span class="line"><span>arr.reduce(function(pre,cur){</span></span>
<span class="line"><span>    obj.hasOwnProperty(cur.id)?pre.push(cur):obj[cur.id]=true;</span></span>
<span class="line"><span>    return pre;</span></span>
<span class="line"><span>},[]);</span></span>
<span class="line"><span>// 并集：每次遍历将还未出现的项进行收集</span></span>
<span class="line"><span>arr.reduce(function(pre,cur){</span></span>
<span class="line"><span>    if(!obj.hasOwnProperty(cur.id)){</span></span>
<span class="line"><span>        pre.push(cur);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    obj[cur.id]=true;</span></span>
<span class="line"><span>    return pre;</span></span>
<span class="line"><span>},[])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//补集:a中每一项都不在b中</span></span>
<span class="line"><span>//A是S的一个子集，由S中所有不属于A的元素组成的集合，叫做子集A在S中的绝对补集。</span></span>
<span class="line"><span>//购物车一组商品，选中和未选中分为两组,拆单用</span></span>
<span class="line"><span>let test=a.reduce(function(pre,cur){</span></span>
<span class="line"><span>    if(b.every(item=&gt;item.id!==cur.id)){</span></span>
<span class="line"><span>        pre.push({</span></span>
<span class="line"><span>             name:cur.name</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return pre;</span></span>
<span class="line"><span>},[])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function d(c,r){return a(),s("div",null,p)}const u=n(i,[["render",d],["__file","js数组及对象数组取交集，并集，补集的方法H .html.vue"]]),m=JSON.parse('{"path":"/businessProblem/%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8/js%E6%95%B0%E7%BB%84%E5%8F%8A%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84%E5%8F%96%E4%BA%A4%E9%9B%86%EF%BC%8C%E5%B9%B6%E9%9B%86%EF%BC%8C%E8%A1%A5%E9%9B%86%E7%9A%84%E6%96%B9%E6%B3%95H%20.html","title":"js数组及对象数组取交集，并集，补集的方法H","lang":"zh-CN","frontmatter":{"title":"js数组及对象数组取交集，并集，补集的方法H","icon":"circle-info","description":"数组 多数组 对象数组","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8/js%E6%95%B0%E7%BB%84%E5%8F%8A%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84%E5%8F%96%E4%BA%A4%E9%9B%86%EF%BC%8C%E5%B9%B6%E9%9B%86%EF%BC%8C%E8%A1%A5%E9%9B%86%E7%9A%84%E6%96%B9%E6%B3%95H%20.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"js数组及对象数组取交集，并集，补集的方法H"}],["meta",{"property":"og:description","content":"数组 多数组 对象数组"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T10:33:31.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-27T10:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"js数组及对象数组取交集，并集，补集的方法H\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T10:33:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"多数组","slug":"多数组","link":"#多数组","children":[]},{"level":3,"title":"对象数组","slug":"对象数组","link":"#对象数组","children":[]}],"git":{"createdTime":1719484411000,"updatedTime":1719484411000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":1.26,"words":379},"filePathRelative":"businessProblem/常用方法使用/js数组及对象数组取交集，并集，补集的方法H .md","localizedDate":"2024年6月27日","autoDesc":true}');export{u as comp,m as data};
