---
title: 从零手写一个微前端沙箱：对标 Qiankun 的完整实现与原理解析
icon: circle-info
---

## <font style="color:rgb(0, 0, 0);">🧠</font><font style="color:rgb(0, 0, 0);"> 本质透视镜</font>
**<font style="color:rgb(0, 0, 0);">微前端沙箱本质是</font>**<font style="color:rgb(0, 0, 0);">：在主应用中运行多个子应用时，通过技术手段实现资源隔离、状态隔离和通信解耦。</font>

---

## <font style="color:rgb(0, 0, 0);">🧩</font><font style="color:rgb(0, 0, 0);"> 关系拓扑图：Qiankun vs 手写实现</font>
| <font style="color:rgb(0, 0, 0);">维度</font> | <font style="color:rgb(0, 0, 0);">Qiankun 实现</font> | <font style="color:rgb(0, 0, 0);">手写实现</font> |
| --- | --- | --- |
| <font style="color:rgb(0, 0, 0);">沙箱机制</font> | <font style="color:rgb(0, 0, 0);">Proxy + snapshot + 单例</font> | <font style="color:rgb(0, 0, 0);">Proxy + custom global + iframe 隔离</font> |
| <font style="color:rgb(0, 0, 0);">样式隔离</font> | <font style="color:rgb(0, 0, 0);">Shadow DOM + Scoped CSS + strictMode</font> | <font style="color:rgb(0, 0, 0);">CSS Scope 前缀/iframe 完全隔离</font> |
| <font style="color:rgb(0, 0, 0);">生命周期管理</font> | <font style="color:rgb(0, 0, 0);">注册 registerMicroApp，自动绑定钩子</font> | <font style="color:rgb(0, 0, 0);">手动 mount/unmount 注册钩子</font> |
| <font style="color:rgb(0, 0, 0);">子应用加载方式</font> | <font style="color:rgb(0, 0, 0);">HTML entry + import-html-entry</font> | <font style="color:rgb(0, 0, 0);">import-map 动态加载或 iframe</font> |
| <font style="color:rgb(0, 0, 0);">通信机制</font> | <font style="color:rgb(0, 0, 0);">自定义事件 + 全局状态管理</font> | <font style="color:rgb(0, 0, 0);">postMessage + 双向通道</font> |


---

## <font style="color:rgb(0, 0, 0);">🎯</font><font style="color:rgb(0, 0, 0);"> 行动意义锚点</font>
**<font style="color:rgb(0, 0, 0);">核心价值是</font>**<font style="color:rgb(0, 0, 0);">：</font>

<font style="color:rgb(0, 0, 0);">避免主子应用间全局污染、样式冲突、状态互串，为多团队协作开发提供安全执行环境。</font>

<font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 获得：灵活、可控的微前端架构  
</font><font style="color:rgb(0, 0, 0);">❌</font><font style="color:rgb(0, 0, 0);"> 避免：运行时污染、样式混乱、状态错误等问题</font>

---

## <font style="color:rgb(0, 0, 0);">🔧</font><font style="color:rgb(0, 0, 0);"> 步骤拆解器：核心模块拆解与 Qiankun 对比</font>
### <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 1. 全局对象隔离（Proxy 实现）</font>
**<font style="color:rgb(0, 0, 0);">手写实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
export class Sandbox {
  private fakeWindow: any = Object.create(null)
  private proxy: WindowProxy

  constructor() {
    const rawWindow = window
    this.proxy = new Proxy(this.fakeWindow, {
      get: (target, key) => (key in target ? target[key] : rawWindow[key]),
      set: (target, key, value) => (target[key] = value, true),
    })
  }

  getProxy() {
    return this.proxy
  }

  clear() {
    Object.keys(this.fakeWindow).forEach(k => delete this.fakeWindow[k])
  }
}
```

**<font style="color:rgb(0, 0, 0);">Qiankun 实现</font>**<font style="color:rgb(0, 0, 0);">（简化）：</font>

```plain
const sandbox = new Proxy(window, {
  get(target, key) {
    return fakeWindow[key] || window[key];
  },
  set(target, key, value) {
    fakeWindow[key] = value
    return true
  }
})
```

<font style="color:rgb(0, 0, 0);">📌</font><font style="color:rgb(0, 0, 0);"> 区别：Qiankun 还引入快照机制 snapshot，记录状态以实现切换恢复。</font>

---

### <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 2. 样式隔离机制（CSS Scope）</font>
**<font style="color:rgb(0, 0, 0);">手写实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
export function scopeCSS(css: string, scopeId: string): string {
  return css.replace(/([^{]+){/g, (selector) => {
    const scopedSelector = selector
      .split(',')
      .map(s => `#${scopeId} ${s.trim()}`)
      .join(', ')
    return `${scopedSelector} {`
  })
}
```

**<font style="color:rgb(0, 0, 0);">Qiankun 实现</font>**<font style="color:rgb(0, 0, 0);">（strictStyleIsolation）：</font>

```plain
// 使用 shadowRoot + adoptedStyleSheets 实现样式沙箱
const shadow = container.attachShadow({ mode: 'open' })
shadow.appendChild(appContent)
```

<font style="color:rgb(0, 0, 0);">📌</font><font style="color:rgb(0, 0, 0);"> 区别：Qiankun 提供三种模式，默认 legacy，strict 使用 ShadowDOM，性能更优。</font>

---

### <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 3. 子应用资源加载</font>
**<font style="color:rgb(0, 0, 0);">手写实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
export async function loadMicroApp(appUrl: string) {
  const html = await fetch(appUrl).then(res => res.text())
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const scriptUrls = Array.from(doc.querySelectorAll('script[src]')).map(s => s.src)
  const scripts = await Promise.all(scriptUrls.map(url => fetch(url).then(res => res.text())))
  const sandbox = new Sandbox()
  scripts.forEach(script => {
    const fn = new Function('window', script)
    fn(sandbox.getProxy())
  })
}
```

**<font style="color:rgb(0, 0, 0);">Qiankun 实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
// 使用 import-html-entry 解析 HTML 并注入 DOM、script
import { importEntry } from 'import-html-entry'
const { template, execScripts } = await importEntry(entryUrl)
const appContent = template
const appExports = await execScripts()
```

<font style="color:rgb(0, 0, 0);">📌</font><font style="color:rgb(0, 0, 0);"> 区别：Qiankun 抽象了 HTML 解构、script 解耦，适配性更强。</font>

---

### <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 4. 通信机制：postMessage 通道</font>
**<font style="color:rgb(0, 0, 0);">手写实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
export class SandboxMessenger {
  constructor(private channelName: string) {}
  send(message: any) {
    window.parent.postMessage({ from: this.channelName, ...message }, '*')
  }
  listen(handler: (msg: any) => void) {
    window.addEventListener('message', (e) => {
      if (e.data.from !== this.channelName) handler(e.data)
    })
  }
}
```

**<font style="color:rgb(0, 0, 0);">Qiankun 实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
const { onGlobalStateChange, setGlobalState } = initGlobalState({ user: 'admin' })
onGlobalStateChange((val, prev) => console.log(val))
setGlobalState({ user: 'test' })
```

<font style="color:rgb(0, 0, 0);">📌</font><font style="color:rgb(0, 0, 0);"> 区别：Qiankun 提供统一 API，支持订阅/广播，全局状态共享。</font>

---

### <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 5. 生命周期管理</font>
**<font style="color:rgb(0, 0, 0);">手写实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
export interface MicroApp {
  name: string
  mount: (el: HTMLElement) => void
  unmount: () => void
}

export const apps: Record<string, MicroApp> = {}

export function registerApp(app: MicroApp) {
  apps[app.name] = app
}
```

**<font style="color:rgb(0, 0, 0);">Qiankun 实现</font>**<font style="color:rgb(0, 0, 0);">：</font>

```plain
registerMicroApps([
  {
    name: 'app1',
    entry: '//localhost:7100',
    container: '#subapp-viewport',
    activeRule: '/app1',
  },
])
```

<font style="color:rgb(0, 0, 0);">📌</font><font style="color:rgb(0, 0, 0);"> 区别：Qiankun 自动处理路径匹配、容器注入、激活时机。</font>

---

## <font style="color:rgb(0, 0, 0);">🖼</font><font style="color:rgb(0, 0, 0);"> 架构图 & 样例结构</font>
```plain
main-app/
  |- index.html
  |- sandbox/
       |- sandbox.ts
       |- scoped-style.ts
       |- messaging.ts
  |- micro-apps/
       |- app1/
           |- index.html
           |- main.js
```

---

## <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 总结</font>
| <font style="color:rgb(0, 0, 0);">能力点</font> | <font style="color:rgb(0, 0, 0);">Qiankun</font> | <font style="color:rgb(0, 0, 0);">手写沙箱</font> |
| --- | --- | --- |
| <font style="color:rgb(0, 0, 0);">自动 HTML 解析</font> | <font style="color:rgb(0, 0, 0);">✅</font> | <font style="color:rgb(0, 0, 0);">❌</font><font style="color:rgb(0, 0, 0);">（需手动）</font> |
| <font style="color:rgb(0, 0, 0);">生命周期钩子</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 自动钩子绑定</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 手动实现</font> |
| <font style="color:rgb(0, 0, 0);">样式隔离</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 三种模式支持</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> Scope 前缀/iframe</font> |
| <font style="color:rgb(0, 0, 0);">状态通信</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 全局状态管理</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> postMessage 通道</font> |
| <font style="color:rgb(0, 0, 0);">iframe 隔离</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 支持</font> | <font style="color:rgb(0, 0, 0);">✅</font><font style="color:rgb(0, 0, 0);"> 支持</font> |


---

## <font style="color:rgb(0, 0, 0);">📘</font><font style="color:rgb(0, 0, 0);"> 延伸阅读与参考</font>
+ [<font style="color:rgb(0, 0, 0);">qiankun GitHub</font>](https://github.com/umijs/qiankun)
+ [<font style="color:rgb(0, 0, 0);">import-html-entry 源码</font>](https://github.com/kuitos/import-html-entry)
+ [<font style="color:rgb(0, 0, 0);">single-spa 原理</font>](https://single-spa.js.org/docs/getting-started-overview)
+ [<font style="color:rgb(0, 0, 0);">Micro Frontends 设计指南</font>](https://micro-frontends.org/)

---

<font style="color:rgb(0, 0, 0);">如果你对完整项目结构、配套 demo 或部署策略有兴趣，也可以留言，我将提供一套完整的运行环境以及性能优化建议。</font>

