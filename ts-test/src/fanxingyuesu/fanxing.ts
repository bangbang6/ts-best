class container<T extends object>{ //!可以是object类型也可以是他子集
  name!:T
  show(){
    return this.name
  }
}


//let c = new container<string>() //!string不属于object子集 所有不可以传string
let c = new container<object>() //!string不属于object子集 所有不可以传string


type objtype = {username:string,age:number}
let obs:objtype = {username:"bang",age:10}
let objs= obs as object //!类型断言 也可以不断言 这里是像告诉大家这个类型是Objecy类型子集
let c2 = new container<objtype>() //!string不属于object子集 所有不可以传string
