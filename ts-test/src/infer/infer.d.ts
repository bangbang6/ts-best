declare type inferResult<T> = T extends (param: string, m: infer W) => infer P ? P | W : string;
declare type functionType = (str: string, m: string) => number;
declare type result = inferResult<functionType>;
declare type A<T> = T extends Set<infer E> ? E : number;
declare let test: string;
declare type res = A<Set<typeof test>>;
