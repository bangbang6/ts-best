class Mypromise {
  public resolvefFunc!:(data:any)=>any
  public rejectfFunc!:(data:any)=>any
  constructor(promiseParams:(resolve:(data:any)=>any,reject:(error:any)=>any)=>any){
    this.resolvefFunc = (data:any)=>{
      console.log('data',data);
    }
    this.rejectfFunc = (error:any)=>{
      console.log('error',error);
    }
    promiseParams(this.resolvefFunc,this.rejectfFunc)
  }
}


new Mypromise((resolve:(data:any)=>any,reject:(data:any)=>any)=>{
  resolve('成果')
})