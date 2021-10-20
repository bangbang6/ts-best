type type_chara ={
  width:number
  height:number
}
class Square {
  width:number=0
  height:number=0
  constructor(width:number,height:number)
  constructor(val:type_chara)
  constructor(val:number|type_chara,height?:number){
    if(typeof val === 'number'){
      this.width = val
      this.height = height!;
    }else{
      this.width = val.width
      this.height = val.height
    }
  }
  getArea(){
    return this.width * this.height
  }
}

let sq = new Square(1,2)
console.log('sq.getArea()',sq.getArea());
let sq2 = new Square({width:1,height:3})
console.log('sq2.getArea()',sq2.getArea());