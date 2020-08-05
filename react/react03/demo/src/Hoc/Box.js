import React ,{Fragment,Component}from 'react'
import Recommend  from './Recommend'
import  Singer from  './Singer'
import Login from './Login'
import My from  './My'
import  {BrowserRouter,HashRouter,Link,NavLink,Route,Switch,Redirect} from 'react-router-dom'
// import './link.css'
class Box extends Component{

  render(){
    return(
      <HashRouter>

      <hr/>
      {/* 控制地之恋改变 */}
        <NavLink  activeClassName='red' to='/recommend' >推荐</NavLink >
        <NavLink  activeClassName='red' to='/singer' >歌手</NavLink >
        <NavLink activeClassName='red' to='/my' >我的</NavLink >

      {/* 渲染组件 */}
        <Switch>
          <Redirect exact from='/' to='/recommend'></Redirect>
          <Route exact path='/recommend' component={Recommend}></Route>

          <Route path='/singer' component={Singer}></Route>
          <Route path='/my' component={My}></Route>
          <Route path='/login' component={Login}></Route>

        </Switch>
      </HashRouter>

    )
  }
}


export default Box