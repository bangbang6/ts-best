 interface settings {
  name:string,

}


type Compute<A extends any> =
    A extends Function
    ? A
    : { [K in keyof A]: A[K] }

type R1 = Compute<{x: 'x'} & {y: 'y'}>

type Props2 = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };
type r23 = Diff<Props2, NewProps>
type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;
// Expect: { name: string; age: string; visible: boolean; }
type ReplacedProps = Overwrite<Props, NewProps>