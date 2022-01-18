import  React from "react";
interface Iprops{
  handleSubmit:(value:string)=>void
}
interface Istate{
  itemText:string
}
class Todo extends React.Component<Iprops,Istate>{
  private inputRef = React.createRef<HTMLInputElement>()

  constructor(props:Iprops){
    super(props)
    this.state = {
      itemText:""
    }
  }
  updateValue(e:React.ChangeEvent<HTMLInputElement>){
    this.setState({
      itemText:e.target.value
    })
  }
  handleSubmit(e:React.FormEvent<HTMLFormElement>){
    this.props.handleSubmit(this.state.itemText)
  }
  render() {
      return (
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input ref={this.inputRef} value={this.state.itemText} onChange={this.updateValue.bind(this)}></input>
        </form>
      )
  }
}
export default Todo

