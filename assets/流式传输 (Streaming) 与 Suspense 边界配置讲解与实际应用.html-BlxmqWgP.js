import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,c as l,d as p,f as s,e as t,a as n,o as d}from"./app-MrDJDyO8.js";const c={},r=n("<p>本质是：延迟加载渲染的粒度控制机制 这其实就是 React 利用流（stream）将组件树“分片发送”，并用 Suspense 定义每一片的“加载兜底逻辑”。</p><p>2️⃣ 关系拓扑图</p><p>当 数据或组件异步加载 时 → 会触发 Suspense 边界的 fallback 渲染 当 fallback 渲染完成或数据加载完成 → 会触发 子树替换 / 持续流式更新 异步组件加载 ⊣ 主线程阻塞 异步组件加载 → fallback（通过 Suspense 设置） fallback 渲染完成 → 页面首屏交付 组件加载完成 → Replace fallback</p><p>3️⃣ 行动意义锚点</p><p>核心价值是：实现 SSR 的首屏快照优化与并行渲染控制 ● ❗不做：首屏会白屏、长时间等待全部组件加载完 ● ✅做了：可边加载边渲染，优先显示重要区域内容（如 header、hero section）</p><p>量化收益： → 提升 Time to First Byte (TTFB) 和 First Contentful Paint (FCP) → 为用户节省 300~1000ms 的“等待焦虑”时间</p><p>4️⃣ 步骤拆解器</p><p>🎯 使用场景：React + SSR（Next.js or 自建 Server）中，实现首屏“分段渲染”</p><p>✅ 操作路径：React 18 + Suspense + streaming SSR 实现</p><p>① 在服务器端启用流式传输： // server.js (Node 环境) import { renderToPipeableStream } from &#39;react-dom/server&#39;;</p>",10),v=n(`<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;Suspense fallback={&lt;LoadingHeader /&gt;}&gt;</span></span>
<span class="line"><span>  &lt;Header /&gt;</span></span>
<span class="line"><span>&lt;/Suspense&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Suspense fallback={&lt;LoadingMain /&gt;}&gt;</span></span>
<span class="line"><span>  &lt;MainContent /&gt;</span></span>
<span class="line"><span>&lt;/Suspense&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>③ 配合 React.lazy 实现懒加载（如首屏视频/图表）：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>const HeroVideo = React.lazy(() =&gt; import(&#39;./HeroVideo&#39;));</span></span>
<span class="line"><span>&lt;Suspense fallback={&lt;div&gt;Loading Video...&lt;/div&gt;}&gt;</span></span>
<span class="line"><span>  &lt;HeroVideo /&gt;</span></span>
<span class="line"><span>&lt;/Suspense&gt;</span></span>
<span class="line"><span>\`\`</span></span>
<span class="line"><span>❗注意事项（坑点）：</span></span>
<span class="line"><span>● ❗Suspense 仅在 SSR 流式传输（renderToPipeableStream）下生效，客户端的 lazy Suspense 只影响 hydration 延迟</span></span>
<span class="line"><span>● ❗若 fallback 边界过大，用户体验类似“整体卡顿”；应细化 Suspense 的粒度</span></span>
<span class="line"><span>● ❗不要滥用嵌套 Suspense，容易造成瀑布式加载，反而降低效率</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🎯 Next.js 中的真实应用（App Router 模式）</span></span>
<span class="line"><span>// app/layout.tsx</span></span>
<span class="line"><span>export default function RootLayout({ children }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;html&gt;</span></span>
<span class="line"><span>      &lt;body&gt;</span></span>
<span class="line"><span>        &lt;Suspense fallback={&lt;LoadingSidebar /&gt;}&gt;</span></span>
<span class="line"><span>          &lt;Sidebar /&gt;</span></span>
<span class="line"><span>        &lt;/Suspense&gt;</span></span>
<span class="line"><span>        &lt;main&gt;{children}&lt;/main&gt;</span></span>
<span class="line"><span>      &lt;/body&gt;</span></span>
<span class="line"><span>    &lt;/html&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// app/dashboard/page.tsx</span></span>
<span class="line"><span>export default function Page() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;Suspense fallback={&lt;ChartSkeleton /&gt;}&gt;</span></span>
<span class="line"><span>        &lt;DashboardChart /&gt;</span></span>
<span class="line"><span>      &lt;/Suspense&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Next.js 中默认启用了 React 18 的 Streaming SSR 特性，所以你只要在组件中使用 &lt;Suspense&gt; 就自动生效。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>📦 小结回顾</span></span>
<span class="line"><span>模块	含义</span></span>
<span class="line"><span>Streaming	将组件 HTML 通过流分片传输，首屏更快交付</span></span>
<span class="line"><span>Suspense	定义异步组件的 fallback（加载中兜底 UI）</span></span>
<span class="line"><span>renderToPipeableStream	React 18 提供的 SSR 流输出 API</span></span>
<span class="line"><span>应用场景	React SSR、Next.js App Router、首屏渲染优化、数据预加载场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>如果你有一个组件树加载非常复杂的系统（如数据面板、CMS、大型表单），Streaming + Suspense 可以显著提升体验。</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 目录结构：</span></span>
<span class="line"><span>// - app/</span></span>
<span class="line"><span>//    - layout.tsx</span></span>
<span class="line"><span>//    - page.tsx</span></span>
<span class="line"><span>//    - dashboard/</span></span>
<span class="line"><span>//        - page.tsx</span></span>
<span class="line"><span>//        - DashboardChart.tsx</span></span>
<span class="line"><span>//        - ChartSkeleton.tsx</span></span>
<span class="line"><span>// - components/</span></span>
<span class="line"><span>//    - Sidebar.tsx</span></span>
<span class="line"><span>//    - LoadingSidebar.tsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== app/layout.tsx ==========</span></span>
<span class="line"><span>import React, { Suspense } from &#39;react&#39;;</span></span>
<span class="line"><span>import LoadingSidebar from &#39;../components/LoadingSidebar&#39;;</span></span>
<span class="line"><span>import Sidebar from &#39;../components/Sidebar&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function RootLayout({ children }: { children: React.ReactNode }) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>      &lt;body&gt;</span></span>
<span class="line"><span>        &lt;Suspense fallback={&lt;LoadingSidebar /&gt;}&gt;</span></span>
<span class="line"><span>          &lt;Sidebar /&gt;</span></span>
<span class="line"><span>        &lt;/Suspense&gt;</span></span>
<span class="line"><span>        &lt;main&gt;{children}&lt;/main&gt;</span></span>
<span class="line"><span>      &lt;/body&gt;</span></span>
<span class="line"><span>    &lt;/html&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== app/page.tsx ==========</span></span>
<span class="line"><span>export default function Home() {</span></span>
<span class="line"><span>  return &lt;h1&gt;Welcome to the Home Page&lt;/h1&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== app/dashboard/page.tsx ==========</span></span>
<span class="line"><span>import React, { Suspense } from &#39;react&#39;;</span></span>
<span class="line"><span>import dynamic from &#39;next/dynamic&#39;;</span></span>
<span class="line"><span>import ChartSkeleton from &#39;./ChartSkeleton&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const DashboardChart = dynamic(() =&gt; import(&#39;./DashboardChart&#39;), {</span></span>
<span class="line"><span>  ssr: true,</span></span>
<span class="line"><span>  loading: () =&gt; &lt;ChartSkeleton /&gt;,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function DashboardPage() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;Dashboard&lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;Suspense fallback={&lt;ChartSkeleton /&gt;}&gt;</span></span>
<span class="line"><span>        &lt;DashboardChart /&gt;</span></span>
<span class="line"><span>      &lt;/Suspense&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== app/dashboard/DashboardChart.tsx ==========</span></span>
<span class="line"><span>&#39;use client&#39;;</span></span>
<span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function DashboardChart() {</span></span>
<span class="line"><span>  return &lt;div&gt;📊 Chart Loaded (simulated)&lt;/div&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== app/dashboard/ChartSkeleton.tsx ==========</span></span>
<span class="line"><span>export default function ChartSkeleton() {</span></span>
<span class="line"><span>  return &lt;div className=&quot;animate-pulse&quot;&gt;Loading Chart...&lt;/div&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== components/Sidebar.tsx ==========</span></span>
<span class="line"><span>&#39;use client&#39;;</span></span>
<span class="line"><span>import React from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Sidebar() {</span></span>
<span class="line"><span>  return &lt;aside&gt;📚 Sidebar Navigation&lt;/aside&gt;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ========== components/LoadingSidebar.tsx ==========</span></span>
<span class="line"><span>export default function LoadingSidebar() {</span></span>
<span class="line"><span>  return &lt;div className=&quot;animate-pulse&quot;&gt;Loading Sidebar...&lt;/div&gt;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(u,o){const a=i("App");return d(),l("div",null,[r,p("p",null,[s("const stream = renderToPipeableStream("),t(a),s(", { onShellReady() { stream.pipe(res); // 优先输出 shell }, onAllReady() { // 所有都准备好再执行（可选） }, fallback() { // 可选 fallback 处理 }, }); ② 在组件树中配置 Suspense 边界：")]),v])}const h=e(c,[["render",m],["__file","流式传输 (Streaming) 与 Suspense 边界配置讲解与实际应用.html.vue"]]),S=JSON.parse('{"path":"/businessProblem/%E8%BF%9B%E9%98%B6/%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93%20(Streaming)%20%E4%B8%8E%20Suspense%20%E8%BE%B9%E7%95%8C%E9%85%8D%E7%BD%AE%E8%AE%B2%E8%A7%A3%E4%B8%8E%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8.html","title":"流式传输 (Streaming) 与 Suspense 边界配置讲解与实际应用","lang":"zh-CN","frontmatter":{"title":"流式传输 (Streaming) 与 Suspense 边界配置讲解与实际应用","icon":"circle-info","description":"本质是：延迟加载渲染的粒度控制机制 这其实就是 React 利用流（stream）将组件树“分片发送”，并用 Suspense 定义每一片的“加载兜底逻辑”。 2️⃣ 关系拓扑图 当 数据或组件异步加载 时 → 会触发 Suspense 边界的 fallback 渲染 当 fallback 渲染完成或数据加载完成 → 会触发 子树替换 / 持续流式更新...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E8%BF%9B%E9%98%B6/%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93%20(Streaming)%20%E4%B8%8E%20Suspense%20%E8%BE%B9%E7%95%8C%E9%85%8D%E7%BD%AE%E8%AE%B2%E8%A7%A3%E4%B8%8E%E5%AE%9E%E9%99%85%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"流式传输 (Streaming) 与 Suspense 边界配置讲解与实际应用"}],["meta",{"property":"og:description","content":"本质是：延迟加载渲染的粒度控制机制 这其实就是 React 利用流（stream）将组件树“分片发送”，并用 Suspense 定义每一片的“加载兜底逻辑”。 2️⃣ 关系拓扑图 当 数据或组件异步加载 时 → 会触发 Suspense 边界的 fallback 渲染 当 fallback 渲染完成或数据加载完成 → 会触发 子树替换 / 持续流式更新..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-07-29T04:10:10.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2025-07-29T04:10:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"流式传输 (Streaming) 与 Suspense 边界配置讲解与实际应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-29T04:10:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[],"git":{"createdTime":1753707779000,"updatedTime":1753762210000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":2}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"businessProblem/进阶/流式传输 (Streaming) 与 Suspense 边界配置讲解与实际应用.md","localizedDate":"2025年7月28日","autoDesc":true}');export{h as comp,S as data};
