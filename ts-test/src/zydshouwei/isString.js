"use strict";
function isRef(r) {
    return Math.random() > 0.5;
}
function unRef(r) {
    if (isRef(r)) {
        console.log(r.value); //能自动点出一个value属性
    }
    else {
        console.log(1);
    }
}
unRef({
    value: 3
});
