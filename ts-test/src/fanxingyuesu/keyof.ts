class People<T extends object,K extends keyof T>{
  
  constructor(public detailArr:T,public key:K){

  }
  setVal(val:T[K]){
    this.detailArr[this.key] = val
  }
  getVal(){
    return this.detailArr[this.key]
  }
}
let  p = new People<{username:string,age:number},"username">({username:"bang",age:10},"username")
console.log(p.getVal())
p.setVal('liao')
console.log(p.getVal())

export {}


class People2<T extends any,K extends any>{
  
  constructor(public detailArr:any,public key:any){

  }
  setVal(val:any){
    this.detailArr[this.key] = val
  }
  getVal(){
    return this.detailArr
  }
}
let  p2 = new People<{username:string,age:number},"username">({username:"bang",age:10},"username")
console.log((p2.getVal()as any).username)
p2.setVal('liao')
console.log(p2.getVal())

export {}