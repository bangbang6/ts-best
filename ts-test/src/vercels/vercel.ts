class Vercel {
  total:number = 0
  buys:number = 3
  constructor(public brand:string,public vercelNo:string,public days:number,public deposit:number){

  }
  public calcRent(){
    console.log('父类租车')
  }
  public payDespoit(){

  }
  public safeShow(){

  }
}


class Car extends Vercel{
  constructor(brand:string,vercelNo:string, days:number,deposit:number,public type:number){ //独有属性type
    super(brand,vercelNo,days,deposit)//表示父类构造函数
  }
  zuiJia(exp:boolean){
     exp?this.total+=2000:this.total+=0
  }
  public calcRent():number{
    super.calcRent()
   this.total +=  this.days * (this.type === 1?100:200)*this.buys
   return this.total
  }//!重写calcRent 每个类计算租车的方法不一样
}

class Bus extends Vercel {
  constructor(brand:string,vercelNo:string, days:number,deposit:number,public seatNumber:number){ //独有属性type
    super(brand,vercelNo,days,deposit)//表示父类构造函数
  }
  caozai(exp:boolean){
    exp?this.total+=300:this.total+=0
 }
  public calcRent():number{
    super.calcRent()
    return this.days * (this.seatNumber)*this.buys
  }//!重写calcRent 每个类计算租车的方法不一样
}

class Customer {
  checkWeiGui(vercel:Vercel){ //!多态 这个写Vercel可以传入所有子类对象都可以 
    if(vercel instanceof Car){
      vercel.zuiJia(true)
    }else if(vercel instanceof Bus){
      vercel.caozai(true)
    }//!子类独有的方法还是得Instanceof去类型守卫
    console.log(vercel.calcRent())//!重写的方法适合用多态
    
  }

}
let cus = new Customer()
let c1:Car = new Car('大奔','666',2,1000,1)
let b1 = new Bus('66号','666',2,22,12)

cus.checkWeiGui(c1)

console.log('b1.calcRent()',b1.calcRent());