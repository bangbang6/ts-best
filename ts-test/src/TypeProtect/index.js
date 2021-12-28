"use strict";
var obj5 = {
    allowInput: 1,
    eat: function () {
        console.log('eat');
    },
    username: "axdaca as",
    age: 2
};
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.trim = function (str) {
        return str.replace(/\s+/g, "");
    };
    return StringUtil;
}());
function processOutput(obj) {
    if ("allowInput" in obj) {
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (typeof value === 'string') {
                console.log('value', StringUtil.trim(value));
            }
            else if (typeof value === 'function') {
                obj[key]();
            }
            else {
                console.log('value', value);
            }
        });
    }
}
processOutput(obj5);
console.log(Object.prototype.toString.call(2));
