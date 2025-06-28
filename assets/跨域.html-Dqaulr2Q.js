import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as e}from"./app-C_k6COtF.js";const i={},l=e(`<h1 id="通信类" tabindex="-1"><a class="header-anchor" href="#通信类"><span>通信类</span></a></h1><h3 id="什么是同源策略及限制" tabindex="-1"><a class="header-anchor" href="#什么是同源策略及限制"><span>什么是同源策略及限制</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>源：HTTP协议、IP域名、端口。</span></span>
<span class="line"><span>限制:不是一个源的文档，没有权力操作另外一个源的文档。</span></span>
<span class="line"><span>方面：</span></span>
<span class="line"><span>1.无法操作cookie.localStorage和indexDB</span></span>
<span class="line"><span>2.DOM无法获取</span></span>
<span class="line"><span>3.AJAX不能发送</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>img中src可以跨域</li><li>link中的src可以跨域</li><li>script也可以跨域</li></ul><h3 id="前后端是如何通信的" tabindex="-1"><a class="header-anchor" href="#前后端是如何通信的"><span>前后端是如何通信的</span></a></h3><ul><li>ajax:同源下的通信</li><li>websocket:不受同源策略的限制</li><li>CORS：支持同源，也支持跨域。</li></ul><h3 id="如何创建ajax" tabindex="-1"><a class="header-anchor" href="#如何创建ajax"><span>如何创建ajax</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【拿到xhr】</span></span>
<span class="line"><span>var httpobj = null;</span></span>
<span class="line"><span>try {</span></span>
<span class="line"><span>  httpobj = new ActiveXObject(&quot;Msxml2.XMLHTTP&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// </span></span>
<span class="line"><span>catch (e) {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    httpobj = new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // </span></span>
<span class="line"><span>  catch (e1) {</span></span>
<span class="line"><span>    httpobj = new XMLHttpRequest();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>var xhr = httpobj;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开启</span></span>
<span class="line"><span>xhr.open(&quot;post&quot;, &quot;xxx&quot;, true);</span></span>
<span class="line"><span>// 设置请求头</span></span>
<span class="line"><span>xhr.setRequestHeader(&quot;Content-Type&quot;, &quot;application/x-www-form-urlencoded;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拼接数据</span></span>
<span class="line"><span>var content = &#39;&#39;;</span></span>
<span class="line"><span>for (var key in daya) {</span></span>
<span class="line"><span>  content += key + &#39;=&#39; + daya[key] + &#39;&amp;&#39;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>content = content.slice(0, content.length - 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发送</span></span>
<span class="line"><span>xhr.send(content);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 响应：</span></span>
<span class="line"><span>// xhr.onreadystatechange</span></span>
<span class="line"><span>xhr.onload = function() { </span></span>
<span class="line"><span>  // xhr.status == 200||xhr.status == 304||xhr.status == 206</span></span>
<span class="line"><span>  if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {</span></span>
<span class="line"><span>    JSON.parse(xhr.responseText)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>axios请求的设置</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【1】</span></span>
<span class="line"><span>前端：</span></span>
<span class="line"><span>axios默认的请求内容类型：Content-Type: application/json;charset=UTF-8</span></span>
<span class="line"><span></span></span>
<span class="line"><span>后台：</span></span>
<span class="line"><span>app.use(bodyParser.json());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【2】</span></span>
<span class="line"><span>前端：</span></span>
<span class="line"><span>axios.defaults.headers.post[&#39;Content-Type&#39;] = &#39;application/x-www-form-urlencoded</span></span>
<span class="line"><span>let param = new URLSearchParams();</span></span>
<span class="line"><span>param.append(&#39;name&#39;, me.obj.name);</span></span>
<span class="line"><span>param.append(&#39;ps&#39;, me.obj.ps);</span></span>
<span class="line"><span>me.$ajax({data: param})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>后台：</span></span>
<span class="line"><span>app.use(bodyParser.urlencoded({ extended: false }));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域"><span>跨域</span></a></h3><ul><li>JSONP：非正式传输协议。</li><li>发现凡是拥有”src”这个属性的标签都拥有跨域的能力，比如<code>&lt;script&gt;、&lt;img&gt;、&lt;iframe&gt;</code>;</li><li>就是本地写好回调函数，动态生成一个script标签，写入src的路径把函数名传过去，说到底回来的脚本，里面执行的代码就是执行这个函数。相当于是异步加载JS，异步执行我们已经写好的回调函数。</li><li>ajax和jsonp其实本质上是不同的东西。ajax的核心是通过XmlHttpRequest获取非本页内容，而jsonp的核心则是动态添加script标签来调用服务器提供的js脚本。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 得到航班信息查询结果后的回调函数</span></span>
<span class="line"><span>var flightHandler = function(data){</span></span>
<span class="line"><span>    alert(&#39;你查询的航班结果是：票价 &#39; + data.price + &#39; 元，&#39; + &#39;余票 &#39; + data.tickets + &#39; 张。&#39;);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）</span></span>
<span class="line"><span>var url = &quot;http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&amp;callback=flightHandler&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建script标签，设置其属性</span></span>
<span class="line"><span>var script = document.createElement(&#39;script&#39;);</span></span>
<span class="line"><span>script.setAttribute(&#39;src&#39;, url);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 把script标签加入head，此时调用开始</span></span>
<span class="line"><span>document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>hash:就是www.baidu.com/#号后面的值，改变时不会刷新页面的。</li><li>(www.baidu.com/?search=10,改变search后面的值页面就会刷新。)</li><li>实现：A页面里,通过iframe引入B页面。在A页面的JS拿到B的iframe的src,修改值。在B页面的JS内写onhashchange的响应函数，拿到A传的数据</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【A页面】</span></span>
<span class="line"><span>var iframe_b = document.getElementById(&#39;iframe_b&#39;);</span></span>
<span class="line"><span>iframe_b.src = iframe_b.src + &#39;#user=admin&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【B页面】监听</span></span>
<span class="line"><span>window.onhashchange = function () {</span></span>
<span class="line"><span>    var data = window.location.hash;</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>postMessage:H5中东西</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【A页面】</span></span>
<span class="line"><span>window.postMessage(data,&quot;http://B.html&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【B页面】</span></span>
<span class="line"><span>window.addEventListener(&quot;message&quot;,function(ev){</span></span>
<span class="line"><span>  ev.origin // http://A.html</span></span>
<span class="line"><span>  ev.source // A页面的window</span></span>
<span class="line"><span>  ev.data. </span></span>
<span class="line"><span>},false);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>WebSocket: 我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。</li><li>CORS:通信标准。可理解为支持跨域通信的AJAX。浏览器在识别发送一个跨域请求时，会在头部加一个orgin，支持跨域通信。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>res.writeHead(200, {</span></span>
<span class="line"><span>    &quot;Content-Type&quot;: &quot;text/html; charset=UTF-8&quot;,</span></span>
<span class="line"><span>    &quot;Access-Control-Allow-Origin&quot;:&#39;http://localhost&#39;,</span></span>
<span class="line"><span>    &#39;Access-Control-Allow-Methods&#39;: &#39;GET, POST, OPTIONS&#39;,</span></span>
<span class="line"><span>    &#39;Access-Control-Allow-Headers&#39;: &#39;X-Requested-With, Content-Type&#39;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.all(&#39;*&#39;, function(req, res, next) {</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Origin&quot;, &quot;*&quot;);</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Headers&quot;, &quot;X-Requested-With,Content-Type&quot;);</span></span>
<span class="line"><span>    res.header(&quot;Access-Control-Allow-Methods&quot;,&quot;PUT,POST,GET,DELETE,OPTIONS&quot;);</span></span>
<span class="line"><span>    next();</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>前端webpack/browserify设置服务代理</li></ul><h3 id="敲入url发生的事情" tabindex="-1"><a class="header-anchor" href="#敲入url发生的事情"><span>敲入URL发生的事情</span></a></h3><ul><li>1.用户输入URL地址</li><li>2.浏览器解析URL解析出主机名</li><li>3.浏览器将主机名转换成服务器ip地址（浏览器先查找本地DNS缓存列表 没有的话 再向浏览器默认的DNS服务器发送查询请求 同时缓存）</li><li>4.浏览器将端口号从URL中解析出来</li><li>5.浏览器建立一条与目标Web服务器的TCP连接（三次握手）</li><li>6.浏览器向服务器发送一条HTTP请求报文</li><li>7.服务器向浏览器返回一条HTTP响应报文</li><li>8.关闭连接 浏览器解析文档</li><li>9.如果文档中有资源 重复6 7 8 动作 直至资源全部加载完毕</li></ul><h3 id="tcp连接三次握手" tabindex="-1"><a class="header-anchor" href="#tcp连接三次握手"><span>TCP连接三次握手</span></a></h3><ul><li>A:我说的话，你听见了么？</li><li>B：听见了，我说的你听见了么？（回复A的问题，提出自己的问题）；</li><li>A：听见了，我们开始说话吧。</li></ul><h3 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议"><span>http协议</span></a></h3><ul><li>1xx 代表服务其受到请求</li><li>2xx 代表客户端请求成功 200</li><li>3xx 重定向 301 永久重定向浏览器自动处理  302 临时重定向浏览器自动处理 304资源未被修改</li><li>4xx 客户端错误 404资源未找到  403没有权限</li><li>5xx 服务端错误 504网关超时</li></ul><p>iE违反规定最终会被淘汰</p><h3 id="methods方法" tabindex="-1"><a class="header-anchor" href="#methods方法"><span>methods方法</span></a></h3><ul><li>get获取数据</li><li>post创建一个新的数据</li><li>patch和put创建更新数据</li><li>detele删除数据</li></ul><h3 id="restfulapi" tabindex="-1"><a class="header-anchor" href="#restfulapi"><span>RestfulApi</span></a></h3><ul><li>传统api将把每一个url当做一个功能  api/list?pageIndex=2</li><li>RestfulApi把每一个url当做唯一资源 api/list/2</li></ul><p>使用方式：RestfulApi不使用url参数</p><h3 id="http的header" tabindex="-1"><a class="header-anchor" href="#http的header"><span>http的header</span></a></h3><p>request的headers</p><ul><li>accept浏览器可以接收的模式</li><li>accept-Encoding 浏览器可接收的压缩算法 如gzip</li><li>accept-languange浏览器可接收的压缩语言 zh-cn</li><li>Connection：keep-alive 一次tcp连接重复使用</li><li>cookie 每次请求都会带上本地信息</li><li>host 请求的域名是什么</li><li>User-agent 简称UA浏览器的信息</li><li>content-type 发送数据的格式</li></ul><p>reponse的Headers</p><ul><li>content-type返回的数据格式</li><li>contnet-length 返回数据的大小</li><li>content-Encoding 返回数据的压缩算法</li><li>set-cookie 服务端修改cookie通过set-cookie来修改</li><li></li></ul>`,37),p=[l];function t(d,c){return a(),n("div",null,p)}const u=s(i,[["render",t],["__file","跨域.html.vue"]]),h=JSON.parse('{"path":"/frontEndInterview/%E8%B7%A8%E5%9F%9F.html","title":"跨域","lang":"zh-CN","frontmatter":{"title":"跨域","icon":"circle-info","description":"通信类 什么是同源策略及限制 img中src可以跨域 link中的src可以跨域 script也可以跨域 前后端是如何通信的 ajax:同源下的通信 websocket:不受同源策略的限制 CORS：支持同源，也支持跨域。 如何创建ajax axios请求的设置 跨域 JSONP：非正式传输协议。 发现凡是拥有”src”这个属性的标签都拥有跨域的能力，...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/%E8%B7%A8%E5%9F%9F.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"跨域"}],["meta",{"property":"og:description","content":"通信类 什么是同源策略及限制 img中src可以跨域 link中的src可以跨域 script也可以跨域 前后端是如何通信的 ajax:同源下的通信 websocket:不受同源策略的限制 CORS：支持同源，也支持跨域。 如何创建ajax axios请求的设置 跨域 JSONP：非正式传输协议。 发现凡是拥有”src”这个属性的标签都拥有跨域的能力，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"什么是同源策略及限制","slug":"什么是同源策略及限制","link":"#什么是同源策略及限制","children":[]},{"level":3,"title":"前后端是如何通信的","slug":"前后端是如何通信的","link":"#前后端是如何通信的","children":[]},{"level":3,"title":"如何创建ajax","slug":"如何创建ajax","link":"#如何创建ajax","children":[]},{"level":3,"title":"跨域","slug":"跨域","link":"#跨域","children":[]},{"level":3,"title":"敲入URL发生的事情","slug":"敲入url发生的事情","link":"#敲入url发生的事情","children":[]},{"level":3,"title":"TCP连接三次握手","slug":"tcp连接三次握手","link":"#tcp连接三次握手","children":[]},{"level":3,"title":"http协议","slug":"http协议","link":"#http协议","children":[]},{"level":3,"title":"methods方法","slug":"methods方法","link":"#methods方法","children":[]},{"level":3,"title":"RestfulApi","slug":"restfulapi","link":"#restfulapi","children":[]},{"level":3,"title":"http的header","slug":"http的header","link":"#http的header","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":4.82,"words":1447},"filePathRelative":"frontEndInterview/跨域.md","localizedDate":"2024年6月23日","autoDesc":true}');export{u as comp,h as data};
