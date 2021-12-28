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
var Vercel = /** @class */ (function () {
    function Vercel(brand, vercelNo, days, deposit) {
        this.brand = brand;
        this.vercelNo = vercelNo;
        this.days = days;
        this.deposit = deposit;
        this.total = 0;
        this.buys = 3;
    }
    Vercel.prototype.calcRent = function () {
        console.log('父类租车');
    };
    Vercel.prototype.payDespoit = function () {
    };
    Vercel.prototype.safeShow = function () {
    };
    return Vercel;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, vercelNo, days, deposit, type) {
        var _this = _super.call(this, brand, vercelNo, days, deposit) //表示父类构造函数
         || this;
        _this.type = type;
        return _this;
    }
    Car.prototype.zuiJia = function (exp) {
        exp ? this.total += 2000 : this.total += 0;
    };
    Car.prototype.calcRent = function () {
        _super.prototype.calcRent.call(this);
        this.total += this.days * (this.type === 1 ? 100 : 200) * this.buys;
        return this.total;
    }; //!重写calcRent 每个类计算租车的方法不一样
    return Car;
}(Vercel));
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(brand, vercelNo, days, deposit, seatNumber) {
        var _this = _super.call(this, brand, vercelNo, days, deposit) //表示父类构造函数
         || this;
        _this.seatNumber = seatNumber;
        return _this;
    }
    Bus.prototype.caozai = function (exp) {
        exp ? this.total += 300 : this.total += 0;
    };
    Bus.prototype.calcRent = function () {
        _super.prototype.calcRent.call(this);
        return this.days * (this.seatNumber) * this.buys;
    }; //!重写calcRent 每个类计算租车的方法不一样
    return Bus;
}(Vercel));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.checkWeiGui = function (vercel) {
        if (vercel instanceof Car) {
            vercel.zuiJia(true);
        }
        else if (vercel instanceof Bus) {
            vercel.caozai(true);
        } //!子类独有的方法还是得Instanceof去类型守卫
        console.log(vercel.calcRent()); //!重写的方法适合用多态
    };
    return Customer;
}());
var cus = new Customer();
var c1 = new Car('大奔', '666', 2, 1000, 1);
var b1 = new Bus('66号', '666', 2, 22, 12);
cus.checkWeiGui(c1);
console.log('b1.calcRent()', b1.calcRent());
