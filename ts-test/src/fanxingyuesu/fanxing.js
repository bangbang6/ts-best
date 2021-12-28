"use strict";
var container = /** @class */ (function () {
    function container() {
    }
    container.prototype.show = function () {
        return this.name;
    };
    return container;
}());
//let c = new container<string>() //!string不属于object子集 所有不可以传string
var c = new container(); //!string不属于object子集 所有不可以传string
var obs = { username: "bang", age: 10 };
var objs = obs; //!类型断言 也可以不断言 这里是像告诉大家这个类型是Objecy类型子集
var c2 = new container(); //!string不属于object子集 所有不可以传string
