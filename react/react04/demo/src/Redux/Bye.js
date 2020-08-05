import React ,{Fragment,Component}from 'react'
import {connect} from 'react-redux'
import ActoinCreator from  './store/actionCreatore'
import {bindActionCreators} from 'redux'
class Bye extends Component{
  render(){
    let {name,age}=this.props
    return(
     <Fragment>
      <h1>再见</h1>
       <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={()=>{
        // 调用actionCreaotre里的方法
        // ActoinCreator.changeName('咧咧咧')
        this.props.changeName('呵呵哒')
        // store.dispatch({type:'CHANGE_NAME',params:'李雷'})
        // 通过store对象下的dispath 方法提交一个对象 （该对象必须要有type，也就是我们说的奏折 actoin） 
        // store会将这个对象提交给老佛爷
      }}>改名</button>
     </Fragment>

    )
  }
}

export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActoinCreator,dispatch)
})(Bye)