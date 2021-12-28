"use strict";
var Mypromise = /** @class */ (function () {
    function Mypromise(promiseParams) {
        this.resolvefFunc = function (data) {
            console.log('data', data);
        };
        this.rejectfFunc = function (error) {
            console.log('error', error);
        };
        promiseParams(this.resolvefFunc, this.rejectfFunc);
    }
    return Mypromise;
}());
new Mypromise(function (resolve, reject) {
    resolve('成果');
});
