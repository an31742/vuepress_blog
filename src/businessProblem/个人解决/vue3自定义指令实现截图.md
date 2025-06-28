---
title: vue3自定义指令实现截图
icon: circle-info
---

1. **依赖**：

• 使用 html2canvas（需要先安装：npm install html2canvas）。

2. **绑定事件**：

• 在目标 DOM 上绑定 click 事件。

3. **截图逻辑**：

• 点击后调用 html2canvas 截取目标元素的截图。

• 使用 Canvas 的 toDataURL() 方法生成 Base64 图片。

4. **保存文件**：

• 创建一个 a 标签，通过 download 属性触发文件下载。

实现代码
```js
import html2canvas from "html2canvas";

const screenShot = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener("click", async () => {
      const target = binding.value?.target ? document.getElementById(binding.value.target) : el;
// 获取dom元素
      if (target) {
        try {
          // 使用 html2canvas 截取元素截图
          const canvas = await html2canvas(target as HTMLElement);
          const dataURL = canvas.toDataURL("image/png");

          // 创建下载链接
          const link = document.createElement("a");
          link.href = dataURL;
          link.download = binding.value?.fileName || "screenshot.png";
          link.click();
        } catch (err) {
          console.error("截图失败:", err);
        }
      } else {
        console.error("未找到目标元素进行截图");
      }
    });
  }
};

export default screenShot;
```


```js
<template>
  <div>
    <div id="capture" style="width: 300px; height: 200px; background: lightblue; text-align: center; line-height: 200px;">
      截图内容
    </div>
    <button v-screenShot="{ target: '#capture', fileName: 'custom-screenshot.png' }">
      点击截图
    </button>
  </div>
</template>

<script setup>
import screenShot from "./directives/screenshot";

export default {
  directives: {
    screenShot,
  },
};
</script>
```
- 解决图片跨域 以及滚动条过长截图不全

```js
     async cutPicture() {
      const designPreview = this.$refs.designPreview;
      //解决dom里面滚动条截图不全的问题
      //重新复制一个dom 设置想要宽   高度为dom的clientWidth
      let clonedNode = designPreview.cloneNode(true); //复制一个
      clonedNode.setAttribute(
        "style",
        `width: ${"375px"};height: ${designPreview.clientWidth};`
      );
      document.body.appendChild(clonedNode); //放到body后面
          //通过复制的dom拿到想要的截图资源
      const canvas = await html2canvas(clonedNode, {
        backgroundColor: "#ffffff",
        allowTaint: true, //开启跨域  是否允许渲染未经授权的跨域资源
        useCORS: true, // 启用后，html2canvas 会尝试加载跨域资源，但需要图片服务器设置了 Access-Control-Allow-Origin。
        scale: 1,
        // height: clonedNode.scrollHeight,
        // windowHeight: clonedNode.scrollHeight,
      });
     // 因为已经获取了对应的截图 删除clone的dom就可以了
      document.body.removeChild(clonedNode); //最后记得移除截图时添加的
     // 可以通过设置一个a标签直接下载 
        //  const link = document.createElement('a');
        //     link.href = base64Data;
        //     link.download = 'example.txt'; // 设置下载文件的名称
        //     document.body.appendChild(link);
        //     link.click(); // 模拟点击
        //     document.body.removeChild(link); // 移除链接
     
     //这边是给后端传一个base64格式的获取对应图片的url
      let fileParams = {
        base64File: canvas.toDataURL("image/png").split(",")[1],
        token: this.$store.state.login.token,
        fileType: "png",
        fileName: "预览",
      };
      let res = await this.$http.post(
        "/api/mall-web-mos/uploadFile",
        fileParams
      );
      console.log("🚀 ~ savePage ~ res:", res);
      if (res.data.status === 0) {
        return res.data.data;
      }
    }

    ```