import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-1_sQ8TOy.js";const i={},l=e(`<p>! <a href="./image/imageCheck.png">vue3多层级复选框</a></p><h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h3><p>当点击左侧复选框时，右侧的全部复选框会被选中，当右侧部分复选框被选中时，左侧会显示半选状态。上方有一个全选复选框，当左侧所有复选框都被选中时，全选按钮会显示选中状态，当左侧复选框部分选中时，全选按钮会显示半选状态。</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h3><p>1首先我们要确定数据格式，就是左侧和右侧还是有全选按钮的关联关系</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>全选是独立的</span></span>
<span class="line"><span>//全选 设置选中的非选择</span></span>
<span class="line"><span>const selectAll: any = ref(false);</span></span>
<span class="line"><span>//使用element 完成半选</span></span>
<span class="line"><span>const selectAllIndeterminate: any = ref(false);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//左侧和右侧的关联关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const options: any = ref([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    label: &#39;Option 1&#39;,  //左侧展示的数据</span></span>
<span class="line"><span>    leftChecked: false, // 左侧是否选中</span></span>
<span class="line"><span>    optionsData: [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;], // 右侧的数据</span></span>
<span class="line"><span>    rightChecked: [],    //右侧选中</span></span>
<span class="line"><span>    indeterminate:false,  //左侧是否全选还是半选</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    label: &#39;Option 2&#39;,</span></span>
<span class="line"><span>    leftChecked: false,</span></span>
<span class="line"><span>    optionsData: [&#39;X&#39;, &#39;Y&#39;, &#39;Z&#39;],</span></span>
<span class="line"><span>    rightChecked: [],</span></span>
<span class="line"><span>    indeterminate:false,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.通过循环展示出来原型图的样式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>   &lt;div&gt;</span></span>
<span class="line"><span>        &lt;el-checkbox v-model=&quot;selectAll&quot; :indeterminate=&quot;selectAllIndeterminate&quot; @change=&quot;handleSelectAll&quot;&gt;全选&lt;/el-checkbox&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;el-row v-for=&quot;(item, index) in options&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>          &lt;!-- 左侧复选框 --&gt;</span></span>
<span class="line"><span>          &lt;el-col :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-checkbox v-model=&quot;item.leftChecked&quot; @change=&quot;handleLeftChange(index)&quot; :indeterminate=&quot;item.indeterminate&quot;&gt;</span></span>
<span class="line"><span>              {{ item.label }}</span></span>
<span class="line"><span>            &lt;/el-checkbox&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;/el-col&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;!-- 右侧复选框 --&gt;</span></span>
<span class="line"><span>          &lt;el-col :span=&quot;16&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-checkbox-group v-model=&quot;item.rightChecked&quot; @change=&quot;(val:any)=&gt;handleCheckGroup(index,val)&quot;&gt;</span></span>
<span class="line"><span>              &lt;el-checkbox :label=&quot;option&quot; v-for=&quot;(option, optionIndex) in item.optionsData&quot; :key=&quot;optionIndex&quot;&gt;</span></span>
<span class="line"><span>                {{ option }}</span></span>
<span class="line"><span>              &lt;/el-checkbox&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            &lt;/el-checkbox-group&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;/el-col&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;/el-row&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3 实现的相应的逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>//点击左侧的复选框 右侧全选 同时消除半选的状态</span></span>
<span class="line"><span>const handleLeftChange = (index: number) =&gt; {</span></span>
<span class="line"><span>//找到对应的左侧复选框</span></span>
<span class="line"><span>  const option = options.value[index];</span></span>
<span class="line"><span>  //  option.leftChecke是否选中，如果选中就将右侧的所有的都赋值过去 这是多个复选框展示和选中都是以数组的形式所表现的所以就可以的到点击左侧右侧全选和右侧不全选</span></span>
<span class="line"><span>  option.rightChecked = option.leftChecked ? [...option.optionsData] : [];</span></span>
<span class="line"><span>  option.indeterminate=false</span></span>
<span class="line"><span>  checkSelectAll();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 监听右侧复选框的变化</span></span>
<span class="line"><span>const handleCheckGroup=(index:number,data:any)=&gt;{</span></span>
<span class="line"><span>//找到对应的数据</span></span>
<span class="line"><span>  const option = options.value[index];</span></span>
<span class="line"><span>//根据右侧复选框来判断做的是否选中还是半选 如果右侧全部选中和原本数据对比如果一致那就左侧就是选中</span></span>
<span class="line"><span>  option.leftChecked =data.length&gt;0 &amp;&amp; data.length === option.optionsData.length </span></span>
<span class="line"><span>  // 如果右侧全部选中和原本数据对比如果不一致那就左侧就是半选</span></span>
<span class="line"><span>  option.indeterminate = data.length&gt;0 &amp;&amp; data.length !== option.optionsData.length </span></span>
<span class="line"><span>  checkSelectAll();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 无论左侧还是右侧全部选中了对上面的全选做一个状态调整</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const checkSelectAll = () =&gt; {</span></span>
<span class="line"><span>// 判断左侧是否全部选中</span></span>
<span class="line"><span>  const allLeftChecked = options.value.every((option: any) =&gt; option.leftChecked);</span></span>
<span class="line"><span>//判断左侧是否是部分选中</span></span>
<span class="line"><span>  const someLeftChecked = options.value.some((option: any) =&gt; option.leftChecked);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span> //如果是全部选中那么就将全选的按钮做选中效果</span></span>
<span class="line"><span>  selectAll.value = allLeftChecked ? true : (someLeftChecked ? null : false);</span></span>
<span class="line"><span> //如果是部分选中那么就将全选的按钮做部分选中效果</span></span>
<span class="line"><span>  selectAllIndeterminate.value =allLeftChecked ? false : (someLeftChecked ? true : false); </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//当全选的点击事件触发变化</span></span>
<span class="line"><span>const handleSelectAll = (data: any) =&gt; {</span></span>
<span class="line"><span>//去掉全选的半选样式</span></span>
<span class="line"><span>  selectAllIndeterminate.value=false</span></span>
<span class="line"><span>  options.value.map((option: any) =&gt; {</span></span>
<span class="line"><span>  //将全选选中 true /false 选中和不选中的效果 赋值给所有的左侧复选框</span></span>
<span class="line"><span>    option.leftChecked = data;</span></span>
<span class="line"><span>    //将全选选中 将所有的左侧半选样式去掉</span></span>
<span class="line"><span>    option.indeterminate = false;</span></span>
<span class="line"><span>       //将全选选中 将所有的左侧半选样式去掉</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 右侧整体如果是选中的话那么就有全部的数据否则就是空 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    option.rightChecked = data ? [...option.optionsData] : [];</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 初始化时检查是否全选</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  checkSelectAll();</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[l];function c(t,d){return a(),s("div",null,p)}const o=n(i,[["render",c],["__file","vue3多层级复选框.html.vue"]]),u=JSON.parse('{"path":"/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/vue3%E5%A4%9A%E5%B1%82%E7%BA%A7%E5%A4%8D%E9%80%89%E6%A1%86.html","title":"vue3多层级复选框","lang":"zh-CN","frontmatter":{"title":"vue3多层级复选框","icon":"circle-info","description":"! vue3多层级复选框 需求 当点击左侧复选框时，右侧的全部复选框会被选中，当右侧部分复选框被选中时，左侧会显示半选状态。上方有一个全选复选框，当左侧所有复选框都被选中时，全选按钮会显示选中状态，当左侧复选框部分选中时，全选按钮会显示半选状态。 代码 1首先我们要确定数据格式，就是左侧和右侧还是有全选按钮的关联关系 2.通过循环展示出来原型图的样式 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/vue3%E5%A4%9A%E5%B1%82%E7%BA%A7%E5%A4%8D%E9%80%89%E6%A1%86.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"vue3多层级复选框"}],["meta",{"property":"og:description","content":"! vue3多层级复选框 需求 当点击左侧复选框时，右侧的全部复选框会被选中，当右侧部分复选框被选中时，左侧会显示半选状态。上方有一个全选复选框，当左侧所有复选框都被选中时，全选按钮会显示选中状态，当左侧复选框部分选中时，全选按钮会显示半选状态。 代码 1首先我们要确定数据格式，就是左侧和右侧还是有全选按钮的关联关系 2.通过循环展示出来原型图的样式 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T08:11:13.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-10-16T08:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue3多层级复选框\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T08:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[{"level":3,"title":"需求","slug":"需求","link":"#需求","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]}],"git":{"createdTime":1719484411000,"updatedTime":1729066273000,"contributors":[{"name":"maxa.gdsy","email":"maxa.gdsy@sinopec.com","commits":1}]},"readingTime":{"minutes":2.92,"words":875},"filePathRelative":"businessProblem/个人解决/vue3多层级复选框.md","localizedDate":"2024年6月27日","autoDesc":true}');export{o as comp,u as data};
