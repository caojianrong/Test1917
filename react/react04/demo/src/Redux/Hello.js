import React ,{Fragment,Component}from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import  ActionCreator from './store/actionCreatore'
class Hello extends Component{

  render(){
    console.log(this)
    let {name,age} = this.props
    return(
     <Fragment>
      <h1>你好</h1>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={()=>{
        // ActionCreator.changeAge(999)
          this.props.changeAge(888)
      }
      }>改年龄</button>
     </Fragment>

    )
  }
}
/*
connect 函数返回一个高阶组件    connect 就是一个高阶组件
参数1 mapStateToprops 1.也是一个函数 2.接受全局状态值为参数 3。返回的对象对象会映射props里
*/ 
let mapStateToprops=(state)=>{
  console.log(state)
  // return {hehe:123,xixi:456}
  return state
}
// 参数2 如果不需要刻意不写  mapDispathchToprops 1.也是一个函数 2.接受dispath为参数 3.返还对象也会被映射到props里 
let mapDispathchToprops=(dispatch)=>{
  console.log(dispatch)
  // 可以将actionCreator所有的函数映射到props 而且在调用的时候自动通过dispatch 发送action
   return bindActionCreators(ActionCreator,dispatch)
  // return{
  //   hehe:()=>{
  //      let action=ActionCreator.changeAge(777)
  //      dispatch(action)
  //   }
  // }
}
export default connect(state=>state,mapDispathchToprops)(Hello)