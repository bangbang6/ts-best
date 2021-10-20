function Parent(name){
  this.name = name
}
Parent.prototype.cname = 'parent的protytpe'
function Son(age,name) {
  //!在父构造函数中给子类实例添加属性
  Parent.call(this,name) //扩展s1这个对象上的属性 本来只有age一个属性 现在多一个name属性
    this.age  =age
}
function _extends(parent,son){
  function middle(){
    this.constructor = son //this就是middle实例就是son.prototype
  }
  
  middle.prototype = parent.prototype
  return new middle()
  // let middle = {}
  // let newMid = Object.setPrototypeOf(middle,parent.prototype) //这句话就是一个代码 middle.__proto__ = parent.prototype 给第一个对象加一个__proto__属性
  // return newMid
}
Son.prototype= Object.create(Parent.prototype)
Son.prototype.constructor = Son
//Son.prototype=_extends(Parent,Son)
let s1 = new Son(1,'bang')
console.log(s1)


// function test(name){
//   this.name = name
// }
// const obj = {
//   age:1
// }
// console.log('obj',obj); //只有age
// test.call(obj,'bang')
// console.log('obj',obj);//有·age和name 因test函数里面给Obj对象加拉一个name
