interface Book {
    ISBN: string;
    name: string;
    price: string;
    count: number;
}
declare type Pick2<T, K extends keyof T> = {
    [P in K]: T[P];
};
declare type pickType = Pick2<Book, "ISBN" | "count">;
