"use strict";
// const arr5 = [1,2,'se']
// //arr5 = [2,4,'12'] //这样不可以修改
// arr5[0]=3 //这样可以修改 
Object.defineProperty(exports, "__esModule", { value: true });
// const arr6= [2,3,'asd'] as const
// // arr6[0]=1//!这样也不能修改
// function showArr( arr:readonly (string|number) []){ //readonly是在类型上的 不是arr参数前名的
//   console.log(arr)
// }
// showArr(arr6) //as const 的类型必须用readonly来接住
function testRead(num) {
}
function testRead(params) {
    params.num++;
}
var People = /** @class */ (function () {
    function People() {
        this.bus = '111';
    }
    return People;
}());
