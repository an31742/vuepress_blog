import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as e}from"./app-D1s-CSjg.js";const l="/assets/imageProduct-7JwfoMJ_.png",i={},p=e('<p>之前通过多级动态表单获取到多包裹，接下来就是再根据多包裹来判断可选择发货数量 <strong>要结合之前的多级表单动态添加包裹会更好理解</strong></p><p>目前这个只是一种方法，我相信还有别的方法，可能会更简单</p><h4 id="选择商品" tabindex="-1"><a class="header-anchor" href="#选择商品"><span>选择商品</span></a></h4><ul><li>选择商品里面选择可选择发货数量， <ul><li>可选择的发货数量是总数量-每个包裹选择的当前商品的数量-已发货数量</li></ul></li><li>可选择发货数量为0时禁用</li><li>默认展开时全选商品</li><li>默认展开时可选择商品数默认展示</li></ul><h4 id="展示" tabindex="-1"><a class="header-anchor" href="#展示"><span>展示</span></a></h4><figure><img src="'+l+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h4 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h4><ul><li><p>只要把可选择商品把选择商品的数量解决来其他的都好说</p><ul><li>复选框的禁用</li><li>商品可选择的数量</li><li>商品最大值最小值的范围</li></ul></li><li><p>还有一个就是默认展示 这个只要根据element 的toggleRowSelection方法就可以默认全选选中了</p></li></ul><h4 id="页面代码" tabindex="-1"><a class="header-anchor" href="#页面代码"><span>页面代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>      &lt;BaseDialog title=&quot;选择商品&quot; v-model=&quot;goodsModel&quot; @close=&quot;closegoodGroup&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>          &lt;el-table</span></span>
<span class="line"><span>            ref=&quot;shopTable&quot;</span></span>
<span class="line"><span>            :data=&quot;newTableData&quot;</span></span>
<span class="line"><span>            style=&quot;width: 100%&quot;</span></span>
<span class="line"><span>            @selection-change=&quot;handleSelectionChange&quot;</span></span>
<span class="line"><span>            :row-key=&quot;getRowKey&quot;</span></span>
<span class="line"><span>          &gt;</span></span>
<span class="line"><span>            &lt;el-table-column</span></span>
<span class="line"><span>              type=&quot;selection&quot;</span></span>
<span class="line"><span>              :selectable=&quot;selected&quot;</span></span>
<span class="line"><span>              :reserve-selection=&quot;true&quot;</span></span>
<span class="line"><span>              width=&quot;55&quot;</span></span>
<span class="line"><span>            &gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column label=&quot;SKUID&quot; prop=&quot;outerSkuId&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column label=&quot;商品名称&quot; prop=&quot;skuName&quot;&gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column label=&quot;所属组合商品&quot; prop=&quot;packageSkuName&quot; width=&quot;200&quot;&gt;</span></span>
<span class="line"><span>            &lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column</span></span>
<span class="line"><span>              v-if=&quot;!subDeliver&quot;</span></span>
<span class="line"><span>              label=&quot;商品规格&quot;</span></span>
<span class="line"><span>              prop=&quot;specs&quot;</span></span>
<span class="line"><span>            &gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column</span></span>
<span class="line"><span>              v-if=&quot;!subDeliver&quot;</span></span>
<span class="line"><span>              label=&quot;总数量&quot;</span></span>
<span class="line"><span>              prop=&quot;number&quot;</span></span>
<span class="line"><span>            &gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column</span></span>
<span class="line"><span>              v-if=&quot;!subDeliver&quot;</span></span>
<span class="line"><span>              label=&quot;已发货数量&quot;</span></span>
<span class="line"><span>              prop=&quot;hadDeliveryNumber&quot;</span></span>
<span class="line"><span>            &gt;&lt;/el-table-column&gt;</span></span>
<span class="line"><span>            &lt;el-table-column</span></span>
<span class="line"><span>              v-if=&quot;!subDeliver&quot;</span></span>
<span class="line"><span>              label=&quot;本次发货数量&quot;</span></span>
<span class="line"><span>              prop=&quot;&quot;</span></span>
<span class="line"><span>              width=&quot;200&quot;</span></span>
<span class="line"><span>            &gt;</span></span>
<span class="line"><span>              &lt;template #default=&quot;{ row, $index }&quot;&gt;</span></span>
<span class="line"><span>                &lt;el-input-number</span></span>
<span class="line"><span>                  :disabled=&quot;getMaxNumber(row) === 0 ? true : false&quot;</span></span>
<span class="line"><span>                  :max=&quot;getMaxNumber(row, $index)&quot;</span></span>
<span class="line"><span>                  :min=&quot;0&quot;</span></span>
<span class="line"><span>                  v-model=&quot;row.theSendGoods&quot;</span></span>
<span class="line"><span>                &gt;&lt;/el-input-number&gt;</span></span>
<span class="line"><span>              &lt;/template&gt;</span></span>
<span class="line"><span>            &lt;/el-table-column&gt;</span></span>
<span class="line"><span>          &lt;/el-table&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;template #footer&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;dialog-footer&quot;&gt;</span></span>
<span class="line"><span>            &lt;el-button type=&quot;default&quot; @click=&quot;closegoodGroup&quot;&gt;取消&lt;/el-button&gt;</span></span>
<span class="line"><span>            &lt;el-button type=&quot;primary&quot; @click=&quot;submitGood&quot;&gt;确认&lt;/el-button&gt;</span></span>
<span class="line"><span>          &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/template&gt;</span></span>
<span class="line"><span>      &lt;/BaseDialog&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逻辑代码" tabindex="-1"><a class="header-anchor" href="#逻辑代码"><span>逻辑代码</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    export default {</span></span>
<span class="line"><span>     name: &#39;&#39;,</span></span>
<span class="line"><span>     props: {</span></span>
<span class="line"><span>       subDeliver: {</span></span>
<span class="line"><span>         type: Boolean,</span></span>
<span class="line"><span>         default: null,</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       goodsModel: {</span></span>
<span class="line"><span>         type: Boolean,</span></span>
<span class="line"><span>         default: null,</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       newGoodList: {</span></span>
<span class="line"><span>         type: Array,</span></span>
<span class="line"><span>         default: () =&gt; {</span></span>
<span class="line"><span>           return []</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     data() {</span></span>
<span class="line"><span>       return {</span></span>
<span class="line"><span>         // goodsModel: false, // 选择商品弹框</span></span>
<span class="line"><span>         pitchData: [],</span></span>
<span class="line"><span>         flagNum: false,</span></span>
<span class="line"><span>         newTableData: [],</span></span>
<span class="line"><span>         tableData: [],</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     watch: {</span></span>
<span class="line"><span>       tableData: {</span></span>
<span class="line"><span>         deep: true,</span></span>
<span class="line"><span>         immediate: true,</span></span>
<span class="line"><span>         handler(newVal, oldVal) {</span></span>
<span class="line"><span>           console.log(&#39;newVal: &#39;, newVal)</span></span>
<span class="line"><span>           this.newTableData = JSON.parse(JSON.stringify(newVal))</span></span>
<span class="line"><span>           this.newTableData.forEach((v) =&gt; {</span></span>
<span class="line"><span>             this.$nextTick(() =&gt; {</span></span>
<span class="line"><span>               v.selectFlagState = false</span></span>
<span class="line"><span>               v.theSendGoods = this.setSelectNum(v)</span></span>
<span class="line"><span>               this.$refs.shopTable.toggleRowSelection(v, true)</span></span>
<span class="line"><span>             })</span></span>
<span class="line"><span>           })</span></span>
<span class="line"><span>         },</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     methods: {</span></span>
<span class="line"><span>       selected(row, index) {</span></span>
<span class="line"><span>         if (this.subDeliver) {</span></span>
<span class="line"><span>           return true</span></span>
<span class="line"><span>         } else {</span></span>
<span class="line"><span>           return this.setSelectNum(row) === 0 ? false : true</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       getMaxNumber(row) {</span></span>
<span class="line"><span>         return this.setSelectNum(row)</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       // 返回唯一值</span></span>
<span class="line"><span>       getRowKey(row) {</span></span>
<span class="line"><span>         return row.id</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       closegoodGroup() {</span></span>
<span class="line"><span>         // this.goodsModel = false</span></span>
<span class="line"><span>         this.$emit(&#39;closeGood&#39;, false)</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       submitGood() {</span></span>
<span class="line"><span>         // this.goodsModel = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         if (this.pitchData.length &gt; 0) {</span></span>
<span class="line"><span>           if (this.subDeliver) {</span></span>
<span class="line"><span>             if (this.flagSelect) {</span></span>
<span class="line"><span>               this.$emit(&#39;subPitchData&#39;, this.pitchData)</span></span>
<span class="line"><span>             } else {</span></span>
<span class="line"><span>               this.$message.warning(&#39;请选择子商品&#39;)</span></span>
<span class="line"><span>               this.$emit(&#39;subPitchData&#39;, [])</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span>           } else {</span></span>
<span class="line"><span>             let selectEditData = []</span></span>
<span class="line"><span>             JSON.parse(JSON.stringify(this.newTableData)).map((i) =&gt; {</span></span>
<span class="line"><span>               i.isCommonProduct = i.packageSkuName ? true : false</span></span>
<span class="line"><span>               i.isCommonProduct</span></span>
<span class="line"><span>                 ? (i.newSkuId = i.skuId + i.outerSkuId)</span></span>
<span class="line"><span>                 : (i.newSkuId = i.skuId)</span></span>
<span class="line"><span>               this.pitchData.map((v) =&gt; {</span></span>
<span class="line"><span>                 v.isCommonProduct</span></span>
<span class="line"><span>                   ? (v.newSkuId = v.skuId + v.outerSkuId)</span></span>
<span class="line"><span>                   : (v.newSkuId = v.skuId)</span></span>
<span class="line"><span>                 if (v.selectFlagState &amp;&amp; v.newSkuId === i.newSkuId) {</span></span>
<span class="line"><span>                   selectEditData.push({</span></span>
<span class="line"><span>                     orderItemId: i.id,</span></span>
<span class="line"><span>                     skuId: i.skuId,</span></span>
<span class="line"><span>                     skuName: i.skuName,</span></span>
<span class="line"><span>                     storeOuCode: i.storeOuCode,</span></span>
<span class="line"><span>                     theSendGoods: i.theSendGoods,</span></span>
<span class="line"><span>                     number: i.theSendGoods,</span></span>
<span class="line"><span>                     totalNumber: i.number,</span></span>
<span class="line"><span>                     outerSkuId: v.outerSkuId,</span></span>
<span class="line"><span>                     packageSkuName: v.packageSkuName,</span></span>
<span class="line"><span>                   })</span></span>
<span class="line"><span>                 }</span></span>
<span class="line"><span>               })</span></span>
<span class="line"><span>             })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             try {</span></span>
<span class="line"><span>               let isHasProduct = selectEditData.every((item) =&gt; item.number === 0)</span></span>
<span class="line"><span>               if (isHasProduct) {</span></span>
<span class="line"><span>                 throw new Error(&#39;请选择商品&#39;)</span></span>
<span class="line"><span>               } else {</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>               selectEditData = selectEditData.filter((item) =&gt; item.number !== 0)</span></span>
<span class="line"><span>             } catch (error) {</span></span>
<span class="line"><span>               this.$message.error(error.message)</span></span>
<span class="line"><span>             }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>             this.$emit(&#39;pitchData&#39;, selectEditData)</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>         } else {</span></span>
<span class="line"><span>           this.$message({</span></span>
<span class="line"><span>             type: &#39;warning&#39;, // success error warning</span></span>
<span class="line"><span>             message: &#39;请选择商品&#39;,</span></span>
<span class="line"><span>             duration: 2000,</span></span>
<span class="line"><span>           })</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>         this.flagSelect = false</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       handleSelectionChange(data) {</span></span>
<span class="line"><span>         this.pitchData = []</span></span>
<span class="line"><span>         this.pitchData = JSON.parse(JSON.stringify(data)).map((v) =&gt; {</span></span>
<span class="line"><span>           return {</span></span>
<span class="line"><span>             orderItemId: v.id,</span></span>
<span class="line"><span>             skuId: v.skuId,</span></span>
<span class="line"><span>             skuName: v.skuName,</span></span>
<span class="line"><span>             storeOuCode: v.storeOuCode,</span></span>
<span class="line"><span>             number: this.subDeliver ? &#39;0&#39; : v.number,</span></span>
<span class="line"><span>             selectFlagState: true,</span></span>
<span class="line"><span>             outerSkuId: v.outerSkuId,</span></span>
<span class="line"><span>             packageSkuName: v.packageSkuName,</span></span>
<span class="line"><span>             isCommonProduct: v.packageSkuName ? true : false,</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>         })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         this.flagSelect = this.pitchData.length &gt; 0 ? true : false</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>       //默认展示最发货数量 及</span></span>
<span class="line"><span>       setSelectNum(row) {</span></span>
<span class="line"><span>         // 当前包裹没有商品可选择的商品数量</span></span>
<span class="line"><span>         let selectCanNumber = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // 有多个包裹那么此商品累计的数量</span></span>
<span class="line"><span>         let selectNumber = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // 当前包裹有商品可选择的商品数量</span></span>
<span class="line"><span>         let selectFlagNumber = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         // 判断当前包裹是否有商品</span></span>
<span class="line"><span>         let flagNum = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         this.newGoodList.forEach((item) =&gt; {</span></span>
<span class="line"><span>           console.log(&#39;item: &#39;, item)</span></span>
<span class="line"><span>           //如果该项目有多个 packageList，则进一步遍历每个包裹</span></span>
<span class="line"><span>           if (item.packageList.length &gt; 0) {</span></span>
<span class="line"><span>             item.packageList.forEach((v) =&gt; {</span></span>
<span class="line"><span>               // 对于每个包裹，判断里面是否有商品，如果有 packageSkuList 商品</span></span>
<span class="line"><span>               // 如果包裹里面有商品</span></span>
<span class="line"><span>               if (v.packageSkuList.length &gt; 0) {</span></span>
<span class="line"><span>                 // 遍历每一个商品</span></span>
<span class="line"><span>                 v.packageSkuList.forEach((value) =&gt; {</span></span>
<span class="line"><span>                   // 如果包裹里面的商品与可选择的表格商品中每一个商品保持一致</span></span>
<span class="line"><span>                   if (value.skuId == row.skuId) {</span></span>
<span class="line"><span>                     selectNumber += value.number</span></span>
<span class="line"><span>                     // 累计其他包裹中该商品的数量</span></span>
<span class="line"><span>                     // 可选择的商品数量 等于总的商品数量减去已发货数量减去其他包裹的该商品的数量</span></span>
<span class="line"><span>                     selectFlagNumber =</span></span>
<span class="line"><span>                       parseInt(row.number) -</span></span>
<span class="line"><span>                       parseInt(row.hadDeliveryNumber) -</span></span>
<span class="line"><span>                       parseInt(selectNumber)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                     // 做一步校验如果总数量等于已发货数量，则可选择的数量为0</span></span>
<span class="line"><span>                     if (</span></span>
<span class="line"><span>                       selectNumber &gt;=</span></span>
<span class="line"><span>                       parseInt(row.number) - parseInt(row.hadDeliveryNumber)</span></span>
<span class="line"><span>                     ) {</span></span>
<span class="line"><span>                       selectFlagNumber = 0</span></span>
<span class="line"><span>                     }</span></span>
<span class="line"><span>                     flagNum = true</span></span>
<span class="line"><span>                   } else {</span></span>
<span class="line"><span>                     // 其他包裹中该商品不包含当前表格中的商品</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                     // 可选择的商品等总数量的商品减去已发货的商品</span></span>
<span class="line"><span>                     selectFlagNumber =</span></span>
<span class="line"><span>                       parseInt(row.number) - parseInt(row.hadDeliveryNumber)</span></span>
<span class="line"><span>                     // 做一步校验如果总数量等于已发货数量，则可选择的数量为0</span></span>
<span class="line"><span>                     console.log(&#39;selectNumber: &#39;, selectNumber)</span></span>
<span class="line"><span>                     console.log(&#39;row.number: &#39;, row.number)</span></span>
<span class="line"><span>                     console.log(&#39;row.hadDeliveryNumber: &#39;, row.hadDeliveryNumber)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                     if (</span></span>
<span class="line"><span>                       selectNumber &gt;=</span></span>
<span class="line"><span>                       parseInt(row.number) - parseInt(row.hadDeliveryNumber)</span></span>
<span class="line"><span>                     ) {</span></span>
<span class="line"><span>                       selectFlagNumber = 0</span></span>
<span class="line"><span>                     } else {</span></span>
<span class="line"><span>                       // 其他包裹中该商品不包含当前表格中的商品 且总数量减去发货数量不等于0 那么得需要再减去其他包裹已选择的发货数量</span></span>
<span class="line"><span>                       selectFlagNumber =</span></span>
<span class="line"><span>                         parseInt(row.number) -</span></span>
<span class="line"><span>                         parseInt(row.hadDeliveryNumber) -</span></span>
<span class="line"><span>                         parseInt(selectNumber)</span></span>
<span class="line"><span>                     }</span></span>
<span class="line"><span>                     flagNum = true</span></span>
<span class="line"><span>                   }</span></span>
<span class="line"><span>                 })</span></span>
<span class="line"><span>               } else {</span></span>
<span class="line"><span>                 // 如果包裹里面没有商品 那么可以选择商品数量等于总数量减去已发货的数量</span></span>
<span class="line"><span>                 selectCanNumber =</span></span>
<span class="line"><span>                   parseInt(row.number) - parseInt(row.hadDeliveryNumber)</span></span>
<span class="line"><span>               }</span></span>
<span class="line"><span>             })</span></span>
<span class="line"><span>           } else {</span></span>
<span class="line"><span>             // 如果当前包裹的数量只有一个  那么可以选择的商品等于总数量减去已发货的商品数量</span></span>
<span class="line"><span>             selectCanNumber =</span></span>
<span class="line"><span>               parseInt(row.number) - parseInt(row.hadDeliveryNumber)</span></span>
<span class="line"><span>           }</span></span>
<span class="line"><span>         })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>         if (flagNum) {</span></span>
<span class="line"><span>           // 如果包裹里面有商品 那么可选择的商品数量就是 selectFlagNumber</span></span>
<span class="line"><span>           return selectFlagNumber</span></span>
<span class="line"><span>         } else {</span></span>
<span class="line"><span>           // 如果包裹里面没有商品 那么可选择的商品数量就是 selectCanNumber</span></span>
<span class="line"><span>           return selectCanNumber</span></span>
<span class="line"><span>         }</span></span>
<span class="line"><span>       },</span></span>
<span class="line"><span>     },</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[p];function d(v,t){return a(),n("div",null,c)}const m=s(i,[["render",d],["__file","后台发货动态校验多包裹及校验可选择发货数量.html.vue"]]),b=JSON.parse('{"path":"/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/%E5%90%8E%E5%8F%B0%E5%8F%91%E8%B4%A7%E5%8A%A8%E6%80%81%E6%A0%A1%E9%AA%8C%E5%A4%9A%E5%8C%85%E8%A3%B9%E5%8F%8A%E6%A0%A1%E9%AA%8C%E5%8F%AF%E9%80%89%E6%8B%A9%E5%8F%91%E8%B4%A7%E6%95%B0%E9%87%8F.html","title":"后台发货动态校验多包裹及校验可选择发货数量","lang":"zh-CN","frontmatter":{"title":"后台发货动态校验多包裹及校验可选择发货数量","icon":"circle-info","description":"之前通过多级动态表单获取到多包裹，接下来就是再根据多包裹来判断可选择发货数量 要结合之前的多级表单动态添加包裹会更好理解 目前这个只是一种方法，我相信还有别的方法，可能会更简单 选择商品 选择商品里面选择可选择发货数量， 可选择的发货数量是总数量-每个包裹选择的当前商品的数量-已发货数量 可选择发货数量为0时禁用 默认展开时全选商品 默认展开时可选择商...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/businessProblem/%E4%B8%AA%E4%BA%BA%E8%A7%A3%E5%86%B3/%E5%90%8E%E5%8F%B0%E5%8F%91%E8%B4%A7%E5%8A%A8%E6%80%81%E6%A0%A1%E9%AA%8C%E5%A4%9A%E5%8C%85%E8%A3%B9%E5%8F%8A%E6%A0%A1%E9%AA%8C%E5%8F%AF%E9%80%89%E6%8B%A9%E5%8F%91%E8%B4%A7%E6%95%B0%E9%87%8F.html"}],["meta",{"property":"og:site_name","content":"前端知识随笔"}],["meta",{"property":"og:title","content":"后台发货动态校验多包裹及校验可选择发货数量"}],["meta",{"property":"og:description","content":"之前通过多级动态表单获取到多包裹，接下来就是再根据多包裹来判断可选择发货数量 要结合之前的多级表单动态添加包裹会更好理解 目前这个只是一种方法，我相信还有别的方法，可能会更简单 选择商品 选择商品里面选择可选择发货数量， 可选择的发货数量是总数量-每个包裹选择的当前商品的数量-已发货数量 可选择发货数量为0时禁用 默认展开时全选商品 默认展开时可选择商..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T08:11:13.000Z"}],["meta",{"property":"article:author","content":"小安"}],["meta",{"property":"article:modified_time","content":"2024-10-16T08:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"后台发货动态校验多包裹及校验可选择发货数量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T08:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"小安\\",\\"url\\":\\"https://github.com/an31742\\"}]}"]]},"headers":[],"git":{"createdTime":1729066273000,"updatedTime":1729066273000,"contributors":[{"name":"maxa.gdsy","email":"maxa.gdsy@sinopec.com","commits":1}]},"readingTime":{"minutes":4.49,"words":1347},"filePathRelative":"businessProblem/个人解决/后台发货动态校验多包裹及校验可选择发货数量.md","localizedDate":"2024年10月16日","autoDesc":true}');export{m as comp,b as data};
