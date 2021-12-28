"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var router = express_1.default.Router();
var tsetfunL = function (req, res) {
    console.log('enter');
    res.end('asss');
};
app.use(router);
router.get('/info/:id ', tsetfunL);
//  interface IRouterMatcher2<
//     Method extends 'all' | 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head' = any
// > {
//     <
//         Route extends string,
//         P = RouteParameters<Route>,
//         ResBody = any,
//         ReqBody = any,
//     >(
//         // tslint:disable-next-line no-unnecessary-generics (it's used as the default type parameter for P)
//         path: Route,
//         // tslint:disable-next-line no-unnecessary-generics (This generic is meant to be passed explicitly.)
//     ): void;
// }
// let get:IRouterMatcher2 = (path)=>{
// }
// get('food/:id/:prioce')
app.listen(8123);
