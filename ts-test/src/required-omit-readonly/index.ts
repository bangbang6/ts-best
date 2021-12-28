interface  todo{
  name:string,
  time?:string,
  other?:number
}

// type myTest2 = {
//   name: string;
//   time: string;
//   other: number;
// }
type myTest2 = Required<todo>

// type myTest21 = {
//   readonly name: string;
//   readonly time?: string | undefined;
//   readonly other?: number | undefined;
// }
type myTest21 = Readonly<todo>



