import express, { IRouterMatcher, Request, RequestHandler,Response } from 'express'
const app = express()
const router = express.Router()

let tsetfunL:RequestHandler=(req:Request,res:Response)=>{
  console.log('enter');
  res.end('asss')
}
app.use(router)
router.get('/info/:id ',tsetfunL)

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
