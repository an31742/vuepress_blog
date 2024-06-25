---
title: Day.js 常用方法
icon: circle-info
---

###### 前言
- Day.js 是代替修改本地Date.prototype，Day.js对Date对象进行了封装，只需要调用Dayjs()即可。
- 相对moment.js而已，day.js的体积更小，只有2KB左右；moment.min.js 有16.7KB。
- 对应普通项目来说，对应时间的操作就只有那么几个（格式化、查询、计算），这些基于Day.js完全足够。并且Day.js的文档相对简单、清晰！

[该文章对比之前的moment.js的文章](https://blog.csdn.net/halo1416/article/details/83620022)
[Day.js官方文档](https://dayjs.fenxianglu.cn/category/#node-js)

**当前文章很多实例是以当前时间来处理的， 当前时间为：2022-04-20**

###### 1. 初始化日期 / 时间
```
dayjs().format('YYYY-MM-DD');		    // 初始化日期
dayjs().format('YYYY-MM-DD HH:mm:ss');  // 初始化日期时间

```
###### 2. 格式化日期 / 时间
```
dayjs(value).format('YYYY-MM-DD');			// 初始化日期
dayjs(value).format('YYYY-MM-DD HH:mm:ss'); // 初始化日期时间

```
###### 3. 加 / 减
dayjs().add / dayjs().subtract 代表在当前时间上去加减；
dayjs(value).add / dayjs(value).subtract 代表在指定时间（value）上去加减；
```
dayjs().add(7, 'day').format('YYYY-MM-DD');   // 2022-04-27 今天（2022-04-20）加上7天
dayjs().add(1, 'month').format('YYYY-MM-DD');   // 2022-05-20 今天（2022-04-20）加上一月

dayjs().subtract(2, 'year').format('YYYY-MM-DD');   // 2020-05-20 今天（2022-04-20）减去2年
dayjs().subtract(2, 'hour').format('YYYY-MM-DD HH:mm:ss');   // 2022-04-20 14:03:39 今天现在（2022-04-20 16:03:39）减去2小时

```
**所有可用单位列表：**

| **单位** | **缩写** | **描述** |
| --- | --- | --- |
| week | w | 周 |
| day | d | 星期(星期日0，星期六6) |
| month | M | 月份(0-11) |
| year | y | 年 |
| hour | h | 小时 |
| minute | m | 分钟 |
| second | s | 秒 |
| millisecond | ms | 毫秒 |

###### 4. 获取某年某月的第一天或最后一天
**获取某年某月的第一天**：
```
dayjs().startOf('year').format('YYYY-MM-DD HH:mm:ss')   // 2022-01-01 00:00:00  => 第一天格式化出来的时分秒都是0
dayjs().startOf('month').format('YYYY-MM-DD')   // 2022-04-01

```
**获取某年某月的最后一天**：
```
dayjs().endOf('year').format('YYYY-MM-DD HH:mm:ss')   // 2022-12-31 23:59:59  => 最后时间 格式化出来的时分秒是23:59:59
dayjs().endOf('month').format('YYYY-MM-DD')   // 2022-04-30

```
###### 5. 获取星期几
dayjs().day() : 返回0(星期日)到6(星期六)的数字
设置时也只能接受 0-6 的数字：
dayjs().day(6).format('YYYY-MM-DD')：获取最近周六的日期 => 2022-04-23
dayjs().day(0).format('YYYY-MM-DD')：获取最近周日的日期 => 2022-04-17
###### 6. 获取毫秒数
dayjs('2019-01-25').valueOf() 或 dayjs().valueOf()
###### 7. 获取时间差（默认输出的差值单位是毫秒）
```
dayjs('2019-01-25').diff('2018-06-05', 'month');         // 7
dayjs('2019-01-25').diff(dayjs('2018-06-05'), 'month');  // 7

```
**所有可用输出单位列表：**

| **单位** | **缩写** | **描述** |
| --- | --- | --- |
| week | w | 周 |
| day | d | 星期(星期日0，星期六6) |
| month | M | 月份(0-11) |
| year | y | 年 |
| hour | h | 小时 |
| minute | m | 分钟 |
| second | s | 秒 |
| millisecond | ms | 毫秒（默认输出单位） |

###### 8. 获取时、分、秒
当前时间：**2022-04-20 16:55:55** ；
以下大部分方法都会往前溢出；如毫秒超过999，将持续到秒；秒超过59，将持续到分，这边情况在设置时特别突出！
```
console.log('-----获取年', dayjs().year());    // ==>> 2022
    console.log('-----获取月', dayjs().month());   // 0到11的数字 ==>> 3
    console.log('-----获取星期', dayjs().day());   // 0(星期日)到6(星期六)的数字 ==>> 3
    console.log('-----获取天', dayjs().date());    // 1到31的数字 ==>> 20
    console.log('-----获取小时', dayjs().hour());  // 0到23的数字 ==>> 16
    console.log('-----获取分钟', dayjs().minute());// 0到59的数字 ==>> 55
    console.log('-----获取秒', dayjs().second());  // 0到59的数字 ==>> 55
    console.log('-----获取毫秒', dayjs().millisecond());  // 0到999的数字 ==>> 333
```
###### 9. 将毫秒转为时分秒
```
// 下面毫秒数代表：2022-04-20 17:43:20
const timestr = 1650447800731;   // 毫秒值必须是number类型，如果是string，结果可能和你想的不一样
console.log('将毫秒转为年-月-日 时:分:秒', dayjs(timestr).format('YYYY-MM-DD HH:mm:ss'));
console.log('获取年', dayjs(timestr).year()); // 
console.log('获取月', dayjs(timestr).month());
console.log('获取天', dayjs(timestr).date());
console.log('获取时', dayjs(timestr).hour());
console.log('获取分', dayjs(timestr).minute());


```
注意：这里 year()、month()、date()、hour()、minute()、second()、millisecond() 等方法均可使用
###### 10. 判断一个日期是否在另外一个日期之后 isAfter
```
// day.js 为 2022-04-20
console.log('isAfter', dayjs().isAfter(dayjs('2011-01-01'))) 			 	// true
console.log('isAfter', dayjs('2022-04-20').isAfter(dayjs('2022-04-21')))	// false
console.log('isAfter', dayjs('2022-04-20').isAfter(dayjs('2022-04-20')))	// 相同也为false


```
###### 11. 判断一个日期是否在另外一个日期之前 isBefore
```
// day.js 为 2022-04-20
console.log('isBefore', dayjs().isBefore(dayjs('2011-01-01')))             // false
console.log('isBefore', dayjs('2022-04-20').isBefore(dayjs('2022-04-21'))) // true
console.log('isBefore', dayjs('2022-04-20').isBefore(dayjs('2022-04-20'))) // 日期相同时也为false

```
###### 12. 判断两个日期是否相同 isSame
```
// day.js 为 2022-04-20
console.log('isSame', dayjs().isSame(dayjs('2011-01-01')))  			// false
console.log('isSame', dayjs('2022-04-20').isSame(dayjs('2022-04-21')))	// false
console.log('isSame', dayjs('2022-04-20').isSame(dayjs('2022-04-20')))	// true

```
###### 13. 判断一个日期是否在两个日期之间 isBetween
**注意:**
此功能依赖IsBetween插件
此处也将演示如何使用 Day.js 的插件
```
import dayjs from 'dayjs'	// 引入dayjs
import isBetween from 'dayjs/plugin/isBetween'	// 引入相关插件

created() {
   dayjs.extend(isBetween); // 挂载插件
   // 使用插件
   console.log('isBetween', dayjs('2010-10-20').isBetween('2010-10-19', dayjs('2010-10-25')) )
}

```
**Day.js 里面有 相同或之前 IsSameOrBefore 和 相同或之后 IsSameOrAfter的方法，可根据实际需求取用，但这两个方法需要依赖相应的插件！**
**注意：**
isAfter、isBefore、isSame、IsBetween 默认都是通过将日期转为milliseconds去比较的，所以这两个方法有第二个参数。即指定比较的粒度
console.log('isBefore', dayjs('2022-04-20').isBefore('2015-01-01', 'year'))
所有可用单位列表：

| **单位** | **缩写** | **描述** |
| --- | --- | --- |
| date | D | 天00:00 |
| day | d | 星期00:00 |
| month | M | 月第一天00:00 |
| year | y | 1月1日00点 |
| week | w | 周第一天00:00 |
| isoWeek |  | 周(ISO) |
| hour | h | 小时 00:00:00 |
| minute | m | 分钟 00:00 |
| second | s | 秒 00 |
| millisecond | ms | 毫秒（默认比较单位）0 |

更多详细用法请参阅 [官方文档](https://dayjs.fenxianglu.cn/category/#node-js)
