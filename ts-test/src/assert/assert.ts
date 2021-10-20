class Parent {
  eat(){

  }
}
class Son extends Parent {
  study(){

  }
}

let obj3 = new Parent()
let obj4 = <Son>obj3 


function swap(a:number,b:number){
  a = a+b
  b = a-b
  a = a-b
  console.log('a',a);
  console.log('b',b);
}
swap(1,3)