import React ,{Fragment,Component}from 'react'
import Hoc from './hoc'
class Welcome extends Component{
   
  render(){
    let {name}=this.props
    return(
     <Fragment>
  <h1>欢迎:{name}</h1>
     </Fragment>

    )
  }
}

export default Hoc(Welcome)