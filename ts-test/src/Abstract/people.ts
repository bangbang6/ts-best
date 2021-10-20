abstract class People{
  abstract eat():void //可以有抽象方法 但是必须子类也得实现 抽象函数不可以有具体实现 然后写的是函数签名
  
  step(n:number){
    console.log('n',n);
  }//!也可以有真实的方法
  constructor(public name:string){
    console.log('父类构造')
  }//!抽象类可以有钩爪函数 但是可以有constructor
}


class chinesePeople extends People {
  eat(): void {
    console.log("用叉子吃")
  }
  constructor(name:string,public age:number){
    super(name)
    console.log('子类给猴枣')
  }
}

//let p = new People() //!抽象类不能实例 但是可以有构造函数 子类可以调用父类的钩爪函数 子类来初始化实例

let chi = new chinesePeople('bang',32)
