interface arrt{
  name:string,
  age:number
}
class ArrayList {
  constructor(public element:Array<arrt>){

  }
  get(index:number){
    return this.element[index]
  }
  show:()=>void=()=>{
    this.element.forEach(ele=>{
      console.log(ele);
    })
  }
  //重载
  remove(val:number):number

  
  remove(val:arrt):arrt

  remove(val:arrt|number):arrt|number{
    
    this.element = this.element.filter((ele,i)=>{
      if(typeof val === 'number'){
        return val!==i
      }else{
        return ele!==val
      }
    })
    console.log('xxx',this.element);
    return val

  }
}
let one:arrt = {name:'wangjum',age:12}
let two:arrt = {name:'zhaowu',age:12}
let three:arrt = {name:'lisi',age:12}
let arr = new ArrayList([one,two,three])
console.log(arr.remove(one).age);
