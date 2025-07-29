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
  // --- AUTO-DAILY-REPORT-START ---
  
  {
    text: '个人全栈项目',
    
  },
  // --- AUTO-DAILY-REPORT-END ---
  {
    text: "即刻",
    icon: "person-chalkboard",
    link: "https://web.okjike.com/me",
  },
  // "/demo/",
])
