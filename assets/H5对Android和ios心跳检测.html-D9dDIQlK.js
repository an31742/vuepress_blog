import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-MrDJDyO8.js";const i={},l=e(`<h1 id="💓-心跳检测模块技术文档-含完整代码" tabindex="-1"><a class="header-anchor" href="#💓-心跳检测模块技术文档-含完整代码"><span><strong>💓 心跳检测模块技术文档（含完整代码）</strong></span></a></h1><h2 id="_1-本质透视镜" tabindex="-1"><a class="header-anchor" href="#_1-本质透视镜"><span><strong>1. 本质透视镜</strong></span></a></h2><p><strong>本质是「保持用户登录有效，周期性验证 token 是否仍然生效」</strong>****</p><p>这其实就是：定时调用原生 App 的 token 检查接口，防止用户未操作时被动下线。</p><hr><h2 id="_2-功能简介" tabindex="-1"><a class="header-anchor" href="#_2-功能简介"><span><strong>2. 功能简介</strong></span></a></h2><p>该模块用于 <strong>Web H5 + iOS/Android 原生 App 混合环境</strong> 中的心跳检测逻辑，通过定时检查 token 有效性，保证用户登录会话不被意外终止。</p><p>整体功能包括：</p><ul><li>定时心跳（默认 30 分钟）</li><li>iOS 与 Android 分平台调用原生校验方法</li><li>监听用户行为 → 活动就重置心跳</li><li>token 缺失 → 不启动心跳</li><li>页面关闭自动清理定时器和监听器</li></ul><hr><h2 id="_3-工作机制-关系拓扑图" tabindex="-1"><a class="header-anchor" href="#_3-工作机制-关系拓扑图"><span><strong>3. 工作机制（关系拓扑图）</strong></span></a></h2><p><strong>当用户保持登录 → 系统会根据定时器 → 触发心跳 → 原生返回成功 → 正常继续；否则 → 执行登出流程</strong>****</p><p>简化链路：</p><ul><li>用户操作 → 重置下次心跳时间</li><li>定时到期 → 调用对应平台 token 校验</li><li>校验失败 → 自动登出</li><li>校验成功 → 循环下一次定时</li></ul><p>关键阈值：</p><ul><li><strong>30 分钟无操作</strong> → 执行一次心跳检测</li></ul><hr><h2 id="_4-行动价值-行动意义锚点" tabindex="-1"><a class="header-anchor" href="#_4-行动价值-行动意义锚点"><span><strong>4. 行动价值（行动意义锚点）</strong></span></a></h2><p><strong>核心价值是「保证用户在 App 中的登录状态持续有效，避免意外掉线」</strong>****</p><ul><li>避免：用户长时间停留在 App，突然被踢出</li><li>获得：更稳定的会话体验</li><li>价值对象：前端、原生团队、最终用户</li></ul><hr><h2 id="_5-调用流程-步骤拆解器" tabindex="-1"><a class="header-anchor" href="#_5-调用流程-步骤拆解器"><span><strong>5. 调用流程（步骤拆解器）</strong></span></a></h2><h3 id="▶️-操作路径" tabindex="-1"><a class="header-anchor" href="#▶️-操作路径"><span><strong>▶️ 操作路径</strong></span></a></h3><h4 id="_1-初始化心跳" tabindex="-1"><a class="header-anchor" href="#_1-初始化心跳"><span><strong>① 初始化心跳</strong></span></a></h4><ul><li>从 localStorage 中查找 allUsersObj 获取 token</li><li>❗没有 token → 心跳不会启动</li></ul><h4 id="_2-根据平台调用" tabindex="-1"><a class="header-anchor" href="#_2-根据平台调用"><span><strong>② 根据平台调用</strong></span></a></h4><ul><li>iOS：通过 WebViewJavascriptBridge 调用 checkToken</li><li>Android：调用 window.retailer.checkToken()</li><li>PC 或浏览器：跳过原生心跳</li></ul><h4 id="_3-设置定时器" tabindex="-1"><a class="header-anchor" href="#_3-设置定时器"><span><strong>③ 设置定时器</strong></span></a></h4><ul><li>每次心跳成功 → 才启动下一轮</li></ul><h4 id="_4-监听用户行为" tabindex="-1"><a class="header-anchor" href="#_4-监听用户行为"><span><strong>④ 监听用户行为</strong></span></a></h4><p>以下动作会重置心跳倒计时：</p><p>click | touchstart | scroll | keydown | mousemove</p><h4 id="_5-页面关闭清理" tabindex="-1"><a class="header-anchor" href="#_5-页面关闭清理"><span><strong>⑤ 页面关闭清理</strong></span></a></h4><ul><li>清理定时器</li><li>移除事件监听</li></ul><hr><h1 id="📌-6" tabindex="-1"><a class="header-anchor" href="#📌-6"><span><strong>📌 6.</strong></span></a></h1><h1 id="完整代码-已格式化-可直接使用" tabindex="-1"><a class="header-anchor" href="#完整代码-已格式化-可直接使用"><span><strong>完整代码（已格式化，可直接使用）</strong></span></a></h1><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>startHeartbeatMonitor(ctx) {</span></span>
<span class="line"><span>  if (typeof window === &#39;undefined&#39;) return;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const HEARTBEAT_INTERVAL = 30 * 60 * 1000; // 30分钟</span></span>
<span class="line"><span>  let heartbeatTimer: ReturnType&lt;typeof setTimeout&gt; | null = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const allUsersObj = JSON.parse(localStorage.getItem(&#39;allUsersObj&#39;) || &#39;[]&#39;);</span></span>
<span class="line"><span>  let token: string = &#39;&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  allUsersObj.forEach((item: any) =&gt; {</span></span>
<span class="line"><span>    if (item.source === &#39;ZDT&#39;) {</span></span>
<span class="line"><span>      token = item.token;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!token) {</span></span>
<span class="line"><span>    console.warn(&#39;心跳监控未启动：缺少 token&#39;);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const isAndroid = $AppConfig.userAgent.isAndroid;</span></span>
<span class="line"><span>  const isIOS = $AppConfig.userAgent.isiOS;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const checkHeartbeat = async (): Promise&lt;boolean&gt; =&gt; {</span></span>
<span class="line"><span>    if (!token) {</span></span>
<span class="line"><span>      console.warn(&#39;心跳失败：缺少 token&#39;);</span></span>
<span class="line"><span>      this.handleLogout(ctx, &#39;缺少token&#39;);</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (isIOS) {</span></span>
<span class="line"><span>      return new Promise&lt;boolean&gt;((resolve) =&gt; {</span></span>
<span class="line"><span>        this.setupWebViewJavascriptBridge((bridge: any) =&gt; {</span></span>
<span class="line"><span>          try {</span></span>
<span class="line"><span>            bridge.callHandler(&#39;checkToken&#39;, { token }, (responseData: any) =&gt; {</span></span>
<span class="line"><span>              console.log(&#39;iOS 心跳响应:&#39;, responseData);</span></span>
<span class="line"><span>              if (responseData) {</span></span>
<span class="line"><span>                console.log(&#39;ios心跳成功&#39;);</span></span>
<span class="line"><span>                resolve(true);</span></span>
<span class="line"><span>              } else {</span></span>
<span class="line"><span>                console.error(&#39;ios心跳失败，即将退出登录&#39;);</span></span>
<span class="line"><span>                this.handleLogout(ctx, &#39;心跳失败&#39;);</span></span>
<span class="line"><span>                resolve(false);</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            });</span></span>
<span class="line"><span>          } catch (error) {</span></span>
<span class="line"><span>            console.error(&#39;调用iOS checkToken方法失败:&#39;, error);</span></span>
<span class="line"><span>            resolve(true);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    } else if (isAndroid) {</span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        if (typeof window.retailer?.checkToken === &#39;function&#39;) {</span></span>
<span class="line"><span>          return new Promise&lt;boolean&gt;((resolve) =&gt; {</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>              // 调用原生心跳检测方法</span></span>
<span class="line"><span>              window.retailer.checkToken();</span></span>
<span class="line"><span>              console.log(&#39;Android 心跳请求已发送&#39;);</span></span>
<span class="line"><span>              resolve(true);</span></span>
<span class="line"><span>            } catch (error) {</span></span>
<span class="line"><span>              console.error(&#39;调用Android checkToken方法失败:&#39;, error);</span></span>
<span class="line"><span>              resolve(true);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          });</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          console.warn(&#39;Android平台缺少checkToken方法&#39;);</span></span>
<span class="line"><span>          return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      } catch (error) {</span></span>
<span class="line"><span>        console.error(&#39;Android心跳检测过程出错:&#39;, error);</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // 非移动端环境跳过心跳检查</span></span>
<span class="line"><span>      return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const resetTimer = async () =&gt; {</span></span>
<span class="line"><span>    if (heartbeatTimer) {</span></span>
<span class="line"><span>      clearTimeout(heartbeatTimer);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 执行心跳检测</span></span>
<span class="line"><span>    const success = await checkHeartbeat();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 只有心跳成功才继续下一次定时</span></span>
<span class="line"><span>    if (success) {</span></span>
<span class="line"><span>      heartbeatTimer = setTimeout(resetTimer, HEARTBEAT_INTERVAL);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 绑定用户行为事件 - 用户活动时重置定时器</span></span>
<span class="line"><span>  const userActivityHandler = () =&gt; {</span></span>
<span class="line"><span>    if (heartbeatTimer) {</span></span>
<span class="line"><span>      clearTimeout(heartbeatTimer);</span></span>
<span class="line"><span>      heartbeatTimer = setTimeout(resetTimer, HEARTBEAT_INTERVAL);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const events = [&#39;click&#39;, &#39;touchstart&#39;, &#39;scroll&#39;, &#39;keydown&#39;, &#39;mousemove&#39;];</span></span>
<span class="line"><span>  events.forEach((event) =&gt; {</span></span>
<span class="line"><span>    document.addEventListener(event, userActivityHandler, { passive: true });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 启动首次定时器</span></span>
<span class="line"><span>  heartbeatTimer = setTimeout(resetTimer, HEARTBEAT_INTERVAL);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 清理</span></span>
<span class="line"><span>  window.addEventListener(&#39;beforeunload&#39;, () =&gt; {</span></span>
<span class="line"><span>    if (heartbeatTimer) {</span></span>
<span class="line"><span>      clearTimeout(heartbeatTimer);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    events.forEach((event) =&gt; {</span></span>
<span class="line"><span>      document.removeEventListener(event, userActivityHandler);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_7-常见问题-faq" tabindex="-1"><a class="header-anchor" href="#_7-常见问题-faq"><span><strong>7. 常见问题（FAQ）</strong></span></a></h2><table><thead><tr><th><strong>问题</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>为什么心跳不立即执行？</td><td>第一次心跳会在 <strong>30 分钟后</strong> 执行（用户不操作时触发）。</td></tr><tr><td>iOS 回调 false 会怎样？</td><td>立即调用 handleLogout。</td></tr><tr><td>Android 没有 checkToken 方法怎么办？</td><td>属于兼容情况，跳过本次心跳不会影响继续使用。</td></tr><tr><td>token 为空？</td><td>不启动心跳，避免无意义请求。</td></tr></tbody></table><hr><h2 id="_8-总结" tabindex="-1"><a class="header-anchor" href="#_8-总结"><span><strong>8. 总结</strong></span></a></h2><p>这套心跳方案重点在于 <strong>安全 + 稳定 + 兼容</strong>：</p><ul><li>iOS/Android 双端适配</li><li>用户行为自动延长有效期</li><li>异常情况都允许 fail-safe（不崩溃、不报错）</li></ul><p>能够让 H5 在 App 内拥有更稳定的登录体验。</p><hr>`,47),p=[l];function r(t,d){return a(),s("div",null,p)}const v=n(i,[["render",r],["__file","H5对Android和ios心跳检测.html.vue"]]),u=JSON.parse('{"path":"/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/H5%E5%AF%B9Android%E5%92%8Cios%E5%BF%83%E8%B7%B3%E6%A3%80%E6%B5%8B.html","title":"💓 心跳检测模块技术文档（含完整代码）","lang":"zh-CN","frontmatter":{"description":"💓 心跳检测模块技术文档（含完整代码） 1. 本质透视镜 本质是「保持用户登录有效，周期性验证 token 是否仍然生效」**** 这其实就是：定时调用原生 App 的 token 检查接口，防止用户未操作时被动下线。 2. 功能简介 该模块用于 Web H5 + iOS/Android 原生 App 混合环境 中的心跳检测逻辑，通过定时检查 tok...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/H5%E5%AF%B9Android%E5%92%8Cios%E5%BF%83%E8%B7%B3%E6%A3%80%E6%B5%8B.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"💓 心跳检测模块技术文档（含完整代码）"}],["meta",{"property":"og:description","content":"💓 心跳检测模块技术文档（含完整代码） 1. 本质透视镜 本质是「保持用户登录有效，周期性验证 token 是否仍然生效」**** 这其实就是：定时调用原生 App 的 token 检查接口，防止用户未操作时被动下线。 2. 功能简介 该模块用于 Web H5 + iOS/Android 原生 App 混合环境 中的心跳检测逻辑，通过定时检查 tok..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-01-07T19:39:04.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2026-01-07T19:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"💓 心跳检测模块技术文档（含完整代码）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-01-07T19:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":2,"title":"1. 本质透视镜","slug":"_1-本质透视镜","link":"#_1-本质透视镜","children":[]},{"level":2,"title":"2. 功能简介","slug":"_2-功能简介","link":"#_2-功能简介","children":[]},{"level":2,"title":"3. 工作机制（关系拓扑图）","slug":"_3-工作机制-关系拓扑图","link":"#_3-工作机制-关系拓扑图","children":[]},{"level":2,"title":"4. 行动价值（行动意义锚点）","slug":"_4-行动价值-行动意义锚点","link":"#_4-行动价值-行动意义锚点","children":[]},{"level":2,"title":"5. 调用流程（步骤拆解器）","slug":"_5-调用流程-步骤拆解器","link":"#_5-调用流程-步骤拆解器","children":[{"level":3,"title":"▶️ 操作路径","slug":"▶️-操作路径","link":"#▶️-操作路径","children":[]}]},{"level":2,"title":"7. 常见问题（FAQ）","slug":"_7-常见问题-faq","link":"#_7-常见问题-faq","children":[]},{"level":2,"title":"8. 总结","slug":"_8-总结","link":"#_8-总结","children":[]}],"git":{"createdTime":1767814744000,"updatedTime":1767814744000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":1}]},"readingTime":{"minutes":3.45,"words":1034},"filePathRelative":"businessProblem/个人解决/H5对Android和ios心跳检测.md","localizedDate":"2026年1月7日","autoDesc":true}');export{v as comp,u as data};
