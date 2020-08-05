import React ,{Fragment,Component}from 'react'
import ActionCreator from './store/actionCreator'

class Bye extends Component{
  constructor(){
    super()
    this.state={
      inputVaule:'🙃'
    }
  }
  render(){
   let {inputVaule}=this.state
    return(
     <Fragment>
      <input type="text" value={inputVaule} onChange={(e)=>{
         this.setState({inputVaule:e.target.value})
      }}/> 
      <button onClick={()=>{
        ActionCreator.addlist(inputVaule)
      }}>add</button>
     </Fragment>

    )
  }
}

export default Bye