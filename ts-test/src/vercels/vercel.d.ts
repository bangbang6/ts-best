declare class Vercel {
    brand: string;
    vercelNo: string;
    days: number;
    deposit: number;
    total: number;
    buys: number;
    constructor(brand: string, vercelNo: string, days: number, deposit: number);
    calcRent(): void;
    payDespoit(): void;
    safeShow(): void;
}
declare class Car extends Vercel {
    type: number;
    constructor(brand: string, vercelNo: string, days: number, deposit: number, type: number);
    zuiJia(exp: boolean): void;
    calcRent(): number;
}
declare class Bus extends Vercel {
    seatNumber: number;
    constructor(brand: string, vercelNo: string, days: number, deposit: number, seatNumber: number);
    caozai(exp: boolean): void;
    calcRent(): number;
}
declare class Customer {
    checkWeiGui(vercel: Vercel): void;
}
declare let cus: Customer;
declare let c1: Car;
declare let b1: Bus;
