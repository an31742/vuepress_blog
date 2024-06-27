---
title: JS对于字符串的切割截取
icon: circle-info
---



对于字符串的切割截取平时所用可能不是特别多，而且分的比较细，所以自备自查。有备无患。
由于之前所有均在一个demo测试，若是哪里打错了，敬请谅解。一些其余属性找时间继续添加。
1.函数：split()
功能：使用一个指定的分隔符把一个字符串分割存储到数组
```javascript
例子： str=”jpg|bmp|gif|ico|png”; arr=str.split(”|”);
//arr是一个包含字符值”jpg”、”bmp”、”gif”、”ico”和”png”的数组
```

2.函数：join()
功能：使用您选择的分隔符将一个数组合并为一个字符串
```javascript
例子： var delimitedString=myArray.join(delimiter);
var myList=new Array(”jpg”,”bmp”,”gif”,”ico”,”png”);
var portableList=myList.join(”|”);
//结果是jpg|bmp|gif|ico|png
```

3.函数:concat（）
功能：将两个数组连接在一起；
```javascript
例子：arr1=[1,2,3,4]
arr2=[5,6,7,8]
alert(arr1.concat(arr2))  //结果为[1,2,3,4,5,6,7,8]
```

4.函数:charAt()
功能：返回指定位置的字符。字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
```javascript
例子:var str='a,g,i,d,o,v,w,d,k,p'
alert(str.charAt(2))  //结果为g
```

5:函数:charCodeAt()
功能：charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。
```javascript
例子：var str='a,g,i,d,o,v,w,d,k,p'
alert(str.charCodeAt(2))  //结果为103。即g的Unicode编码为103
```

6.函数:slice()
功能：arrayObject.slice(start,end)
start:必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
end:可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
返回一个新的数组，包含从start到end（不包括该元素）的arrayobject中的元素。
```javascript
例子：var str='ahji3o3s4e6p8a0sdewqdasj'
alert(str.slice(2,5))   //结果ji3
```


7.函数:substring()
定义和用法 substring 方法用于提取字符串中介于两个指定下标之间的字符。
语法 stringObject.substring(start,stop)
start 必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。
stop 可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。
如果省略该参数，那么返回的子串会一直到字符串的结尾。
返回 一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。 说明 substring 方法返回的子串包括 start 处的字符，但不包括 end 处的字符。 如果 start 与 end 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。 如果 start 比 end 大，那么该方法在提取子串之前会先交换这两个参数。 如果 start 或 end 为负数，那么它将被替换为 0。
```javascript
例子:var str='ahji3o3s4e6p8a0sdewqdasj'
alert(str.substring(2,6))   //结果为ji3o
```


8.函数:substr
定义和用法 substr 方法用于返回一个从指定位置开始的指定长度的子字符串。
语法 stringObject.substr(start [, length ])
参数  start 必需。所需的子字符串的起始位置。字符串中的第一个字符的索引为 0。
length 可选。在返回的子字符串中应包括的字符个数。 说明 如果 length 为 0 或负数，将返回一个空字符串。 如果没有指定该参数，则子字符串将延续到stringObject的最后。
```javascript
例： var str = "0123456789";
alert(str.substring(0));------------"0123456789"
alert(str.substring(5));------------"56789"
alert(str.substring(10));-----------""
alert(str.substring(12));-----------""
alert(str.substring(-5));-----------"0123456789"
alert(str.substring(-10));----------"0123456789"
alert(str.substring(-12));----------"0123456789"
alert(str.substring(0,5));----------"01234"
alert(str.substring(0,10));---------"0123456789"
alert(str.substring(0,12));---------"0123456789"
alert(str.substring(2,0));----------"01"
alert(str.substring(2,2));----------""
alert(str.substring(2,5));----------"234"
alert(str.substring(2,12));---------"23456789"
alert(str.substring(2,-2));---------"01"
alert(str.substring(-1,5));---------"01234"
alert(str.substring(-1,-5));--------""
```
