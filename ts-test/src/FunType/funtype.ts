type funType = (n:number,str:string)=>any


interface funInterface {
  (n:1,str:string):any,
  (n:2,str:string):any,
  
}

interface text{
  eat:(n:number,str:string)=>any
}
let t:funInterface = function(n:number,str:string){
  if(n===1){
    
  }else if(n===2){
    
  }
}