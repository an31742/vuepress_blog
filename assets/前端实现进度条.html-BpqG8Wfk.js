import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as e}from"./app-MrDJDyO8.js";const i={},l=e(`<p>后端处理数据处理逻辑特别多的时候，并不会很及时返回数据，一般情况后端给前端返回进度，这个目前是前端自己返回进度到90，等到接口返回完成再到100%</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>1、设置全局样式</span></span>
<span class="line"><span>    &lt;div class=&quot;loading-overlay&quot; v-show=&quot;PageController.nextLoading&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;loading-content&quot;&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;text-align: center; padding: 20px&quot;&gt;</span></span>
<span class="line"><span>          &lt;a-progress</span></span>
<span class="line"><span>            type=&quot;circle&quot;</span></span>
<span class="line"><span>            :percent=&quot;PageController.progressPercent&quot;</span></span>
<span class="line"><span>            :status=&quot;</span></span>
<span class="line"><span>              PageController.progressPercent === 100 ? &#39;success&#39; : &#39;active&#39;</span></span>
<span class="line"><span>            &quot;</span></span>
<span class="line"><span>          /&gt;</span></span>
<span class="line"><span>          &lt;p style=&quot;margin-top: 10px&quot;&gt;</span></span>
<span class="line"><span>            名单正在生成中，请您耐心等待。若您提前退出，该任务将在后台继续执行，您可稍后在任务列表中查看结果。</span></span>
<span class="line"><span>          &lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>.loading-overlay {</span></span>
<span class="line"><span>  position: fixed;</span></span>
<span class="line"><span>  top: 0;</span></span>
<span class="line"><span>  left: 0;</span></span>
<span class="line"><span>  width: 100%;</span></span>
<span class="line"><span>  height: 100%;</span></span>
<span class="line"><span>  background-color: rgba(0, 0, 0, 0.3);</span></span>
<span class="line"><span>  z-index: 1000;</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.loading-content {</span></span>
<span class="line"><span>  background: white;</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>  padding: 24px;</span></span>
<span class="line"><span>  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>  @observable nextLoading = false;</span></span>
<span class="line"><span>  @observable progressPercent = 0;</span></span>
<span class="line"><span>  @observable progressInterval = null;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2、当触发的时候就调用进度条展示方法</span></span>
<span class="line"><span>  async onSubmit() {</span></span>
<span class="line"><span>    this.subLoading = true;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //设置进度条状态开始</span></span>
<span class="line"><span>    this.PageController.setNextLoading(true);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      let data = this.PageController.uploadList.map((v) =&gt; {</span></span>
<span class="line"><span>        return {</span></span>
<span class="line"><span>          channelSize: v.channelSize ? v.channelSize : 0,</span></span>
<span class="line"><span>          id: v.id,</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      // 启动进度条</span></span>
<span class="line"><span>      this.startProgressIncrement();</span></span>
<span class="line"><span>      let res = await this.PageController.submitChannelSize(data);</span></span>
<span class="line"><span>      this.$message.success(&#39;提交成功&#39;);</span></span>
<span class="line"><span>      // 接口调用成功后，确保进度条至少运行一段时间再完成</span></span>
<span class="line"><span>      this.completeProgress();</span></span>
<span class="line"><span>      //关闭进度条</span></span>
<span class="line"><span>      this.PageController.setNextLoading(false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      this.subLoading = false;</span></span>
<span class="line"><span>      this.PageController.changeSubmitAfter(true);</span></span>
<span class="line"><span>      this.$router.replace({</span></span>
<span class="line"><span>        ...this.$Pages</span></span>
<span class="line"><span>          .Region_plan_jurisdiction_list_management_bpp_configuration_list,</span></span>
<span class="line"><span>        query: {</span></span>
<span class="line"><span>          id: this.$route.query.id,</span></span>
<span class="line"><span>          batchDate: this.$route.query.batchDate,</span></span>
<span class="line"><span>          salesType: &#39;bpp&#39;,</span></span>
<span class="line"><span>          status: &#39;details&#39;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    } catch (error) {</span></span>
<span class="line"><span>    //如果接口报错就清空进度条</span></span>
<span class="line"><span>      if (this.PageController.progressInterval) {</span></span>
<span class="line"><span>        clearInterval(this.PageController.progressInterval);</span></span>
<span class="line"><span>        this.PageController.changeProgressInterval(null);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      this.PageController.setNextLoading(false);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      this.subLoading = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  startProgressIncrement() {</span></span>
<span class="line"><span>    // 重置进度</span></span>
<span class="line"><span>    this.PageController.changeProgressPercent(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 每100ms增加5%的进度，直到95%</span></span>
<span class="line"><span>    let progress = 0;</span></span>
<span class="line"><span>    const increment = 5;</span></span>
<span class="line"><span>    const intervalTime = 100;</span></span>
<span class="line"><span>    const maxProgress = 95;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let interval = setInterval(() =&gt; {</span></span>
<span class="line"><span>      progress += increment;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 确保进度不超过最大值</span></span>
<span class="line"><span>      if (progress &gt;= maxProgress) {</span></span>
<span class="line"><span>        progress = maxProgress;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      this.PageController.changeProgressPercent(progress);</span></span>
<span class="line"><span>      this.PageController.changeProgressInterval(interval);</span></span>
<span class="line"><span>    }, intervalTime);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 完成进度条，确保有良好的用户体验</span></span>
<span class="line"><span>  completeProgress() {</span></span>
<span class="line"><span>    // 清除现有的定时器</span></span>
<span class="line"><span>    if (this.PageController.progressInterval) {</span></span>
<span class="line"><span>      clearInterval(this.PageController.progressInterval);</span></span>
<span class="line"><span>      this.PageController.changeProgressInterval(null);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 设置一个最小持续时间，确保用户能看到进度条的变化</span></span>
<span class="line"><span>    const minDuration = 1000; // 最小持续时间1秒</span></span>
<span class="line"><span>    const startTime = Date.now();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 立即将进度设置为95%</span></span>
<span class="line"><span>    this.PageController.changeProgressPercent(95);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 使用新的定时器完成最后的进度</span></span>
<span class="line"><span>    let interval = setInterval(() =&gt; {</span></span>
<span class="line"><span>      const elapsed = Date.now() - startTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (elapsed &gt;= minDuration) {</span></span>
<span class="line"><span>        // 时间到了，完成进度条</span></span>
<span class="line"><span>        this.PageController.changeProgressPercent(100);</span></span>
<span class="line"><span>        clearInterval(interval);</span></span>
<span class="line"><span>        this.PageController.setNextLoading(false);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 根据已用时间计算进度</span></span>
<span class="line"><span>        const progress = 95 + (5 * elapsed) / minDuration;</span></span>
<span class="line"><span>        this.PageController.changeProgressPercent(Math.min(progress, 99));</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }, 50);</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[l];function c(r,d){return a(),n("div",null,p)}const o=s(i,[["render",c],["__file","前端实现进度条.html.vue"]]),m=JSON.parse('{"path":"/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/%E5%89%8D%E7%AB%AF%E5%AE%9E%E7%8E%B0%E8%BF%9B%E5%BA%A6%E6%9D%A1.html","title":"前端实现进度条","lang":"zh-CN","frontmatter":{"title":"前端实现进度条","icon":"circle-info","description":"后端处理数据处理逻辑特别多的时候，并不会很及时返回数据，一般情况后端给前端返回进度，这个目前是前端自己返回进度到90，等到接口返回完成再到100%","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/%E5%89%8D%E7%AB%AF%E5%AE%9E%E7%8E%B0%E8%BF%9B%E5%BA%A6%E6%9D%A1.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"前端实现进度条"}],["meta",{"property":"og:description","content":"后端处理数据处理逻辑特别多的时候，并不会很及时返回数据，一般情况后端给前端返回进度，这个目前是前端自己返回进度到90，等到接口返回完成再到100%"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-04-20T03:12:37.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2026-04-20T03:12:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端实现进度条\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-04-20T03:12:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[],"git":{"createdTime":1767814744000,"updatedTime":1776654757000,"contributors":[{"name":"an31742","email":"2234170284@qq.com","commits":2}]},"readingTime":{"minutes":1.91,"words":574},"filePathRelative":"businessProblem/个人解决/前端实现进度条.md","localizedDate":"2026年1月7日","autoDesc":true}');export{o as comp,m as data};
