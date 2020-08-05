import React,{Fragment,Component} from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Recommend from './Recommend'
import Singer from './Singer'
import CustomNav from  './CustomNav'
class Box extends Component{
  render(){
    return(
      <BrowserRouter>
        {/* 导航 */}
        <CustomNav></CustomNav>
        {/* <Route component={CustomNav}></Route> */}
        {/* 组件 */}
        <Switch>
          <Redirect exact from='/' to='/recommend'></Redirect>
          <Route path='/recommend' component={Recommend}></Route>
          <Route path='/singer' component={Singer}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Box