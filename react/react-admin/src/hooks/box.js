import React,{useState} from 'react'
import UseStateDemo from './UseState'
import UseEffectDemo from './UseEffect'
function Box(){
  let [show,setShow] = useState(true)
  return(
    <div>
      <h1>hook案列</h1>
      {/* <UseStateDemo></UseStateDemo> */}
     {!show|| <UseEffectDemo></UseEffectDemo>}
      <hr/>
      <button onClick={()=>{
        setShow(!show)
      }}>toggle</button>
    </div>
  )
}
export default Box