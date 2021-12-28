declare type funType = (n: number, str: string) => any;
declare type funInterface = {
    (str: string, n: 1): any;
    (str: string, n: 2): any;
};
interface text {
    eat: (n: number, str: string) => any;
}
declare let t: funInterface;
