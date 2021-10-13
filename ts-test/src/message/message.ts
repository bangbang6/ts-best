type MessageType = 'image' |  'audio'  | string  //!type就是定义一种类型 类似定义出一个boolean只能是true  false   定义一个三选一的数据类型 如果前两个都不是的话 还可以是string类型 就是消息可以是图片和音频和其他类型就这样
type Message = {
  id:number;
  type:MessageType;
  sendmessage:string
}//!定义一个对象数据类型

let obj:Message = {
  id:1,
  type:'df',
  sendmessage:'xxx'
}
let obj2:Message = {
  id:2,
  type:'image',
  sendmessage:'xxx2'
}

let messages:Array<Message> = [
  obj,obj2
] 
function getMessage(val:number):Message
function getMessage(val:MessageType,count:number):Message[]
function getMessage(val:MessageType | number,count:any=1):Message|undefined|Message[]{
  if(typeof val === 'number'){
    return messages.find(msg=>msg.id===val)
  }else{
    return messages.filter(msg=>msg.type===val).slice(count)
  }
}
//!重要
//let obj1 = getMessage(1)  //无法推导出真正的类型Message 而是三个类型都有 所有不能直接读取sendmessage属性 //!因为编译环境下还没运行ts是不可能知道的 只有运行时候才知道
//!必须进行类型转换 转成Message类型 但是不能乱转 只能转成Message|undefined|Message[] 这三个中的一个 不能转string
let obj1 = (<Message>getMessage(1))
console.log(obj1.sendmessage)
console.log(getMessage('image',2))


//函数重载就直接能找到
console.log(getMessage(1).sendmessage)


