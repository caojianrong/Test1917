import React,{Fragment,Component} from 'react'
import Hello from  './Hello'
import Bye from  './Bye'
import Welcome from  './Welcome'
class Box extends Component{
  render(){
    return(
     <Fragment>
       <Hello></Hello>
       <Bye></Bye>
       <Welcome></Welcome>
     </Fragment>
    )
  }
}
export default Box