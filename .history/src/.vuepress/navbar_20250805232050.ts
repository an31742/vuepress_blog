import { navbar } from "vuepress-theme-hope"

export default navbar([
  // "/",
  "/portfolio",

  {
    text: "前端面试指南",
    icon: "book",
    link: "/frontEndInterview/",
  },
    {
    text: "前端手写题",
    icon: "book",
    link: "/front",
  },
  // "/businessProblem/",
  {
    text: "前端业务",
    icon: "person-chalkboard",
    link: "/businessProblem/",
  },
   
  {
    text: "个人全栈项目",
    icon: "person-chalkboard",
    link: "https://next-vite-delta.vercel.app/#/home",
  },

  {
    text: "语雀",
    icon: "person-chalkboard",
    link: "https://www.yuque.com/an31742",
  },
])
