---
title: NaN判断.
icon: circle-info
---


```javascript

1.Js 当中0 除以 0的时候是NaN 

      原因：任何数值除以0都会导致错误而终止程序执行。但是在 JavaScript 中，会返回出特殊的值，因此不会影响程序的执行 

2.Js当中1 除以0 的时候是。Infinity   

     原因：比0大的数除以0，则会得到无穷大，所以 js 用 Infinity 来显示出来 

 

Js中判断是否是NaN 

1.通过es6 

Let a=1 

Let b=0/0 

 

Object.is(a,NaN)   //false 

Object.is(b,NaN)   //true 

 

2.通过NaN不等于自身  

 

Function _isNaN(val){ 
  if(val !==val){ 
    return true 

  } 

   return false 

} 

3.通过isNaN判断 不推荐 

function _isNaN(val) { 

    if (typeof(val) === 'number' && isNaN(val)) { 

        return true; 

    } 

    return false; 

}
```
