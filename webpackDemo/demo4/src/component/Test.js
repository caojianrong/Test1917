import React from 'react'
import { Component } from 'react';
// import './test.css'
import './test.less'
class Test extends Component{ 
  constructor(){
    super()
    this.state={age:1}
  }
  render(){
    return(
      <div className='hehe'>
        {this.state.age}
        <hr/>
        <button onClick={()=>{
          this.setState({age:16})
        }}>add</button>
      </div>
    )
  }
}
export default Test