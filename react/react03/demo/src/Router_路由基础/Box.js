import React ,{Fragment,Component}from 'react'
import Recommend  from './Recommend'
import  Singer from  './Singer'
import My from  './My'
import  {BrowserRouter,HashRouter,Link,NavLink,Route,Switch,Redirect} from 'react-router-dom'
import './link.css'

function Nofind(){
  return(
    <h1>你的页面打了样</h1>
  )
}
class Hehe extends Component{
  render(){
    console.log(this)
    return(
      <div>
        这里是编程式导航组件
        <button onClick={()=>{
          // this.props.history.push('/recommend')
          // this.props.history.push({pathname:'/my/123/456',state:{us:'网易',ps:"123"}})
          // state传参
          this.props.history.push('/my/123/456?us="网易"&ps="esefrwrwer"')
          // query传参
        }}>goMy</button>
      </div>
    )
  }
}
class Box extends Component{

  render(){
    return(
      <HashRouter>
        <Hehe></Hehe>
      <hr/>
      {/* 控制地之恋改变 */}
        <NavLink  activeClassName='red' to='/recommend' >推荐</NavLink >
        <NavLink  activeClassName='red' to='/singer' >歌手</NavLink >
        <NavLink activeClassName='red' to='/my' >我的</NavLink >
        <NavLink activeClassName='red' to='/hehe' >编程式导航</NavLink >
      {/* 渲染组件 */}
        <Switch>
          <Redirect exact from='/' to='/recommend'></Redirect>
          <Route exact path='/recommend' component={Recommend}></Route>
          <Route exact path='/hehe' component={Hehe}></Route>
          <Route exact path='/recommend/test' render={()=>{
            return(
              <div>这是渲染的函数组件</div>
              )
            }}></Route>
          <Route path='/singer' component={Singer}></Route>
          <Route path='/my/:mid/:hehe' component={My}></Route>
          {/* 404 */}
          <Route component={Nofind}></Route>
        </Switch>
      </HashRouter>

    )
  }
}
/*
正常的组件内部props里是没有路由对象的
但是如果一个组件被 Route 里的  component  render  childern 处理过 该组件的props里就有路由对象
*/ 

export default Box