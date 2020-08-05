import React ,{Fragment,Component}from 'react'

class My extends Component{

  render(){
   
    return(
     <Fragment>
       <h1>登录</h1>
       <button onClick={()=>{
         localStorage.setItem('token',123)
       }}>login</button>
     </Fragment>

    )
  }
}

export default My