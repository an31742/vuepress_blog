

## 本质透视镜
**本质是**：通过模拟浏览器行为自动化获取目标数据，实现数据采集与结构化存储。

## 关系拓扑图
目标网站更新→触发爬虫执行→数据清洗→持久化存储→触发数据分析流程

+ 促进因素：定时任务调度
+ 抑制因素：反爬机制（验证码/IP限制）

## 实现步骤拆解器
### 1. 项目初始化
```bash
mkdir web-crawler && cd web-crawler
npm init -y
npm install axios cheerio puppeteer
```

### 2. 基础爬虫实现（带注释）
创建 `<mcfile name="crawler.js" path="./crawler.js"></mcfile>`：

```plain
// 依赖安装：npm install axios cheerio

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * 爬取示例：获取豆瓣电影 Top 10 名称和评分
 */
async function fetchDoubanTop10() {
  try {
    // 1. 请求网页内容
    const response = await axios.get('https://movie.douban.com/top250');
    const html = response.data;

    // 2. 使用 cheerio 加载 HTML，类似于 jQuery 操作
    const $ = cheerio.load(html);

    const movies = [];

    // 3. 选择电影条目 DOM 节点，遍历提取信息
    $('.grid_view li').slice(0, 10).each((index, element) => {
      const title = $(element).find('.title').text().trim(); // 电影名
      const rating = $(element).find('.rating_num').text().trim(); // 评分
      movies.push({ rank: index + 1, title, rating });
    });

    // 4. 输出结果
    console.log('豆瓣电影 Top 10：');
    console.table(movies);
  } catch (error) {
    console.error('爬取失败:', error.message);
  }
}

fetchDoubanTop10();
```

### 3. 高级功能实现（带注释）
```plain
// 新增防反爬机制
const puppeteer = require('puppeteer');

/**
 * 应对动态渲染页面的爬虫
 * @param {string} url - 目标网页URL
 */
async function advancedCrawler(url) {
  let browser;
  try {
    // 启动无头浏览器
    browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox'] 
    });
    
    const page = await browser.newPage();
    
    // 设置视窗尺寸随机化
    await page.setViewport({
      width: 1920 + Math.floor(Math.random() * 100),
      height: 1080 + Math.floor(Math.random() * 100)
    });

    // 导航到目标页面
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // 执行页面内脚本获取数据
    const result = await page.evaluate(() => {
      return {
        pageTitle: document.title,
        content: Array.from(
          document.querySelectorAll('.content')
        ).map(el => el.innerText)
      };
    });

    // 随机滚动模拟人类操作
    await page.evaluate(() => {
      window.scrollTo({
        top: Math.random() * document.body.scrollHeight,
        behavior: 'smooth'
      });
    });

    return result;
  } finally {
    if (browser) await browser.close();
  }
}
```

## 行动意义锚点
**核心价值是**：

1. 为数据分析提供原料（节省80%数据收集时间）
2. 实现竞品监控自动化（每日自动采集对手价格/活动）
3. 建立企业专属知识库（自动聚合行业资讯）

## 避坑指南
❗ 合法合规：遵守robots.txt协议，避免采集个人隐私数据  
❗ 频率控制：单域名请求间隔不低于5秒  
❗ 数据存储：使用限流队列防止数据库过载

## 扩展方案
1. 分布式爬虫：使用Redis实现任务队列
2. 验证码识别：整合OCR服务
3. 增量爬取：基于时间戳过滤历史数据

## 监控指标
```javascript
// 在爬虫函数中添加性能监控
const metrics = {
  requestCount: 0,
  successRate: 0,
  avgResponseTime: 0
};

// 在请求完成后更新指标
metrics.requestCount++;
metrics.avgResponseTime = 
  (metrics.avgResponseTime * (metrics.requestCount - 1) + responseTime) 
  / metrics.requestCount;
```

