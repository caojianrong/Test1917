import React ,{Fragment,Component}from 'react'
import {withRouter}from 'react-router-dom'
class CustomNav extends Component{
  constructor(){
    super()
    this.state={
      navs:[{path:'/recommend',name:'推荐'},
      {path:'/singer',name:'歌手'}]
    }
  }
  jump(path){
    this.props.history.push(path)
  }
  render(){
    let {navs} = this.state
    return(
        <ul>
          {navs.map((item,index)=>{
            return(
            <li key={index} onClick={this.jump.bind(this,item.path)}>{item.name}</li>
            )
          })}
        </ul>
    )
  }
}
// withRouter 是一个高阶组件 可以处理一个组件 给被处理的组件添加路由对象
export default withRouter(CustomNav)