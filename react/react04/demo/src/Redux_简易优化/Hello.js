import React ,{Fragment,Component}from 'react'
import connect from  './connect'
import  ActionCreator from './store/actionCreatore'
class Hello extends Component{

  render(){
   console.log(this)
   let {name,age}=this.props.hehe
    return(
     <Fragment>
      <h1>你好</h1>
      <p>name:{name}</p>
      <p>age:{age.test}</p>
      <button onClick={()=>{
        ActionCreator.changeAge(999)
      }
      }>改年龄</button>
     </Fragment>

    )
  }
}

export default connect(Hello)