import React from 'react'
import './App.css'
class App extends React.Component{
  constructor(){
    super() //执行父类的构造函数
    this.state={
      name:'韩梅梅',
      show:true
    }
  }
  toggle=()=>{
    console.log(this)
    this.setState({show:!this.state.show})
  }
  render(){
    console.log(this)
    return(
      <div>
        {/* <button onClick={()=>{
          this.setState({show:!this.state.show})
        }}>toggle</button> */}
        {/* <button onClick={this.toggle.bind(this)}>toggle</button> */}
        <button onClick={this.toggle}>toggle</button>
        🙃{this.state.name}
        {!this.state.show||<div className='red'></div>}
      </div>
    )
  }
}
export default App