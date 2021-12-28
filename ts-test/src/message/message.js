"use strict";
var obj = {
    id: 1,
    type: 'df',
    sendmessage: 'xxx'
};
var obj2 = {
    id: 2,
    type: 'image',
    sendmessage: 'xxx2'
};
var messages = [
    obj, obj2
];
function getMessage(val, count) {
    if (count === void 0) { count = 1; }
    if (typeof val === 'number') {
        return messages.find(function (msg) { return msg.id === val; });
    }
    else {
        return messages.filter(function (msg) { return msg.type === val; }).slice(count);
    }
}
//!重要
//let obj1 = getMessage(1)  //无法推导出真正的类型Message 而是三个类型都有 所有不能直接读取sendmessage属性 //!因为编译环境下还没运行ts是不可能知道的 只有运行时候才知道
//!必须进行类型转换 转成Message类型 但是不能乱转 只能转成Message|undefined|Message[] 这三个中的一个 不能转string
var obj1 = getMessage(1);
console.log(obj1.sendmessage);
console.log(getMessage('image', 2));
//函数重载就直接能找到
console.log(getMessage(1).sendmessage);
