class MyLocalStorage{
  private static instance:MyLocalStorage|undefined
  setItem(key:string,val:any){
    localStorage.setItem(key,JSON.stringify(val))
  }
  getItem(key:string){
    let value = localStorage.getItem(key)
    return value?JSON.parse(value):null
  }
  private constructor(){
     
  }
  public static getInstance(){
    //!静态函数的this不是类实例 而是这个类 想获取属性 也需要将这个属性变得静态属性用this(类)可以取到
    if(this.instance){
      return this.instance
    }else{
      this.instance = new MyLocalStorage()
      return this.instance
    }
  }
}
let store = MyLocalStorage.getInstance()

store.setItem('login',{username:'xxx',age:1})
console.log(store.getItem('login'));

