declare class Bank {
    n: number;
    static str: string;
    constructor(n: number);
}
declare type constructorType<T> = new (n: number) => T;
declare type constructorType2<T> = {
    new (n: number): T;
};
declare let constr1: constructorType2<Bank>;
declare function createFactory<T>(constructor: new (n: number) => T): T;
declare function createFactory2<T>(constructor: {
    new (n: number): T;
}): T;
