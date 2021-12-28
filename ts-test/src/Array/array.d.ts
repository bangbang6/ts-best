interface arrt {
    name: string;
    age: number;
}
declare class ArrayList {
    element: Array<arrt>;
    constructor(element: Array<arrt>);
    get(index: number): arrt;
    show: () => void;
    remove(val: number): number;
    remove(val: arrt): arrt;
}
declare let one: arrt;
declare let two: arrt;
declare let three: arrt;
declare let arr: ArrayList;
