declare type oneAntType = keyof any;
declare type oneType<K> = K extends keyof any ? K : never;
declare type mt = oneType<4>;
declare let n: number;
declare type mt2 = oneType<'abc'>;
declare let str: string;
declare type mt4 = oneType<typeof str>;
declare type MyRecord = {
    [P in 'username' | 'age']: string;
};
interface MyRecord2 {
    [P: string | number]: string;
}
declare let a2: MyRecord;
declare let as: MyRecord;
declare let testO: {
    username: string;
};
declare let testO: object;
declare let testO: Object;
declare let myMap: Map<string, string>;
interface Book {
    ISBN: string;
    name: string;
    price: string;
    count: number;
}
