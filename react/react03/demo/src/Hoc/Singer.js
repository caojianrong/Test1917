import React ,{Fragment,Component}from 'react'
import Hoc from './LoginHoc'
class Singer extends Component{

  render(){
    return(
     <Fragment>
       <h1>歌手组件</h1>
     </Fragment>

    )
  }
}

export default Hoc(Singer)