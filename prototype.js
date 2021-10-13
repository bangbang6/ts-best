

//!其实就是看原型对象值是否改变 有些是原型对象值没改变而是给实例新增啦一个一样的属性但是原型对象上的属性值没变 所有t2访问原型对象没变
//!https://blog.csdn.net/csm0912/article/details/80741922
function test(qq){
  this.qq = qq
}
test.prototype.age =[12]
let t1 = new test(11)
test.prototype.age = [23]
let t2 = new test(11)

console.log(t1.age)//2


