import { navbar } from "vuepress-theme-hope";

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
    text: '30天学习计划日报',
    link: '/30days-advanced-frontend/daily-reports/', // 指向日报目录的 README 或索引页
  },
  {
    text: "即刻",
    icon: "person-chalkboard",
    link: "https://web.okjike.com/me",
  },
  // "/demo/",
]);
