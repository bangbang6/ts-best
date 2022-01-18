let count:number = 8
console.log('count',count);
type Merage2<T,P> = {
  [key in keyof T | keyof P]:key extends keyof T & keyof P?T[key] | P[key]:key extends keyof T?T[key]:key extends keyof P?P[key]:never
}
type O1 = {
  name: string
  id: number
}

type O2 = {
  id: string
  from: string
}

type Rw2=Merage2<O1,O2>
type Intersection2<T extends object, U extends object> = Pick<
  T,
  Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>;
type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { age: number; }
type DuplicatedProps = Intersection2<Props, DefaultProps>;

type Props2 = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };
type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;
// Expect: { name: string; age: string; visible: boolean; }
type ReplacedProps = Overwrite<Props, NewProps>
export {} //防止全局count搜索报错
