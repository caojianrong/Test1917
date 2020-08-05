import React ,{Fragment,Component}from 'react'
import store from './store/store'
import  ActionCreator from './store/actionCreatore'
class Hello extends Component{
  componentDidMount(){
     store.subscribe(()=>{
       this.setState({})
     })
  }
  render(){
    let {name,age} = store.getState()
    return(
     <Fragment>
      <h1>你好</h1>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={()=>{
        ActionCreator.changeAge(999)
      }
      }>改年龄</button>
     </Fragment>

    )
  }
}

export default Hello