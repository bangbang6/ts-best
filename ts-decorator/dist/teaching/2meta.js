"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Collection = /** @class */ (function () {
    function Collection() {
        this.collectionMap = new Map();
    }
    Collection.prototype.set = function (key, value) {
        this.collectionMap.set(key, value);
    };
    Collection.prototype.get = function (key) {
        return this.collectionMap.get(key);
    };
    Collection.collection = new Collection(); //单例
    return Collection;
}());
//!装饰器执行顺序 1.属性装饰器-》2.方法参数装饰器->3.方法装饰器-》4.类装饰器
function Inject(key1) {
    return function (targetClassPrototype, key) {
        var propClass = Reflect.getMetadata("design:type", targetClassPrototype, key); //获取内置元数据 比如属性对应的类型
        console.log(propClass, propClass);
    };
}
function RequestMethodDecorator(path) {
    return function (targetClassPrototype, methodname, dataProps) {
        Reflect.defineMetadata('reqPath', path, targetClassPrototype, methodname); //自定义元数据 k-v对 到原型对象的name属性上
    };
}
function ControllerDecorator(targetClass) {
    console.log('tst', targetClass.prototype); //!{ login: [Function] } 没有enter属性
    Object.keys(targetClass.prototype).forEach(function (name) {
        var path = Reflect.getMetadata('reqPath', targetClass.prototype, name);
    });
}
var UserService = /** @class */ (function () {
    function UserService() {
        console.log('enter');
    }
    UserService.prototype.login = function () {
        console.log('login');
    };
    __decorate([
        RequestMethodDecorator('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserService.prototype, "login", null);
    UserService = __decorate([
        ControllerDecorator,
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
var UserController = /** @class */ (function () {
    function UserController() {
    }
    __decorate([
        Inject('userService'),
        __metadata("design:type", UserService)
    ], UserController.prototype, "userService", void 0);
    return UserController;
}());
function metaDecorator(key) {
    return function (targetClassPrototype, methodname, index) {
        console.log(targetClassPrototype, methodname, index); //metaClass { loginZ: [Function] } loginZ 0   index表示第几个参数
    };
}
function constrotDecorator(key) {
    return function (target, methodname, index) {
        console.log(target, methodname, index); //[Function: metaClass] undefined 0  和别人不一样的是构造函数装饰器第一个参数不是原型对象 而是类
        var arr = Reflect.getMetadata('design:paramtypes', target); //!拿到所有的参数的类型
        console.log('arr', arr); //!arr [ [Function: UserService] ]
        var userSeriveInstance = new arr[0]();
        Collection.collection.set(key, userSeriveInstance);
    };
}
var metaClass = /** @class */ (function () {
    function metaClass(user) {
        this.user = user;
    }
    metaClass.prototype.loginZ = function (name) {
    };
    metaClass.prototype.login = function () {
        var userServiceInstance = Collection.collection.get('userService');
        userServiceInstance.login();
    };
    __decorate([
        __param(0, metaDecorator('名字')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UserService]),
        __metadata("design:returntype", void 0)
    ], metaClass.prototype, "loginZ", null);
    metaClass = __decorate([
        __param(0, constrotDecorator('userService')),
        __metadata("design:paramtypes", [UserService])
    ], metaClass);
    return metaClass;
}());
var ina = new metaClass();
ina.login();
