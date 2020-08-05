import React ,{Fragment,Component}from 'react'

class FSK extends Component{

  render(){
    return(
     <Fragment>
        <input type="text" ref='name'/> 
        <button onClick={()=>{
          console.log(this.refs.name.value)
        }}>submit</button>
     </Fragment>

    )
  }
}

export default FSK