import { EventEmitter } from "testtsevents";
const ee = new EventEmitter()
ee.
function customerDecorator(targetClass:any){
  // let instance= new targetClass('bang')
  console.log('instance.name',targetClass.name);
  console.log('targetClass',targetClass);
}
@customerDecorator
class Customer2 {
    constructor(public name:string){

    }
}

//!第一种定义函数的类型 这里是重载函数的类型
declare interface funcOverload {
  (name:number,age:number):void;
  (name:string,age:number):void

}
//!第二种定义函数的类型 普通的函数类型
type fybc = (name:string,age:number)=>void
//!函数内容 因为是重载函数所以所有的重载前面都得写上
function funcOverload(name:number,age:number):void
function funcOverload(name:string,age:number):void
function funcOverload(name:string | number,age:number){
  if(typeof name === 'string'){
    console.log('string');
  }
}

funcOverload('bang',18)