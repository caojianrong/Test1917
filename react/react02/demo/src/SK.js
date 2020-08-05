import React ,{Fragment,Component}from 'react'

class FSK extends Component{
  constructor(){
    super()
    this.state={name:'韩梅梅'}
  }
  render(){
    return(
     <Fragment>
        <input type="text" value={this.state.name} onChange={(e)=>{
          console.log(e.target.value)
          this.setState({name:e.target.value})
        }}/> 
        <button onClick={()=>{
          console.log(this.state)
        }}>submit</button>
     </Fragment>

    )
  }
}

export default FSK