---
title: Next.js 缓存机制解析：unstable_cache vs revalidate
icon: circle-info
---

## **1️⃣**** 本质透视镜：是什么？**
  


**本质是**：Next.js 中两种不同层级的缓存控制机制，分别用于

→ unstable_cache: **函数级缓存**

→ revalidate: **路由级 ISR 缓存控制**
  


这其实就是：**执行层 vs 构建层的缓存粒度控制工具**。

---

## **2️⃣**** 关系拓扑图：为什么存在？**
```plain
getStaticProps → HTML + JSON 生成 → 缓存（基于 revalidate）  
                               ↑  
                      请求触发 ISR 判断

fetch/DB 调用 → 使用 unstable_cache → 结果缓存 → 减少 I/O 开销
```

+ revalidate: 控制 **页面级生成的 HTML/JSON 缓存刷新时间**
+ unstable_cache: 控制 **某个函数（如 API/fetch）在构建/请求时缓存调用结果**



### **⚠️**** 关键区别：**
| **特性** | revalidate | unstable_cache |
| --- | --- | --- |
| 缓存粒度 | 页面（route） | 函数（业务逻辑） |
| 触发时机 | 请求到达时 | 函数执行时 |
| 配置位置 | 页面文件（generateStaticParams、revalidate） | 函数包装器 |
| 数据类型 | 静态内容（HTML/JSON） | 任意数据（fetch, db, etc） |
| 缓存位置 | Edge / CDN 层 | Edge + Memory 层 |


---

## **3️⃣**** 行动意义锚点：为什么要用？**


**核心价值是：**

精准缓存控制，**提升性能 & 减少冷启动开销**

| **如果不做缓存** | **如果正确使用缓存** |
| --- | --- |
| SSR/动态请求压力大 | 减少重复数据库调用 |
| 用户每次访问都触发 API 调用 | 重用缓存内容，TTFB 降低 |
| 无法预估缓存时效性 | 精准控制某段逻辑缓存时间 |


✅ **业务绑定示例：**

  


<font style="color:#0e0e0e;">在电商首页中，某个数据（如 banner 或库存）每 10 秒更新一次，用 </font><font style="color:#0e0e0e;">unstable_cache(fn, [key], { revalidate: 10 })</font><font style="color:#0e0e0e;"> 包裹 fetch，避免重复 DB 读取</font>

---

## **4️⃣**** 步骤拆解器：怎么做？**
### **✅**** revalidate实战（路由级缓存）**
操作路径：

① 在页面中添加 export const revalidate = 60

→ 页面静态构建后，每 60s 触发一次再生成

```plain
// app/products/page.tsx
export const revalidate = 60;

export default async function ProductsPage() {
  const res = await fetch('https://api.example.com/products');
  const data = await res.json();
  return <ProductList data={data} />;
}
```

❗注意：

+ 页面将生成静态 HTML 和 JSON，60 秒之后重新构建
+ 浏览器和 CDN 层依旧命中缓存

---

### **✅**** unstable_cache 实战（函数级缓存）**
操作路径：

① 将目标函数（如 fetch、DB 查询）用 unstable_cache 包裹

② 设置自定义缓存 key 和失效时间

```plain
import { unstable_cache } from 'next/cache';

const getProducts = unstable_cache(
  async () => {
    const res = await fetch('https://api.example.com/products');
    return res.json();
  },
  ['products'], // 缓存 key
  { revalidate: 10 } // 秒级缓存
);

export default async function Page() {
  const products = await getProducts();
  return <ProductList data={products} />;
}
```

❗避坑提示：

| **避坑点** | **建议** |
| --- | --- |
| unstable_cache 不能包裹组件 | 只能包裹纯函数 |
| key 相同则共用缓存 | 注意动态参数作为 key |
| 和 revalidate 配合使用时，以更短周期为主 | 优先考虑函数级缓存提升性能 |


---

## **🔬**** 实战对比总结**
| **场景** | **推荐使用** |
| --- | --- |
| 缓存整页静态内容（如资讯页） | revalidate |
| 缓存某个数据库查询结果 | unstable_cache |
| 多页面复用同一个数据 | unstable_cache（可跨组件） |
| 无需缓存（实时数据） | SSR/ISR，不加缓存配置 |


---

## **🧠**** 延伸思考：什么时候两者一起用？**
  


在以下场景中，可组合使用：

```plain
export const revalidate = 300; // 整页缓存 5 分钟

const getStock = unstable_cache(fetchStock, ['stock'], { revalidate: 60 }); // 每分钟刷新库存

export default async function Page() {
  const stock = await getStock();
  return <div>当前库存：{stock}</div>;
}
```

🎯效果：

+ 页面每 5 分钟重新构建
+ 但库存数据每分钟更新，避免缓存陈旧

---

## **✅**** 总结一句话：**
  


<font style="color:#0e0e0e;">revalidate 控页面缓存时间，unstable_cache 控函数缓存时间，</font>**<font style="color:#0e0e0e;">两者组合使用可实现多层缓存优化</font>**

