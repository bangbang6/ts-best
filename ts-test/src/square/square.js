"use strict";
var Square = /** @class */ (function () {
    function Square(val, height) {
        this.width = 0;
        this.height = 0;
        if (typeof val === 'number') {
            this.width = val;
            this.height = height;
        }
        else {
            this.width = val.width;
            this.height = val.height;
        }
    }
    Square.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Square;
}());
var sq = new Square(1, 2);
console.log('sq.getArea()', sq.getArea());
var sq2 = new Square({ width: 1, height: 3 });
console.log('sq2.getArea()', sq2.getArea());
