// type obj1 = {username:string,age:number}
// type obj2 = {phone:string,age:number}
// type obj3 = obj1 & obj2  //!obj3应该是 {username:string,age:number，phone:string}
// let jiaocha:obj1&obj2 = { 
//   username:'1',
//   age:2,
//   phone:'4'
// }//!必须有三个 少一个都不是
// jiaocha.age
// jiaocha.username
// jiaocha.phone
// let union:obj1|obj2={
//   username:"1",
//   age:2,
//   phone:'213'
// }
// union.age




type Button= {
  size:number,
  link:string
}
type Link={
  href:string,
  title:string
}
type Href = {
  location:string,
  type:string
}

function cross<T extends object,U extends object>(obj1:T,obj2:U):T&U
function cross<T extends object,U extends object,X extends object>(obj1:T,obj2:U,obj3:X):T&U&X
function cross<T extends object,U extends object,X extends object>(obj1:T,obj2:U,obj3?:X){
 
  let obj: {
    [index:string]:any
  } =  {} 
  let combine = obj as
  Object.keys(obj1).forEach((key:keyof T)=>{
    combine[key] = obj1[key]
  })
  Object.keys(obj2).forEach(key=>{
    combine[key] = obj2[key]
  })
  if(obj3){
    let combine2 = combine as T & U & X
    Object.keys(obj3).forEach((key:string)=>{
      combine2[key] = obj3[key]
    })
    return combine2
  }
  return combine
}

