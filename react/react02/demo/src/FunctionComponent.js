import React from  'react'

function FunctionComponent(props){
  console.log(props)
  return(
    <div className='red'>
      这里是函数组件name:{props.name}
    </div>
  )
}
/*
函数组件没有this 没有组件对象 没有生命周期 没有state
只有props 
函数组件只能通过props渲染页面不能做其他操作
*/ 
export default FunctionComponent