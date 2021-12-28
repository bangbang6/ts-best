interface Ref {
    value: any;
}
declare function isRef(r: any): r is Ref;
declare function unRef(r: any): void;
