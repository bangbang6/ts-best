//!ts可以通过一定的运算返回一个新的类型 所以叫做类型编程 type就像let一样一直获取新的类型变量


//!获取promise<T>的泛型值 
type GetValue<T> = T extends Promise<infer P>?P:never
type promiseType = Promise<number>
type res = GetValue<promiseType> ////!res = any

//实现pop函数
type pop<T extends Array<any>> = T extends [...infer Rest,infer R]? Rest:never

type popResr = pop<[1,2,3]> //!popResr = [1, 2]