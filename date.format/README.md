# 时间格式化
**说明**：
对date.format.js插件做了修改；新增计算两个时间相差年数，月数，天数；对时间格式化新添加有中文月份和星期
 ##  使用
 ###  时间格式化
 ```
 var date1=new Date(1480750309000).format("yyyy-cm-d h:M:ss");
 ```
 **.format()参数说明**：
- yyyy&nbsp;&nbsp;&nbsp;&nbsp;年
- yy&nbsp;&nbsp;&nbsp;&nbsp;两位数显示年
- m&nbsp;&nbsp;&nbsp;&nbsp;月
- mm&nbsp;&nbsp;&nbsp;&nbsp;两位数显示月
- mmm&nbsp;&nbsp;&nbsp;&nbsp;简写英文月
- mmmm&nbsp;&nbsp;&nbsp;&nbsp;全写英文月
- cm&nbsp;&nbsp;&nbsp;&nbsp;中文月
- d&nbsp;&nbsp;&nbsp;&nbsp;天
- dd&nbsp;&nbsp;&nbsp;&nbsp;两位数显示天
- ddd&nbsp;&nbsp;&nbsp;&nbsp;简写英文显示周
- dddd&nbsp;&nbsp;&nbsp;&nbsp;全写英文周
- cd&nbsp;&nbsp;&nbsp;&nbsp;中文周
- h&nbsp;&nbsp;&nbsp;&nbsp;时（12）
- H&nbsp;&nbsp;&nbsp;&nbsp;时（24）
- m&nbsp;&nbsp;&nbsp;&nbsp;分
- mm&nbsp;&nbsp;&nbsp;&nbsp;分
- s&nbsp;&nbsp;&nbsp;&nbsp;秒
- ss秒
- t &nbsp;&nbsp;&nbsp;&nbsp;"a"  : "p"
- tt &nbsp;&nbsp;&nbsp;&nbsp;"am" : "pm"
- T &nbsp;&nbsp;&nbsp;&nbsp;"A"  : "P"
- TT&nbsp;&nbsp;&nbsp;&nbsp;"AM" : "PM",
  ### 计算日期
```
var date=new Date().calculate("d",'2013-02-26','2016-02-26');
```
 **.calculate()参数说明**：
后两个参数为时间，最后一个不传，默认为当前时间；参数可以为时间戳
第一个参数为返回类型
- y&nbsp;&nbsp;&nbsp;&nbsp;返回两个时间相差年（此值为估值）
- m&nbsp;&nbsp;&nbsp;&nbsp;相差月份
- d&nbsp;&nbsp;&nbsp;&nbsp;相差天数
