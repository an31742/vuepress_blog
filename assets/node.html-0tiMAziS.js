import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as e}from"./app-B76yhWyw.js";const i={},l=e(`<h1 id="node" tabindex="-1"><a class="header-anchor" href="#node"><span>node</span></a></h1><h3 id="_1-特性" tabindex="-1"><a class="header-anchor" href="#_1-特性"><span>1.特性</span></a></h3><h5 id="_1-1-同步异步" tabindex="-1"><a class="header-anchor" href="#_1-1-同步异步"><span>1.1 同步异步</span></a></h5><ul><li>单线程、非阻塞IO、事假环机制</li><li>V8是node虚拟机，js运行环境；</li><li>node是单线程的，异步是通过一次次的循环事件队列来实现的．同步则是说阻塞式的IO,这在高并发环境会是一个很大的性能问题，所以同步一般只在基础框架的启动时使用，用来加载配置文件，初始化程序什么的．</li><li>node是没有web容器。根据访问的路径做出相应地址的文件读取，适合做路由设计</li></ul><h5 id="_1-2-异步流程控制" tabindex="-1"><a class="header-anchor" href="#_1-2-异步流程控制"><span>1.2 异步流程控制</span></a></h5><ul><li>多层嵌套回调</li><li>为每一个回调写单独的函数，函数里边再回调</li><li>用第三方框架比方async, q, promise等</li></ul><h5 id="_1-3-express" tabindex="-1"><a class="header-anchor" href="#_1-3-express"><span>1.3 express</span></a></h5><ul><li>路由设计</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 配置前缀</span></span>
<span class="line"><span>me.api_pro = &#39;/api/plan&#39;;</span></span>
<span class="line"><span>me.router = require(&#39;express&#39;).Router(); 路由组件</span></span>
<span class="line"><span>me.router.post(&#39;/list.do&#39;, function(req, res) {   </span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>// 生成</span></span>
<span class="line"><span>me.app.use(me.api_pro, me.router);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>路由参数获取</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/users/:name   使用req.params.name获取</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>express response有哪些常用方法</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>res.download() 弹出文件下载</span></span>
<span class="line"><span>res.end() 结束response</span></span>
<span class="line"><span></span></span>
<span class="line"><span>res.json() 返回json</span></span>
<span class="line"><span>res.jsonp() 返回jsonp</span></span>
<span class="line"><span></span></span>
<span class="line"><span>res.redirect() 重定向请求</span></span>
<span class="line"><span>res.render() 渲染模板</span></span>
<span class="line"><span></span></span>
<span class="line"><span>res.send() 返回多种形式数据</span></span>
<span class="line"><span>res.sendFile 返回文件</span></span>
<span class="line"><span>res.sendStatus() 返回状态</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-3-mongodb-mongoose" tabindex="-1"><a class="header-anchor" href="#_1-3-mongodb-mongoose"><span>1.3 mongoDB &amp;&amp; mongoose</span></a></h5><ul><li>mongoDB 非结构性数据库。mongoose对象化操作数据库</li><li>mongoose：文档模式--&gt;model模型---&gt;实例；model模型方法 和 实例 方法</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>【文档模型】</span></span>
<span class="line"><span>var animalSchema = new mongoose.Schema({</span></span>
<span class="line"><span>    &quot;name&quot; : String,</span></span>
<span class="line"><span>    &quot;type&quot; : String</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义【实例（文档、对象）】方法：</span></span>
<span class="line"><span>animalSchema.methods.zhaotonglei = function(callback){</span></span>
<span class="line"><span>    this.model(&#39;Animal&#39;).find({&quot;type&quot;:this.type},callback);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【model模型】</span></span>
<span class="line"><span>var Animal = mongoose.model(&#39;Animal&#39;, animalSchema);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【model模型】的方法</span></span>
<span class="line"><span>Animal</span></span>
<span class="line"><span> .findOne({&quot;name&quot;:&quot;小白&quot;},function(err,dog){</span></span>
<span class="line"><span>    可以使用新定义的 【实例】方法</span></span>
<span class="line"><span>    dog.zhaotonglei(function(err,result){</span></span>
<span class="line"><span>        console.log(result);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span> });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-全局对象" tabindex="-1"><a class="header-anchor" href="#_2-全局对象"><span>2.全局对象</span></a></h3><ul><li>process, console, Buffer和exports</li></ul><h3 id="_3-核心模块" tabindex="-1"><a class="header-anchor" href="#_3-核心模块"><span>3.核心模块</span></a></h3><ul><li>EventEmitter, Stream, FS, Net和全局对象</li></ul><h3 id="_3-eventemitter" tabindex="-1"><a class="header-anchor" href="#_3-eventemitter"><span>3.EventEmitter</span></a></h3><ul><li>如何实现EventEmitter？</li><li>主要分三步：定义一个子类，调用构造函数，继承EventEmitter</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var util = require(&#39;util&#39;);</span></span>
<span class="line"><span>var EventEmitter = require(&#39;events&#39;).EventEmitter;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 构造函数</span></span>
<span class="line"><span>function MyEmitter() {</span></span>
<span class="line"><span>  EventEmitter.call(this);</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span>// 继承</span></span>
<span class="line"><span>util.inherits(MyEmitter, EventEmitter); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>var em = new MyEmitter();</span></span>
<span class="line"><span>em.on(&#39;hello&#39;, function(data) {</span></span>
<span class="line"><span>  console.log(&#39;收到事件hello的数据:&#39;, data);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(function(argument) {</span></span>
<span class="line"><span>  // 接收事件，并打印到控制台</span></span>
<span class="line"><span>  em.emit(&#39;hello&#39;, &#39;EventEmitter传递消息真方便!&#39;);</span></span>
<span class="line"><span>},200);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>应用：</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1) 模块间传递消息 </span></span>
<span class="line"><span>2) 回调函数内外传递消息 </span></span>
<span class="line"><span>3) 处理流数据，因为流是在EventEmitter基础上实现的.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>EventEmitter中的newListenser事件有什么用处?</li><li>newListener可以用来做事件机制的反射，特殊应用，事件管理等．当任何on事件添加到EventEmitter时，就会触发newListener事件，基于这种模式，我们可以做很多自定义处理；</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var emitter3 = new MyEmitter();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新注册的事件，都会被这个监听到</span></span>
<span class="line"><span>emitter3.on(&#39;newListener&#39;, function(name, listener) {</span></span>
<span class="line"><span>    console.log(&quot;新事件的名字:&quot;, name);</span></span>
<span class="line"><span>    console.log(&quot;新事件的代码:&quot;, listener);</span></span>
<span class="line"><span>    setTimeout(function(){ console.log(&quot;我是自定义延时处理机制&quot;); }, 1000);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emitter3.on(&#39;hello&#39;, function(){</span></span>
<span class="line"><span>    console.log(&#39;hello　node&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-node的错误捕获" tabindex="-1"><a class="header-anchor" href="#_4-node的错误捕获"><span>4.node的错误捕获</span></a></h3><ul><li>domain来统一处理错误事件</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var domain = require(&#39;domain&#39;);</span></span>
<span class="line"><span>var myDomain = domain.create();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接收事件并打印</span></span>
<span class="line"><span>myDomain.on(&#39;error&#39;, function(err) {</span></span>
<span class="line"><span>  console.log(&#39;domain接收到的错误事件:&#39;, err);</span></span>
<span class="line"><span>}); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开始运行下面的函数</span></span>
<span class="line"><span>myDomain.run(function() {</span></span>
<span class="line"><span>  var emitter1 = new MyEmitter();</span></span>
<span class="line"><span>  emitter1.emit(&#39;error&#39;, &#39;错误事件来自emitter1&#39;);</span></span>
<span class="line"><span>  var emitter2 = new MyEmitter();</span></span>
<span class="line"><span>  emitter2.emit(&#39;error&#39;, &#39;错误事件来自emitter2&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-stream" tabindex="-1"><a class="header-anchor" href="#_5-stream"><span>5.Stream</span></a></h3><h6 id="_1-什么是stream" tabindex="-1"><a class="header-anchor" href="#_1-什么是stream"><span>1.什么是Stream?</span></a></h6><ul><li>stream是基于事件EventEmitter的数据管理模式．由各种不同的抽象接口组成，主要包括可写，可读，可读写，可转换等几种类型．</li></ul><h6 id="_2-stream有什么好处" tabindex="-1"><a class="header-anchor" href="#_2-stream有什么好处"><span>2.Stream有什么好处?</span></a></h6><ul><li>非阻塞式数据处理提升效率，片断处理，节省内存，管道处理方便可扩展等.</li></ul><h6 id="_3-demo-读取流" tabindex="-1"><a class="header-anchor" href="#_3-demo-读取流"><span>3.demo:读取流</span></a></h6><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>const fs = require(&#39;fs&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//流的方式读取文件</span></span>
<span class="line"><span>var readStream = fs.createReadStream(&#39;readme.md&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var str = &#39;&#39;; /*保存数据*/</span></span>
<span class="line"><span>var count = 0;  /*次数*/</span></span>
<span class="line"><span>readStream.on(&#39;data&#39;, function(chunk) {   </span></span>
<span class="line"><span>  str += chunk;   </span></span>
<span class="line"><span>  count++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//读取完成</span></span>
<span class="line"><span>readStream.on(&#39;end&#39;, function(chunk) {   </span></span>
<span class="line"><span>  console.log(count);   </span></span>
<span class="line"><span>  console.log(str);</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//读取失败</span></span>
<span class="line"><span>readStream.on(&#39;error&#39;, function(err) {   </span></span>
<span class="line"><span>  console.log(err);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-demo-流写入" tabindex="-1"><a class="header-anchor" href="#_4-demo-流写入"><span>4.demo:流写入</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span>var data = &#39;我是从数据库获取的数据，我要保存起来11\\n&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建一个可以写入的流，写入到文件 output.txt 中</span></span>
<span class="line"><span>var writerStream = fs.createWriteStream(&#39;output.txt&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for(var i=0;i&lt;100;i++){</span></span>
<span class="line"><span>    writerStream.write(data,&#39;utf8&#39;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//标记写入完成</span></span>
<span class="line"><span>writerStream.end();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接受完成</span></span>
<span class="line"><span>writerStream.on(&#39;finish&#39;,function(){</span></span>
<span class="line"><span>    console.log(&#39;写入完成&#39;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//失败</span></span>
<span class="line"><span>writerStream.on(&#39;error&#39;,function(){</span></span>
<span class="line"><span>    console.log(&#39;写入失败&#39;);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-demo-可读流-可写流" tabindex="-1"><a class="header-anchor" href="#_5-demo-可读流-可写流"><span>5.demo:可读流----&gt;可写流</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span>// 创建一个可读流</span></span>
<span class="line"><span>var readerStream = fs.createReadStream(&#39;readme.md&#39;);</span></span>
<span class="line"><span>// 创建一个可写流</span></span>
<span class="line"><span>var writerStream = fs.createWriteStream(&#39;output.txt&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 管道读写操作</span></span>
<span class="line"><span>// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中</span></span>
<span class="line"><span>readerStream.pipe(writerStream);</span></span>
<span class="line"><span>console.log(&quot;程序执行完毕&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-文件系统" tabindex="-1"><a class="header-anchor" href="#_6-文件系统"><span>6.文件系统</span></a></h3><h5 id="_6-1-读取文件的方式" tabindex="-1"><a class="header-anchor" href="#_6-1-读取文件的方式"><span>6.1.读取文件的方式</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1) POSIX式低层读写 </span></span>
<span class="line"><span>2) 流式读写 </span></span>
<span class="line"><span>3) 同步文件读写 </span></span>
<span class="line"><span>4) 异步文件读写</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-2-如何读取json文件" tabindex="-1"><a class="header-anchor" href="#_6-2-如何读取json文件"><span>6.2.如何读取JSON文件</span></a></h5><ul><li>require(&#39;data.json&#39;)：直接得到js对象。如果多个模块都加载了同一个json文件，那么其中一个改变了js对象，其它跟着改变，这是由node模块的缓存机制造成的，只有一个js模块对象</li><li>第二种是读入文件入内容，然后用JSON.parse(content)转换成js对象。而且各模块互不影响，因为他们都是独立的，是多个js对象.</li></ul><h3 id="_7-网络系统" tabindex="-1"><a class="header-anchor" href="#_7-网络系统"><span>7.网络系统</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var http = require(&#39;http&#39;); // 加载http模块</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http.createServer(function(req, res) {</span></span>
<span class="line"><span>    // 200代表状态成功, 文档类型是给浏览器识别用的</span></span>
<span class="line"><span>    res.writeHead(200, {&#39;Content-Type&#39;: &#39;text/html&#39;}); </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 返回给客户端的html数据</span></span>
<span class="line"><span>    res.write(&#39;hw&#39;); </span></span>
<span class="line"><span>    res.end(); </span></span>
<span class="line"><span>}).listen(3000);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-child-process" tabindex="-1"><a class="header-anchor" href="#_8-child-process"><span>8.child-process</span></a></h3><h5 id="_1-什么" tabindex="-1"><a class="header-anchor" href="#_1-什么"><span>1.什么？</span></a></h5><ul><li>ode是异步非阻塞的，这对高并发非常有效．可是我们还有其它一些常用需求，比如和操作系统shell命令交互，调用可执行文件，创建子进程进行阻塞式访问或高CPU计算等，child-process就是为满足这些需求而生的．child-process顾名思义，就是把node阻塞的工作交给子进程去做．</li></ul><h5 id="_2-exec-execfile-spawn和fork都是做什么用的" tabindex="-1"><a class="header-anchor" href="#_2-exec-execfile-spawn和fork都是做什么用的"><span>2. exec,execFile,spawn和fork都是做什么用的?</span></a></h5><ul><li>exec可以用操作系统原生的方式执行各种命令</li><li>execFile是执行一个文件</li><li>spawn是流式和操作系统进行交互</li><li>fork是两个node程序(javascript)之间时行交互.</li></ul><h5 id="_3-实现简单的命令行交互程序" tabindex="-1"><a class="header-anchor" href="#_3-实现简单的命令行交互程序"><span>3. 实现简单的命令行交互程序</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>var cp = require(&#39;child_process&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行命令</span></span>
<span class="line"><span>var child = cp.spawn(&#39;ls&#39;); </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 把执行的命令的后的返回拿到这里</span></span>
<span class="line"><span>child.stdout.on(&#39;data&#39;, (data) =&gt; {</span></span>
<span class="line"><span>  console.log(data.toString());</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这句的意思是将子进程的输出(我们要执行这个命令)作为当前程序的输入流，然后重定向到当前程序的标准输出，即控制台</span></span>
<span class="line"><span>child.stdout.pipe(process.stdout);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-两个node程序之间怎样交互" tabindex="-1"><a class="header-anchor" href="#_4-两个node程序之间怎样交互"><span>4.两个node程序之间怎样交互?</span></a></h5><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1) fork-parent.js</span></span>
<span class="line"><span>var cp = require(&#39;child_process&#39;);</span></span>
<span class="line"><span>var child = cp.fork(&#39;./fork-child.js&#39;);</span></span>
<span class="line"><span>// 接收儿子来的信息注册的事件</span></span>
<span class="line"><span>child.on(&#39;message&#39;, function(msg){</span></span>
<span class="line"><span>    console.log(&#39;老爸从儿子接受到数据:&#39;, msg);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 给儿子发送信息</span></span>
<span class="line"><span>child.send(&#39;我是你爸爸，送关怀来了!&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2) fork-child.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 外面注册的事件</span></span>
<span class="line"><span>process.on(&#39;message&#39;, function(msg){</span></span>
<span class="line"><span>    console.log(&quot;儿子从老爸接收到的数据:&quot;, msg);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 向外发送</span></span>
<span class="line"><span>    process.send(&quot;我不要关怀，我要银民币！&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),p=[l];function d(r,c){return a(),n("div",null,p)}const o=s(i,[["render",d],["__file","node.html.vue"]]),m=JSON.parse('{"path":"/frontEndInterview/node.html","title":"node","lang":"zh-CN","frontmatter":{"title":"node","icon":"circle-info","description":"node 1.特性 1.1 同步异步 单线程、非阻塞IO、事假环机制 V8是node虚拟机，js运行环境； node是单线程的，异步是通过一次次的循环事件队列来实现的．同步则是说阻塞式的IO,这在高并发环境会是一个很大的性能问题，所以同步一般只在基础框架的启动时使用，用来加载配置文件，初始化程序什么的． node是没有web容器。根据访问的路径做出相应...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/frontEndInterview/node.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"node"}],["meta",{"property":"og:description","content":"node 1.特性 1.1 同步异步 单线程、非阻塞IO、事假环机制 V8是node虚拟机，js运行环境； node是单线程的，异步是通过一次次的循环事件队列来实现的．同步则是说阻塞式的IO,这在高并发环境会是一个很大的性能问题，所以同步一般只在基础框架的启动时使用，用来加载配置文件，初始化程序什么的． node是没有web容器。根据访问的路径做出相应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T10:03:41.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-06-23T10:03:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"node\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T10:03:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"1.特性","slug":"_1-特性","link":"#_1-特性","children":[]},{"level":3,"title":"2.全局对象","slug":"_2-全局对象","link":"#_2-全局对象","children":[]},{"level":3,"title":"3.核心模块","slug":"_3-核心模块","link":"#_3-核心模块","children":[]},{"level":3,"title":"3.EventEmitter","slug":"_3-eventemitter","link":"#_3-eventemitter","children":[]},{"level":3,"title":"4.node的错误捕获","slug":"_4-node的错误捕获","link":"#_4-node的错误捕获","children":[]},{"level":3,"title":"5.Stream","slug":"_5-stream","link":"#_5-stream","children":[]},{"level":3,"title":"6.文件系统","slug":"_6-文件系统","link":"#_6-文件系统","children":[]},{"level":3,"title":"7.网络系统","slug":"_7-网络系统","link":"#_7-网络系统","children":[]},{"level":3,"title":"8.child-process","slug":"_8-child-process","link":"#_8-child-process","children":[]}],"git":{"createdTime":1719137021000,"updatedTime":1719137021000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"frontEndInterview/node.md","localizedDate":"2024年6月23日","autoDesc":true}');export{o as comp,m as data};
