import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as i}from"./app-1_sQ8TOy.js";const e={},l=i(`<h2 id="本质透视镜" tabindex="-1"><a class="header-anchor" href="#本质透视镜"><span>本质透视镜</span></a></h2><p><strong>本质是</strong>：通过模拟浏览器行为自动化获取目标数据，实现数据采集与结构化存储。</p><h2 id="关系拓扑图" tabindex="-1"><a class="header-anchor" href="#关系拓扑图"><span>关系拓扑图</span></a></h2><p>目标网站更新→触发爬虫执行→数据清洗→持久化存储→触发数据分析流程</p><ul><li>促进因素：定时任务调度</li><li>抑制因素：反爬机制（验证码/IP限制）</li></ul><h2 id="实现步骤拆解器" tabindex="-1"><a class="header-anchor" href="#实现步骤拆解器"><span>实现步骤拆解器</span></a></h2><h3 id="_1-项目初始化" tabindex="-1"><a class="header-anchor" href="#_1-项目初始化"><span>1. 项目初始化</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> web-crawler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> web-crawler</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> axios</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cheerio</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> puppeteer</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-基础爬虫实现-带注释" tabindex="-1"><a class="header-anchor" href="#_2-基础爬虫实现-带注释"><span>2. 基础爬虫实现（带注释）</span></a></h3><p>创建 <code>&lt;mcfile name=&quot;crawler.js&quot; path=&quot;./crawler.js&quot;&gt;&lt;/mcfile&gt;</code>：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 依赖安装：npm install axios cheerio</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const axios = require(&#39;axios&#39;);</span></span>
<span class="line"><span>const cheerio = require(&#39;cheerio&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 爬取示例：获取豆瓣电影 Top 10 名称和评分</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function fetchDoubanTop10() {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    // 1. 请求网页内容</span></span>
<span class="line"><span>    const response = await axios.get(&#39;https://movie.douban.com/top250&#39;);</span></span>
<span class="line"><span>    const html = response.data;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 2. 使用 cheerio 加载 HTML，类似于 jQuery 操作</span></span>
<span class="line"><span>    const $ = cheerio.load(html);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    const movies = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 3. 选择电影条目 DOM 节点，遍历提取信息</span></span>
<span class="line"><span>    $(&#39;.grid_view li&#39;).slice(0, 10).each((index, element) =&gt; {</span></span>
<span class="line"><span>      const title = $(element).find(&#39;.title&#39;).text().trim(); // 电影名</span></span>
<span class="line"><span>      const rating = $(element).find(&#39;.rating_num&#39;).text().trim(); // 评分</span></span>
<span class="line"><span>      movies.push({ rank: index + 1, title, rating });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 4. 输出结果</span></span>
<span class="line"><span>    console.log(&#39;豆瓣电影 Top 10：&#39;);</span></span>
<span class="line"><span>    console.table(movies);</span></span>
<span class="line"><span>  } catch (error) {</span></span>
<span class="line"><span>    console.error(&#39;爬取失败:&#39;, error.message);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fetchDoubanTop10();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-高级功能实现-带注释" tabindex="-1"><a class="header-anchor" href="#_3-高级功能实现-带注释"><span>3. 高级功能实现（带注释）</span></a></h3><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 新增防反爬机制</span></span>
<span class="line"><span>const puppeteer = require(&#39;puppeteer&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 应对动态渲染页面的爬虫</span></span>
<span class="line"><span> * @param {string} url - 目标网页URL</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function advancedCrawler(url) {</span></span>
<span class="line"><span>  let browser;</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    // 启动无头浏览器</span></span>
<span class="line"><span>    browser = await puppeteer.launch({ </span></span>
<span class="line"><span>      headless: true,</span></span>
<span class="line"><span>      args: [&#39;--no-sandbox&#39;] </span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    const page = await browser.newPage();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 设置视窗尺寸随机化</span></span>
<span class="line"><span>    await page.setViewport({</span></span>
<span class="line"><span>      width: 1920 + Math.floor(Math.random() * 100),</span></span>
<span class="line"><span>      height: 1080 + Math.floor(Math.random() * 100)</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 导航到目标页面</span></span>
<span class="line"><span>    await page.goto(url, {</span></span>
<span class="line"><span>      waitUntil: &#39;networkidle2&#39;,</span></span>
<span class="line"><span>      timeout: 30000</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 执行页面内脚本获取数据</span></span>
<span class="line"><span>    const result = await page.evaluate(() =&gt; {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        pageTitle: document.title,</span></span>
<span class="line"><span>        content: Array.from(</span></span>
<span class="line"><span>          document.querySelectorAll(&#39;.content&#39;)</span></span>
<span class="line"><span>        ).map(el =&gt; el.innerText)</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 随机滚动模拟人类操作</span></span>
<span class="line"><span>    await page.evaluate(() =&gt; {</span></span>
<span class="line"><span>      window.scrollTo({</span></span>
<span class="line"><span>        top: Math.random() * document.body.scrollHeight,</span></span>
<span class="line"><span>        behavior: &#39;smooth&#39;</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return result;</span></span>
<span class="line"><span>  } finally {</span></span>
<span class="line"><span>    if (browser) await browser.close();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行动意义锚点" tabindex="-1"><a class="header-anchor" href="#行动意义锚点"><span>行动意义锚点</span></a></h2><p><strong>核心价值是</strong>：</p><ol><li>为数据分析提供原料（节省80%数据收集时间）</li><li>实现竞品监控自动化（每日自动采集对手价格/活动）</li><li>建立企业专属知识库（自动聚合行业资讯）</li></ol><h2 id="避坑指南" tabindex="-1"><a class="header-anchor" href="#避坑指南"><span>避坑指南</span></a></h2><p>❗ 合法合规：遵守robots.txt协议，避免采集个人隐私数据<br> ❗ 频率控制：单域名请求间隔不低于5秒<br> ❗ 数据存储：使用限流队列防止数据库过载</p><h2 id="扩展方案" tabindex="-1"><a class="header-anchor" href="#扩展方案"><span>扩展方案</span></a></h2><ol><li>分布式爬虫：使用Redis实现任务队列</li><li>验证码识别：整合OCR服务</li><li>增量爬取：基于时间戳过滤历史数据</li></ol><h2 id="监控指标" tabindex="-1"><a class="header-anchor" href="#监控指标"><span>监控指标</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 在爬虫函数中添加性能监控</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> metrics</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  requestCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  successRate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  avgResponseTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 在请求完成后更新指标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">requestCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">avgResponseTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">avgResponseTime</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">requestCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> responseTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">  /</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> metrics</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">requestCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),p=[l];function t(d,r){return a(),n("div",null,p)}const v=s(e,[["render",t],["__file","Node.js 网页爬虫开发指南（含完整注释版）.html.vue"]]),k=JSON.parse('{"path":"/businessProblem/%E8%BF%9B%E9%98%B6/Node.js%20%E7%BD%91%E9%A1%B5%E7%88%AC%E8%99%AB%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%EF%BC%88%E5%90%AB%E5%AE%8C%E6%95%B4%E6%B3%A8%E9%87%8A%E7%89%88%EF%BC%89.html","title":"Node.js 网页爬虫开发指南（含完整注释版）","lang":"zh-CN","frontmatter":{"title":"Node.js 网页爬虫开发指南（含完整注释版）","icon":"circle-info","description":"本质透视镜 本质是：通过模拟浏览器行为自动化获取目标数据，实现数据采集与结构化存储。 关系拓扑图 目标网站更新→触发爬虫执行→数据清洗→持久化存储→触发数据分析流程 促进因素：定时任务调度 抑制因素：反爬机制（验证码/IP限制） 实现步骤拆解器 1. 项目初始化 2. 基础爬虫实现（带注释） 创建 <mcfile name=\\"crawler.js\\" p...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E8%BF%9B%E9%98%B6/Node.js%20%E7%BD%91%E9%A1%B5%E7%88%AC%E8%99%AB%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%EF%BC%88%E5%90%AB%E5%AE%8C%E6%95%B4%E6%B3%A8%E9%87%8A%E7%89%88%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"Node.js 网页爬虫开发指南（含完整注释版）"}],["meta",{"property":"og:description","content":"本质透视镜 本质是：通过模拟浏览器行为自动化获取目标数据，实现数据采集与结构化存储。 关系拓扑图 目标网站更新→触发爬虫执行→数据清洗→持久化存储→触发数据分析流程 促进因素：定时任务调度 抑制因素：反爬机制（验证码/IP限制） 实现步骤拆解器 1. 项目初始化 2. 基础爬虫实现（带注释） 创建 <mcfile name=\\"crawler.js\\" p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-28T13:02:59.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2025-07-28T13:02:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node.js 网页爬虫开发指南（含完整注释版）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-28T13:02:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":2,"title":"本质透视镜","slug":"本质透视镜","link":"#本质透视镜","children":[]},{"level":2,"title":"关系拓扑图","slug":"关系拓扑图","link":"#关系拓扑图","children":[]},{"level":2,"title":"实现步骤拆解器","slug":"实现步骤拆解器","link":"#实现步骤拆解器","children":[{"level":3,"title":"1. 项目初始化","slug":"_1-项目初始化","link":"#_1-项目初始化","children":[]},{"level":3,"title":"2. 基础爬虫实现（带注释）","slug":"_2-基础爬虫实现-带注释","link":"#_2-基础爬虫实现-带注释","children":[]},{"level":3,"title":"3. 高级功能实现（带注释）","slug":"_3-高级功能实现-带注释","link":"#_3-高级功能实现-带注释","children":[]}]},{"level":2,"title":"行动意义锚点","slug":"行动意义锚点","link":"#行动意义锚点","children":[]},{"level":2,"title":"避坑指南","slug":"避坑指南","link":"#避坑指南","children":[]},{"level":2,"title":"扩展方案","slug":"扩展方案","link":"#扩展方案","children":[]},{"level":2,"title":"监控指标","slug":"监控指标","link":"#监控指标","children":[]}],"git":{"createdTime":1753707779000,"updatedTime":1753707779000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"businessProblem/进阶/Node.js 网页爬虫开发指南（含完整注释版）.md","localizedDate":"2025年7月28日","autoDesc":true}');export{v as comp,k as data};
