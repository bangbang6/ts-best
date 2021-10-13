class Person {
  public name:string = "noname"
  public age:number = 0
  public phone:string='111'
  public address:Array<string> = ['my','name']
  public step:(name:string)=>string=function(name:string) {
    return '123'
  }
  public show(name:string):void{
    console.log(this.name +'吃'+name);
  }
  
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
}
let bang = new Person('dd',123)
console.log(bang)
bang.show('mm')