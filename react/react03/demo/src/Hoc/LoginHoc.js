import React ,{Fragment,Component}from 'react'
import Modal from './Modal'
export default (ParamComponent)=>{
 
  class NewComponent extends Component{
    constructor(){
      super()
      this.state={
        isLogin:true
      }
    }
    componentDidMount(){
      if(!localStorage.getItem('token')){
        this.setState({isLogin:false})
        // this.props.history.replace('/login')
      }
    }
    render(){
      let {isLogin}=this.state
      return(
        <Fragment>
            {isLogin?<ParamComponent></ParamComponent>:<Modal></Modal>}
        </Fragment>
      )
    }
  }
  return NewComponent
}