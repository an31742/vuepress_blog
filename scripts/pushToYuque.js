import fs from "fs"
import path from "path"
import fetch from "node-fetch"

const yuqueToken = process.env.YUQUE_TOKEN // 从GitHub Secrets注入
const userNamespace = "an31742"
const repoSlug = "30tianqianduanjinjie" // 知识库 slug 推荐全英文数字，无空格
const repoTitle = "30天前端进阶"
const reportsDir = path.join(process.cwd(), "docs/30days-advanced-frontend/daily-reports")

// 创建知识库（如不存在）
async function createRepoIfNotExist() {
  // 查询知识库列表
  const res = await fetch(`https://www.yuque.com/api/v2/users/${userNamespace}/repos`, {
    headers: { "X-Auth-Token": yuqueToken },
  })
  const data = await res.json()
  const exists = data.data.some((repo) => repo.slug === repoSlug)
  if (exists) {
    console.log("知识库已存在")
    return true
  }
  // 创建知识库
  const cr = await fetch("https://www.yuque.com/api/v2/repos", {
    method: "POST",
    headers: {
      "X-Auth-Token": yuqueToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: repoTitle,
      slug: repoSlug,
      description: "由GitHub自动同步生成",
      public: 0,
      type: "Book",
    }),
  })
  if (cr.ok) {
    console.log("知识库创建成功")
    return true
  } else {
    console.error("知识库创建失败", await cr.text())
    return false
  }
}

// 同步日报
async function pushDailyReports() {
  if (!fs.existsSync(reportsDir)) {
    console.log("日报目录不存在：", reportsDir)
    return
  }
  const files = fs.readdirSync(reportsDir).filter((f) => /^day-\d+\.md$/.test(f))
  for (let f of files) {
    const day = f.replace(".md", "")
    const md = fs.readFileSync(path.join(reportsDir, f), "utf8")
    // 尝试创建文档
    const res = await fetch(`https://www.yuque.com/api/v2/repos/${userNamespace}/${repoSlug}/docs`, {
      method: "POST",
      headers: {
        "X-Auth-Token": yuqueToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: day,
        slug: day,
        format: "markdown",
        body: md,
      }),
    })
    if (res.status === 409) {
      // 已存在则更新
      await fetch(`https://www.yuque.com/api/v2/repos/${userNamespace}/${repoSlug}/docs/${day}`, {
        method: "PUT",
        headers: {
          "X-Auth-Token": yuqueToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: day,
          format: "markdown",
          body: md,
        }),
      })
      console.log(`已更新：${day}`)
    } else if (res.ok) {
      console.log(`已新建：${day}`)
    } else {
      const msg = await res.text()
      console.error(`同步失败：${day}，原因：${msg}`)
    }
  }
}

// 主流程
;(async () => {
  await createRepoIfNotExist()
  await pushDailyReports()
})()
console.log("因为没有token需要300块钱的超级会员暂时不同步语雀")
