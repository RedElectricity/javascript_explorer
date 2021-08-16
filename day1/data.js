/*
    Part 0 数据类型的基础概述
    数据共有以下几种 -> 数值 字符串 布尔值 Null 对象
    对于JavaScript来说有这几种 -> 数值 字符串 布尔值 Undefined Null 对象
*/
var part0 = 1;
console.log(part0);
/*
    Part 0-1 如何确定数据类型
    JavasScript有三个运算符能确定类型
    typeof instanceof Object.prototype.toString
*/
var part0_1_1 = typeof part0;
console.log(part0_1_1);
/* 
    Part 1 数值
    数值简单来说就是数字,有整数和小数
    表示: Int(整数) Floor(小数)
    小知识: JavaScript内部是没有整数的,所以 1 == 1.00 是为True的
*/
var part1_0 = 123;
var part1_0_1 = 123.00;
console.log(part1_0 , part1_0_1);
console.log(part1_0 == part1_0_1)
/*
    Part 1-1 转换为 数值 类型
*/
var part1_1_1 = '123'
part1_1_1 = Number(part1_1_1)
console.log(typeof part1_1_1);
/*
    Part 2 字符串
    字符串就是有零个或者多个字符组成的字符
*/
var part_2_0_1 = 'HelloWorld'
console.log(part_2_0_1)
console.log(typeof part_2_0_1);
/*
    Part 2-1 转换为 字符串类型
*/
var part_2_1_1 = 123;
part_2_1_1 = String(part_2_1_1)
console.log(typeof part_2_1_1);
/*
    Part 2-2 转义
*/
var part_2_2_1 = "123\
345\
567";
console.log(part_2_2_1);
var part_2_2_2 = "123\n456\n789";
console.log(part_2_2_2);
/*
    Part 2-3 字符串插值
*/
console.log("JS:",part_2_2_1);
console.log(`JS:${part_2_2_1}`);
/*
    Part 3 空
    在JavaScript中Undefined Null可以表示为空或者没有
*/
var part_3_0_1 = undefined;
console.log(typeof part_3_0_1);
var part_3_0_2 = null;
console.log(typeof part_3_0_2);
console.log(part_3_0_1 == part_3_0_2);
/*
    Part 4 布尔值
    布尔值代表真或假
*/

/*
    Part 5 对象
    对象可以理解为JSON那种格式(本身就是好趴)或者Python的Dict(字典)
*/
var part_5_0_1 = {
    "123": "456"
};
console.log(typeof part_5_0_1);
console.log(part_5_0_1['123'])
/*
    Part 6 数组
    数组就是一堆数据组成的列表,每个数据都有个编号
*/
var part_6_0_1 = [123,'456',true,{"213":"helloworld"}]
console.log(typeof part_6_0_1);
console.log(part_6_0_1[3]["213"]);

var part_6_0_2 = {"status":0,"content":{"id":"chronostasis","title_localized":{"en":"Chronostasis"},"artist":"黒皇帝","bpm":"196","bpm_base":196,"set":"base","audioTimeSec":134,"side":1,"remote_dl":false,"world_unlock":false,"date":1496188800,"difficulties":[{"ratingClass":0,"chartDesigner":"Kurorak","jacketDesigner":"","rating":3,"ratingReal":3.5,"totalNotes":619},{"ratingClass":1,"chartDesigner":"Kurorak","jacketDesigner":"","rating":7,"ratingReal":7.5,"totalNotes":812},{"ratingClass":2,"chartDesigner":"Kurorak","jacketDesigner":"","rating":9,"ratingReal":9.1,"totalNotes":916}]}}
console.log(part_6_0_2['content']['difficulties'][0]['chartDesigner'])
/*
    Part 7 函数
    函数代表的是一个可以运行流程
*/
function h(){
    console.log('helloworld');
}
console.log(typeof h);
h();