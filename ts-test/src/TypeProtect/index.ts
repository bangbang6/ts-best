
interface TestInfer {
  allowInput?:number,
  eat:Function,
  username:string,
  age:number
}

let obj5:TestInfer = {
  allowInput:1,
  eat(){
    console.log('eat');
  },
  username:"axdaca as",
  age:2
}
class StringUtil {
  public static trim(str:string){
    return str.replace(/\s+/g,"")
  }
}
function  processOutput(obj:any) {
  if("allowInput" in obj){
    Object.keys(obj).forEach((key)=>{
      let value = obj[key]
      if(typeof value === 'string'){
        
        console.log('value',StringUtil.trim(value));
      }else if(typeof value ==='function'){
        obj[key]()
      }else{
        console.log('value',value);
      }
    })
  }
}
processOutput(obj5)
console.log(Object.prototype.toString.call(2))