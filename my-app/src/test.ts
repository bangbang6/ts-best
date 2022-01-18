
export interface Todo {
  id: number
  name: string
  done: boolean
}
export enum ActionTodoConstants {
  ADD_TODO = 'todo/add',
  TOGGLE_TODO = 'todo/toggle'
}
let id = 0

const addTodo = (name: string) => ({
    payload: {
        todo: {
            done: false,
            id: id++,
            name,
          }
    },
    type: ActionTodoConstants.ADD_TODO,
})
type AddTodoAction = ReturnType<typeof addTodo>





type Props = {
  handleSubmit: (value: string) => void
  children: React.ReactNode
} & Partial<typeof todoInputDefaultProps>

const todoInputDefaultProps = {
  inputSetting: {
      maxlength: 20,
      placeholder: '请输入todo',
  },
  name:'asx'
}
const createPropsGetter = <DP extends object>(defaultProps: DP) => {
  return <P extends Partial<DP>>(props: P) => {
      type PropsExcludingDefaults = Omit<P, keyof DP>
      type RecomposedProps = DP & PropsExcludingDefaults

      return (props as any) as RecomposedProps
  }
}
const text = createPropsGetter(todoInputDefaultProps)
type asd12 = {
  inputSetting: {
    maxlength: number,
    placeholder: string,
},
name?:string
}
type aaa = Partial<asd12>

interface ain  {
  inputSetting?: {
    maxlength: number;
    placeholder: string;
  } | undefined;
  name?: string | undefined;
}
interface testB extends ain{
  inputSetting?: {
    maxlength: number;
    placeholder: string;
  } | undefined;
  
  age:number
}


interface amg {
  name?:string,
  num?:number
}
interface amgchild extends amg{
  sada:string
}
const a:amgchild = {
  sada:'sadfa'
}
interface test{
  name?:string,
  age?:number
}
function testFun<T extends test>(params:T) {
 
  console.log('params.',params.age);
  
}
testFun({})
interface People  {
  id: string
  name: string
  age?: number
  from?: string,
  update:()=>void
}
interface p2 {
  id: string
  name: string,
  asda:string
}
class TestClass {
  constructor(public name: string, public age: number) {}
}

type NullableKeys<T> = {[K in keyof T]:undefined extends T[K]?K:never}[keyof T]
type testU = NullableKeys<People>


type GetFunctionKey<T extends object>= { [K in keyof T]-?:T[K] extends Function?K:never}[keyof T]
type testiii = GetFunctionKey<People>

type GetConstructorType<T extends new (...args:any[])=>any> = T extends new (...args:infer R)=>any?R:never
type sahdoasidh = GetConstructorType<typeof TestClass> //!TestClass不是构造函数类型 typeofTestClass才是构造函数类型


type Elementof<T> = T extends Array<infer R>?R:never
type TTuple = [string, number];
type asdas = Elementof<TTuple>//! string | number


type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type Result = UnionToIntersection<People | p2>;


type testUu<T> = (name:T)=>void extends (...args:infer R)=>void ?R:never 
type funType = (name:string | number)=>void
type mm = testUu<string | number>