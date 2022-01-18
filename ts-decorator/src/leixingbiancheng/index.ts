//!ts可以通过一定的运算返回一个新的类型 所以叫做类型编程 type就像let一样一直获取新的类型变量


//!获取promise<T>的泛型值 
type GetValue<T> = T extends Promise<infer P>?P:never
type promiseType = Promise<number>
type res = GetValue<promiseType> ////!res = any

//实现pop函数
type pop<T extends Array<any>> = T extends [...infer Rest,infer R]? Rest:never

type popResr = pop<[1,2,3]> //!popResr = [1, 2]


//!实现shift
type shift<T extends Array<any> > = T extends [infer R ,...infer Rest]?Rest:never
type shiftRes = shift<[2,3,1]>


//!实现trim
type trimLeft<T extends string> = T extends `${' ' | '\t'}${infer Rest}` ?trimLeft<Rest>:T
type trimRight<T extends string> = T extends `${infer Rest}${' ' | '\t'}` ?trimRight<Rest>:T



type trim = trimLeft<trimRight<'  123  '>>//'123'


//!实现replace
type replace<origin extends string,template extends string,end extends string> = origin extends `${infer Left}${template}${infer Right}`?`${Left}${end}${Right}`:origin


type replaceRes = replace<'my name is bang','bang','zhen'> //"my name is zhen"


//!获取参数类型
type funcType<T extends Function> = T extends (...args:infer R)=>any?R:never
type ft = (name:string,age:number)=>void
type funRes = funcType<ft> //! [name: string, age: number]

//!获取参数返回值
type funType2<T extends Function> = T extends (...args:any)=>infer R?R:never
type ft2 = (name:string,age:number)=>string[]
type funRe2s = funType2<ft2> //!string[]