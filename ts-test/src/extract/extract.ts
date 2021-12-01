type test = Extract<string,string | number >




//!会先拿string和string判断发现是true 那么返回string 在拿number去比较 false 最后两个结果string|never联合起来就是string
type tes2t5 = Extract<string|number,string > //也是string类型 


type tes2t = Extract<string|number,string|number|symbol  >

type tes2t3 = Extract<string|number,string|number|symbol  > //string|number
type tes2t4= Extract<string|number|symbol,string|number  > //string|number



type fun1 = (one:number)=>string
type fun2 = (one:number,two:string)=>string|number

type test2323 = Extract<fun1,fun2>   //fun1
type test23232 = Extract<fun2,fun1>   //never


// function cross<T extends object ,U extends object>(obj1:T,obj2:U){

// }
type crossType<T> = Extract<T,object>
function cross<T  ,U >(obj1:crossType<T>,obj2:crossType<U>){

}
cross('sss','vvv') //不是object类型报错