"use strict";
var Bank = /** @class */ (function () {
    function Bank(n) {
        this.n = n;
        console.log('1', 1);
    }
    Bank.str = '22';
    return Bank;
}());
var constr1 = Bank;
new constr1(2);
function createFactory(constructor) {
    console.log(constructor.name); //表示钩爪函数的名字 所有构造函数都有这个属性
    return new constructor(1);
}
function createFactory2(constructor) {
    return new constructor(1);
}
createFactory(Bank).n;
createFactory2(Bank);
