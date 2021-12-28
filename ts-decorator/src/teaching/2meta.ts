import 'reflect-metadata'
class Collection {
  static collection:Collection = new Collection() //单例
  private collectionMap = new Map<string,any>()
  public set(key:string,value:any){
    this.collectionMap.set(key,value)
  }
  public get(key:string){
    return this.collectionMap.get(key)
  }
  private constructor(){

  }
}
//!装饰器执行顺序 1.属性装饰器-》2.方法参数装饰器->3.方法装饰器-》4.类装饰器
function  Inject(key1:string) {
  return (targetClassPrototype:any,key:string)=> {
    let propClass = Reflect.getMetadata("design:type",targetClassPrototype,key) //获取内置元数据 比如属性对应的类型
    console.log(propClass,propClass);
  }
}
function  RequestMethodDecorator(path:string) {
  return (targetClassPrototype:any,methodname:string,dataProps:PropertyDescriptor)=>{
    Reflect.defineMetadata('reqPath',path,targetClassPrototype,methodname) //自定义元数据 k-v对 到原型对象的name属性上

  }
}
function ControllerDecorator<T extends {new (...arg:any):any} >(targetClass:T) {
  console.log('tst',targetClass.prototype); //!{ login: [Function] } 没有enter属性
  
  Object.keys(targetClass.prototype).forEach(name=>{
    const path = Reflect.getMetadata('reqPath',targetClass.prototype,name)
  })
}
@ControllerDecorator
class UserService {
  @RequestMethodDecorator('/login')
  public login(){//!这个在原型上  这种定义转到js中就是 UserService.prototype.login = 'xxx
    console.log('login');
  }
  public enter?:string  //!这个不会在原型上  这种定义转到js中就是 this.enter = 'xxx  不是原型对象种 而是通过子类调用父类构造函数类来复制this.enter = super.enter来继承
  constructor(){
    console.log('enter');
  }
}
class UserController{
  @Inject('userService')
  private userService ?:UserService
}
function  metaDecorator(key:string) {
  return (targetClassPrototype:any,methodname:string,index:number)=>{
    console.log(targetClassPrototype,methodname,index); //metaClass { loginZ: [Function] } loginZ 0   index表示第几个参数
  }
}
function  constrotDecorator(key:string) {
  return (target:any,methodname:string,index:number)=>{
    console.log(target,methodname,index); //[Function: metaClass] undefined 0  和别人不一样的是构造函数装饰器第一个参数不是原型对象 而是类
    let arr = Reflect.getMetadata('design:paramtypes',target)//!拿到所有的参数的类型
    console.log('arr',arr);//!arr [ [Function: UserService] ]
    let userSeriveInstance =new arr[0]()
Collection.collection.set(key,userSeriveInstance)
  }
}
class metaClass {
  loginZ(@metaDecorator('名字') name:UserService){

  }
  constructor(@constrotDecorator('userService') private user?:UserService){

  }
  login(){
   let userServiceInstance =  Collection.collection.get('userService')
   userServiceInstance.login()
  }
}

let ina = new metaClass()
ina.login()