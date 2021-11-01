let mys = {
  username:'bang'
}
type objType = {username:string,age:1}
let t1 = mys as objtype  //!可以相互断言 因为public的属性是子集！

  