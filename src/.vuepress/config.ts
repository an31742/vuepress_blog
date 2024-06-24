import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "前端知识随笔",
  description: "记录前端知识",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
