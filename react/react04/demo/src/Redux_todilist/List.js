import React ,{Fragment,Component}from 'react'
import store from  './store/store'
import ActionCreator from './store/actionCreator'
class Hello extends Component{
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    let {list}=store.getState()
    return(
     <Fragment>
      <ul>
        {list.map((item,index)=>{
          return (
            <li key={index}>
              {item.matter}
              <button onClick={()=>{
                ActionCreator.dellist(index)
              }}>del</button>
            </li>
          )
        })}
      </ul>
     </Fragment>

    )
  }
}

export default Hello