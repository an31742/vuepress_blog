import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
    {
      text: "前端面试指南",
      icon: "book",
      prefix: "frontEndInterview/",
      children: "structure",
    },
  ],
  // '/demo/': "structure",
  '/businessProblem/': "structure"

});
