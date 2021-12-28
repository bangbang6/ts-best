function customerDecorator(targetClass:any){
  // let instance= new targetClass('bang')
  console.log('instance.named',targetClass.name);
  console.log('targetClass',targetClass);
}
@customerDecorator
class Customer2 {
    constructor(public name:string){

    }
}