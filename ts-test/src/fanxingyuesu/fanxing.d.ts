declare class container<T extends object> {
    name: T;
    show(): T;
}
declare let c: container<object>;
declare type objtype = {
    username: string;
    age: number;
};
declare let obs: objtype;
declare let objs: object;
declare let c2: container<objtype>;
