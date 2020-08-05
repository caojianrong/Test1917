import store from  './store'
export default {
  changeName(params){
    // 创建actions
    let action={
      type:'CHANGE_NAME',
      params:params
    }
    return action
    // 将action发送给老佛爷
    // store.dispatch(action)
  },
  changeAge(params){
    // 返回一个函数 可以接受dispatch
   return (dispatch)=>{
     setTimeout(()=>{
       let action={
         type:'CHANGE_AGE',
         params:params
       }
      //  手动dispatch action
      dispatch(action)
     },1000)
   }
  },
  heheda(){}
}