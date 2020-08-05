import React ,{useState}from 'react'

function UseStateDemo(){
  let [age,setAge] = useState(16)
  let [name,setName]= useState('韩梅梅')
  // let [使用的state的值,修改值的方法]= UseState('默认值') 
  return(
    <div>
      <h1>UseStateDemo</h1>
       {age} {name}
      <button onClick={()=>{
        setAge(age+1)
      }}>changeAge</button>
       <button onClick={()=>{
        setName('李雷')
      }}>changeName</button>
    </div>
  )
}
export default UseStateDemo