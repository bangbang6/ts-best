"use strict";
var n = 2;
var str = 'as';
var a2 = {
    'username': "asd",
    "age": 'sad'
};
// type MyRecord<K> = {
//   username: string;
//   age: string;
// }
// let an:MyRecord = {
//   'asdasdas':'sadasd'
// }
var as = ['sadasd', 'sadas'];
//!这两个写法都会报错 因为都找不到sa这个属性  object上面什么属性都没有 更别说sa属性啦
var testO = { username: "wangwu" };
testO['sa'] = 'xzx';
var testO = { username: "wangwu" };
testO['sa'] = 'xzx';
//!也报错 因为Object 虽然有valueof之类的原始方法 但是没有sa属性
var testO = { username: "wangwu" };
testO['sa'] = 'xzx';
var myMap = new Map(); //!第一个是key的类型 第二个是value类型
myMap.set('nang', 'vabnf');
myMap.set(1, 'vabnf'); //报错因为key只能是string类型
