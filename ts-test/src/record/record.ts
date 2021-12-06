type oneAntType = keyof any //!string|number|symbol

type oneType<K> = K extends keyof any ? K:never

type mt = oneType<4>  //返回4 因为4是一种类型且extends number是true
let n = 2
//type mt23= oneType<n>  //!报错 因为这是个对象 而不是个类型
type mt2 = oneType<'abc'>  //返回'abv 因为4是一种类型且extends number是true
let str:string = 'as'
//type mt4 = oneType<str>  //!报错 因为这是个对象 而不是个类型
type mt4 = oneType<typeof str>  //返回string



type MyRecord = {
  [P in number] :string
}
// type MyRecord<K> = {
//   username: string;
//   age: string;
// }

// let an:MyRecord = {
//   'asdasdas':'sadasd'
// }

let as:MyRecord = ['sadasd','sadas']


//!这两个写法都会报错 因为都找不到sa这个属性  object上面什么属性都没有 更别说sa属性啦
let testO = {username:"wangwu"}
testO['sa'] = 'xzx'

let testO:object = {username:"wangwu"}
testO['sa'] = 'xzx'
//!也报错 因为Object 虽然有valueof之类的原始方法 但是没有sa属性
let testO:Object = {username:"wangwu"}
testO['sa'] = 'xzx'


let myMap = new Map<string,string>()  //!第一个是key的类型 第二个是value类型
myMap.set('nang','vabnf')
myMap.set(1,'vabnf') //报错因为key只能是string类型