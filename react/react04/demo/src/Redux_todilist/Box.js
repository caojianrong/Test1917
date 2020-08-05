import React,{Fragment,Component} from 'react'
import List from  './List'
import Input from  './Input'
class Box extends Component{
  render(){
    return(
     <Fragment>
       <Input></Input>
       <List></List>
     </Fragment>
    )
  }
}
export default Box