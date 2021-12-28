interface todo {
    name: string;
    time?: string;
    other?: number;
}
declare type myTest2 = Required<todo>;
declare type myTest21 = Readonly<todo>;
