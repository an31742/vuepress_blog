import { navbar } from "vuepress-theme-hope"

export default navbar([
  // "/",
  "/portfolio",
  "/frontEndInterview/",
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
  // --- AUTO-DAILY-REPORT-END ---
  {
    text: "语雀",
    icon: "person-chalkboard",
    link: "https://www.yuque.com/an31742",
  },
])
