import { FC } from "react";
interface Iprops{
  /**
   * 图片地址
   */
  imgsrc:string,
  des?:string
}
const Logo: FC<Iprops>=(props)=>{
  return <img src={props.imgsrc} alt={props.des}></img>
}
export default Logo