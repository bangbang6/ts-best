interface Book {
  ISBN:string,
  name:string,
  price:string,
  count:number
}
// type typeOmit = {
//   name: string;
//   price: string;
//   count: number;
// }
type typeOmit = Omit<Book,'ISBN'>


