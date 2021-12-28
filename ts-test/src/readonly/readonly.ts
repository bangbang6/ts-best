


// const arr5 = [1,2,'se']
// //arr5 = [2,4,'12'] //这样不可以修改
// arr5[0]=3 //这样可以修改 

// const arr6= [2,3,'asd'] as const
// // arr6[0]=1//!这样也不能修改


// function showArr( arr:readonly (string|number) []){ //readonly是在类型上的 不是arr参数前名的
//   console.log(arr)
// }

// showArr(arr6) //as const 的类型必须用readonly来接住




function testRead( readonly num:  number){ //参数如果不是对象就不行

}
function testRead(params:{readonly num:number}) { //!这种可以
  params.num++
}

interface testR{
  readonly name:string
  readonly age:number
}
type testR2 ={
  readonly name:string
  readonly age:number
}

class People {
  readonly bus:string='111'
}
//批量
type Foo = {
  bar: number;
  bas: number;
};

type FooReadonly = Readonly<Foo>;
//!需要注意的是，Readonly 只对它当前修饰的属性有效，并不会对嵌套属性产生影响: 可以修改age.test
interface testR3{
  readonly name:string
  readonly age: {
    test:number
  }
}
export {}