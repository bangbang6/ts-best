declare type Button = {
    size: number;
    link: string;
};
declare type Link = {
    href: string;
    title: string;
};
declare type Href = {
    location: string;
    type: string;
};
declare function cross<T extends object, U extends object>(obj1: T, obj2: U): T & U;
declare function cross<T extends object, U extends object, X extends object>(obj1: T, obj2: U, obj3: X): T & U & X;
