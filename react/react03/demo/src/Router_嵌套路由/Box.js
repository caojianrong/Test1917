import React ,{Fragment,Component}from 'react'
import Recommend  from './Recommend'
import My from  './My'
import  {BrowserRouter,HashRouter,Link,NavLink,Route,Switch,Redirect} from 'react-router-dom'
import './link.css'

function Info(){
  return(
    <div>
      这里是登录后的信息
    </div>
  )
}

function Login(){
  return(
    <div>
      这里登录
    </div>
  )
}
class Box extends Component{

  render(){
    return(
      <HashRouter>
      <hr/>
      {/* 控制地之恋改变 */}
        <NavLink  activeClassName='red' to='/recommend' >推荐</NavLink >
        <NavLink activeClassName='red' to='/my' >我的</NavLink >

      {/* 渲染组件 */}
        <Switch>
          <Redirect exact from='/' to='/recommend'></Redirect>
          
          <Route exact path='/recommend' component={Recommend}></Route>
          {/* <Route path='/my' component={My}></Route> */}

          <Route  path='/my' render={()=>{
            return(
              <Fragment>
                <h3>这里是我的组件</h3>
                 <Route path='/my/info' component={Info}></Route>
                 <Route path='/my/login' component={Login}></Route>
              </Fragment>
            )
          }}></Route>

        </Switch>
      </HashRouter>

    )
  }
}

export default Box