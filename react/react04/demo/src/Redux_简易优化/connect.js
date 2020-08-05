import React ,{Component,Fragment}from 'react'
import store from './store/store'
export default(RenderComponent)=>{

class NewComponent extends Component{
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    let data=store.getState()
    return(
      <Fragment>
        <RenderComponent hehe={data}></RenderComponent>
      </Fragment>
    )
  }
}
return   NewComponent
}