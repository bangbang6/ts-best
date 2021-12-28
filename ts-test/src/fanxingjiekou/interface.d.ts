interface List {
    add(ele: string): void;
    n: number;
}
declare class Linklist implements List {
    add(ele: string): void;
    n: number;
}
declare let l: List;
interface List2<T> {
}
declare class Test<T extends object> {
    rent(arr: List2<T>): void;
}
declare function test3<T>(name: T[]): void;
declare function nowUpdate<T>(arr: T[]): void;
declare let a: string | number;
declare let b: string;
