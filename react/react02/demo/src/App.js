import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import  FSK from  './FSK'
import  SK from  './SK'
class App extends React.Component{

  render(){

    return(
      <div>
        <ClassComponent></ClassComponent>
        <FunctionComponent name='hehe'></FunctionComponent>
        <hr/>
        <FSK></FSK>
        <hr/>
        <SK></SK>
      </div>
    )
  }
}
export default App