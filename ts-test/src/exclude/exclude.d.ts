declare type test1 = Exclude<'aa' | 'bb' | 'cc' | 'dd', 'aa' | 'bb' | 'cc'>;
declare type test2 = Exclude<'aa' | 'bb' | 'cc' | 'dd', 'aa'>;
