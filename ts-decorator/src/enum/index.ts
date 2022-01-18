class Person {
  constructor(public weight: number, public name: string, public born: string) {

  }
}

interface Dog {
  name: string
  weight: number
}

let x: Dog

x = new Person(120, 'cxk', '1996-12-12') // OK
let aa:Dog = {
  name:'as',
  weight:456
}
let y:Person = aa //!报错


function doSomething():string|number {
  return 1
}
function callMeMaybe(callback: () =>string) {
  callback();
}
callMeMaybe(doSomething) //error.

interface IAnyObject {
  [prop: string]: any
}

function mixin<T extends IAnyObject, U extends IAnyObject>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) {
    (result as T )[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

const x1 = mixin({ a: 'hello' }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const a = x1.a;
const b = x1.b;

//!声明合并
interface a1{
  name:string
}
interface a1{
  num:number
}
let mm:a1 = {
  name:'xx',
  num:1

}


type a22 implements a{

}//!报错 改成class a22即可




type guaji = {
  name:string
}
class aa231 implements guaji{
  name!:string
}

type UserAction =  {
  id: number
  action: 'delete'
  info: object
} |
{
  action: 'create'
  info: object
}
const UserReducer = (userAction: UserAction) => {
  switch (userAction.action) {
    case 'delete':
        console.log(userAction.id);
        break;
    default:
        break;
}
}