import React ,{Fragment,Component}from 'react'
import Hoc from  './hoc'
class Hello extends Component{

  render(){
    let {name}=this.props
    return(
     <Fragment>
  <h1>你好:{name}</h1>
     </Fragment>

    )
  }
}

export default Hoc(Hello)