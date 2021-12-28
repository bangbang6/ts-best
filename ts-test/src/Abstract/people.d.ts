declare abstract class People {
    name: string;
    abstract eat(): void;
    step(n: number): void;
    constructor(name: string);
}
declare class chinesePeople extends People {
    age: number;
    eat(): void;
    constructor(name: string, age: number);
}
declare let chi: chinesePeople;
