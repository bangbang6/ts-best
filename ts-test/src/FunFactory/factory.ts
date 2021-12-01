class Bank{
  static str:string='22'
  constructor(public n:number){
    console.log('1',1);
  }
}

type constructorType<T>=new (n:number)=>T
type constructorType2<T>={
  new(n:number):T
}

let constr1:constructorType2<Bank> = Bank
new constr1(2)



function createFactory<T>(constructor:new (n:number)=>T){
  console.log(constructor.name)//表示钩爪函数的名字 所有构造函数都有这个属性
  return new constructor(1)
}


function createFactory2<T>(constructor:{new (n:number):T}){
  return new constructor(1)
  
}

createFactory<Bank>(Bank).n
createFactory2(Bank)