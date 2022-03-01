import { inject,App } from 'vue';


function useStore<S>():Store<S>{
  return inject('store') as any
}
function installModule<R>(store:Store<R>,rootState:R,path:string[],moduleWrapper:ModuleWrapper<any,R>){
  let isRoot = !path.length
  if(!isRoot){//!如果不是跟模块
    let parentState:Record<string,any> = getParentState<R>(rootState,path.slice(0,-1))
    parentState[path[path.length-1]]= moduleWrapper.state
  }
  moduleWrapper.forEachChild((child,key)=>{
    installModule(store,rootState,path.concat(key),child)
  })
}
function getParentState<R>(rootState:R,path:string[]){
  return path.reduce((state:any,key:string)=>{
    return state[key]
  },rootState)
}
class Store<S = any>{ //!S表示state类型
  moduleCollection:ModuleCollection<S>
  mutations:MutationTree<S>
  actions:ActionTree<S,S>
  commit:Commit
  dispatch:Dispatch
  constructor(options:StoreOptions<S>){
    console.log(options)
    this.moduleCollection = new ModuleCollection<S>(options)
    let store = this
    let ref = this
    let commit = ref.commit_
    let dispatch = ref.dispatch_
    this.commit=function(type:string,payload?:any){
      if(!this.mutations[type]) console.error('error')
      commit.call(store,type,payload)
    }
    this.dispatch=function(type:string,payload?:any){
      if(!this.actions[type]) console.error('error')

      dispatch.call(store,type,payload)
    }
    let rootState = this.moduleCollection.root.state
    installModule(store,rootState,[],this.moduleCollection.root)
  }
  install(app:App){
    app.provide('store',this) //!把store实例注入到子组件中
  }
  commit_(type:string,payload?:any){
    this.mutations[type](payload)
  }
  dispatch_(type:string,payload?:any){
    this.actions[type](payload)
  }
}
class ModuleWrapper<S,R> {
  children:Record<string,ModuleWrapper<any,R>> //写清楚索引类型和值类型的对象 就要record   any表示state类型不确定
  rawModule:Module<any,R>
  state:S
  namespaced:boolean
  constructor( rawModule_:Module<any,R>){
    this.rawModule = rawModule_
    this.state = rawModule_.state || Object.create(null)
    this.namespaced = rawModule_.namespaced || false

  }
  addChild(key:string,moduleWrapper:ModuleWrapper<any,R>){
    this.children[key] = moduleWrapper
  }
  getChild(key:string){
    return this.children[key]
  }
  forEachChild(fn:childModuleWrapperToKey<R>){
    Object.keys(this.children).forEach(key=>{
      fn(this.children[key],key)
    })
  }
}
type childModuleWrapperToKey<R> = (moduleWrapper:ModuleWrapper<any,R>,key:string)=>any
class ModuleCollection<R>{
  root:ModuleWrapper<any,R>
  constructor(rawRootModule:Module<any,R>){
    this.register([],rawRootModule) //!添加跟模块
  }
  register(path:string[],rawModule:Module<any,R>){
    const newModuleWrapper = new ModuleWrapper<any,R>(rawModule)
    if(path.length === 0){ //根模块
      this.root = newModuleWrapper
    }else{//!添加子模块到父即模块中
      let parentModule = this.get(path.slice(0,-1))
      parentModule.addChild(path[path.length-1],newModuleWrapper)
    }
    if(rawModule.modules){
      let sonModules = rawModule.modules
      Object.keys(sonModules).forEach(key=>{
        this.register(path.concat(key),sonModules[key]) //!path.concat传入的参数数组变长 但是path本身不会变 所以递归不会影响当时的path 
      })
      Util.forEachValue(sonModules,(key:string,module:Module<any,R>)=>{
        this.register(path.concat(key),module)
      })
    }
  }
  get(path:string[]){
    let moduleWrapper = this.root
    return path.reduce((moduleWrapper:ModuleWrapper<any,R>,key:string)=>{
      return moduleWrapper.getChild(key)
    },moduleWrapper)
  }
}
interface StoreOptions<S>  {
  state?:S,
  getters?:GetterTree<S,S>,
  mutations?:MutationTree<S>,
  actions?:ActionTree<S,S>,
  modules?:ModuleTree<S>
}

interface GetterTree<S,R>{ //!S是当前Module的state类型 R是梗state类型
  [key:string]:Getter<S,R>
}

type Getter<S,R> = (state:S,getters:any,rootState:R,rootGetters:any)=>any       //!type也能传入泛型



interface MutationTree<S>{
  [key:string]:Mutation<S>
}

type Mutation<S> = (state:S,payload?:any)=>any


interface  ActionTree<S,R>{
  [key:string]:Action<S,R>
}

type Action<S,R> = (context:ActionContext<S,R>,payload?:any)=>any

interface ActionContext<S,R>{
  dispatch:Dispatch,
  commit:Commit,
  store:S
}

type Commit = (type:string,payload?:any)=>any
type Dispatch = (type:string,payload?:any)=>any
interface ModuleTree<R>{
  [key:string]:Module<any,R>
}
interface Module<S,R>{
  state?:S,
  getters?:GetterTree<S,R>,
  mutations?:MutationTree<S>,
  actions?:ActionTree<S,R>,
  modules?:ModuleTree<R>,
  namespaced?:boolean
}
export function createStore<S>(options:StoreOptions<S>){
  return new Store<S>(options)
}
// createStore({
//   ssas:"xxx",
//   asda:'asd'
// })
// createStore({
//   state:{},
//   getters:{}
  
// })




class Util {
  static forEachValue(obj:Object,fn:Function){
    Object.keys(obj).forEach(key=>{
      fn(key,(obj as any)[key])
    })
  }
}

