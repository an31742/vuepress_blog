import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-CMxo3qvn.js";const i={},l=e(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    var a = [1, 3]</span></span>
<span class="line"><span>    var b = [1, 2, 11, 44, 45, 36]</span></span>
<span class="line"><span>    console.log(&quot;数组a：&quot;, a);</span></span>
<span class="line"><span>    console.log(&quot;数组b：&quot;, b);</span></span>
<span class="line"><span>    var sa = new Set(a);</span></span>
<span class="line"><span>    var sb = new Set(b);</span></span>
<span class="line"><span>    // 交集</span></span>
<span class="line"><span>    let intersect = a.filter(x =&gt; sb.has(x));</span></span>
<span class="line"><span>    // 差集</span></span>
<span class="line"><span>    let minus = b.filter(x =&gt; !sa.has(x));</span></span>
<span class="line"><span>    // 补集</span></span>
<span class="line"><span>    let complement = [...a.filter(x =&gt; !sb.has(x)), ...b.filter(x =&gt; !sa.has(x))];</span></span>
<span class="line"><span>    // 并集</span></span>
<span class="line"><span>    let unionSet = Array.from(new Set([...a, ...b]));</span></span>
<span class="line"><span>    console.log(&quot;a与b的交集：&quot;, intersect);</span></span>
<span class="line"><span>    console.log(&quot;b与a的差集：&quot;, minus);</span></span>
<span class="line"><span>    console.log(&quot;a与b的补集：&quot;, complement);</span></span>
<span class="line"><span>    console.log(&quot;a与b的并集：&quot;, unionSet);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>数组里面的每一项是对象，求两个数组的差集</span></span>
<span class="line"><span>let arr1 = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name:&#39;zhangsan&#39;,</span></span>
<span class="line"><span>    age:18</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name:&#39;lisi&#39;,</span></span>
<span class="line"><span>    age:20</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>let arr2 = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name:&#39;zhangsan&#39;,</span></span>
<span class="line"><span>    age:18</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name:&#39;lisi&#39;,</span></span>
<span class="line"><span>    age:20</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name:&#39;wangwu&#39;,</span></span>
<span class="line"><span>    age:22</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>// 求arr2和arr1的差集</span></span>
<span class="line"><span>let arr3 = arr2.filter(item =&gt; {</span></span>
<span class="line"><span>  let str = JSON.stringify(item)</span></span>
<span class="line"><span>  return arr1.every(item =&gt; JSON.stringify(item) !== str)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431822917-de3281ad-d60d-46eb-886b-cfa78b195001.png#averageHue=%23444342&amp;clientId=ubdb316a6-f728-4&amp;from=paste&amp;height=392&amp;id=ud746ea22&amp;originHeight=783&amp;originWidth=936&amp;originalType=binary&amp;ratio=2&amp;rotation=0&amp;showTitle=false&amp;size=72439&amp;status=done&amp;style=none&amp;taskId=u90d23b55-f6ba-4e1a-b2a0-9109134be70&amp;title=&amp;width=468" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,3),p=[l];function t(r,d){return a(),s("div",null,p)}const m=n(i,[["render",t],["__file","对象的补集，差集等.html.vue"]]),u=JSON.parse('{"path":"/businessProblem/%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8/%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%A1%A5%E9%9B%86%EF%BC%8C%E5%B7%AE%E9%9B%86%E7%AD%89.html","title":"对象的补集，差集等","lang":"zh-CN","frontmatter":{"title":"对象的补集，差集等","icon":"circle-info","description":"image.pngimage.png","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8/%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%A1%A5%E9%9B%86%EF%BC%8C%E5%B7%AE%E9%9B%86%E7%AD%89.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"对象的补集，差集等"}],["meta",{"property":"og:description","content":"image.pngimage.png"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431822917-de3281ad-d60d-46eb-886b-cfa78b195001.png#averageHue=%23444342&clientId=ubdb316a6-f728-4&from=paste&height=392&id=ud746ea22&originHeight=783&originWidth=936&originalType=binary&ratio=2&rotation=0&showTitle=false&size=72439&status=done&style=none&taskId=u90d23b55-f6ba-4e1a-b2a0-9109134be70&title=&width=468"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T10:33:31.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-27T10:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象的补集，差集等\\",\\"image\\":[\\"https://cdn.nlark.com/yuque/0/2024/png/28199172/1713431822917-de3281ad-d60d-46eb-886b-cfa78b195001.png#averageHue=%23444342&clientId=ubdb316a6-f728-4&from=paste&height=392&id=ud746ea22&originHeight=783&originWidth=936&originalType=binary&ratio=2&rotation=0&showTitle=false&size=72439&status=done&style=none&taskId=u90d23b55-f6ba-4e1a-b2a0-9109134be70&title=&width=468\\"],\\"dateModified\\":\\"2024-06-27T10:33:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[],"git":{"createdTime":1719484411000,"updatedTime":1719484411000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":0.76,"words":229},"filePathRelative":"businessProblem/常用方法使用/对象的补集，差集等.md","localizedDate":"2024年6月27日","autoDesc":true}');export{m as comp,u as data};
