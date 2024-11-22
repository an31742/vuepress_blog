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