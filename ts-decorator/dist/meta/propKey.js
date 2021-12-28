"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var obj = {
    user: 'bang'
};
//!在对象上定义元数据
Reflect.defineMetadata('objectKey', "key-val", obj);
// resd1 true
// resd2 false
// res key-val
console.log('resd1', Reflect.hasMetadata('objectKey', obj));
console.log('resd2', Reflect.hasMetadata('objectKe12y', obj));
var res = Reflect.getMetadata('objectKey', obj);
console.log('res', res);
