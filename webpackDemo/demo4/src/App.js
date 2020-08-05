import React, { Component } from 'react'
import Test from './component/Test'
import img  from  '../public/1.jpg'
class App extends Component{
  render(){
    return(
      <div>
        <h3>这里是容器</h3>
        <Test></Test>
        <hr/>
        <img src={img} alt=""/>
      </div>
    )
  }
}
export default App