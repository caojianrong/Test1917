import React ,{Fragment,Component}from 'react'
// class ClassComponent extends React.Component{
  // import './App.css'
class ClassComponent extends Component{
  render(){
    return(
     <Fragment>
        <p className='red'>类组件</p>
        <img src="231" alt=""/>
     </Fragment>

    )
  }
}
// Fragment可以作为跟组件 不会再dom中渲染
export default ClassComponent