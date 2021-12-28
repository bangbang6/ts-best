"use strict";
var ArrayList = /** @class */ (function () {
    function ArrayList(element) {
        var _this = this;
        this.element = element;
        this.show = function () {
            _this.element.forEach(function (ele) {
                console.log(ele);
            });
        };
    }
    ArrayList.prototype.get = function (index) {
        return this.element[index];
    };
    ArrayList.prototype.remove = function (val) {
        this.element = this.element.filter(function (ele, i) {
            if (typeof val === 'number') {
                return val !== i;
            }
            else {
                return ele !== val;
            }
        });
        console.log('xxx', this.element);
        return val;
    };
    return ArrayList;
}());
var one = { name: 'wangjum', age: 12 };
var two = { name: 'zhaowu', age: 12 };
var three = { name: 'lisi', age: 12 };
var arr = new ArrayList([one, two, three]);
console.log(arr.remove(one).age);
