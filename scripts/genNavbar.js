import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reportsDir = path.join(__dirname, '../docs/30days-advanced-frontend/daily-reports');
const navbarFile = path.join(__dirname, '../src/.vuepress/navbar.ts');

// 读取日报文件
const files = fs.existsSync(reportsDir)
  ? fs.readdirSync(reportsDir)
      .filter(f => /^day-\d+\.md$/.test(f))
      .sort((a, b) => {
        const na = parseInt(a.match(/\d+/)[0]);
        const nb = parseInt(b.match(/\d+/)[0]);
        return na - nb;
      })
  : [];

// 生成子菜单字符串
const children = files.map(f => {
  const day = f.match(/\d+/)[0];
  return `{ text: 'Day ${day}', link: '/30days-advanced-frontend/daily-reports/day-${day}' }`;
}).join(',\n      ');

// 生成要插入的内容
const reportMenu = `
  {
    text: '30天学习计划日报',
    children: [
      ${children}
    ]
  },`;

// 读取原navbar
let navbarSource = fs.readFileSync(navbarFile, 'utf8');

// 用正则替换AUTO-DAILY-REPORT区域
navbarSource = navbarSource.replace(
  /(\/\/ --- AUTO-DAILY-REPORT-START ---)[\s\S]*?(\/\/ --- AUTO-DAILY-REPORT-END ---)/,
  `$1\n  ${reportMenu}\n  $2`
);

// 写回
fs.writeFileSync(navbarFile, navbarSource);
console.log('✅ navbar.ts 已自动注入日报菜单且保留原有导航');