declare class MyLocalStorage {
    private static instance;
    setItem(key: string, val: any): void;
    getItem(key: string): any;
    private constructor();
    static getInstance(): MyLocalStorage;
}
declare let store: MyLocalStorage;
