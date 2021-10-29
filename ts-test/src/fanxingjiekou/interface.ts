//!使用找个List类的必须要用通过add属性是个函数 和n是个数字
interface List {
  add(ele:string):void
  n:number
}
//!add(ele:string):void 就相当于 add:(ele:string)=>void  定义add属性为一个函数 然后这个函数类型是参数string返回值是void  和普通的属性一样 这个属性是函数而已
//!implements 一个接口 我们就必须实现add和添加n属性
class Linklist implements List {
  add(ele: string): void {
    throw new Error("Method not implemented.");
  }
  n!: number;

}

//! 一个接口当作类型 我们就必须实现add和添加n属性
let l:List = {
  n:1,
  add:(ele)=>{
    return ele
  }
} 

interface List2<T> {
  
}

class Test<T extends object> {
  rent(arr:List2<T>){

  }
}


function test3<T>(name:T[]){
  console.log(name[0])
}

function nowUpdate<T>(arr:T[]){
  let newArr = arr.map(item=>{
    if(typeof item === 'string') return item.slice(1)
    else return item
  })
  
  test3(newArr)
}

nowUpdate([1,2,3])


let a!:string|number 
a as string

let b!:string
b as string|number 