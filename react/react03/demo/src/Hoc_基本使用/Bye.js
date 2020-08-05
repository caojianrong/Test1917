import React ,{Fragment,Component}from 'react'
import Hoc from './hoc'
class Bye extends Component{

  render(){
    let {name}=this.props
    return(
     <Fragment>
  <h1>再见:{name}</h1>
     </Fragment>

    )
  }
}
let NewComponent=Hoc(Bye)
export default NewComponent