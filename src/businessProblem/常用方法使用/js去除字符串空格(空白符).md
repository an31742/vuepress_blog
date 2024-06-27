---
title: js去除字符串空格(空白符)
icon: circle-info
---



使用js去除字符串内所带有空格，有以下三种方法：
**( 1 ) replace正则匹配方法**
去除字符串内所有的空格：str = str.replace(/\s*/g,"");
去除字符串内两头的空格：str = str.replace(/^\s*|\s*$/g,"");
去除字符串内左侧的空格：str = str.replace(/^\s*/,"");
去除字符串内右侧的空格：str = str.replace(/(\s*$)/g,"");
**示例：**
```css
var str = " 6 6 ";
var str_1 = str.replace(/\s*/g,"");
console.log(str_1); //66
```
```css
var str = " 6 6 ";
var str_1 = str.replace(/^\s*|\s*$/g,"");
console.log(str_1); //6 6//输出左右侧均无空格
```
```css
var str = " 6 6 ";
var str_1 = str.replace(/^\s*/,"");
console.log(str_1); //6 6 //输出右侧有空格左侧无空格
```
```css
var str = " 6 6 ";
var str_1 = str.replace(/(\s*$)/g,"");
console.log(str_1); // 6 6//输出左侧有空格右侧无空格
```

**( 2 ) str.trim()方法**
trim()方法是用来删除字符串两端的空白字符并返回，trim方法并不影响原来的字符串本身，它返回的是一个新的字符串。
缺陷：只能去除字符串两端的空格，不能去除中间的空格
**示例：**
```css
var str = " 6 6 ";
var str_1 = str.trim();
console.log(str_1); //6 6//输出左右侧均无空格
```
单独去除左侧空格则使用 str.trimLeft(); //var str_1 = str.trimLeft();
单独去除右侧空格则使用 str.trimRight();//var str_1 = str.trimRight();

