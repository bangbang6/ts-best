let [x,y]:readonly [number,...any] = [1,'adasd',23423] as const //rest表示可变元组


//let a:object =1 //报错
let a1:Object = 1  //正确
Object.toString()