import React ,{Fragment,Component}from 'react'
import  './modal.css'
import {withRouter} from 'react-router-dom'
class Modal extends Component{

  render(){
   
    return(
     <div className='modal'>
       <h1>登录超时请重新登录</h1>
       <button onClick={()=>{
        this.props.history.replace('/login')
       }}>login</button>
     </div>

    )
  }
}

export default withRouter(Modal)