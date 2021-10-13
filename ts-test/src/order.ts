import OrderDetail from './orderDetail'
class Order {
  orderId:number=0
  date:Date=new Date()
  custname:string='xx'
  phone:string='111'
  orderDetail:Array<OrderDetail>=[]
  price:number|undefined
  constructor( orderId_:number, date_:Date,  custname_:string, phone_:string, orderDetail_:Array<OrderDetail>,price_:number){
    this.orderId=orderId_
    this.date=date_
    this.custname=custname_
    this.phone=phone_
    this.orderDetail = orderDetail_
    //this.price = price_
  }
  getTotal():number{
    return this.price!*2
  }
}
let orderDetail = new OrderDetail(123123,'bang',1,1)
let order = new Order(1,new Date(2011,10,17),'11111','wo',[orderDetail],3)
console.log('order',order);