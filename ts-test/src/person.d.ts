declare class Person {
    name: string;
    age: number;
    phone: string;
    address: Array<string>;
    step: (name: string) => string;
    show(name: string): void;
    constructor(name: string, age: number);
}
declare let bang: Person;
