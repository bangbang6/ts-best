interface Book {
  ISBN:string,
  name:string,
  price:string,
  count:number
}

type Pick2<T,K extends keyof T>={
  [P in K]:T[P]
}

// Type pickType = {
//   ISBN: string;
//   count: number;
// }
type pickType = Pick2<Book,"ISBN"|"count">  