

# **💓 心跳检测模块技术文档（含完整代码）**

  


## **1. 本质透视镜**

  


**本质是「保持用户登录有效，周期性验证 token 是否仍然生效」******

这其实就是：定时调用原生 App 的 token 检查接口，防止用户未操作时被动下线。

* * *

## **2. 功能简介**

  


该模块用于 **Web H5 + iOS/Android 原生 App 混合环境** 中的心跳检测逻辑，通过定时检查 token 有效性，保证用户登录会话不被意外终止。

  


整体功能包括：

-   定时心跳（默认 30 分钟）
-   iOS 与 Android 分平台调用原生校验方法
-   监听用户行为 → 活动就重置心跳
-   token 缺失 → 不启动心跳
-   页面关闭自动清理定时器和监听器

* * *

## **3. 工作机制（关系拓扑图）**

  


**当用户保持登录 → 系统会根据定时器 → 触发心跳 → 原生返回成功 → 正常继续；否则 → 执行登出流程******

  


简化链路：

-   用户操作 → 重置下次心跳时间
-   定时到期 → 调用对应平台 token 校验
-   校验失败 → 自动登出
-   校验成功 → 循环下一次定时

  


关键阈值：

-   **30 分钟无操作** → 执行一次心跳检测

* * *

## **4. 行动价值（行动意义锚点）**

  


**核心价值是「保证用户在 App 中的登录状态持续有效，避免意外掉线」******

-   避免：用户长时间停留在 App，突然被踢出
-   获得：更稳定的会话体验
-   价值对象：前端、原生团队、最终用户

* * *

## **5. 调用流程（步骤拆解器）**

  


### **▶️ 操作路径**

  


#### **① 初始化心跳**

-   从 localStorage 中查找 allUsersObj 获取 token
-   ❗没有 token → 心跳不会启动

  


#### **② 根据平台调用**

-   iOS：通过 WebViewJavascriptBridge 调用 checkToken
-   Android：调用 window.retailer.checkToken()
-   PC 或浏览器：跳过原生心跳

  


#### **③ 设置定时器**

-   每次心跳成功 → 才启动下一轮

  


#### **④ 监听用户行为**

以下动作会重置心跳倒计时：

click | touchstart | scroll | keydown | mousemove

  


#### **⑤ 页面关闭清理**

-   清理定时器
-   移除事件监听

* * *

# **📌 6.**

# **完整代码（已格式化，可直接使用）**

```
startHeartbeatMonitor(ctx) {
  if (typeof window === 'undefined') return;

  const HEARTBEAT_INTERVAL = 30 * 60 * 1000; // 30分钟
  let heartbeatTimer: ReturnType<typeof setTimeout> | null = null;

  const allUsersObj = JSON.parse(localStorage.getItem('allUsersObj') || '[]');
  let token: string = '';

  allUsersObj.forEach((item: any) => {
    if (item.source === 'ZDT') {
      token = item.token;
    }
  });

  if (!token) {
    console.warn('心跳监控未启动：缺少 token');
    return;
  }

  const isAndroid = $AppConfig.userAgent.isAndroid;
  const isIOS = $AppConfig.userAgent.isiOS;

  const checkHeartbeat = async (): Promise<boolean> => {
    if (!token) {
      console.warn('心跳失败：缺少 token');
      this.handleLogout(ctx, '缺少token');
      return false;
    }

    if (isIOS) {
      return new Promise<boolean>((resolve) => {
        this.setupWebViewJavascriptBridge((bridge: any) => {
          try {
            bridge.callHandler('checkToken', { token }, (responseData: any) => {
              console.log('iOS 心跳响应:', responseData);
              if (responseData) {
                console.log('ios心跳成功');
                resolve(true);
              } else {
                console.error('ios心跳失败，即将退出登录');
                this.handleLogout(ctx, '心跳失败');
                resolve(false);
              }
            });
          } catch (error) {
            console.error('调用iOS checkToken方法失败:', error);
            resolve(true);
          }
        });
      });
    } else if (isAndroid) {
      try {
        if (typeof window.retailer?.checkToken === 'function') {
          return new Promise<boolean>((resolve) => {
            try {
              // 调用原生心跳检测方法
              window.retailer.checkToken();
              console.log('Android 心跳请求已发送');
              resolve(true);
            } catch (error) {
              console.error('调用Android checkToken方法失败:', error);
              resolve(true);
            }
          });
        } else {
          console.warn('Android平台缺少checkToken方法');
          return true;
        }
      } catch (error) {
        console.error('Android心跳检测过程出错:', error);
        return true;
      }
    } else {
      // 非移动端环境跳过心跳检查
      return true;
    }
  };

  const resetTimer = async () => {
    if (heartbeatTimer) {
      clearTimeout(heartbeatTimer);
    }

    // 执行心跳检测
    const success = await checkHeartbeat();

    // 只有心跳成功才继续下一次定时
    if (success) {
      heartbeatTimer = setTimeout(resetTimer, HEARTBEAT_INTERVAL);
    }
  };

  // 绑定用户行为事件 - 用户活动时重置定时器
  const userActivityHandler = () => {
    if (heartbeatTimer) {
      clearTimeout(heartbeatTimer);
      heartbeatTimer = setTimeout(resetTimer, HEARTBEAT_INTERVAL);
    }
  };

  const events = ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'];
  events.forEach((event) => {
    document.addEventListener(event, userActivityHandler, { passive: true });
  });

  // 启动首次定时器
  heartbeatTimer = setTimeout(resetTimer, HEARTBEAT_INTERVAL);

  // 清理
  window.addEventListener('beforeunload', () => {
    if (heartbeatTimer) {
      clearTimeout(heartbeatTimer);
    }
    events.forEach((event) => {
      document.removeEventListener(event, userActivityHandler);
    });
  });
}
```

* * *

## **7. 常见问题（FAQ）**

| **问题**                       | **说明**                           |
| ---------------------------- | -------------------------------- |
| 为什么心跳不立即执行？                  | 第一次心跳会在 **30 分钟后** 执行（用户不操作时触发）。 |
| iOS 回调 false 会怎样？            | 立即调用 handleLogout。               |
| Android 没有 checkToken 方法怎么办？ | 属于兼容情况，跳过本次心跳不会影响继续使用。           |
| token 为空？                    | 不启动心跳，避免无意义请求。                   |

* * *

## **8. 总结**

  


这套心跳方案重点在于 **安全 + 稳定 + 兼容**：

-   iOS/Android 双端适配
-   用户行为自动延长有效期
-   异常情况都允许 fail-safe（不崩溃、不报错）

  


能够让 H5 在 App 内拥有更稳定的登录体验。

* * *



  


