"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orderDetail_1 = __importDefault(require("./orderDetail"));
var Order = /** @class */ (function () {
    function Order(orderId_, date_, custname_, phone_, orderDetail_, price_) {
        this.orderId = 0;
        this.date = new Date();
        this.custname = 'xx';
        this.phone = '111';
        this.orderDetail = [];
        this.orderId = orderId_;
        this.date = date_;
        this.custname = custname_;
        this.phone = phone_;
        this.orderDetail = orderDetail_;
        //this.price = price_
    }
    Order.prototype.getTotal = function () {
        return this.price * 2;
    };
    return Order;
}());
var orderDetail = new orderDetail_1.default(123123, 'bang', 1, 1);
var order = new Order(1, new Date(2011, 10, 17), '11111', 'wo', [orderDetail], 3);
console.log('order', order);
