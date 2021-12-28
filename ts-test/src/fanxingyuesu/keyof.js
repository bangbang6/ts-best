"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = /** @class */ (function () {
    function People(detailArr, key) {
        this.detailArr = detailArr;
        this.key = key;
    }
    People.prototype.setVal = function (val) {
        this.detailArr[this.key] = val;
    };
    People.prototype.getVal = function () {
        return this.detailArr[this.key];
    };
    return People;
}());
var p = new People({ username: "bang", age: 10 }, "username");
console.log(p.getVal());
p.setVal('liao');
console.log(p.getVal());
var People2 = /** @class */ (function () {
    function People2(detailArr, key) {
        this.detailArr = detailArr;
        this.key = key;
    }
    People2.prototype.setVal = function (val) {
        this.detailArr[this.key] = val;
    };
    People2.prototype.getVal = function () {
        return this.detailArr;
    };
    return People2;
}());
var p2 = new People({ username: "bang", age: 10 }, "username");
console.log(p2.getVal().username);
p2.setVal('liao');
console.log(p2.getVal());
