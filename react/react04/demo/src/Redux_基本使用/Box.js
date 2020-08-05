import React,{Fragment,Component} from 'react'
import Hello from  './Hello'
import Bye from  './Bye'
class Box extends Component{
  render(){
    return(
     <Fragment>
       <Hello></Hello>
       <Bye></Bye>
     </Fragment>
    )
  }
}
export default Box