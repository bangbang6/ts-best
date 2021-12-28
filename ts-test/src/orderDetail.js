"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail = /** @class */ (function () {
    // orderDetailId:number=0
    // productname:string='noproduct'
    // price:number=1
    // count:number=0
    function OrderDetail(orderDetailId, productname, price_, count) {
        this.orderDetailId = orderDetailId;
        this.productname = productname;
        this.price_ = price_;
        this.count = count;
        // this.orderDetailId=orderDetailId_
        // this.productname=productname_
        // this.price=price_
        // this.count=count_
    }
    return OrderDetail;
}());
exports.default = OrderDetail;
