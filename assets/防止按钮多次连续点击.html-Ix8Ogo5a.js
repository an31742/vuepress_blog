import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as e}from"./app-C_k6COtF.js";const i={},l=e(`<h3 id="_1、使用settimeout" tabindex="-1"><a class="header-anchor" href="#_1、使用settimeout"><span>1、使用setTimeOut</span></a></h3><ul><li>使用两种方法第一种方法是就是在请求之前设置标识，请求之后修改标识。达到连续点击只掉一次请求</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 用于保存请求状态的标志位</span></span>
<span class="line"><span>let isSubmitting = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模拟一个异步请求</span></span>
<span class="line"><span>function sendRequest() {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            resolve(&quot;请求成功&quot;);</span></span>
<span class="line"><span>        }, 2000); // 模拟2秒的请求时间</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理按钮点击事件</span></span>
<span class="line"><span>function handleSubmit() {</span></span>
<span class="line"><span>    // 检查标志位</span></span>
<span class="line"><span>    if (isSubmitting) {</span></span>
<span class="line"><span>        console.log(&quot;请求正在进行中，请稍后...&quot;);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置标志位</span></span>
<span class="line"><span>    isSubmitting = true;</span></span>
<span class="line"><span>    console.log(&quot;开始请求...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 发送请求</span></span>
<span class="line"><span>    sendRequest().then(response =&gt; {</span></span>
<span class="line"><span>        console.log(response);</span></span>
<span class="line"><span>    }).catch(error =&gt; {</span></span>
<span class="line"><span>        console.error(error);</span></span>
<span class="line"><span>    }).finally(() =&gt; {</span></span>
<span class="line"><span>        // 请求完成后重置标志位</span></span>
<span class="line"><span>        isSubmitting = false;</span></span>
<span class="line"><span>        console.log(&quot;请求完成，可以再次提交&quot;);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、按钮防抖" tabindex="-1"><a class="header-anchor" href="#_2、按钮防抖"><span>2、按钮防抖</span></a></h3><ul><li>使用防抖放在直接把请求当做一个方法</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>const debounce = (fn, delay) =&gt; {</span></span>
<span class="line"><span>  // 防抖</span></span>
<span class="line"><span>  let timer</span></span>
<span class="line"><span>  return function (...rest) {</span></span>
<span class="line"><span>    timer &amp;&amp; clearTimeout(timer)</span></span>
<span class="line"><span>    timer = setTimeout(() =&gt; fn.apply(this, rest), delay)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const submit = debounce(() =&gt; {</span></span>
<span class="line"><span>    sendRequest() {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>        setTimeout(() =&gt; {</span></span>
<span class="line"><span>            resolve(&quot;请求成功&quot;);</span></span>
<span class="line"><span>        }, 2000); // 模拟2秒的请求时间</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}, 500)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function t(c,d){return a(),n("div",null,p)}const m=s(i,[["render",t],["__file","防止按钮多次连续点击.html.vue"]]),u=JSON.parse('{"path":"/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/%E9%98%B2%E6%AD%A2%E6%8C%89%E9%92%AE%E5%A4%9A%E6%AC%A1%E8%BF%9E%E7%BB%AD%E7%82%B9%E5%87%BB.html","title":"防止按钮多次连续点击","lang":"zh-CN","frontmatter":{"title":"防止按钮多次连续点击","icon":"circle-info","description":"1、使用setTimeOut 使用两种方法第一种方法是就是在请求之前设置标识，请求之后修改标识。达到连续点击只掉一次请求 2、按钮防抖 使用防抖放在直接把请求当做一个方法","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/%E9%98%B2%E6%AD%A2%E6%8C%89%E9%92%AE%E5%A4%9A%E6%AC%A1%E8%BF%9E%E7%BB%AD%E7%82%B9%E5%87%BB.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"防止按钮多次连续点击"}],["meta",{"property":"og:description","content":"1、使用setTimeOut 使用两种方法第一种方法是就是在请求之前设置标识，请求之后修改标识。达到连续点击只掉一次请求 2、按钮防抖 使用防抖放在直接把请求当做一个方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T08:11:13.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-10-16T08:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"防止按钮多次连续点击\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T08:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"1、使用setTimeOut","slug":"_1、使用settimeout","link":"#_1、使用settimeout","children":[]},{"level":3,"title":"2、按钮防抖","slug":"_2、按钮防抖","link":"#_2、按钮防抖","children":[]}],"git":{"createdTime":1729066273000,"updatedTime":1729066273000,"contributors":[{"name":"maxa.gdsy","email":"maxa.gdsy@sinopec.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"businessProblem/个人解决/防止按钮多次连续点击.md","localizedDate":"2024年10月16日","autoDesc":true}');export{m as comp,u as data};
