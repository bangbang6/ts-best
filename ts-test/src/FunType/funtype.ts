type funType = (n:number,str:string)=>any


type funInterface ={
  (str:string,n:1):any,
  (str:string,n:2):any,
  
}

interface text{
  eat:(n:number,str:string)=>any
}
let t:funInterface = function(str:string,n:number=1){
  if(n===1){
    console.log('test');
  }else if(n===2){
    
  }
}
t('22',1)