import React ,{Fragment,Component}from 'react'
import Hoc from './LoginHoc'
class My extends Component{

  render(){
    console.log('我的组件',this)
    return(
     <Fragment>
       <h1>这里是我的</h1>
     </Fragment>

    )
  }
}

export default Hoc(My)