interface Book {
    ISBN: string;
    name: string;
    price: string;
    count: number;
}
declare type typeOmit = Omit<Book, 'ISBN'>;
