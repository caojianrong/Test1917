import store from  './store'
export default {
  changeName(params){
    // 创建actions
    let action={
      type:'CHANGE_NAME',
      params:params
    }
    // 将action发送给老佛爷
    store.dispatch(action)
  },
  changeAge(params){
    let action={
      type:'CHANGE_AGE',
      params:params
    }
    store.dispatch(action)
  }
}