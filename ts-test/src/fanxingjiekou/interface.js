"use strict";
//!add(ele:string):void 就相当于 add:(ele:string)=>void  定义add属性为一个函数 然后这个函数类型是参数string返回值是void  和普通的属性一样 这个属性是函数而已
//!implements 一个接口 我们就必须实现add和添加n属性
var Linklist = /** @class */ (function () {
    function Linklist() {
    }
    Linklist.prototype.add = function (ele) {
        throw new Error("Method not implemented.");
    };
    return Linklist;
}());
//! 一个接口当作类型 我们就必须实现add和添加n属性
var l = {
    n: 1,
    add: function (ele) {
        return ele;
    }
};
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.rent = function (arr) {
    };
    return Test;
}());
function test3(name) {
    console.log(name[0]);
}
function nowUpdate(arr) {
    var newArr = arr.map(function (item) {
        if (typeof item === 'string')
            return item.slice(1);
        else
            return item;
    });
    test3(newArr);
}
nowUpdate([1, 2, 3]);
var a;
a;
var b;
b;
