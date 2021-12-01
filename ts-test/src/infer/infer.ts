



type inferResult<T> = T extends (param:string,m:infer W)=> infer P?P|W:string

type functionType = (str:string,m:string)=>number

type result = inferResult<functionType>



 type A<T> = T extends Set<infer E>?E:number
let test = "asada"
 type res = A<Set<typeof test> >