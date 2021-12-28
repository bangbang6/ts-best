declare class Mypromise {
    resolvefFunc: (data: any) => any;
    rejectfFunc: (data: any) => any;
    constructor(promiseParams: (resolve: (data: any) => any, reject: (error: any) => any) => any);
}
