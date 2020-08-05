import React ,{Fragment,Component}from 'react'
import store from './store/store'
import ActoinCreator from  './store/actionCreatore'
console.log(store)
class Bye extends Component{
  componentDidMount(){
    store.subscribe(()=>{
      // subscribe 方法的回调会在全局状态值发生改变时候执行
      console.log('全局状态值变了')
      this.setState({})
    })
  }
  render(){
    let {name,age}=store.getState()

    return(
     <Fragment>
      <h1>再见</h1>
       <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={()=>{
        // 调用actionCreaotre里的方法
        ActoinCreator.changeName('咧咧咧')
        // store.dispatch({type:'CHANGE_NAME',params:'李雷'})
        // 通过store对象下的dispath 方法提交一个对象 （该对象必须要有type，也就是我们说的奏折 actoin） 
        // store会将这个对象提交给老佛爷
      }}>改名</button>
     </Fragment>

    )
  }
}

export default Bye