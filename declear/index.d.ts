declare  function add(params:number):number  


declare namespace Jquery{
  export function $(str:string):void
  export function $(str:number):void //!export 出去的可以重名
  export namespace ${
    function ajax(url:string):void
  }
}

declare  module "JqueryModule"{//!module好处就是可以不用写Jquery
  namespace ${
    function ajax(url:string):void
    
  }
  export default $
}