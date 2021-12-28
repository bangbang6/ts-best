declare type type_chara = {
    width: number;
    height: number;
};
declare class Square {
    width: number;
    height: number;
    constructor(width: number, height: number);
    constructor(val: type_chara);
    getArea(): number;
}
declare let sq: Square;
declare let sq2: Square;
