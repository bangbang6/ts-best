"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
        console.log('父类构造');
    } //!抽象类可以有钩爪函数 但是可以有constructor
    People.prototype.step = function (n) {
        console.log('n', n);
    }; //!也可以有真实的方法
    return People;
}());
var chinesePeople = /** @class */ (function (_super) {
    __extends(chinesePeople, _super);
    function chinesePeople(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        console.log('子类给猴枣');
        return _this;
    }
    chinesePeople.prototype.eat = function () {
        console.log("用叉子吃");
    };
    return chinesePeople;
}(People));
//let p = new People() //!抽象类不能实例 但是可以有构造函数 子类可以调用父类的钩爪函数 子类来初始化实例
var chi = new chinesePeople('bang', 32);
