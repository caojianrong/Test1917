import React ,{useEffect,useState}from 'react'
// Effect 影响 副作用 网络请求
// useEffect 是一个函数 里面有一个回调 回调会在组件挂载完毕执行 相当于DidMount 
// useEffect 在组件修改完成之后也会执行 相当于 DidUpdate 生命周期
// useEffect 参数二是一个数组 需要执行更新生命周期的变量
// useEffect 第一参数中 可以返回一个函数 该函数式在组件卸载的时候执行  willUnmount
function UseEffectDemo(){
  let [age,setAge] = useState(999)
  useEffect(()=>{
    console.log('组件挂载')
    return()=>{
      console.log('组件卸载')
    }
  },[])
  return(
    <div>
      <h1>UseEffectDemo</h1>
      {age}
      <button onClick={()=>{
        setAge(age+1)
      }}>change</button>
    </div>
  )
}
export default UseEffectDemo